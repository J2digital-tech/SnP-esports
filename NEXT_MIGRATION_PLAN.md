# Next.js Migration Plan

This repo now has a working static-HTML + Express MVP. Use this plan to migrate safely to React/Next.js without losing feature parity.

## 1) Target Architecture

- `apps/web` (Next.js App Router) for UI
- `apps/api` (optional) or Next Route Handlers for API
- Shared domain layer for tournaments/matches/standings logic
- PostgreSQL + Prisma replacing `data/db.json`

## 2) Page Mapping

- `index.html` -> `app/page.tsx`
- `organize-tournaments.html` -> `app/organizer/page.tsx` (protected)
- `splatoon3-north-american-league-2026.html` -> `app/leagues/splatoon/page.tsx`
- `apex-legends-global-series.html` -> `app/leagues/apex/page.tsx`
- `login.html` -> `app/login/page.tsx`
- `signup.html` -> `app/signup/page.tsx`

## 3) API Mapping

- `GET/POST /api/tournaments` -> `app/api/tournaments/route.ts`
- `GET/POST /api/matches` -> `app/api/matches/route.ts`
- `POST /api/matches/:id/score` -> `app/api/matches/[id]/score/route.ts`
- `POST /api/brackets/generate` -> `app/api/brackets/generate/route.ts`
- `GET /api/standings` -> `app/api/standings/route.ts`
- `POST /api/auth/login|register` -> replace with NextAuth/Auth.js

## 4) Migration Sequence

1. Bootstrap Next app and copy current visual styles.
2. Move API client calls into React hooks (`useTournaments`, `useMatches`).
3. Port organizer dashboard forms and lists.
4. Add server-side auth middleware for protected routes.
5. Replace JSON store with Prisma models + seed.
6. Add tests for standings and bracket generation.

## 5) Prisma Model Draft

- `User(id, displayName, email, role, createdAt)`
- `Tournament(id, name, league, format, status, season, startsAt, createdAt)`
- `Match(id, tournamentId, homeTeam, awayTeam, homeScore, awayScore, status, stage, scheduledAt)`

## 6) Definition of Done

- All current pages rendered in Next
- All current API capabilities preserved
- Organizer auth guard server-enforced
- No local JSON state dependency
