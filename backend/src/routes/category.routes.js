import express from "express";
import { createCategory, getCategories, deleteCategory } from "../controllers/category.controller.js";
import  authMiddleware  from "../middlewares/auth.middleware.js";
import { validateCategory } from "../middlewares/validation.middleware.js";

const router = express.Router();

router.post("/", authMiddleware, validateCategory, createCategory); // Create category (Protected)
router.get("/", getCategories); // Get all categories (Public)
router.delete("/:id", authMiddleware, deleteCategory); // Delete category (Protected)

export default router;
