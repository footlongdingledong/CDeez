import { cds } from "../schema.js";
export async function addCD(cfg, album, artist, year) {
    const result = cfg.db.insert(cds).values({ album: album, artist: artist, year: year }).returning();
    return result;
}
