# First Layer

Personal site of Jun Seo: a portfolio of projects plus posts. Built with [Astro](https://astro.build), hosted on Cloudflare Pages.

## Run it locally

```bash
npm install        # first time only
npm run dev        # preview at http://localhost:4321 (drafts are visible here)
npm run build      # build the live site into dist/ (drafts are hidden)
```

## Add content (no code needed)

Use lowercase words joined by hyphens for file and folder names; they become the URL.

### New post: `src/content/posts/<slug>.md` → `/posts/<slug>/`

~~~md
---
title: "Tuning the first layer on a Bambu P1S"
description: "One sentence. Shown on cards and in RSS."
date: 2026-11-05
type: tutorial              # tutorial | general  (drives the filter buttons on /posts)
tags: [3d-printing, bambu]
draft: false                # true = only visible in `npm run dev`
---

Write in Markdown. Code blocks are highlighted automatically:

```python
print("hello")
```
~~~

Reading time is calculated for you. Optional field: `updated: 2026-12-01`.
Post images go in `public/images/posts/`, then `![Alt text](/images/posts/file.png)`.

### New project: a folder `src/content/projects/<slug>/` → `/projects/<slug>/`

Put `index.md` and the project's photos in the same folder:

```
src/content/projects/my-robot/
├── index.md
├── cover.jpg
├── build-1.jpg
└── build-2.jpg
```

`index.md`:

~~~md
---
title: "Project name"
description: "Two or three sentences. Shown on the card and at the top of the page."
categories: [robotics, cad-3d-printing]   # robotics | cad-3d-printing | software | games | research
tech: [Fusion 360, C++]
github: https://github.com/jun0032/repo   # optional
demo: https://example.com                 # optional
cover: ./cover.jpg                        # optional; neutral placeholder if left out
gallery:                                  # optional
  - image: ./build-1.jpg
    caption: "Drivetrain before wiring"
  - image: ./build-2.jpg
date: Fall 2026                           # free text
order: 5                                  # lower = shown first
featured: true                            # also show on the home page
draft: false                              # true = only visible in `npm run dev`
---

## Overview

What it is, why you built it, what you learned.

## Build log

### 2026-11-05: Drivetrain

What you worked on, what broke, how you fixed it.
~~~

Photos straight off your phone are fine: the build resizes them and converts them to WebP automatically.
The 10 draft projects already have this template filled in with `TODO`s.

### Publish

```bash
git add .
git commit -m "Add project: my robot"
git push
```

Cloudflare Pages rebuilds and deploys in about a minute. You can also add or edit files directly on github.com.

## Resume

Replace `resume/resume_web.pdf` (compile it from `resume/resume_web.tex`, e.g. in Overleaf) and push.
It's copied to the site automatically on every build (`scripts/copy-resume.mjs`), so don't put it in `public/`.
If `npm run dev` is already running, restart it to pick up a new PDF.

## Other things you might edit

| What | Where |
|---|---|
| Site name, tagline, email, social links, contact-form key | `src/data/site.ts` |
| Navigation, post types, project categories | `src/data/site.ts` |
| Site URL | `astro.config.mjs` → `site` |
| Colors and fonts | `src/styles/global.css` (top of file) |
| About page text | `src/pages/about.astro` |
| Resume text version | `src/pages/resume.astro` |
| Redirects | `public/_redirects` |

## Contact form

1. Get a free access key at <https://web3forms.com> using `jun.seo2213@gmail.com`.
2. Paste it into `web3formsKey` in `src/data/site.ts`.

Until then the About page shows the email address only.

## Deployment (Cloudflare Pages)

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
