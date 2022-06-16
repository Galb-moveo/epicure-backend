const Dish = require('../models/dishModel');

module.exports.getAllDishes = async () => {
  return await Dish.find();
};

module.exports.addDish = async (body) => {
  return await Dish.create(body);
};

module.exports.deleteDishById = async () => {
  return await Dish.deleteOne();
};

module.exports.updateDish = async (dishId, body) => {
  return await Dish.findByIdAndUpdate(dishId, body);
};
