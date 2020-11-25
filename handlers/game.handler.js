"use strict";

const Game = require("../models/game.model.js");

const GameHandler = (function gameHandlerConstruct() {

  // ########################################################################## //
  // ####  TODO: Connect to mongoose and check for credentials to perform  #### //
  // ####        certain operations like "DELETE"                          #### //
  // ########################################################################## //

  function isEmpty(obj) {;
    return  obj && Object.entries(obj).length === 0;
  }

  function handleParams(req) {
    var params = {};
    if(req.query && isEmpty(req.body)) {
      params = req.query;
    } else if (isEmpty(req.query) && req.params) {
      return req.body;
    }
    return params;
  }

  function getGames(req, res) {
    var params = handleParams(req);
    Game.find(params).exec()
    .then(games => {
      if (!isEmpty(games)) res.json(games);
      else res.sendStatus(404);
    })
    .catch(err => res.sendStatus(400));
  }

  function getGame(req, res) {
    if (req.params.gameCode) {
      Game.find({ code: req.params.gameCode }).exec()
        .then(game => {
          if (!isEmpty(game)) res.json(game);
          else res.sendStatus(404);
        })
        .catch(err => res.sendStatus(400));
    } else res.sendStatus(400);
  }

  function postGame(req, res) {
    if (!isEmpty(req.body)) {
      Game.create(req.body)
        .then(creationResult => res.json(creationResult))
        .catch(err => res.sendStatus(400));
    } else res.sendStatus(400);
  }

  function patchGames(req, res) {
    const [query, fields] = req.body;
    if (query && fields) {
      Game.updateMany(query, fields).exec()
        .then(result => res.json(result)) // IMPROVE: confront result.n and result.nModified
        .catch(err => res.sendStatus(400));
    } else res.sendStatus(400);
  }

  function patchGame(req, res) {
    if (req.params.gameCode && !isEmpty(req.body)) {
      Game.updateOne(req.params.gameCode, req.body).exec()
        .then(result => res.json(result))
        .catch(err => res.sendStatus(400));
    } else res.sendStatus(400);
  }

  function putGame(req, res) {
    const [query, newGame] = req.body;
    if (query && !isEmpty(newGame)) {
      Game.replaceOne(query, newGame).exec()
        .then(result => res.json(result))
        .catch(err => res.sendStatus(400));
    } else res.sendStatus(400);
  }

  function putGameByRouteParam(req, res) {
    const [gameCode, newGame] = [req.params.gameCode, req.body];
    if (gameCode && !isEmpty(newGame)) {
      Game.replaceOne({ code: gameCode }, newGame).exec()
        .then(result => res.json(result))
        .catch(err => res.sendStatus(400));
    } else res.sendStatus(400);
  }

  function deleteGame(req, res) {
    if (req.params.gameCode) {
      Game.deleteOne({ code: req.params.gameCode }).exec()
        .then( result => res.json(result) )
        .catch( err => res.sendStatus(400) );
    } else res.sendStatus(400);
  }

  return {
    getGames, getGame, postGame, patchGames, patchGame,
    putGame, putGameByRouteParam, deleteGame
  };

}());

module.exports = GameHandler;
