/**
 * Function for validating the name mandatory field
 * @module functions/validateName
 */

const { isEmpty, trim } = require("validator");

/**
 * Runs custom validation on the name. It will be true if the input is an ASCII string. Empty string will return false as the field is mandatory.
 *
 * @param {string} name The text string of the name the user supplies
 *
 * @returns {boolean} It will return true if the string is valid and false if it is not valid
 */

const validateName = name => {
  if (typeof name === "string") {
    if (isEmpty(trim(name))) {
      return false;
    }
    return name.length <= 255 ? true : false;
  }
  return false;
};

module.exports = validateName;
