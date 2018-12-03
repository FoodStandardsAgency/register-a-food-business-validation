/**
 * Function for validating the opening day mandatory field
 * @module functions/validateOpeningDay
 */

const validateOpeningDay = day => {
  if (day === true || day === false) {
    return true;
  }
  return false;
};

module.exports = validateOpeningDay;
