/**
 * Function for validating the email mandatory field
 * @module functions/validateEmail
 */
const { isEmail, trim } = require("validator");

/**
 * Runs custom validation on the string email. It will be true if the input is less than 256 characters. It will be true if the input is a valid email address compliant with the validator npm package. Empty string will return false as the field is mandatory.
 *
 * @param {string} email The text string of the email the user supplies
 *
 * @returns {boolean} It will return true if the string is valid and false if it is not valid
 */

const validateEmail = (email) => {
  if (typeof email === "string") {
    if (email.length <= 255) {
      const noWhiteSpaceEmail = trim(email);
      return isEmail(noWhiteSpaceEmail, { allow_utf8_local_part: false });
    }
  }
  return false;
};

module.exports = validateEmail;
