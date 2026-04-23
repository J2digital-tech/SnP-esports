const express = require("express");
const cors = require("cors");
const path = require("path");
const bcrypt = require("bcryptjs");
const { prisma } = require("./prisma");
const { signAuthToken, requireAuth, requireRole } = require("./auth");

const app = express();
const PORT = process.env.PORT || 3000;
const sseClients = new Set();

app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, "..")));

function sanitizeUser(user) {
  return {
    id: user.id,
    displayName: user.displayName,
    email: user.email,
    role: user.role,
    createdAt: user.createdAt
  };
}

function emitEvent(event, payload) {
  const body = `event: ${event}\ndata: ${JSON.stringify(payload)}\n\n`;
  for (const res of sseClients) res.write(body);
}

app.get("/api/health", async (_req, res) => {
  const tournaments = await prisma.tournament.count();
  res.json({ ok: true, service: "battlefly-api", tournaments });
});

app.get("/api/tournaments", async (req, res) => {
  const league = req.query.league;
  const rows = await prisma.tournament.findMany({
    where: league ? { league: String(league) } : undefined,
    orderBy: { createdAt: "desc" }
  });
  res.json(rows);
});

app.post("/api/tournaments", requireAuth, requireRole(["organizer", "admin"]), async (req, res) => {
  const { name, league, format, startsAt } = req.body;
  if (!name || !league) return res.status(400).json({ error: "name and league are required" });

  const row = await prisma.tournament.create({
    data: {
      name,
      league,
      format: format || "Custom",
      status: "draft",
      season: "Custom",
      startsAt: startsAt ? new Date(startsAt) : new Date()
    }
  });
  res.status(201).json(row);
});

app.get("/api/matches", async (req, res) => {
  const tournamentId = req.query.tournamentId;
  const rows = await prisma.match.findMany({
    where: tournamentId ? { tournamentId: String(tournamentId) } : undefined,
    orderBy: { scheduledAt: "desc" }
  });
  res.json(rows);
});

app.post("/api/matches", requireAuth, requireRole(["organizer", "admin"]), async (req, res) => {
  const { tournamentId, homeTeam, awayTeam, scheduledAt } = req.body;
  if (!tournamentId || !homeTeam || !awayTeam) {
    return res.status(400).json({ error: "tournamentId, homeTeam, and awayTeam are required" });
  }
  const row = await prisma.match.create({
    data: {
      tournamentId,
      homeTeam,
      awayTeam,
      status: "scheduled",
      scheduledAt: scheduledAt ? new Date(scheduledAt) : new Date()
    }
  });
  res.status(201).json(row);
});

app.post("/api/matches/:id/score", requireAuth, requireRole(["organizer", "admin", "referee"]), async (req, res) => {
  const { id } = req.params;
  const { homeScore, awayScore } = req.body;
  if (homeScore === undefined || awayScore === undefined) {
    return res.status(400).json({ error: "homeScore and awayScore are required" });
  }
  const match = await prisma.match.findUnique({ where: { id } });
  if (!match) return res.status(404).json({ error: "Match not found" });
  const updated = await prisma.match.update({
    where: { id },
    data: { homeScore: Number(homeScore), awayScore: Number(awayScore), status: "completed" }
  });
  emitEvent("match_scored", { matchId: updated.id, tournamentId: updated.tournamentId });
  res.json(updated);
});

app.post("/api/matches/:id/submissions", requireAuth, async (req, res) => {
  const { id } = req.params;
  const { homeScore, awayScore, evidenceUrl } = req.body;
  if (homeScore === undefined || awayScore === undefined) {
    return res.status(400).json({ error: "homeScore and awayScore are required" });
  }
  const match = await prisma.match.findUnique({ where: { id } });
  if (!match) return res.status(404).json({ error: "Match not found" });
  const submission = await prisma.matchResultSubmission.create({
    data: {
      matchId: id,
      submittedById: req.user.sub,
      homeScore: Number(homeScore),
      awayScore: Number(awayScore),
      evidenceUrl: evidenceUrl || null
    }
  });
  emitEvent("submission_created", { submissionId: submission.id, matchId: id });
  res.status(201).json(submission);
});

app.get("/api/matches/:id/submissions", requireAuth, requireRole(["organizer", "admin", "referee"]), async (req, res) => {
  const rows = await prisma.matchResultSubmission.findMany({
    where: { matchId: req.params.id },
    orderBy: { createdAt: "desc" }
  });
  res.json(rows);
});

