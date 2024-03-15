const jwt = require('jsonwebtoken');

const authMiddleware = (req, res, next) => {
  const authHeader = req.header('Authorization');

  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return res.status(401).send('No token, authorization denied');
  }

  const token = authHeader.replace('Bearer ', '');

  try {
    // Verify token
    const decoded = jwt.verify(token, process.env.SECRET);
    req.user = decoded;
    next();
  } catch (e) {
    res.status(400).send('Token is not valid');
  }
};

module.exports = authMiddleware;
