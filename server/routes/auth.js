const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { User } = require("../models");
const router = express.Router();

router.post("/register", async (req, res) => {
  const { username, password } = req.body;
  if (!username || !password)
    return res.status(400).json({ msg: "Please enter all fields" });
  let user = await User.findOne({ where: { username } });
  if (user) return res.status(400).json({ msg: "User already exists" });
  user = await User.create({
    username,
    password: await bcrypt.hash(password, 10),
  });
  const token = jwt.sign({ user: { id: user.id } }, process.env.JWT_SECRET, {
    expiresIn: "1h",
  });
  res.json({ token, username: user.username });
});

router.post("/login", async (req, res) => {
  const { username, password } = req.body;
  const user = await User.findOne({ where: { username } });
  if (!user || !(await bcrypt.compare(password, user.password)))
    return res.status(400).json({ msg: "Invalid credentials" });
  const token = jwt.sign({ user: { id: user.id } }, process.env.JWT_SECRET, {
    expiresIn: "1h",
  });
  res.json({ token, username: user.username });
});

module.exports = router;
