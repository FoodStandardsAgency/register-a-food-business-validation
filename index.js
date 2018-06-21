const validateDeclaration = require("./validationFunctions/validateDeclaration");
const validateEmail = require("./validationFunctions/validateEmail");
const validateEstablishmentFirstLine = require("./validationFunctions/validateEstablishmentFirstLine");
const validateEstablishmentTradingName = require("./validationFunctions/validateEstablishmentTradingName");
const validateName = require("./validationFunctions/validateName");
const validatePhoneNumber = require("./validationFunctions/validatePhoneNumber");
const validatePhoneNumberOptional = require("./validationFunctions/validatePhoneNumberOptional");
const validatePostcode = require("./validationFunctions/validatePostcode");
const validateStreet = require("./validationFunctions/validateStreet");
const validateTown = require("./validationFunctions/validateTown");

module.exports = {
  validateDeclaration,
  validateEmail,
  validateEstablishmentFirstLine,
  validateEstablishmentTradingName,
  validateName,
  validatePhoneNumber,
  validatePhoneNumberOptional,
  validatePostcode,
  validateStreet,
  validateTown
};
