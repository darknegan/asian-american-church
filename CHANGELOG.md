# Changelog

All notable changes to this project will be documented in this file.

The format is based on [**Keep a Changelog**](https://keepachangelog.com/en/1.1.0/), and this project adheres to [**Semantic Versioning**](https://semver.org/spec/v2.0.0.html).

### Types of changes

Entries are grouped under the headings defined on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/):

| Heading | Meaning |
| --- | --- |
| **Added** | New features |
| **Changed** | Changes in existing behavior or documentation |
| **Deprecated** | Soon-to-be removed features |
| **Removed** | Removed features |
| **Fixed** | Bug fixes |
| **Security** | Vulnerability fixes or hardening |

Release notes should list changes **newest first** within each section. **Omit any heading** that has nothing to report for that release.

---

## [Unreleased]

---

## [0.1.0] - 2026-05-09

### Added

- Responsive site header for **tablet and mobile** viewports (**≤960px**): horizontal nav and desktop “Plan a visit” are hidden; a **menu button** toggles an inline panel **`#mobile-links`** under the sticky bar (same pattern as **`mustard-seed-solutions`** `NavComponent`). Links: **Home**, **About**, **Events**, **Give**, plus **Plan a visit**. State: **`mobileOpen`** signal with **`toggleMobile`** / **`closeMobile`**.
- This **`CHANGELOG.md`** file.

### Changed

- **`docs/research.md`:** Added **§3.4** (`SiteHeaderComponent` / responsive navigation), a revision note under the title, updates to **§3.3**, **§8**, **§9**, and **§10**, and clarified **`Give`** across viewports.

### Removed

- Earlier mobile menu implementation: **fullscreen backdrop**, **fixed right drawer**, **`DOCUMENT`-based body scroll lock**, and **document-level Escape** handling on the site header.

### Fixed

- Mobile/tablet navigation UX and layering issues tied to the previous drawer-based menu.
