const validateBusinessScale = require("./validateBusinessScale");
const { businessScaleEnum } = require("../enums/businessScaleEnum");

describe("Function: validateBusinessScale", () => {
  it("should return false when input is not an array", () => {
    // Arrange
    const badInputs = [null, undefined, {}, "", 123];

    // Act & Assert
    badInputs.forEach((input) => {
      const valid = validateBusinessScale(input);
      expect(valid).toBe(false);
    });
  });

  it("should return false when input is an empty array", () => {
    // Arrange
    const input = [];

    // Act
    const valid = validateBusinessScale(input);

    // Assert
    expect(valid).toBe(false);
  });

  it("should return false when 'NONE' or 'DONT_KNOW' are combined with other values", () => {
    // Arrange
    const badCombinations = [
      [businessScaleEnum.NONE.key, "LOCAL"],
      [businessScaleEnum.DONT_KNOW.key, "NATIONAL"],
      [businessScaleEnum.NONE.key, businessScaleEnum.DONT_KNOW.key, "EXPORT"]
    ];

    // Act & Assert
    badCombinations.forEach((combination) => {
      const valid = validateBusinessScale(combination);
      expect(valid).toBe(false);
    });
  });

  it("should return true when 'NONE' or 'DONT_KNOW' are the only selected values", () => {
    // Arrange
    const invalidSelections = [
      [businessScaleEnum.NONE.key],
      [businessScaleEnum.DONT_KNOW.key]
    ];

    // Act & Assert
    invalidSelections.forEach((selection) => {
      const valid = validateBusinessScale(selection);
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
      const valid = validateBusinessScale(values);
      expect(valid).toBe(false);
    });
  });

  //NEED TO check how to do multiple

  it("should return true if input contains only valid values", () => {
    // Arrange
    const validValues = [["LOCAL"], ["NATIONAL"], ["EXPORT"]];

    // Act & Assert
    validValues.forEach((values) => {
      const valid = validateBusinessScale(values);
      expect(valid).toBe(true);
    });
  });
});
