const validateDate = require("./validateDate");

describe("Function: validateDate", () => {
  it("should return false when input is not string", () => {
    // Arrange
    const badInput = [[], {}, null, undefined];

    // Act
    badInput.forEach(input => {
      const result = validateDate(input);

      // Assert
      expect(result).toBe(false);
    });
  });

  it("should return true when input is a valid date", () => {
    // Arrange
    const dates = ["2018-06-17", "2018-1-1"];

    // Act
    dates.forEach(date => {
      const result = validateDate(date);

      // Assert
      expect(result).toBe(true);
    });
  });

  it("should return false when input is non ISO date", () => {
    // Arrange
    const input = "02-03-2018";

    // Act
    const result = validateDate(input);

    // Assert
    expect(result).toBe(false);
  });
});
