const validateDeclaration = require("./validationFunctions/validateDeclaration");
const validateEmail = require("./validationFunctions/validateEmail");
const validateFirstLine = require("./validationFunctions/validateEstablishmentFirstLine");
const validateEstablishmentTradingName = require("./validationFunctions/validateEstablishmentTradingName");
const validateName = require("./validationFunctions/validateName");
const validatePhoneNumber = require("./validationFunctions/validatePhoneNumber");
const validatePhoneNumberOptional = require("./validationFunctions/validatePhoneNumberOptional");
const validatePostCode = require("./validationFunctions/validatePostCode");
const validateStreet = require("./validationFunctions/validateStreet");
const validateTown = require("./validationFunctions/validateTown");
const validateCompanyName = require("./validationFunctions/validateCompanyName");
const validateRadioButtons = require("./validationFunctions/validateRadioButtons");
const validateCompaniesHouseNumber = require("./validationFunctions/validateCompaniesHouseNumber");
const validateCharityNumber = require("./validationFunctions/validateCharityNumber");

module.exports = {
  validateDeclaration,
  validateEmail,
  validateFirstLine,
  validateEstablishmentTradingName,
  validateName,
  validatePhoneNumber,
  validatePhoneNumberOptional,
  validatePostCode,
  validateRadioButtons,
  validateStreet,
  validateTown,
  validateCompanyName,
  validateCompaniesHouseNumber,
  validateCharityNumber
};
