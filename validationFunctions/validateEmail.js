const { isEmail } = require("validator");

const validateEmail = email => {
  if (typeof email === "string") {
    return isEmail(email);
  }
  return false;
};

module.exports = validateEmail;
