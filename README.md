# WILL IT CLAW?

The website for **Will It Claw?** — a YouTube series by [Kilo Code](https://kilo.ai) that tests AI agents on tasks no reasonable person would attempt.

Live at [willitclaw.com](https://willitclaw.com).

## About

Will It Claw? is a comedy tech series styled as a retro late-night infomercial. Each episode unleashes an AI agent on absurd real-world challenges — making restaurant reservations via phone, learning Spanish, winning a Mac Mini — and films the results.

## Tech Stack

- [Astro](https://astro.build/) — static site generator
- [UnoCSS](https://unocss.dev/) — utility-first CSS (Tailwind-compatible)
- [@eliancodes/brutal-ui](https://github.com/eliancodes/brutal-ui) — neobrutalist component library
- [satori](https://github.com/vercel/satori) — dynamic OG image generation
- Deployed on [Vercel](https://vercel.com/)

## Development

```bash
pnpm install      # Install dependencies
pnpm dev          # Start dev server at localhost:4321
pnpm build        # Build for production
pnpm preview      # Preview production build locally
```

## Project Structure

```
src/
├── components/       # UI components (layout, blog, home, generic, errors)
├── data/blog/        # Blog posts (Markdown)
├── layouts/          # Page layouts (Default, BlogPost)
├── pages/            # Routes (index, blog, RSS feed, OG image generation)
└── styles/           # Global CSS (infomercial theme, retro effects)
public/
├── fonts/            # Custom typefaces (DM Serif, Outfit, Poppins, Righteous, Sanchez)
└── icon/             # Retro scrollbar icons
```
