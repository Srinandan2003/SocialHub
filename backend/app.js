const express = require("express");
const cors = require("cors");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes


// Test Route
app.get("/", (req, res) => {
  res.send("API is running...");
});

module.exports = app;
