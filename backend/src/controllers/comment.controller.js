import Post from "../models/Post.model.js";

/**
 * @desc Add a comment to a post
 * @route POST /api/posts/:id/comments
 */

export const addComment = async (req, res) => {
    try {
        const { text } = req.body;
        const userId = req.user.id;
        const postId = req.params.postId;

        // Create and save the comment
        const comment = new Comment({ text, user: userId, post: postId });
        await comment.save();  // ✅ Save comment in database

        // Find the post and push the comment ID
        const post = await Post.findById(postId);
        post.comments.push(comment._id); // ✅ Push ObjectId, not full object
        await post.save();

        res.json({ message: "Comment added successfully", comment });
    } catch (error) {
        res.status(500).json({ message: "Server Error", error: error.message });
    }
};

/**
 * @desc Delete a comment
 * @route DELETE /api/posts/:postId/comments/:commentId
 */

export const deleteComment = async (req, res) => {
    try {
        const post = await Post.findById(req.params.postId);
        if (!post) return res.status(404).json({ message: "Post not found" });

        post.comments = post.comments.filter(comment => comment._id.toString() !== req.params.commentId);
        await post.save();

        res.json({ message: "Comment deleted successfully" });
    } catch (error) {
        res.status(500).json({ message: "Server Error", error: error.message });
    }
};

/**
 * @desc Get all comments for a post
 * @route GET /api/posts/:id/comments
 */

export const getComments = async (req, res) => {
    try {
        const post = await Post.findById(req.params.id).populate("comments.user", "username");

        if (!post) return res.status(404).json({ message: "Post not found" });

        res.json(post.comments);
    } catch (error) {
        res.status(500).json({ message: "Server Error", error: error.message });
    }
};