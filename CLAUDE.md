# CLAUDE.md

Personal Claude Code plugin marketplace & skills—part of broader **multi-platform agent skills ecosystem**.

## Strategic Direction

See [CROSS_PLATFORM_SKILLS_ROADMAP.md](docs/CROSS_PLATFORM_SKILLS_ROADMAP.md) for multi-platform strategy, rebrand planning, and advocacy initiatives.

## Issue Tracking (Beads)

This repo uses beads for issue tracking (prefix: `mkt`).

```bash
bd prime                 # workflow context
bd list                  # show open issues
bd ready                 # issues ready to work (prioritized)
bd show mkt-xxx          # issue details
bd update mkt-xxx --status in_progress  # claim work
bd close mkt-xxx         # mark complete
bd dolt push             # push beads data to remote
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

## Context Infrastructure

This project uses codified context infrastructure. Key files:
- `.claude/context/constitution.md` — Core project conventions (loaded every session)
- `.claude/context/trigger-tables.md` — File pattern → agent/skill routing
- `.claude/context/failure-modes.md` — Known failure symptom → cause → fix mappings
- `.claude/context/subsystem-map.md` — Directory → subsystem ownership
- `.claude/context/specs/` — On-demand subsystem documentation

> Use the `audit-staleness` skill to check for context drift. Use the `codify-knowledge` skill to capture session insights.

<!-- codified-context bootstrap: 2026-06-18 -->
