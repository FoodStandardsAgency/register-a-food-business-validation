const validateProcessingActivities = require("./validateProcessingActivities");
const {
  processingActivitiesEnum
} = require("../enums/processingActivitiesEnum");

describe("Function: validateProcessingActivities", () => {
  it("should return false when input is not an array", () => {
    // Arrange
    const badInputs = [null, undefined, {}, "", 123];

    // Act & Assert
    badInputs.forEach((input) => {
      const valid = validateProcessingActivities(input);
      expect(valid).toBe(false);
    });
  });

  it("should return false when input is an empty array", () => {
    // Arrange
    const input = [];

    // Act
    const valid = validateProcessingActivities(input);

    // Assert
    expect(valid).toBe(false);
  });

  it("should return false when 'NONE' or 'DONT_KNOW' are combined with other values", () => {
    // Arrange
    const badCombinations = [
      [processingActivitiesEnum.NONE.key, "VACUUM_PACKING"],
      [processingActivitiesEnum.DONT_KNOW.key, "SOUS_VIDE"],
      [
        processingActivitiesEnum.NONE.key,
        processingActivitiesEnum.DONT_KNOW.key,
        "VACUUM_PACKING"
      ]
    ];

    // Act & Assert
    badCombinations.forEach((combination) => {
      const valid = validateProcessingActivities(combination);
      expect(valid).toBe(false);
    });
  });

  it("should return true when 'NONE' or 'DONT_KNOW' are the only selected values", () => {
    // Arrange
    const invalidSelections = [
      [processingActivitiesEnum.NONE.key],
      [processingActivitiesEnum.DONT_KNOW.key]
    ];

    // Act & Assert
    invalidSelections.forEach((selection) => {
      const valid = validateProcessingActivities(selection);
      expect(valid).toBe(true);
    });
  });

  it("should return false if input contains invalid values", () => {
    // Arrange
    const invalidValues = [
      ["INVALID_VALUE"],
      ["VALID_VALUE", "ANOTHER_INVALID_VALUE"],
      ["ANOTHER_VALID_VALUE", "YET_ANOTHER_INVALID_VALUE"]
    ];

    // Act & Assert
    invalidValues.forEach((values) => {
      const valid = validateProcessingActivities(values);
      expect(valid).toBe(false);
    });
  });

  //NEED TO check how to do multiple

  it("should return true if input contains only valid values", () => {
    // Arrange
    const validValues = [
      ["VACUUM_PACKING"],
      ["SOUS_VIDE"],
      ["FERMENTING_OR_CURING"]
    ];

    // Act & Assert
    validValues.forEach((values) => {
      const valid = validateProcessingActivities(values);
      expect(valid).toBe(true);
    });
  });
});
