import { attachDatabasePool } from "@vercel/functions";
import { Pool } from "pg";
import { env } from "./env";

// Pooled connection for app traffic. Use DATABASE_URL_UNPOOLED for migrations.
export const pool = new Pool({ connectionString: env.postgres.databaseUrl });

// Lets Vercel Fluid compute close idle clients before a function suspends.
attachDatabasePool(pool);
