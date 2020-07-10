const validateCharityNumber = require("./validateCharityNumber");

describe("Function: validateCharityNumber", () => {
  it("should return false when type is not string", () => {
    // Arrange
    const badCharityNumber = [[], {}, null, undefined];

    // Act
    badCharityNumber.forEach(charityNumber => {
      // Assert
      const valid = validateCharityNumber(charityNumber);
      expect(valid).toBe(false);
    });
  });

  it("should return true if charity number is empty", () => {
    // Arrange
    const charityNumber = "";

    //Act
    const valid = validateCharityNumber(charityNumber);
    expect(valid).toBe(true);
  });

  it("should return false if charity number only contains spaces", () => {
    // Arrange
    const badCharityNumbers = [" ", "       "];

    //Act
    badCharityNumbers.forEach(charityNumber => {
      const valid = validateCharityNumber(charityNumber);
      expect(valid).toBe(false);
    });
  });

  it("should return false if charity number is greater than 8 characters or less than 6", () => {
    // Arrange
    const charityNumbers = ["123456789", "12345"];

    charityNumbers.forEach(charityNumber => {
      // Act
      const valid = validateCharityNumber(charityNumber);

      // Assert
      expect(valid).toBe(false);
    });
  });

  it("should return false if charity number is not alphaNumeric", () => {
    // Arrange
    const charityNumbers = ["123@!678", "1234a!56"];

    charityNumbers.forEach(charityNumber => {
      // Act
      const valid = validateCharityNumber(charityNumber);

      // Assert
      expect(valid).toBe(false);
    });
  });

  it("should return false if charity number contains more than one - ", () => {
    // Arrange
    const charityNumbers = ["123--678", "--------"];

    charityNumbers.forEach(charityNumber => {
      // Act
      const valid = validateCharityNumber(charityNumber);

      // Assert
      expect(valid).toBe(false);
    });
  });

  it("should return true if companies house number is 8 characters, Alphanumeric and may contain dashes", () => {
    // Arrange
    const charityNumbers = [
      "12345678",
      "12345-78",
      "-1234567"
    ];

    charityNumbers.forEach(charityNumber => {
      // Act
      const valid = validateCharityNumber(charityNumber);

      // Assert
      expect(valid).toBe(true);
    });
  });
});
