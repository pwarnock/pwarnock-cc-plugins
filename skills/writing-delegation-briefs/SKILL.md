---
name: writing-delegation-briefs
description: Use when about to hand a task to Claude or a subagent and a one-line prompt won't be enough — when the delegatee needs context, judgment, or guardrails to succeed. Triggers on "delegate this", "hand this off to Claude", "write a brief for this task", "I want to give Claude this task".
---

# Writing Delegation Briefs

## Overview

Before delegating to Claude or a subagent, write a complete brief. Six questions — what the delegatee knows, why, what it needs, what great looks like, the timeline, what can go wrong — separate a task that succeeds from one that comes back wrong. Adapted from Wes Kao's newsletter "Before you delegate, ask yourself these 6 questions" (Aug 5, 2026).

## When to Use

Delegating a task to Claude or a subagent that needs more than a one-line prompt — judgment, context, or guardrails.

**When NOT to use:**
- Trivial tasks a one-line prompt covers
- You already have a complete brief
- Pure Q&A or research
- Intent still unclear — brainstorm first
- Delegating to a human (AI-only)

## Workflow: Reflect First, Then Infer

1. **Elicit the reflective questions** — one at a time, in order. Push back on vague answers.
   - **Why are we doing this?** The goal, how it fits the bigger picture. "This matters because…"
   - **Timeline and priority?** Urgency (hours / this week / two weeks), depth, "good enough" bar. No vague "ASAP."
   - **What's most likely to go wrong? What can I do to prevent it? What should Claude NOT do?** Failure modes, prevention (context, guardrails), explicit don'ts.
2. **Infer the rest from the codebase** — draft, don't ask:
   - **What does Claude already know? What's new?** Infer from repo (git status/log, code). Ask only for off-repo context.
   - **What does Claude need?** Infer paths and tools. Ask only for externals (credentials, people, platforms).
   - **What does great look like?** Find examples, acceptance criteria, "like this, except…" from the repo.
3. **Compose** — mark every inferred answer "inferred — verify." Let the user correct before finalizing.
4. **Print, offer to save** to a `.md` (ask where; default to current directory).

## The Brief

Self-contained — all context included, so it works as a main-loop prompt, a subagent prompt, or a beads issue description.

- **Header:** task summary + context
- **Six sections**, one per question
- Inferred content marked "inferred — verify"
- ✅/🚫 example style where useful (write original examples — not the newsletter's verbatim)

## Common Mistakes

| Mistake | Fix |
|---|---|
| Skipping the why | The why lets the delegatee make judgment calls. Always include it. |
| Vague timeline ("ASAP") | Name urgency, depth, and "good enough" bar. |
| No risks or guardrails | Ask what can go wrong and what NOT to do. |
| Unverified inferences baked in | Mark every inferred answer "inferred — verify." |
| Brief not self-contained | A subagent has zero conversation context — include everything. |
| No codebase to infer from | Skip inference; ask the user directly. |

## Credit

Framework adapted from Wes Kao's newsletter "Before you delegate, ask yourself these 6 questions" (Aug 5, 2026).
