const dishHandler = require('../handlers/dishHandler');

exports.getAllDishes = async (req, res) => {
  try {
    const fetchAllDishes = await dishHandler.getAllDishes();
    res.send(fetchAllDishes);
  } catch (err) {
    res.send(err);
  }
};

exports.addDish = async (req, res) => {
  try {
    const addDish = await dishHandler.addDish(req.body);
    res.send(addDish);
  } catch (err) {
    res.send(err);
  }
};

exports.deleteDishById = async (req, res) => {
  try {
    await dishHandler.deleteDishById(req.params.dishId);
    res.send('Dish ' + req.params.dishId + ' deleted');
  } catch (err) {
    res.send(err);
  }
};

exports.updateDish = async (req, res) => {
  try {
    const updateDish = await dishHandler.updateDish(
      req.params.dishId,
      req.body,
    );
    res.send(updateDish);
  } catch (err) {
    res.send(err);
  }
};
