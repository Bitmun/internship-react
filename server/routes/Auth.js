const express = require("express");
const validateCredits = require("../utils/auth");
const router = express.Router();

router.post("/login", (req, res) => {
  console.log(req.body);

  let { username, password } = req.body;

  if (validateCredits(username, password)) {
    console.log("logged in successfully");
    res.status(200).json({
      msg: "logged in successfully",
      data: {
        logInStatus: true,
      },
    });
    return;
  }
  console.log("wrong credentials");

  res.status(401).json({
    msg: "wrong credentials",
    data: {
      logInStatus: false,
    },
  });
});

module.exports = router;
