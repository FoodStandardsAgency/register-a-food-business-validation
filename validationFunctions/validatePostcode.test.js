const validatePostCode = require("./validatePostCode");

describe("Function: validatePostCode", () => {
  it("should return false if type is not string", () => {
    // Arrange
    const badPostCodes = [[], {}, undefined, null];

    // Act
    badPostCodes.forEach((postcode) => {
      // Assert
      const valid = validatePostCode(postcode);
      expect(valid).toBe(false);
    });
  });

  it("should return false if string is not valid postcode", () => {
    // Arrange
    const badPostCodes = ["random string", "SW", "12", "1445sfds"];

    // Act
    badPostCodes.forEach((postcode) => {
      // Assert
      const valid = validatePostCode(postcode);
      expect(valid).toBe(false);
    });
  });

  it("should return false if string is too long or too short", () => {
    // Arrange
    const badPostCodes = ["SW12AAAA", "SE1", "TW1 1AAAAA"];

    // Act
    badPostCodes.forEach((postcode) => {
      // Assert
      const valid = validatePostCode(postcode);
      expect(valid).toBe(false);
    });
  });

  it("should return true if string is valid postcode", () => {
    // Arrange
    const goodPostCodes = ["SW12 9PZ", "SE1 9PZ", "TW1 9PZ"];

    // Act
    goodPostCodes.forEach((postcode) => {
      // Assert
      const valid = validatePostCode(postcode);
      expect(valid).toBe(true);
    });
  });

  it("should return true if string has space before or after postcode", () => {
    // Arrange
    const goodPostCodes = ["SW12 9PZ", " SE1 9PZ", "TW1 9PZ  "];

    // Act
    goodPostCodes.forEach((postcode) => {
      // Assert
      const valid = validatePostCode(postcode);
      expect(valid).toBe(true);
    });
  });
});
