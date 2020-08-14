/**
 * Function for validating the phone number mandatory field
 * @module functions/validatePhoneNumber
 */

const { isNumeric } = require("validator");

/**
 * Runs custom validation on the string phone number. The input is first transformed to remove any spaces and concatenates the '+' if it has one. It will be true if the input is a numeric string of length, between, 5 and 20 characters. Empty string will also return false as the field is mandatory.
 *
 * @param {string} phoneNumber The text string of the phone number the user supplies
 *
 * @returns {boolean} It will return true if the string is valid and false if it is not valid
 */

const validatePhoneNumber = phoneNumber => {
  if (typeof phoneNumber === "string") {
    phoneNumber = phoneNumber.split(" ").join("");
    if (phoneNumber.startsWith("+")) {
      phoneNumber = phoneNumber.substring(1);
    }
    if (phoneNumber.length >= 5 && phoneNumber.length <= 20) {
      return isNumeric(phoneNumber) ? true : false;
    }
  }
  return false;
};

module.exports = validatePhoneNumber;
