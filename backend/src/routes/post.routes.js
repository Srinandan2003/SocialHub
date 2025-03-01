import express from "express";
import {
    createPost,
    deletePost,
    editPost,
    getPost,
    getAllPosts,
    likePost,
    // commentOnPost,
    searchPosts,
    unlikePost
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
router.put("/:postId/unlike", authMiddleware, unlikePost); // Unlike a Post



export default router;
