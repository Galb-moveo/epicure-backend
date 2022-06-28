const userHandler = require('../handlers/userHandler');
const User = require('../models/userModal');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

const { NODE_ENV, JWT_SECRET } = process.env;

exports.getAllUsers = async (req, res, next) => {
  try {
    const getAllUsers = await userHandler.getAllUsers();
    res.send(getAllUsers);
  } catch (err) {
    next();
  }
};

exports.deleteUserById = async (req, res, next) => {
  try {
    await userHandler.deleteUserById(req.params.userId);
    res.send('User ' + req.params.userId + ' deleted');
  } catch (err) {
    next();
  }
};

exports.updateUser = async (req, res, next) => {
  try {
    const updateUser = await userHandler.updateUser(
      req.params.userId,
      req.body,
    );
    res.send(updateUser);
  } catch (err) {
    next();
  }
};

module.exports.createUser = (req, res, next) => {
  const { email, password, name } = req.body;
  bcrypt
    .hash(password, 10)
    .then((hash) => User.create({ email, name, password: hash }))
    .then((user) =>
      res.send({
        email: user.email,
        name: user.name,
        _id: user._id,
      }),
    )
    .catch((err) => {
      if (err.name === 'ValidationError') {
        throw new Error(err);
      } else {
        throw new Error(err);
      }
    })
    .catch(next);
};

module.exports.login = (req, res, next) => {
  const { email, password } = req.body;
  return User.findUserByCredentials(email, password)
    .then((user) => {
      if (user) {
        const token = jwt.sign(
          { _id: user._id },
          NODE_ENV === 'production' ? JWT_SECRET : 'dev-secret',
          { expiresIn: '7d' },
        );
        res.send({ token });
      }
    })
    .catch((err) => {
      if (err) {
        throw new Error('authorization failed');
      }
    })
    .catch(next);
};

// exports.createUser = async (req, res, next) => {
//     const { email, password, name } = req.body;
//     try {
//       const hashedPassword = await bcrypt.hash(password, 10);
//       const addUser = await userHandler.createUser({
//         email,
//         hashedPassword,
//         name,
//       });
//       res.send(addUser);
//     } catch (err) {
//       console.log(err);
//       next();
//     }
//   };

// exports.login = async (req, res, next) => {
//   const { email, password } = req.body;
//   try {
//     const login = await userHandler.login(email, password);
//     const token = jwt.sign({ _id: login._id }, NODE_ENV === 'production' ? JWT_SECRET : 'dev-secret',{ expiresIn: '7d' },);
//     if(login){
//         res.send({token});
//     }
//   } catch(err) {
//     console.log(err);
//   }
//   next();
// };
