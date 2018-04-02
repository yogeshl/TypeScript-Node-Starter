import express from "express";
import compression from "compression";  // compresses requests
import bodyParser from "body-parser";
import logger from "./util/logger";
import dotenv from "dotenv";
import path from "path";
import expressValidator from "express-validator";
import bluebird from "bluebird";
import { MYSQLDB_URI } from "./util/secrets";

// Load environment variables from .env file, where API keys and passwords are configured
dotenv.config({ path: ".env.example" });

// Controllers (route handlers)
import * as apiController from "./controllers/api";

// API keys and other configuration
import * as authentication from "./config/auth";

// Create Express server
const app = express();

// Connect to Database


// Express configuration
app.set("port", process.env.PORT || 3000);
app.use(compression());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(expressValidator());

app.use(
  express.static(path.join(__dirname, "public"), { maxAge: 31557600000 })
);

/**
 * API examples routes.
 */
app.get("/api", apiController.getApi);
app.get("/api1", apiController.getApi1);

export default app;