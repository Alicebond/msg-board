const express = require("express");
const path = require("node:path");
const indexRouter = require("./routes/index");
const newMsgRouter = require("./routes/new");

const app = express();

const assetsPath = path.join(__dirname, "public");
app.use(express.static(assetsPath));

app.use(express.urlencoded({ extended: true }));

app.use("/", indexRouter);
app.use("/new", newMsgRouter);

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

const port = 3154;
app.listen(port, () => {
  console.log(`Mini message app - listening on port: ${port}`);
});
