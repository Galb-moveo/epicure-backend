const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const validator = require('validator');

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    unique: true,
    require: true,
    validate: {
      validator: (email) => validator.isEmail(email),
      message: 'The Email you provided is not valid',
    },
  },
  password: {
    type: String,
    require: true,
    minlength: 8,
    select: false,
  },
  name: {
    type: String,
    default: 'New gust',
    minlength: 2,
    maxlength: 30,
  },
  avatar: {
    type: String,
    default: 'https://i.pinimg.com/originals/be/2d/30/be2d307e7f0004d3b014ee1120756a93.png',
  },
});
userSchema.statics.findUserByCredentials = function (email, password) {
  return this.findOne({ email }).select('+password')
    .then((user) => {
      if (!user) {
        return Promise.reject(new Error('Incorrect password or email'));
      }

      return bcrypt.compare(password, user.password)
        .then((matched) => {
          if (!matched) {
            return Promise.reject(new Error('Incorrect password or email'));
          }

          return user;
        });
    });
};

module.exports = mongoose.model('user', userSchema);