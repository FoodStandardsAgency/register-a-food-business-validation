const { isAscii, isEmpty, trim } = require("validator");

const validateStreet = street => {
  if (typeof street === "string") {
    if (isEmpty(street)) {
      return true;
    }
    if (isEmpty(trim(street))) {
      return false;
    }
    return isAscii(street) ? true : false;
  }
  return false;
};

module.exports = validateStreet;
