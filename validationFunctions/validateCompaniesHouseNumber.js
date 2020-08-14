/**
 * Function for validating the companies house number mandatory field
 * @module functions/validateCompaniesHouseNumber
 */

const { isEmpty, trim, isAlphanumeric, isNumeric } = require("validator");

/**
 * Runs custom validation on the string companies house number. It will be true if the input is an alphanumeric string of length 8 characters, with the first two characters beig alphabetic and the last 6 being numeric. Empty string will return false as the field is mandatory.
 *
 * @param {string} chNumber The string of the companies house number the user supplies
 *
 * @returns {boolean} It will return true if the string is valid and false if it is not valid
 */

const validateCompaniesHouseNumber = chNumber => {
  if (typeof chNumber === "string") {
    const noWhiteSpaceNumber = trim(chNumber);
    if (isEmpty(noWhiteSpaceNumber)) {
      return false;
    }
    if (noWhiteSpaceNumber.length !== 8) {
      return false;
    }
    if (isAlphanumeric(noWhiteSpaceNumber, "en-GB") === false) {
      return false;
    }
    return true;
  }
  return false;
};

module.exports = validateCompaniesHouseNumber;
