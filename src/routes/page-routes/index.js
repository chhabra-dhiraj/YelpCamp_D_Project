const express = require('express'),
    router = express.Router();

router.use(require('./homeCampground'));
router.use("/campgrounds", require('./campgrounds'));

module.exports = router;
