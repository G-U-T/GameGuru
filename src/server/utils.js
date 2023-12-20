const jwt = require('jsonwebtoken');

const JWT_SECRET = process.env.JWT_SECRET

const generateToken = (userId) => {
  return jwt.sign({ userId }, JWT_SECRET, { expiresIn: '1h' });
}

const verifyToken = (token) => {
  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    return decoded;
  } catch (error) {
    throw new Error('Invalid token');
  }
}

module.exports = { generateToken, verifyToken };