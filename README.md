# First Layer

Personal site of Jun Seo: tutorials, blog, and projects. Built with [Astro](https://astro.build), hosted on Cloudflare Pages.

## Run it locally

```bash
npm install        # first time only
npm run dev        # preview at http://localhost:4321 (drafts are visible here)
npm run build      # build the live site into dist/ (drafts are hidden)
```

## Add content (no code needed)

The **filename becomes the URL**. Use lowercase words joined by hyphens, e.g. `bambu-first-layer-tips.md` → `/tutorials/bambu-first-layer-tips/`.

### New tutorial: `src/content/tutorials/<slug>.md`

~~~md
---
title: "Tuning the first layer on a Bambu P1S"
description: "One sentence. Shown on cards and in RSS."
date: 2026-11-05
category: cad-3d-printing   # robotics | cad-3d-printing | cs | gaming | climbing | misc
tags: [3d-printing, bambu]
draft: false                # true = only visible in `npm run dev`
---

Write in Markdown. Code blocks are highlighted automatically:

```python
print("hello")
```
~~~

Reading time is calculated for you. Optional field: `updated: 2026-12-01`.

### New blog post: `src/content/blog/<slug>.md`

Same as a tutorial, but **no `category`** line.

### New project: `src/content/projects/<slug>.md`

```md
---
title: "Project name"
description: "Two or three sentences."
tech: [Python, Fusion 360]
github: https://github.com/jun0032/repo      # optional
demo: https://example.com                    # optional
image: /images/projects/project-name.png     # optional; placeholder shown if missing
date: Fall 2026                              # optional, free text
order: 5                                     # lower = shown first
featured: true                               # show on the home page
---
```

### Images

- Project screenshots → `public/images/projects/` (16:9 looks best, ~1280×720)
- Post images → `public/images/posts/`, then in Markdown: `![Alt text](/images/posts/file.png)`

### Publish

```bash
git add .
git commit -m "Add tutorial: first layer tuning"
git push
```

Cloudflare Pages rebuilds and deploys in about a minute. You can also add or edit files directly on github.com.

## Other things you might edit

| What | Where |
|---|---|
| Site name, tagline, email, social links, contact-form key | `src/data/site.ts` |
| Site URL (change when junseo.dev is live) | `astro.config.mjs` → `site` |
| Colors and fonts | `src/styles/global.css` (top of file) |
| About page text | `src/pages/about.astro` |
| Resume page text | `src/pages/resume.astro` |
| Resume PDF | compile `resume/resume_web.tex` (e.g. in Overleaf), save as `public/resume.pdf` |

## Contact form

1. Get a free access key at <https://web3forms.com> using `jun.seo2213@gmail.com`.
2. Paste it into `web3formsKey` in `src/data/site.ts`.

Until then the About page shows the email address only.

## Deployment (Cloudflare Pages)

One-time setup: Cloudflare dashboard → **Workers & Pages → Create → Pages → Connect to Git** → pick this repo.

| Setting | Value |
|---|---|
| Framework preset | Astro |
| Build command | `npm run build` |
| Build output directory | `dist` |
| Production branch | `main` |
| Environment variable | `NODE_VERSION` = `22` |

Every push to `main` deploys the live site; other branches get preview URLs.

### Switching to junseo.dev

1. Buy `junseo.dev` in Cloudflare (Domain Registration).
2. Pages project → **Custom domains → Set up a custom domain** → `junseo.dev` (repeat for `www.junseo.dev`).
3. In `astro.config.mjs`, set `site: 'https://junseo.dev'`, then commit and push.
4. Optional: add a redirect rule so `www` and the `pages.dev` address go to `junseo.dev`.
