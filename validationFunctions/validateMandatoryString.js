/**
 * Function for validating any mandatory string
 * @module functions/validateMandatoryString
 */

const { isEmpty, trim } = require("validator");

/**
 * Runs custom validation on any optional string. It will be true if the input is less than 256 characters. Empty string will return false as the field is mandatory.
 *
 * @param {string} optionalString The text string the user supplies
 *
 * @returns {boolean} It will return true if the string is valid and false if it is not valid
 */

const validateMandatoryString = (mandatoryString) => {
  if (typeof mandatoryString === "string") {
    if (isEmpty(mandatoryString)) {
      return false;
    }
    if (isEmpty(trim(mandatoryString))) {
      return false;
    }
    return mandatoryString.length <= 255 ? true : false;
  }
  return false;
};

module.exports = validateMandatoryString;
