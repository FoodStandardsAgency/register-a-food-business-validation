const { isEmpty, trim } = require("validator");

const validateCompanyName = name => {
  if (typeof name === "string") {
    if (isEmpty(trim(name))) {
      return false;
    }
    return name.length > 50 ? false : true;
  }
  return false;
};

module.exports = validateCompanyName;
