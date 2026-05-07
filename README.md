# <STUDIO_NAME> Portfolio

A premium, production-ready portfolio site for a two-person studio offering full-stack development, DevOps, and AI automation services.

## Tech stack

- Next.js (App Router) + TypeScript
- Tailwind CSS
- Framer Motion
- Resend (email) with Formspree fallback

## Getting started

1. Install dependencies:

   npm install

2. Run the dev server:

   npm run dev

Open http://localhost:3000 to view the site.

## Content editing

All copy, services, case studies, FAQs, and testimonials live in `src/content/site.ts`.
Update placeholders like `<STUDIO_NAME>`, `hello@<domain>.com`, and social URLs there.

## Contact form configuration

Preferred (Resend):

```
RESEND_API_KEY=your_api_key
RESEND_FROM_EMAIL="<STUDIO_NAME> <hello@your-domain.com>"
RESEND_TO_EMAIL=hello@your-domain.com
```

Fallback (Formspree):

```
FORMSPREE_ENDPOINT=https://formspree.io/f/your_form_id
```

## Deployment (Vercel)

1. Push the repository to GitHub.
2. Import the project in Vercel.
3. Set the environment variables from the section above.
4. Deploy.

Vercel will run `npm run build` and host the App Router project automatically.

## SEO

Metadata, OpenGraph, JSON-LD, sitemap, and robots are included out of the box. Update `site.url` in `src/content/site.ts` to your real domain.
