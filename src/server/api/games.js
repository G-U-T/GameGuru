const router = require("express").Router();
const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient()


/*--------------------- get a game by gameId --------------------*/

router.get ("/:gameId", async (req, res) => {
    const gameId = parseInt(req.params.gameId);
   
    const game = await prisma.game.findUnique(
        {
            where: {
                id: gameId
            },
        })
        res.send(game || {});
})

/*--------------------- get reviews by gameId --------------------*/

router.get("/:gameId/reviews", async (req, res) => {
    const gameId = parseInt(req.params.gameId)
    const reviews = await prisma.review.findMany(
        {
            where: {
                gameId:gameId,
            },
        }
    );
    res.send(reviews);
})

/* ------------------ get reviews by reviewId ------------------*/
router.get("/:gameId/reviews/:reviewId", async (req, res) => {
    const reviewId = parseInt(req.params.reviewId)

    const review = await prisma.review.findUnique(
        {
            where: {

                id: reviewId
            },
        }
    );
    res.send(review);
})

/* get comments by reviewId*/
router.get("/:gameId/reviews/:reviewId/comments", async (req, res) => {
    const reviewId = parseInt(req.params.reviewId)

    const comments = await prisma.comment.findMany(
        {
            where: {
                reviewsId:reviewId
            },
        }
    );
    res.send(comments)
})

module.exports = router;