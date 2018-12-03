/**
 * Function for validating the phone number optional field
 * @module functions/validatePhoneNumberOptional
 */

const { isEmpty } = require("validator");
const validatePhoneNumber = require("./validatePhoneNumber");

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
