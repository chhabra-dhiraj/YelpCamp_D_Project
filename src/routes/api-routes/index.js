const express = require('express'),
    router = express.Router();

router.use("/api/campgrounds", require('./campgrounds'));

module.exports = router;