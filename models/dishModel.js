const mongoose = require('mongoose');

const dishSchema = new mongoose.Schema({
  name: {
    type: String,
    default: 'test',
    minlength: 2,
    maxlength: 30,
    require: true,
  },
  image: {
    type: String,
  },
  description: {
    type: String,
  },
  price: {
    type: Number,
    require: true,
  },
  tags: {
    type: String,
    require: true,
  },
  restaurants: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'restaurants',
  },
});
module.exports = mongoose.model('dish', dishSchema);
