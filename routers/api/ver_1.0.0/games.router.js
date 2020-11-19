const express = require("express");
const router  = express.Router();

// ########################################################################## //
// ####  TODO: Connect to mongoose and check for credentials to perform  #### //
// ####        certain operations like "DELETE"                          #### //
// ########################################################################## //

router.use(express.json()) //
.get('/', (req, res) => {
    // TODO: get all games
    if(req.query && !req.params) {
      // TODO: handle query params
    } else if (!req.query && req.params) {
      // TODO: handle req body params
    }
    // NOTE: No query params and body allowed
    res.json({ method: "GET", games: []});
  })
  .get("/:gameCode", (req, res) => {
    // TODO: get game corresponding to code
    const gameCode = req.params.gameCode;
    res.json({ method: "GET", gameCode: gameCode });
  })
  .post("/", (req, res) => {
    // TODO: post game received as json
    const game = req.body;
    res.json({ method: "POST", game: game });
  })
  .patch('/', (req, res) => {
    // TODO: patch the game/s selected by query with fields
    const [query, fields] = req.body;
    res.json({ method: "PATCH", query: query, fields: fields });
  })
  .patch("/:gameCode", (req, res) => {
    // TODO: patch the game with <gameCode> with fields
    const fields = req.body;
    res.json({ method: "PATCH", fields: fields});
  })
  .put('/', (req, res) => {
    // TODO: replace game selected by query with the new game
    const [query, newGame] = req.body;
    res.json({ method: "PUT", query: query, game: newGame })
  })
  .put("/:gameCode", (req, res) => {
    // TODO: replace game with <gamecode> document with the new game
    const [gameCode, newGame] = [req.params.gameCode, req.body];
    res.json({ method: "PUT", gameCode: gameCode, game: newGame });
  })
  .delete("/:gameCode", (req, res) => {
    // TODO: delete game with gamecode
    const gameCode = req.params.gameCode;
    res.json({ method: "DELETE", gameCode: gameCode });
  });

module.exports = router;
