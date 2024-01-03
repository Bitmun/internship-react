const express = require("express");
const { validateRegistration } = require("../utils/auth");
const router = express.Router();
const crypto = require("crypto");
const { Users } = require("../models");

router.post("/signIn", async (req, res) => {
  let { username, password } = req.body;

  const user = await Users.findOne({ where: { username } });
  if (!user) {
    res.status(400).json({ msg: "No user with such username" });
  }
  //TODO
});

router.post("/signUp", async (req, res) => {
  const { username, password, firstName, lastName, age } = req.body;

  const user = await Users.findOne({ where: { username } });

  if (user) {
    res.status(400).json({ msg: "User with such username already exists" });
  }

  const check = validateRegistration(req.body);

  if (check.length !== 0) {
    // TODO
    res.status(400).json(JSON.stringify(check));
  }

  const salt = crypto.randomBytes(16).toString("hex");

  const hash = crypto
    .pbkdf2Sync(password, salt, 100000, 64, "sha512")
    .toString("hex");

  Users.create({ username, password: hash, firstName, lastName, age, salt });
  res.json("User registered");
});

module.exports = router;
