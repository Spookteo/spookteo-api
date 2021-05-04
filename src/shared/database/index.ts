import { MongoClient, MongoClientOptions } from "mongodb";
import {
  DATABASE_NAME,
  DATABASE_URL,
  DATABASE_CERT_LOCATION,
  DATABASE_CERT,
} from "@shared/environment";
import * as fs from "fs";

/**
 * Urlof the database (get from environment variables)
 */
const url = DATABASE_URL;
/**
 * Name of the database (from environment variables)
 */
const dbName = DATABASE_NAME;

/**
 * boolean representing if the connection needs a certificate to authentify
 */
const useCert =
  (DATABASE_CERT_LOCATION && DATABASE_CERT_LOCATION.length > 0) ||
  (DATABASE_CERT && DATABASE_CERT.length > 0);

/**
 * Options used to connect to the MongoDb database
 */
const options: MongoClientOptions = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

if (useCert) {
  if (DATABASE_CERT_LOCATION && DATABASE_CERT_LOCATION.length > 0) {
    const credentials = fs.readFileSync(DATABASE_CERT_LOCATION).toString();
    options.sslKey = credentials;
    options.sslCert = credentials;
  } else {
    const credentials = Buffer.from(DATABASE_CERT);
    options.sslKey = credentials;
    options.sslCert = credentials;
  }
}

/**
 * Mongo client (initialize by makeDb function)
 */
const client = new MongoClient(url, options);

/**
 * This function return a database connection
 */
export async function makeDb() {
  if (!client.isConnected()) {
    await client.connect();
  }
  return client.db(dbName);
}
