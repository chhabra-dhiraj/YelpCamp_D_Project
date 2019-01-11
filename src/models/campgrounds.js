const mongoose = require('mongoose');

const Comment = require('./comments');
const campgroundSchema = new mongoose.Schema({
    name: String,
    image: String,
    desc: String,
    comments: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: Comment
    }]
});

module.exports = mongoose.model("Campground", campgroundSchema);