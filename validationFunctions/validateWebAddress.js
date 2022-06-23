/**
 * Function for validating the web address optional string
 * @module functions/validateWebAddress
 */
const { isURL, trim, isEmpty } = require("validator");

/**
 * Runs custom validation on the string web address. It will be true if the input is less than 256 characters. It will be true if the input is a valid web address compliant with the validator npm package. Empty string will return true as the field is optional.
 *
 * @param {string} webAddress The text string of the web address the user supplies
 *
 * @returns {boolean} It will return true if the string is valid and false if it is not valid
 */

const validateWebAddress = (webAddress) => {
  if (typeof webAddress === "string") {
    if (isEmpty(webAddress)) {
      return true;
    }
    if (webAddress.length <= 255) {
      const noWhiteSpaceWebAddress = trim(webAddress);
      if (isEmpty(noWhiteSpaceWebAddress)) {
        return false;
      }
      return isURL(noWhiteSpaceWebAddress);
    }
    return false;
  }
};

module.exports = validateWebAddress;
