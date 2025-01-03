const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const User = require("../model/userModel");

// Route to register a new user
router.post("/register", async (req, res) => {
  const { employeeId, name, email, position, password } = req.body;

  // Validate input
  if (!employeeId || !name || !email || !position || !password) {
    return res.status(400).json({ message: "All fields are required" });
  }

  try {
    // Check if user already exists
    const existingUser = await User.findOne({ employeeId });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create and save the new user
    const newUser = new User({
      employeeId,
      name,
      email,
      position,
      password: hashedPassword,
    });

    await newUser.save();
    res.status(201).json({ message: "User registered successfully" });
  } catch (err) {
    res.status(500).json({ message: "Server error", error: err.message });
  }
});

// Route to login a user
router.post("/login", async (req, res) => {
  const { employeeId, password } = req.body;

  // Validate input
  if (!employeeId || !password) {
    return res.status(400).json({ message: "All fields are required" });
  }

  try {
    // Check if user exists
    const user = await User.findOne({ employeeId });
    if (!user) {
      return res.status(400).json({ message: "Invalid credentials" });
    }

    // Check password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: "Invalid credentials" });
    }

    // Successful login
    res.status(200).json({ message: "Login successful", user });
  } catch (err) {
    res.status(500).json({ message: "Server error", error: err.message });
  }
});

module.exports = router;
