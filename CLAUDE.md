# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a TypeScript library project designed to test JavaScript releases with GitHub Actions. The project uses Vite for building and Vitest for testing.

## Technology Stack

- **TypeScript 5.9+**: Type-safe JavaScript with ES2020 target
- **Vite 7.3+**: Build tool and dev server
- **Vitest 4.0+**: Testing framework with V8 coverage
- **Node.js**: Runtime environment (ES2020 compatible)

## Essential Commands

### Build

```bash
pnpm run build
```

Compiles TypeScript to JavaScript using `tsc`. Output goes to `./dist` directory.

### Testing

```bash
# Run all tests with coverage
pnpm test

# Watch mode for development
pnpm run test:watch
```

Tests use Vitest with the following coverage configuration:

- Provider: V8
- Reports: text, json, json-summary, html, lcov
- Coverage includes: `src/**/*.ts`
- Coverage excludes: `src/**/*.test.ts`, `src/**/*.spec.ts`

### Verification

```bash
# Run all verification checks
pnpm run verify

# Check code formatting only
pnpm run verify:format
```

Uses Prettier to check formatting of `**/*.{js,json,md}` files.

### Package

```bash
pnpm run package
```

Creates a `dist` directory and test artifacts for publishing.

## Project Structure

```
src/
├── Calculator.ts       # Main implementation files
└── Calculator.test.ts  # Vitest test files (*.test.ts or *.spec.ts)

dist/                   # Build output (TypeScript compiled files)
```

## TypeScript Configuration

The project uses strict TypeScript settings:

- Target: ES2020
- Module: ESNext
- Node module resolution
- Declaration files and source maps generated
- All strict checks enabled

## Testing Guidelines

- Test framework: Vitest with globals enabled
- Test environment: Node.js
- Test file naming: `*.test.ts` or `*.spec.ts`
- Coverage is mandatory and reported on failure
- Tests run in Node environment with globals available

## Publishing Configuration

The project has two registry configurations:

- **Snapshot registry**: `http://develop.sitepark.com/nexus/repository/npm-internal`
- **Release registry**: `https://registry.npmjs.org`

Version format follows semantic versioning with snapshot suffix (e.g., `2.3.0-SNAPSHOT`).

## Development Workflow

1. Make changes to TypeScript files in `src/`
2. Run tests in watch mode: `pnpm run test:watch`
3. Verify formatting: `pnpm run verify:format`
4. Build the project: `pnpm run build`
5. Package for distribution: `pnpm run package`

## Running Individual Tests

To run a specific test file:

```bash
pnpm exec vitest run src/Calculator.test.ts
```

To run tests matching a pattern:

```bash
pnpm exec vitest run -t "pattern"
```

To run a single test in watch mode:

```bash
pnpm exec vitest watch src/Calculator.test.ts
```
