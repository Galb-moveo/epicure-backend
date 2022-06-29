const userHandler = require('../handlers/userHandler');
const User = require('../models/userModal');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const NotFoundError = require('../middleware/errors/NotFoundError');
const BadRequestError = require('../middleware/errors/BadRequestError');
const ConflictError = require('../middleware/errors/ConflictError');
const AuthenticationError = require('../middleware/errors/AuthenticationError');

const { NODE_ENV, JWT_SECRET } = process.env;

exports.getAllUsers = async (req, res, next) => {
  try {
    const getAllUsers = await userHandler.getAllUsers();
    res.send(getAllUsers);
  } catch (err) {
    next();
  }
};

// module.exports.getCurrentUser = ((req, res, next) => {
//   User.findById(req.user._id)
//     .then((user) => {
//       if (user) {
//         res.send({ data: user });
//       } else {
//         throw new NotFoundError('the user was not found');
//       }
//     })
//     .catch(next);
// });

exports.getCurrentUser = async (req, res, next) => {
  console.log(req.user._id);
  try {
    const getUser = await userHandler.getCurrentUser(req.user._id);
    res.send(getUser);
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
    if(updateUser){
      res.send(updateUser);
    }else{
      throw new NotFoundError('Id not found in the database');
    }
  } catch(err) {
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
        throw new BadRequestError('The email and password are required');
      } else {
        throw new ConflictError('User with this email already exist');
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
        res.send({ token,email,password });
      }
    }).catch((err) => {
      if (err) {
        throw new AuthenticationError('authorization failed');
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
