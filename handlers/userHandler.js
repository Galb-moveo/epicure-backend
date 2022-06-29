const User = require('../models/userModal');

module.exports.getAllUsers = async () => {
    return User.find();
  };

module.exports.getCurrentUser = async (userID) => {
  return User.findById(userID);
  };
  
  module.exports.deleteUserById = async () => {
    return User.deleteOne();
  };
  
  module.exports.updateUser = async (userId, body) => {
    return User.findByIdAndUpdate(userId, body);
  };

    // module.exports.createUser = async ({ email, hashedPassword, name, avatar }) => {
  //     console.log(hashedPassword);
  //   return User.create({ email, hashedPassword, name, avatar });
  // };

  // module.exports.login = async (email, password) => {
  //   console.log(email, password );
  //   return User.findUserByCredentials(email, password);
  // };

  // User.findUserByCredentials()

  