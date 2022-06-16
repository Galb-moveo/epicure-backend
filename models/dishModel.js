const mongoose = require('mongoose');

const dishSchema = new mongoose.Schema({
  name: {
    type: String,
    default: 'test',
    minlength: 2,
    maxlength: 30,
    require: true,
  },
  price: {
    type: Number,
    // unique: true,
    require: true,
  },
  Ingredients: {
    type: String,
    // require: true,
  },
  tags: {
    type: String,
    require: true,
  },
  restaurant: {
    type: mongoose.Types.ObjectId,
  },
});
module.exports = mongoose.model('dish', dishSchema);
