const restaurantHandler = require('../handlers/restaurantHandler');

exports.getAllRestaurants = async (req, res) => {
  await restaurantHandler.getAllChefs(req, res);
};

exports.addRestaurant = async (req, res) => {
  await restaurantHandler.addRestaurant(req, res);
};


exports.deleteRestaurantById = async (req, res) => {
  await restaurantHandler.deleteRestaurantById(req, res);
};

exports.updateRestaurant = async (req, res) => {
  await restaurantHandler.updateRestaurant(req, res);
};
