const { check, validationResult } = require('express-validator');

const validateGame = [
  check('name')
    .notEmpty()
    .withMessage('Name is required'),
  check('title')
    .notEmpty()
    .withMessage('Title is required'),
  check('genre')
    .notEmpty()
    .withMessage('Genre is required'),
  check('releaseDate')
    .notEmpty()
    .withMessage('Release date is required')
    .isISO8601()
    .withMessage('Release date must be a valid date'),
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next();
  }
];

const validateGameUpdate = [
  check('name')
    .optional()
    .notEmpty()
    .withMessage('Name is required'),
  check('title')
    .optional()
    .notEmpty()
    .withMessage('Title is required'),
  check('genre')
    .optional()
    .notEmpty()
    .withMessage('Genre is required'),
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next();
  }
];

module.exports = {
  validateGame,
  validateGameUpdate
};
