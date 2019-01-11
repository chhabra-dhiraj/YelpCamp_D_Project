const express = require('express'),
    router = express.Router(),
    bodyParser = require('body-parser');

const {createCampground, readCampgrounds, readCampgroundById, updateCampground, deleteCampground} = require('../../controllers/campgrounds');

router.use(bodyParser.urlencoded({extended: true}));

// Read page
router.get("/", async function (req, res) {
    const campgrounds = await readCampgrounds();

    const cssFile = "page_campgrounds";
    const jsFile = "page_campgrounds";
    res.render("campgrounds/index", {campgrounds: campgrounds, cssFile: cssFile, jsFile: jsFile});
});

// New page
router.get("/new", async function (req, res) {
    const cssFile = "page_add_campground";
    const jsFile = "page_add_campground";
    res.render("campgrounds/new", {cssFile: cssFile, jsFile: jsFile});
});

// Create page
router.post("/", async function (req, res) {
    const newCampground = req.body.campground;

    const campground = await createCampground(newCampground);
    res.redirect("/campgrounds/" + campground._id);
});

// Show page
router.get("/:id", async function (req, res) {
    const campground = await readCampgroundById(req.params.id);

    const cssFile = "page_campground";
    const jsFile = "page_campground";
    res.render("campgrounds/show", {campground: campground, cssFile: cssFile, jsFile: jsFile});
});

// Edit page
router.get("/:id/edit", async function (req, res) {
    const campground = await readCampgroundById(req.params.id);

    const cssFile = "page_add_campground";
    const jsFile = "page_add_campground";
    res.render("campgrounds/edit", {campground: campground, cssFile: cssFile, jsFile: jsFile});
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