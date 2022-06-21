const Dish = require('../models/dishModel');

module.exports.getAllDishes = async () => {
  return Dish.find().populate({
    path: 'Restaurant', select: { _id: 0, __v: 0 },});
};

module.exports.addDish = async (body) => {
  return Dish.create(body);
};

module.exports.deleteDishById = async () => {
  return Dish.deleteOne();
};

module.exports.updateDish = async (dishId, body) => {
  return Dish.findByIdAndUpdate(dishId, body);
};

module.exports.findDishByKey = async (keyword) => {
  return Dish.find(
    {
    $or:[ { name: { $regex: keyword }}],
  }
  );
};
