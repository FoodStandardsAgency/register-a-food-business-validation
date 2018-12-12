const validateBusinessType = require("./validateBusinessType");
const validBusinessTypes = require("../valid-business-types.json");

describe("Function: validateBusinessType", () => {
  it("should return false when type is not string", () => {
    // Arrange
    const badType = [[], {}, null, undefined];

    // Act
    badType.forEach(type => {
      // Assert
      const valid = validateBusinessType(type);
      expect(valid).toBe(false);
    });
  });

  it("should return false if business type is empty", () => {
    // Arrange
    const badTypes = ["", " ", "       "];

    //Act
    badTypes.forEach(type => {
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
    badTypes.forEach(type => {
      const valid = validateBusinessType(type);
      expect(valid).toBe(false);
    });
  });

  it("should return true if business type is an exact match to a valid business type or has additional spaces", () => {
    // Arrange
    const goodTypes = [
      "Butcher",
      "Butcher ",
      "Livestock farm",
      "Livestock farm   "
    ];

    //Act
    goodTypes.forEach(type => {
      const valid = validateBusinessType(type);
      expect(valid).toBe(true);
    });
  });

  it("should return true if business type in valid list has excess whitespace in it but is still a match", () => {
    // Arrange
    const goodTypes = ["Test type", "Test type ", "Another", "Another   "];

    validBusinessTypes.unshift("Test type ", " Another   ");

    //Act
    goodTypes.forEach(type => {
      const valid = validateBusinessType(type);
      expect(valid).toBe(true);
    });
  });
});
