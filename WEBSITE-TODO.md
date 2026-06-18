# dearwander.com — Improvement Backlog

From the June 2026 site analysis. Done items kept for reference.

## Open

### 1. App showcase section ("show, don't tell") — HIGH PRIORITY
The site describes the app poetically but never shows it. High-intent visitors want to see the product before joining the waitlist. We now have real screenshots + redesigned mockups to use.

Plan:
- New component `AppShowcase.astro`, placed right after "How it works" (story: problem → how it works → see it → FAQ).
- Layout: alternating phone-and-text rows (phone left / copy right, then flip), each phone in a subtle frosted bezel, warm background.
- Lead with the interception shield (the differentiator), then the toolkit.

Screens + draft copy:
| Screen | Headline | Subcopy |
|--------|----------|---------|
| Interception shield | The moment you reach for the app | Instead of the feed, a warm screen meets you first. A breath before the scroll. |
| Breathing session | Breathe with your anchor | A short guided breath to come back to yourself. |
| Morning intention | Start with intention | Before the day rushes in, name what matters. One line. Your anchor. |
| Box-breathing pick | What are you reaching for? | Meet the urge honestly, then breathe through it. |
| Evening unwind | Wind down, gently | A guided breath to close the day. No screens, just stillness. |

Assets:
- Redesigned mockups in `market_research/output/`: `app-breathing-concept-c-hybrid.jpg`, `app-selfcare-selection.jpg`, `app-write-your-own.jpg`
- Real simulator screenshots: need Gabriela to drop them into `public/images/` (home/intention, evening unwind orb, shield). Temp simulator paths expire, so they must be saved into the repo.
- Optimize PNGs → WebP before use (screenshots are heavy).
- Add ES/IT translations for the showcase copy in `src/i18n/translations.ts`.

### 2. Stronger testimonials
Current two beta-tester quotes are generic. Either make them specific (first name + one concrete detail) or swap for a research-credibility line (e.g., "Based on University of Heidelberg research: a breathing pause cut app use 57%").

### 3. Source the "144 unlocks / 5 hours" stat
Unsourced stats read as fluff. Link the stat to `/blog/phone-addiction-statistics-2026/` or cite inline.

## Done (June 2026)
- Hero image optimized: 2.8MB → 217KB WebP (fixed mobile LCP)
- Lead magnet (/letters/) surfaced in footer
- Instagram/TikTok handles fixed to @dearwander.app (footer + schema)
- Homepage FAQ section added with FAQPage schema (all 3 locales)
- Launch timeline + pricing signal handled via FAQ
- Hero backdrop: translucent blurred landscape instead of solid brown
- Header visibility fixed over the dark hero
- Glossary page added (AI discoverability, DefinedTermSet schema)
- 404 fixes: removed bad hreflang on blog posts, added /privacy page
