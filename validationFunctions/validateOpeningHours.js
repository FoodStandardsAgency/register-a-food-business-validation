/**
 * Function for validating the opening hours field
 * @module functions/validateOpeningHours
 */

const { isEmpty, trim } = require("validator");

/**
 * Runs custom validation on the opening hours field. It will be true if the input is a string less than 51 characters. Empty string will return false as the field is mandatory.
 *
 * @param {string} openingHours The text string of the opening hours the user supplies
 *
 * @returns {boolean} It will return true if the string is valid and false if it is not valid
 */

const validateOpeningHours = openingHours => {
  if (typeof openingHours === "string") {
    if (isEmpty(trim(openingHours))) {
      return false;
    }
    return openingHours.length > 50 ? false : true;
  }
  return false;
};

module.exports = validateOpeningHours;
