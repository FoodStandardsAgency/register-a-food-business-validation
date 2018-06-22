const validateCompanyName = require("./validateCompanyName");

describe("Function: validateCompanyName", () => {
  it("should return false when type is not string", () => {
    // Arrange
    const badName = [[], {}, null, undefined];

    // Act
    badName.forEach(name => {
      // Assert
      const valid = validateCompanyName(name);
      expect(valid).toBe(false);
    });
  });

  it("should return false if company name is empty", () => {
    // Arrange
    const badNames = ["", " ", "       "];

    //Act
    badNames.forEach(name => {
      const valid = validateCompanyName(name);
      expect(valid).toBe(false);
    });
  });

  it("should return false if company name is more than 50 characters", () => {
    // Arrange
    const companyName =
      "A very long company name a very long company name very long company name very long company name";

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

  it("should return true if company name is less than 50 characters", () => {
    // Arrange
    const companyName = "My company name";

    // Act
    const valid = validateCompanyName(companyName);

    // Assert
    expect(valid).toBe(true);
  });
});
