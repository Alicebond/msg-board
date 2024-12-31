const { Router } = require("express");
const indexRouter = Router();
const { messages } = require("../db");
const { getDetailsById } = require("../controllers/detailsController");

indexRouter.get("/", (req, res) => {
  res.render("index", { messages });
});

indexRouter.post("/new", (req, res) => {
  const name = req.body.name;
  const msgText = req.body.msg;
  const id = messages.length + 1;
  messages.push({ id: id, text: msgText, user: name, added: new Date() });

  res.redirect("/");
});

indexRouter.get("/details/:msgId", getDetailsById);

module.exports = indexRouter;
