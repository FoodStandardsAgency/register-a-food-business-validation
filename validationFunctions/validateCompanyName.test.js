const validateCompanyName = require("./validateCompanyName");

describe("Function: validateCompanyName", () => {
  it("should return false when type is not string", () => {
    // Arrange
    const badName = [[], {}, null, undefined];

    // Act
    badName.forEach((name) => {
      // Assert
      const valid = validateCompanyName(name);
      expect(valid).toBe(false);
    });
  });

  it("should return false if company name is empty", () => {
    // Arrange
    const badNames = ["", " ", "       "];

    //Act
    badNames.forEach((name) => {
      const valid = validateCompanyName(name);
      expect(valid).toBe(false);
    });
  });

  it("should return false if company name is more than 255 characters", () => {
    // Arrange
    const companyName =
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce imperdiet semper neque, vel semper lacus commodo eu. Nunc accumsan ligula sed magna ornare blandit. Mauris at est finibus, rhoncus ligula sollicitudin, dapibus nulla. Phasellus elementum dolor.";

    // Act
    const valid = validateCompanyName(companyName);

    // Assert
    expect(valid).toBe(false);
  });

  it("should return true if company name includes non-ASCII characters", () => {
    // Arrange
    const companyName = "My company name ‹‰Î„*‰";

    // Act
    const valid = validateCompanyName(companyName);

    // Assert
    expect(valid).toBe(true);
  });

  it("should return true if company name is less than 256 characters", () => {
    // Arrange
    const companyName =
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce imperdiet semper neque, vel semper lacus commodo eu. Nunc accumsan ligula sed magna ornare blandit. Mauris at est finibus, rhoncus ligula sollicitudin, dapibus nulla. Phasellus elementum dolor";

    // Act
    const valid = validateCompanyName(companyName);

    // Assert
    expect(valid).toBe(true);
  });
});
