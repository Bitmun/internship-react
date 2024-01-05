/* eslint-disable dot-notation */
/* eslint-disable prefer-destructuring */
const jwt = require("jsonwebtoken");
const { SECRET_KEY } = require("../data/data");

const validateToken = (req, res, next) => {
  let accessToken = req.cookies["authorization"];
  const refreshToken = req.cookies["refreshToken"];

  if (!accessToken && !refreshToken) {
    return res.status(401).send("Access Denied. No token provided.");
  }

  try {
    const decoded = jwt.verify(accessToken, SECRET_KEY);
    req.user = decoded.user;
    next();
  } catch (error) {
    if (!refreshToken) {
      return res.status(401).send("Access Denied. No refresh token provided.");
    }

    try {
      const decoded = jwt.verify(refreshToken, SECRET_KEY);
      accessToken = jwt.sign({ user: decoded.user }, SECRET_KEY, {
        expiresIn: "1h",
      });

      res
        .cookie("refreshToken", refreshToken, {
          httpOnly: true,
          sameSite: "strict",
        })
        .cookie("authorization", accessToken, {
          maxAge: 10000,
          httpOnly: true,
          sameSite: "strict",
        })
        .send(decoded.user);
    } catch (e) {
      return res.status(400).send("Invalid Token.");
    }
  }
  return res.status(400).json({ msg: "some error" });
};

const createToken = (user) => {
  const accessToken = jwt.sign({ user }, SECRET_KEY, { expiresIn: "1h" });
  return accessToken;
};

module.exports = {
  createToken,
  validateToken,
};
