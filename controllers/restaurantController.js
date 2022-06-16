const Restaurant = require('../models/restaurantsModel');

module.exports.getAllRestaurants = (req, res) => {
  Restaurant.find()
    .then((restaurant) => res.status(200).send({ restaurants: restaurant }))
    .catch((err) => console.log(err));
};

module.exports.addRestaurant = (req, res) => {
  const { name, image, dishes } = req.body;
  Restaurant.create({
    name,
    image,
    dishes,
  })
    .then((restaurant) => {
      res.status(200).send(restaurant);
    })
    .catch((err) => {
      if (err) {
        console.log(err);
      }
    });
};

module.exports.deleteRestaurantById = (req, res) => {
  console.log(req.params.restaurantId);
  Restaurant.findById(req.params.restaurantId).then((restaurant) => {
    if (!restaurant) {
      throw new Error('Dish not found');
    }
    if (restaurant) {
      Restaurant.deleteOne(restaurant).then(() =>
        res.status(200).send({ data: restaurant }),
      );
    } else {
      throw new Error('cannot delete this Dish');
    }
  });
};

module.exports.updateRestaurant = (req, res) => {
  const { name, image, dishes } = req.body;
  Restaurant.findByIdAndUpdate(req.params.restaurantId, { name, image, dishes })
    .then((data) => {
      res.status(200).send(data);
    })
    .catch((err) => {
      console.log(err);
    });
};
