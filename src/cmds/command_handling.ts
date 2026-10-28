import { Config } from "#config";
import { commandAdd } from "./add_command.js";
import { commandAdvAdd } from "./advadd_command.js";
import { commandHelp } from "./help_command.js";
import { commandList } from "./list_command.js";


export type CLICommand = {
  name: string;
  description: string;
  callback: (cmdName: string, cfg: Config, ...args: string[]) => Promise<void>;
};

export function getCommands(): Record<string, CLICommand> {
  return {
    help: {
      name: "help",
      description: "Lists the commands",
      callback: commandHelp,
    },
    add: {
      name: "add",
      description: "Presents prompts to add CD to database one field at a time",
      callback: commandAdd,
    },
    advadd: {
      name: "advAdd",
      description: "Adds a CD to database all at once using flags in command call",
      callback: commandAdvAdd,
    },
    list: {
      name: "list",
      description: "Lists CDs in database",
      callback: commandList,
    }
  }
}
