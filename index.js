const validateDeclaration = require("./validationFunctions/validateDeclaration");
const validateEmail = require("./validationFunctions/validateEmail");
const validateFirstLine = require("./validationFunctions/validateFirstLine");
const validateEstablishmentTradingName = require("./validationFunctions/validateEstablishmentTradingName");
const validateName = require("./validationFunctions/validateName");
const validatePhoneNumber = require("./validationFunctions/validatePhoneNumber");
const validatePhoneNumberOptional = require("./validationFunctions/validatePhoneNumberOptional");
const validatePostCode = require("./validationFunctions/validatePostCode");
const validateOptionalString = require("./validationFunctions/validateOptionalString");
const validateTown = require("./validationFunctions/validateTown");
const validateCompanyName = require("./validationFunctions/validateCompanyName");
const validateRadioButtons = require("./validationFunctions/validateRadioButtons");
const validateCompaniesHouseNumber = require("./validationFunctions/validateCompaniesHouseNumber");
const validateCharityNumber = require("./validationFunctions/validateCharityNumber");
const validateCharityName = require("./validationFunctions/validateCharityName");
const validateCustomerType = require("./validationFunctions/validateCustomerType");
const validateDate = require("./validationFunctions/validateDate");
const validatePastDate = require("./validationFunctions/validatePastDate");
const validateFutureDate = require("./validationFunctions/validateFutureDate");
const validateBusinessType = require("./validationFunctions/validateBusinessType");
const validateImportExportActivities = require("./validationFunctions/validateImportExportActivities");
const validateBusinessOtherDetails = require("./validationFunctions/validateBusinessOtherDetails");
const validateOpeningDaysIrregular = require("./validationFunctions/validateOpeningDaysIrregular");
const validateOpeningDay = require("./validationFunctions/validateOpeningDay");
const validatePartners = require("./validationFunctions/validatePartners");
const validatePartnerPrimaryContact = require("./validationFunctions/validatePartnerPrimaryContact");

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
  validateOptionalString,
  validateTown,
  validateCompanyName,
  validateCompaniesHouseNumber,
  validateCharityNumber,
  validateCharityName,
  validateCustomerType,
  validateDate,
  validatePastDate,
  validateFutureDate,
  validateImportExportActivities,
  validateBusinessType,
  validateBusinessOtherDetails,
  validateOpeningDaysIrregular,
  validateOpeningDay,
  validatePartners,
  validatePartnerPrimaryContact
};
