const express = require('express');
const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();
const usersRouter = express.Router();


// Get User Profile, needed to use ID 
usersRouter.get('/:userID', async (req, res) => {
    const { userID } = req.params;
  
    try {
      const userProfile = await prisma.user.findUnique({
        where: { id: parseInt(userID) },
        select: {
          id: true,
          username: true,
          reviews: true,
          comments: true,
        },
      });
  
      if (!userProfile || userProfile.length === 0) {
        return res.status(404).json({ error: 'User not found' });
      }
  
      return res.json(userProfile);
    } catch (error) {
      console.error('Error:', error);
      return res.status(500).json({ error: 'Internal Server Error' });
    }
  });
  //Update a user review 
  usersRouter.patch('/:userID/reviews/:reviewID', async (req, res) => {
    const { userID, reviewID } = req.params;
  
    try {
      const { rating, summary } = req.body;
  
      // Both fields required 
      if (!rating || !summary) {
        return res.status(400).json({ error: 'Rating and summary are required' });
      }
  
      const updatedReview = await prisma.review.update({
        where: {
          id: parseInt(reviewID),
          userId: parseInt(userID),
        },
        data: {
          rating: parseInt(rating),
          summary,
        },
        
        include: {
          game: true,
          user: true, 
          comments: true,
        },
      });
  
      return res.json(updatedReview);
    } catch (error) {
      console.error('Error:', error);
      return res.status(500).json({ error: 'Internal Server Error' });
    }
  });

module.exports= usersRouter;