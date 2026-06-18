# Beads Issue Tracking

> On-demand spec loaded when keywords: "beads", "bd", "issue tracking"

## Overview

This repo uses **beads** (`bd`) for issue tracking. Issues are stored in `.beads/` as structured data and synced to a remote dolt database.

## Common Commands

```bash
bd prime              # Load workflow context for the session
bd list               # Show open issues
bd ready              # Issues ready to work (prioritized)
bd show <id>          # View issue details
bd update <id> --status in_progress  # Claim work
bd close <id>         # Mark complete
bd dolt push          # Push beads data to remote
```

## Issue ID Format

Issues use the prefix `mkt-` followed by a number (e.g., `mkt-001`).

## Workflow

1. Run `bd prime` at the start of each session for context
2. Use `bd ready` to find prioritized work
3. Claim with `bd update <id> --status in_progress`
4. Complete with `bd close <id>`
5. Always run `bd dolt push` before ending the session

## Sync State

- Beads data lives in `.beads/`
- Remote sync uses dolt — run `bd dolt push` (not `bd sync`)
- Version: beads 1.0.5+
