# Subsystem Specs

This directory contains on-demand subsystem documentation. Files are loaded by the AI agent
only when entering the relevant subsystem — keeping the always-loaded context lean.

## Conventions

- One file per logical subsystem: `{subsystem-name}.md`
- Created when the subsystem is sufficiently complex to need documentation
- Referenced from `trigger-tables.md` and `subsystem-map.md`
- Updated using the `/codify-knowledge` skill when new patterns emerge

## Current Specs

| File | Subsystem | Trigger Keywords |
|------|-----------|-----------------|
| `beads.md` | `.beads/` | "beads", "bd", "issue tracking" |
| `codified-context.md` | `.claude/` | "context", "constitution", "trigger table" |
| `community-skills.md` | `community-skills/` | community, contributed, curated |
| `docs.md` | `docs/` | documentation, readme, guide |
| `generated-assets.md` | `scripts/` | "generated", "sync-readme", "auto-generated" |
| `github-automation.md` | `.github/` | workflow, action, release, CI |
| `plugin-packaging.md` | `.claude-plugin/` | plugin, marketplace, publish |
| `publishing.md` | (cross-cutting) | "publish", "release", "tag", "version" |
| `scripts.md` | `scripts/` | sync, generator, automation, script |
| `skills-marketplace.md` | `skills/` | "skill", "skills.sh", "manifest" |
| `skills.md` | `skills/` | skill, SKILL.md, manifest, frontmatter |
| `templates.md` | `templates/` | template, scaffold, boilerplate |
