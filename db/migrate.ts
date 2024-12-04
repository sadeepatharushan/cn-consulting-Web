import { migrate } from "drizzle-orm/neon-http/migrator";
import { db } from "./index";

const main = async () => {
    try {
        await migrate(db, {
            migrationsFolder: "db/migrations",
        })
        console.log("migration completed")
    } catch (err) {
        console.error(err)
        process.exit(1)
    }
}

main()