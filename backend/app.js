import express from "express";
import cors from "cors";

import commentRoutes from "./src/routes/comment.routes.js";
import userRoutes from "./src/routes/user.routes.js";
import postRoutes from "./src/routes/post.routes.js";
import  errorHandler  from "./src/middlewares/error.middleware.js";

const app = express();

// Middleware
// Middleware
app.use(cors({origin: process.env.FRONTEND_URI}));
app.use(express.json()); // Parse JSON requests
app.use(express.urlencoded({ extended: true })); // Parse URL-encoded requests

// Routes
// Routes
app.use("/api/users", userRoutes); // User Authentication & Profile
app.use("/api/posts", postRoutes); // Post CRUD + Like + Search
app.use("/api/comments", commentRoutes); // Comment CRUD

// Test Route
app.get("/test", (req, res) => {
  res.send("API is running...");
});


// Error Handling Middleware
app.use(errorHandler);


export default app;
