# First-party Skills

> On-demand spec for the skill bundles stored under `skills/`.

## Scope

- Load this spec when editing skill markdown, skill metadata, or skill-specific assets.

## Key files

- `skills/**/SKILL.md`
- `skills.sh.json`
- `README.md`
- `SKILLS.md`

## Conventions

- Keep skill slugs kebab-case and stable.
- Treat the skill markdown as the installable source of truth.
- Update marketplace grouping whenever skills are added or renamed.
- Keep generated listing tables in sync with the source skill set.

## Related routing

- `skills/**` file-pattern route in `trigger-tables.md`
