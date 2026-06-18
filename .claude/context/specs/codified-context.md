# Codified Context

> On-demand spec for the bootstrap context infrastructure itself.

## Scope

- Root: `.claude/`
- Load this spec when updating constitution, trigger tables, failure modes, or subsystem maps.

## Key files

- `.claude/context/constitution.md`
- `.claude/context/trigger-tables.md`
- `.claude/context/failure-modes.md`
- `.claude/context/subsystem-map.md`

## Conventions

- Keep the constitution concise and link to deeper specs when needed.
- Update routing and failure tables when new patterns emerge.
- Use the `audit-staleness` skill to check for drift.
- Use the `codify-knowledge` skill to capture repeated discoveries.

## Related routing

- `.claude/**` in `trigger-tables.md`
- `CLAUDE.md` repository guidance
