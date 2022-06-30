/**
 * Function for validating the opening day mandatory field
 * @module functions/validateOpeningDay
 */

/**
 * Runs custom validation on the opening day. It will be true if the input is either true or false. Empty input will also return false as the field is mandatory.
 *
 * @param {boolean} day The value of the day
 *
 * @returns {boolean} It will return true if the string is valid and false if it is not valid
 */

const validateOpeningDay = (day) => {
  if (day === true || day === false) {
    return true;
  }
  return false;
};

module.exports = validateOpeningDay;
