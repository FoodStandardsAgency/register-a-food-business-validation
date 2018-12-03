/**
 * Function for validating any optional string
 * @module functions/validateOptionalString
 */

const { isAscii, isEmpty, trim } = require("validator");

const validateOptionalString = optionalString => {
  if (typeof optionalString === "string") {
    if (isEmpty(optionalString)) {
      return true;
    }
    if (isEmpty(trim(optionalString))) {
      return false;
    }
    return isAscii(optionalString) ? true : false;
  }
  return false;
};

module.exports = validateOptionalString;
