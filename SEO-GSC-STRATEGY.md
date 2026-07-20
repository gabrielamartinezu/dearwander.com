# SEO Strategy — Based on Google Search Console Data
_Source: GSC export, last 3 months (first real data ~May 15 2026). ~1,800 impressions, ~26 clicks._

## The core insight: you're stuck at the page-1 cliff
Visibility isn't the problem — you have impressions. The problem is **position**. Pages at ~position 9 get clicks; pages at ~position 11-13 get almost none. Almost everything is ranking just below or just above the page-1 line. **The entire strategy is: push the high-impression pages from page 2 onto page 1, and earn the click once they're there.**

Evidence:
- Statistics post: ~656 impressions, position ~9 (page 1) → 16 of your 26 total clicks.
- App-blockers post: ~742 impressions, position ~11-13 (page 2) → 0 clicks.
Same impression volume. Page 1 converts, page 2 doesn't.

---

## Priority 1 — Rescue the app-blockers post (biggest single win)
`/blog/best-app-blockers-2026/` — ~742 impressions, 0 clicks, position ~11-13.

Three moves:
1. **Earn the click.** Rewrite title + meta description for appeal (year + "honest"/"tested" framing). It must read as the most useful result, not the 12th.
2. **Capture the queries it's bleeding.** It already ranks (badly) for adjacent intents — add sections so it actually serves them:
   - "best **website** blocker 2026" (position 64) → add a website-blocking section (Freedom, cross-platform).
   - "best apps to **hide / lock** distracting apps" (position 17-20) → add a section on hiding/locking distracting apps. Angle it as *focus*, not secrecy, to stay on-brand.
3. **Climb the last 2-3 spots.** Add internal links to it from the statistics post, popcorn brain, dumbphone, and the neuroscience cluster. It's the lowest-authority of the high-impression pages; internal links are the cheapest push.

## Priority 2 — Protect & optimize the workhorse
`/blog/phone-addiction-statistics-2026/` — ~656 impressions, 16 clicks, position ~9.
- Title already realigned to "smartphone addiction statistics 2025-2026" (matches the top query, 20 impr). Monitor that it lifts CTR.
- Keep it fresh: it ranks for many year-variant queries ("2024 2025", "2025 or 2026", "global", "internet addiction"). A dated-stat refresh keeps it current and defends position 9.
- Add a clear "Gen Z" subsection — "gen z phone addiction statistics" is a distinct query at position 10.

## Priority 3 — Lean into ES/IT (your conversion engine)
> ⚠️ **Corrected 2026-07-16 — do not cite the "4-10×" claim below.** It conflated search CTR with conversion, and most of the gap was a position artifact (US ranked ~14.7, Italy ~7.5; of course the higher-ranked market clicks more). The whole thesis rested on ~13 clicks. ES is worth writing for because it aligns with the app and you're fluent, **not** because of a proven multiple. See the 2026-07-16 section.

CTR by country: US 0.57% · Italy 2.52% · Spain 3.7% · Mexico 7.1% · **Peru 10%**.
~~The translations convert 4-10× better than US traffic. This is a real edge.~~
- Optimize the **Spanish guided-imagery** post for "imaginación guiada" (position 54) and "técnica de imaginería guiada" (position 81) — demand exists, ranking is weak.
- Ensure ES/IT titles use the native search terms, not literal translations of the English.
- Consider ES/IT-first topics for high-converting markets (LatAm, Italy), not just translations of EN posts.

## Priority 4 — Fill the content gaps the data exposed
- **"Hide / lock distracting apps on iPhone"** — real demand (positions 17-20), no dedicated page. Could be a standalone post OR the new section in Priority 1. Brand-safe angle: hiding *distracting* apps to focus.
- **Popcorn brain** — 15+ impressions across variants at position 16-32 for a trending term. Interlink harder from the neuroscience cluster + a light refresh to climb.
- **Long-tail we rank poorly for but already appear on:** "is dopamine detox real" (73), "scrolling paralysis" (70), "how to stop doomscrolling adhd" (50). Low effort: strengthen these sections / interlink rather than new posts.

---

