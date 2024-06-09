const mongoose = require('mongoose');

const gameSchema = new mongoose.Schema({
  name: { type: String, required: true, unique: true },
  title: { type: String, required: true },
  genre: { type: String, required: true },
  releaseDate: { type: Date, required: true },
  isDeleted: { type: Boolean, default: false }
}, {
  timestamps: true,
  skipVersioning: true
});

const Game = mongoose.model('Game', gameSchema);

module.exports = Game;
