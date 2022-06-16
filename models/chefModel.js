const mongoose = require('mongoose');

const chefSchema = new mongoose.Schema({
  name: {
    type: String,
    default: 'Yossi Shitrit',
    minlength: 2,
    maxlength: 30,
  },
  description: {
    type: String,
    // unique: true,
    require: true,
  },
  Restaurants: {
    type: Object,
    // require: true,
  },
});
module.exports = mongoose.model('chef', chefSchema);
