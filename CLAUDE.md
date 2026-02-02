# CLAUDE.md

Personal Claude Code plugin marketplace.

## Issue Tracking (Beads)

This repo uses beads for issue tracking (prefix: `mkt`).

```bash
bd list                  # show open issues
bd ready                 # issues ready to work (prioritized)
bd show mkt-xxx          # issue details
bd update mkt-xxx --status in_progress  # claim work
bd close mkt-xxx         # mark complete
bd sync                  # sync with git
```

## Structure

- `docs/` - Plugin development guides
- `skills/` - Shared skills (e.g., create-plugin)
- Individual plugins live in separate repos (see README.md)

## Current Issues

Audit findings tracked across 3 plugins:
- `personal-crm` - P0: API payload format bug
- `gastown-parallel-workflow` - P1: missing .mcp.json
- `kjbc-mcp` - P2-P4: tests, validation, docs
