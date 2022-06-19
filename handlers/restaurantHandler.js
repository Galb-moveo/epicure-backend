const Restaurant = require('../models/restaurantsModel');

module.exports.getAllRestaurants = async () => {
  return (
    Restaurant.find()
      // .aggregate([
      //   {
      //     $match: {
      //       Chef: '62af00462f498e8a1f84df19',
      //     },
      //   },
      // ]);
      .populate({ path: 'Chef', select: { _id: 0, __v: 0 } })
  );
};

module.exports.addRestaurant = async (body) => {
  return Restaurant.create(body);
};

module.exports.deleteRestaurantById = async () => {
  return Restaurant.deleteOne();
};

module.exports.updateRestaurant = async (restaurantId, body) => {
  return Restaurant.findByIdAndUpdate(restaurantId, body);
};

module.exports.findRestaurantByKey = async (query) => {
  return Restaurant.find({
    $or: [{ name: { $regex: query.q } }, { image: { $regex: query.image } }],
  });
};
