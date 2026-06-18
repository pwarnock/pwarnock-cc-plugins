# Publishing & Release Procedures

> On-demand spec loaded when keywords: "publish", "release", "tag", "version"

## Overview

This document covers the release and publishing workflow for plugins and skills in this repository.

## Release Process

1. **Version bump** — Update version in the relevant manifest/package file.
2. **Tag** — Create a git tag matching the version (e.g., `v1.2.3`).
3. **Push tag** — `git push origin <tag>`
4. **GitHub Release** — Create a GitHub release from the tag with a changelog.

## Plugin Publishing

- Plugin metadata lives in `.claude-plugin/`
- Verify `manifest.json` or equivalent is updated before tagging
- See `specs/plugin-packaging.md` for packaging details

## Conventions

- Use semantic versioning (`MAJOR.MINOR.PATCH`)
- Tag format: `v{version}` (e.g., `v1.0.0`)
- Changelog entries go in `CHANGELOG.md` or GitHub Release notes
