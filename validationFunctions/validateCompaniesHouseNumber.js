/**
 * Function for validating the charity name mandatory field
 * @module functions/validateCharityName
 */

const { isEmpty, trim, isAlphanumeric, isNumeric } = require("validator");

const validateCompaniesHouseNumber = chNumber => {
  if (typeof chNumber === "string") {
    const noWhiteSpaceNumber = trim(chNumber);
    if (isEmpty(noWhiteSpaceNumber)) {
      return false;
    }
    if (noWhiteSpaceNumber.length !== 8) {
      return false;
    }
    if (isAlphanumeric(noWhiteSpaceNumber, "en-GB") === false) {
      return false;
    }
    if (isNumeric(noWhiteSpaceNumber.substring(2)) === false) {
      return false;
    }
    return true;
  }
  return false;
};

module.exports = validateCompaniesHouseNumber;
