# Codified Context Protocol

> On-demand spec loaded when keywords: "context", "constitution", "trigger table"

## Overview

Codified context is a system for keeping AI agent context lean, accurate, and maintainable. Instead of loading all documentation every session, context is loaded on-demand based on file patterns and keywords.

## Key Files

| File | Purpose |
|------|---------|
| `constitution.md` | Always-loaded project conventions and constraints |
| `trigger-tables.md` | File pattern → agent/skill routing rules |
| `failure-modes.md` | Known failure symptom → cause → fix mappings |
| `subsystem-map.md` | Directory → subsystem ownership |
| `specs/` | On-demand subsystem documentation |

## How It Works

1. **Always-loaded** — `constitution.md` is loaded every session
2. **On-demand** — `specs/*.md` files are loaded only when entering the relevant subsystem or detecting keywords
3. **Routing** — `trigger-tables.md` maps files/keywords to the right specialist agent

## Maintenance

- Run `/audit-staleness` to check for context drift
- Run `/codify-knowledge` to capture session insights into spec files
- Update `trigger-tables.md` when new routing rules are discovered
