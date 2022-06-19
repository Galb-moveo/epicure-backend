const express = require('express');
const apiRoutes = require('./routes/index');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const { DB_ADDRESS } = require('./utils/constants');
const app = express();

mongoose.connect(DB_ADDRESS, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/api', apiRoutes);

app.use((req, res, next) => {
  res.status(404).send({ message: 'Requested resource not found' });
  next();
});

app.listen(3000, () => {
  console.log(`App listening at port 3000`);
});
