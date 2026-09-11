# PR Lab preview

PR Lab is a local-first pull-request learning workspace. The application is a browser-only simulation: it never runs host commands, changes a repository, or sends drafts to GitHub.

## Current scope

This published build is an implementation preview. It includes the navigation surfaces, 96 addressable level records, 24 mission routes, 192 checks, local progress persistence, backup import/export, a bounded Git workflow simulation, and offline application caching. It is not yet the finished course: the individual lesson bodies and mission contracts still need their full authored implementations.

## Local development

```bash
npm ci
npm run dev
```

## Verification

```bash
npm run validate:content
npm run test
npm run typecheck
npm run lint
npm run build
```

## Saving and privacy

Progress is saved in IndexedDB for this browser and origin. It does not synchronize between devices. Use Settings to export a JSON backup and import it on another browser or origin. The service worker caches app files for offline use after first visit.

## Publishing updates

Push a reviewed commit to `main`. The Pages workflow builds the project with the `/pr-lab/` base path and deploys the generated static artifact. GitHub Pages is free for public repositories subject to GitHub's current plan and usage limits.
