const validateCompaniesHouseNumber = require("./validateCompaniesHouseNumber");

describe("Function: validateCompaniesHouseNumber", () => {
  it("should return false when type is not string", () => {
    // Arrange
    const badCHNumber = [[], {}, null, undefined];

    // Act
    badCHNumber.forEach(chNumber => {
      // Assert
      const valid = validateCompaniesHouseNumber(chNumber);
      expect(valid).toBe(false);
    });
  });

  it("should return false if companies house number is empty", () => {
    // Arrange
    const badCHNumbers = ["", " ", "       "];

    //Act
    badCHNumbers.forEach(chNumber => {
      const valid = validateCompaniesHouseNumber(chNumber);
      expect(valid).toBe(false);
    });
  });

  it("should return false if companies house number is not 8 characters long", () => {
    // Arrange
    const chNumbers = ["123456789", "1234567"];

    chNumbers.forEach(number => {
      // Act
      const valid = validateCompaniesHouseNumber(number);

      // Assert
      expect(valid).toBe(false);
    });
  });

  it("should return false if companies house number is not alphanumeric", () => {
    // Arrange
    const chNumber = "A23(+678";

    // Act
    const valid = validateCompaniesHouseNumber(chNumber);

    // Assert
    expect(valid).toBe(false);
  });

  it("should return false if companies house number does not end with 6 numbers", () => {
    // Arrange
    const chNumber = "123456AA";

    // Act
    const valid = validateCompaniesHouseNumber(chNumber);

    // Assert
    expect(valid).toBe(false);
  });

  it("should return true if companies house is 8 numbers only", () => {
    // Arrange
    const chNumber = "12345678";

    // Act
    const valid = validateCompaniesHouseNumber(chNumber);

    // Assert
    expect(valid).toBe(true);
  });

  it("should return true if companies house number is two letters followed by six numbers", () => {
    // Arrange
    const chNumber = "AA123456";

    // Act
    const valid = validateCompaniesHouseNumber(chNumber);

    // Assert
    expect(valid).toBe(true);
  });
});
