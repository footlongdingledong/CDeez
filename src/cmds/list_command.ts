import { Config } from "#config";
import { filteredCDs, listCDs } from "../lib/db/queries/cds.js";

export async function commandList(cmdName: string, cfg: Config, ...args: string[]) {
  if (args.length < 1) {
    const cds = await listCDs(cfg)
      console.table(cds, ["artist", "album", "year"])
    return
  }
  const cds = await filteredCDs(cfg, args)
  console.table(cds, ["artist", "album", "year"])
  return
}
