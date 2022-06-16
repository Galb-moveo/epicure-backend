const mongoose = require('mongoose');

const restaurantsSchema = new mongoose.Schema({
  name: {
    type: String,
    default: 'Yossi Shitrit',
    minlength: 2,
    maxlength: 30,
  },
  image: {
    type: String,
    // unique: true,
    require: true,
  },
  dishes: {
    type: Object,
  },
  // owner: {
  //   type: mongoose.Schema.Types.ObjectId,
  //   ref: 'chef',
  //   required: true,
  // },
  // owner: {
  //   type: mongoose.Schema.Types.ObjectId,
  //   ref: 'restaurant',
  //   required: true,
  // },
});
module.exports = mongoose.model('restaurant', restaurantsSchema);
