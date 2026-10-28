import { getCommands } from "./command_handling.js";
export async function commandHelp(cmdName, cfg, ...args) {
    const commands = getCommands();
    for (const key in commands) {
        console.log(`${commands[key].name}: ${commands[key].description}`);
    }
}
