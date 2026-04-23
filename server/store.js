const fs = require("fs/promises");
const path = require("path");

const dataDir = path.join(__dirname, "..", "data");
const dbPath = path.join(dataDir, "db.json");
const seedPath = path.join(dataDir, "seed.json");

async function ensureDbFile() {
  try {
    await fs.access(dbPath);
  } catch {
    const seedRaw = await fs.readFile(seedPath, "utf8");
    await fs.writeFile(dbPath, seedRaw, "utf8");
  }
}

async function readDb() {
  await ensureDbFile();
  const raw = await fs.readFile(dbPath, "utf8");
  return JSON.parse(raw);
}

async function writeDb(db) {
  await fs.writeFile(dbPath, JSON.stringify(db, null, 2), "utf8");
}

function createId(prefix) {
  return `${prefix}_${Math.random().toString(36).slice(2, 10)}`;
}

module.exports = {
  readDb,
  writeDb,
  createId
};
