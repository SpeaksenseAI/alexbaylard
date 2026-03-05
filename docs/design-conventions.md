# Design Conventions — Alex Baylard Portfolio

> Guiding principles for visual and structural consistency.

## Tech Stack

| Layer | Technology |
|-------|------------|
| Framework | Next.js 16 (App Router) |
| UI | React 19, Tailwind CSS 4, shadcn/ui |
| Package Manager | pnpm |

## Tailwind Class Order

Organize utility classes in this order:

1. **Positioning** — `absolute`, `relative`, `top-0`, `z-50`
2. **Sizing** — `w-full`, `h-16`, `max-w-md`
3. **Spacing** — `p-4`, `gap-6`, `space-y-2`
4. **Visual** — `bg-*`, `border`, `rounded-lg`, `shadow`
5. **Interaction** — `hover:`, `transition-colors`, `cursor-pointer`

## Component Patterns

- **Server Components** (default) — Data fetching, static UI
- **Client Components** — Add `'use client'` only for state, hooks, browser APIs
- **File naming** — kebab-case: `media-gallery.tsx`, `header.tsx`

## Suggested Palette (Portfolio)

| Use | Color | Notes |
|-----|-------|-------|
| Hero/impact | `bg-black`, `text-white` | Dramatic, theatrical |
| Light sections | `bg-zinc-50`, `bg-white` | Clean, readable |
| Dark sections | `bg-zinc-900`, `bg-zinc-950` | Elegant contrast |
| Accents | `rounded-full` buttons | Soft, approachable |

## Content Priorities

1. **Hero** — Name, tagline (Actor • Singer • Dancer), primary CTA
2. **About** — Bio, headshot, download resume
3. **Media** — Reel, photos, credits
4. **Contact** — Book Now (Calendly), social links
