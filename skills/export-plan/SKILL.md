---
name: export-plan
description: Use when the user wants to share a plan, proposal, or technical decision with their team. Triggers on "/export-plan", "share this plan", "make this shareable", "write a proposal", "create an RFC", or when a plan needs to be communicated to non-agent audiences.
user_invocable: true
---

# /export-plan — Shareable Planning Artifact

Transform an agent execution plan into a team-ready proposal with adjustable depth and audience awareness. This skill *translates*, not authors — it consumes an existing plan and restructures it for human review.

## Arguments

- `$ARGUMENTS` — Optional: path to a plan file, or a slug for the output filename (e.g., "auth-migration"). If a path to a `.md` file, use it as the source plan. Otherwise, treat as output slug.

## Step 1: Detect Source Material

**Plan file mode** (default): Find the source plan.

```bash
# Check if $ARGUMENTS is a file path
# Otherwise, find the most recent plan
ls -t ~/.claude/plans/*.md 2>/dev/null | head -5
```

If plans exist, show the user the 5 most recent and let them pick (or confirm the latest). If `$ARGUMENTS` is a valid file path, use it directly.

**Free-form mode**: If no plan files exist, or the user says they want to describe the plan:
- Ask: "What problem are you solving?"
- Ask: "What approach are you proposing?"
- Ask: "What's still open / needs team input?"
- Use conversation context + answers as source material.

## Step 2: Ask Export Settings

Use AskUserQuestion with these three questions:

**Depth:**
- `Summary` — Layer 1 only (Slack message, quick async)
- `Proposal` (Recommended) — Layers 1+2 (GitHub Issue, Notion, meeting pre-read)
- `Full` — All three layers including technical appendix

**Audience:**
- `Technical` — Engineers who'll implement or review the code
- `Mixed` (Recommended) — Engineers + PMs + designers
- `Leadership` — Decision-makers who care about impact, not implementation

**What feedback do you need?**
- `Approve approach` — "Are we going the right direction?"
- `Spot risks` — "What are we missing?"
- `Open questions only` — "Help us decide these specific things"
- `Scope check` — "Is this the right size?"

## Step 3: Read and Analyze Source

Read the plan file. Extract and categorize content into buckets:

| Bucket | What to look for |
|--------|-----------------|
| **Problem** | Context sections, "why" statements, pain points, motivations |
| **Approach** | Architecture decisions, component descriptions, high-level steps |
| **Decisions** | Choices made with rationale, "we chose X because Y" |
| **Open questions** | Questions, trade-offs, "TBD", alternatives still being weighed |
| **Scope boundaries** | Explicit in/out statements, "this does NOT cover" |
| **Risks** | Failure modes, dependencies, "what could go wrong" |
| **Verification** | Test plans, success metrics, "how we'll know it works" |
| **Implementation detail** | File paths, function signatures, code snippets, step-by-step instructions |
| **Exploration findings** | Research results, prior art, existing patterns discovered |
| **Rejected alternatives** | Options considered and discarded with reasoning |

If depth is `full`, also scan conversation context for exploration findings and decision reasoning that may not be in the plan file.

## Step 4: Generate the Document

Build the output using three progressive layers. Include layers based on the depth setting from Step 2.

### Layer 1: Summary (always included)

```markdown
# <Title: one-line description of the change>

**Status:** Draft | Open for Feedback | Ready for Approval
**Feedback Requested By:** <date or "async, no deadline">

## TL;DR

<3-5 sentences covering: what problem, what approach, what's the ask>
```

**Rules:**
- Title should be understandable by anyone in the org
- TL;DR must stand alone — someone reading ONLY this should understand the proposal
- End with what you need from the reader

### Layer 2: Proposal Core (included for `proposal` and `full` depth)

