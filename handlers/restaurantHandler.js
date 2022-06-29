const Restaurant = require('../models/restaurantsModel');
const Dish = require('../models/dishModel');

module.exports.getAllRestaurants = async () => {
  return Restaurant.find()
    .populate({ path: 'Chef', select: { _id: 0, __v: 0 } })
    .populate({ path: 'SignatureDish', select: { _id: 0, __v: 0 } });
};

module.exports.getRestaurantsByChef = async (chefId) => {
  return Restaurant.find({Chef: chefId});
};

module.exports.addRestaurant = async (body) => {
  return Restaurant.create(body);
};

module.exports.deleteRestaurantById = async (id) => {
  Dish.findByIdAndDelete(id);
  return Restaurant.deleteOne(id);
};

module.exports.updateRestaurant = async (restaurantId, body) => {
  return Restaurant.findByIdAndUpdate(restaurantId, body);
};

module.exports.findRestaurantByKey = async (keyword) => {
  return Restaurant.find(
    {
    $or:[ { name: { $regex: keyword }}],
  });
};
