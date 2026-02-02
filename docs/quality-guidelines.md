# Quality Guidelines

Standards for plugins in this marketplace. We prioritize quality over quantity.

## Philosophy

This marketplace follows the "Awesome List" model:
- **Curated, not comprehensive** - We include quality plugins, not every plugin
- **Maintained standards** - Plugins must meet and continue to meet quality criteria
- **Clear value proposition** - Each plugin solves a real problem

## Acceptance Criteria

### Required (Must Have)

| Criterion | Why It Matters |
|-----------|----------------|
| Valid `.claude-plugin/plugin.json` | Plugin won't load without it |
| Clear description and purpose | Users need to understand what it does |
| README with installation instructions | Users need to know how to use it |
| LICENSE file | Legal clarity for users |
| Tested and working | Broken plugins waste user time |
| No security vulnerabilities | Protect users |
| Repository is accessible | Users need to install it |

### Recommended (Should Have)

| Criterion | Why It Matters |
|-----------|----------------|
| Semantic versioning | Users can track changes |
| CHANGELOG | Users know what changed |
| Examples and usage docs | Reduces support burden |
| Error handling | Better user experience |
| Active maintenance (<6 months) | Ensures compatibility |
| Environment variable documentation | Users can configure properly |

## Security Review Checklist

Before adding any plugin:

### Code Review
- [ ] No hard-coded credentials or API keys
- [ ] No suspicious network requests to unknown hosts
- [ ] No obfuscated or minified code without source
- [ ] Dependencies are from trusted sources
- [ ] Hook scripts don't run dangerous commands (`rm -rf`, etc.)
- [ ] MCP servers don't expose sensitive system information

### Permission Review
- [ ] Plugin only requests necessary permissions
- [ ] Tool restrictions in agents are appropriate
- [ ] Hooks don't modify files outside expected scope
- [ ] No attempts to access user credentials

### Dependency Review
- [ ] npm/pip packages are from official registries
- [ ] No typosquatting package names
- [ ] Dependencies have reasonable download counts
- [ ] No known vulnerabilities in dependencies

## Quality Review Checklist

### Documentation Quality
- [ ] README explains what the plugin does
- [ ] Installation steps are clear and complete
- [ ] Configuration requirements documented
- [ ] Usage examples provided
- [ ] Troubleshooting section for common issues

### Code Quality
- [ ] Code is readable (no clever tricks without explanation)
- [ ] Error messages are helpful
- [ ] No obvious bugs or edge cases
- [ ] Follows Claude Code plugin conventions

### Maintenance Quality
- [ ] Repository shows recent activity
- [ ] Issues/PRs are responded to
- [ ] Breaking changes are documented
- [ ] Version follows semantic versioning

## Plugin Categories

### Integration Plugins
Connect Claude Code to external services (Notion, GitHub, databases).

**Additional requirements:**
- [ ] API authentication is properly handled
- [ ] Rate limiting is considered
- [ ] Graceful degradation when service unavailable
- [ ] Clear setup instructions for API keys

### Skill Plugins
Provide workflows, best practices, or domain knowledge.

**Additional requirements:**
- [ ] Skills have clear trigger phrases
- [ ] Content is accurate and up-to-date
- [ ] Source attribution where applicable
- [ ] Not just copied documentation

### Wrapper Plugins
Curate external content for Claude Code.

**Additional requirements:**
- [ ] Original source credited prominently
- [ ] License compatibility verified
- [ ] Update mechanism documented
- [ ] Submodule or clear update path to upstream

## Scoring System

When evaluating plugins, score each category 1-5:

| Category | Weight | Questions to Ask |
|----------|--------|------------------|
| **Usefulness** | 30% | Does it solve a real problem? Would I use it? |
| **Quality** | 25% | Is the code well-written? Good error handling? |
| **Documentation** | 20% | Can a new user get started easily? |
| **Security** | 15% | Any concerns about what it accesses? |
| **Maintenance** | 10% | Is it actively maintained? Will it keep working? |

**Thresholds:**
- **4.0+**: Excellent - include immediately
- **3.0-3.9**: Good - include after addressing minor issues
- **2.0-2.9**: Moderate - needs significant improvement first
- **<2.0**: Not suitable for inclusion

## Rejection Reasons

Common reasons plugins are not accepted:

| Reason | Example |
|--------|---------|
| Security concern | Hard-coded API keys, suspicious network calls |
| Abandoned | No updates in >1 year, broken functionality |
| Duplicate | Solves same problem as existing plugin without improvement |
| Low quality | Missing docs, poor error handling, confusing design |
| License issues | Incompatible license, unclear attribution |
| Scope creep | Tries to do too many unrelated things |

## Removal Criteria

Plugins may be removed if:

- **Security vulnerability discovered** (immediate)
- **Abandoned** (>1 year no updates, no response to issues)
- **Broken** (no longer works with current Claude Code)
- **License violation** (terms change, attribution missing)
- **Negative feedback** (consistent user complaints)
- **Superseded** (better alternative available)

**Removal process:**
1. Document reason for removal
2. Open issue on plugin repository (if possible)
3. Wait 30 days for response (unless security issue)
4. Remove from marketplace.json
5. Update README and CHANGELOG
6. Bump marketplace version

## Submitting a Plugin

To submit a plugin for inclusion:

1. **Self-review** using the checklists above
2. **Open an issue** at [pwarnock/pwarnock-cc-plugins](https://github.com/pwarnock/pwarnock-cc-plugins/issues)
3. **Include:**
   - Plugin repository URL
   - Brief description of what it does
   - Why it would be valuable to include
   - Self-assessment against quality criteria

We'll review within 2 weeks and provide feedback.

## Maintaining Standards

### For Plugin Authors

To stay in the marketplace:
- Respond to security reports promptly
- Keep dependencies updated
- Fix breaking changes within 30 days
- Maintain documentation accuracy

### For Marketplace Maintainers

- Review plugins monthly for continued compliance
- Test plugins after Claude Code updates
- Remove plugins that no longer meet standards
- Communicate clearly with authors before removal
