const restaurantHandler = require('../handlers/restaurantHandler');

exports.getAllRestaurants = async (req, res, next) => {
  try {
    const fetchAllRestaurant = await restaurantHandler.getAllRestaurants();
    let newArray = [];
    fetchAllRestaurant.map((item) => {
      if (item.isActive) {
        newArray.push(item);
      }
    });
    res.send(newArray);
  } catch (err) {
    next();
  }
};

exports.getRestaurantsByChef = async (req, res, next) => {
  try {
    const getRestaurantsByChef = await restaurantHandler.getRestaurantsByChef(req.params.chefId);
    res.send(getRestaurantsByChef);
  } catch (err) {
    next();
  }
};

exports.addRestaurant = async (req, res, next) => {
  try {
    const addRestaurant = await restaurantHandler.addRestaurant(req.body);
    res.send(addRestaurant);
  } catch (err) {
    next();
  }
};

exports.deleteRestaurantById = async (req, res, next) => {
  try {
    await restaurantHandler.deleteRestaurantById(req.params.restaurantId);
    // await restaurantHandler.deleteRestaurantById(req.params.restaurantId);
    res.send('Restaurant ' + req.params.restaurantId + ' deleted');
  } catch (err) {
    next();
  }
};

exports.updateRestaurant = async (req, res, next) => {
  try {
    const updateRestaurant = await restaurantHandler.updateRestaurant(
      req.params.restaurantId,
      req.body,
    );
    res.send(updateRestaurant);
  } catch (err) {
    next();
  }
};


