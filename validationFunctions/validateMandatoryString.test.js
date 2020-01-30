const validateMandatoryString = require("./validateMandatoryString");

describe("Function: validateMandatoryString", () => {
  it("Should return false when type is not string", () => {
    // Arrange
    const badString = [[], {}, null, undefined];
    // Act
    badString.forEach(string => {
      // Assert
      const valid = validateMandatoryString(string);
      expect(valid).toBe(false);
    });
  });

  it("Should return false when input is empty", () => {
    // Arrange
    const string = "";

    // Act
    const valid = validateMandatoryString(string);

    expect(valid).toBe(false);
  });

  it("Should return false when input is blank string", () => {
    // Arrange
    const string = "    ";

    // Act
    const valid = validateMandatoryString(string);

    expect(valid).toBe(false);
  });

  it("Should return false if string contains non Ascii chars", () => {
    // Arrange
    const badStrings = ["§", "¥", "«® ¢"];

    // Act
    badStrings.forEach(string => {
      // Assert
      const valid = validateMandatoryString(string);
      expect(valid).toBe(false);
    });
  });

  it("Should return true when input is Ascii string", () => {
    // Arrange
    const goodStrings = ["I am a good string", "Best String"];

    // Act
    goodStrings.forEach(string => {
      // Assert
      const valid = validateMandatoryString(string);
      expect(valid).toBe(true);
    });
  });
});
