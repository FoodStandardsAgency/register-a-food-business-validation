const { isEmpty, trim, isAlphanumeric, blacklist } = require("validator");

const validateCharityNumber = charityNumber => {
  if (typeof charityNumber === "string") {
    if (charityNumber === "") {
      return true;
    }
    const noWhiteSpaceCharityNumber = trim(charityNumber);
    if (isEmpty(noWhiteSpaceCharityNumber)) {
      return false;
    }
    if (
      noWhiteSpaceCharityNumber.length > 8 ||
      noWhiteSpaceCharityNumber.length < 6
    ) {
      return false;
    }
    if (
      (noWhiteSpaceCharityNumber.match(new RegExp("-", "g")) || []).length > 1
    ) {
      return false;
    }
    const charityNumberNoDash = blacklist(noWhiteSpaceCharityNumber, "-");
    if (isAlphanumeric(charityNumberNoDash, "en-GB") === false) {
      return false;
    }
    return true;
  }
  return false;
};

module.exports = validateCharityNumber;
