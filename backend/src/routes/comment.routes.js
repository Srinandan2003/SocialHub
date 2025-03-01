import express from "express";
import { addComment, deleteComment, getComments } from "../controllers/comment.controller.js";
import  authMiddleware  from "../middlewares/auth.middleware.js";
import { validateComment } from "../middlewares/validation.middleware.js";

const router = express.Router();

router.post("/:postId/comments", authMiddleware, validateComment, addComment); // Add comment (Protected)
router.delete("/:postId/comments/:commentId", authMiddleware, deleteComment); // Delete comment (Protected)
router.get("/:postId/comments", getComments); // Get all comments for a post (Public)



export default router;
