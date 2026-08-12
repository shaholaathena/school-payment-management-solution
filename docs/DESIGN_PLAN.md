# Design Plan — Education Payment Management Solution

**Competitive analysis + design direction**
Prepared for SSLWIRELESS · Public-facing marketing site
Reference set: esenda.com · jodo.in · intelliolabs.com · ochora.com

---

## 1. Competitive Analysis

### 1.1 Jodo (jodo.in) — India · fee collection

**Closest market analogue.** Emerging-market school fee platform, same buyer, same pain.

| Aspect | What they do |
|---|---|
| Palette | Royal blue `#3B5BDB`-ish + yellow accent, white bg, playful |
| Type | Geometric sans, huge hero weight, hand-drawn underline swash on key word |
| Hero visual | Real product dashboard screenshot, desktop + mobile phone overlapping |
| Hero copy | Rotating verb animation — "Automate / Effortless / On-time fee collection, forever!" |
| Proof | Stat bar immediately under hero: `5000+ Institutes · 30000 Cr+ processed · 25 Lakh+ students` |
| Structure | Partner logo wall → outcome metrics (60% / 90% / 100%) → 4 features → security → testimonials |
| Social proof | **Dual audience** — named institute chairmen AND parent reviews, plus 4.8★ / 1500+ reviews |
| CTA | Single repeated CTA: "Book a demo" |

**Steal:** metrics-as-headline (60% more on-time collection), dual-audience testimonials, stat bar above the fold.
**Avoid:** testimonial wall runs ~20 entries deep — bloated, low signal per scroll.

---

### 1.2 esenda (esenda.com) — UK · school payment system

**Best information architecture of the four.**

| Aspect | What they do |
|---|---|
| Palette | Deep blue → cyan gradient hero, white body sections |
| Hero visual | Isometric floating 3D UI cards (stat cards, chart, shield, card mockup) |
| Type | Clean grotesque, tight tracking on display |
| Eyebrow system | Every section opens with an ALL-CAPS micro-label — `BUILT FOR THE WAY SCHOOLS WORK`, `MANAGE MONEY IN` |
| Mental model | **Three verbs**: Money In (collect) / Money Out (pay) / Money (track) — instantly graspable |
| Copy | Outcome-framed, never feature-framed. "Smarter income. Less admin. More control." |
| Navigation | Structured mega-nav: Industries / Payments / Solutions / Partners / About |
| Section CTAs | Every block ends `Find Out More →` — progressive disclosure |

**Steal:** ALL-CAPS eyebrow labels, verb-based pillar model, per-section directional CTA.
**Avoid:** nav depth is overkill for a single-product page.

---

### 1.3 Intellio (intelliolabs.com) — US · tuition management

**Most restrained. Premium by subtraction.**

| Aspect | What they do |
|---|---|
| Palette | Warm cream `#FCF6EF` — deliberately **not** white. Reads editorial/premium |
| Type | **Serif display (Halant) + sans body** — the differentiator |
| Density | Extreme whitespace. Above the fold = headline, 2 sublines, one link. Nothing else |
| CTA | Single quiet pill "Get Started →" top-right. No competing buttons |
| Structure | `Bill / Collect / Support / Report` verb sections |
| Positioning | Comparison table "Generic SIS vs Intellio" |
| Trust | Compliance elevated to an H2: **"PCI-DSS, FERPA"** |

**Steal:** whitespace discipline, compliance as hero-level signal, serif/sans contrast, comparison table.
**Avoid:** near-empty first viewport is a conversion risk for a cold BD institutional buyer who needs proof fast.

---

### 1.4 Ochora (ochora.com) — Francophone Africa · school tuition

**Structural twin to our market.** Mobile Money there ≈ bKash/Nagad/Rocket here.

| Aspect | What they do |
|---|---|
| Palette | Dark hero (`#0A0A0A`) with colorful aurora/mesh gradient bloom, body `#F8FAFC` |
| Type | Lexend 700, 72px hero — friendly geometric, high legibility |
| Hero | Pill eyebrow badge `Simplify school payments →` above headline |
| Stats | Animated count-up: SSL encryption · processing time · uptime · partner schools |
| Trust | **Payment partner logo row** — MTN, Orange, Moov, Wave |
| Flow | "Up and running in 3 steps" — Create school → Configure fees → Receive payments |
| Mobile | Dedicated app section with App Store + Google Play badges |
| Commercial | Transparent 4-tier pricing, monthly/yearly toggle |
| Security | "processed by PCI-DSS certified operators. No banking data stored on our servers." |
| i18n | EN/FR language toggle in nav |

