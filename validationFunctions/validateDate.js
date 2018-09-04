const { isISO8601 } = require("validator");

const validateDate = date => {
  if (typeof date === "string") {
    dateArray = date.split("-");
    console.log(dateArray);
    if (dateArray[1] < 10 && dateArray[1].indexOf("0") === -1) {
      dateArray[1] = `0${dateArray[1]}`;
    }
    if (dateArray[2] < 10 && dateArray[2].indexOf("0") === -1) {
      dateArray[2] = `0${dateArray[2]}`;
    }
    transformedDate = dateArray.join("-");
    console.log(transformedDate);
    return isISO8601(transformedDate);
  }
  return false;
};

module.exports = validateDate;
