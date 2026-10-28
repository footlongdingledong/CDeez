import { initDB } from "./lib/db/index.js";
export async function initConfig() {
    const db = await initDB();
    //discog API call here
    const cfg = {
        db: db
    };
    return cfg;
}
