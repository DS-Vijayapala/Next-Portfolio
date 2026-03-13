# Portfolio App

Modern portfolio web app with a public site and an admin panel.

## Features

- Public portfolio pages:
  - Home (`/`)
  - About (`/about-me`)
  - Projects (`/all-projects`)
  - Project details (`/all-projects/[projectId]`) with image carousel (up to 5 images)
  - Contact (`/contact-me`)
- Admin panel:
  - Login (`/login`)
  - Dashboard (`/admin/dashboard`)
  - Add project (`/admin/projects/new`)
  - Edit project (`/admin/projects/[id]/edit`)
  - Delete project with shadcn confirmation dialog
- Auth:
  - Username/password login
  - HTTP-only session cookie (JWT)
  - Middleware-protected admin routes and admin APIs
- Project media:
  - Cloudinary upload endpoint
  - Optimized delivery URL (`f_auto,q_auto:good,c_limit,w_1600`)
  - Multi-image selection/upload with pre-upload remove/clear

## Tech Stack

- Next.js 16 (App Router + Turbopack)
- React 19 + TypeScript
- Tailwind CSS 4
- shadcn/ui components
- Prisma 6 + MongoDB
- React Hook Form + Sonner
- Tiptap editor for project description

## Project Structure

```text
app/
  admin/
  all-projects/
  api/admin/
components/
  admin/
  ui/
lib/
prisma/
scripts/
```

## Environment Variables

Create `.env` in the project root:

```env
DATABASE_URL="mongodb://127.0.0.1:27017/portfolio_admin"
AUTH_SECRET="your_long_random_secret"
ADMIN_USERNAME="admin"
ADMIN_PASSWORD="admin1234"

NEXT_PUBLIC_WEB3FORMS_KEY=your_web3forms_access_key

CLOUDINARY_CLOUD_NAME="your_cloud_name"
CLOUDINARY_API_KEY="your_api_key"
CLOUDINARY_API_SECRET="your_api_secret"
# optional; fallback supported:
CLOUDINARY_FOLDER="portfolio/projects"
# legacy fallback name also supported:
CLOUDINARY_BLOG_FOLDER="portfolio/projects"
```

## Setup

1. Install dependencies

```bash
npm install
```

2. Generate Prisma client

```bash
npm run prisma:generate
```

3. Push schema to MongoDB

```bash
npm run db:push
```

4. Seed projects

```bash
npm run db:seed
```

5. (Optional) Create/update admin user from env

```bash
npm run admin:create
```

6. Run app

```bash
npm run dev
```

Open: `http://localhost:3000`

## Scripts

- `npm run dev` - start dev server
- `npm run build` - build app
- `npm run start` - run production build
- `npm run lint` - run ESLint
- `npm run prisma:generate` - generate Prisma client
- `npm run db:push` - push Prisma schema to MongoDB
- `npm run db:seed` - seed project data
- `npm run admin:create` - create/update admin user from env

## Notes

- Admin APIs are protected by middleware + server auth checks.
- Project list ordering is by latest updated (`updatedAt desc`).
- Footer admin shortcut link was removed (access admin via `/login`).
