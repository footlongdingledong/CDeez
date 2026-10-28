#!/usr/bin/env -S npx tsx
import "dotenv/config";
import { startRepl } from "./repl.js";
import { initConfig } from "./config.js";
async function main() {
    const cfg = await initConfig();
    await startRepl(cfg);
    process.exit(0);
}
main();
