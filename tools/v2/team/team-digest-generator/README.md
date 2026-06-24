# Team Digest Generator

This folder is the isolated workspace for the Team Digest Generator tool.

## Ownership boundary

All work for this tool must stay inside:

```
.tools/v2/team/team-digest-generator/
```

Do not wire this tool into the main app, routing, inbox architecture, wallet core, Stellar core, database schema, or existing design system unless a future integration issue explicitly allows it.

## What this tool provides

A folder-local summary engine for generating daily team digests from structured update items.

### Included files

- `src/digestGenerator.ts` — core summary generation logic
- `src/fixtures.ts` — deterministic sample team update items
- `src/digestGenerator.test.ts` — unit tests covering the digest behavior

## Local validation

Run only the folder-local tests from the repo root:

```bash
cd c:/Users/HP/gfox/stealth
npx vitest run tools/v2/team/team-digest-generator/src/digestGenerator.test.ts
```

## Review notes

Reviewers should verify that:

- authors, project counts, and tag counts are aggregated correctly
- action items are preserved and filtered by `isActionItem`
- top subjects are ranked by frequency and limited to the configured top count
- the implementation is isolated to this folder and does not touch app-wide code
- documentation explains setup, usage, fixtures, and review expectations

## Known limitations

- This issue implements only the core data engine, not UI or main app integration.
- The tool works with in-memory item inputs only.
- Date formatting is ISO-only and not localized.

## Follow-up

Future issues may add UI, persistence, mail integration, or digest delivery.
