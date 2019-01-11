const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema({
    author: String,
    content: String
});

module.exports = mongoose.model("Comment", commentSchema);