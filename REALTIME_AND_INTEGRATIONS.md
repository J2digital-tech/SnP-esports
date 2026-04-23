# Realtime + Integrations Quick Guide

## Realtime standings stream (SSE)

- Endpoint: `GET /api/standings/stream`
- Returns server-sent events:
  - `ready`
  - `ping`
  - `match_scored`
  - `submission_created|approved|rejected`
  - `dispute_opened|resolved`
  - `ingest_queued`

Client example:

```js
const stream = new EventSource("/api/standings/stream");
stream.addEventListener("match_scored", (e) => {
  const data = JSON.parse(e.data);
  console.log("Match scored:", data);
});
```

## Match integrity workflow

1. Player submits result:
   - `POST /api/matches/:id/submissions`
2. Organizer/referee reviews:
   - `POST /api/submissions/:id/approve`
   - `POST /api/submissions/:id/reject`
3. Approved submission writes final score to match and affects standings.

## Disputes

- Open: `POST /api/disputes`
- List (staff): `GET /api/disputes`
- Resolve/reject (staff): `POST /api/disputes/:id/resolve`

## Webhook ingestion

- Queue external event: `POST /api/ingest/webhook/:source`
- Optional secret header:
  - `x-webhook-secret: <INGEST_WEBHOOK_SECRET>`
- Payload shape:

```json
{
  "eventType": "match.completed",
  "payload": {
    "tournamentId": "trn_spl_2026",
    "homeTeam": "Ink Storm",
    "awayTeam": "Coral Core",
    "homeScore": 3,
    "awayScore": 1
  }
}
```

Run worker:

- `npm run start:worker`

The worker processes queued ingestion events and updates matches.
