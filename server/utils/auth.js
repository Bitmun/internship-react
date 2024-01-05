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
    errors.push({
      msg: "Username must contain 3 symbols or more.",
      type: "username",
    });
  }

  if (!/\d/.test(password) || !/[a-zA-Z]/.test(password)) {
    errors.push({
      msg: "Password must contain at least 1 number and 1 letter.",
      type: "password",
    });
  }

  if (password.length < 4) {
    errors.push({
      msg: "Password must contain 4 symbols or more.",
      type: "password",
    });
  }

  if (password !== repeatPassword) {
    errors.push({
      msg: "Passwords should be the same.",
      type: "repeatPassword",
    });
  }

  if (firstName.length < 3) {
    errors.push({
      msg: "First name must contain 3 symbols or more.",
      type: "firstName",
    });
  }

  if (lastName.length < 3) {
    errors.push({
      msg: "Last name must contain 3 symbols or more.",
      type: "lastName",
    });
  }

  if (Number.isNaN(age) || age <= 0) {
    errors.push({
      msg: "Age must be a number and can't be zero.",
      type: "age",
    });
  }

  return errors;
};

module.exports = { verifyPassword, validateRegistration };
