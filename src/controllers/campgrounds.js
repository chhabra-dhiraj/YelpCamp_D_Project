const Campground = require('../models/campgrounds');

// Create
async function createCampground(newCampground) {
    try {
        return await Campground.create(newCampground);
    } catch (e) {
        throw e;
    }
}

// Read
async function readCampgrounds() {
    try {
        return await Campground.find({});
    } catch (e) {
        throw e;
    }
}

// Read by Id
async function readCampgroundById(campgroundId) {
    try {
        return await Campground.findById(campgroundId).populate("comments").exec();
    } catch (e) {
        throw e;
    }
}

// Update
async function updateCampground(campgroundId, newCampground) {
    try {
        return await Campground.findByIdAndUpdate(campgroundId, newCampground);
    } catch (e) {
        throw e;
    }
}

// Delete
async function deleteCampground(campgroundId) {
    try {
        return await Campground.findByIdAndRemove(campgroundId);
    } catch (e) {
        throw e;
    }
}

module.exports = {createCampground, readCampgrounds, readCampgroundById, updateCampground, deleteCampground};