# 🤖 Alex Baylard — Cursor Subagents

Web-focused subagents for Cursor Agent. Tuned for portfolio site development.

## Quick Setup

Copy agents into Cursor's agents directory:

```powershell
# PowerShell (from repo root)
New-Item -ItemType Directory -Force -Path .cursor\agents
Copy-Item -Path cursor-agents\*.md -Destination .cursor\agents\
```

```bash
# Bash
mkdir -p .cursor/agents
cp cursor-agents/*.md .cursor/agents/
```

## Subagents

| Agent | Use When |
|-------|----------|
| **web-specialist** | Editing src/, React, Next.js, Tailwind |
| **verifier** | Validating completed work |

## Invocation

- **Automatic:** Agent delegates based on task and `description` field
- **Explicit:** `/web-specialist add media gallery` or `Use the verifier to check the build`
