# GitHub Automation

> On-demand spec loaded when entering `.github/` subsystem

## Overview

GitHub automation covers workflows, actions, and release pipelines defined in `.github/`.

## Workflow Files

Workflow YAML files live in `.github/workflows/`. Common workflows:
- CI checks (lint, test, build)
- Release automation (tag → GitHub Release)
- PR validation

## Conventions

- Workflow file names use kebab-case: `release.yml`, `check-readme.yml`
- Use `actions/checkout@v4` for checkout steps
- Pin action versions to a SHA or major version tag for security
- Secrets are accessed via `${{ secrets.SECRET_NAME }}`

## Release Workflow

Releases are typically triggered by pushing a version tag (`v*`). The workflow:
1. Checks out the tag
2. Builds/packages the artifact
3. Creates a GitHub Release

## Adding a New Workflow

1. Create a `.yml` file in `.github/workflows/`
2. Define triggers (`on:`) and jobs
3. Reference secrets from repository/org settings
4. Document the workflow purpose in a comment at the top
