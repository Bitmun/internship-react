const express = require("express");
const crypto = require("crypto");
const { validateRegistration, verifyPassword } = require("../utils/auth");

const router = express.Router();
const { Users } = require("../models");
const { createAccessToken, createRefreshToken } = require("../utils/JWT");

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

  const accessToken = createAccessToken(user);

  const refreshToken = createRefreshToken(user);

  res
    .cookie("refreshToken", refreshToken, {
      httpOnly: true,
      sameSite: "strict",
      maxAge: 360000000,
    })
    .cookie("accessToken", accessToken, {
      httpOnly: true,
      sameSite: "strict",
      maxAge: 36000000,
    })
    .status(200)
    .json({
      msg: "logged in successfully",
      username,
    });
});

router.post("/signOut", (req, res) => {
  res.clearCookie("accessToken");
  res.clearCookie("refreshToken");
  res.end();
});

router.post("/signUp", async (req, res) => {
  const { username, password, firstName, lastName, age } = req.body;

  const check = await validateRegistration(req.body);

  if (check.length !== 0) {
    res.status(400).json({ msg: "validation errors", errors: check });
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
