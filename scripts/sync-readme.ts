#!/usr/bin/env bun
/**
 * Sync README.md plugin/skill tables from marketplace.json and skill frontmatter.
 *
 * Usage:
 *   bun run scripts/sync-readme.ts          # update README.md + SKILLS.md in place
 *   bun run scripts/sync-readme.ts --check  # exit 1 if files are stale
 */

import { readFileSync, writeFileSync, readdirSync, existsSync } from "fs";
import { join, resolve } from "path";

const ROOT = resolve(new URL("..", import.meta.url).pathname);
const MARKETPLACE_PATH = join(ROOT, ".claude-plugin", "marketplace.json");
const README_PATH = join(ROOT, "README.md");
const SKILLS_MD_PATH = join(ROOT, "SKILLS.md");
const SKILLS_DIR = join(ROOT, "skills");
const COMMUNITY_SKILLS_DIR = join(ROOT, "community-skills");

const CHECK_MODE = process.argv.includes("--check");

// ── Types ──────────────────────────────────────────────────────────────

interface Plugin {
  name: string;
  description: string;
  tags: string[];
  homepage: string;
}

interface Skill {
  name: string;
  description: string;
  dirName: string;
}

interface CommunitySkill extends Skill {
  author: string;
  source: string;
}

// ── Tag → display category mapping ─────────────────────────────────────

const TAG_TO_CATEGORY: Record<string, string> = {
  integration: "Integrations",
  "dev-tools": "Developer Tools",
  workflow: "Workflow",
  knowledge: "Knowledge & Context",
  methodology: "Knowledge & Context",
  search: "Search & Discovery",
};

const CATEGORY_ORDER = [
  "Integrations",
  "Developer Tools",
  "Workflow",
  "Knowledge & Context",
  "Search & Discovery",
];

// ── Readers ────────────────────────────────────────────────────────────

function readMarketplaceJson(): Plugin[] {
  const raw = JSON.parse(readFileSync(MARKETPLACE_PATH, "utf-8"));
  return raw.plugins.map((p: any) => ({
    name: p.name,
    description: p.description,
    tags: p.tags ?? [],
    homepage: p.homepage,
  }));
}

function scanSkillDir(dir: string): Array<{ dirName: string; frontmatter: Record<string, string> }> {
  if (!existsSync(dir)) return [];

  return readdirSync(dir, { withFileTypes: true })
    .filter((d) => d.isDirectory())
    .map((d) => d.name)
    .sort()
    .flatMap((dirName) => {
      const skillPath = join(dir, dirName, "SKILL.md");
      if (!existsSync(skillPath)) return [];
      const frontmatter = parseFrontmatter(readFileSync(skillPath, "utf-8"));
      if (!frontmatter.name || !frontmatter.description) return [];
      return [{ dirName, frontmatter }];
    });
}

function readSkillFrontmatter(): Skill[] {
  return scanSkillDir(SKILLS_DIR).map(({ dirName, frontmatter }) => ({
    name: frontmatter.name,
    description: frontmatter.description,
    dirName,
  }));
}

function readCommunitySkillFrontmatter(): CommunitySkill[] {
  return scanSkillDir(COMMUNITY_SKILLS_DIR).map(({ dirName, frontmatter }) => ({
    name: frontmatter.name,
    description: frontmatter.description,
    dirName,
    author: frontmatter.author ?? "Unknown",
    source: frontmatter.source ?? "",
  }));
}

function parseFrontmatter(content: string): Record<string, string> {
  const result: Record<string, string> = {};
  const match = content.match(/^---\n([\s\S]*?)\n---/);
  if (!match) return result;

  for (const line of match[1].split("\n")) {
    const idx = line.indexOf(":");
    if (idx === -1) continue;
    const key = line.slice(0, idx).trim();
    let value = line.slice(idx + 1).trim();
    // Strip surrounding quotes
    if (
      (value.startsWith('"') && value.endsWith('"')) ||
      (value.startsWith("'") && value.endsWith("'"))
    ) {
      value = value.slice(1, -1);
    }
    result[key] = value;
  }
  return result;
}

// ── Generators ─────────────────────────────────────────────────────────

function firstSentence(text: string): string {
  const match = text.match(/^(.+?[.!?])(?:\s|$)/);
  return match ? match[1] : text;
}

function generatePluginSection(plugins: Plugin[]): string {
  // Group by primary category (first tag)
  const groups = new Map<string, Plugin[]>();
  for (const p of plugins) {
    const tag = p.tags[0] ?? "other";
    const category = TAG_TO_CATEGORY[tag] ?? tag;
    if (!groups.has(category)) groups.set(category, []);
    groups.get(category)!.push(p);
  }

  // Warn about unmapped categories so plugins never silently vanish
  const unmapped = [...groups.keys()].filter((c) => !CATEGORY_ORDER.includes(c));
  if (unmapped.length > 0) {
    console.error(
      `Warning: plugins have unmapped categories: ${unmapped.join(", ")}. Update TAG_TO_CATEGORY / CATEGORY_ORDER.`,
    );
  }

  // Render ordered categories, then any unmapped ones at the end
  const allCategories = [...CATEGORY_ORDER, ...unmapped];
  const lines: string[] = [];
  for (const cat of allCategories) {
    const group = groups.get(cat);
    if (!group || group.length === 0) continue;

    lines.push(`### ${cat}`);
    lines.push("");
    lines.push("| Plugin | Description |");
    lines.push("|--------|-------------|");
    for (const p of group) {
      lines.push(`| [${p.name}](${p.homepage}) | ${p.description} |`);
    }
    lines.push("");
  }

  // Remove trailing blank line
  if (lines.length > 0 && lines[lines.length - 1] === "") {
    lines.pop();
  }
  return lines.join("\n");
}

