const { isEmpty, trim } = require("validator");
const validBusinessTypes = require("../valid-business-types");

const validateBusinessType = type => {
  if (typeof type === "string") {
    if (isEmpty(trim(type))) {
      return false;
    }

    const indexOfFirstBracket = type.indexOf("(");
    const indexOfLastBracket = type.lastIndexOf(")");
    const textInBrackets = type.slice(
      indexOfFirstBracket,
      indexOfLastBracket + 1
    );
    const textWithoutBrackets = type.replace(textInBrackets, "");
    const matchesValidBusinessTypesList = validBusinessTypes.includes(
      trim(textWithoutBrackets)
    );

    return matchesValidBusinessTypesList ? true : false;
  }
  return false;
};

module.exports = validateBusinessType;
