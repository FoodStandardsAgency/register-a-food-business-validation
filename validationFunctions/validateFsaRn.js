/**
 * Function for validating the FSA reference number optional field
 * @module functions/validateFsaRn
 */

const { isEmpty } = require("validator");

/**
 * Runs custom validation on the string FSA reference number.
 * It will be true if the input is a string matching the regular expression format or empty.
 *
 * @param {string} fsarn The text string of the FSA reference number the user supplies
 *
 * @returns {boolean} It will return true if the string is valid and false if it is not valid
 */

const validateFsaReferenceNumber = (fsarn) => {
  if (typeof fsarn === "string") {
    if (isEmpty(fsarn)) {
      return true;
    }

    var regex = new RegExp("[A-Z0-9]{6}-[A-Z0-9]{6}-[A-Z0-9]{6}", "g");
    if (regex.test(fsarn)) {
      return true;
    }
  }

  return false;
};

module.exports = validateFsaReferenceNumber;
