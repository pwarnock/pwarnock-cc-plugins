# Scripts & Automation

> On-demand spec loaded when entering `scripts/` subsystem

## Overview

The `scripts/` directory contains automation scripts for tasks like syncing generated assets, scaffolding, and build helpers.

## Available Scripts

Scripts in `scripts/` are typically invoked via `package.json`:

```bash
bun run sync-readme    # Regenerate root README from sources
bun run check-readme   # Verify README is in sync (used in CI)
```

## Conventions

- Scripts use TypeScript (`.ts`) unless shell is more appropriate
- Scripts are invoked via `bun` or `bunx`
- Generated output should have a paired `check-*` script for CI validation
- Scripts should be idempotent where possible

## Adding a New Script

1. Create the script in `scripts/`
2. Add an entry to `package.json` scripts
3. If the script generates output, add a `check-*` variant
4. Document the script in this spec and in `specs/generated-assets.md` if applicable
