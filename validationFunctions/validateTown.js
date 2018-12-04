/**
 * Function for validating the town optional field
 * @module functions/validateTown
 */

const { isAscii, isEmpty, trim } = require("validator");

/**
 * Runs custom validation on the town. It will be true if the input is an ASCII string. Empty string will return true as the field is optional.
 *
 * @param {string} town The text string of the town the user supplies
 *
 * @returns {boolean} It will return true if the string is valid and false if it is not valid
 */

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
