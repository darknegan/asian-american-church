# Asian American Church — Project Research Report

This document summarizes how the **asian-american-church** repository is structured, what it delivers technically and editorially, and where implementation details diverge from stated conventions or contain unfinished behavior.

**Revision note:** The **§3.4** subsection documents **responsive site-header behavior** added after the initial report — including the migration from an overlay drawer to the **mustard-seed-solutions–style inline mobile panel** (`960px` breakpoint, `#mobile-links`, **`mobileOpen`** signal). Earlier sections that only mentioned “brand, nav, CTA” should be read together with §3.4 for an accurate picture of the shell.

---

## 1. Purpose and positioning

The application is a **marketing and information site** for **First Baptist Rogers — Asian American Congregation** (Rogers, Arkansas). It presents:

- Who the congregation is and how it relates to the parent church ([fbcrogers.org](https://www.fbcrogers.org/)).
- Worship rhythms, welcome messaging, and pastoral leadership.
- A **statement-of-faith style** “what we believe” section with expandable panels and ESV scripture excerpts.
- An **events experience** with category filtering over **static, hand-authored** event data (not a live calendar API).

The tone and imagery emphasize **cross-cultural welcome**, multi-generational ministry, and alignment with **Southern Baptist** framing (e.g., Baptist Faith & Message references in copy).

---

## 2. Technology stack

| Layer | Choice |
| --- | --- |
| Framework | **Angular 21** (`@angular/core` ~21.2), standalone bootstrap (`bootstrapApplication`) |
| Build | **`@angular/build:application`** (modern application builder; browser entry `src/main.ts`) |
| UI kit | **Taiga UI 5** (`@taiga-ui/core`, `cdk`, `kit`, `icons`) — global `provideTaiga()` and root `<tui-root>` |
| Styling | **SCSS** per component + global `src/styles.scss`; Taiga theme via **Less** (`taiga-ui-theme.less`, `taiga-ui-fonts.less` in `angular.json`) |
| Testing | **Vitest** via `@angular/build:unit-test`; minimal specs (`app.spec.ts`) |
| Hosting | **Cloudflare Workers** static assets via **Wrangler** (`wrangler.jsonc`), not a custom Worker script |
| Package manager | **npm** (pinned `packageManager`: npm@11.8.0) |

There is **no backend** in this repo: no HTTP API, no CMS, no server-side rendering. All content is embedded in TypeScript/HTML or loaded from the `public/` folder.

---

## 3. Runtime architecture

### 3.1 Bootstrap and configuration

- `src/main.ts` calls `bootstrapApplication(App, appConfig)`.
- `app.config.ts` registers:
  - `provideBrowserGlobalErrorListeners()`
  - `provideRouter(routes)`
  - `provideTaiga()`
- Root component **`App`** (`src/app/app.ts`) wraps the app in `<tui-root>` and a single `<router-outlet />`. It holds a **signal** `title` with the site name (not obviously bound in the checked templates; title also appears in `index.html`).

### 3.2 Routing

Routes are defined in `src/app/app.routes.ts`:

- **`''`** loads **`MainLayoutComponent`** lazily, with child routes:
  - **`''`** → **`HomeComponent`**
  - **`'about'`** → **`AboutComponent`**
  - **`'events'`** → **`EventsComponent`**
- **`'**'`** redirects to **`''`** (home).

All feature routes use **`loadComponent`** — consistent with lazy loading at the route level. There is **no `/give` route**, though the header navigation includes a “Give” item pointing to `/give` (see §8).

### 3.3 Layout shell

`MainLayoutComponent` composes:

- **`SiteHeaderComponent`** — brand link, primary navigation, “Plan a visit” CTA, and a **tablet/mobile navigation menu** (see §3.4 for full behavior).
- **`<main id="main-content" tabindex="-1">`** — skip-target-friendly main landmark wrapping the router outlet.
- **`SiteFooterComponent`** — three columns (Visit, Community, Connect), legal line, and secondary links.

Accessibility choices include semantic `<header>` / `<footer>` / `<nav>`, `aria-label` on navigation, and router links for internal pages.

### 3.4 Site header (`SiteHeaderComponent`) — responsive navigation

The header lives in **`src/app/layout/site-header.component.{ts,html,scss}`**. It was iterated twice during development:

1. **First approach:** A **fixed overlay** (semi-transparent backdrop + **right-side drawer**), **body `overflow` locked** via an Angular **`effect`** on `DOCUMENT`, **Escape** to close, and a breakpoint aligned with the older **`880px`** desktop nav threshold. That pattern proved problematic in practice (layering, UX, and consistency with other projects).
2. **Current approach (as of this document):** The header matches the **inline mobile panel** pattern used in the sibling repo **`mustard-seed-solutions`** (`src/app/shared/nav/nav.html` / `nav.scss`): there is **no fullscreen backdrop**, **no fixed drawer**, and **no scroll locking**. Instead, at narrow viewports the primary links and desktop CTA are hidden and a **hamburger control** toggles a **block that expands directly beneath the top bar**, inside the same `<header>`.

#### 3.4.1 Component API (`site-header.component.ts`)

- **`navItems`**: readonly array of `{ label, path, exact? }` — **Home** (`/`, exact), **About**, **Events**, **Give** (`/give`). Same source drives desktop and mobile link rows.
- **`mobileOpen`**: **`signal(false)`** — whether the collapsible mobile strip is shown.
- **`toggleMobile()`**: flips **`mobileOpen`** (bound to the menu button **`click`**).
- **`closeMobile()`**: sets **`mobileOpen`** to **`false`** — called when the user activates the **brand link** (logo/title home link), any **mobile nav link**, or the **mobile “Plan a visit”** button so navigation actions dismiss the menu.

There is **no** `inject(DOCUMENT)`, **no** `effect` for body scroll, and **no** `@HostListener('document:keydown.escape')` in the current header — deliberately mirroring the simpler Mustard Seed nav.

#### 3.4.2 Template structure (`site-header.component.html`)

- Root **`<header class="header" [class.is-open]="mobileOpen()">`**. The **`is-open`** class on the header is reserved for parity with Mustard Seed (`<header class="nav" [class.is-open]="mobileOpen()">`); additional styles can key off it later (e.g., hamburger animation).
- **Top row** — **`.header__inner.gc-container`**:
  - **Brand**: `routerLink="/"` with **`(click)="closeMobile()"`** so returning home also closes an open menu.
  - **Desktop navigation** — **`<nav class="header__nav" aria-label="Main navigation">`**: unordered list; each item uses **`[routerLink]`**, **`routerLinkActive="header__link--active"`**, and **`[routerLinkActiveOptions]`** for the home route’s **`exact`** match. Desktop links keep the **dot underline** affordance (`.header__dot`).
  - **Desktop CTA** — **`.header__cta`** wraps **Plan a visit** (`routerLink="/about"`, **`gc-btn gc-btn--dark`**, `.header__cta-btn`).
  - **Menu toggle** — **`<button type="button" class="header__menu-btn">`** with **three child `<span>` elements** (visual bars). Attributes:
    - **`[attr.aria-expanded]="mobileOpen()`**
    - **`aria-controls="mobile-links"`** (always points at the in-DOM panel **`id`**)
    - **`aria-label="Toggle navigation"`**
    - **`(click)="toggleMobile()"`**
- **Mobile panel** — **`<div id="mobile-links" class="header__mobile" [class.is-open]="mobileOpen()">`**:
  - Always present in the DOM (not wrapped in **`@if`**), so **`aria-controls`** remains valid and CSS solely controls visibility — same idea as **`#mobile-links`** / **`.nav__mobile`** in Mustard Seed.
  - Repeats each **`navItems`** entry as **`routerLink`** anchors with class **`header__mobile-link`**, **`routerLinkActive="header__mobile-link--active"`**, and **`(click)="closeMobile()"`**.
  - Ends with **Plan a visit** again (**`.header__mobile-cta`**) so tablet/phone users retain the primary CTA without a separate desktop-only button on small screens.

#### 3.4.3 Styles and breakpoint (`site-header.component.scss`)

- **`:host`** — **`display: block`**, **`position: sticky`**, **`top: 0`**, **`z-index: 50`**. Sticky positioning on the **host** (custom element) follows the Mustard **`app-nav`** pattern so the whole header chrome sticks while scrolling.
- **`.header`** — Full width; frosted bar using **`color-mix`** on **`--gc-surface`**, **`backdrop-filter`** / **`-webkit-backdrop-filter`**, bottom border.
- **Desktop layout** — **`.header__nav`** uses **`display: flex`**, **`flex: 1`**, **`justify-content: center`** so the horizontal links sit **between** brand (start) and **Plan a visit** (end), analogous to **`.nav__links`** in Mustard Seed.
- **`.header__menu-btn`** — **`display: none`** by default on large screens; **42×42 px**, **10 px** radius, subtle border/background; inner spans **18×2 px** bars with a short **`transition`** on **`transform`** (room for future open-state animation).
- **`.header__mobile`** — Default **`display: none`**; **`flex-direction: column`**, **16 px** gap, padding **`20px 24px 28px`**, **`--gc-surface-raised`** background, **top border** separating it from the bar — structurally aligned with **`.nav__mobile`**.
- **Breakpoint** — **`@media (max-width: 960px)`** (same numerical cutoff as Mustard **`nav.scss`**):
  - **`.header__nav`** and **`.header__cta`** → **`display: none`**
  - **`.header__menu-btn`** → **`display: flex`**
  - **`.header__mobile.is-open`** → **`display: flex`**

Below **640 px**, typography tweaks remain (**smaller title**, tighter **`header__inner`** gap, slightly smaller desktop CTA padding class — relevant when resizing from desktop down).

#### 3.4.4 Behavioral and accessibility notes

- **Focus management**: Unlike a modal dialog pattern, the mobile strip does **not** use **`role="dialog"`**, **`aria-modal`**, or programmatic focus trap — consistent with Mustard Seed’s lightweight disclosure.
- **Keyboard**: No global Escape handler in-component; users close via **toggle**, **link navigation**, or **brand** tap.
- **Router integration**: Internal routes use **`RouterLink`** / **`RouterLinkActive`** throughout so active states sync with the Angular router.
- **Outstanding product gap**: **`Give`** still targets **`/give`**, which is **not** defined in **`app.routes.ts`**; wildcard routing sends unknown paths to home (see §8). The mobile menu duplicates that behavior for **Give** as well as desktop.

---

## 4. Page-level behavior and content

### 4.1 Home (`HomeComponent`)

Sections include hero, image marquee/slider, welcome block with scripture card (Mark 9:37), “rhythms” cards (Sunday worship, Wednesday prayer, first-Sunday lunch), and a **newsletter** block.

**Interactive specifics:**

- **Marquee carousel**: driven by **signals** (`currentSlide`, `elapsedMs`, `isAutoplayPaused`) and **`computed`** (`activeSlide`, `progressPercent`). Autoplay uses `setInterval` (100 ms ticks) over a 5 s cycle; **pauses on hover** and when **`document.hidden`** (`visibilitychange`). Manual prev/next and dot navigation reset elapsed progress.
- **Images**: **`NgOptimizedImage`** (`ngSrc`) with explicit dimensions; hero image uses **`priority`**.
- **Newsletter form**: `(submit)="$event.preventDefault()"` — **no submission pipeline** (placeholder UX only).

### 4.2 About (`AboutComponent`)

- Narrative hero, mission statement, three pillars (Worship / Formation / Mission).
- **Beliefs accordion**: `openBelief` signal toggles one panel at a time; first belief opens by default when data exists. Markup uses **`aria-expanded`**, **`aria-controls`**, **`hidden`**, and **`role="region"`** for panels.
- **Scripture tooltips**: references rendered as focusable spans with CSS tooltips; full verse text is stored in **`about-beliefs.data.ts`** with an explicit **ESV copyright** notice in the file header.
- **Timeline**: milestones from 1883 through “Today,” including campus moves (e.g., Pleasant Grove, 2025 worship center) framed as shared **First Baptist Rogers** history.
- **Leaders**: three pastors (“Ger”, “Robert”, “KFC”) with bios and images from **`CHURCH_IMAGES`**.

### 4.3 Events (`EventsComponent`)

- **Static data**: `featured` event plus `groups` array (“This week”, “Next week”, “Later in March”) typed via **`events.models.ts`** (`ChurchEvent`, `EventGroup`, `EventCategory`, etc.).
- **Filtering**: `activeFilter` signal + **`computed`** `filters` (counts per category) and `visibleGroups` (filters events within each group, drops empty groups).
- **Month picker UI**: previous/next buttons and “March 2026” label are **presentational only** — **no date logic or navigation** wired up.
- **Sort row**: displays “Upcoming” but has **no sort interaction**.
- Several CTAs (`RSVP`, `Add to calendar`, `Details`) **`routerLink` to `/events`** — they do not deep-link to individual events.

---

## 5. Shared assets and design system

### 5.1 `CHURCH_IMAGES` (`src/app/shared/church-assets.ts`)

Central map of **logical names → `/assets/*.webp` paths**. The **`public/assets/`** directory contains the referenced WebP files (plus additional images not yet wired into the map). This indirection keeps templates readable and eases swapping photography.

### 5.2 Global design tokens (`src/styles.scss`)

The project uses a **custom “gc” (likely “global church” / design-system) layer**:

- CSS variables for **palette** (ink, paper, terracotta, teal, gold), **semantics** (surfaces, text, borders, accent), **spacing** (4 px base scale), **radii**, **shadows**, **typography** (Playfair Display + DM Sans), and **layout** (`--gc-page-max`, gutters).
- Utility classes: **`.gc-container`**, **`.gc-eyebrow`**, **`.gc-btn`** variants, **`.gc-arrow`**.
- **`prefers-reduced-motion: reduce`** trims animations/transitions globally.

Comments state tokens **mirror the Figma Tokens collection**; the canonical design file is documented in **`docs/figma.md`** (`fileKey` for MCP/API).

### 5.3 Taiga UI usage

Taiga is **integrated at the shell** (`TuiRoot`, `provideTaiga`). Page templates observed rely primarily on **custom SCSS and semantic HTML**, not Taiga components — suggesting Taiga is **infrastructure for future UI** (dialogs, notifications, etc.) or incremental adoption.

---

## 6. Build, test, and deploy

### 6.1 Angular build

- **`angular.json`**: assets include everything under **`public/`** and Taiga icons copied to **`assets/taiga-ui/icons`**.
- **Production defaults**: `outputHashing: "all"`, bundle budgets (initial ~500 kB warning / 1 MB error).
- Output for the application builder lands under **`dist/asian-american-church/browser`** (as noted in Wrangler config).

### 6.2 Tests

- **`app.spec.ts`**: mocks **`matchMedia`** for Taiga compatibility, bootstraps **`App`** with **`provideTaiga()`** and **`provideRouter(routes)`**, asserts component creation and presence of **`tui-root`**.

### 6.3 Cloudflare (Wrangler)

**`wrangler.jsonc`** configures:

- Worker name **`asian-american-church`**
- **`assets.directory`**: `dist/asian-american-church/browser`
- **`not_found_handling`: `"single-page-application"`** — correct for Angular client-side routing on refresh/deep links.
- **`nodejs_compat`** compatibility flag and **`observability.enabled: true`**

**`npm run deploy`**: `ng build` then **`wrangler deploy`** — deploys the **static asset Worker** pattern (no handwritten `fetch` handler in-repo).

---

## 7. TypeScript and project conventions

- **Strict TS**: `strict`, `noImplicitOverride`, `noImplicitReturns`, strict Angular compiler flags (`strictTemplates`, etc.).
- **Module**: `preserve` with ES2022 target — aligned with modern bundlers.
- **Workspace Cursor rules**: **`.cursor/rules/angular-standards.mdc`** mandates standalone components, `@if`/`@for`, signals, OnPush, reactive forms when forms exist, etc. The codebase generally **follows** these for pages and layout (`ChangeDetectionStrategy.OnPush`, standalone, modern control flow).

**Note:** The same standards doc describes **path aliases** (`@app/*`, `@shared/*`). **Root `tsconfig.json` / `tsconfig.app.json` do not define `paths`** in this repository — imports use **relative paths** (e.g., `../../shared/church-assets`). This is a **documentation vs. implementation mismatch**, not a runtime bug.

---

## 8. Gaps, stubs, and inconsistencies

| Item | Observation |
| --- | --- |
| **Empty root styles** | `App` uses `styleUrl: './app.scss'`; the file **`src/app/app.scss` exists but is empty**. Harmless, but any root-level overrides could live here or the reference could be removed for clarity. |
| **`/give` navigation** | **`navItems`** drives **both** desktop links and **`#mobile-links`** entries. **Give** uses **`path: '/give'`**, but **`app.routes`** has **no `/give`** child; **`'**'`** redirects to **`''`**, so **Give resolves to Home** on every viewport. Footer “Giving” correctly links to the external church site — consider mirroring that URL for the header **Give** item or adding a lazy **`GiveComponent`** route. |
| **Responsive header** | **Delivered** (see §3.4): **`960px`** breakpoint; **`mobileOpen`** signal; inline panel **`#mobile-links`**; **Mustard Seed–style** behavior (no backdrop drawer, no **`DOCUMENT`** scroll lock). |
| **Newsletter** | Form prevents default only — **no API, mail provider, or reactive form**. |
| **Events month controls** | Buttons are non-functional; counts like “24 events this month” are **static copy**, not derived from data. |
| **README e2e** | README mentions `ng e2e`; **no e2e setup** was found in `angular.json` or dependencies — boilerplate from CLI template. |
| **`fe-dev.mdc`** | References **SignalStore** / optional **`signal-store-standards.mdc`** — **not present** in this repo; no `@ngrx/signals` in `package.json`. |

---

## 9. Repository layout (conceptual)

```
asian-american-church/
├── angular.json          # Build/serve/test targets; Taiga styles + assets
├── package.json          # Scripts: start, build, test, deploy, preview
├── wrangler.jsonc        # Cloudflare static SPA hosting
├── public/               # Static files → copied to dist root (images, favicon)
├── docs/
│   ├── figma.md          # Design file URL + fileKey
│   └── research.md       # This report
└── src/
    ├── index.html
    ├── main.ts
    ├── styles.scss       # Global tokens + utilities
    └── app/
        ├── app.ts / app.html / app.config.ts / app.routes.ts / app.spec.ts
        ├── layout/       # Main shell; site-header (responsive nav §3.4), site-footer
        ├── pages/        # home, about, events (+ about-beliefs.data.ts)
        └── shared/       # church-assets.ts
```

---

## 10. Summary

The project is a **polished, content-rich Angular 21 SPA** tailored to a **specific congregation**, with strong emphasis on **visual storytelling** (WebP photography, carousel, timelines), **accessible markup**, and **static editorial data**. It is **deployed as static assets on Cloudflare** with SPA fallback.

The **global chrome** now includes a **deliberately simple responsive header**: at **`961px` width and above**, users see **centered primary links** and **Plan a visit** on the bar; at **`960px` and below**, those elements hide and a **three-bar toggle** reveals **`#mobile-links`** — an **in-header dropdown strip** listing the same routes plus **Plan a visit**, implemented to align with **`mustard-seed-solutions`**’s **`NavComponent`** (no modal overlay, no body scroll lock). State is a single **`mobileOpen`** signal with **`toggleMobile`** / **`closeMobile`**.

Remaining integration points that typically require a server (**newsletter**, **RSVP**, **dynamic calendar**, **dedicated giving route**) are either **stubbed** or **delegated to the main church website**. **Highest-impact follow-ups:** define a real **`/give`** route or point **Give** at the church’s external giving URL (§8), decide whether the **empty** root **`app.scss`** should carry global shell tweaks or lose its reference, and optionally enable **`paths` in `tsconfig`** to match documented import-alias conventions.
