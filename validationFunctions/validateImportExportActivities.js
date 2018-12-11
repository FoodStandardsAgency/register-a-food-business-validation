/**
 * Function for validating the import export activities mandatory field
 * @module functions/validateImportExportActivities
 */

/**
 * Runs custom validation on the import and export activities. It will be true if the input is any of the allowed values("Directly import", "Directly export", "None", "Directly import and export"). Empty string will return false as the field is mandatory.
 *
 * @param {string} importExportActivities The text string of the import and export activities the user supplies
 *
 * @returns {boolean} It will return true if the string is valid and false if it is not valid
 */
const validateImportExportActivities = importExportActivities => {
  const allowedValues = [
    "Directly import",
    "Directly export",
    "None",
    "Directly import and export"
  ];

  if (allowedValues.includes(importExportActivities)) {
    return true;
  }
  return false;
};

module.exports = validateImportExportActivities;
