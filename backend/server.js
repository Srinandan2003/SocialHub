import dotenv from "dotenv";
import connectDB from "./src/config/db.js"; // Add `.js` in imports
import app from "./app.js"; // Add `.js` in imports

dotenv.config(); // Load environment variables

const PORT = process.env.PORT || 5000;

// Connect to MongoDB
connectDB();

// Start Server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
