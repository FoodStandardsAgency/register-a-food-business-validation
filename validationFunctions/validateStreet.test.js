const validateStreet = require("./validateStreet");

describe("Function: validateStreet", () => {
  it("Should return false when type is not string", () => {
    // Arrange
    const badStreetName = [[], {}, null, undefined];
    // Act
    badStreetName.forEach(streetName => {
      // Assert
      const valid = validateStreet(streetName);
      expect(valid).toBe(false);
    });
  });

  it("Should return true when input is empty", () => {
    // Arrange
    const street = "";

    // Act
    const valid = validateStreet(street);

    expect(valid).toBe(true);
  });

  it("Should return false when input is blank string", () => {
    // Arrange
    const street = "    ";

    // Act
    const valid = validateStreet(street);

    expect(valid).toBe(false);
  });

  it("Should return false if string contains non Ascii chars", () => {
    // Arrange
    const badStreets = ["§", "¥", "«® ¢"];

    // Act
    badStreets.forEach(street => {
      // Assert
      const valid = validateStreet(street);
      expect(valid).toBe(false);
    });
  });

  it("Should return true when input is Ascii string", () => {
    // Arrange
    const goodStreets = ["Fake St", "The Mews"];

    // Act
    goodStreets.forEach(street => {
      // Assert
      const valid = validateStreet(street);
      expect(valid).toBe(true);
    });
  });
});