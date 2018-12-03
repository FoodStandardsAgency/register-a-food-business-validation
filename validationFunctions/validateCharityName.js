/**
 * Function for validating the charity name mandatory field
 * @module functions/validateCharityName
 */

const { isEmpty, trim } = require("validator");

const validateCharityName = name => {
  if (typeof name === "string") {
    if (isEmpty(trim(name))) {
      return false;
    }
    return name.length > 50 ? false : true;
  }
  return false;
};

module.exports = validateCharityName;
