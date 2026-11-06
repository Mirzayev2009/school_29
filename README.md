# 29 School

A single-page school website in Uzbek, built with Next.js, TypeScript, Tailwind CSS, and GSAP.

## Demo content

The page has eight sections: welcome, about, learning, team, school life, highlights, gallery, and contact. It includes keyboard-accessible learning tabs, a photo lightbox, mobile navigation, and reduced-motion support.

Replace school details, sample statistics, staff, activities, highlights, and gallery entries in `src/lib/school-data.ts`. Photographs are in `public/images/demo/`; their stock sources are recorded in `scripts/demo-image-sources.json` and image provenance sidecars. The gallery and staff portraits are illustrative and do not depict the real school.

The hero and section introductions are in `src/app/page.tsx`. Shared colors, typography, and responsive styles are in `src/app/globals.css`.

The user requested specific example contact details: a complete Tashkent street address, a sample phone number, and Telegram/Instagram handles. These are explicitly labeled as demo data, and their destinations are not verified school contacts. The map searches the full example address. Replace these details with the school's confirmed contacts before launch. Search indexing is disabled in `src/app/layout.tsx` while the page contains demo data.

## Requirements

- Node.js 20.9 or newer (Node.js 22 is recommended).
- npm.

## Local development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000). Changes to the source files appear automatically.

## Commands

```bash
npm run dev        # Start the development server
npm run build      # Create a production build
npm start          # Serve the production build
npm run lint       # Check ESLint rules
npm run typecheck  # Generate route types and check TypeScript
```

Run `npm run build` before `npm start`.

## Project structure

```text
public/               Static images and other assets
src/app/
  globals.css         Global styles and Tailwind CSS
  layout.tsx          Root layout and page metadata
  page.tsx            Home page
next.config.ts        Next.js configuration
```

The project uses TypeScript, the Next.js App Router, Tailwind CSS, and ESLint. The `@/*` import alias points to `src/*`.

See the [Next.js documentation](https://nextjs.org/docs) for framework guidance.
