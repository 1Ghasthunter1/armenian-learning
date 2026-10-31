import { config } from 'dotenv';
import { definePrismaConfig } from '@prisma/cli-engine';
import { defineConfig as ormConfig } from '@prisma/orm-postgres/config';

// Neon writes its env vars to .env.local.
config({ path: ['.env.local', '.env'], quiet: true });

export default definePrismaConfig({
  orm: ormConfig({
    contract: "./src/prisma/contract.prisma",
    db: {
      // Migrations need a direct (unpooled) Neon connection.
      connection: process.env['DATABASE_URL_UNPOOLED'] ?? process.env['DATABASE_URL']!,
    },
  }),
});
