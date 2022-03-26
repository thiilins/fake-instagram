"use strict";
module.exports = {
  development: {
    dialect: "sqlite",
    storage: "./src/database/database.sqlite",
  },
  test: {
    dialect: "sqlite",
    storage: "./src/database/database.sqlite",
  },
  production: {
    dialect: "sqlite",
    storage: "./src/database/database.sqlite",
  },
};
