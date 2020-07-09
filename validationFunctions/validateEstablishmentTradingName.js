/**
 * Function for validating the establishment trading name mandatory field
 * @module functions/validateEstablishmentTradingName
 */

const { isEmpty, trim } = require("validator");

/**
 * Runs custom validation on the string trading name. It will be true if the input is less than 256 characters. Empty string will return false as the field is mandatory.
 *
 * @param {string} tradingName The text string of the establishment trading name the user supplies
 *
 * @returns {boolean} It will return true if the string is valid and false if it is not valid
 */

const validateEstablishmentTradingName = tradingName => {
  if (typeof tradingName === "string") {
    if (isEmpty(trim(tradingName))) {
      return false;
    }
    return tradingName.length <= 255 ? true : false;
  }
  return false;
};

module.exports = validateEstablishmentTradingName;
