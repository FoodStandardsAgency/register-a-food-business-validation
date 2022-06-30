const validateBusinessType = require("./validateBusinessType");

describe("Function: validateBusinessType", () => {
  it("should return false when type is not string", () => {
    // Arrange
    const badType = [[], {}, null, undefined];

    // Act
    badType.forEach((type) => {
      // Assert
      const valid = validateBusinessType(type);
      expect(valid).toBe(false);
    });
  });

  it("should return false if business type is empty", () => {
    // Arrange
    const badTypes = ["", " ", "       "];

    //Act
    badTypes.forEach((type) => {
      const valid = validateBusinessType(type);
      expect(valid).toBe(false);
    });
  });

  it("should return false if business type is not contained within the valid business types list", () => {
    // Arrange
    const badTypes = [
      "Not a valid business type",
      "Something else (example)",
      "Butcher (the business type and brackets are valid but) this last section is not"
    ];

    //Act
    badTypes.forEach((type) => {
      const valid = validateBusinessType(type);
      expect(valid).toBe(false);
    });
  });

  it("should return true if business type is an exact match to a valid business type or has additional spaces", () => {
    // Arrange
    const goodTypes = ["001", "051 ", " 003"];

    //Act
    goodTypes.forEach((type) => {
      const valid = validateBusinessType(type);
      expect(valid).toBe(true);
    });
  });
});
