# Automation Scripts

> On-demand spec for sync scripts, generators, and repo tooling.

## Scope

- Load this spec when editing `scripts/` or adding repo automation.

## Key files

- `scripts/sync-readme.ts`
- Future generator or validation scripts in `scripts/`

## Conventions

- Keep scripts small and purpose-built.
- Fail fast when source manifests are missing or invalid.
- Prefer explicit input/output paths so regeneration is reproducible.

## Related routing

- `scripts/**` and `*.ts` file-pattern routes in `trigger-tables.md`
