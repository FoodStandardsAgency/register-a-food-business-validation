const validatePartnerName = require("./validatePartnerName");

describe("Function: validatePartnerName", () => {
  it("should return false when type is not string", () => {
    // Arrange
    const badName = [[], {}, null, undefined];

    // Act
    badName.forEach(name => {
      // Assert
      const valid = validatePartnerName(name);
      expect(valid).toBe(false);
    });
  });

  it("should return false if partner name is empty", () => {
    // Arrange
    const badNames = ["", " ", "       "];

    //Act
    badNames.forEach(name => {
      const valid = validatePartnerName(name);
      expect(valid).toBe(false);
    });
  });

  it("should return false if partner name is more than 255 characters", () => {
    // Arrange
    const partnerName =
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce imperdiet semper neque, vel semper lacus commodo eu. Nunc accumsan ligula sed magna ornare blandit. Mauris at est finibus, rhoncus ligula sollicitudin, dapibus nulla. Phasellus elementum dolor.";

    // Act
    const valid = validatePartnerName(partnerName);

    // Assert
    expect(valid).toBe(false);
  });

  it("should return true if partner name includes non-ASCII characters", () => {
    // Arrange
    const partnerName = "My partner name ‹‰Î„*‰";

    // Act
    const valid = validatePartnerName(partnerName);

    // Assert
    expect(valid).toBe(true);
  });

  it("should return true if partner name is less than 256 characters", () => {
    // Arrange
    const partnerName =
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce imperdiet semper neque, vel semper lacus commodo eu. Nunc accumsan ligula sed magna ornare blandit. Mauris at est finibus, rhoncus ligula sollicitudin, dapibus nulla. Phasellus elementum dolor";

    // Act
    const valid = validatePartnerName(partnerName);

    // Assert
    expect(valid).toBe(true);
  });
});
