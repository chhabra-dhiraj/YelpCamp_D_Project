const mongoose = require('mongoose');

const campgroundSchema = new mongoose.Schema({
    name: String,
    image: String
});

module.exports = mongoose.model("Campground", campgroundSchema);