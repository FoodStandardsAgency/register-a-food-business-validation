const { isAscii, isEmpty, trim } = require("validator");

const validateName = name => {
  if (typeof name === "string") {
    if (isEmpty(trim(name))) {
      return false;
    }
    return isAscii(name) ? true : false;
  }
  return false;
};

module.exports = validateName;
