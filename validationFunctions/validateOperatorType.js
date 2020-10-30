/**
 * Function for validating the operator type mandatory field
 * @module functions/validateOperatorType
 */

const { OperatorTypeEnum } = require("../enums");

/**
 * Runs custom validation on the operator type. It will be true if the input is a valid operator type enum key.
 *
 * @param {string} operatorType The text string of the operator type
 *
 * @returns {boolean} It will return true if the string is valid and false if it is not valid
 */

const validateOperatorType = operatorType => {
  return OperatorTypeEnum[operatorType] ? true : false;
};

module.exports = validateOperatorType;