**Steal:** dark gradient hero, payment-partner logo trust row, 3-step simplicity, mobile app showcase, i18n toggle.
**Avoid:** placeholder stats rendering as `0/7`, `<0s`, `0+` — broken counters actively destroy trust. Never ship a counter without real data.

---

## 2. Cross-Site Pattern Synthesis

Present in **all four**:

1. Demo CTA persistently visible in nav, highest contrast element on page
2. Hero = one bold outcome claim + one clarifying subline + CTA pair
3. Trust signal within the first two viewports (stats, logos, or compliance)
4. A 3–5 step "how it works" linear flow
5. Security/compliance as its own named section
6. FAQ accordion
7. Closing full-width CTA band

Present in **three of four**:

8. Real product UI imagery near the fold (Jodo, esenda, Ochora)
9. Named customer proof (Jodo, esenda, Intellio)

---

## 3. Gap Analysis — Current Build vs Reference Set

| # | Gap | Severity | Present in | Status |
|---|---|---|---|---|
| 1 | **No product UI visual anywhere on the page** | 🔴 Critical | Jodo, esenda, Ochora | ✅ Phase 1 |
| 2 | No stat/proof bar under hero | 🔴 Critical | Jodo, Ochora | ⚠️ Built, data blocked |
| 3 | No payment-method logo row (bKash/Nagad/Rocket/Visa) | 🔴 Critical | Ochora | ⚠️ Built, assets blocked |
| 4 | No testimonials / named institutions | 🟠 High | Jodo, esenda, Intellio | Phase 3 |
| 5 | Case Studies is an empty placeholder | 🟠 High | All four | Phase 3 (blocked) |
| 6 | 10 feature cards behind tabs — too much, too flat | 🟠 High | Peers show 3–4 pillars | Phase 2 |
| 7 | No Bangla language support | 🟠 High | Ochora (FR/EN) | Phase 4 |
| 8 | Compliance under-sold (buried in Tech section) | 🟡 Medium | Intellio, Ochora | ✅ Phase 1 |
| 9 | No pricing or commercial signal | 🟡 Medium | Ochora | Phase 4 |
| 10 | No mobile app store badges | 🟡 Medium | Ochora | Phase 4 |
| 11 | No section-level eyebrow → CTA pattern | 🟡 Medium | esenda | Phase 2 (component built) |
| 12 | No scroll motion / count-up animation | 🟢 Low | Jodo, Ochora | ✅ Phase 1 (`useCountUp`) |

---

## 4. Recommended Direction — "Trusted Infrastructure"

Blend the four, weighted to our buyer: a Bangladeshi school administrator or director who needs **credibility first, capability second**.

| Borrowed from | What we take |
|---|---|
| **Ochora** | Structural spine — dark confident hero, payment-partner trust row, 3-step flow, app showcase, i18n |
| **Jodo** | Proof density — stat bar, outcome metrics, dual-audience testimonials |
| **esenda** | Information architecture — eyebrow labels, verb pillars, per-section CTAs |
| **Intellio** | Restraint — generous whitespace, compliance elevated, no visual clutter |

**Positioning line to design against:**
> Not "we have 10 features." Rather — *"Bangladesh's institutions trust SSLCOMMERZ to move money. Now that same infrastructure runs your school's fees."*

The SSLCOMMERZ parentage is the single strongest asset the competitors cannot match. Lead with it.

---

## 5. Revised Information Architecture

Current build has 11 sections in a flat sequence. Restructure to 14, front-loading proof:

| # | Section | Status | Change |
|---|---|---|---|
| 01 | Navbar | ✅ Built | Add Bangla/English toggle |
| 02 | Hero | ✅ Built | → Dark gradient, add product mockup, pill eyebrow |
| 03 | **Stat Proof Bar** | 🆕 New | Institutions · students · transactions · uptime |
| 04 | **Payment Partner Row** | 🆕 New | Visa, Mastercard, bKash, Nagad, Rocket, banks |
| 05 | Overview (Schools / Guardians) | ✅ Built | Keep — strong dual-column |
| 06 | **Three Pillars** | 🆕 New | Collect · Track · Communicate (esenda model) |
| 07 | Key Features | ✅ Built | Collapse 10 → 4 hero features + "all 10" expander |
| 08 | How It Works | ✅ Built | 5 steps → compress to 3, add per-step UI thumbnail |
| 09 | Benefits | ✅ Built | Reframe as outcome metrics where data allows |
| 10 | **Mobile App** | 🆕 New | Phone mockups + store badges |
| 11 | Security & Compliance | ⚠️ Merge | Split out of Tech, promote to standalone |
| 12 | Tech Stack | ✅ Built | Demote — move below security |
| 13 | Use Cases | ✅ Built | Keep accordion |
| 14 | **Testimonials** | 🆕 New | Institution quotes + guardian quotes |
| 15 | Case Studies | ⚠️ Blocked | Needs real data — see §8 |
| 16 | FAQ | ✅ Built | Keep |
| 17 | CTA + Demo Form | ✅ Built | Keep |
| 18 | Footer | ✅ Built | Keep |

