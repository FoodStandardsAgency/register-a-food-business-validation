/**
 * Function for validating the date mandatory field
 * @module functions/validateDate
 */

const { isISO8601 } = require("validator");

/**
 * Runs custom validation on the date. The function first transforms the date to remove the dashes and adding '0' where needed. It wil then return true if it is in the valid ISO format. Anything else will return false as the field is mandatory.
 *
 * @param {string} date The text string of the date the user supplies
 *
 * @returns {boolean} It will return true if the string is valid and false if it is not valid
 */

const validateDate = date => {
  if (typeof date === "string") {
    const dateArray = date.split("-");
    if (dateArray[1] < 10 && dateArray[1].indexOf("0") === -1) {
      dateArray[1] = `0${dateArray[1]}`;
    }
    if (dateArray[2] < 10 && dateArray[2].indexOf("0") === -1) {
      dateArray[2] = `0${dateArray[2]}`;
    }
    const transformedDate = dateArray.join("-");
    return isISO8601(transformedDate);
  }
  return false;
};

module.exports = validateDate;
