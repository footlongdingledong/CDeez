import { Config } from "#config";
import * as readline from "readline/promises";
import { addCD } from "../lib/db/queries/cds.js";

export async function commandAdd(cmdName: string, cfg: Config, ...args: string[]) {
  const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
  const artist = await rl.question("Artist: ");
  const album = await rl.question("Album: ");
  let year = 0
  while (true) {
    let year = Number(await rl.question("Year: "))
    if (Number.isNaN(year)) {
      console.log("invalid year")
    } else {
      break
    }
  }
  rl.close();
  await addCD(cfg, album, artist, year)
  console.log("CD added")
  return
}
