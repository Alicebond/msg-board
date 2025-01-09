const pool = require("./pool");

async function getAllmsgs() {
  const { rows } = await pool.query("SELECT * FROM messages");
  return rows;
}

async function getDetailsById(msgId) {
  const { rows } = await pool.query("SELECT * FROM messages WHERE id = $1", [
    msgId,
  ]);
  return rows;
}

async function insertNewMsg(newMsg) {
  await pool.query(
    "INSERT INTO messages(username, text, added) VALUES ($1, $2, now())",
    [newMsg.name, newMsg.msgText]
  );
}

module.exports = { getAllmsgs, getDetailsById, insertNewMsg };
