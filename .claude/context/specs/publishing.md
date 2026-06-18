# Publishing

> On-demand spec for releases, tags, and public distribution updates.

## Scope

- Load this spec when making release decisions or updating publish-facing metadata.

## Key files

- `README.md`
- `SKILLS.md`
- `skills.sh.json`
- `.claude-plugin/`
- `.github/`

## Conventions

- Keep publish-facing descriptions short, accurate, and versioned.
- Sync repository metadata before release or publication.
- Prefer explicit commits and tags over implied state.
- Treat marketplace discovery as a separate concern from local editing.

## Related routing

- `"publish"`, `"release"`, `"tag"`, `"version"` keyword matches in `trigger-tables.md`
