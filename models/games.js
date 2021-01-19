const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const gameSchema = new Schema({
    title: { type: String, required: true },
    rating: { type: String, required: true },
    date: String,
  });

  const Game = mongoose.model("Game", gameSchema)

  module.exports = Game;