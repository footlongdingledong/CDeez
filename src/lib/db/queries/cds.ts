import { and, between, eq, ilike, SQL, sql } from "drizzle-orm";
import { Config } from "#config";
import { cds } from "../schema.js";
import { yargHandler } from "../../../cmds/yarg_handler.js";
import { fixDecade } from "../../../cmds/filter_handling.js";

export async function addCD(cfg: Config, album: string, artist: string, year: number, genre?: string) {
  if (genre) {
    const result = await cfg.db.insert(cds).values({ album: album, artist: artist, year: year, genre: genre }).returning();
    return result;
  }
  const result = await cfg.db.insert(cds).values({ album: album, artist: artist, year: year}).returning();
  return result;
}

export async function listCDs(cfg: Config) {
  const result = await cfg.db.select().from(cds);
  return result;
}

export async function filteredCDs(cfg: Config, args: string[]) {
  const conditions: SQL[] = [];
  const flags = await yargHandler(args)

  if (flags.artist) {
    // using ilike for case-insensitive partial match, or eq() for exact
    conditions.push(ilike(cds.artist, `%${flags.artist}%`));
  }

  if (flags.album) {
    conditions.push(ilike(cds.album, `%${flags.album}%`));
  }

  if (flags.year !== undefined) {
    conditions.push(eq(cds.year, flags.year));
  }

  if (flags.decade !== undefined) {
    const decade = fixDecade(flags.decade)
    if (decade === "Invalid decade") {
      throw new Error(decade)
    }
    const fdecade = decade / 10
    conditions.push(ilike(cds.year, fdecade.toString()));
  }

  if (flags.genre !== undefined) {
    conditions.push(ilike(cds.genre, flags.genre))
  }
  const whereClause = conditions.length > 0 ? and(...conditions) : undefined
  const result = await cfg.db.select().from(cds).where(whereClause).orderBy(cds.artist)
  return result
}
