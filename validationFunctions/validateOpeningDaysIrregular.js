/**
 * Function for validating the opening days irregular mandatory field
 * @module functions/validateOpeningDaysIrregular
 */

const { isEmpty, trim } = require("validator");

/**
 * Runs custom validation on the irregular opening days. It will be true if the input is an ASCII string less than 1500 characters. Empty string will return false as the field is mandatory.
 *
 * @param {string} text The text string of the irregular opening days text field the user supplies
 *
 * @returns {boolean} It will return true if the string is valid and false if it is not valid
 */

const validateOpeningDaysIrregular = (text) => {
  if (typeof text === "string") {
    if (isEmpty(trim(text))) {
      return false;
    }
    return text.length > 1500 ? false : true;
  }
  return false;
};

module.exports = validateOpeningDaysIrregular;
