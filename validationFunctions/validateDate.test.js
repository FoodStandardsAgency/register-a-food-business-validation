const validateDate = require("./validateDate");

describe("Function: validateDate", () => {
  it("should return false when input is not string", () => {
    // Arrange
    const badInput = [[], {}, null, undefined];

    // Act
    badInput.forEach((input) => {
      const result = validateDate(input);

      // Assert
      expect(result).toBe(false);
    });
  });

  it("should return true when input is a valid date", () => {
    // Arrange
    const dates = ["2018-06-17", "2018-1-1"];

    // Act
    dates.forEach((date) => {
      const result = validateDate(date);

      // Assert
      expect(result).toBe(true);
    });
  });

  it("should return false when the day does not exist in that month", () => {
    // Arrange
    const dates = [
      "2026-02-30", // as reported
      "2025-06-31", // as reported
      "2025-04-31",
      "2025-09-31",
      "2025-11-31",
      "2026-02-32" // day beyond the end of any month
    ];

    // Act
    dates.forEach((date) => {
      const result = validateDate(date);

      // Assert
      expect(result).toBe(false);
    });
  });

  it("should return false for 29 February outside a leap year", () => {
    // Arrange
    const dates = [
      "2025-02-29", // 2025 is not a leap year
      "2100-02-29" // century years are not leap years unless divisible by 400
    ];

    // Act
    dates.forEach((date) => {
      const result = validateDate(date);

      // Assert
      expect(result).toBe(false);
    });
  });

  it("should return true for 29 February in a leap year", () => {
    // Arrange
    const dates = ["2024-02-29", "2000-02-29"];

    // Act
    dates.forEach((date) => {
      const result = validateDate(date);

      // Assert
      expect(result).toBe(true);
    });
  });

  it("should return false when the month or day is out of range for any date", () => {
    // Arrange
    const dates = ["2026-13-01", "2026-00-15", "2026-02-00"];

    // Act
    dates.forEach((date) => {
      const result = validateDate(date);

      // Assert
      expect(result).toBe(false);
    });
  });

  it("should return false for impossible dates with unpadded month or day", () => {
    // Arrange
    const dates = ["2025-6-31", "2026-0-15", "2026-02-0"];

    // Act
    dates.forEach((date) => {
      const result = validateDate(date);

      // Assert
      expect(result).toBe(false);
    });
  });

  it("should return false for years before 0100 (unset-value placeholders such as .NET DateTime.MinValue)", () => {
    // Arrange
    const dates = ["0001-01-01", "0099-12-31"];

    // Act
    dates.forEach((date) => {
      const result = validateDate(date);

      // Assert
      expect(result).toBe(false);
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
