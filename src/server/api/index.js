const router = require("express").Router();

router.use("/games", require ("./games"));

module.exports = router;