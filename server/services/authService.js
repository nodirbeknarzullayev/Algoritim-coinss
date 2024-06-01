const User = require('../models/User');
const jwt = require('../utils/jwt');

exports.getAllUsers = async () => {
  const users = await User.findAll();
  return users;
};

exports.register = async (username, email, password) => {
  const user = await User.create({ username, email, password });
  const token = jwt.generateToken(user.id);
  return {token, user};
};
