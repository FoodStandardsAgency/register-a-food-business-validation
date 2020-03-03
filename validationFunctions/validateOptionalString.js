/**
 * Function for validating any optional string
 * @module functions/validateOptionalString
 */

const { isAscii, isEmpty, trim } = require("validator");

/**
 * Runs custom validation on any optional string. It will be true if the input is an ASCII string. Empty string will return true as the field is optional.
 *
 * @param {string} optionalString The text string the user supplies
 *
 * @returns {boolean} It will return true if the string is valid and false if it is not valid
 */

const validateOptionalString = optionalString => {
  if (typeof optionalString === "string") {
    if (isEmpty(optionalString)) {
      return true;
    }
    if (isEmpty(trim(optionalString))) {
      return false;
    }
    return isAscii(optionalString) && optionalString.length <= 255
      ? true
      : false;
  }
  return false;
};

module.exports = validateOptionalString;
