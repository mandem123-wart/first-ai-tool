# env-audit

> Audit your `.env` files — find unused, undeclared, and undocumented variables across your Node.js project.

Every Node.js project eventually ends up with a messy `.env` — variables that were added months ago and never cleaned up, secrets referenced in code that never made it into `.env.example`, or variables documented for other devs that nobody actually sets. `env-audit` finds all of it in seconds.

## Features

- **Unused variables** — defined in `.env` but never used in code
- **Undeclared variables** — used in code but missing from `.env`
- **Missing from `.env.example`** — secrets you forgot to document
- **Auto-generate `.env.example`** — creates a clean redacted example file

## Install

```bash
npx env-audit audit
```

## Usage

```bash
# Audit current directory
env-audit audit

# Generate .env.example
env-audit generate
```

## License
MIT
