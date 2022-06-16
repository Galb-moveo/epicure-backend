const Chef = require('../models/chefModel');


  module.exports.getAllChefs = (req, res) => {
    try {
    Chef.find()
      .then((chefs) => res.status(200).send({ data: chefs }));
    } catch {
      ((err) => console.log(err));
    }
  };

  module.exports.addChef = (req, res) => {
    const { name, description, restaurants } = req.body;
    try{
    Chef.create({
      name,
      description,
      restaurants,
    })
      .then((chef) => {
        res.status(200).send(chef);
      });
    } catch {
      ((err) => {
        if (err) {
          throw new Error('some error occurred');
        }
      });
    }
  };

  module.exports.deleteChefById = (req, res) => {
    try {
    Chef.findById(req.params.chefId)
      .then((chef) => {
        if (!chef) {
          throw new Error('chef not found');
        }
        if (chef) {
          Chef.deleteOne(chef).then(() => res.status(200).send({ data: chef }));
        } else {
          throw new Error('cannot delete this chef');
        }
      });
    } catch{
      (err) => {
        if(err){
          throw new Error('Error occurred');
        }
      };}
  };

  module.exports.updateChef = (req, res) => {
    const { name, description, restaurants } = req.body;
    try{
    Chef.findByIdAndUpdate(req.params.chefId, {
      name,
      description,
      restaurants,
    })
      .then(() => {
        res.status(200).send('Chef updated');
      });
    } catch{
    ((err) => {
        if (err) {
          throw new Error('some error occurred');
        }
      });
    }
  };