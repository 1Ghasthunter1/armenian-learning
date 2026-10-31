import { parseEnv } from "@neon/env";
import config from "../neon";

export const env = parseEnv(config, [
  "DATABASE_URL",
  "AWS_ACCESS_KEY_ID",
  "AWS_SECRET_ACCESS_KEY",
  "AWS_ENDPOINT_URL_S3",
  "AWS_REGION",
]);
