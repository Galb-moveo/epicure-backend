const chefOfWeekHandler = require('../handlers/chefOfWeekHandler');

exports.getChefOfWeek = async (req, res, next) => {
    try {
      const fetchChefOfWeek = await chefOfWeekHandler.getChefOfWeek();
      res.send(fetchChefOfWeek);
    } catch (err) {
      next();
    }
  };

  exports.addChefOfWeek = async (req, res, next) => {  
    try {
      const addChefOfWeek = await chefOfWeekHandler.addChefOfWeek(req.body);
      res.send(addChefOfWeek);
    } catch (err) {
      next();
    }
  };

  exports.updateChefOfWeek = async (req, res, next) => {  
    try {
      const updateChefOfWeek = await chefOfWeekHandler.updateChefOfWeek(req.params.chefId, req.body);
      res.send(updateChefOfWeek);
    } catch (err) {
      next();
    }
  };