const express = require('express');
const { gameController } = require('../modules/game/index');
const { authenticate } = require('../middlewares');
const { gameValidator } = require('../validators');
const router = express.Router();
router.use(authenticate)
router.post('/games', gameValidator.validateGame, gameController.createGame);
router.get('/games', gameController.getGames);
router.get('/games/:id', gameController.getGameById);
router.put('/games/:id', gameValidator.validateGameUpdate, gameController.updateGame);
router.delete('/games/:id', gameController.deleteGame);

module.exports = router;
