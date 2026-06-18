# Templates Subsystem

> On-demand spec loaded when entering `templates/` subsystem

## Overview

The `templates/` directory contains scaffold templates used to generate new plugins, skills, and other artifacts.

## Structure

```
templates/
  {template-name}/
    ...               # Template files
```

## Conventions

- Templates are the source of truth for new artifact structure
- Template files may use placeholder tokens (e.g., `{{name}}`, `{{version}}`)
- Do not add business logic to templates — keep them structural only
- Update templates when conventions change

## Using a Template

Templates are typically invoked via a scaffolding skill or script:
```bash
# Example (actual command depends on implementation)
bunx scaffold --template plugin-template --name my-plugin
```

## Adding a New Template

1. Create a directory under `templates/`
2. Add template files with appropriate placeholder tokens
3. Document placeholder tokens in a `TEMPLATE.md` file
4. Wire up to a scaffolding script or skill if appropriate
