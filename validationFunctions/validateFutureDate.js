const moment = require("moment");
const validateDate = require("./validateDate");

const validateFutureDate = date => {
  if (validateDate(date)) {
    return moment().isBefore(moment(date));
  }
  return false;
};

module.exports = validateFutureDate;
