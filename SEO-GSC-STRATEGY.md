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
CTR by country: US 0.57% · Italy 2.52% · Spain 3.7% · Mexico 7.1% · **Peru 10%**.
The translations convert 4-10× better than US traffic. This is a real edge.
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

## Don't chase
- Vanity impressions from off-brand queries.
- Clicks on pages stuck past position 20 — fix position first (links + relevance), then worry about CTR.
