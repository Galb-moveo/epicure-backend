const chefOfTheWeek = require('../models/chefOfWeek');

module.exports.getChefOfWeek = async () => {
    return chefOfTheWeek.find().
    populate({path:'Chef', select:{ _id: 0, __v: 0 }});
  };
  
  module.exports.addChefOfWeek = async (body) => {
    return chefOfTheWeek.create(body);
  };
  
  module.exports.updateChefOfWeek = async (chefId, body) => {
    return chefOfTheWeek.findByIdAndUpdate(chefId, body);
  };