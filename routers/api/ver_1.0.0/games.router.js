const express = require("express");
const router  = express.Router();

const {
  createGame, readGames, readGame, patchGames,
  patchGame, putGame, deleteGame
} = require("../../../services/game.service.js");

// ########################################################################## //
// ####  TODO: Connect to mongoose and check for credentials to perform  #### //
// ####        certain operations like "DELETE"                          #### //
// ########################################################################## //

router.use(express.json())

  .get('/', (req, res) => {
    var params = {};
    if(req.query && !req.params) {
      // TODO: validate query params
      params = req.query;
    } else if (!req.query && req.params) {
      // TODO: validate body params
      params = req.body;
    }
    // NOTE: query params and body not allowed at same time.
    readGames()
      .then(games => {
        if (games && games.length !== 0) res.json(games);
        else res.sendStatus(404);
      })
      .catch( err => res.sendStatus(400) );
  })

  .get("/:gameCode", (req, res) => {
    if (req.params.gameCode) {
      readGame(req.params.gameCode)
        .then(game => {
          if (game) res.json(game);
          else res.sendStatus(404);
        })
        .catch( err => res.sendStatus(400) );
    } else res.sendStatus(400);
  })

  .post("/", (req, res) => {
    const game = req.body;
    // TODO: validate game
    if (game) {
      createGame(game)
        .then( creationResult => res.json(creationResult) )
        .catch( err => res.sendStatus(400) );
    } else res.sendStatus(400);
  })

  .patch('/', (req, res) => {
    // TODO: patch the game/s selected by query with fields
    const [query, fields] = req.body;
    if (query && fields) {
      patchGames(query, fields)
        .then( result => res.json(result) )
        .catch( err => res.sendStatus(400) );
    } else res.sendStatus(400);
  })

  .patch("/:gameCode", (req, res) => {
    // TODO: patch the game with <gameCode> with fields
    if (req.params.gameCode && req.body) {
      patchGame(req.params.gameCode, req.body)
        .then( result => res.json(result) )
        .catch( err => res.sendStatus(400) );
    } else res.sendStatus(400);
  })

  .put('/', (req, res) => {
    // TODO: replace game selected by query with the new game
    const [query, newGame] = req.body;
    if (query && newGame) {
      // TODO: validate <query> & <newGame>
      putGame(query, newGame)
        .then( result => res.json(result) )
        .catch( err => res.sendStatus(400) );
    } else res.sendStatus(400);
  })

  .put("/:gameCode", (req, res) => {
    // TODO: replace game with <gamecode> document with the new game
    const [gameCode, newGame] = [req.params.gameCode, req.body];
    if (gameCode && newGame) {
      putGame({ code: gameCode }, newGame)
        .then( result => res.json(result) )
        .catch( err => res.sendStatus(400) );
    } else res.sendStatus(400);
  })

  .delete("/:gameCode", (req, res) => {
    // TODO: delete game with gamecode
    const gameCode = req.params.gameCode;
    if (gameCode) {
      deleteGame(gameCode)
        .then( result => res.json(result) )
        .catch( err => res.sendStatus(400) );
    } else res.sendStatus(400);
  });

module.exports = router;
