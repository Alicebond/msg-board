const { Router } = require("express");
const indexRouter = Router();
const {
  getDetailsById,
  getAllmsgs,
  addNewMsg,
} = require("../controllers/msgsController");

indexRouter.get("/", getAllmsgs);

indexRouter.post("/new", addNewMsg);

indexRouter.get("/details/:msgId", getDetailsById);

module.exports = indexRouter;
