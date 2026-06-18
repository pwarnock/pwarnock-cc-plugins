# Skills Subsystem

> On-demand spec loaded when entering `skills/` subsystem

## Overview

The `skills/` directory contains first-party reusable agent skills. Skills are self-contained behaviors that can be invoked by agents or users.

## Structure

```
skills/
  {skill-name}/
    SKILL.md          # Required: frontmatter metadata + description
    ...               # Implementation files (scripts, prompts, etc.)
```

## SKILL.md Frontmatter

```yaml
---
name: skill-name
description: One-line description of what this skill does
triggers:
  - keyword or phrase that activates this skill
version: 1.0.0
---
```

## Conventions

- Each skill is self-contained in its own subdirectory
- `SKILL.md` is required and must have valid frontmatter
- Skills should be focused — do one thing well
- Implementation files should be documented inline

## Authoring a New Skill

1. Create `skills/{skill-name}/`
2. Add `SKILL.md` with frontmatter
3. Add implementation files
4. Add keyword routing to `trigger-tables.md` if needed
5. Update `specs/skills-marketplace.md` if the skill is marketplace-relevant
