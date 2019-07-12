## Change Log

All notable changes to this project will be documented in this file.
This project adheres to [Semantic Versioning](http://semver.org/).

## v1.15.0 - 12 July 2019 (released)

- Added validateWaterSupply function

### Added

- Added validatePartnerName function

## v1.14.3 - 2nd May 2019 (released)

### Added

- Added validatePartnerName function

## v1.14.2 - 2nd May 2019 (released)

### Added

- Added validatePartnerIsPrimaryContact function
- Added JsDoc for the functions added in 1.14.0

### Modified

- Renamed validatePartnerPrimaryContact to validatePartnersHasPrimaryContact
- Modified validatePartnersHasPrimaryContact to include a check for array items length

## v1.14.1 - 29th March 2019 (released)

### Modified

- Exported functions added in 1.14.0

## v1.14.0 - 29th March 2019 (released)

### Added

- Added validatePartners and validatePartnerPrimaryContact

## v1.13.2 - 12th December 2018 (released)

### Modified

- Fixed bug where valid business types with excess whitespace would never pass validation

## v1.13.1 - 3rd October 2018 (released)

### Added

- Modified validateOpeningDay to export it

## v1.13.0 - 3rd October 2018 (released)

### Added

- Added validateOpeningDay

## v1.12.0 - 1st October 2018 (released)

### Added

- Added validateOpeningDaysIrregular

## v1.11.1 - 20th September 2018 (released)

### Modified

- Removed blank string test from validateBusinessOtherDetails

## v1.11.0 - 18th September 2018 (released)

### Added

- Added validateBusinessOtherDetails
  validateOpeningDaysIrregular

## v1.10.6 - 10th September 2018 (released)

### Modified

- Update to validatePhoneNumber

## v1.10.5 - 5th September 2018 (released)

### Modified

- Update to valid-business-type file

## v1.10.4 - 5th September 2018 (released)

### Modified

- Date validation to allow present date

## v1.10.3 - 4th September 2018 (released)

### Modified

- Date validation to allow single digits in month and date

## v1.10.2 - 4th September 2018 (released)

### Modified

- Added trim function to email and postcode to allow whitespaces in input

## v1.10.1 - 10th August 2018 (released)

### Modified

- Added require for validateImportExportActivities

## v1.10.0 - 10th August 2018 (released)

### Added

- Added validateImportExportActivities

## v1.9.1 - 7th August 2018 (released)

### Modified

- Add missing export of validateBusinessType

## v1.9.0 - 7th August 2018 (released)

### Added

- Added validateBusinessType

## v1.8.0 - 16th July 2018 (released)

### Added

- Added validatePastDate and validateFutureDate

## v1.7.0 - 16th July 2018 (released)

### Added

- Added validateDate

## v1.6.4 - 12th July 2018 (released)

### Modified

- Added export

## v1.6.3 - 12th July 2018 (released)

### Modified

- Modified name to match with tests

## v1.6.2 - 12th July 2018 (released)

### Modified

- Added missing export

## v1.6.1 - 12th July 2018 (released)

### Modified

- Modified validateStreet to validateOptionalString

## v1.6.0 - 11th July 2018 (released)

### Added

- Added validateCustomerType

## v1.5.3 - 2nd July 2018 (released)

### Modified

- Made charity number optional (accepts empty string)

## v1.5.2 - 2nd July 2018 (released)

### Modified

- Added missing export of validateCharityName

## v1.5.1 - 2nd July 2018 (released)

### Modified

- Fixed import of validateFirstLine

## v1.5.0 - 28th June 2018 (released)

### Added

- Added validateCharityName
- Added validateCharityNumber
- Modified name of validateEstablishmentFirstLine to validateFirstLine

## v1.4.1 - 26th June 2018 (released)

### Modified

- Changed operator type validator to make it re-usable for all radio buttons

## v1.4.0 - 25th June 2018 (released)

### Added

- Added validateCompaniesHouseNumber

## v1.3.0 - 25th June 2018 (released)

### Added

- Added validateOperatorType

## v1.2.1 - 22nd June 2018 (released)

### Modified

- Fixed incorrect import

## v1.2.0 - 22nd June 2018 (released)

### Added

- Added validateCompanyName

## v1.1.2 - 21st June 2018 (released)

### Modified

- Export postCode with capital C

## v1.1.1 - 21st June 2018 (released)

### Modified

- Exported all functions

## v1.1.0 - 21st June 2018 (released)

### Added

- Added all existing validation functions from register-a-food-business-front-end