function generateSkillSection(skills: Skill[]): string {
  const lines: string[] = [];
  lines.push("| Skill | Description |");
  lines.push("|-------|-------------|");
  for (const s of skills) {
    const desc = firstSentence(s.description);
    lines.push(
      `| [${s.name}](skills/${s.dirName}/SKILL.md) | ${desc} |`,
    );
  }
  return lines.join("\n");
}

function generateCommunitySkillSection(skills: CommunitySkill[]): string {
  const lines: string[] = [];
  lines.push("| Skill | Description | Author |");
  lines.push("|-------|-------------|--------|");
  for (const s of skills) {
    const desc = firstSentence(s.description);
    const authorLink = s.source
      ? `[${s.author}](${s.source})`
      : s.author;
    lines.push(
      `| [${s.name}](community-skills/${s.dirName}/SKILL.md) | ${desc} | ${authorLink} |`,
    );
  }
  return lines.join("\n");
}

function generateSkillsPage(skills: Skill[], communitySkills: CommunitySkill[]): string {
  const lines: string[] = [];
  lines.push("<!-- AUTO-GENERATED — do not edit manually. Run: bun run sync-readme -->");
  lines.push("");
  lines.push("# Marketplace Skills");
  lines.push("");
  lines.push(
    "Skills bundled with this marketplace. Install the marketplace to make them available:",
  );
  lines.push("");
  lines.push("```bash");
  lines.push("/plugin marketplace add pwarnock/pwarnock-cc-plugins");
  lines.push("```");
  lines.push("");

  for (const s of skills) {
    lines.push(`## ${s.name}`);
    lines.push("");
    lines.push(`> ${firstSentence(s.description)}`);
    lines.push("");
    lines.push(`[Full skill →](skills/${s.dirName}/SKILL.md)`);
    lines.push("");
  }

  if (communitySkills.length > 0) {
    lines.push("# Community Skills");
    lines.push("");
    lines.push("Curated from the community — not authored here. See individual skills for attribution.");
    lines.push("");

    for (const s of communitySkills) {
      const authorLink = s.source
        ? `[${s.author}](${s.source})`
        : s.author;
      lines.push(`## ${s.name}`);
      lines.push("");
      lines.push(`> ${firstSentence(s.description)}`);
      lines.push(`>`);
      lines.push(`> *By ${authorLink}*`);
      lines.push("");
      lines.push(`[Full skill →](community-skills/${s.dirName}/SKILL.md)`);
      lines.push("");
    }
  }

  return lines.join("\n");
}

// ── Section updater ────────────────────────────────────────────────────

function updateFileSection(
  content: string,
  startMarker: string,
  endMarker: string,
  newInner: string,
): string {
  const startIdx = content.indexOf(startMarker);
  const endIdx = content.indexOf(endMarker);

  if (startIdx === -1 || endIdx === -1) {
    throw new Error(
      `Markers not found: ${startMarker} / ${endMarker}`,
    );
  }

  const before = content.slice(0, startIdx + startMarker.length);
  const after = content.slice(endIdx);

  return `${before}\n${newInner}\n${after}`;
}

// ── Main ───────────────────────────────────────────────────────────────

function main() {
  const plugins = readMarketplaceJson();
  const skills = readSkillFrontmatter();
  const communitySkills = readCommunitySkillFrontmatter();

  const pluginMd = generatePluginSection(plugins);
  const skillTableMd = generateSkillSection(skills);
  const communitySkillTableMd = generateCommunitySkillSection(communitySkills);
  const skillsPageMd = generateSkillsPage(skills, communitySkills);

  // Update README.md
  let readme = readFileSync(README_PATH, "utf-8");
  readme = updateFileSection(readme, "<!-- PLUGINS:START -->", "<!-- PLUGINS:END -->", pluginMd);
  readme = updateFileSection(readme, "<!-- SKILLS:START -->", "<!-- SKILLS:END -->", skillTableMd);
  readme = updateFileSection(readme, "<!-- COMMUNITY-SKILLS:START -->", "<!-- COMMUNITY-SKILLS:END -->", communitySkillTableMd);

  if (CHECK_MODE) {
    const currentReadme = readFileSync(README_PATH, "utf-8");
    const currentSkills = existsSync(SKILLS_MD_PATH)
      ? readFileSync(SKILLS_MD_PATH, "utf-8")
      : "";

    let stale = false;
    if (currentReadme !== readme) {
      console.error("README.md is out of sync with marketplace.json / skills.");
      stale = true;
    }
    const expectedSkills = skillsPageMd.endsWith("\n") ? skillsPageMd : skillsPageMd + "\n";
    if (currentSkills !== expectedSkills) {
      console.error("SKILLS.md is out of sync with skills/ directory.");
      stale = true;
    }
    if (stale) {
      console.error("Run: bun run sync-readme");
      process.exit(1);
    }
    console.log("README.md and SKILLS.md are up to date.");
    process.exit(0);
  }

  writeFileSync(README_PATH, readme);
  console.log("Updated README.md");

  writeFileSync(SKILLS_MD_PATH, skillsPageMd.endsWith("\n") ? skillsPageMd : skillsPageMd + "\n");
  console.log("Generated SKILLS.md");
}

main();
