const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const connectDB = require("./src/config/db");

dotenv.config(); // Load environment variables

const app = express();
const PORT = process.env.PORT || 5000;
 
// Middleware
app.use(cors());
app.use(express.json()); // Parse JSON data

// Connect to MongoDB
connectDB();

// Test Route
app.get("/", (req, res) => {
  res.send("API is running...");
});

// Start Server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
