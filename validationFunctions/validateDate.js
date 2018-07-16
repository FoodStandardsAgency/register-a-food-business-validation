const { isISO8601 } = require("validator");

const validateDate = date => {
  if (typeof date === "string") {
    return isISO8601(date);
  }
  return false;
};

module.exports = validateDate;