## Cadence
**Now (this week):** Priority 1 (app-blockers rescue) + Priority 2 title check.
**Next 2 weeks:** Priority 3 (Spanish guided imagery) + Priority 4 popcorn-brain interlinking.
**Ongoing monthly:** pull GSC, find pages at position 8-15 with high impressions + low CTR (the "almost there" list), and give them the same treatment. That position band is always where the next click win lives.

## What to measure next pull
- Did app-blockers move from ~12 toward top 10? Did it start getting clicks?
- Did statistics-post CTR rise after the retitle?
- Are new posts (vagus nerve, attention residue, summer cluster) starting to collect impressions?
- Watch the position-8-15 band — that's your conversion queue.

## ⏱ Checkpoint — re-pull GSC on 2026-07-02 (set a calendar reminder)
Two weeks after the 2026-06-18 changes. Export Queries + Pages (last 3 months) to `~/Downloads/dearwander` and have Claude compare against this baseline:

| Metric | Baseline (2026-06-18) | Target |
|--------|----------------------|--------|
| `/blog/best-app-blockers-2026/` | ~742 impressions, **0 clicks**, position ~11-13 | onto page 1, first clicks |
| query "gen z phone addiction statistics" | position ~10 | top 5 |
| query "imaginación guiada" (ES) | position ~54 | climbing |
| query "best website blocker 2026" | position ~64 | climbing |
| query "best apps to hide apps on iphone" | position ~17-20 | climbing |
| Site totals | ~1,800 impressions, ~26 clicks | up and to the right |

After comparing: pick the next page sitting in the position 8-15 band and run the same playbook (sharpen title → fill bleeding queries → internal links).

## ✅ Results — 2026-07-02 (2 weeks after the 2026-06-18 changes)
Site totals: **~1,800 → ~2,700+ impressions**, **~26 → ~30 clicks** (+15%). Modest, and the demand is broadening (summer, vagus-nerve, hide/lock, calculator all indexing now).

The two flagship bets did **not** move:
- **App-blockers**: impressions grew 693 → **837**, but still **position ~11.6/13, 0 clicks**. Content sections didn't move ranking in 2 weeks. Needs authority/backlinks + internal links, not more content. Harder climb than assumed.
- **"gen z phone addiction statistics"**: stuck at **10.22**, 0 clicks. Right at the page-1 cliff.
- **"imaginación guiada"**: **54.5**, no change. ES optimization hasn't landed. ("imaginería guiada" still 81.)

**New top opportunity found:** `/blog/why-screen-time-limits-dont-work` has **194 impressions at position 8.78 (page 1) with ~1 click** — a high-impression page-1 page with a terrible CTR. Faster win than pushing page-2 pages up. → **Sharpened its title + meta on 2026-07-02** ("...and what finally does" + the 'Ignore Limit' hook in the meta). Watch its CTR next pull.

Wins to build on:
- **Spanish converts**: es-stats 31→43 imp, 4→5 clicks, **11.6% CTR**. Keep feeding ES.
- **Calculator now indexed** (pos 21; "screen time calculator" pos 69) — Pinterest pins just launched pointing to it; watch.
- **Summer cluster live**: phone-boundaries-summer pos 7.5, es-summer pos 9.
- **dopamine-detox** jumped 73 → 39.
- **Vagus-nerve** query cluster emerging (pos 60-90) — low-competition niche to conquer via the vagus post + interlinking.
- **Italian ranks 3-6** consistently (low volume, cheap wins).

### Next queue (after 2026-07-02)
1. ✅ Done: title/meta on `why-screen-time-limits-dont-work` (the fastest CTR win).
2. Refresh the stats post + interlink to nudge "gen z" and the head term from pos 9-10 to top-of-page-1.
3. App-blockers: accept it needs authority/backlinks + internal links, not more content.
4. Interlink hard toward the **calculator** and the **vagus-nerve** post from high-traffic pages.

**Next checkpoint: re-pull GSC ~2026-07-16** (watch the why-screen-time-limits CTR and whether the summer/calculator pages climb).

## ✅ Results — 2026-07-16 (the duplicate-URL discovery)
Site totals: **2,407 impressions, 33 clicks** (1.37% CTR). Clicks up slightly (30 → 33); impressions *down* from ~2,700. Note the window is rolling 3 months, so month-over-month impression totals are muddy. Stop reading them as a trend line.

