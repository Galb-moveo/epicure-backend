const chefHandler = require('../handlers/chefHandler');
const dishHandler = require('../handlers/dishHandler');
const restaurantHandler = require('../handlers/restaurantHandler');

exports.searchField = async (req, res, next) => {
  try {
    let chefData = {};
    let dishData = {};
    let restaurantData = {};
    chefData = await chefHandler.findChefByKey(req.params.keyword);
    dishData = await dishHandler.findDishByKey(req.params.keyword);
    restaurantData = await restaurantHandler.findRestaurantByKey(
      req.params.keyword,
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
// req.query,
