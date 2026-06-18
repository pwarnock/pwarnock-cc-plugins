# Docs Subsystem

> On-demand spec loaded when entering `docs/` subsystem

## Overview

The `docs/` directory contains guides, roadmaps, and reference documentation for the project.

## Structure

```
docs/
  CROSS_PLATFORM_SKILLS_ROADMAP.md   # Multi-platform strategy
  ...                                 # Other guides
```

## Conventions

- Documentation files use Markdown (`.md`)
- File names use kebab-case or SCREAMING_SNAKE_CASE for prominent docs
- Keep docs accurate — stale docs are worse than no docs
- Reference code, not copy it (link to source files instead of duplicating)

## Maintenance

- Run `/audit-staleness` to check if docs have drifted from reality
- Update docs as part of the same PR as the feature/change they describe
- The root `README.md` is auto-generated — see `specs/generated-assets.md`

## Adding New Docs

1. Create a `.md` file in `docs/`
2. Link to it from `README.md` or an index doc
3. Reference it from `trigger-tables.md` if keyword routing is useful
