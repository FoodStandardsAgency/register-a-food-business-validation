/**
 * Function for validating the opening days irregular mandatory field
 * @module functions/validateOpeningDaysIrregular
 */

const { isEmpty, trim } = require("validator");

const validateOpeningDaysIrregular = text => {
  if (typeof text === "string") {
    if (isEmpty(trim(text))) {
      return false;
    }
    return text.length > 1500 ? false : true;
  }
  return false;
};

module.exports = validateOpeningDaysIrregular;
