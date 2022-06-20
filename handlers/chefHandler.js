const Chef = require('../models/chefModel');


module.exports.getAllChefs = async () => {
  return Chef.find();
};

module.exports.addChef = async (body) => {
  return Chef.create(body);
};

module.exports.deleteChefById = async () => {
  return Chef.deleteOne();
};

module.exports.updateChef = async (chefId, body) => {
  return Chef.findByIdAndUpdate(chefId, body);
};

module.exports.findChefByKey = async (keyword) => {
  console.log(keyword, 'chef');
  return Chef.find(
    {
    $or:[ { name: { $regex: keyword }}],
  });
};
