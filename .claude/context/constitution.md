# Project Constitution

> This is the project's core context document — loaded every session. Keep it concise, accurate, and current. When in doubt, link to specs/ rather than inlining details.

## 1. Project Objectives

- **Purpose**: Curate and publish open-source skills and plugins for AI coding agents across Copilot CLI, Claude Code, and Skills.sh.
- **Users**: Open-source contributors, skill authors, and adopters installing skills from the repo or marketplace.
- **Key outcomes**: Adoption, cross-platform compatibility, and low-friction discovery/install/update flows.

## 2. Technology Stack

| Layer | Technology | Version |
|-------|-----------|---------|
| Language | TypeScript (run via Bun) + Markdown | |
| Runtime | Bun | |
| Framework | N/A (docs/skills repository) | |
| Database | N/A | |
| Package Manager | Bun | |
| Testing | N/A (no automated test suite configured) | |

## 3. Conventions & Standards

- **Naming**: Skill directories and slugs are kebab-case; beads issue IDs use `mkt-*`; docs and generated assets use descriptive filenames.
- **Imports**: Keep tooling imports relative; avoid introducing path aliases unless the repo standardizes them everywhere.
- **Error handling**: Fail fast in scripts and surface validation errors; don’t swallow malformed manifests or sync failures.
- **State management**: Treat markdown/json manifests as source of truth; regenerate indexes and derived files from source instead of hand-editing outputs.
- **Code style**: Keep Markdown frontmatter valid; preserve generated sections; prefer concise prose and stable headings.

## 4. Build & Run Commands

```bash
# Install dependencies
bun install

# Development
# Not detected — update when established
bun run dev

# Build
# Not detected — update when established
bun run build

# Test
# Not detected — update when established
bun test

# Lint
# Not detected — update when established
bun run lint

# Type check
# Not detected — update when established
bun run typecheck
```

## 5. Architectural Summary

This repository is a curated skills and plugin ecosystem. `skills/` contains the first-party skill bundles, while `community-skills/` captures shared or contributed skill content. `docs/` carries roadmaps, guides, and reference material, and `scripts/` is where automation belongs for sync and generation tasks. `.claude-plugin/` and `.github/` hold packaging and release automation, while `.beads/` records issue tracking and sync state. The root `skills.sh.json` drives skills.sh page grouping and discovery.

**Key architectural decisions:**
- Skills and docs are the product; generated indexes should come from source content.
- Marketplace-facing metadata must stay synchronized across `skills/`, `skills.sh.json`, and docs.
- Beads is the issue tracker and the place to record follow-up work.

> For detailed subsystem documentation, see `specs/`.

## 6. Operational Checklists

### Before committing
- [ ] Tests pass (`bun test`)
- [ ] Linter clean (`bun run lint`)
- [ ] No secrets in staged files
- [ ] Type check passes (`bun run typecheck`)

### Before deploying
- [ ] All CI checks green
- [ ] Marketplace metadata synced
- [ ] Generated files regenerated from source before release

### When adding a new skill
- [ ] Create `skills/<skill-name>/SKILL.md` with kebab-case slug
- [ ] Update `skills.sh.json` grouping and any publish metadata
- [ ] Regenerate the generated index/README (`bun run sync-readme` or equivalent)

## 7. Known Failure Modes

> See `failure-modes.md` for the complete symptom → cause → fix table.

**Top 3 recurring issues:**
1. Editing generated `README.md` or index files directly → changes disappear on the next sync.
2. Stale `node_modules` after a branch switch → type errors or script failures until `bun install` is rerun.
3. Missing `.env` variables in local automation → silent undefined failures.

## 8. Trigger Table Reference

> See `trigger-tables.md` for the complete routing table.

**Key routing rules:**
- Files matching `skills/**` or `skills.sh.json` → use `skill-authoring-specialist`
- Files matching `docs/**` or `*.md` → use `docs-specialist`
- Files matching `scripts/**` or `*.ts` automation → use `automation-specialist`
- Files matching `.claude/**` → use `context-architect`

## 9. Codification Protocol

**During every session, watch for these signals:**
- You explained the same concept **twice** → write it down in the constitution or relevant spec
- You discovered a **failure mode** → add it to `failure-modes.md`
- You made an **architecture decision** → document in the relevant spec or constitution §5
- You found a **gotcha or non-obvious constraint** → add to §3 (Conventions) or §7 (Failure Modes)
- You established a **new convention** → add to §3

**When you detect a signal:**
1. Propose the specific addition (quote the section, show the diff)
2. Wait for human approval before writing
3. Keep additions concise — link to specs/ for details

## 10. Maintenance Schedule

- **Every 2 weeks**: Review §7 (Failure Modes) — remove resolved, add new
- **Monthly**: Review §2 (Tech Stack) and §4 (Build Commands) — versions drift
- **After major refactors**: Review §5 (Architecture) and §8 (Trigger Tables)
- **After onboarding new agent/skill**: Update §8 (Trigger Tables)

> Last reviewed: 2026-06-18
> Last bootstrap: 2026-06-18
