import { connection } from "next/server";
import { pool } from "@/lib/db";
import { assets } from "@/lib/storage";

export async function GET() {
  await connection();

  const { rows } = await pool.query<{ now: Date; version: string }>(
    "select now(), version()",
  );

  const key = `healthcheck/${crypto.randomUUID()}.txt`;
  const body = `ok ${Date.now()}`;
  await assets.upload(key, body, { contentType: "text/plain" });
  const downloaded = await (await assets.download(key)).text();
  await assets.delete(key);

  return Response.json({
    postgres: { ok: true, now: rows[0].now, version: rows[0].version },
    storage: { ok: downloaded === body, key },
  });
}