```markdown
## Problem / Motivation

<Why this change exists — user pain, tech debt, business need. NO implementation details.>

## Proposed Approach

<High-level description of what changes. Describe components, architecture, data flow.>

## Key Decisions Made

<Choices already locked in, with brief rationale for each>

- **Decision**: <what was decided>
  **Rationale**: <why>

## Open Questions

<Numbered list. Each question MUST include options + trade-offs + your lean (if any).>

1. **<Question>**
   - Option A: <description> — *Trade-off: <pro/con>*
   - Option B: <description> — *Trade-off: <pro/con>*
   - Current lean: <which and why, or "no lean yet">

## Scope

**In scope:** <what this covers>
**Out of scope:** <what this explicitly does NOT cover>

## Risks & Mitigations

| Risk | Likelihood | Impact | Mitigation |
|------|-----------|--------|------------|
| <risk> | Low/Med/High | Low/Med/High | <what's the fallback> |

## Verification

<How we'll know it works — tests, metrics, manual checks>
```

**Critical Layer 2 rules:**
- **ZERO file paths** — move all paths to Layer 3
- **ZERO code snippets** — move all code to Layer 3
- **ZERO function signatures** — describe behavior, not implementation
- Audience hint from Step 2 adjusts tone:
  - `technical`: can use architectural terms, reference patterns by name
  - `mixed`: explain technical concepts briefly, focus on impact
  - `leadership`: lead with business impact, minimize technical jargon

### Layer 3: Technical Appendix (included only for `full` depth)

Wrap in a `<details>` block for platforms that support collapsing:

```markdown
<details>
<summary>Technical Appendix (click to expand)</summary>

## Exploration Findings

<What was discovered during research — existing patterns, constraints, prior art>

## Rejected Alternatives

<What was considered and why it was dropped>

- **<Alternative>**: <why rejected>

## Implementation Sketch

<File paths, function signatures, migration steps — the execution plan as written by the agent>

## Dependencies & Sequencing

<What blocks what, parallel vs. sequential work>

</details>
```

## Step 5: Output

Ask the user where to put the result:

- **File** (default): Write to `docs/proposals/YYYY-MM-DD-<slug>.md`. Create `docs/proposals/` if it doesn't exist.
- **Clipboard**: Copy to clipboard via `pbcopy`
- **Stdout**: Print directly for quick paste

The slug comes from `$ARGUMENTS` if provided, otherwise derive from the title (kebab-case, max 40 chars).

After writing, show a brief summary: layer count, word count per layer, number of open questions surfaced.

**STOP. This skill is complete after output.** Do NOT proceed to implement the plan, write code, create files beyond the proposal, or take any further action. The purpose of this skill is to produce a shareable document — not to execute what's in it. If the user wants to proceed with implementation, they will ask separately.

## Transformation Rules

These rules govern how plan content maps to proposal content:

1. **Context → Problem/Motivation**: Rewrite from the reader's perspective. "The codebase has X problem" not "We need to refactor X".
2. **Steps → Proposed Approach**: Collapse numbered implementation steps into a narrative description of *what changes*, not *how to change it*.
3. **Questions and "TBD" → Open Questions**: Every question, trade-off, or uncertainty becomes a numbered Open Question with options and trade-offs stated explicitly.
4. **File paths and code → Layer 3 only**: Any `path/to/file`, code fences, or function signatures get stripped from Layers 1-2 and placed in the Implementation Sketch.
5. **"What's your ask?" is required**: The TL;DR MUST end with what the author needs from readers. If the user didn't specify, synthesize from the feedback type chosen in Step 2.
6. **Scope must be explicit**: If the plan doesn't state scope boundaries, ask the user what's out of scope before generating.

## Common Mistakes

- **Leaving file paths in Layer 2** — Scan the generated Layer 2 for any `/path`, `.ts`, `.py`, function names with parens. Move them to Layer 3.
- **Open Questions without options** — Every question needs at least 2 options with trade-offs. "Should we use X?" is not actionable. "Should we use X (faster, less flexible) or Y (slower, more extensible)?" is.
- **Missing the ask** — If the TL;DR doesn't end with what the reader should do, add it.
- **Summary too long** — Layer 1 should fit in a Slack message (~150 words max). If it's longer, cut.
