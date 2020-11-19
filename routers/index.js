const express = require("express");
const router = express.Router();

router.use('/api', require("./api/ver_1.0.0"));

module.exports = router;
