const userService = require('./user.service');

const createUser = (req, res, next) => {
  try {
    const user = userService.createUser(req.body);
    res.send(user);
  } catch (err) {
    next(err);
  }
};

const getUserById = (req, res, next) => {
  try {
    const user = userService.getUserById(req.params.id);
    res.send(user);
  } catch (err) {
    next(err);
  }
};

module.exports = {
  createUser,
  getUserById
};
