const { isAscii, isEmpty, trim } = require("validator");

const validateEstablishmentTradingName = tradingName => {
  if (typeof tradingName === "string") {
    if (isEmpty(trim(tradingName))) return false;
    return isAscii(tradingName) ? true : false;
  }
  return false;
};

module.exports = validateEstablishmentTradingName;