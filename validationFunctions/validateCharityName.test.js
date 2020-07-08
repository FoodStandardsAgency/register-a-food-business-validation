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

  it("should return false if charity name is more than 255 characters", () => {
    // Arrange
    const charityName =
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce imperdiet semper neque, vel semper lacus commodo eu. Nunc accumsan ligula sed magna ornare blandit. Mauris at est finibus, rhoncus ligula sollicitudin, dapibus nulla. Phasellus elementum dolor.";

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

  it("should return true if charity name is less than 256 characters", () => {
    // Arrange
    const charityName = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce imperdiet semper neque, vel semper lacus commodo eu. Nunc accumsan ligula sed magna ornare blandit. Mauris at est finibus, rhoncus ligula sollicitudin, dapibus nulla. Phasellus elementum dolor";

    // Act
    const valid = validateCharityName(charityName);

    // Assert
    expect(valid).toBe(true);
  });
});
