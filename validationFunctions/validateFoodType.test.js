const validateFoodType = require("./validateFoodType");
const { foodTypeEnum } = require("../enums/foodTypeEnum");

describe("Function: validateFoodType", () => {
  it("should return false when input is not an array", () => {
    // Arrange
    const badInputs = [null, undefined, {}, "", 123];

    // Act & Assert
    badInputs.forEach((input) => {
      const valid = validateFoodType(input);
      expect(valid).toBe(false);
    });
  });

  it("should return false when input is an empty array", () => {
    // Arrange
    const input = [];

    // Act
    const valid = validateFoodType(input);

    // Assert
    expect(valid).toBe(false);
  });

  it("should return false when 'NONE' or 'DONT_KNOW' are combined with other values", () => {
    // Arrange
    const badCombinations = [
      ["NONE", "RAW_MEAT_FISH_SHELLFISH"],
      ["DONT_KNOW", "READY_TO_EAT"],
      ["NONE", "DONT_KNOW", "COOKED_OR_REHEATED"]
    ];

    // Act & Assert
    badCombinations.forEach((combination) => {
      const valid = validateFoodType(combination);
      expect(valid).toBe(false);
    });
  });

  it("should return true when 'NONE' or 'DONT_KNOW' are the only selected values", () => {
    // Arrange
    const invalidSelections = [["NONE"], ["DONT_KNOW"]];

    // Act & Assert
    invalidSelections.forEach((selection) => {
      const valid = validateFoodType(selection);
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
      const valid = validateFoodType(values);
      expect(valid).toBe(false);
    });
  });

  it("should return true if input contains only valid values", () => {
    // Arrange
    const validValues = [
      ["RAW_MEAT_FISH_SHELLFISH", "READY_TO_EAT"],
      ["READY_TO_EAT", "IMPORTED"],
      [
        "RAW_MEAT_FISH_SHELLFISH",
        "READY_TO_EAT",
        "COOKED_OR_REHEATED",
        "IMPORTED"
      ]
    ];

    // Act & Assert
    validValues.forEach((values) => {
      const valid = validateFoodType(values);
      expect(valid).toBe(true);
    });
  });
});
