const chefHandler = require('../handlers/chefHandler');

exports.getAllChefs = async (req, res) => {
  try {
    const fetchAllChefs = await chefHandler.getAllChefs();
    res.send(fetchAllChefs);
  } catch (err) {
    res.send(err);
  }
};

exports.addChef = async (req, res) => {  
  try {
    const addChef = await chefHandler.addChef(req.body);
    res.send(addChef);
  } catch (err) {
    res.send(err);
  }
};

exports.deleteChefById = async (req, res) => {  
  try {
    await chefHandler.deleteChefById(req.params.chefId);
    res.send('Chef ' + req.params.chefId + ' deleted');
  } catch (err) {
    res.send(err);
  }
};

exports.updateChef = async (req, res) => {  
  try {
    const updateChef = await chefHandler.updateChef(req.params.chefId, req.body);
    res.send(updateChef);
  } catch (err) {
    res.send(err);
  }
};

