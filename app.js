const express = require('express');
const apiRoutes = require('./routes/index');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const { DB_ADDRESS } = require('./utils/constants');
const { createUser, login } = require('./controllers/userController');

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

app.post('/api/signin', login);
app.post('/api/signup', createUser);

app.use('/api', apiRoutes);

app.use((req, res, next) => {
  res.status(404).send({ message: 'Requested resource not found' });
  next();
});

app.listen(PORT, () => {
  console.log(`App listening at port ${PORT}`);
});
