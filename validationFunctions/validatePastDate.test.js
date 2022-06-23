const moment = require("moment");
const validatePastDate = require("./validatePastDate");

describe("Function: validatePastDate", () => {
  it("should return false if input is not a string", () => {
    // Arrange
    const badInput = [[], {}, null, undefined];

    // Act
    badInput.forEach((input) => {
      const result = validatePastDate(input);

      // Assert
      expect(result).toBe(false);
    });
  });

  it("should return false when input is non ISO date", () => {
    // Arrange
    const input = "02-03-2018";

    // Act
    const result = validatePastDate(input);

    // Assert
    expect(result).toBe(false);
  });

  it("should return true when input is in the past", () => {
    // Arrange
    const input = "2017-03-02";

    // Act
    const result = validatePastDate(input);

    // Assert
    expect(result).toBe(true);
  });

  it("should return false when input is in the future", () => {
    // Arrange
    const futureDate = moment().add(7, "d").format("YYYY-MM-DD");

    // Act
    const result = validatePastDate(futureDate);

    // Assert
    expect(result).toBe(false);
  });

  it("should return true when input is current date", () => {
    // Arrange
    const currentDate = moment().format("YYYY-MM-DD");

    // Act
    const result = validatePastDate(currentDate);

    // Assert
    expect(result).toBe(true);
  });
});
