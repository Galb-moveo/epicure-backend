const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');

const { NODE_ENV, JWT_SECRET } = process.env;

dotenv.config();
const handleAuthError = (res) => {
  res
    .status(401)
    .send({ message: 'Authorization Error' });
};

const extractBearerToken = (header) => header.replace('Bearer ', '');

module.exports = (req, res, next) => {
  const { authorization } = req.headers;

  if (!authorization || !authorization.startsWith('Bearer ')) {
    handleAuthError(res);
  }

  const token = extractBearerToken(authorization);
  let payload;

  try {
    payload = jwt.verify(token, NODE_ENV === 'production' ? JWT_SECRET : 'dev-secret');
    
  } catch (err) {
    handleAuthError(res);
  }
  req.user = payload;

  next();
};