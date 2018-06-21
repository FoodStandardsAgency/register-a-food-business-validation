const { isEmail, isEmpty, trim } = require("validator");

const validateEmail = email => {
  if (typeof email === "string") {
    if (isEmpty(trim(email))) return false;
    return isEmail(email) ? true : false;
  }
  return false;
};

module.exports = validateEmail;