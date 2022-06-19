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

module.exports.findChefByKey = async (keyword) => {
  return await Chef.find({
    $or: [{ name: { $regex: keyword } }],
  });
};
