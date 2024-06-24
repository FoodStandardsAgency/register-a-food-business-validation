const validateDeclaration = require("./validationFunctions/validateDeclaration");
const validateEmail = require("./validationFunctions/validateEmail");
const validateEstablishmentTradingName = require("./validationFunctions/validateEstablishmentTradingName");
const validateEstablishmentType = require("./validationFunctions/validateEstablishmentType");
const validateName = require("./validationFunctions/validateName");
const validatePhoneNumber = require("./validationFunctions/validatePhoneNumber");
const validatePhoneNumberOptional = require("./validationFunctions/validatePhoneNumberOptional");
const validatePostCode = require("./validationFunctions/validatePostCode");
const validateOptionalString = require("./validationFunctions/validateOptionalString");
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
const validateBusinessScale = require("./validationFunctions/validateBusinessScale");
const validateFoodType = require("./validationFunctions/validateFoodType");
const validateProcessingActivities = require("./validationFunctions/validateProcessingActivities");
const validateImportExportActivities = require("./validationFunctions/validateImportExportActivities");
const validateBusinessOtherDetails = require("./validationFunctions/validateBusinessOtherDetails");
const validateOpeningDaysIrregular = require("./validationFunctions/validateOpeningDaysIrregular");
const validateOpeningDay = require("./validationFunctions/validateOpeningDay");
const validateOperatorType = require("./validationFunctions/validateOperatorType");
const validatePartners = require("./validationFunctions/validatePartners");
const validatePartnersHasPrimaryContact = require("./validationFunctions/validatePartnersHasPrimaryContact");
const validatePartnerIsPrimaryContact = require("./validationFunctions/validatePartnerIsPrimaryContact");
const validatePartnerName = require("./validationFunctions/validatePartnerName");
const validateWaterSupply = require("./validationFunctions/validateWaterSupply");
const validateOpeningHours = require("./validationFunctions/validateOpeningHours");
const validateMandatoryString = require("./validationFunctions/validateMandatoryString");
const validateFsaReferenceNumber = require("./validationFunctions/validateFsaRn");
const validateWebAddress = require("./validationFunctions/validateWebAddress");
const { businessTypeEnum } = require("./enums/businessTypeEnum.js");
const { operatorTypeEnum } = require("./enums/operatorTypeEnum.js");
const { establishmentTypeEnum } = require("./enums/establishmentTypeEnum.js");
const { customerTypeEnum } = require("./enums/customerTypeEnum.js");
const { importExportEnum } = require("./enums/importExportEnum.js");
const { waterSupplyEnum } = require("./enums/waterSupplyEnum.js");
const { businessScaleEnum } = require("./enums/businessScaleEnum.js");
const { foodTypeEnum } = require("./enums/foodTypeEnum.js");
const {
  processingActivitiesEnum
} = require("./enums/processingActivitiesEnum.js");

module.exports = {
  validateDeclaration,
  validateEmail,
  validateEstablishmentTradingName,
  validateEstablishmentType,
  validateName,
  validatePhoneNumber,
  validatePhoneNumberOptional,
  validatePostCode,
  validateRadioButtons,
  validateOptionalString,
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
  validateBusinessScale,
  validateFoodType,
  validateProcessingActivities,
  validateBusinessOtherDetails,
  validateOpeningDaysIrregular,
  validateOpeningDay,
  validateOperatorType,
  validatePartners,
  validatePartnersHasPrimaryContact,
  validatePartnerIsPrimaryContact,
  validatePartnerName,
  validateWaterSupply,
  validateOpeningHours,
  validateMandatoryString,
  validateFsaReferenceNumber,
  validateWebAddress,
  businessTypeEnum,
  operatorTypeEnum,
  establishmentTypeEnum,
  customerTypeEnum,
  importExportEnum,
  waterSupplyEnum,
  businessScaleEnum,
  foodTypeEnum,
  processingActivitiesEnum
};
