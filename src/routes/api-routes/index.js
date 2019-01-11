const express = require('express'),
    router = express.Router();

router.use("/api/campgrounds", require('./campgrounds'));
router.use("/api/campgrounds", require('./comments'));

module.exports = router;