---

## 6. Design Token Revisions

### 6.1 Color

Current tokens (`#1565C0` blue / `#00897B` teal) are competent but generic — they land closest to esenda, our least differentiated reference.

**Proposal — add a dark surface tier for hero and CTA bands:**

```js
palette: {
  primary:   { main: '#1565C0', light: '#1E88E5', dark: '#0D47A1' },
  secondary: { main: '#00897B', light: '#26A69A', dark: '#00695C' },
  surface: {
    default: '#FFFFFF',
    subtle:  '#F8FAFC',   // section alternation
    dark:    '#0A1628',   // hero + CTA band  ← NEW
  },
  accent: '#F59E0B',       // sparingly — stat highlights, badges  ← NEW
}
```

Hero gradient (Ochora-inspired mesh, restrained for fintech):
```css
background:
  radial-gradient(at 20% 20%, rgba(21,101,192,.35) 0px, transparent 50%),
  radial-gradient(at 80% 30%, rgba(0,137,123,.28) 0px, transparent 50%),
  #0A1628;
```

> ⚠️ **Open question:** these are placeholder values. Confirm against official SSLCOMMERZ / SSLWIRELESS brand guidelines before build. Do not ship unbranded.

### 6.2 Typography

| Role | Current | Proposed | Rationale |
|---|---|---|---|
| Display | Inter 800 | **Lexend 700** | Ochora precedent; higher legibility, warmer — suits education |
| Body | Inter 400/500 | Inter 400/500 | Keep — neutral, excellent at small sizes |
| Bangla | — | **Noto Sans Bengali** | Required if i18n proceeds |

Hero scale: `clamp(2.25rem, 5vw, 4rem)`, weight 700, tracking `-0.02em`.

### 6.3 Motion

Restrained — this is a payment product, not a startup landing page.

| Element | Motion |
|---|---|
| Section entry | Fade + 16px rise, 400ms, `cubic-bezier(.16,1,.3,1)`, once |
| Stat counters | Count-up on first viewport entry only |
| Cards | `translateY(-4px)` on hover, 200ms |
| Hero visual | Slow float, 6s loop, ≤8px travel |

All motion gated behind `prefers-reduced-motion: reduce`.

---

## 7. New Components Required

| Component | Spec |
|---|---|
| `StatBar` | 4 count-up figures, dark or subtle surface, `IntersectionObserver` trigger |
| `PartnerLogoRow` | Grayscale SVG logos, color on hover, marquee on mobile |
| `PillarCard` | Eyebrow + icon + title + body + `Find Out More →` |
| `ProductMockup` | Browser-chrome frame + phone frame, responsive, lazy-loaded |
| `TestimonialCard` | Quote, avatar, name, role, institution |
| `AppStoreBadges` | Official App Store / Google Play assets |
| `LanguageToggle` | EN / বাংলা, persisted to `localStorage` |
| `SectionEyebrow` | Shared ALL-CAPS micro-label — apply to all 14 sections |

---

## 8. Blocked Items — Data Required Before Build

These cannot be designed honestly without real numbers. Placeholder stats are worse than no stats — see Ochora's broken `0/7` counters.

- [ ] Institution count, student count, transaction volume, uptime figure
- [ ] Named reference institutions + signed testimonial permissions
- [ ] Case study data (institution, challenge, modules, measured results)
- [ ] Official SSLCOMMERZ / SSLWIRELESS brand assets (logo, palette, type)
- [ ] Product UI screenshots — School Portal, Guardian Portal, mobile app
- [ ] Confirmation: is Bangla localisation in scope?
- [ ] Confirmation: is pricing public or sales-gated?

> 🔒 **Privacy note:** product screenshots must use synthetic student data. No real student names, IDs, guardian phone numbers, or transaction references. Card numbers and merchant credentials must never appear — use `[PLACEHOLDER]` masking in all mockups. Guardian PII in testimonials requires written consent.

---

## 9. Phased Roadmap

**Phase 1 — Credibility (highest conversion impact)** ✅ **BUILT**

