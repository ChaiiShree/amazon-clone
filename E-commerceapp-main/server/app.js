require("dotenv").config();
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const port = process.env.PORT || 5000; // Use the port defined in environment variable or default to 5008

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI, {
  useUnifiedTopology: true,
  useNewUrlParser: true
}).then(() => {
  console.log("MongoDB connected");
}).catch((err) => {
  console.error("Error connecting to MongoDB:", err.message);
});

// Require middleware
const cookieParser = require("cookie-parser");
app.use(express.json());
app.use(cookieParser());

// Require routes
const router = require(".server\routes\router.js");
app.use(router);

// Serve static files in production
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Start the server
app.listen(port, () => {
  console.log(`Your server is running on port ${port}`);
});

// Run default data setup
const DefaultData = require("./defaultdata");
DefaultData();
