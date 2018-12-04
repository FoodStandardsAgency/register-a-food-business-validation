/**
 * Function for validating the first line of address mandatory field
 * @module functions/validateFirstLine
 */

const { isAscii, isEmpty, trim } = require("validator");

/**
 * Runs custom validation on the first line of the address. It will be true if the input is an ASCII string. Empty string will return false as the field is mandatory.
 *
 * @param {string} firstLine The text string of the first line of the address the user supplies
 *
 * @returns {boolean} It will return true if the string is valid and false if it is not valid
 */

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
