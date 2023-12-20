const router = require("express").Router();
const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient()

/*--------------------- get a review by gameName --------------------*/

router.get("/:gameName/reviews", async (req, res) => {
    const reviews = await prisma.review.findMany();

    res.send(reviews);

   
})



/*--------------------- get a single review by gameName --------------------*/
router.get("/:gameName/reviews", async (req, res) => {
    const reviewId = req.params.id

    const review = await prisma.review.findUnique(
        {
            where: {
                id: reviewId
            },
        })
        res.send(review || {});
})

module.exports = router;