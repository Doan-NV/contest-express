const userRepository = require('./user.repository');

const createUser = async (data) => {
  const newUser = await userRepository.createUser(data);
  return newUser;
};

const getUserById = async (id) => {
  const user = await userRepository.getUserById(id);
  return user;
};

const getUserByUsername = async (username) => {
  const user = await userRepository.getUserByUsername(username);
  return user;
}

const findOneByQuery = async (query) => {
  const user = await userRepository.findOneByQuery(query);
  return user;
}


module.exports = {
  createUser,
  getUserById,
  getUserByUsername,
  findOneByQuery,
};
