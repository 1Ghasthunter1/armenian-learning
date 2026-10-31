import { betterAuth } from "better-auth";
import { pool } from "@/lib/db";

// Reads BETTER_AUTH_SECRET and BETTER_AUTH_URL from the environment.
// Tables are defined in src/prisma/contract.prisma and created by Prisma migrations.
export const auth = betterAuth({
  database: pool,
  user: { modelName: "User" },
  session: { modelName: "Session" },
  account: { modelName: "Account" },
  verification: { modelName: "Verification" },
  // Prisma contract uses autoincrement Int ids.
  advanced: { database: { generateId: "serial" } },
  socialProviders: {
    google: {
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
      // Only people who already have a User row can sign in.
      disableSignUp: true,
    },
  },
});
