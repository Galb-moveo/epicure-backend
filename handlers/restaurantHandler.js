const Restaurant = require('../models/restaurantsModel');

module.exports.getAllRestaurants = async () => {
  return await Restaurant.find();
};

module.exports.addRestaurant = async (body) => {
  return await Restaurant.create(body);
};

module.exports.deleteRestaurantById = async () => {
  return await Restaurant.deleteOne();
};

module.exports.updateRestaurant = async (restaurantId, body) => {
  return await Restaurant.findByIdAndUpdate(restaurantId, body);
};
