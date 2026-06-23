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
- Fixed broken CTAs: Home's "Book a free chat" and Small Business's two "Book a free chat" buttons plus "Could this be you?" button were linking to `mailto:hello@thoretech.co.uk` instead of routing to `contact.html`
- Live site confirmed up to date with `main` at every step (checked via curl/WebFetch against https://thoretech-website.pages.dev/)

## Next up
- Manually click through every page on a phone (or browser dev-tools mobile emulation) to sanity check the carousels, tooltips and hamburger nav, since no headless-browser screenshot tool was available during the build
- Consider a custom domain (via Cloudflare Pages "Add custom domain")

## 2026-06-23 (later)
- Updated the contact email from the placeholder `thorespdonner@gmail.com` to `info@thoretech.com` — changed the displayed "Email us" link on `contact.html` and the `mailto:` target the contact form submits to in `js/main.js`