### 🔴 Root cause found: Google indexed every post twice
Every page appeared in GSC as **two separate URLs**, with and without the trailing slash:

| URL | Impr | Clicks | Pos |
|---|---|---|---|
| `/blog/best-app-blockers-2026/` | 626 | 0 | 12.18 |
| `/blog/best-app-blockers-2026` | 294 | 0 | 12.66 |
| `/blog/phone-addiction-statistics-2026/` | 430 | 2 | 10.21 |
| `/blog/phone-addiction-statistics-2026` | 169 | 5 | 9.43 |

Cause: `Layout.astro` built the canonical from `Astro.url.pathname`, so **each URL canonicalized to itself** and consolidated nothing. `trailingSlash` was also unset in `astro.config.mjs` (Astro defaults to `'ignore'`), so both forms resolved. Every post was competing with itself and splitting its own authority.

**Fixed 2026-07-16:** `trailingSlash: 'always'` in the config, and canonical + hreflang now forced to the trailing-slash form (internal links already used it, 17/17). Verified in the build: 82 pages, 82 sitemap URLs, zero without a trailing slash.

This plausibly explains three checkpoints of frozen positions. **Give Google 4-6 weeks to consolidate before judging any other tactic.** Do not run new optimizations on top of this until it settles, or you won't know what caused what.

### The three flagship bets: all still frozen
- **App-blockers**: 742 → 837 → **920 impressions** (both URLs combined), still **0 clicks**, position ~12.2. Three pulls, zero clicks.
- **"gen z phone addiction statistics"**: 10.22 on 07-02, **10.22 today**. Identical.
- **"imaginación guiada"**: 54.5 on 07-02, **54.5 today**. Identical.

⚠️ Those last two are measured on **9 and 2 impressions**. That is statistical noise, not signal. Stop optimizing for queries with single-digit impressions.

### The 07-02 title fix did not work
`why-screen-time-limits-dont-work`: **194 impressions, 1 click, position 8.78**. CTR 0.52% on page 1, unchanged after the retitle.

**New hypothesis: AI Overviews are eating the English informational traffic.** Position 9 should earn 2-3% CTR, not 0.5%. The US delivers **921 impressions (38% of all) and 4 clicks (0.43%)**. "Smartphone addiction statistics" is exactly the query shape Google now answers inline. If this holds, the title was never the problem, and no CTR tweak will fix it.

### ES/LatAm keeps outperforming, by a lot
| Country | Clicks | Impr | CTR |
|---|---|---|---|
| Peru | 2 | 26 | **7.69%** |
| Mexico | 3 | 58 | 5.17% |
| Spain | 4 | 85 | 4.71% |
| Italy | 5 | 163 | 3.07% |
| **United States** | 4 | **921** | **0.43%** |

Per impression, LatAm converts **10-18× better than the US**. `es-phone-addiction-statistics` is the most efficient page on the site: **6 clicks from 53 impressions (11.32% CTR)**.

### Other movement
- **Calculator climbed 21 → 9.86** (page 1 now), still 0 clicks. Pinterest pins pointing at it.
- **dopamine-detox regressed**: 39 → 57.3.
- **how-to-lock-distracting-apps**: 1 impression, position 49. Effectively not ranking yet.
- Vagus-nerve cluster still stuck at 60-90.

### Next queue (after 2026-07-16)
1. **Wait.** Let the canonical consolidation land. Next pull is a measurement, not an intervention.
2. **Verify consolidation** on the next pull: the duplicate URL pairs should collapse into one row each, with combined impressions.
3. **Reallocate away from US informational content.** 921 impressions for 4 clicks is not a business while AI Overviews sit on top of those queries.
4. **Feed Spanish harder.** It is the only place with proven conversion.
5. **App-blockers: declare the content bet dead.** Three checkpoints, two content passes, zero clicks. If the canonical fix doesn't move it, it needs backlinks, not paragraphs.

**Next checkpoint: re-pull GSC ~2026-08-27** (6 weeks, to give the canonical consolidation time to land).

## Don't chase
- Vanity impressions from off-brand queries.
- Clicks on pages stuck past position 20 — fix position first (links + relevance), then worry about CTR.
