const Game = require('../../models/game.model');

const createGame = async (gameData) => {
  const game = await Game.create(gameData);
  return game;
};

const getGames = async () => {
  const games = await Game.find({isDeleted: false}).exec();
  return games;
};

const getGameById = async (id) => {
  const game = await Game.findById(id).exec();
  return game;
};

const updateGame = async (id, gameData) => {
  const game = await Game.findByIdAndUpdate(id, gameData, { new: true }).exec();
  return game;
}

const deleteGame = async (id) => {
  const game = await Game.findByIdAndUpdate(id, {isDeleted: true}).exec();
  return game;
}

module.exports = {
  createGame,
  getGames,
  getGameById,
  updateGame,
  deleteGame,
};
