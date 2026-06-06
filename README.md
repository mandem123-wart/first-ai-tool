# first-ai-tool
Something I'm trying to create 
# document summarizer

A simple, efficient Python script designed to automatically generate structured bullet-point summaries from long-form text files using large language model APIs.

## Installation & Setup

1. Install the required official API dependency:
   ```bash
   pip install openai
   ```

2. Set your environment variable with your authorization key:
   ```bash
   export AI_API_KEY="your_api_key_here"
   ```

3. Create a local file named `document.txt` in the same directory and paste your raw text into it.

4. Execute the automation tool:
   ```bash
   python summarizer.py
   ```
# env-audit

> Audit your `.env` files — find unused, undeclared, and undocumented variables across your Node.js project.

[![npm version](https://img.shields.io/npm/v/env-audit.svg)](https://www.npmjs.com/package/env-audit)
[![npm downloads](https://img.shields.io/npm/dm/env-audit.svg)](https://www.npmjs.com/package/env-audit)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

Every Node.js project eventually ends up with a messy `.env` — variables that were added months ago and never cleaned up, secrets referenced in code that never made it into `.env.example`, or variables documented for other devs that nobody actually sets. `env-audit` finds all of it in seconds.

---

## Features

- **Unused variables** — defined in `.env` but never referenced via `process.env` in your code
- **Undeclared variables** — used in code but missing from your `.env` (runtime crashes waiting to happen)
- **Missing from `.env.example`** — secrets you forgot to document for other developers
- **Stale `.env.example` entries** — documented variables that don't exist in your actual `.env`
- **Auto-generate `.env.example`** — creates a clean, redacted example file from your current `.env` and code usage

---

## Install

```bash
# Run without installing
npx env-audit audit

# Or install globally
npm install -g env-audit
```

---

## Usage

### Audit your project

```bash
# Audit the current directory
env-audit audit

# Audit a specific directory
env-audit audit ./my-project

# Use custom file names
env-audit audit --env .env.local --example .env.example
```

**Example output:**

```
 env-audit

  Project: /my-project
  .env:    .env
  example: .env.example

 Healthy (5)
   DATABASE_URL → used in 1 file(s)
   JWT_SECRET → used in 1 file(s)
   PORT → used in 1 file(s)
   NODE_ENV → used in 1 file(s)
   STRIPE_SECRET_KEY → used in 1 file(s)

  Unused in code (2)
   Defined in .env but never referenced via process.env
   API_KEY
   OLD_WEBHOOK_SECRET

 Undeclared in .env (1)
   Used in code but missing from your .env file
   REDIS_URL → src/cache.js

 Missing from .env.example (1)
   In .env but not documented in .env.example
   STRIPE_SECRET_KEY

──────────────────────────────────────────────────
Found 4 issue(s) across 7 variable(s).
```

### Generate `.env.example`

Automatically creates a documented `.env.example` from your current `.env`, with secrets redacted and unused variables commented out.

```bash
env-audit generate

# Custom output path
env-audit generate --output .env.template
```

---

## CI / Pre-commit Integration

Use `env-audit` in CI to catch undeclared variables before they reach production:

```yaml
# .github/workflows/env-check.yml
- name: Audit env variables
  run: npx env-audit audit
```

Or as a pre-commit hook with [husky](https://github.com/typicode/husky):

```bash
npx husky add .husky/pre-commit "npx env-audit audit"
```

---

## Options

| Flag | Default | Description |
|------|---------|-------------|
| `-e, --env <file>` | `.env` | Path to your env file |
| `-x, --example <file>` | `.env.example` | Path to your example file |
| `-o, --output <file>` | `.env.example` | Output path for `generate` command |
| `--no-color` | — | Disable colored output |

---

## Supported File Types

Scans for `process.env.VAR_NAME` references in:

`.js` `.ts` `.jsx` `.tsx` `.mjs` `.cjs` `.mts` `.cts`

Ignores: `node_modules`, `.git`, `dist`, `build`, `.next`, `coverage`

---

## Programmatic API

```js
import { audit } from 'env-audit';

await audit('.', {
  env: '.env',
  example: '.env.example',
});
```

---

## License

MIT
   
