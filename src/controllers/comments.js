const Comment = require('../models/comments');

const Campground = require('../models/campgrounds');

// Create
async function createComment(newComment, campgroundId) {
    try {
        const campground = await Campground.findById(campgroundId);
        return await Comment.create(newComment, async function (error, comment) {
            await campground.comments.push(comment);
            await campground.save();
        });
    } catch (e) {
        throw e;
    }
}

// Read
async function readComments(campgroundId) {
    try {
        const campground = await Campground.findById(campgroundId).populate("comments").exec();
        return await campground.comments;
    } catch (e) {
        throw e;
    }
};

// Read By Id
async function readCommentById(commentId) {
    try {
        return await Comment.findById(commentId);
    } catch (e) {
        throw e;
    }
};

// Update
async function updateComment(commentId, newComment) {
    try {
        return await Comment.findByIdAndUpdate(commentId, newComment);
    } catch (e) {
        throw e;
    }
}

// Delete
async function deleteComment(commentId, campgroundId) {
    try {
        const campground = await Campground.findById(campgroundId);
        const index = await campground.comments.indexOf(commentId);
        await campground.comments.splice(index, 1);
        await campground.save();
        return await Comment.findByIdAndRemove(commentId);
    } catch (e) {
        throw e;
    }
}

module.exports = {createComment, readComments, readCommentById, updateComment, deleteComment};