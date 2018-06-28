const { isEmpty, trim, isAlphanumeric, blacklist } = require("validator");

const validateCharityNumber = charityNumber => {
    if (typeof charityNumber === "string") {
        const charityNumberNoDash = blacklist(charityNumber, '-');
        const noWhiteSpaceCharityNumber = trim(charityNumberNoDash);
        if (isEmpty(noWhiteSpaceCharityNumber)) {
            return false;
        }
        if (noWhiteSpaceCharityNumber.length > 8 || noWhiteSpaceCharityNumber.length < 6) {
            return false;
        }
        if (isAlphanumeric(noWhiteSpaceCharityNumber, "en-GB") === false) {
            return false;
        }
        return true;
    }
    return false;
};

module.exports = validateCharityNumber;
