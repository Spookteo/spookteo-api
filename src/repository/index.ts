import { MongoClient } from "mongodb";
import { DATABASE_NAME, DATABASE_URL } from "../tools/environment";
import RecordRepository from "./recordRepository"
import UserRepository from "./userRepository"

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

/**
 * This repository  contains all functions to interact with the 
 * records table in the mongodb database
 */
const recordRepository = new RecordRepository({makeDb});
const userRepository = new UserRepository({makeDb});

export {
    recordRepository,
    userRepository
}