"use strict";

const express = require("express");
const router  = express.Router();

const Controller = require("../../../controllers/users.controller.js");

router.use(express.json())
  .get('/', Controller.getUsers)
  .get("/:username", Controller.getUser)
  .post('/', Controller.postUser)
  .patch('/', Controller.patchUsers)
  .patch("/:username", Controller.patchUser)
  .put('/', Controller.putUser)
  .put("/:username", Controller.putUserByUsername)
  .delete("/:username", Controller.deleteUser);

module.exports = router;
