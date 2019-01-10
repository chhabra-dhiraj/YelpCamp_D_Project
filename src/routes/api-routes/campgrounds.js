const express = require('express'),
    router = express.Router(),
    bodyParser = require('body-parser');

const {createCampground, readCampgrounds, readCampgroundById, updateCampground, deleteCampground} = require('../../controllers/campgrounds');

router.use(bodyParser.urlencoded({extended: true}));

// Read api
router.get("/", async function (req, res) {
    const campgrounds = await readCampgrounds();
    res.status(200).json(campgrounds);
});

// Create api
router.post("/", async function (req, res) {
    const newCampground = req.body.campground;

    const campground = await createCampground(newCampground);
    res.send(campground);
})

// Show api by Id
router.get("/:id", async function (req, res) {
    const campground = await readCampgroundById(req.params.id);
    res.status(200).json(campground);
});

// Update api
router.put("/:id", async function (req, res) {
    const updatedCampground = req.body.campground;

    const campground = await updateCampground(req.params.id, updatedCampground);
    res.send(campground);
});

// Delete api
router.delete("/:id", async function (req, res) {
    const campground = await deleteCampground(req.params.id);
    res.send(campground);
});

module.exports = router;