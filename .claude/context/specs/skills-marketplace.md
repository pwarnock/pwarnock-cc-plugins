# Skills Marketplace

> On-demand spec loaded when keywords: "skill", "skills.sh", "manifest"

## Overview

Skills are reusable agent behaviors that can be discovered, installed, and shared across projects.

## Skill Structure

Each skill lives under `skills/` and typically contains:
- `SKILL.md` — frontmatter metadata + description
- Implementation files (scripts, prompts, etc.)

## Frontmatter Conventions

```yaml
---
name: skill-name
description: One-line description
triggers:
  - keyword or phrase
version: 1.0.0
---
```

## Discovery & Install

- Skills are discovered via `SKILL.md` frontmatter
- `skills.sh` (if present) handles install/bootstrap automation
- Community skills live in `community-skills/`

## Adding a New Skill

1. Create a directory under `skills/` with the skill name
2. Add `SKILL.md` with required frontmatter
3. Add implementation files
4. Reference from `trigger-tables.md` if keyword routing is needed
