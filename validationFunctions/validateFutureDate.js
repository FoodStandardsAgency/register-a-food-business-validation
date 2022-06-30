/**
 * Function for validating the validated date input is in the future
 * @module functions/validateFutureDate
 */

const moment = require("moment");
const validateDate = require("./validateDate");

/**
 * Runs custom validation on the date to check if it is in the future. It will be true if the input is after or on the current day. The current day is calculated using the npm package moment. Anything else will return false as the field is mandatory.
 *
 * @param {string} date The text string of the first line of the date the user supplies
 *
 * @returns {boolean} It will return true if the string is valid and false if it is not valid
 */

const validateFutureDate = (date) => {
  if (validateDate(date)) {
    return (
      moment().isBefore(moment(date)) || moment().isSame(moment(date), "day")
    );
  }
  return false;
};

module.exports = validateFutureDate;
