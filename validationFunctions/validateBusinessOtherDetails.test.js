const validateBusinessOtherDetails = require("./validateBusinessOtherDetails");

describe("Function: validateBusinessOtherDetails", () => {
  it("Should return false when type is not string", () => {
    // Arrange
    const badText = [[], {}, null, undefined];
    // Act
    badText.forEach((text) => {
      // Assert
      const valid = validateBusinessOtherDetails(text);
      expect(valid).toBe(false);
    });
  });

  it("Should return true when input is empty", () => {
    // Arrange
    const text = "";
    // Act
    const valid = validateBusinessOtherDetails(text);
    //Assert
    expect(valid).toBe(true);
  });
  it("Should return false if string is longer that 1500 characters", () => {
    // Arrange
    const text =
      "This is a paragraph containing more than 1500 characters. This is a paragraph containing more than 1500 characters. This is a paragraph containing more than 1500 characters. This is a paragraph containing more than 1500 characters. This is a paragraph containing more than 1500 characters. This is a paragraph containing more than 1500 characters. This is a paragraph containing more than 1500 characters. This is a paragraph containing more than 1500 characters. This is a paragraph containing more than 1500 characters. This is a paragraph containing more than 1500 characters. This is a paragraph containing more than 1500 characters. This is a paragraph containing more than 1500 characters. This is a paragraph containing more than 1500 characters. This is a paragraph containing more than 1500 characters. This is a paragraph containing more than 1500 characters. This is a paragraph containing more than 1500 characters. This is a paragraph containing more than 1500 characters. This is a paragraph containing more than 1500 characters. This is a paragraph containing more than 1500 characters. This is a paragraph containing more than 1500 characters. This is a paragraph containing more than 1500 characters. This is a paragraph containing more than 1500 characters. This is a paragraph containing more than 1500 characters. This is a paragraph containing more than 1500 characters. This is a paragraph containing more than 1500 characters. This is a paragraph containing more than 1500 characters. This is a paragraph containing more than 1500 characters. This is a paragraph containing more than 1500 characters.  This is a paragraph containing more than 1500 characters. This is a paragraph containing more than 1500 characters. This is a paragraph containing more than 1500 characters. This is a paragraph containing more than 1500 characters.";

    // Act
    const valid = validateBusinessOtherDetails(text);
    expect(valid).toBe(false);
  });

  it("Should return true if string is less than 1500 characters", () => {
    // Arrange
    const text =
      "This is a paragraph containing less than 1500 characters. This is a paragraph containing less than 1500 characters. This is a paragraph containing less than 1500 characters. This is a paragraph containing less than 1500 characters. This is a paragraph containing less than 1500 characters.";
    // Act
    const valid = validateBusinessOtherDetails(text);
    expect(valid).toBe(true);
  });
});
