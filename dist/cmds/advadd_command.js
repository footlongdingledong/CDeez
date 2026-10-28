import yargs from "yargs";
import { addCD } from "../lib/db/queries/cds.js";
export async function commandAdvAdd(cmdName, cfg, ...args) {
    if (args.length < 6) {
        console.log("Command requires CD info flags (ex: add --artist 'Tool' --album 'Lateralus' --year 2001)");
        return;
    }
    const flags = await yargs(args).options({
        album: { type: 'string', default: null },
        artist: { type: 'string', default: null },
        year: { type: 'number', default: null }
    }).parse();
    if (flags.album == null || flags.artist == null || flags.year == null) {
        console.log("Not enough values provided");
        return;
    }
    else {
        await addCD(cfg, flags.album, flags.artist, flags.year);
        console.log("CD added");
        return;
    }
}
