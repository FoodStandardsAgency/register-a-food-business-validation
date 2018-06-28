const { isAscii, isEmpty, trim } = require("validator");

const validateFirstLine = firstLine => {
  if (typeof firstLine === "string") {
    if (isEmpty(trim(firstLine))) {
      return false;
    }
    return isAscii(firstLine) ? true : false;
  }
  return false;
};

module.exports = validateFirstLine;
