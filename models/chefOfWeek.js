const mongoose = require('mongoose');

const chefOfWeekSchema = new mongoose.Schema({
    Chef: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Chef',
    require: true,
  },
});

module.exports = mongoose.model('ChefOfWeek', chefOfWeekSchema);
