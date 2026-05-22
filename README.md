# llm-hacking.com

Open database of LLM attacks, jailbreaks, and defenses. Built with [Astro](https://astro.build).

## Stack

- **Astro 5** (static site generation)
- **Tailwind CSS 3** (styling)
- **Content Collections** (markdown for hacks, type-safe)
- **TypeScript** strict
- Fonts self-hosted via `@fontsource/*` — Space Grotesk, Inter, JetBrains Mono, VT323

## Local development

```bash
npm install        # install deps
npm run dev        # dev server on http://localhost:4321
npm run build      # production build → dist/
npm run preview    # preview the production build locally
```

## Project structure

```
src/
├── content/
│   ├── config.ts       # content collection schema
│   └── hacks/          # one markdown file per hack
├── components/         # Header, Footer, HackCard, etc.
├── layouts/Layout.astro
├── pages/
│   ├── index.astro     # homepage
│   ├── about.astro
│   ├── rss.xml.ts
│   └── hacks/
│       ├── index.astro     # list all hacks
│       └── [...slug].astro # dynamic article page
└── styles/global.css
public/
├── favicon.svg / favicon-{16,32}.png
├── logo.svg
└── og-default.png
```

## Adding a hack

Create a new markdown file in `src/content/hacks/` :

```yaml
---
title: "Your hack title"
excerpt: "One-line summary."
category: "PROMPT INJECTION"   # see content/config.ts for enum
severity: "crit"               # crit | med | low
date: "2026-05-20"
readingTime: "5 min"
author: "Your name"
affects: ["gpt-4", "claude-3"]
sources: ["https://example.com/paper.pdf"]
isNew: true
featured: false
---

## Section title

Body content in markdown.
```

## Deployment

Use the script at `../../scripts/deploy.js`. See [`../../scripts/README.md`](../../scripts/README.md).

## Brand & design

All design assets, palette, typography rules, and the brand guide live in `../../design/`.

## License

Code: MIT. Content: CC BY-SA 4.0.
