# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Primary: Spanish-speaking hiring teams in Mexico and Latin America (recruiters, hiring managers, technical interviewers) deciding whether to bring Giovany into their process for a backend role. They need to verify his record, judge stack fit and seniority, and leave with his resume and a way to reach him.

Secondary: English-speaking visitors. The site and the resume exist in both languages.

## Product Purpose

The personal portfolio and CV of Giovany Domínguez (rastherdev), a backend developer open to new opportunities. It exists to get him hired: it presents a verifiable professional record and keeps the resume and contact details one step away. Success means a hiring team reaches out.

## Positioning

A backend developer who builds SaaS to scale. In Bloomingtec's production agribusiness ERP he implemented database-per-client multi-tenancy (one codebase, a PostgreSQL database per client) and Redis-backed Laravel queues for payroll calculation and bulk data processing, and he migrates legacy features to modern architectures. The proof is systems running in production, not demo projects.

## Operating Context

- Live at https://rastherdev.github.io, deployed from `main` to GitHub Pages. English is the default locale at `/`; Spanish lives under `/es/`.
- Each locale has the portfolio page (hero, about, skills, experience, projects, contact) and a printable CV page (`/cv`, `/es/cv`).
- Visitors can download the resume PDF in their language, open the live product sites, and make contact by email, LinkedIn, or GitHub. There is no contact form.

## Capabilities and Constraints

- Static Astro site on GitHub Pages: no server, database, or form backend.
- Bilingual parity: every user-facing string lives in both `src/i18n/en.ts` and `src/i18n/es.ts`; content lives in `src/data/`. The CV pages and both resume PDFs must agree with it.
- **Open decision:** the primary audience reads Spanish, but English is the default locale. Whether Spanish becomes the default is undecided.
- **Open decision:** the site's contact email (rastherdev@gmail.com) differs from the email on the resume PDFs, which also list a phone number. Which contact is canonical is undecided.

## Brand Commitments

- Name: Giovany Domínguez; full name on the resume: Giovany Emanuel Domínguez Ponce. Handle and site name: rastherdev / Rastherdev.
- Title on the site: Laravel Backend Developer. The resume header uses his degree title, Information Technology Engineer.

## Evidence on Hand

The resume PDFs (`public/assets/resume_en.pdf`, `public/assets/resume_es.pdf`) are the source of truth, confirmed by the owner on 2026-11-08. The site's current content predates them and contradicts them in places; until it is reconciled, the resume wins.

**Confirmed record**

- **Bloomingtec**: Backend Developer, 10/2025 – present. Chilchota, Michoacán (remote); agribusiness startup. Laravel and PostgreSQL backend services for its ERP; RESTful APIs with validation, error handling and access control; data modeling and query optimization; migration of legacy features to modern architectures; Linux VPS administration for development and production.
  - Confirmed by the owner beyond the resume: database-per-client PostgreSQL multi-tenancy on one codebase, and Redis-backed Laravel queues for payroll calculation and bulk data processing.
- **Lagunillas City Government**: Backend Developer, 08/2023 – 02/2026, Lagunillas, Michoacán. Backend modules for the institutional ERP in CodeIgniter 4 and MySQL; module architecture, data models and query optimization; requirements analysis with municipal departments; VPS administration. The platform built there is **Presidencia Digital** (https://presidenciadigital.com/).
- **Medical Minds**: Field IT Engineer, 06/2022 – 06/2023, Morelia (IT consulting). Server and database administration for a clinical management platform; network and cloud support; incident resolution.
- **WISP** (own venture, wireless internet service provider): 02/2025 – present. Proprietary web platform for client management, payments and service tracking; MikroTik (RouterOS) network administration.
- **Education**: B.S. in Information and Communications Technology Engineering, Instituto Tecnológico Superior de Pátzcuaro, 08/2015 – 04/2022.
- **Certifications**: SQL (Intermediate), HackerRank, 2024; Google Cloud Computing Foundations, Credly, 2024.
- **Languages**: Spanish (native), English (advanced, B2).
- **Experience**: 3+ years in backend development. Uses Claude Code and GitHub Copilot for analysis, development and documentation while keeping control of the output.
- **Product sites**: https://bloomingtec.com/ and https://presidenciadigital.com/.
- **Screenshots**: the owner can supply real screenshots of both products. The current gallery images (`public/assets/projects/*.svg`) are placeholders.

**On the site but contradicted by the resume** (use the resume version)

- Bloomingtec start date 01/2025 (resume: 10/2025).
- The 2023–2026 role shown as Presidencia Digital, Full Stack Developer, Laravel + Bootstrap, ending 01/2026 (resume: Lagunillas City Government, Backend Developer, CodeIgniter 4 + MySQL, ending 02/2026).
- English at "professional working proficiency" (resume: advanced, B2).

**On the site but unconfirmed** (do not state as fact until the owner verifies)

- The "95% faster response times" figure.
- Express.js as the legacy stack that was migrated.
- The Product Owner role; Sanctum/JWT specifics; the "modular monolith" and "microservices" descriptions; setting up DigitalOcean infrastructure "from scratch" with high availability.
- The Presidencia Digital module list (document management, citizen services, licenses and permits, social program tracking).
- The project code snippets, which are illustrative. The Presidencia Digital one is Laravel code, so it cannot come from the CodeIgniter 4 platform.
- The `https://giovany.dev` URL in the hero terminal; the site lives at rastherdev.github.io.
- The 0–100 skill levels, which are self-ratings; the design-pattern levels are marked as placeholders in `src/data/skills.ts`.

**Absent, never fabricate**: testimonials or references, client logos, press, public repositories for the featured projects, and performance metrics (none are confirmed yet).

## Product Principles

1. **The resume is the record.** Every claim traces to the resume or an owner-confirmed fact; anything else is verified or cut, never polished into shape.
2. **Write for the Spanish-speaking hiring team.** Spanish is authored to the same standard as English, never a lesser translation, and the two locales stay in parity.
3. **Lead with architecture, prove it with production.** Scalable SaaS architecture is the claim; real systems, real screenshots and concrete specifics carry it, not adjectives.
4. **Keep hiring essentials one step away.** Current role, the resume in the visitor's language, and a way to make contact.
