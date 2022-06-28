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
    require: true,
  },
  image: {
    type: String,
    default: 'https://regvervr.jpg',
  },
  isActive: {
    type: Boolean,
    default:true
  },
});

module.exports = mongoose.model('Chef', chefSchema);
