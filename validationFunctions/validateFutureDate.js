/**
 * Function for validating the validated date input is in the future
 * @module functions/validateFutureDate
 */

const moment = require("moment");
const validateDate = require("./validateDate");

const validateFutureDate = date => {
  if (validateDate(date)) {
    return (
      moment().isBefore(moment(date)) || moment().isSame(moment(date), "day")
    );
  }
  return false;
};

module.exports = validateFutureDate;
