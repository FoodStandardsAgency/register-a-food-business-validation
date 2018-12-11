/**
 * Function for validating the phone number optional field
 * @module functions/validatePhoneNumberOptional
 */

const { isEmpty } = require("validator");
const validatePhoneNumber = require("./validatePhoneNumber");

/**
 * Runs custom validation on the string of an optional phone number. It will be true if the input passes the same criteria set by validatePhoneNumber. Empty string will also return true as the field is optional.
 *
 * @param {string} phoneNumber The text string of an optional phone number the user supplies
 *
 * @returns {boolean} It will return true if the string is valid and false if it is not valid
 */

const validatePhoneNumberOptional = phoneNumber => {
  if (typeof phoneNumber === "string") {
    if (isEmpty(phoneNumber)) {
      return true;
    }
    return validatePhoneNumber(phoneNumber);
  }
  return false;
};

module.exports = validatePhoneNumberOptional;
