# Cyborg Commons site

A small static site: five pages, one stylesheet, one script. No build step, no dependencies.

## Files

| File | Purpose |
| --- | --- |
| `index.html` | Home: headline, next-session teaser, links to the other pages |
| `session.html` | Spooky Social Engineering: Mapping the Threat (Friday, October 30, time TBD) |
| `why-it-matters.html` | Three sourced facts and a short closing question |
| `little-tech.html` | Why little tech: four short points |
| `about.html` | Short bio |
| `styles.css` | All styles. Design tokens are in `:root` at the top |
| `script.js` | Marks the current nav link, fills the footer year, hides the sign-up note when an embed is present |

Open `index.html` in a browser, or serve the folder with any static host. Icons are inline SVG, so nothing else needs to load.

## Design rules (keep these)

- White background, system fonts, one green accent, hairline dividers, small line icons.
- Minimal and plain. No gradients, shadows, stock imagery, or emoji.
- Short copy. If a page grows past a screen or two of text, cut it.
- Say "Maria-Teresa C." for the person and "Cyborg Commons" for the firm. Do not use the full surname.
- Tone toward big tech is neutral and appreciative. Lead with the positives of little tech; do not criticize big platforms.
- Do not use em dashes in any copy. Use hyphens, commas, or periods.
- The header and footer are repeated on every page. If you change one, change all five.

## About the firm

Cyborg Commons is community-level technology support that breaks down the walls of IT departments. It supports movement organizations, political leadership, and union community members in revising their threat level as technology keeps changing. Big tech is useful, and little tech is often just as capable. The firm is woman-owned and neurodivergent-led. Use this description as the source for any new copy.

## To do

1. **Session time.** `session.html` and the teaser on `index.html` say "Time to be announced". Replace both when the time is set.
2. **Sign-up.** In `session.html`, paste the sign-up form or scheduling embed inside `<div id="signup-embed">`. `script.js` hides the "coming soon" note automatically. If the provider only gives a link, replace the note with a `<a class="btn" href="...">Sign up</a>` button. Check where the provider stores responses before choosing one.
3. **Source check.** On `why-it-matters.html`, replace the Yorkshire Evening Post link with the Undercover Policing Inquiry's own site (ucpi.org.uk) if possible.
4. **Hosting.** Choose a host the organization controls. The footer says the site loads no ads, trackers, or third-party fonts, so keep that true: no analytics, no embedded fonts, no external scripts without a decision.

## Accessibility notes

- Each page has a skip link, one `h1`, landmark regions, and visible keyboard focus.
- The current page link in the nav gets `aria-current="page"` from `script.js`.
- Icons are decorative (`aria-hidden="true"`); every icon sits next to a text label.
