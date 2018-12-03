/**
 * Function for validating the post code mandatory field
 * @module functions/validatePostCode
 */

const { isPostalCode, trim } = require("validator");

const validatePostCode = postcode => {
  if (typeof postcode === "string") {
    const noWhiteSpacePostcode = trim(postcode);
    return isPostalCode(noWhiteSpacePostcode, "GB") ? true : false;
  }
  return false;
};

module.exports = validatePostCode;
