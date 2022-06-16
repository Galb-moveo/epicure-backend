const dishHandler = require('../handlers/dishHandler');

exports.getAllDishes = async (req, res) => {
  await dishHandler.getAllDishes(req, res);
};

exports.addDish = async (req, res) => {
  await dishHandler.addDish(req, res);
};

exports.deleteDishById = async (req, res) => {
  await dishHandler.deleteDishById(req, res);
};

exports.updateDish = async (req, res) => {
  await dishHandler.updateDish(req, res);
};








