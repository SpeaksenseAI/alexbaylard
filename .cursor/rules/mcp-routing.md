---
alwaysApply: true
---

# MCP Tool Routing

Use MCP tools instead of writing scripts when the tool already handles the task.

## Active MCPs (Relevant for Portfolio)

| MCP | When to Use | Instead of |
|-----|-------------|------------|
| **GitHub** | Repo operations, issues, PRs | Manual git commands for GitHub-specific tasks |
| **Context7** | Look up Next.js, React, Tailwind, shadcn docs | Guessing API usage or outdated docs |
| **Browser (cursor-ide-browser)** | Test live site, verify responsive layout | Manual verification only |

## Optional (If Needed Later)

| MCP | When to Use |
|-----|-------------|
| **Stripe** | If adding paid booking/subscriptions |
| **Notion** | Content calendar, blog drafts |
| **Gmail** | Contact form integration |

## Routing Heuristics

- **Need Next.js/React/Tailwind API reference?** -> Context7 MCP
- **Need to test the site in browser?** -> cursor-ide-browser
- **Need GitHub workflows?** -> GitHub MCP
