import { initDB } from "./lib/db/index.js"

export type Config = {
  db: Awaited<ReturnType<typeof initDB>>;
  //discog: DiscogAPI;
}

export async function initConfig() {
  const db = await initDB()
  //discog API call here
  const cfg: Config = {
    db: db
  }
  return cfg
}
