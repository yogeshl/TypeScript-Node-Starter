import logger from "./logger";
import dotenv from "dotenv";
import fs from "fs";

if (fs.existsSync(".env")) {
    logger.debug("Using .env file to supply config environment variables");
    dotenv.config({ path: ".env" });
} else {
    logger.debug("Using .env.example file to supply config environment variables");
    dotenv.config({ path: ".env.example" });  // you can delete this after you create your own .env file!
}
export const ENVIRONMENT = process.env.NODE_ENV;
const prod = ENVIRONMENT === "production"; // Anything else is treated as 'dev'

export const MYSQLDB_URI = prod ? process.env["MYSQLDB_URI"] : process.env["MYSQLDB_URI_LOCAL"];

if (!MYSQLDB_URI) {
    logger.error("No DB connection string. Set MYSQLDB_URI environment variable.");
    process.exit(1);
}
