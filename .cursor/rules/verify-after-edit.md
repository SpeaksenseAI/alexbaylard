---
alwaysApply: true
---

# Post-Edit Verification

After substantive changes, validate before declaring done.

## Web Changes (src/**)

- Run: pnpm build (from repo root) — must pass with zero errors
- If adding new routes: verify the page renders via pnpm dev and check in browser
- If modifying components: verify no TypeScript errors via pnpm build

## Documentation Changes (*.md)

- Verify internal links resolve (file paths referenced actually exist)
- Use active voice, tables over paragraphs where appropriate
