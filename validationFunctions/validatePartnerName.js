/**
 * Function for validating the partner name mandatory field
 * @module functions/validatePartnerName
 */

const { isEmpty, trim } = require("validator");

/**
 * Runs custom validation on the partner name. It will be true if the input is a string less than 256 characters. Empty string will return false as the field is mandatory.
 *
 * @param {string} name The text string of the partner name the user supplies
 *
 * @returns {boolean} It will return true if the string is valid and false if it is not valid
 */

const validatePartnerName = name => {
  if (typeof name === "string") {
    if (isEmpty(trim(name))) {
      return false;
    }
    return name.length > 255 ? false : true;
  }
  return false;
};

module.exports = validatePartnerName;
