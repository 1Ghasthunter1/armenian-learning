import { Files } from "files-sdk";
import { neon } from "files-sdk/neon";
import "./env";

// Reads AWS_* credentials, endpoint, and region from the environment.
export const assets = new Files({ adapter: neon({ bucket: "assets" }) });
