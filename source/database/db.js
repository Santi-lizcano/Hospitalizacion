import mysql from "mysql2/promise";
import config from "../configuration.js";

export const connection = await mysql.createConnection({
  host: config.host,
  user: config.user,
  password: config.password,
  database: config.database,
  port: config.port
});