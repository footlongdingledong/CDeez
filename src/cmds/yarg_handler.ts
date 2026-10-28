import yargs from "yargs"

export async function yargHandler(args: string[]) {
  const flags = await yargs(args).options({
    album: { type: 'string', default: undefined },
    artist: { type: 'string', default: undefined },
    year: { type: 'number', default: undefined },
    decade: { type: 'string', default: undefined },
    genre: {type: 'string', default: undefined},
  }).check((argv) => {
    if (argv.year !== undefined && isNaN(argv.year)) {
      throw new Error("Year must be a valid number")
    }
    return true;
  }).parse();
  return flags
}
