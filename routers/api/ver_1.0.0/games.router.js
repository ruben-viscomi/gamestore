"use strict";

const express = require("express");
const router  = express.Router();

const GameHandler = require("../../../handlers/game.handler.js");

router.use(express.json())
  .get('/', GameHandler.getGames)
  .get("/:gameCode", GameHandler.getGame)
  .post('/', GameHandler.postGame)
  .patch('/', GameHandler.patchGames)
  .patch("/:gameCode", GameHandler.patchGame)
  .put('/', GameHandler.putGame)
  .put("/:gameCode", GameHandler.putGameByRouteParam)
  .delete("/:gameCode", GameHandler.deleteGame);

module.exports = router;