| Delivered | File |
|---|---|
| Dark aurora hero + pill eyebrow + gradient headline | `src/components/sections/Hero.jsx` |
| Product mockup (browser dashboard + guardian phone) | `src/components/ui/ProductMockup.jsx` |
| StatBar with scroll-triggered count-up | `src/components/sections/StatBar.jsx` + `src/hooks/useCountUp.js` |
| Payment-method trust row | `src/components/sections/PartnerLogoRow.jsx` |
| Security & Compliance as standalone dark section | `src/components/sections/SecurityCompliance.jsx` |
| Shared ALL-CAPS eyebrow component | `src/components/ui/SectionEyebrow.jsx` |
| Lexend display / Inter body, dark surface + accent tokens, reduced-motion gate | `src/theme/index.js` |
| Navbar transparent over hero → solid on scroll | `src/components/layout/Navbar.jsx` |
| Tech section de-duplicated (security content moved out) | `src/components/sections/TechSecurity.jsx` |

Notes from the build:
- StatBar renders `—` plus a visible *"awaiting verified data"* marker rather than invented
  numbers. It must not ship in this state — either supply real figures or remove the section.
- PartnerLogoRow uses typographic placeholders with an on-page disclaimer. Real marks need
  licensing from each provider.
- MUI v9 is in use: `Grid` takes `size={{ xs, md }}` (no `item`), and layout props
  (`alignItems`, `justifyContent`, `flexWrap`, `textAlign`, `maxWidth`) must go inside `sx`,
  not on the component. Both were migrated across all sections.

**Phase 2 — Clarity**
Three Pillars · Features collapsed 10 → 4 · How It Works 5 → 3 · Eyebrow system across all sections

**Phase 3 — Proof**
Testimonials · Case Studies (unblocked by §8) · outcome metrics in Benefits

**Phase 4 — Reach**
Mobile app section · Bangla localisation · scroll motion · pricing (if public)

---

## 9b. v2 Rebuild — 5-page site (current state)

The site was rebuilt as a five-page product site in **TypeScript**, keeping MUI v9 and extending its
theme rather than introducing a second styling system.

**Pages:** `/` · `/features` · `/how-it-works` (journey + payment methods + technology) · `/faq` · `/contact`, plus a 404.

**Design system** — `src/theme/tokens.ts` is the single source of truth, mirrored to CSS custom
properties in `src/theme/global.css` and into the MUI theme in `src/theme/index.ts`.

| Token group | Decision |
|---|---|
| Primary | Deep indigo ramp, `#4F46E5` at 600 |
| Accent | Cyan `#06B6D4`, used only for gradient termini and small highlights |
| Dark surface | `#0B1020` with a three-bloom radial wash |
| Display type | Plus Jakarta Sans 700/800, tight tracking |
| Body type | Inter 400/500/600 |
| Radii | 8 / 10 / 14 / 18 / 24 / 32 / pill |
| Shadows | Six layered low-opacity steps, plus on-dark and brand-tinted variants |
| Motion | One easing (`cubic-bezier(.16,1,.3,1)`), three durations (150 / 250 / 450ms) |

**Component library** — `src/components/ui/` (Button, Badge, Section, SectionHeading, Reveal,
FeatureCard, StatCard, PaymentCard, StakeholderCard, FaqAccordion, FormField, SelectField,
CheckboxField, Toast, TextLink) and `src/components/product/` (BrowserFrame, DashboardMockup,
PhoneMockup, FloatingCard).

**Content layer** — all copy lives in `src/content/` so it can be edited without touching
components. Features carry a `status` field: `confirmed` (6), `needs-review` (3), `placeholder` (1).

**Icons** — `lucide-react`. No emoji.

**Motion** — hand-rolled via `useReveal` + a CSS `[data-reveal]` contract; no animation library.
Entrance animations are guarded behind `prefers-reduced-motion: no-preference` so no content
depends on an animation running in order to be visible.

**Performance** — routes are code-split; Home ships in the initial bundle. Largest chunk is
~274 kB raw / ~84 kB gzip, down from a single 583 kB bundle.

### Product mockups replaced two unpublishable screenshots

`src/assets/images/` contained real captures. Two were withheld:

- `students-list.png` — student names, IDs, phone numbers, guardian names and numbers, blood
  groups (health data), home addresses
- `app-home.png` — photograph of a named minor plus her school, student ID and daily
  punch-in / punch-out times

Both views are reproduced as synthetic mockups instead (`DashboardMockup`, `PhoneMockup`, data in
`src/components/product/mockData.ts`), modelled on the real product's information architecture but
referencing students by masked ID and cohort only. `dashboard.png` and `Payment Summary.png` are
clean and may be used.

## 10. Immediate Next Actions

1. Request brand assets and the §8 data set from marketing/product
2. Build Phase 1 with clearly-labelled placeholder content
3. Commission or capture product screenshots with synthetic data
4. Review Phase 1 against this plan before proceeding to Phase 2
