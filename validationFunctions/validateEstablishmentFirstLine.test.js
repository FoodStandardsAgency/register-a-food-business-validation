const validateEstablishmentFirstLine = require("./validateEstablishmentFirstLine");

describe("Function: validateEstablishmentFirstLine", () => {
  it("Should return false if type is not string", () => {
    // Arrange
    const badFirstLines = [[], {}, undefined, null];

    // Act
    badFirstLines.forEach(firstLine => {
      // Assert
      const valid = validateEstablishmentFirstLine(firstLine);
      expect(valid).toBe(false);
    });
  });

  it("Should return false if string is empty or contains only blank chars", () => {
    // Arrange
    const badFirstLines = ["", " ", "       "];

    // Act
    badFirstLines.forEach(firstLine => {
      // Assert
      const valid = validateEstablishmentFirstLine(firstLine);
      expect(valid).toBe(false);
    });
  });

  it("Should return false if string contains non Ascii chars", () => {
    // Arrange
    const badFirstLines = ["§", "¥", "«® ¢"];

    // Act
    badFirstLines.forEach(firstLine => {
      // Assert
      const valid = validateEstablishmentFirstLine(firstLine);
      expect(valid).toBe(false);
    });
  });

  it("Should return true if is non empty and Ascii", () => {
    // Arrange
    const goodFirstLines = [
      "16a Fake St",
      "The Mews",
      "Steve & Hanas Cottage!"
    ];

    // Act
    goodFirstLines.forEach(firstLine => {
      // Assert
      const valid = validateEstablishmentFirstLine(firstLine);
      expect(valid).toBe(true);
    });
  });
});