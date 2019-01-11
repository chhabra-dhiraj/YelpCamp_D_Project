const express = require('express'),
    router = express.Router(),
    bodyParser = require('body-parser');

const {createComment, readComments, readCommentById, updateComment, deleteComment} = require('../../controllers/comments');

// Read api
router.get("/:id/comments", async function (req, res) {
    const comments = await readComments(req.params.id);

    res.status(200).json(comments);
});

// Create api
router.post("/:id/comments", async function (req, res) {
    const comment = await createComment(req.body.comment, req.params.id);

    res.send(comment);
});

// Show api
router.get("/:id/comments/:cId", async function (req, res) {
    const comment = await readCommentById(req.params.cId);

    res.status(200).json(comment);
});

// Update api
router.put("/:id/comments/:cId", async function (req, res) {
    const comment = await updateComment(req.params.cId, req.body.comment);

    res.send(comment);
});

// Delete api
router.delete("/:id/comments/:cId", async function (req, res) {
    const comment = await deleteComment(req.params.cId, req.params.id);

    res.send(comment);
});

module.exports = router;