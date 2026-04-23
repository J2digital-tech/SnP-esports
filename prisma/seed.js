const { PrismaClient } = require("../server/generated/prisma-client");
const bcrypt = require("bcryptjs");

const prisma = new PrismaClient();

async function main() {
  const adminPasswordHash = await bcrypt.hash("Admin123!", 10);
  const admin = await prisma.user.upsert({
    where: { email: "admin@battlefly.gg" },
    update: { displayName: "BattleFly Admin", role: "organizer", passwordHash: adminPasswordHash },
    create: {
      displayName: "BattleFly Admin",
      email: "admin@battlefly.gg",
      role: "organizer",
      passwordHash: adminPasswordHash
    }
  });

  await prisma.user.upsert({
    where: { email: "referee@battlefly.gg" },
    update: { displayName: "BattleFly Referee", role: "referee", passwordHash: await bcrypt.hash("Ref12345!", 10) },
    create: {
      displayName: "BattleFly Referee",
      email: "referee@battlefly.gg",
      role: "referee",
      passwordHash: await bcrypt.hash("Ref12345!", 10)
    }
  });

  const splatoon = await prisma.tournament.upsert({
    where: { id: "trn_spl_2026" },
    update: {},
    create: {
      id: "trn_spl_2026",
      name: "Splatoon 3 North American League 2026",
      league: "splatoon",
      format: "Round Robin",
      status: "live",
      season: "S1 2026",
      startsAt: new Date("2026-05-01T16:00:00.000Z")
    }
  });

  const apex = await prisma.tournament.upsert({
    where: { id: "trn_apx_2026" },
    update: {},
    create: {
      id: "trn_apx_2026",
      name: "Apex Legends Global Series",
      league: "apex",
      format: "Group Stage + Playoffs",
      status: "upcoming",
      season: "Spring 2026",
      startsAt: new Date("2026-05-15T18:00:00.000Z")
    }
  });

  await prisma.match.upsert({
    where: { id: "m_spl_1" },
    update: {},
    create: {
      id: "m_spl_1",
      tournamentId: splatoon.id,
      homeTeam: "Ink Storm",
      awayTeam: "Coral Core",
      homeScore: 3,
      awayScore: 2,
      status: "completed",
      scheduledAt: new Date("2026-05-03T16:00:00.000Z")
    }
  });

  await prisma.match.upsert({
    where: { id: "m_apx_1" },
    update: {},
    create: {
      id: "m_apx_1",
      tournamentId: apex.id,
      homeTeam: "Sky Predators",
      awayTeam: "Arc Flash",
      homeScore: 0,
      awayScore: 0,
      status: "scheduled",
      scheduledAt: new Date("2026-05-18T18:30:00.000Z")
    }
  });

  console.log("Seeded admin + base tournaments and matches.");
  console.log("Admin login: admin@battlefly.gg / Admin123!");
  console.log("Referee login: referee@battlefly.gg / Ref12345!");
  console.log("Admin user id:", admin.id);
}

main()
  .catch((err) => {
    console.error(err);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
