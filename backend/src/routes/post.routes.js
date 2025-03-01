import express from "express";
import {
    createPost,
    deletePost,
    editPost,
    getPost,
    getAllPosts,
    likePost,
    // commentOnPost,
    searchPosts
} from "../controllers/post.controller.js";
import authMiddleware from "../middlewares/auth.middleware.js";
import upload from "../middlewares/upload.middleware.js";

const router = express.Router();

// Routes for posts
router.post("/", authMiddleware, upload.single("media"), createPost); // Create Post
router.get("/", getAllPosts); // Get All Posts (Homepage)
router.get("/search", searchPosts); // Search Posts by Title/Category (GET /api/posts/search?title=example&category=tech)
router.get("/:postId", getPost); // Get a Single Post
router.put("/:postId", authMiddleware, upload.single("media"), editPost); // Edit Post
router.delete("/:postId", authMiddleware, deletePost); // Delete Post
router.post("/:postId/like", authMiddleware, likePost); // Like a Post
// router.post("/:postId/comment", authMiddleware, commentOnPost); // Add Comment

// for comment user Id, post id, and in query = post Id
// "text" : "it very good coures",
// "user" : "67c2e62c21a10ae63ab3ed31",
// "post" : "67c2f9fc54829becfdc712f3"
export default router;
