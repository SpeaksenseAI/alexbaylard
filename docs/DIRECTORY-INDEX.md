# 🗺️ Alex Baylard Portfolio — Documentation Directory

> **Canonical Master Index:** Architected for AI agents and developers to rapidly orient within the repository.

⚡ **TL;DR:** Personal portfolio website for Alex Baylard (Actor, Singer, Dancer). Next.js 16, React 19, Tailwind CSS, shadcn/ui. Production target: alexbaylard.com on Vercel.

---

## 🎯 Architectural Orientation

**Key Navigation Vectors:**
- **Project Structure:** `src/app/`, `src/components/`, `public/`
- **Tech Stack:** Next.js App Router, React Server Components, Tailwind, shadcn/ui
- **Deployment:** Vercel (auto-detect Next.js)

---

## 📁 Ecosystem Map

| Subsystem | Function | Core Artifacts |
|-----------|----------|----------------|
| **`src/app/`** | Pages and layouts | `page.tsx`, `layout.tsx`, `globals.css` |
| **`src/components/`** | Reusable UI | shadcn primitives (Button, Card), custom components |
| **`public/`** | Static assets | Images, icons, favicon |
| **`docs/`** | Documentation | This index, design-conventions.md |

---

## 🌐 Web App Structure

| Artifact | Function |
|----------|----------|
| **`src/app/page.tsx`** | Landing: Hero, About, Stats, Media, Contact |
| **`src/app/layout.tsx`** | Root layout, metadata, fonts |
| **`src/components/ui/`** | shadcn/ui primitives |
| **`public/`** | Headshots, reel video, favicon |

---

## ⚙️ Engineering Conventions

- **App Router only** — no Pages Router
- **Server Components by default** — add `'use client'` only when state, hooks, or browser APIs
- **Tailwind class order:** positioning → sizing → spacing → visual → interaction
- **File naming:** kebab-case for components (e.g. `header.tsx`, `media-gallery.tsx`)
- **Package manager:** pnpm (or npm/yarn)

---

## 🚀 Deployment Checklist

1. Push to GitHub
2. Import to Vercel → Auto-detect Next.js
3. Add domain: alexbaylard.com
4. Update `public/` with headshots and reel
