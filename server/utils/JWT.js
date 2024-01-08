const jwt = require("jsonwebtoken");
const { ACCESS_SECRET_KEY, REFRESH_SECRET_KEY } = require("../data/data");

const validateToken = (req, res, next) => {
  const { accessToken, refreshToken } = req.cookies;

  if (!accessToken && !refreshToken) {
    return res
      .status(401)
      .json({ msg: "Access Denied. No tokens provided.", redirect: true });
  }

  try {
    const decoded = jwt.verify(accessToken, ACCESS_SECRET_KEY);
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
      const decoded = jwt.verify(refreshToken, REFRESH_SECRET_KEY);
      const newAccessToken = jwt.sign(
        { user: decoded.data },
        ACCESS_SECRET_KEY,
      );

      res.cookie("refreshToken", refreshToken, {
        httpOnly: true,
        sameSite: "strict",
        maxAge: 36000000,
      });
      res.cookie("accessToken", newAccessToken, {
        maxAge: 360000,
        httpOnly: true,
        sameSite: "strict",
      });

      next();
    } catch (e) {
      return res.status(401).json({ msg: "Invalid token", redirect: true });
    }
  }
  return null;
};

const createAccessToken = (data) => {
  const token = jwt.sign({ data }, ACCESS_SECRET_KEY);
  return token;
};

const createRefreshToken = (data) => {
  const token = jwt.sign({ data }, REFRESH_SECRET_KEY);
  return token;
};

module.exports = {
  createAccessToken,
  createRefreshToken,
  validateToken,
};
