# Thoretech Website — Setup

## Stack
- Vanilla HTML5 + custom CSS, no frameworks
- Hosted on Cloudflare Pages (free tier)
- Source repo: https://github.com/thoredee/thoretech-website

## Pipeline
1. Edit files locally in this folder (`C:\Users\thore\OneDrive\thoretech-website\`)
2. `git add` / `git commit` / `git push origin main`
3. Cloudflare Pages watches the `main` branch and auto-redeploys on every push — no manual trigger needed

## Cloudflare Pages config
- Production branch: `main`
- Framework preset: None
- Build command: (none)
- Build output directory: `/`
- Live URL: https://thoretech-website.pages.dev/

## Local git identity
Set locally (not global) for this repo only:
- user.email: thorespdonner@gmail.com
- user.name: Thore Donner

## Folder structure
```
thoretech-website/
  index.html
  small-business.html
  enterprise.html
  about.html
  contact.html
  css/
    style.css
  js/
    main.js
  images/
    icon.png, carpenter.jpg, florist.jpg, teacher.jpg,
    hairdresser2.jpg, office.jpg, hero-visual.png
  docs/
    SETUP.md
    PROGRESS.md
  .gitignore
```

Five-page marketing site (Home, Small business, Enterprise, Why us, Contact), built from a designer handoff package. See `docs/PROGRESS.md` for build history. The original handoff files live in `_handoff/` locally for reference only — gitignored, not part of the deployed site.
