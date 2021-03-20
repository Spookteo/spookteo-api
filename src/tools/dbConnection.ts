import { MongoClient } from "mongodb";
import { DATABASE_NAME, DATABASE_URL } from "./environment";

/**
 * Urlof the database (get from environment variables)
 */
 const url = DATABASE_URL;
 /**
  * Name of the database (from environment variables)
  */
 const dbName = DATABASE_NAME;
 /**
  * Mongo client (initialize by makeDb function)
  */
 const client = new MongoClient(url, {useNewUrlParser: true, useUnifiedTopology: true})
 
 /**
  * This function return a database connection
  */
 export async function makeDb() {
     if (!client.isConnected()) {
         await client.connect() 
     }
     return client.db(dbName)
 }