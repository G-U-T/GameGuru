const express = require('express');
const bcrypt = require('bcrypt');
const jwtUtils = require('./utils');

const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient()
const authRouter = express.Router();

authRouter.post('/register', async (req, res) => {
    try {
      // Extract user data from request body
      const { username, password } = req.body;
  
      // Hash the password
      const hashedPassword = await bcrypt.hash(password, 10);
  
      // Create a new user
      const newUser = await prisma.user.create({
        data: {
          username,
          password: hashedPassword,
          is_admin: false, 
        },
      });
  
      // Respond with a message 
      res.json({ message: 'User registered successfully', user: newUser });
    } catch (error) {
      console.error('Error registering user:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });
  
  // Login
  authRouter.post('/login', async (req, res) => {
    try {
      // Extract user 
      const { username, password } = req.body;
  
      // Find the user by username
      const user = await prisma.user.findUnique({
        where: { username },
      });
  
      // Check if the user exists and the password is correct
      if (user && await bcrypt.compare(password, user.password)) {
        // Generate a JWT token
        const token = jwtUtils.generateToken(user.id);
  
        // Respond with the token
        res.json({ token });
      } else {
        // Respond with an authentication error
        res.status(401).json({ error: 'Invalid credentials' });
      }
    } catch (error) {
      console.error('Error logging in:', error);
    }
  });
  
  module.exports = authRouter;