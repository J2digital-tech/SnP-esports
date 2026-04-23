const { prisma } = require("./prisma");

const POLL_MS = Number(process.env.INGEST_POLL_MS || 4000);

async function processEvent(event) {
  const payload = event.payload || {};
  if (event.eventType === "match.completed") {
    const tournamentId = payload.tournamentId;
    const homeTeam = payload.homeTeam;
    const awayTeam = payload.awayTeam;
    const homeScore = Number(payload.homeScore || 0);
    const awayScore = Number(payload.awayScore || 0);
    if (!tournamentId || !homeTeam || !awayTeam) throw new Error("Invalid match.completed payload");

    const existing = await prisma.match.findFirst({
      where: {
        tournamentId,
        homeTeam,
        awayTeam,
        scheduledAt: payload.scheduledAt ? new Date(payload.scheduledAt) : undefined
      }
    });

    if (existing) {
      await prisma.match.update({
        where: { id: existing.id },
        data: { homeScore, awayScore, status: "completed" }
      });
      return;
    }

    await prisma.match.create({
      data: {
        tournamentId,
        homeTeam,
        awayTeam,
        homeScore,
        awayScore,
        status: "completed",
        stage: payload.stage || "ingested",
        scheduledAt: payload.scheduledAt ? new Date(payload.scheduledAt) : new Date()
      }
    });
  }
}

async function tick() {
  const next = await prisma.ingestionEvent.findFirst({
    where: { status: "queued" },
    orderBy: { createdAt: "asc" }
  });
  if (!next) return;

  try {
    await processEvent(next);
    await prisma.ingestionEvent.update({
      where: { id: next.id },
      data: { status: "processed", processedAt: new Date(), error: null }
    });
    console.log("Processed ingestion event", next.id, next.eventType);
  } catch (err) {
    await prisma.ingestionEvent.update({
      where: { id: next.id },
      data: { status: "failed", processedAt: new Date(), error: String(err.message || err) }
    });
    console.error("Failed ingestion event", next.id, err);
  }
}

async function main() {
  console.log("Ingestion worker started. Poll interval(ms):", POLL_MS);
  setInterval(() => {
    tick().catch((err) => console.error("Worker tick error:", err));
  }, POLL_MS);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
