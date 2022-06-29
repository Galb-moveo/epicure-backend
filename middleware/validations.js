const { celebrate, Joi } = require('celebrate');

const validateUser = celebrate({
  body: Joi.object().keys({
    email: Joi.string().email().required(),
    password: Joi.string().required(),
    name:Joi.string()
  }),
});

module.exports = {
  validateUser,
};
