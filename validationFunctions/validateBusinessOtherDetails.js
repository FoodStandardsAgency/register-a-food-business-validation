/**
 * Function for validating the business other details optional field
 * @module functions/validateBusinessOtherDetails
 */

const { isEmpty } = require("validator");

/**
 * Runs custom validation on the string business other details. It will be true if the input is a string that is less than 1500 characters. Empty string will also return true as the field is optional.
 *
 * @param {string} text The text string of the business other details the user supplies
 *
 * @returns {boolean} It will return true if the string is valid and false if it is not valid
 */

const validateBusinessOtherDetails = text => {
  if (typeof text === "string") {
    if (isEmpty(text)) {
      return true;
    }
    return text.length > 1500 ? false : true;
  }
  return false;
};

module.exports = validateBusinessOtherDetails;
