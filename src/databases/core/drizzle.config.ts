import { Config } from "drizzle-kit";
import { DATABASE_AUTH_TOKEN, DATABASE_URL } from "../../settings";

export default {
  out: "./src/databases/core/migrations",
  schema: "./src/databases/core/**/schema.ts",
  driver: "turso",
  dbCredentials: {
    url: DATABASE_URL,
    authToken: DATABASE_AUTH_TOKEN,
  },
} satisfies Config;
