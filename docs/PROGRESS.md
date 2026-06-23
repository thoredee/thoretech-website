# Thoretech Website — Progress Log

## 2026-06-19
- Created repo `thoredee/thoretech-website` on GitHub
- Scaffolded local project: `index.html`, `css/style.css`, `images/`, `.gitignore`
- Initial commit pushed to `main`
- Connected repo to Cloudflare Pages — first deploy live at https://thoretech-website.pages.dev/
- Confirmed CSS loads correctly (dark navy header/footer, centered hero)
- Current page content: placeholder hero, "About" and "Contact" sections with filler text

## Next up
- Design and write real homepage content (hero copy, about section, contact details/form)
- Decide on additional pages (Services? Team? Blog?)
- Custom domain (optional, via Cloudflare Pages "Add custom domain")

## 2026-06-23
- Rebuilt the site from the designer handoff package in `_handoff/design_handoff_thoretech/` (excluded from git via `.gitignore`)
- Replaced placeholder `index.html` / `css/style.css` with the full five-page site: `index.html`, `small-business.html`, `enterprise.html`, `about.html`, `contact.html`
- Added shared `js/main.js` for nav scroll, hero image carousel, time-audit tooltips, use-case carousel and the contact form
- All copy carried over verbatim from the design files; mobile breakpoints added at 860px and 480px
