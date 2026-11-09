# 29 School

A single-page school website in Uzbek, built with Next.js, TypeScript, Tailwind CSS, and GSAP.

## School content

The page introduces Samarqand shahar 29-maktabi in seven sections: welcome, about, learning, school life, highlights, gallery, and contact. It includes keyboard-accessible learning tabs, a photo lightbox, mobile navigation, and reduced-motion support. The teacher section has been removed.

School details and captions live in `src/lib/school-data.ts`. The page currently uses the address Buyuk Ipak Yo‘li 44 in Samarqand, the supplied count of 2,100+ students, Telegram `@samarkand29maktab`, and Instagram `@29maktab_official`. The nine user-provided school photographs are cropped to remove black bars and stored in `public/images/school/`; `school-building.png` is the hero background.

The exact official long-form school name, phone number, office hours, admissions information, school history, specialized programs, leadership, achievements, and official logo have not been provided. Add only confirmed details. The hero and section introductions are in `src/app/page.tsx`; shared colors, typography, and responsive styles are in `src/app/globals.css`.

Search indexing is enabled in `src/app/layout.tsx`.

## SEO setup

`src/lib/seo.ts` is the source for the canonical site URL, page title, description, and school structured data. The current site URL defaults to `https://samarkandcityschool29.vercel.app`. Set `NEXT_PUBLIC_SITE_URL` to the full production origin in the deployment environment if the site moves to a custom domain. Set `GOOGLE_SITE_VERIFICATION` to the HTML-tag token from Search Console if using URL-prefix verification. The app generates `/sitemap.xml` and `/robots.txt`, and includes the supplied school photos in its image sitemap.

After deployment, verify the production domain in Google Search Console and submit `/sitemap.xml`. Sitemap submission helps Google discover URLs, but does not guarantee indexing or rankings.

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
