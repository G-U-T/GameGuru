const router = require("express").Router();
const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient()

/*--------------------- get a game by title --------------------*/

router.get ("/:gameName", async (req, res) => {
    const postName = req.params.title

    const post = await prisma.game.findUnique(
        {
            where: {
                title: postName
            },
        })
        res.send(post || {});
})

module.exports = router;