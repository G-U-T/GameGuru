const router = require("express").Router();
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();


router.use('/games', require ("./games"));
router.use('/consoles', require ("./consoles"));
router.use('/users', require ("./users"));
router.use('/comments', require("./comments"));
router.get("/search/:query", async (req, res) => {
    const query = req.params.query;
    const games = await prisma.game.findMany({
        where: {
            OR: [
                {
                    title: {
                        contains: query,
                        mode: 'insensitive',
                    },
                },
                {
                    platform: {
                        contains: query,
                        mode: 'insensitive',
                    },
                },
            ],
        },
    });
    
    res.json(games);

});
module.exports = router;