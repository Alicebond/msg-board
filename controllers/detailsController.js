const db = require("../db");
const asyncHandler = require("express-async-handler");
const CustomNotFoundError = require("../errors/CustomNotFoundError");

const getDetailsById = asyncHandler(async (req, res) => {
  const { msgId } = req.params;

  const details = await db.getDetailsById(Number(msgId));

  if (!details) {
    throw new CustomNotFoundError("Message not found");
  }

  res.render("details", { details });
});

module.exports = { getDetailsById };
