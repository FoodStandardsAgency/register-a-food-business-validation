/**
 * Function for validating the trading names
 * @module functions/validateTradingNames
 */

/**
 *  Runs custom validation on the tradingNames array. It will be true if the supplied argument is an array having between 0 and 10 items with no duplicate trading name values.
 *
 * @param {Object[]} tradingNames The list of additional trading names supplied by the user
 *
 * @returns {boolean} It will return true if the argument is an array maximum of 10 items with no duplicate trading names values, false otherwise.
 */

const validateTradingNames = (tradingNames) => {
  if (Array.isArray(tradingNames)) {
    var uniqueTradingNames = new Set(tradingNames);
    if (
      tradingNames.length <= 10 &&
      uniqueTradingNames.size === tradingNames.length
    ) {
      return true;
    }
  }
  return false;
};

module.exports = validateTradingNames;
