const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const { options, secretKey } = require('../../configs/jwt.config');
const { userService } = require('../user');

const register = async (userData) => {
  const { username } = userData;
  const existingUser = await userService.getUserByUsername(username);
  
  if (existingUser) {
    throw new Error('Username already exists');
  }

  const user = await userService.createUser(userData);
  const token = jwt.sign({ id: user._id }, secretKey, options);

  return token;
};

const login = async ({ username, password }) => {
  const user = await userService.findOneByQuery({username});
  console.log('🚀 ~ login ~ user:', user);

  if (!user || !(await bcrypt.compare(password, user.password))) {
    throw new Error('Invalid username or password');
  }

  const token = jwt.sign({ id: user._id }, secretKey, options);

  return token;
};


module.exports = {
  register,
  login,
};
