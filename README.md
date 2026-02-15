# Curation Library

A personal platform for capturing, organizing, and showcasing curated items (fashion, design, furniture, drinkware, etc.).

## Vision

Remove friction from your curation workflow while preserving intentionality. You do the research (finding the real product), the tool handles the logistics (organizing, tagging, sharing).

## Current Problem

- **Time investment**: 10-15 minutes per item to manually copy metadata
- **No organization**: Notion doesn't help you see patterns
- **Not shareable**: Your taste is scattered, not showcased

## Solution

- Paste product URL → tool scrapes metadata + images
- You select the best image
- Auto-tags based on rules (company, keywords, sector)
- Browse in beautiful library with filters
- Share minimal public gallery
- **Result**: 5-7 mins per item, visible taste patterns, shareable portfolio

## Tech Stack

- **Frontend**: Next.js + React
- **Styling**: Tailwind CSS
- **Backend**: Sanity CMS
- **Deployment**: Vercel
- **Scraper**: Node.js + Cheerio

## Features (MVP)

### Capture Flow
- Paste product URL
- Auto-extract metadata (product name, company, sector)
- Scrape multiple product images, select the best
- Auto-generate tags based on rules
- Optional note/tagline

### Library (Private)
- Browse items (grid/list/card views)
- Filter by sector, tags, search by name/company
- View full item details
- Edit/delete items
- Password-protected

### Portfolio (Public)
- Minimal gallery of public items (image + product name + company)
- Click to view details (your note, tags, product URL)
- Shareable links + SEO-friendly
- No authentication required

## Getting Started (Local Development)

1. Clone repo
2. `npm install`
3. Set up Sanity project (docs coming)
4. Configure `.env.local` with API keys
5. `npm run dev`
6. Open http://localhost:3000

## Project Structure
```
curation-library/
├── pages/           # Next.js routes
├── components/      # Reusable React components
├── lib/            # Utilities, API clients, hooks
├── styles/         # Global CSS + Tailwind config
├── public/         # Static assets
├── sanity/         # Sanity schema + config
└── docs/           # Documentation
```

## Timeline

- **Week 1 (Feb 13-19)**: Foundation & setup
- **Week 2 (Feb 20-26)**: Capture flow
- **Week 3 (Feb 27-Mar 5)**: Library & portfolio
- **Week 4 (Mar 6-12)**: Polish & launch

## Documentation

- [ARCHITECTURE.md](./docs/ARCHITECTURE.md) - System design
- [DEVELOPMENT.md](./docs/DEVELOPMENT.md) - How to develop
- [CHANGELOG.md](./CHANGELOG.md) - Version history

## Blog Posts (Weekly Updates)

This project is being built in public on Substack. Follow for weekly updates on the build process, decisions made, and lessons learned.

## License

MIT

## Author

Built by Pranav Mehta  
February - March 2025