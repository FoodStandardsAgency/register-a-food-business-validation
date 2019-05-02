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

  it("should return false if partner name is more than 56 characters", () => {
    // Arrange
    const partnerName =
      "A very long partner name a very long partner name very long partner name";

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

  it("should return true if partner name is less than 56 characters", () => {
    // Arrange
    const partnerName = "My partner name";

    // Act
    const valid = validatePartnerName(partnerName);

    // Assert
    expect(valid).toBe(true);
  });
});
