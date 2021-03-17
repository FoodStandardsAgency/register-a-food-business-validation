/**
 * Function for validating the web address optional field
 * @module functions/validateWebAddress
 */
const { isURL, trim } = require("validator");

/**
 * Runs custom validation on the string web address. It will be true if the input is less than 256 characters. It will be true if the input is a valid web address compliant with the validator npm package.
 *
 * @param {string} webAddress The text string of the web address the user supplies
 *
 * @returns {boolean} It will return true if the string is valid and false if it is not valid
 */

const validateWebAddress = webAddress => {
  if (typeof webAddress === "string") {
    if (webAddress.length <= 255) {
      const noWhiteSpaceWebAddress = trim(webAddress);
      return isURL(noWhiteSpaceWebAddress);
    }
    return false;
  }
};

module.exports = validateWebAddress;
