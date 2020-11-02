/**
 * Function for validating the company name mandatory field
 * @module functions/validateCompanyName
 */

const { isEmpty, trim } = require("validator");

/**
 * Runs custom validation on the companies name. It will be true if the input is string of length less than 256 characters. Empty string will return false as the field is mandatory.
 *
 * @param {string} name The text string of the companies name the user supplies
 *
 * @returns {boolean} It will return true if the string is valid and false if it is not valid
 */

const validateCompanyName = name => {
  if (typeof name === "string") {
    if (isEmpty(trim(name))) {
      return false;
    }
    return name.length > 255 ? false : true;
  }
  return false;
};

module.exports = validateCompanyName;
