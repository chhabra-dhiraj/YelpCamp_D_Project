const express = require('express'),
    router = express.Router(),
    bodyParser = require('body-parser');

const {createComment, readCommentById, updateComment, deleteComment} = require('../../controllers/comments');

// New
router.get("/:id/comments/new", async function (req, res) {
    res.render('comments/new', {campgroundId: req.params.id});
});

// Create
router.post("/:id/comments", async function (req, res) {
    const comment = await createComment(req.body.comment, req.params.id);

    res.redirect("/campgrounds/" + req.params.id);
});

// Edit
router.get("/:id/comments/:cId/edit", async function (req, res) {
    const comment = await readCommentById(req.params.cId);
    res.render('comments/edit', {comment: comment});
});

router.put("/:id/comments/:cId", async function (req, res) {
    const comment = await updateComment(req.params.cId, req.body.comment);
    res.redirect("/campgrounds/" + req.params.id);
});

router.delete("/:id/comments/:cId", async function (req, res) {
    const comment = await deleteComment(req.params.cId, req.params.id);
    res.redirect("/campgrounds/" + req.params.id);
});

module.exports = router;