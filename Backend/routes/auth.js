// Import required modules
const express = require("express");
const bcrypt = require("bcryptjs"); // For hashing and comparing passwords
const User = require("../models/User"); // User model for database operations
const router = express.Router(); // Create a router instance
const jwt = require("jsonwebtoken"); // For generating and verifying JSON Web Tokens (JWT)
const verifyToken = require("../middlewares/verifyToken"); // Middleware for token verification
const cookieParser = require("cookie-parser"); // Middleware for parsing cookies

// -------------------------------------------------------------------------------------
// Registration Route
// -------------------------------------------------------------------------------------
router.post("/register", async (req, res) => {
  // Extract user details from the request body
  const {
    firstName,
    lastName,
    username,
    email,
    password,
    role = "user", // Default role is "user"
  } = req.body;

  // Validate required fields
  if (!email || !password || !firstName || !lastName || !username) {
    return res.status(400).json({ message: "Credentials are required" });
  }

  // Check if a user with the same email already exists
  const existingUserWithEmail = await User.findOne({ email });
  if (existingUserWithEmail) {
    console.log("User already exists");
    return res.status(400).json({ message: "User already exists" });
  }

  // If the role is "admin", ensure only one admin exists
  if (role === "admin") {
    const existingUserWithAdminRole = await User.findOne({ role });
    if (existingUserWithAdminRole) {
      return res.status(400).json({ message: "Admin user already exists" });
    }
  }

  // Create a new user in the database
  const newUser = await User.create({
    firstName,
    lastName,
    username,
    email,
    password: await bcrypt.hash(password, 10), // Password should ideally be hashed before saving
    role,
  });

  console.log(newUser);

  // Respond with a success message
  res
    .status(201)
    .json({ message: `${role || newUser.role} registered successfully` });
});

// -------------------------------------------------------------------------------------
// Login Route
// -------------------------------------------------------------------------------------
router.post("/login", async (req, res) => {
  // Extract email and password from the request body
  const { email, password } = req.body;

  console.log("Login attempt:", { email, password });

  // Find the user by email
  const user = await User.findOne({ email });
  if (!user) {
    return res.status(401).json({ message: "Invalid credentials" });
  }

  // Compare the provided password with the hashed password in the database
  const passwordMatch = await bcrypt.compare(password, user.password);
  console.log("Passwords match:", passwordMatch);

  if (!passwordMatch) {
    return res.status(401).json({ message: "Invalid credentials" });
  }

  // Generate a JWT token for the user
  const token = jwt.sign(
    { id: user._id, role: user.role }, // Payload
    process.env.JWT_SECRET, // Secret key
    { expiresIn: "1h" } // Token expiration time
  );

  // Set the token as an HTTP-only cookie
  res.cookie("token", token, {
    httpOnly: true, // Prevents access by JavaScript
    secure: process.env.NODE_ENV === "production", // Set to true in production with HTTPS
    sameSite: "Strict", // Prevents CSRF attacks
    path: "/", 
    maxAge: 3600000, // 1 hour
  });

  // Respond with a success message
  res
    .status(200)
    .json({ message: "Login successful", user: { firstName: user.firstName, lastName: user.lastName } });
});

// -------------------------------------------------------------------------------------
// Token Validation Route
// -------------------------------------------------------------------------------------
router.get("/check", verifyToken, (req, res) => {
  // At this point, req.user is already set by the middleware
  res.status(200).json({
    message: "Authenticated user",
    user: req.user,
  });
});

// -------------------------------------------------------------------------------------
// Logout Route
// -------------------------------------------------------------------------------------
router.post("/logout", (req, res) => {
  try {
    // Clear the token cookie
    res.clearCookie("token", {
      httpOnly: true,
      sameSite: "Strict",
      secure: process.env.NODE_ENV === "production", // Set to true in production with HTTPS
      path: "/", // Ensure the cookie is cleared for the entire site
    });
    
    // Respond with a success message
    res.status(200).json({ message: "Logged out successfully" });
  } catch (error) {
    console.error("Error logging out:", error);
    res.status(500).json({ message: "Failed to logout..!!" });
  }
});

// Export the router to be used in the main server file
module.exports = router;
