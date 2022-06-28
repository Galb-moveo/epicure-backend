const dishHandler = require('../handlers/dishHandler');

exports.getAllDishes = async (req, res, next) => {
  try {
    const fetchAllDishes = await dishHandler.getAllDishes();
    let newArray = [];
    fetchAllDishes.map((item) => {
      if (item.isActive) {
        newArray.push(item);
      }
    });
    res.send(newArray);
  } catch (err) {
    next();
  }
};

exports.addDish = async (req, res, next) => {
  try {
    const addDish = await dishHandler.addDish(req.body);
    res.send(addDish);
  } catch (err) {
    next();
  }
};

exports.deleteDishById = async (req, res, next) => {
  try {
    await dishHandler.deleteDishById(req.params.dishId);
    res.send('Dish ' + req.params.dishId + ' deleted');
  } catch (err) {
    next();
  }
};

exports.updateDish = async (req, res, next) => {
  try {
    const updateDish = await dishHandler.updateDish(
      req.params.dishId,
      req.body,
    );
    res.send(updateDish);
  } catch (err) {
    next();
  }
};
