/**
 * Function for validating the date mandatory field
 * @module functions/validateDate
 */

const { isISO8601 } = require("validator");

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
