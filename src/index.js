#!/usr/bin/env node

import { program } from 'commander';
import { audit } from './audit.js';
import { readFileSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const pkg = JSON.parse(readFileSync(join(__dirname, '../package.json'), 'utf8'));

program
  .name('env-audit')
  .description('Audit your .env files — find unused, undeclared, and undocumented variables')
  .version(pkg.version);

program
  .command('audit [dir]')
  .alias('a')
  .description('Audit env variables in a project directory')
  .option('-e, --env <file>', '.env file to audit', '.env')
  .option('-x, --example <file>', '.env.example file to compare against', '.env.example')
  .option('--no-color', 'disable colored output')
  .action(async (dir = '.', options) => {
    await audit(dir, options);
  });

program
  .command('generate [dir]')
  .alias('g')
  .description('Generate a .env.example from your .env and code usage')
  .option('-e, --env <file>', '.env file to read from', '.env')
  .option('-o, --output <file>', 'output file', '.env.example')
  .action(async (dir = '.', options) => {
    const { generate } = await import('./generate.js');
    await generate(dir, options);
  });

program.parse();
