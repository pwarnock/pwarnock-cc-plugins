# Cross-Platform Skills Strategy: Roadmap

## Current State (Post QW1)

✅ skills.sh.json added → skills discoverable on skills.sh  
✅ All 7 skills installable via `npx skills add pwarnock/pwarnock-cc-plugins`  
✅ Copilot CLI marketplace integration unchanged  

---

## Challenge: Single Source of Truth (Q2)

**Problem:** Currently maintain:
- `SKILL.md` in each skill folder (Copilot CLI format)
- Future: OpenAPI schemas (Claude Marketplace)
- Future: separate config (skills.sh.json groupings)

**Solution:** Generate all formats from single canonical source

### Proposed Architecture

```
skills/codification-loop/
├── metadata.yaml              ← SINGLE SOURCE OF TRUTH
│   - title
│   - description (< 1024 bytes)
│   - tags, category
│   - examples, requirements
├── SKILL.md                   ← GENERATED from metadata.yaml
├── .generated/
│   ├── openapi.yaml           ← GENERATED (future, Claude Marketplace)
│   └── plugin.json            ← GENERATED (future, validation)
└── content/                   ← Hand-written skill logic
    └── guideline.md
```

### Implementation Options

#### Option A: Minimal (Low Effort)
- Create `metadata.yaml` in each skill
- Keep `SKILL.md` but add frontmatter pointing to metadata
- Skip generation (manual for now)
- **Benefit:** Foundation for future automation
- **Timeline:** 1-2 hours

#### Option B: Medium (With Tooling)
- Same as Option A
- Add Node.js script: `scripts/sync-skills.ts`
- Script generates SKILL.md from metadata.yaml
- Add to CI/CD pre-commit hook
- **Benefit:** Enforced consistency, catch errors early
- **Timeline:** 2-3 hours + testing

#### Option C: Full (With All Outputs)
- Same as Option B
- Also generate openapi.yaml for each skill
- Generate plugin.json entries for marketplace
- Validate all outputs against their specs
- **Benefit:** Ready for Claude Marketplace + future platforms
- **Timeline:** 4-5 hours + testing

---

## Strategic Initiative: Repository Rebrand & Repositioning

### Context

**Current name:** `pwarnock-cc-plugins`
- ✅ Accurate: Primarily Claude Code plugins
- ❌ Limiting: Implies coupling to Claude Code only
- ❌ Unclear: Doesn't indicate Skills.sh ecosystem support

### Proposed Name

`pwarnock/agent-skills` or similar variant indicating:
- Support for multiple platforms (Copilot CLI, Skills.sh, Claude Marketplace, future)
- Positioned as **ecosystem curator**, not vendor lock-in
- Alignment with skills.sh naming conventions (e.g., `vercel-labs/agent-skills`)
- Foundation for community contributions from other skill authors

### Why Rebrand?

1. **Signals multi-platform support** — Skills work on multiple ecosystems
2. **Positions as curator** — "Curated collection of skills from the AI agent community"
3. **Better discoverability** — Searches for "agent skills" → your repo
4. **Opens ecosystem door** — Invites contributions, builds community
5. **Strategic positioning** — Aligns with advocacy work (Q4)

### Migration Path

1. Create new repo: `pwarnock/agent-skills` (or rename existing)
2. Update all references:
   - README.md
   - Marketplace registrations (Copilot CLI, skills.sh.json)
   - Documentation
   - CI/CD workflows
   - External links/bookmarks
3. Maintain GitHub redirect (old URL → new URL)
4. Update community announcements

### Post-Rebrand Benefits

- Clearer positioning in marketplace discoveries
- Better SEO/discoverability for "agent skills" searches
- Foundation for: "Curated marketplace of skills from multiple platforms"
- Positions you as thought leader in cross-platform skill interoperability

---

## Advocacy Path: Unified Skill Specification (Q4)

Once you have metadata.yaml + sync tool, position yourself as ecosystem thought leader:

### 1. Write RFC: "Universal Agent Skill Specification"
- **Problem:** SKILL.md vs OpenAPI vs JSON divergence creates maintenance burden
- **Solution:** metadata.yaml as canonical source with generator tooling
- **Evidence:** Working implementation from pwarnock/agent-skills
- **Impact:** Reduce friction for skill authors across platforms

### 2. Publish Articles on pwarnock.github.io
- Alongside existing "Copilot CLI vs Claude Marketplace" article
- **Title:** "Unified Skills Metadata: A Path to Interoperability"
- **Content:** Code examples, tooling, repo rebrand rationale
- **Audience:** Skill authors, platform teams, AI agent builders

### 3. Engage Community
- Share in GitHub Copilot discussions
- Propose to skills.sh maintainers
- Reach out to Anthropic Claude API team
- Collect feedback from other skill authors
- **Pitch:** "Help us standardize agent skills across platforms"

### 4. Contribute
- Reference implementations for platforms
- Tooling ecosystem around metadata.yaml
- Documentation for other skill authors
- Help platforms adopt unified spec
- Position your repo as reference implementation

---

## Phased Timeline

### Phase 1: Discovery & Foundation (Week 1)
- ✅ QW1: Add skills.sh.json
- ⏳ Option A: Create metadata.yaml in each skill
- Document findings

### Phase 2: Automation & Tooling (Week 2-3)
- Option B: Build `scripts/sync-skills.ts` script
- Validate metadata consistency
- Add pre-commit hooks
- Test generation pipeline

### Phase 3: Full Platform Support (Week 4-5)
- Option C: Generate OpenAPI + plugin.json
- Extend to Claude Marketplace (proof of concept)
- Publish RFC article on pwarnock.github.io
- Begin community outreach

### Phase 4: Strategic Reposition (Week 6-7)
- Plan rebrand (pwarnock-cc-plugins → pwarnock/agent-skills)
- Prepare migration documentation
- Execute rebrand with full changelog
- Update all external references
- Announce positioning shift

### Phase 5: Ecosystem Leadership (Ongoing)
- Maintain as reference implementation
- Collect feedback from other skill authors
- Iterate on metadata.yaml spec
- Build community around unified skill spec
- Contribute to platform standardization efforts

---

## Key Insight

The rebrand + advocacy signals: **"This is not just Claude Code plugins. It's a curated, multi-platform, interoperable skills ecosystem—and we're leading the way on standards."**

This positions pwarnock/agent-skills as:
- ✅ Reference implementation for cross-platform skills
- ✅ Thought leadership on AI agent skill standardization
- ✅ Community hub for skill sharing across ecosystems
- ✅ Proving ground for ecosystem interoperability

---

## Related Work

- [GitHub Copilot CLI vs Claude Marketplace: Specification Divergence](../../../pwarnock.github.io/main/docs/development/COPILOT_CLI_VS_CLAUDE_MARKETPLACE_SPEC.md)
- [skills.sh Documentation](https://www.skills.sh/docs/customize)
- [Copilot CLI Plugin Reference](https://docs.github.com/en/copilot/reference/copilot-cli-reference/cli-plugin-reference)

---

**Last Updated:** June 18, 2026  
**Status:** Active Planning
