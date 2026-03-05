# Alex Baylard | Portfolio

A modern, responsive portfolio website for Alex Baylard - Actor, Singer, Dancer. Built with Next.js 15, React 19, Tailwind CSS, and shadcn/ui.

## 🚀 Features

- **Modern Tech Stack**: Next.js App Router, React Server Components
- **Beautiful UI**: Built with Tailwind CSS and shadcn/ui components
- **Responsive Design**: Mobile-first approach, looks great on all devices
- **SEO Optimized**: Pre-configured metadata and optimal semantic structure
- **Fast Performance**: Optimized fonts and image handling

## 📋 Requirements

- Node.js 18+ 
- pnpm (recommended) or npm/yarn

## 🚀 Quick Start

### Step 1: Install Dependencies
```bash
pnpm install
```

### Step 2: Run Development Server
```bash
pnpm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🌐 Deployment to Vercel

This project is optimized for deployment on Vercel. 

1. Push this repository to your GitHub account.
2. Log in to [Vercel](https://vercel.com).
3. Click "Add New" -> "Project".
4. Import your GitHub repository.
5. Vercel will automatically detect Next.js. Leave default settings and click **Deploy**.
6. Once deployed, go to the project **Settings** -> **Domains** to connect `alexbaylard.com`.

## 📁 Project Structure

```
.
├── src/
│   ├── app/           # App router, pages, and layouts
│   ├── components/    # Reusable UI components (shadcn)
│   └── lib/           # Utility functions
├── public/            # Static assets (images, icons)
└── package.json       # Project dependencies
```

## 🖼️ Updating Assets

To update the placeholder images, place your high-resolution photos in the `public/` directory and update the `src/app/page.tsx` file to reference them. Suggested images:
- Headshot for the About section
- Hero background image or video reel

---

Created for Alex Baylard - March 2026
