"use strict";

const express = require("express");
const router  = express.Router();

router.use("/games", require("./games.router.js"))
  .use("/users", require("./users.router.js"));

module.exports = router;
