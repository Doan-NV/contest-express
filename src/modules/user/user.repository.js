const { default: mongoose } = require('mongoose');
const User = require('../../models/user.model');

const createUser = async (userData) => {
  console.log('🚀 ~ createUser ~ userData:', userData);
  const user = await User.create(userData);
  return user;
};

const getUserById = async (id) => {
  const user = await User.findOne({_id: new mongoose.Types.ObjectId(id), isDeleted: false}).exec();
  return user;
};

const getUserByUsername = async (username) => {
  const user = await User.findOne({ username, isDeleted: false }).select('username').exec();
  return user;
}

const findOneByQuery = async (query) => {
  const user = await User.findOne({...query, isDeleted: false}).exec();
  return user;
}

module.exports = {
  createUser,
  getUserById,
  getUserByUsername,
  findOneByQuery
};
