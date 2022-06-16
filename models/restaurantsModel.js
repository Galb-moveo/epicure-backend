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
  Chef: {
    type: mongoose.Types.ObjectId,
    ref: 'chefs',
  },
});
module.exports = mongoose.model('restaurant', restaurantsSchema);
