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
  Restaurant: {
    type: mongoose.Schema.Types.ObjectId,
    required:true,
    ref: 'Restaurant'
  },
});
module.exports = mongoose.model('Dish', dishSchema);
