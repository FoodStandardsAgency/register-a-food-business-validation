const validateCharityName = require("./validateCharityName");

describe("Function: validateCharityName", () => {
  it("should return false when type is not string", () => {
    // Arrange
    const badName = [[], {}, null, undefined];

    // Act
    badName.forEach(name => {
      // Assert
      const valid = validateCharityName(name);
      expect(valid).toBe(false);
    });
  });

  it("should return false if charity name is empty", () => {
    // Arrange
    const badNames = ["", " ", "       "];

    //Act
    badNames.forEach(name => {
      const valid = validateCharityName(name);
      expect(valid).toBe(false);
    });
  });

  it("should return false if charity name is more than 50 characters", () => {
    // Arrange
    const charityName =
      "A very long charity name a very long charity name very long charity name very long charity name";

    // Act
    const valid = validateCharityName(charityName);

    // Assert
    expect(valid).toBe(false);
  });

  it("should return true if charity name includes non-ASCII characters", () => {
    // Arrange
    const charityName = "My charity name ‹‰Î„*‰";

    // Act
    const valid = validateCharityName(charityName);

    // Assert
    expect(valid).toBe(true);
  });

  it("should return true if charity name is less than 50 characters", () => {
    // Arrange
    const charityName = "My charity name";

    // Act
    const valid = validateCharityName(charityName);

    // Assert
    expect(valid).toBe(true);
  });
});
