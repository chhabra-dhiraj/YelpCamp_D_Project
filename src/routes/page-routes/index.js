const express = require('express'),
    router = express.Router();

router.use(require('./homeCampground'));
router.use("/campgrounds", require('./campgrounds'));
router.use("/campgrounds", require('./comments'));

module.exports = router;
