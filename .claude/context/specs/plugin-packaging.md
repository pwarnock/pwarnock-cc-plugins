# Plugin Packaging

> On-demand spec for marketplace-facing plugin metadata and install artifacts.

## Scope

- Load this spec when editing `.claude-plugin/` or publish-ready metadata.

## Key files

- `.claude-plugin/`
- Plugin manifests and packaging metadata
- Publish descriptors and install metadata

## Conventions

- Keep packaging metadata aligned with the skill source files.
- Regenerate derived descriptors instead of editing them by hand.
- Ensure plugin names and slugs match across publish surfaces.

## Related routing

- `.claude-plugin/**` file-pattern route in `trigger-tables.md`
