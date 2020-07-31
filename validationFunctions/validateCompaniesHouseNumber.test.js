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

  it("should return true if companies house number is alphanumeric", () => {
    // Arrange
    const chNumbers = ["AA123456", "AA12345R", "13746274", "AKRMKGRN"];

    // Act
    chNumbers.forEach(chNumber => {
      const valid = validateCompaniesHouseNumber(chNumber);
      // Assert
      expect(valid).toBe(true);
    });
  });
});
