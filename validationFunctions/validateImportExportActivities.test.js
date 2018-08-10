const validateImportExportActivities = require("./validateImportExportActivities");

describe("Function: validateImportExportActivities", () => {
  it("should return true when type is one of the three allowed types", () => {
    // Arrange
    const allowedImportExportActivities = [
      "Directly import",
      "Directly export",
      "None",
      "Directly import and export"
    ];

    // Act
    allowedImportExportActivities.forEach(importExportActivities => {
      // Assert
      const valid = validateImportExportActivities(importExportActivities);
      expect(valid).toBe(true);
    });
  });

  it("should return false when type is not one of the three allowed types", () => {
    // Arrange
    const notAllowedImportExportActivities = [
      "",
      undefined,
      "438574hfeuhgjhgk"
    ];

    // Act
    notAllowedImportExportActivities.forEach(notImportExportActivitiesType => {
      // Assert
      const valid = validateImportExportActivities(
        notImportExportActivitiesType
      );
      expect(valid).toBe(false);
    });
  });
});
