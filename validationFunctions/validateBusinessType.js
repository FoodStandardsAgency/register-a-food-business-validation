const { isEmpty, trim } = require("validator");
const validBusinessTypes = require("../valid-business-types.json");

const validateBusinessType = type => {
  if (typeof type === "string") {
    if (isEmpty(trim(type))) {
      return false;
    }

    const matchesValidBusinessTypesList = validBusinessTypes.includes(
      trim(type)
    );

    return matchesValidBusinessTypesList;
  }
  return false;
};

module.exports = validateBusinessType;
