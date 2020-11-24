const mongoose = require("mongoose");

const gameSchema = new mongoose.Schema({
    code:         String,
    title:        String,
    description:  String,
    language:     { type: Map, of: String },
    price:        { type: Map, of: Number },
    //price:        Number,
    rating:       Number
  }, { versionKey: false }
);

const Game = mongoose.model("Game", gameSchema);
module.exports = Game;
