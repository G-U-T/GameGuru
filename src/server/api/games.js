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

module.exports = router;