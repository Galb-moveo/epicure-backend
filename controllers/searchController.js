const chefHandler = require('../handlers/chefHandler');
const dishHandler = require('../handlers/dishHandler');
const restaurantHandler = require('../handlers/restaurantHandler');

exports.searchField = async (req, res, next) => {
  try {
    const chefData = await chefHandler.findChefByKey(req.query);
    const dishData = await dishHandler.findDishByKey(req.query);
    const restaurantData = await restaurantHandler.findRestaurantByKey(
      // req.params.keyword,
      req.query,
    );
    res.send([
      { Chefs: chefData },
      { Dishes: dishData },
      { Restaurants: restaurantData },
    ]);
  } catch (err) {
    next();
  }
};
