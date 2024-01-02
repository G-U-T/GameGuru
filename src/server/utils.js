const jwt = require('jsonwebtoken');

const JWT_SECRET = process.env.JWT_SECRET;

const generateToken = (userId) => {
  return jwt.sign({ userId }, JWT_SECRET, { expiresIn: '1h' });
}

// const verifyToken = (token) => {
const verifyToken = (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (authHeader) {
    const token = authHeader.split(' ')[1];

    jwt.verify(token, JWT_SECRET, (err, user) => {
      if (err) {
        return res.sendStatus(403);
      }

      req.user = user;
      next();
    });
  }
  else {
    res.sendStatus(401);
  }
  // try {
  //   const decoded = jwt.verify(token, JWT_SECRET);
  //   return decoded;
  // } catch (error) {
  //   throw new Error('Invalid token');
  // }
}

module.exports = { generateToken, verifyToken };