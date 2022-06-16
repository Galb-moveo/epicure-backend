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
    require: true,
  },
  // dishes: {
  //   type: Object,
  // },
});
module.exports = mongoose.model('restaurant', restaurantsSchema);
