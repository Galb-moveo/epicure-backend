const chefHandler = require('../handlers/chefHandler');
const dishHandler = require('../handlers/dishHandler');
const restaurantHandler = require('../handlers/restaurantHandler');

exports.searchField = async (req, res, next) => {
  try {
    const chefData = await chefHandler.findChefByKey(req.params.keyword);
    const dishData = await dishHandler.findDishByKey(req.params.keyword);
    const restaurantData = await restaurantHandler.findRestaurantByKey(
      req.params.keyword
    );
    res.send([
      { Chefs: chefData },
      { Dishes: dishData },
      { Restaurants: restaurantData },
    ]);
  } catch (err) {
    console.log(err);
    next();
  }
};
// req.query,
