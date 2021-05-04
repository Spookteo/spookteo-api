import { config } from "dotenv";

switch (process.env.ENVIRONMENT) {
  case "PROD":
    console.log("Using production environment");
    break;

  case "TEST":
    console.log("Using test environment");
    config({ path: ".env.test" });
    break;

  default:
    console.log("Using default environment");
    config({ path: ".env" });
    break;
}

export const DATABASE_URL = process.env.DATABASE_URL;
export const DATABASE_NAME = process.env.DATABASE_NAME;
export const DATABASE_CERT_LOCATION = process.env.DATABASE_CERT_LOCATION;
export const DATABASE_CERT = process.env.DATABASE_CERT;
