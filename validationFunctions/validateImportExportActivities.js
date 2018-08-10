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
