const restaurantHandler = require('../handlers/restaurantHandler');

exports.getAllRestaurants = async (req, res) => {
  try {
    const fetchAllRestaurant = await restaurantHandler.getAllRestaurants();
    res.send(fetchAllRestaurant);
  } catch (err) {
    res.send(err);
  }
};

exports.addRestaurant = async (req, res) => {
  try {
    const addRestaurant = await restaurantHandler.addRestaurant(req.body);
    res.send(addRestaurant);
  } catch (err) {
    res.send(err);
  }
};

exports.deleteRestaurantById = async (req, res) => {
  try {
    await restaurantHandler.deleteRestaurantById(req.params.restaurantId);
    res.send('Restaurant ' + req.params.restaurantId + ' deleted');
  } catch (err) {
    res.send(err);
  }
};

exports.updateRestaurant = async (req, res) => {
  try {
    const updateRestaurant = await restaurantHandler.updateRestaurant(
      req.params.restaurantId,
      req.body,
    );
    res.send(updateRestaurant);
  } catch (err) {
    res.send(err);
  }
};
