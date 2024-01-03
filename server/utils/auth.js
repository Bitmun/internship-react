const crypto = require("crypto");

const verifyPassword = (password, storedHash, storedSalt) => {
  const hash = crypto
    .pbkdf2Sync(password, storedSalt, 100000, 64, "sha512")
    .toString("hex");
  return hash === storedHash;
};

const validateRegistration = ({
  username,
  password,
  repeatPassword,
  firstName,
  lastName,
  age,
}) => {
  const errors = [];

  if (username.length < 3) {
    errors.push("Username must contain 3 symbols or more.");
  }

  if (!/\d/.test(password) || !/[a-zA-Z]/.test(password)) {
    errors.push("Password must contain at least 1 number and 1 letter.");
  }

  if (password.length < 4) {
    errors.push("Password must contain 4 symbols or more.");
  }

  if (password !== repeatPassword) {
    errors.push("Passwords should be the same.");
  }

  if (firstName.length < 3) {
    errors.push("First name must contain 3 symbols or more.");
  }

  if (lastName.length < 3) {
    errors.push("Last name must contain 3 symbols or more.");
  }

  if (isNaN(age) || age <= 0) {
    errors.push("Age must be a number and can't be zero.");
  }

  return errors;
};

module.exports = { verifyPassword, validateRegistration };
