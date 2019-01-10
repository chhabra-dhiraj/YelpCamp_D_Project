const express = require('express'),
    router = express.Router(),
    bodyParser = require('body-parser');

const {createCampground, readCampgrounds, readCampgroundById, updateCampground, deleteCampground} = require('../../controllers/campgrounds');

router.use(bodyParser.urlencoded({extended: true}));

// Read page
router.get("/", async function (req, res) {
    const campgrounds = await readCampgrounds();
    const cssFile = "index";
    res.render("campgrounds/index", {campgrounds: campgrounds, cssFile: cssFile});
});

// New page
router.get("/new", async function (req, res) {
    const cssFile = "new";
    res.render("campgrounds/new", {cssFile: cssFile});
});

// Create page
router.post("/", async function (req, res) {
    const newCampground = req.body.campground;

    const campground = await createCampground(newCampground);
    res.redirect("/campgrounds");
});

// Show page
router.get("/:id", async function (req, res) {
    const campground = await readCampgroundById(req.params.id);
    res.render("campgrounds/show");
});

// Edit page
router.get("/:id", async function (req, res) {
    const campground = await readCampgroundById(req.params.id);
    res.render("campgrounds/edit");
});

// Update page
router.put("/:id", async function (req, res) {
    const updatedCampground = req.body.campground;

    const campground = await updateCampground(req.params.id, updatedCampground);
    res.redirect("/campgrounds/" + req.params.id);
});

// Delete page
router.delete("/:id", async function (req, res) {
    const campground = await deleteCampground(req.params.id);
    res.redirect("/campgrounds");
});

module.exports = router;