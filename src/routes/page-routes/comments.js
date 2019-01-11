const express = require('express'),
    router = express.Router(),
    bodyParser = require('body-parser');

const {createComment, readCommentById, updateComment, deleteComment} = require('../../controllers/comments');

// New page
router.get("/:id/comments/new", async function (req, res) {
    const cssFile = "page_add_comment";
    const jsFile = "page_add_comment";
    res.render('comments/new', {campgroundId: req.params.id, cssFile: cssFile, jsFile: jsFile});
});

// Create page
router.post("/:id/comments", async function (req, res) {
    const comment = await createComment(req.body.comment, req.params.id);

    res.redirect("/campgrounds/" + req.params.id);
});

// Edit page
router.get("/:id/comments/:cId/edit", async function (req, res) {
    const comment = await readCommentById(req.params.cId);

    const cssFile = "page_add_comment";
    const jsFile = "page_add_comment";
    res.render('comments/edit', {comment: comment, campgroundId: req.params.id, cssFile: cssFile, jsFile: jsFile});
});

// Update page
router.put("/:id/comments/:cId", async function (req, res) {
    const comment = await updateComment(req.params.cId, req.body.comment);
    res.redirect("/campgrounds/" + req.params.id);
});

// Delete page
router.delete("/:id/comments/:cId", async function (req, res) {
    const comment = await deleteComment(req.params.cId, req.params.id);
    res.redirect("/campgrounds/" + req.params.id);
});

module.exports = router;