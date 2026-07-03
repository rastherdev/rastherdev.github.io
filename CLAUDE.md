# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

- `npm run dev` — dev server
- `npm run build` — build to `dist/`
- `npm run preview` — preview the build

No tests or linter are configured.

## Architecture

Astro 6 static personal resume/portfolio site, deployed to GitHub Pages via `.github/workflows/deploy.yml` (builds on push to main). Note: `dist/` is committed to git even though CI rebuilds it — rebuild before committing if source changed.

- **Pages** (`src/pages/`): `index.astro` + `cv.astro`, mirrored under `es/` for Spanish. Each page just composes section components inside `BaseLayout`, passing a `locale` prop down.
- **i18n** (`src/i18n/`): `types.ts` defines the `Dictionary` shape; `en.ts` / `es.ts` implement it. All user-facing UI strings live in these dictionaries. Astro i18n is configured in `astro.config.mjs` (default `en`, no prefix; `es` prefixed).
- **Data** (`src/data/`): locale-independent content (experience, projects, skills, social links) as typed TS arrays. Content edits usually happen here, not in components.
- **Components**: `sections/` (one per page section), `layout/` (Nav, Footer), `ui/` (small reusable pieces).
- **Animations**: GSAP only. All plugin registration and shared helpers live in `src/scripts/utils/gsap-setup.ts` — register plugins there, not in components. It also handles `prefers-reduced-motion` and responsive defaults via `gsap.matchMedia()`.
- **Styles**: design tokens in `src/styles/tokens.css`, globals in `src/styles/global.css`.

## GSAP conventions (from `.github/copilot-instructions.md`)

- Import as `import { gsap } from "gsap"`; plugins via named imports, registered once in `gsap-setup.ts`.
- Use `gsap.timeline()` for sequences (position params, not chained delays).
- Animate `x`/`y`/`scale`/`rotation`, not `top`/`left`/`width`/`height`; use `autoAlpha` over `opacity`.
- Multiple `from()`/`fromTo()` on the same property of the same element: set `immediateRender: false` on later ones.
- ScrollTrigger: use `scrub` OR `toggleActions`, not both; never attach a ScrollTrigger to a tween inside a timeline (put it on the timeline); call `ScrollTrigger.refresh()` after layout-affecting DOM changes.
- Use `clearProps` when a tween shouldn't leave inline styles behind.

See also `.github/instructions/scrolltrigger.instructions.md` for ScrollTrigger-specific rules.
