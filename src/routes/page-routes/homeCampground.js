const express = require('express'),
    router = express.Router();

// Home page
router.get("/", function (req, res) {
    res.redirect("/campgrounds");
});

module.exports = router;