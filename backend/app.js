import express from "express";
import cors from "cors";
import authRouter from "./src/routes/auth.routes.js"; // Add `.js` at the end!

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use("/api/auth", authRouter);

// Test Route
app.get("/", (req, res) => {
  res.send("API is running...");
});

export default app;
