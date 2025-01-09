#! /usr/bin/env node
// This script only run once

const { Client } = require("pg");
require("dotenv").config();

const SQL = `
CREATE TABLE messages (
  id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  username VARCHAR(255),
  text VARCHAR(255),
  added DATE
);

INSERT INTO messages (username, text, added)
VALUES ('Amando', 'Hi there', now());

INSERT INTO messages (username, text, added)
VALUES ('Charles', 'Hello World', now());`;

async function main() {
  console.log("Seeding...");
  const client = new Client({
    connectionString: `postgresql://${process.env.USERNAME}:${process.env.PASSWORD}@localhost:5432/messages`,
  });
  await client.connect();
  await client.query(SQL);
  await client.end();
  console.log("done");
}

main();
