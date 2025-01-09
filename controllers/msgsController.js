const db = require("../db/queries");
const asyncHandler = require("express-async-handler");
const CustomNotFoundError = require("../errors/CustomNotFoundError");

const getDetailsById = asyncHandler(async (req, res) => {
  const { msgId } = req.params;

  const [details] = await db.getDetailsById(Number(msgId));
  if (!details) {
    throw new CustomNotFoundError("Message not found");
  }

  res.render("details", { details });
});

const getAllmsgs = asyncHandler(async (req, res) => {
  const msgs = await db.getAllmsgs();
  if (!msgs) {
    throw new CustomNotFoundError("No messages");
  }

  res.render("index", { messages: msgs });
});

const addNewMsg = asyncHandler(async (req, res) => {
  const name = req.body.name;
  const msgText = req.body.msg;
  await db.insertNewMsg({ name, msgText });

  res.redirect("/");
});

module.exports = { getDetailsById, getAllmsgs, addNewMsg };
