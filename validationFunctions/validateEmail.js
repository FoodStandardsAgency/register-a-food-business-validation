/**
 * Function for validating the email mandatory field
 * @module functions/validateEmail
 */
const { isEmail, trim } = require("validator");

/**
 * Runs custom validation on the string email. It will be true if the input is a valid email address compliant with the validator npm package. Empty string will return false as the field is mandatory.
 *
 * @param {string} email The text string of the email the user supplies
 *
 * @returns {boolean} It will return true if the string is valid and false if it is not valid
 */

const validateEmail = email => {
  if (typeof email === "string") {
    const noWhiteSpaceEmail = trim(email);
    return isEmail(noWhiteSpaceEmail);
  }
  return false;
};

module.exports = validateEmail;
