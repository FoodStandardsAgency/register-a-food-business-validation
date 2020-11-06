/**
 * Function for validating the water supply mandatory field
 * @module functions/validateWaterSupply
 */

const { waterSupplyEnum } = require("../enums/waterSupplyEnum");

/**
 * Runs custom validation on the water supply. It will be true if the input is any of the allowed values("Private", "Public", "Public and private"). Empty string will return false as the field is mandatory.
 *
 * @param {string} waterSupply The text string of water supply
 *
 * @returns {boolean} It will return true if the string is valid and false if it is not valid
 */
const validateWaterSupply = waterSupply => {
  return waterSupplyEnum[waterSupply] ? true : false;
};

module.exports = validateWaterSupply;
