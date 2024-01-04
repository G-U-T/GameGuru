const router = require("express").Router();

const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const jwtUtils = require('../utils');

router.get('/:commentID', async(req, res) => {
  const { commentID } = req.params;

  try {
    const comment = await prisma.comment.findUnique({
      where: {
        id: parseInt(commentID),
      },
    });

    if (comment) res.send(comment);
    else res.send(`Comment does not exist.`);
  } catch (error) {
    console.error('Error:', error);
    return res.status(500).json({ error: 'Internal Server Error' });
  }
});

router.get('/reviews/:reviewID', jwtUtils.verifyToken, async(req, res) => {
  const { reviewID } = req.params;

  try {
    const comments = await prisma.comment.findMany({
      where: {
        reviewsId: parseInt(reviewID),
      }
    });

    return res.json(comments);
  } catch (error) {
    res.json(error);
  }
});

router.post('/reviews/:reviewID', jwtUtils.verifyToken, async(req,res) => {
  const { reviewID } = req.params;

  try {
    const { comment_text } = req.body;

    // Comment text required 
    if (!comment_text) {
      return res.status(400).json({ error: 'Comment text required' });
    }

    const review = await prisma.review.findUnique({
      where: {
        id: parseInt(reviewID)
      }
    })
    const reviewUserID = review.userId;

    const newComment = await prisma.comment.create({
      data: {
        reviewsId: parseInt(reviewID),
        userId: reviewUserID,
        comment_text,
      },
    })

    res.json({"New comment": newComment});
  } catch (error) {
    console.error('Error:', error);
    return res.status(500).json({ error: 'Internal Server Error' });
  }
});

// patch and delete for comment
router.patch('/:commentID', jwtUtils.verifyToken, async (req, res) => {
  const { commentID } = req.params;

  try {
    const { comment_text } = req.body;

    // Comment text required 
    if (!comment_text) {
      return res.status(400).json({ error: 'Comment text required' });
    }

    const patchedComment = await prisma.comment.update({
      where: {
        id: parseInt(commentID),
      },
      data: {
        comment_text,
      }
    })

    res.json(patchedComment);
  } catch (error) {
    console.error('Error:', error);
    return res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Delete a comment
router.delete('/:commentID', jwtUtils.verifyToken, async (req, res) => {
  const { commentID } = req.params;

  try {
    const deletedComment = await prisma.comment.delete({
      where: {
        id: parseInt(commentID),
      }
    })

    return res.json({deleted: true, removedComment: deletedComment});
  } catch (error) {
    console.error('Error:', error);
    return res.status(500).json({ error: 'Internal Server Error' });
  }
});

module.exports = router;