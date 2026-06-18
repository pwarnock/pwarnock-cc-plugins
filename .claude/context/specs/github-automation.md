# GitHub Automation

> On-demand spec for CI, release, and repository workflow automation.

## Scope

- Load this spec when editing GitHub Actions, release helpers, or repo automation.

## Key files

- `.github/workflows/`
- `.github/`
- `scripts/` helpers used by workflows

## Conventions

- Keep workflow steps explicit and deterministic.
- Prefer repo-local scripts over large inline shell blocks.
- Update workflow docs when automation changes.

## Related routing

- `.github/**` file-pattern route in `trigger-tables.md`
