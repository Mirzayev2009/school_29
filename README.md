# 29 School

Next.js starter for the school website. The website's content and design will be built in the next steps.

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
