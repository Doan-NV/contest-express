const express = require('express');
const { gameController } = require('../modules/game/index');
const { authenticate } = require('../middlewares');
const { gameValidator } = require('../validators');
const router = express.Router();

router.post('/games', gameValidator.validateGame, authenticate, gameController.createGame);
router.get('/games', authenticate, gameController.getGames);
router.get('/games/:id', authenticate, gameController.getGameById);
router.put('/games/:id', gameValidator.validateGameUpdate, authenticate, gameController.updateGame);
router.delete('/games/:id', authenticate, gameController.deleteGame);

module.exports = router;
