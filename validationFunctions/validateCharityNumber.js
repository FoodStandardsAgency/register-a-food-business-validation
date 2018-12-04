/**
 * Function for validating the charity number mandatory field
 * @module functions/validateCharityNumber
 */

const { isEmpty, trim, isAlphanumeric, blacklist } = require("validator");

/**
 * Runs custom validation on the string charity number. After dashes are removed, it will be true if the input is an alphanumeric string of length 6 to 8 characters . Empty string will return false as the field is mandatory.
 *
 * @param {string} charityNumber The text string of the charity number the user supplies
 *
 * @returns {boolean} It will return true if the string is valid and false if it is not valid
 */

const validateCharityNumber = charityNumber => {
  if (typeof charityNumber === "string") {
    if (charityNumber === "") {
      return true;
    }
    const noWhiteSpaceCharityNumber = trim(charityNumber);
    if (isEmpty(noWhiteSpaceCharityNumber)) {
      return false;
    }
    if (
      noWhiteSpaceCharityNumber.length > 8 ||
      noWhiteSpaceCharityNumber.length < 6
    ) {
      return false;
    }
    if (
      (noWhiteSpaceCharityNumber.match(new RegExp("-", "g")) || []).length > 1
    ) {
      return false;
    }
    const charityNumberNoDash = blacklist(noWhiteSpaceCharityNumber, "-");
    if (isAlphanumeric(charityNumberNoDash, "en-GB") === false) {
      return false;
    }
    return true;
  }
  return false;
};

module.exports = validateCharityNumber;
