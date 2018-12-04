/**
 * Function for validating the post code mandatory field
 * @module functions/validatePostCode
 */

const { isPostalCode, trim } = require("validator");
/**
 * Runs custom validation on the postcode. It will be true if the input is a valid great britain postcode compliant with the validator npm package. Empty string will also return false as the field is mandatory.
 *
 * @param {string} postcode The text string of the postcode the user supplies
 *
 * @returns {boolean} It will return true if the string is valid and false if it is not valid
 */

const validatePostCode = postcode => {
  if (typeof postcode === "string") {
    const noWhiteSpacePostcode = trim(postcode);
    return isPostalCode(noWhiteSpacePostcode, "GB") ? true : false;
  }
  return false;
};

module.exports = validatePostCode;
