const gameService = require('./game.service');

const createGame = async (req, res, next) => {
  try {
    const game = await gameService.createGame(req.body);
    res.status(201).json(game);
  } catch (error) {
    next(error);
  }
};

const getGames = async (req, res, next) => {
  try {
    const games = await gameService.getGames();
    res.json(games);
  } catch (error) {
    next(error);
  }
};

const getGameById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const game = await gameService.getGameById(id);
    res.json(game);
  } catch (error) {
    next(error);
  }
};

const updateGame = async (req, res, next) => {
  try {
    const { id } = req.params;
    const game = await gameService.updateGame(id, req.body);
    res.json(game);
  } catch (error) {
    next(error);
  }
};

const deleteGame = async (req, res, next) => {
  try {
    const { id } = req.params;
    const data = await gameService.deleteGame(id);
    res.status(204).json(data);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  createGame,
  getGames,
  getGameById,
  updateGame,
  deleteGame
};
