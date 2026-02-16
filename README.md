# Claude Code Plugin Marketplace

> **Curated plugins for Claude Code** - Quality over quantity.

This marketplace curates high-quality Claude Code plugins that solve real problems. We don't duplicate official documentation; we help you find the best tools and resources.

## Quick Start

**1. Add this marketplace:**
```bash
/plugin marketplace add pwarnock/pwarnock-cc-plugins
```

**2. Install a plugin:**
```bash
/plugin install personal-crm@pwarnock-cc-plugins
```

## Plugins

| Plugin | Description |
|--------|-------------|
| [personal-crm](https://github.com/pwarnock/personal-crm) | Capture meetups, contacts, and interactions from natural language into Notion CRM |
| [Notion](https://github.com/makenotion/claude-code-notion-plugin) | Notion Skills + Notion MCP server packaged as a Claude Code plugin |
| [kjbc](https://github.com/pwarnock/kjbc-mcp) | Strong's Concordance MCP - Grounded Greek/Hebrew word lookups for AI |
| [vercel-skills](https://github.com/pwarnock/vercel-skills) | Curated Vercel developer toolkit: React best practices, web design guidelines, browser automation, and deployment |
| [githits-mcp](https://github.com/pwarnock/githits-mcp) | GitHits MCP server - Search millions of code examples from open source repositories |
| [gastown-parallel-workflow](https://github.com/pwarnock/gastown-parallel-workflow) | Bridge Gastown cross-session orchestration with in-session subagent parallelization |
| [prisma-skills](https://github.com/pwarnock/prisma-skills) | Prisma 7 migration and best practices skills for Claude Code |

Each plugin may require environment variables. See individual plugin READMEs for setup.

## Finding Documentation

### Want to create a plugin?

**Best approach:** Install the official `plugin-dev` plugin:
```bash
/plugin install anthropic/plugin-dev
```
Then describe what you want to build - Claude will use the appropriate development skill.

**Alternative:** Use our [create-plugin skill](skills/create-plugin/SKILL.md) for a guided workflow.

### Looking for specific guidance?

| I want to... | Go here |
|--------------|---------|
| Find all documentation links | [docs/RESOURCES.md](docs/RESOURCES.md) |
| Understand plugin structure | `plugin-dev:plugin-structure` or [quick reference](docs/plugin-development.md) |
| Add MCP servers | `plugin-dev:mcp-integration` or [quick reference](docs/mcp-integration.md) |
| Create hooks | `plugin-dev:hook-development` |
| Write skills | `plugin-dev:skill-development` |
| Run a marketplace | [docs/marketplace-management.md](docs/marketplace-management.md) |
| Curate external skills | [docs/skill-curation.md](docs/skill-curation.md) |

## Quality Standards

All plugins in this marketplace meet our [quality guidelines](docs/quality-guidelines.md):

- **Tested and working** with current Claude Code
- **Security reviewed** for safe usage
- **Well documented** with clear setup instructions
- **Actively maintained** (or stable and complete)

## Contributing

### Submit a Plugin

1. Review our [quality guidelines](docs/quality-guidelines.md)
2. Self-check against the [review template](templates/plugin-review.md)
3. [Open an issue](https://github.com/pwarnock/pwarnock-cc-plugins/issues) with:
   - Repository URL
   - Brief description
   - Why it would be valuable

### Suggest a Resource

Found a great plugin development resource? [Open an issue](https://github.com/pwarnock/pwarnock-cc-plugins/issues) to suggest adding it to [RESOURCES.md](docs/RESOURCES.md).

## Documentation

| Guide | Purpose |
|-------|---------|
| [Resources Index](docs/RESOURCES.md) | Find documentation and learning resources |
| [Quality Guidelines](docs/quality-guidelines.md) | Standards for marketplace inclusion |
| [Marketplace Management](docs/marketplace-management.md) | Running a plugin marketplace |
| [Skill Curation](docs/skill-curation.md) | Evaluating and wrapping external skills |
| [Plugin Development](docs/plugin-development.md) | Quick reference (see plugin-dev for complete docs) |
| [MCP Integration](docs/mcp-integration.md) | Quick reference (see plugin-dev for complete docs) |

## License

MIT - See individual plugins for their licenses.
