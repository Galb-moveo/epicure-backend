const express = require('express');
const routerRoutes = require('./routes/index');
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

app.use('/', routerRoutes);

app.listen(3000, () => {
  console.log(`App listening at port 3000`);
});
