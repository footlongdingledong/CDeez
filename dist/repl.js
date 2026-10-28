import * as cmd from "./cmds/command_handling.js";
export async function startRepl(cfg) {
    const commands = cmd.getCommands();
    const rawInput = process.argv;
    if (rawInput.length < 3) {
        console.log("Requires command name. Use help for list of commands");
        process.exit(1);
    }
    const cmdName = rawInput[2].toLowerCase();
    const args = rawInput.slice(3);
    if (!commands[cmdName]) {
        console.log("Command does not exist");
        process.exit(1);
    }
    try {
        await commands[cmdName].callback(cmdName, cfg, ...args);
    }
    catch (e) {
        console.log(e);
        process.exit(1);
    }
}
