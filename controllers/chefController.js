const chefHandler = require('../handlers/chefHandler');

exports.getAllChefs = async (req, res, next) => {
  try {
    const fetchAllChefs = await chefHandler.getAllChefs();
    res.send(fetchAllChefs);
  } catch (err) {
    next();
  }
};

exports.addChef = async (req, res, next) => {  
  try {
    const addChef = await chefHandler.addChef(req.body);
    res.send(addChef);
  } catch (err) {
    next();
  }
};

exports.deleteChefById = async (req, res, next) => {  
  try {
    await chefHandler.deleteChefById(req.params.chefId);
    res.send('Chef ' + req.params.chefId + ' deleted');
  } catch (err) {
    next();
  }
};

exports.updateChef = async (req, res, next) => {  
  try {
    const updateChef = await chefHandler.updateChef(req.params.chefId, req.body);
    res.send(updateChef);
  } catch (err) {
    next();
  }
};

