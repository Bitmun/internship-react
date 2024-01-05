const jwt = require("jsonwebtoken");
const { SECRET_KEY } = require("../data/data");

// eslint-disable-next-line consistent-return
const validateToken = (req, res, next) => {
  let accessToken = req.cookies.authorization;
  const { refreshToken } = req.cookies;

  if (!accessToken && !refreshToken) {
    return res
      .status(401)
      .json({ msg: "Access Denied. No token provided.", redirect: true });
  }

  try {
    const decoded = jwt.verify(accessToken, SECRET_KEY);
    req.user = decoded.user;
    next();
  } catch (error) {
    if (!refreshToken) {
      return res.status(401).json({
        msg: "Access Denied. No refresh token provided.",
        redirect: true,
      });
    }

    try {
      const decoded = jwt.verify(refreshToken, SECRET_KEY);
      accessToken = jwt.sign({ user: decoded.user }, SECRET_KEY);

      res.cookie("refreshToken", refreshToken, {
        httpOnly: true,
        sameSite: "strict",
        maxAge: 360000000,
      });
      res.cookie("authorization", accessToken, {
        maxAge: 36000000,
        httpOnly: true,
        sameSite: "strict",
      });

      next();
    } catch (e) {
      return res.status(400).json({ msg: "Invalid token", redirect: true });
    }
  }
};

const createToken = (user) => {
  const token = jwt.sign({ user }, SECRET_KEY);
  return token;
};

module.exports = {
  createToken,
  validateToken,
};
