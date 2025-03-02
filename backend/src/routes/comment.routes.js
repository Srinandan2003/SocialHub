import express from "express";
import { addComment, deleteComment, getComments, getPostCommentsCount } from "../controllers/comment.controller.js";
import  authMiddleware  from "../middlewares/auth.middleware.js";
import { validateComment } from "../middlewares/validation.middleware.js";

const router = express.Router();

router.post("/:postId/comments", authMiddleware, validateComment, addComment); // Add comment (Protected)
router.delete("/:postId/comments/:commentId", authMiddleware, deleteComment); // Delete comment (Protected)
router.get("/:postId/comments", getComments); // Get all comments for a post (Public)
router.get("/:postId/comments/count", getPostCommentsCount); // Get comment count for a post

// for comment user Id, post id, and in query = post Id
// "text" : "it very good coures",
// "user" : "67c2e62c21a10ae63ab3ed31",
// "post" : "67c2f9fc54829becfdc712f3"

export default router;
