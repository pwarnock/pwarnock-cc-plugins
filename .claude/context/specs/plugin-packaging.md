# Plugin Packaging

> On-demand spec loaded when entering `.claude-plugin/` subsystem

## Overview

Plugin packaging covers the metadata and distribution files needed to publish a Claude Code plugin to the marketplace.

## Structure

```
.claude-plugin/
  manifest.json     # Plugin metadata and entry points
  README.md         # Plugin documentation
```

## Manifest Fields

Key fields in `manifest.json`:
- `name` — unique plugin identifier
- `version` — semver version string
- `description` — short plugin description
- `entrypoint` — main script or binary

## Publishing

See `specs/publishing.md` for the full release and tagging workflow.

## Validation

Before publishing:
- Verify `manifest.json` is valid JSON
- Confirm `version` matches the git tag
- Ensure `README.md` is up to date
