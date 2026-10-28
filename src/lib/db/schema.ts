import { pgTable, timestamp, uuid, text, integer } from "drizzle-orm/pg-core";

export const cds = pgTable("cds", {
  id: uuid("id").primaryKey().defaultRandom().notNull(),
  createdAt: timestamp("created_at").notNull().defaultNow(),
  updatedAt: timestamp("updated_at").notNull().defaultNow()
    .$onUpdate(() => new Date()),
  album: text("album").notNull(),
  artist: text("artist").notNull(),
  year: integer(),
  genre: text("genre"),
});
