const { isAscii, isEmpty, trim } = require("validator");

const validateTown = town => {
  if (typeof town === "string") {
    if (isEmpty(town)) {
      return true;
    }
    if (isEmpty(trim(town))) {
      return false;
    }
    return isAscii(town) ? true : false;
  }
  return false;
};

module.exports = validateTown;
