const mongoose = require("mongoose");

const gameSchema = new mongoose.Schema({
    code:         String,
    title:        String,
    description:  String,
    language:     { type: Map, of: String },
    price:        { type: Map, of: Number },
    rating:       Number;
  }, { versionKey: false }
);

const Game = mongoose.model("game", gameSchema);
module.exports = Game;
