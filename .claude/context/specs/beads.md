# Beads Workflow

> On-demand spec for issue tracking, sync state, and local beads metadata.

## Scope

- Root: `.beads/`
- Load this spec when touching issue state, local sync data, or beads config.

## Key files

- `.beads/config.yaml`
- `.beads/metadata.json`
- `.beads/embeddeddolt/`

## Conventions

- Treat `bd` commands as the source of truth for issue state.
- Use `bd dolt push` to sync beads data.
- Avoid manual edits to internal database artifacts.

## Related routing

- `.beads/**` in `trigger-tables.md`
- `.claude/context/subsystem-map.md`
