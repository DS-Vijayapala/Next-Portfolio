# Portfolio App

Personal portfolio website built with Next.js App Router, React, TypeScript, and Tailwind CSS.  
It showcases profile information, skills, projects, and a contact form powered by Web3Forms.

## Overview

This project includes:
- A full-screen hero section with animated background and typewriter headline
- An About page with profile info, technical focus cards, and tech stack icons
- A Projects listing page with rich cards and hover interactions
- Dynamic project detail pages rendered from local data
- A Contact page with form submission to Web3Forms
- Reusable Navbar and Footer across all routes

## Tech Stack

- Framework: Next.js 15 (App Router)
- UI: React 19 + Tailwind CSS 4
- Language: TypeScript
- Icons: `lucide-react`
- Animation: `motion` (and one file currently imports `framer-motion`)
- Typing effect: `react-type-animation`

## Routes

- `/` - Hero/Home
- `/about-me` - About section
- `/all-projects` - Projects grid
- `/all-projects/[projectId]` - Project details
- `/contact-me` - Contact form

## Project Structure

```text
app/
  page.tsx
  layout.tsx
  about-me/page.tsx
  all-projects/page.tsx
  all-projects/[projectId]/page.tsx
  contact-me/page.tsx
components/
  Header/
  AboutMe/
  Projects/
  ProjectDetails/
  ContactMe/
  NavBar/
  Footer/
actions/
  projects.ts          # project dataset
  projectData.ts       # helper to resolve project by id/slug
assets/
  assets.js            # image/icon exports + local profile data
```

## Data Flow

- Project content is stored in `actions/projects.ts`.
- `actions/projectData.ts` maps URL `projectId` to a matching project.
- `app/all-projects/[projectId]/page.tsx` fetches the matched project and renders `ProjectDetail`.
- Invalid IDs show a "Project Not Found" state.

## Environment Variables

Create `.env` in the project root:

```env
NEXT_PUBLIC_WEB3FORMS_KEY=your_web3forms_access_key
```

Used by: `components/ContactMe/Contact.tsx` to submit the contact form.

## Getting Started

1. Install dependencies:
```bash
npm install
```

2. Run development server:
```bash
npm run dev
```

3. Open:
```text
http://localhost:3000
```

## Scripts

- `npm run dev` - start dev server (Turbopack)
- `npm run build` - production build
- `npm run start` - run production server
- `npm run lint` - run ESLint

## Notes and Known Issues

- Lint currently reports errors/warnings (unescaped apostrophes, one `any` type, one unused variable, `<img>` usage instead of `next/image`, and a `<a href="/">` navigation issue in navbar).
- `components/Projects/Project.tsx` imports `framer-motion`, but `package.json` currently lists `motion`. Keep imports/dependencies consistent.
- Some text appears to have encoding artifacts (for example `—`) in project descriptions/content.
- `next.config.ts` has `eslint.ignoreDuringBuilds: true`, so builds may pass even if lint fails.

## Author

Dineth Sachintha  
GitHub: https://github.com/DS-Vijayapala  
LinkedIn: https://www.linkedin.com/in/dineth-sachintha/
