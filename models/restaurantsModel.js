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
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'Chef',
  },
});
module.exports = mongoose.model('Restaurant', restaurantsSchema);
