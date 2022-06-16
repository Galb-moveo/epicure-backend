const Chef = require('../models/chefModel');

module.exports.getAllChefs = async () => {
  return await Chef.find();
};

module.exports.addChef = async (body) => {
  return await Chef.create(body);
};


module.exports.deleteChefById = async () => {
    return await Chef.deleteOne();
};

module.exports.updateChef = async (chefId, body) => {
  return await Chef.findByIdAndUpdate(chefId, body);
};

