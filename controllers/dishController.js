const Dish = require('../models/dishModel');

module.exports.getAllDishes = (req, res) => {
  Dish.find()
    .then((dish) => res.status(200).send({ dishes: dish }))
    .catch((err) => console.log(err));
};

module.exports.addDish = (req, res) => {
  const { name, price, ingredients, tags, restaurant } = req.body;
  Dish.create({
    name,
    price,
    ingredients,
    tags,
    restaurant,
  })
    .then((dish) => {
      res.status(200).send(dish);
    })
    .catch((err) => {
      if (err) {
        console.log(err);
      }
    });
};

module.exports.deleteDishById = (req, res) => {
  console.log(req.params.dishId);
  Dish.findById(req.params.dishId).then((dish) => {
    if (!dish) {
      throw new Error('Dish not found');
    }
    if (dish) {
      Dish.deleteOne(dish).then(() => res.status(200).send({ data: dish }));
    } else {
      throw new Error('cannot delete this Dish');
    }
  });
};

module.exports.updateDish = (req, res) => {
  const { name, price, ingredients, tags, restaurant } = req.body;
  Dish.findByIdAndUpdate(req.params.dishId, {
    name,
    price,
    ingredients,
    tags,
    restaurant,
  })
    .then(() => {
      res.status(200).send('Dish updated');
    })
    .catch((err) => {
      console.log(err);
    });
};
