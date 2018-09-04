const { isEmail, trim } = require("validator");

const validateEmail = email => {
  if (typeof email === "string") {
    const noWhiteSpaceEmail = trim(email);
    return isEmail(noWhiteSpaceEmail);
  }
  return false;
};

module.exports = validateEmail;
