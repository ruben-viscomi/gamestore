"use strict";

const mongoose = require("mongoose");

const gameSchema = new mongoose.Schema({
    code:         String,
    title:        String,
    description:  String,
    language:     { audio: [String], subtitles: [String] },
    price:        { type: Map, of: Number },
    rating:       Number
  }, { versionKey: false }
);

const Game = mongoose.model("Game", gameSchema);
module.exports = Game;
