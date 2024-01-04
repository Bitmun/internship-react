const express = require("express");
const crypto = require("crypto");
const { validateRegistration, verifyPassword } = require("../utils/auth");

const router = express.Router();
const { Users } = require("../models");

router.post("/signIn", async (req, res) => {
  const { username, password } = req.body;

  const user = await Users.findOne({ where: { username } });
  if (!user) {
    res.status(400).json({ msg: "No user with such username" });
    return;
  }
  if (!verifyPassword(password, user.password, user.salt)) {
    res.status(400).json({ msg: "wrong password" });
    return;
  }

  res.status(200).json({
    msg: "logged in successfully",
    user,
  });
});

router.post("/signUp", async (req, res) => {
  const { username, password, firstName, lastName, age } = req.body;

  const check = validateRegistration(req.body);

  if (check.length !== 0) {
    res.status(200).json({ msg: "validation errors", errors: check });
    return;
  }

  const user = await Users.findOne({ where: { username } });

  if (user) {
    res.status(400).json({ msg: "User with such username already exists" });
    return;
  }

  const salt = crypto.randomBytes(16).toString("hex");

  const hash = crypto
    .pbkdf2Sync(password, salt, 100000, 64, "sha512")
    .toString("hex");

  Users.create({ username, password: hash, firstName, lastName, age, salt });
  res.json("User registered");
});

module.exports = router;
