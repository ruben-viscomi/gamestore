const Game = require("../models/game.model.js");

// CREATE
exports.createGame = (game) => {
  // TODO: Validate <game>
  return Game.create(game);
};

// READ
exports.readGames = params => {
  return Game.find(params).exec();
};

exports.readGame = code => {
  return Game.findOne({ code: code }).exec();
};

// UPDATE
exports.patchGames = (query, fields) => {
  return Game.updateMany(query, fields).exec();
};

exports.patchGame = (code, fields) => {
  return Game.updateOne({ code: code }, fields).exec();
};

exports.putGame = (query, newGame) => {
  return Game.replaceOne(query, newGame).exec();
};

// DELETE
exports.deleteGame = code => {
  return Game.deleteOne({ code: code }).exec();
};
