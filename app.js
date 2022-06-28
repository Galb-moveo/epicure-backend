const express = require('express');
const apiRoutes = require('./routes/index');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const { DB_ADDRESS } = require('./utils/constants');
const { createUser, login } = require('./controllers/userController');
// const { validateUser } = require('./middleware/validations');
// const NotFoundError = require('./middleware/errors/NotFoundError');

const authMiddleware = require('./middleware/auth');
const app = express();
const cors = require('cors');
require('dotenv').config();

const { PORT = 3000 } = process.env;

mongoose.connect(DB_ADDRESS, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.post('/signin', login);
app.post('/signup', createUser);

app.use('/api',authMiddleware, apiRoutes);

app.use((req, res, next) => {
  res.status(404).send({ message: 'Requested resource not found' });
  next();
});

// app.get('*', () => {
//   throw new NotFoundError('Requested resource not found');
// });

// app.use((err, req, res) => {
//   const { statusCode = 500, message } = err;

//   res.status(statusCode).send({
//     message: statusCode === 500 ? 'Server error' : message,
//   });
// });

app.listen(PORT, () => {
  console.log(`App listening at port ${PORT}`);
});
