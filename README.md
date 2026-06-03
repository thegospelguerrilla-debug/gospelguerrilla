# GospelGuerrilla

**Raw. Real. Urgent. No church fluff.**

A bold, street-style evangelistic website built to clearly present the Gospel to skeptics, broken people, and everyday unbelievers.

## Tech

- Next.js 15 (App Router)
- TypeScript + Tailwind CSS
- Formspree for forms (no backend)
- Fully mobile-first, dark gritty aesthetic with bold red accents (`#FF5A6D`)

## Getting Started

```bash
npm install
npm run dev
```

## Formspree Setup (Required for forms to work)

1. Go to [formspree.io](https://formspree.io) and create a free account.
2. Create **two forms**:
   - One called **"Prayer Requests"**
   - One called **"Reach Out / Questions"**
3. For each form, copy the form ID (the part after `/f/` in the endpoint URL).
4. Copy `.env.local.example` → `.env.local` and fill in the IDs:

```env
NEXT_PUBLIC_FORMSPREE_PRAYER=abc123xyz
NEXT_PUBLIC_FORMSPREE_CONTACT=def456uvw
```

5. Restart your dev server.

The forms now work and submissions will land in your Formspree inbox.

## Project Structure

```
app/
  layout.tsx          # Root layout + Navbar + Footer + SEO
  page.tsx            # Homepage (the hard-hitting Gospel presentation)
  prayer/page.tsx     # Prayer Requests form
  reach/page.tsx      # Contact + FAQ
  about/page.tsx      # Simple, authentic about page
components/
  CTAButton.tsx
  Navbar.tsx          # Mobile hamburger included
  Footer.tsx
  GospelBlock.tsx     # Reusable clear Gospel presentation
  PrayerForm.tsx
  ContactForm.tsx
  FAQ.tsx
public/images/        # Three custom gritty evangelistic images
lib/formspree.ts      # Optional helper
```

## Deployment

Deploy to **Vercel** (recommended — one click).

Add the two `NEXT_PUBLIC_FORMSPREE_*` environment variables in your Vercel project settings.

## Design Direction

- Deep near-black backgrounds (`#0a0a0a`)
- Bold red accent: `#FF5A6D`
- Heavy typography, high contrast, sharp edges
- Zero churchy language or polished religious aesthetic

The goal is to feel like a street preacher who actually cares — urgent, honest, and hopeful at the same time.

## License

This is an evangelistic tool. Use it freely to point people to Jesus.
