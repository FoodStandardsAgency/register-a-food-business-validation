/**
 * Function for validating a validated date to check if its in the past
 * @module functions/validatePastDate
 */

const moment = require("moment");
const validateDate = require("./validateDate");

/**
 * Runs custom validation on the date to check if it is in the past. It will be true if the input is before or on the current day. The current day is calculated using the npm package moment. Anything else will return false as the field is mandatory.
 *
 * @param {string} date The text string of the date the user supplies
 *
 * @returns {boolean} It will return true if the string is valid and false if it is not valid
 */

const validatePastDate = date => {
  if (validateDate(date)) {
    return (
      moment(date).isBefore(moment()) || moment().isSame(moment(date), "day")
    );
  }
  return false;
};

module.exports = validatePastDate;
