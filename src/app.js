const port = 4000;

const express = require("express");
const routes = require("./routes");
const logger = require("morgan");
const path = require("path");
const app = express();

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

app.use("/", routes);

app.listen(port, () =>
  console.log(`🚀 Servidor Rodando em http://localhost:${port}`)
);
