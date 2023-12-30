const { AUTH_DATA } = require("../data/data");

const validateCredits = (username, password) => {
  if (username == AUTH_DATA.username && password == AUTH_DATA.password) {
    return true;
  }
  return false;
};

module.exports = validateCredits;
