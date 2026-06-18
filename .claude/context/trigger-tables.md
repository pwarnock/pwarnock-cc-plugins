# Trigger Tables

> Routing intelligence: maps file patterns and keywords to the right agent, skill, or context document. The AI agent consults this table to decide which specialist to invoke.

## File Pattern Routing

| File Pattern | Keywords | Agent/Skill | Rationale |
|-------------|----------|-------------|-----------|
| `.beads/**` | issue, beads, bd, backlog, status | `beads-specialist` | Beads state and workflow changes affect planning and coordination. |
| `.claude/**` | context, constitution, trigger table, failure mode, subsystem | `context-architect` | Context docs must stay synchronized and routing rules need careful maintenance. |
| `.claude-plugin/**` | plugin, marketplace, install, publish | `plugin-publishing-specialist` | Packaging and distribution metadata need cross-platform validation. |
| `.github/**` | workflow, action, release, CI, PR | `github-actions-specialist` | GitHub automation and release workflows have platform-specific conventions. |
| `community-skills/**` | community, contributed, curated, import | `community-curation-specialist` | Community contributions need triage and curation conventions. |
| `docs/**`, `*.md` | documentation, readme, guide, roadmap | `docs-specialist` | Docs are the product surface and must remain coherent. |
| `scripts/**`, `*.ts` | sync, generator, automation, script | `automation-specialist` | Automation scripts often touch generated output and publish workflows. |
| `skills/**` | skill, SKILL.md, manifest, frontmatter | `skill-authoring-specialist` | Skill authoring has strict metadata and packaging conventions. |
| `templates/**` | template, scaffold, boilerplate | `template-specialist` | Templates are the source of truth for new artifacts. |

## Keyword Routing

| Keyword/Phrase | Context to Load | Action |
|---------------|-----------------|--------|
| "publish", "release", "tag", "version" | `specs/publishing.md` | Load publishing and release procedures. |
| "skill", "skills.sh", "manifest" | `specs/skills-marketplace.md` | Load skill metadata and install/discovery guidance. |
| "context", "constitution", "trigger table" | `specs/codified-context.md` | Load codified context protocol and routing rules. |
| "generated", "sync-readme", "auto-generated" | `specs/generated-assets.md` | Load source-of-truth and regeneration rules. |
| "beads", "bd", "issue tracking" | `specs/beads.md` | Load issue tracking and sync-state guidance. |
| "error", "exception", "crash" | `failure-modes.md` | Load known failure modes for rapid diagnosis. |

## Subsystem Routing

| Subsystem | Entry Point | Spec Document | Owner Agent |
|-----------|------------|---------------|-------------|
| `.beads` | `.beads/` | `specs/beads.md` | `beads-specialist` |
| `.claude` | `.claude/` | `specs/codified-context.md` | `context-architect` |
| `.claude-plugin` | `.claude-plugin/` | `specs/plugin-packaging.md` | `plugin-publishing-specialist` |
| `.github` | `.github/` | `specs/github-automation.md` | `github-actions-specialist` |
| `community-skills` | `community-skills/` | `specs/community-skills.md` | `community-curation-specialist` |
| `docs` | `docs/` | `specs/docs.md` | `docs-specialist` |
| `scripts` | `scripts/` | `specs/scripts.md` | `automation-specialist` |
| `skills` | `skills/` | `specs/skills.md` | `skill-authoring-specialist` |
| `templates` | `templates/` | `specs/templates.md` | `template-specialist` |

## How to Use This Table

1. **On file open/edit**: Match the file path against "File Pattern Routing" → invoke the matched agent/skill
2. **On keyword detection**: Match conversation keywords against "Keyword Routing" → load the specified context
3. **On subsystem entry**: When working in a subsystem directory → load the matching spec document

## Adding New Routes

When you discover that a specific file pattern or keyword consistently needs specialized handling:
1. Add a row to the appropriate table above
2. Document the rationale (why this routing improves outcomes)
3. If a new spec document is needed, create it in `specs/`
4. Update the constitution §8 (Trigger Table Reference) summary
