# Generated Assets

> On-demand spec for files that are derived from source manifests or sync scripts.

## Scope

- Load this spec when editing generated indexes, tables, or sync outputs.

## Source of truth

- `skills/*/SKILL.md`
- `skills.sh.json`
- `docs/` source articles and tables
- `scripts/sync-readme.ts`

## Conventions

- Edit the source file, then regenerate the derived asset.
- Never hand-edit generated README/index tables.
- Use `bun run sync-readme` to refresh the generated marketplace index.
- Use `bun run check-readme` to verify the generated output is current.

## Related routing

- `generated`, `sync-readme`, or `auto-generated` keyword matches in `trigger-tables.md`
