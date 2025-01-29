/**
 * Function for validating the trading names mandatory field
 * @module functions/validateTradingNames
 */

/**
 *  Runs custom validation on the partners array. It will be true if the supplied argument is an array having between 2 and 5 items with no duplicate partner values.
 *
 * @param {Object[]} tradingNames The list of partners supplied by the user
 *
 * @returns {boolean} It will return true if the argument is an array maximum of 10 items with no duplicate partner values, false otherwise.
 */

const validateTradingNames = (tradingNames) => {
  if (Array.isArray(tradingNames)) {
    var uniqueTradingNames = new Set(tradingNames);
    if (
      tradingNames.length >= 1 &&
      tradingNames.length <= 10 &&
      uniqueTradingNames.size === tradingNames.length
    ) {
      return true;
    }
  }
  return false;
};

module.exports = validateTradingNames;
