# Community Skills

> On-demand spec loaded when entering `community-skills/` subsystem

## Overview

Community skills are contributed or curated skills imported from external sources. They live in `community-skills/` and follow the same structure as first-party skills.

## Structure

```
community-skills/
  {skill-name}/
    SKILL.md          # Frontmatter metadata + description
    ...               # Implementation files
```

## Curation Process

1. **Triage** — Evaluate the skill for quality and safety
2. **Normalize** — Ensure frontmatter meets local conventions
3. **Import** — Copy to `community-skills/{skill-name}/`
4. **Document** — Note the source in `SKILL.md` or a `SOURCE.md` file

## Conventions

- Attribute the original author in `SKILL.md` frontmatter
- Do not modify behavior without forking and renaming
- Community skills are not guaranteed to be maintained

## Routing

Community skill changes trigger `community-curation-specialist` via `trigger-tables.md`.
