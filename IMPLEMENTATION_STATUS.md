# PR Lab implementation status

This repository is the sanitized application only. It does not contain the supplied build kit, private reports, personal paths, credentials, browser data, or reference PNGs.

## Current scope

- Course engine: 96 addressable levels, 24 mission routes, 192 answer checks.
- Local persistence: IndexedDB progress, answers, mission snapshots, drafts, preferences, resume cursor, export/import.
- Simulation: bounded fixture actions for edit, stage, commit, push, draft, ready, validation, merge, and reset.
- Surfaces: path, lesson, practice, workbench, reference atlas, settings, responsive dark/light UI, PWA configuration.

## Required verification before publication

- Install dependencies, run lint, typecheck, content validation, unit tests, production build, and browser checks.
- Review the source and built output for private context before committing.
- Confirm the target GitHub account and whether `pr-lab` already exists before creating or pushing a public repository.
