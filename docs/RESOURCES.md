# Plugin Development Resources

> **This page is your starting point for finding plugin documentation.**
>
> Rather than duplicating official docs (which get stale), this marketplace curates and links to the best resources for Claude Code plugin development.

## Official Documentation

### Claude Code Docs
- [Claude Code Plugins](https://docs.anthropic.com/en/docs/claude-code/plugins) - Official plugin documentation
- [Claude Code Hooks](https://docs.anthropic.com/en/docs/claude-code/hooks) - Hook event reference
- [Claude Code MCP](https://docs.anthropic.com/en/docs/claude-code/mcp) - MCP server integration

### Official plugin-dev Plugin

The `plugin-dev` plugin from Anthropic contains comprehensive, always-current development skills. **This is the authoritative source for plugin development guidance.**

**Install:**
```bash
/plugin install anthropic/plugin-dev
```

**Available Skills:**

| Skill | Use For |
|-------|---------|
| `plugin-dev:plugin-structure` | Creating plugins, scaffolding, manifest format |
| `plugin-dev:hook-development` | PreToolUse, PostToolUse, Stop hooks |
| `plugin-dev:agent-development` | Creating specialized subagents |
| `plugin-dev:mcp-integration` | Adding MCP servers to plugins |
| `plugin-dev:skill-development` | Writing skills, trigger phrases, SKILL.md format |
| `plugin-dev:command-development` | Creating slash commands |
| `plugin-dev:plugin-settings` | User-configurable settings |

**Usage:** Just describe what you want to build and Claude will use the appropriate skill.

## MCP (Model Context Protocol)

- [MCP Specification](https://spec.modelcontextprotocol.io/) - Protocol specification
- [MCP SDK](https://github.com/modelcontextprotocol/sdk) - TypeScript/JavaScript SDK
- [Official MCP Servers](https://github.com/modelcontextprotocol/servers) - Reference implementations

## Community Resources

### Curated Collections
- [Everything Claude Code](https://github.com/affaan-m/everything-claude-code) - Community knowledge base
- [Context7 Docs](https://context7.com) - Library documentation lookup (available via MCP)

### Example Plugins
- [Notion Plugin](https://github.com/makenotion/claude-code-notion-plugin) - Official Notion integration
- [This Marketplace's Plugins](../README.md#plugins) - Real-world examples

## This Marketplace's Guides

These guides are **unique to this marketplace** and cover curation and management:

| Guide | Purpose |
|-------|---------|
| [Marketplace Management](./marketplace-management.md) | Running a plugin marketplace |
| [Skill Curation](./skill-curation.md) | Evaluating and wrapping external skills |
| [Quality Guidelines](./quality-guidelines.md) | Standards for marketplace inclusion |

### Quick Reference Docs

These provide condensed overviews with links to authoritative sources:

| Guide | Purpose | For Complete Docs |
|-------|---------|-------------------|
| [Plugin Development](./plugin-development.md) | Plugin structure overview | `plugin-dev:plugin-structure` |
| [MCP Integration](./mcp-integration.md) | MCP configuration overview | `plugin-dev:mcp-integration` |

## Finding What You Need

### "I want to create a plugin from scratch"
1. Install `plugin-dev`: `/plugin install anthropic/plugin-dev`
2. Describe your plugin idea - Claude will use `plugin-dev:create-plugin`
3. Or use this marketplace's [create-plugin skill](../skills/create-plugin/SKILL.md) for a guided workflow

### "I want to add hooks to my plugin"
→ Use `plugin-dev:hook-development` (install plugin-dev first)

### "I want to add an MCP server"
→ Use `plugin-dev:mcp-integration` (install plugin-dev first)

### "I want to find quality plugins"
→ Browse [this marketplace's catalog](../README.md#plugins)

### "I want to evaluate a plugin for inclusion"
→ See [Quality Guidelines](./quality-guidelines.md)

### "I want to run my own marketplace"
→ See [Marketplace Management](./marketplace-management.md)

### "I want to wrap external skills"
→ See [Skill Curation](./skill-curation.md)

## Contributing

Found a great resource? [Open an issue](https://github.com/pwarnock/pwarnock-cc-plugins/issues) to suggest additions.
