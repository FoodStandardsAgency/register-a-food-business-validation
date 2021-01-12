/**
 * Function for validating any optional string
 * @module functions/validateOptionalString
 */

const { isEmpty, trim } = require("validator");

/**
 * Runs custom validation on any optional string. It will be true if the input is less than 256 characters. Empty string will return true as the field is optional.
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
    return optionalString.length <= 255 ? true : false;
  }
  return false;
};

module.exports = validateOptionalString;
