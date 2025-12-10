# Crypto FX Tracker

A responsive cryptocurrency and NFT dashboard built with React 19, TypeScript, and Vite. The app pulls live data from the public CoinGecko API to surface coins, exchanges, NFTs, asset platforms, and trending categories with sortable tables, detail drawers, and dark/light theming.

## Features
- Live market data via CoinGecko: top 100 coins, exchanges, NFTs, asset platforms, and trending coins/NFTs/categories.
- Home hub with animated hero text, market cap and 24h volume highlights, trending coins, top gainers, and coin cards that open a detail sheet.
- Coins table with multi-column sorting (price, market cap, volume, 24h highs/lows, ATL) plus inline delta indicators and loading spinners.
- Detail sheets for coins, exchanges, and NFTs that surface descriptions, social links, rankings, price movement, and trust/favorites metrics.
- Pagination, skeleton/loading states, and retryable error boxes across data-heavy views.
- Dark/light theme toggle, mobile navigation, and adaptive layouts tailored for phones, tablets, and desktops.

## Tech Stack
- React 19 + TypeScript, Vite 7 for fast HMR and production builds.
- State: Redux Toolkit (async thunks) with typed hooks and modular slices per resource.
- Styling: Tailwind CSS v4 with custom theme tokens, Radix UI primitives (shadcn-inspired), lucide-react icons, and motion/sonner for interactions and toasts.
- Routing: react-router with a simple route config in `src/routes/routes.tsx`.

## Getting Started
Prerequisites: Node.js 18+ and npm.

```bash
# Install dependencies
npm install

# Start the dev server on all interfaces (use http://localhost:5173 by default)
npm run dev

# Type-check and build for production (outputs to dist/)
npm run build

# Preview the production build locally
npm run preview

# Lint the project
npm run lint
```

No API keys are required; all endpoints are public CoinGecko routes. Be mindful of their rate limits when developing.

## Data Sources (CoinGecko)
- `/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100...`
- `/coins/{id}`, `/search/trending`, `/coins/categories`
- `/asset_platforms`
- `/exchanges`, `/exchanges/{id}`
- `/nfts/list`, `/nfts/{id}`

## Project Structure
```
src/
  components/        // UI blocks (cards, tables, sheets, skeletons, pagination)
  pages/             // Route pages: Home, Coins, Exchanges, NFTs, Asset Platforms, Trends
  Redux/             // Store setup + slices per resource
  Types/             // Shared TypeScript models
  routes/routes.tsx  // Route definitions
  index.css          // Tailwind v4 theme tokens and globals
```

## Development Notes
- Async flows live in slice thunks (see `src/Redux/reducers/*Slice.ts`); UI dispatches typed actions via `useAppDispatch`/`useAppSelector`.
- Error and loading UX: `SkeletonBox`, `Spinner`, and `ErorBox` components provide graceful fallback states with retry hooks.
- Detail drawers: coin/exchange/NFT cards dispatch a fetch-by-id thunk and render sheets via Radix UI.
- Theme: `ThemeProvider` + `ModeToggle` manage persisted dark/light mode with Tailwind tokens.

## Build & Deploy
`npm run build` emits a static bundle to `dist/` that can be hosted on any static host (Vercel, Netlify, GitHub Pages, Cloudflare Pages, etc.). Use `npm run preview` to smoke-test the production build locally before deploying.

## License
No license file is provided yet. Add your preferred license before publishing to GitHub.
