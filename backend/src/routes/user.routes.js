import express from "express";
import { registerUser, loginUser, getUserProfile, editUserProfile } from "../controllers/user.controller.js";
import authMiddleware from "../middlewares/auth.middleware.js";
import upload from "../middlewares/upload.middleware.js";

const router = express.Router();

router.post("/register", registerUser);
router.post("/login", loginUser);
router.get("/profile", authMiddleware, getUserProfile);
router.put("/profile", authMiddleware, upload.single("profileImage"), editUserProfile);

export default router;
