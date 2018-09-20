const { isEmpty, trim } = require("validator");

const validateBusinessOtherDetails = text => {
  if (typeof text === "string") {
    if (isEmpty(text)) {
      return true;
    }
    return text.length > 1500 ? false : true;
  }
  return false;
};

module.exports = validateBusinessOtherDetails;
