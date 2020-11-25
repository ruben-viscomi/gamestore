"use strict";

const express = require("express");
const router  = express.Router();

const UserHandler = require("../../../handlers/user.handler.js");

router.use(express.json())
  .get('/', UserHandler.getUsers)
  .get("/:username", UserHandler.getUser)
  .post('/', UserHandler.postUser)
  .patch('/', UserHandler.patchUsers)
  .patch("/:username", UserHandler.patchUser)
  .put('/', UserHandler.putUser)
  .put("/:username", UserHandler.putUserByUsername)
  .delete("/:username", UserHandler.deleteUser);

module.exports = router;
