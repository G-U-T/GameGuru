const router = require("express").Router();

router.use('/games', require ("./games"));
router.use('/consoles', require ("./consoles"));
router.use('/users', require ("./users"));

module.exports = router;