const { isNumeric } = require("validator");

const validatePhoneNumber = phoneNumber => {
  if (typeof phoneNumber === "string") {
    phoneNumber = phoneNumber.split(" ").join("");
    if (phoneNumber.startsWith("+")) {
      phoneNumber = phoneNumber.substring(1);
    }
    if (phoneNumber.length > 5 && phoneNumber.length < 20) {
      return isNumeric(phoneNumber) ? true : false;
    }
  }
  return false;
};

module.exports = validatePhoneNumber;
