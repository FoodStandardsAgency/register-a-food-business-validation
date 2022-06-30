/**
 * Function for validating the establishment type mandatory field
 * @module functions/validateEstablishmentType
 */

const { establishmentTypeEnum } = require("../enums/establishmentTypeEnum");

/**
 * Runs custom validation on the establishment type. It will be true if the input is a valid establishment type enum key.
 *
 * @param {string} establishmentType The text string of the type
 *
 * @returns {boolean} It will return true if the string is valid and false if it is not valid
 */

const validateEstablishmentType = (establishmentType) => {
  return establishmentTypeEnum[establishmentType] ? true : false;
};

module.exports = validateEstablishmentType;
