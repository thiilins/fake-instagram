const port = process.env.PORT || 5050;
const express = require("express");
const routes = require("./routes");
const logger = require("morgan");
const path = require("path");
const app = express();
const methodOverride = require("method-override");
const session = require("express-session");

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.resolve(__dirname, "public")));
app.use(methodOverride("_method"));
app.use(
  session({
    secret: "DevHouseL3000TL",
    resave: true,
    saveUninitialized: true,
    cookie: {
      secure: "auto",
      maxAge: 2600000,
    },
  })
);
app.use("/", routes);
app.listen(port, () =>
  console.log(`🚀 O servidor esta rodando em http://localhost:${port}`)
);
