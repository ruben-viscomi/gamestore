"use strict";

const express = require("express");
const router  = express.Router();

const Controller = require("../../../controllers/games.controller.js");

router.use(express.json())
  .get('/', Controller.getGames)
  .get("/:gameCode", Controller.getGame)
  .post('/', Controller.postGame)
  .patch('/', Controller.patchGames)
  .patch("/:gameCode", Controller.patchGame)
  .put('/', Controller.putGame)
  .put("/:gameCode", Controller.putGameByRouteParam)
  .delete("/:gameCode", Controller.deleteGame);

module.exports = router;
