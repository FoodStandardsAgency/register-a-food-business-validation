const validateOpeningHours = require("./validateOpeningHours");

describe("Function: validateOpeningHours", () => {
  it("should return false when type is not string", () => {
    // Arrange
    const badHours = [[], {}, null, undefined];

    // Act
    badHours.forEach((hours) => {
      // Assert
      const valid = validateOpeningHours(hours);
      expect(valid).toBe(false);
    });
  });

  it("should return false if opening hours string is empty", () => {
    // Arrange
    const badHours = ["", " ", "       "];

    //Act
    badHours.forEach((hours) => {
      const valid = validateOpeningHours(hours);
      expect(valid).toBe(false);
    });
  });

  it("should return false if opening hours string is more than 50 characters", () => {
    // Arrange
    const openingHours =
      "A very long opening hours A very long opening hours A very long opening hours";

    // Act
    const valid = validateOpeningHours(openingHours);

    // Assert
    expect(valid).toBe(false);
  });

  it("should return true if opening hours includes non-ASCII characters", () => {
    // Arrange
    const openingHours = "My opening hours ‹‰Î„*‰";

    // Act
    const valid = validateOpeningHours(openingHours);

    // Assert
    expect(valid).toBe(true);
  });

  it("should return true if opening hours is less than or equal 50 characters", () => {
    // Arrange
    const openingHours = "09:30 to 16:00";

    // Act
    const valid = validateOpeningHours(openingHours);

    // Assert
    expect(valid).toBe(true);
  });
});
