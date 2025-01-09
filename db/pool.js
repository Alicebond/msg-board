const { Pool } = require("pg");
require("dotenv").config();

module.exports = new Pool({
  host: "localhost",
  user: process.env.USERNAME,
  database: "msg_board",
  password: process.env.PASSWORD,
  port: 5432,
});
