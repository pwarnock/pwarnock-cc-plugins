# Plugin Review Template

Use this template when evaluating a plugin for inclusion in the marketplace.

---

## Plugin Information

| Field | Value |
|-------|-------|
| **Plugin Name** | |
| **Repository URL** | |
| **Author** | |
| **Version** | |
| **Review Date** | |
| **Reviewer** | |

## Overview

**What does this plugin do?**

> (Brief description in your own words)

**Target users:**

> (Who would benefit from this plugin?)

**Value proposition:**

> (Why should this be in the marketplace?)

---

## Required Criteria Checklist

### Structure
- [ ] Has valid `.claude-plugin/plugin.json`
- [ ] Plugin name follows kebab-case convention
- [ ] Version follows semantic versioning

### Documentation
- [ ] README exists with clear description
- [ ] Installation instructions provided
- [ ] Usage examples included
- [ ] Environment variables documented (if applicable)

### Legal
- [ ] LICENSE file present
- [ ] License is compatible (MIT, Apache 2.0, etc.)
- [ ] Attribution requirements clear

### Functionality
- [ ] Plugin installs without errors
- [ ] Core features work as documented
- [ ] Error handling is reasonable
- [ ] No obvious bugs in main paths

---

## Security Review

### Code Inspection
- [ ] No hard-coded credentials
- [ ] No suspicious network requests
- [ ] Hook scripts are safe to execute
- [ ] MCP servers don't expose sensitive data

### Dependencies
- [ ] Dependencies from trusted sources
- [ ] No typosquatting packages
- [ ] No known vulnerabilities

### Permissions
- [ ] Only requests necessary permissions
- [ ] Tool restrictions are appropriate
- [ ] No unexpected file system access

**Security concerns noted:**

> (List any concerns, even minor ones)

---

## Quality Scoring

Rate each category 1-5 (1=poor, 5=excellent):

| Category | Score | Notes |
|----------|-------|-------|
| **Usefulness** (30%) | /5 | |
| **Code Quality** (25%) | /5 | |
| **Documentation** (20%) | /5 | |
| **Security** (15%) | /5 | |
| **Maintenance** (10%) | /5 | |

**Weighted Score:** ___/5

---

## Component Review

### Commands (if present)
| Command | Works? | Notes |
|---------|--------|-------|
| | [ ] | |

### Skills (if present)
| Skill | Triggers correctly? | Notes |
|-------|---------------------|-------|
| | [ ] | |

### Agents (if present)
| Agent | Invokes correctly? | Notes |
|-------|---------------------|-------|
| | [ ] | |

### Hooks (if present)
| Hook | Executes safely? | Notes |
|------|------------------|-------|
| | [ ] | |

### MCP Servers (if present)
| Server | Connects? | Notes |
|--------|-----------|-------|
| | [ ] | |

---

## Comparison

**Similar plugins in marketplace:**

> (List any existing plugins that overlap in functionality)

**Why include this one?**

> (What makes it different/better?)

---

## Issues Found

### Blocking Issues (must fix before inclusion)
1.

### Minor Issues (nice to fix)
1.

### Suggestions for improvement
1.

---

## Decision

- [ ] **ACCEPT** - Meets all requirements
- [ ] **ACCEPT WITH CONDITIONS** - Include after author addresses blocking issues
- [ ] **REJECT** - Does not meet standards (see blocking issues)
- [ ] **DEFER** - Need more information

**Reasoning:**

> (Explain the decision)

---

## Follow-up

**If accepted:**
- [ ] Add to marketplace.json
- [ ] Update README plugins table
- [ ] Notify author

**If rejected:**
- [ ] Create issue on plugin repo with feedback
- [ ] Close submission issue with explanation

---

*Template version: 1.0*
