const validateOpeningDaysIrregular = require("./validateOpeningDaysIrregular");

describe("Function: validateOpeningDaysIrregular", () => {
  it("Should return false when type is not string", () => {
    // Arrange
    const badText = [[], {}, null, undefined];
    // Act
    badText.forEach(text => {
      // Assert
      const valid = validateOpeningDaysIrregular(text);
      expect(valid).toBe(false);
    });
  });

  it("Should return false when input is empty", () => {
    // Arrange
    const badText = ["", "    "];
    // Act
    badText.forEach(text => {
      // Assert
      const valid = validateOpeningDaysIrregular(text);
      expect(valid).toBe(false);
    });
  });

  it("Should return false if string is longer that 1500 characters", () => {
    // Arrange
    const text =
      "This is a paragraph containing more than 1500 characters. This is a paragraph containing more than 1500 characters. This is a paragraph containing more than 1500 characters. This is a paragraph containing more than 1500 characters. This is a paragraph containing more than 1500 characters. This is a paragraph containing more than 1500 characters. This is a paragraph containing more than 1500 characters. This is a paragraph containing more than 1500 characters. This is a paragraph containing more than 1500 characters. This is a paragraph containing more than 1500 characters. This is a paragraph containing more than 1500 characters. This is a paragraph containing more than 1500 characters. This is a paragraph containing more than 1500 characters. This is a paragraph containing more than 1500 characters. This is a paragraph containing more than 1500 characters. This is a paragraph containing more than 1500 characters. This is a paragraph containing more than 1500 characters. This is a paragraph containing more than 1500 characters. This is a paragraph containing more than 1500 characters. This is a paragraph containing more than 1500 characters. This is a paragraph containing more than 1500 characters. This is a paragraph containing more than 1500 characters. This is a paragraph containing more than 1500 characters. This is a paragraph containing more than 1500 characters. This is a paragraph containing more than 1500 characters. This is a paragraph containing more than 1500 characters. This is a paragraph containing more than 1500 characters. This is a paragraph containing more than 1500 characters.  This is a paragraph containing more than 1500 characters. This is a paragraph containing more than 1500 characters. This is a paragraph containing more than 1500 characters. This is a paragraph containing more than 1500 characters.";

    // Act
    const valid = validateOpeningDaysIrregular(text);
    expect(valid).toBe(false);
  });

  it("Should return true if string is less than 1500 characters", () => {
    // Arrange
    const text =
      "This is a paragraph containing less than 1500 characters. This is a paragraph containing less than 1500 characters. This is a paragraph containing less than 1500 characters. This is a paragraph containing less than 1500 characters. This is a paragraph containing less than 1500 characters.";
    // Act
    const valid = validateOpeningDaysIrregular(text);
    expect(valid).toBe(true);
  });
});
