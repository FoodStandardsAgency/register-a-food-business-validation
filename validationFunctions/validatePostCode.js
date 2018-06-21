const { isPostalCode } = require("validator");

const validatePostCode = postcode => {
  if (typeof postcode === "string") {
    return isPostalCode(postcode, "GB") ? true : false;
  }
  return false;
};

module.exports = validatePostCode;
