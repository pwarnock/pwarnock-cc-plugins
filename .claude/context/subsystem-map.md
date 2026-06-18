# Subsystem Map

> Maps directories to logical subsystems with ownership, dependencies, and documentation links. Used for routing (trigger tables), staleness detection, and coverage analysis.

## Subsystem Overview

```
{project-root}/
├── .beads/              → Beads issue tracking & local state ← HOT
├── .claude/             → Codified context infrastructure
├── .claude-plugin/      → Plugin packaging & marketplace metadata ← HOT
├── .github/             → CI, release, and publishing automation
├── community-skills/    → Community-contributed or mirrored skills
├── docs/                → Guides, roadmaps, and reference material ← HOT
├── scripts/             → Automation, sync, and generation tooling
├── skills/              → First-party skills and templates
└── templates/           → Reusable scaffolding for new content
```

Root coordination files: `README.md`, `CLAUDE.md`, `AGENTS.md`, `skills.sh.json`

## Detailed Subsystem Mapping

| Directory Pattern | Subsystem | Description | Spec Document | Dependencies |
|------------------|-----------|-------------|---------------|--------------|
| `.beads/**` | Beads Workflow | Issue tracking state and local sync data | `specs/beads.md` | `docs`, `scripts` |
| `.claude/**` | Codified Context | Bootstrap, routing, and maintenance docs | `specs/codified-context.md` | `docs`, `skills` |
| `.claude-plugin/**` | Plugin Packaging | Marketplace-facing packaging and metadata | `specs/plugin-packaging.md` | `skills`, `docs` |
| `.github/**` | GitHub Automation | CI, release, and repo workflow automation | `specs/github-automation.md` | `scripts`, `docs` |
| `community-skills/**` | Community Skills | Curated external or contributed skills | `specs/community-skills.md` | `skills`, `docs` |
| `docs/**` | Documentation | Guides, roadmaps, and reference material | `specs/docs.md` | `skills`, `scripts` |
| `scripts/**` | Automation Scripts | Sync, generation, and repo tooling | `specs/scripts.md` | `skills`, `docs` |
| `skills/**` | First-party Skills | Skill bundles, manifests, and templates | `specs/skills.md` | `templates`, `docs`, `scripts` |
| `templates/**` | Scaffolding Templates | Reusable starter content and boilerplate | `specs/templates.md` | `skills`, `docs` |

## Subsystem Boundaries

### Beads Workflow
- **Root**: `.beads/`
- **Purpose**: Track issues, sync state, and local beads metadata.
- **Key files**: `.beads/config.yaml`, `.beads/metadata.json`, `.beads/embeddeddolt/`
- **Public API**: `bd` issue IDs, status updates, and local sync operations.
- **Dependencies**: `docs/`, `scripts/`
- **Spec**: `specs/beads.md`

### Codified Context
- **Root**: `.claude/`
- **Purpose**: Store bootstrap context, routing tables, and maintenance guidance.
- **Key files**: `.claude/context/constitution.md`, `.claude/context/trigger-tables.md`, `.claude/context/failure-modes.md`, `.claude/context/subsystem-map.md`
- **Public API**: The constitution, trigger table, failure modes, and subsystem map consumed every session.
- **Dependencies**: `docs/`, `skills/`
- **Spec**: `specs/codified-context.md`

### Plugin Packaging
- **Root**: `.claude-plugin/`
- **Purpose**: Package marketplace-facing plugin metadata and install artifacts.
- **Key files**: Plugin manifests, packaging metadata, and publish-ready descriptors.
- **Public API**: Installable plugin metadata and marketplace registration data.
- **Dependencies**: `skills/`, `docs/`
- **Spec**: `specs/plugin-packaging.md`

### GitHub Automation
- **Root**: `.github/`
- **Purpose**: Keep CI, release, and repository automation in sync.
- **Key files**: Workflows, release helpers, and repository metadata.
- **Public API**: Actions workflows and publish pipelines.
- **Dependencies**: `scripts/`, `docs/`
- **Spec**: `specs/github-automation.md`

### Community Skills
- **Root**: `community-skills/`
- **Purpose**: Hold curated or contributed skills that are not first-party owned.
- **Key files**: Imported skill bundles, curation notes, and index material.
- **Public API**: Shared skills surfaced to the broader ecosystem.
- **Dependencies**: `skills/`, `docs/`
- **Spec**: `specs/community-skills.md`

### Documentation
- **Root**: `docs/`
- **Purpose**: Capture guides, roadmaps, specifications, and reference material.
- **Key files**: Articles, roadmaps, subsystem notes, and technical guides.
- **Public API**: Human-readable guidance and reference docs.
- **Dependencies**: `skills/`, `scripts/`
- **Spec**: `specs/docs.md`

### Automation Scripts
- **Root**: `scripts/`
- **Purpose**: Generate indexes, sync metadata, and automate maintenance tasks.
- **Key files**: Repository scripts, sync utilities, and helper programs.
- **Public API**: Automation entry points used by docs and skill generation flows.
- **Dependencies**: `skills/`, `docs/`
- **Spec**: `specs/scripts.md`

### First-party Skills
- **Root**: `skills/`
- **Purpose**: Store the actual skill bundles and their source markdown.
- **Key files**: `SKILL.md` files, local manifests, and skill-specific assets.
- **Public API**: Skill names, content, and installable bundles.
- **Dependencies**: `templates/`, `docs/`, `scripts/`
- **Spec**: `specs/skills.md`

### Scaffolding Templates
- **Root**: `templates/`
- **Purpose**: Provide reusable starter content and boilerplate.
- **Key files**: Templates for skill scaffolding and generated documents.
- **Public API**: Starting points for new content and automation.
- **Dependencies**: `skills/`, `docs/`
- **Spec**: `specs/templates.md`

## Cross-Cutting Concerns

| Concern | Affected Subsystems | Implementation Pattern |
|---------|--------------------|-----------------------|
| Generated assets | `docs`, `skills`, `scripts` | Edit source content, then regenerate derived files instead of hand-editing outputs. |
| Marketplace metadata | `skills`, `.claude-plugin`, `community-skills`, `docs` | Keep slugs, descriptions, and groupings synchronized across publish surfaces. |
| Issue tracking and decisions | `.beads`, `docs`, `scripts` | Record work in beads and codify repeated decisions in context docs. |

## Hot Areas (High Change Frequency)

<!-- Auto-populated by analyze-repo.sh, updated during staleness audits -->

| Directory | Commits (30d) | Risk Level | Notes |
|-----------|--------------|------------|-------|
| `.beads` | 3 | High | Issue tracking and sync state changed recently. |
| `CLAUDE.md` | 2 | High | Core context instructions changed recently. |
| `AGENTS.md` | 2 | High | Shared agent instructions changed recently. |
| `.claude-plugin` | 2 | Medium | Plugin packaging and distribution metadata are actively evolving. |
| `skills.sh.json` | 1 | Medium | Repository discovery/grouping metadata was updated. |
| `docs` | 1 | Medium | Strategy and guidance docs are being updated as the ecosystem evolves. |

## Adding New Subsystems

When a new logical subsystem emerges:
1. Add directory mapping to the table above
2. Create a boundary section with purpose, key files, API, dependencies
3. Create `specs/{name}.md` with detailed documentation
4. Add routing rules to `trigger-tables.md`
5. Update constitution §5 (Architectural Summary) if the subsystem is significant
