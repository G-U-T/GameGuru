const express = require('express');
const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();
const usersRouter = express.Router();
const jwtUtils = require('../utils');

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

// Post a new user review
usersRouter.post('/:userID/reviews', jwtUtils.verifyToken, async (req, res) => {
  const { userID } = req.params;
  
  try {
    const { gameID, rating, summary } = req.body;

    // Both fields required 
    if (!rating || !summary) {
      return res.status(400).json({ error: 'Rating and summary are required' });
    }

    const newReview = await prisma.review.create({
      data: {
        gameId: parseInt(gameID),
        userId: parseInt(userID),
        rating: parseInt(rating),
        summary
      }
    })
    
    return res.json({"New review": newReview});
  } catch (error) {
    return res.json({error});
    return res.status(500).json({ error: 'Internal Server Error' });
  }
});

//Update a user review 
usersRouter.patch('/:userID/reviews/:reviewID', jwtUtils.verifyToken, async (req, res) => {
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

// Delete a user review
usersRouter.delete('/:userID/reviews/:reviewID', jwtUtils.verifyToken, async (req, res) => {
  const { userID, reviewID } = req.params;

  try {
    const deletedReview = await prisma.review.delete({
      where: {
        id: parseInt(reviewID),
        userId: parseInt(userID),
      }
    })

    return res.json({deleted: true, removedReview: deletedReview});
  } catch (error) {
    console.error('Error:', error);
    return res.status(500).json({ error: 'Internal Server Error' });
  }
});

module.exports= usersRouter;