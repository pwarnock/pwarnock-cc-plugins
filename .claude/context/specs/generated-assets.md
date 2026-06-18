# Generated Assets

> On-demand spec loaded when keywords: "generated", "sync-readme", "auto-generated"

## Overview

Some files in this repository are auto-generated from source-of-truth documents. Editing them directly will result in changes being overwritten.

## Generated Files

| File | Generated From | Script |
|------|---------------|--------|
| `README.md` (root) | Individual plugin READMEs / template | `bun run sync-readme` |

## Rules

- **Never hand-edit generated files** — changes will be overwritten on next sync
- **Edit the source** — make changes in the source-of-truth document instead
- **Regenerate** — run the appropriate script to propagate changes

## Checking for Drift

```bash
bun run check-readme   # verify README is in sync with source
bun run sync-readme    # regenerate README from source
```

## Adding New Generated Assets

1. Define the source-of-truth file
2. Add a generation script to `package.json`
3. Document the mapping in this spec
4. Add a `check-*` script for CI validation
