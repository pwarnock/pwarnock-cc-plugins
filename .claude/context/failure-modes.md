# Known Failure Modes

> Symptom → Cause → Fix mappings. When the AI agent encounters an error or unexpected behavior, consult this table first. This is the project's institutional memory for debugging.

## Critical Failures

| # | Symptom | Cause | Fix | Prevention |
|---|---------|-------|-----|------------|
| 1 | Editing generated `README.md` or index files directly | Manual edits bypass the source-of-truth pipeline | Restore the source files, then rerun `bun run sync-readme` | Only edit source manifests and docs; never edit generated output by hand |

## Build & Compile Failures

| # | Symptom | Cause | Fix | Prevention |
|---|---------|-------|-----|------------|
| 1 | Stale `node_modules` after a branch switch | Dependencies were not reinstalled after lockfile or branch changes | Run `bun install` again | Reinstall after branch switches and dependency updates |
| 2 | Script or module resolution errors after dependency changes | Package state drifted because install was skipped | Run `bun install` before retrying | Treat `bun install` as mandatory after package changes |

## Runtime Failures

| # | Symptom | Cause | Fix | Prevention |
|---|---------|-------|-----|------------|
| 1 | Missing `.env` variables in local automation | Required environment values were never set | Populate the missing variables and rerun the command | Keep a checked-in example file and verify env setup before running scripts |

## Test Failures

| # | Symptom | Cause | Fix | Prevention |
|---|---------|-------|-----|------------|
| 1 | Snapshot or fixture mismatch after skill metadata changes | Generated docs or fixtures were not refreshed after content edits | Regenerate the affected snapshots or fixtures and review the diff | Run sync/regeneration steps before reviewing test updates |

## AI Agent-Specific Failures

| # | Symptom | Cause | Fix | Prevention |
|---|---------|-------|-----|------------|
| 1 | Agent edits generated file directly | No awareness of the source-of-truth pipeline | Edit the source manifest or template, then regenerate the derived file | Document generated files in the constitution and route them as read-only outputs |

## Adding New Failure Modes

When you encounter and resolve a new failure:
1. Identify the **symptom** (what you observed — error message, unexpected behavior)
2. Determine the **root cause** (why it happened)
3. Document the **fix** (specific steps, not vague guidance)
4. Add **prevention** (what would have avoided this)
5. Place in the appropriate category above
6. If it's a top-3 recurring issue, update the constitution §7 summary

## Failure Mode Lifecycle

- **Add**: When a new failure is encountered and resolved
- **Update**: When a better fix or prevention strategy is found
- **Archive**: When the root cause is permanently fixed (move to bottom "Archived" section)
- **Review**: Every 2 weeks per the constitution maintenance schedule

---

## Archived Failures

<!-- Move resolved failure modes here instead of deleting them — they serve as historical context -->

| # | Symptom | Cause | Resolution Date | How Permanently Fixed |
|---|---------|-------|-----------------|-----------------------|
