import { drizzle } from "drizzle-orm/postgres-js";
import postgres from "postgres";
import * as schema from "./schema.js";


export async function getUrl(): Promise<string> {
  const dbUrl = process.env.DATABASE_URL
  if (dbUrl != undefined) {
    return dbUrl
  }
  else {
    throw new Error("No database URL")
  }
}

export async function initDB() {
  const conn = postgres(await getUrl());
  const db = drizzle(conn, { schema });
  return db
}
