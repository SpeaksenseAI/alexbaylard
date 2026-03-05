---
globs: src/**
alwaysApply: false
---

# Web App Context

The Alex Baylard portfolio (alexbaylard.com) is a Next.js 16 marketing/portfolio site deployable on Vercel.

## Current State

- **Pages:** Landing (/) — Hero, About, Stats, Media, Contact
- **Components:** shadcn/ui primitives (Button, Card), layout components
- **No auth, no API routes, no database** — static portfolio
- Dev server: pnpm dev (default port 3000)
- Structure: src/app/, src/components/, public/

## Conventions

- App Router only — no Pages Router
- use client only when hooks or browser APIs are required
- Tailwind class order: positioning -> sizing -> spacing -> visual -> interaction
- kebab-case filenames for components
- CTAs: Book Now (Calendly or contact), View Reel, Download Resume

## When Adding New Pages or Features

- Check package.json for available dependencies before adding new ones
- Use pnpm (recommended) for package management
- Run pnpm build after substantive changes to verify no build errors
- Place static assets in public/ — reference with /filename.ext