app.post("/api/submissions/:id/approve", requireAuth, requireRole(["organizer", "admin", "referee"]), async (req, res) => {
  const submission = await prisma.matchResultSubmission.findUnique({ where: { id: req.params.id } });
  if (!submission) return res.status(404).json({ error: "Submission not found" });
  if (submission.status !== "pending") return res.status(400).json({ error: "Submission already reviewed" });

  const [updatedSubmission, updatedMatch] = await prisma.$transaction([
    prisma.matchResultSubmission.update({
      where: { id: submission.id },
      data: { status: "approved", reviewedById: req.user.sub, reviewedAt: new Date() }
    }),
    prisma.match.update({
      where: { id: submission.matchId },
      data: { homeScore: submission.homeScore, awayScore: submission.awayScore, status: "completed" }
    })
  ]);
  emitEvent("submission_approved", { submissionId: updatedSubmission.id, matchId: updatedMatch.id });
  res.json({ submission: updatedSubmission, match: updatedMatch });
});

app.post("/api/submissions/:id/reject", requireAuth, requireRole(["organizer", "admin", "referee"]), async (req, res) => {
  const submission = await prisma.matchResultSubmission.findUnique({ where: { id: req.params.id } });
  if (!submission) return res.status(404).json({ error: "Submission not found" });
  if (submission.status !== "pending") return res.status(400).json({ error: "Submission already reviewed" });

  const updated = await prisma.matchResultSubmission.update({
    where: { id: submission.id },
    data: { status: "rejected", reviewedById: req.user.sub, reviewedAt: new Date() }
  });
  emitEvent("submission_rejected", { submissionId: updated.id, matchId: updated.matchId });
  res.json(updated);
});

app.post("/api/brackets/generate", requireAuth, requireRole(["organizer", "admin"]), async (req, res) => {
  const { tournamentId, teams } = req.body;
  if (!tournamentId) return res.status(400).json({ error: "tournamentId is required" });

  const tournament = await prisma.tournament.findUnique({ where: { id: tournamentId } });
  if (!tournament) return res.status(404).json({ error: "Tournament not found" });

  let bracketTeams = Array.isArray(teams) ? teams.filter(Boolean) : [];
  if (!bracketTeams.length) {
    const fromMatches = await prisma.match.findMany({
      where: { tournamentId },
      select: { homeTeam: true, awayTeam: true }
    });
    bracketTeams = [...new Set(fromMatches.flatMap((m) => [m.homeTeam, m.awayTeam]))];
  }
  if (bracketTeams.length < 2) {
    return res.status(400).json({ error: "At least two teams are required to generate a bracket" });
  }

  const created = [];
  for (let i = 0; i < bracketTeams.length - 1; i += 2) {
    const away = bracketTeams[i + 1];
    if (!away) break;
    const match = await prisma.match.create({
      data: {
        tournamentId,
        homeTeam: bracketTeams[i],
        awayTeam: away,
        status: "scheduled",
        stage: "bracket_round_1",
        scheduledAt: new Date()
      }
    });
    created.push(match);
  }
  res.status(201).json({ tournamentId, createdCount: created.length, matches: created });
});

app.get("/api/standings", async (req, res) => {
  const league = req.query.league ? String(req.query.league) : undefined;
  const tournamentId = req.query.tournamentId ? String(req.query.tournamentId) : undefined;
  const tournamentFilter = tournamentId
    ? { id: tournamentId }
    : league
      ? { league }
      : undefined;

  const tournaments = await prisma.tournament.findMany({
    where: tournamentFilter,
    select: { id: true }
  });
  const tournamentIds = tournaments.map((t) => t.id);
  if (!tournamentIds.length) return res.json([]);

  const matches = await prisma.match.findMany({
    where: { tournamentId: { in: tournamentIds }, status: "completed" }
  });

  const table = new Map();
  for (const m of matches) {
    if (!table.has(m.homeTeam)) table.set(m.homeTeam, { team: m.homeTeam, played: 0, wins: 0, losses: 0, points: 0 });
    if (!table.has(m.awayTeam)) table.set(m.awayTeam, { team: m.awayTeam, played: 0, wins: 0, losses: 0, points: 0 });
    const home = table.get(m.homeTeam);
    const away = table.get(m.awayTeam);
    home.played += 1;
    away.played += 1;
    if (m.homeScore > m.awayScore) {
      home.wins += 1;
      home.points += 3;
      away.losses += 1;
    } else if (m.awayScore > m.homeScore) {
      away.wins += 1;
      away.points += 3;
      home.losses += 1;
    } else {
      home.points += 1;
      away.points += 1;
    }
  }

  res.json([...table.values()].sort((a, b) => b.points - a.points || b.wins - a.wins));
});

