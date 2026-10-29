import { Config } from "#config";
import { addCD } from "../lib/db/queries/cds.js";
import { yargHandler } from "./yarg_handler.js";

export async function commandAdvAdd(cmdName: string, cfg: Config, ...args: string[]) {
  if (args.length < 1) {
   console.log("Command requires CD info flags (ex: advadd --artist 'Tool' --album 'Lateralus' --year 2001)\nUse advadd --help for options")
   return
  }
  const flags = await yargHandler(args)
  if (flags.album == null || flags.artist == null || flags.year == null) {
    console.log("Not enough values provided/Invalid entry")
    return
  }
  if (flags.genre){
    await addCD(cfg, flags.album, flags.artist, flags.year, flags.genre)
    console.log("CD added")
    return
}
  await addCD(cfg, flags.album, flags.artist, flags.year)
  console.log("CD added")
  return


}
