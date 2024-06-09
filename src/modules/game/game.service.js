const gameRepository = require('./game.repository');
const createGame = async (gameData) => {
  const game = gameRepository.createGame(gameData);
  return game;
};

const getGames = async () => {
  const data = gameRepository.getGames();
  return data;
};

const getGameById = async (id) => {
  const data = await gameRepository.getGameById(id);
  return data;
};

const updateGame = async (id, gameData) => {
  const data = await gameRepository.updateGame(id, gameData);
  return data;
};

const deleteGame = async (id) => {
  const data = await gameRepository.deleteGame(id);
  return data;
};

module.exports = {
  createGame,
  getGames,
  getGameById,
  updateGame,
  deleteGame
};
