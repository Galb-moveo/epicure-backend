const chefHandler = require('../handlers/chefHandler');

exports.getAllChefs = async (req, res) => {
  await chefHandler.getAllChefs(req, res);
};

exports.addChef = async (req, res) => {
  await chefHandler.addChef(req, res);
};


exports.deleteChefById = async (req, res) => {
  await chefHandler.deleteChefById(req, res);
};

exports.updateChef = async (req, res) => {
  await chefHandler.updateChef(req, res);
};




