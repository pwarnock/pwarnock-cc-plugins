# Skills Marketplace

> On-demand spec for first-party skills and skills.sh discovery metadata.

## Scope

- Load this spec when editing skill bundles, marketplace grouping, or install guidance.

## Key files

- `skills/**/SKILL.md`
- `skills.sh.json`
- `README.md`
- `SKILLS.md`

## Conventions

- Keep skill slugs kebab-case and stable.
- Keep skill descriptions concise enough for marketplace validators.
- Update `skills.sh.json` when adding, removing, or regrouping skills.
- Treat skill markdown as the source of truth for the installed skill bundle.

## Related routing

- `"skill"`, `"skills.sh"`, `"manifest"` keyword matches in `trigger-tables.md`
- `skills/**` file-pattern route in `trigger-tables.md`
