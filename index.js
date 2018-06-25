const validateDeclaration = require("./validationFunctions/validateDeclaration");
const validateEmail = require("./validationFunctions/validateEmail");
const validateEstablishmentFirstLine = require("./validationFunctions/validateEstablishmentFirstLine");
const validateEstablishmentTradingName = require("./validationFunctions/validateEstablishmentTradingName");
const validateName = require("./validationFunctions/validateName");
const validatePhoneNumber = require("./validationFunctions/validatePhoneNumber");
const validatePhoneNumberOptional = require("./validationFunctions/validatePhoneNumberOptional");
const validatePostCode = require("./validationFunctions/validatePostCode");
const validateStreet = require("./validationFunctions/validateStreet");
const validateTown = require("./validationFunctions/validateTown");
const validateCompanyName = require("./validationFunctions/validateCompanyName");
const validateOperatorType = require("./validationFunctions/validateOperatorType");

module.exports = {
  validateDeclaration,
  validateEmail,
  validateEstablishmentFirstLine,
  validateEstablishmentTradingName,
  validateName,
  validatePhoneNumber,
  validatePhoneNumberOptional,
  validatePostCode,
  validateOperatorType,
  validateStreet,
  validateTown,
  validateCompanyName
};
