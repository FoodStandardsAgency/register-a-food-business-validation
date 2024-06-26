/**
 * Function for validating the business type mandatory field
 * @module functions/validateBusinessType
 */

const { isEmpty, trim } = require("validator");
const { businessTypeEnum } = require("../enums/businessTypeEnum");

/**
 * Runs custom validation on the string business type. It will be true if the input matches a business type in the validBusinessTypes list. Empty string will return false as the field is mandatory.
 *
 * @param {string} type The text string of the business type the user supplies
 *
 * @returns {boolean} It will return true if the string is valid and false if it is not valid
 */

const validateBusinessType = (type) => {
  if (typeof type === "string") {
    if (isEmpty(trim(type))) {
      return false;
    }

    return businessTypeEnum[trim(type)] ? true : false;
  }
  return false;
};

module.exports = validateBusinessType;
