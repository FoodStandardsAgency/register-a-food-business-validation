const moment = require("moment");
const validateFutureDate = require("./validateFutureDate");

describe("Function: validateFutureDate", () => {
  it("should return false if input is not a string", () => {
    // Arrange
    const badInput = [[], {}, null, undefined];

    // Act
    badInput.forEach(input => {
      const result = validateFutureDate(input);

      // Assert
      expect(result).toBe(false);
    });
  });

  it("should return false when input is non ISO date", () => {
    // Arrange
    const input = "02-03-2018";

    // Act
    const result = validateFutureDate(input);

    // Assert
    expect(result).toBe(false);
  });

  it("should return false when input is in the past", () => {
    // Arrange
    const input = "2017-03-02";

    // Act
    const result = validateFutureDate(input);

    // Assert
    expect(result).toBe(false);
  });

  it("should return true when input is in the future", () => {
    // Arrange
    const futureDate = moment()
      .add(7, "d")
      .format("YYYY-MM-DD");

    // Act
    const result = validateFutureDate(futureDate);

    // Assert
    expect(result).toBe(true);
  });

  it("should return true when input is current date", () => {
    // Arrange
    const currentDate = moment().format("YYYY-MM-DD");

    // Act
    const result = validateFutureDate(currentDate);

    // Assert
    expect(result).toBe(true);
  });
});