app.get("/api/standings/stream", (req, res) => {
  res.setHeader("Content-Type", "text/event-stream");
  res.setHeader("Cache-Control", "no-cache");
  res.setHeader("Connection", "keep-alive");
  res.flushHeaders();
  res.write("event: ready\ndata: {\"ok\":true}\n\n");
  sseClients.add(res);
  const ping = setInterval(() => res.write("event: ping\ndata: {}\n\n"), 25000);
  req.on("close", () => {
    clearInterval(ping);
    sseClients.delete(res);
  });
});

app.post("/api/disputes", requireAuth, async (req, res) => {
  const { matchId, reason } = req.body;
  if (!matchId || !reason) return res.status(400).json({ error: "matchId and reason are required" });
  const match = await prisma.match.findUnique({ where: { id: matchId } });
  if (!match) return res.status(404).json({ error: "Match not found" });
  const dispute = await prisma.dispute.create({
    data: { matchId, reason, createdById: req.user.sub, status: "open" }
  });
  emitEvent("dispute_opened", { disputeId: dispute.id, matchId });
  res.status(201).json(dispute);
});

app.get("/api/disputes", requireAuth, requireRole(["organizer", "admin", "referee"]), async (req, res) => {
  const status = req.query.status ? String(req.query.status) : undefined;
  const disputes = await prisma.dispute.findMany({
    where: status ? { status } : undefined,
    orderBy: { createdAt: "desc" }
  });
  res.json(disputes);
});

app.post("/api/disputes/:id/resolve", requireAuth, requireRole(["organizer", "admin", "referee"]), async (req, res) => {
  const { status, resolutionNotes } = req.body;
  const nextStatus = status || "resolved";
  if (!["resolved", "rejected"].includes(nextStatus)) {
    return res.status(400).json({ error: "status must be resolved or rejected" });
  }
  const dispute = await prisma.dispute.findUnique({ where: { id: req.params.id } });
  if (!dispute) return res.status(404).json({ error: "Dispute not found" });
  const updated = await prisma.dispute.update({
    where: { id: req.params.id },
    data: {
      status: nextStatus,
      resolutionNotes: resolutionNotes || null,
      resolvedById: req.user.sub,
      resolvedAt: new Date()
    }
  });
  emitEvent("dispute_resolved", { disputeId: updated.id, status: updated.status });
  res.json(updated);
});

app.post("/api/ingest/webhook/:source", async (req, res) => {
  const source = req.params.source;
  const secret = process.env.INGEST_WEBHOOK_SECRET;
  const incomingSecret = req.headers["x-webhook-secret"];
  if (secret && incomingSecret !== secret) {
    return res.status(401).json({ error: "Invalid webhook secret" });
  }
  const eventType = String(req.body.eventType || "unknown");
  const payload = req.body.payload || req.body;
  const event = await prisma.ingestionEvent.create({
    data: { source, eventType, payload, status: "queued" }
  });
  emitEvent("ingest_queued", { ingestionEventId: event.id, source, eventType });
  res.status(202).json({ queued: true, id: event.id });
});

app.post("/api/auth/register", async (req, res) => {
  const { displayName, email, password } = req.body;
  if (!displayName || !email || !password) {
    return res.status(400).json({ error: "displayName, email, and password are required" });
  }
  const exists = await prisma.user.findUnique({ where: { email: String(email).toLowerCase() } });
  if (exists) return res.status(409).json({ error: "Email already exists" });

  const user = await prisma.user.create({
    data: {
      displayName,
      email: String(email).toLowerCase(),
      passwordHash: await bcrypt.hash(password, 10),
      role: "player"
    }
  });
  const safeUser = sanitizeUser(user);
  res.status(201).json({ user: safeUser, token: signAuthToken(safeUser) });
});

app.post("/api/auth/login", async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) return res.status(400).json({ error: "email and password are required" });

  const user = await prisma.user.findUnique({ where: { email: String(email).toLowerCase() } });
  if (!user) return res.status(404).json({ error: "User not found" });
  const valid = await bcrypt.compare(password, user.passwordHash);
  if (!valid) return res.status(401).json({ error: "Invalid credentials" });

  const safeUser = sanitizeUser(user);
  res.json({ user: safeUser, token: signAuthToken(safeUser) });
});

app.get("/api/auth/me", requireAuth, async (req, res) => {
  const user = await prisma.user.findUnique({ where: { id: req.user.sub } });
  if (!user) return res.status(404).json({ error: "User not found" });
  res.json({ user: sanitizeUser(user) });
});

app.use((_req, res) => {
  res.sendFile(path.join(__dirname, "..", "index.html"));
});

app.listen(PORT, () => {
  console.log(`BattleFly platform running at http://localhost:${PORT}`);
});
