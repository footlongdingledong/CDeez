#!/usr/bin/env -S npx tsx
import "dotenv/config";
import { fileURLToPath } from 'url';
import path from "path"
import { startRepl } from "./repl.js";
import { initConfig } from "./config.js";
import { configDotenv } from "dotenv";

async function main() {
  configDotenv({
    path: path.resolve(fileURLToPath(path.dirname(import.meta.url)), "../.env"),
    quiet: true,
  })
  const cfg = await initConfig()
  await startRepl(cfg)
  process.exit(0)
}

main()
