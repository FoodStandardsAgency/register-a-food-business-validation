const validateTown = require('./validateTown');

describe("Function: validateTown", () => {
  it("Should return false when type is not string", () => {
    // Arrange
    const badTownName = [[], {}, null, undefined];
    // Act
    badTownName.forEach(townName => {
      // Assert
      const valid = validateTown(townName);
      expect(valid).toBe(false);
    });
  });

  it("Should return true when input is empty", () => {
    // Arrange
    const town = "";
    // Act
    const valid = validateTown(town);
    //Assert
    expect(valid).toBe(true);
  });

  it("Should return false when input is blank string", () => {
    // Arrange
    const town = "    ";
    // Act
    const valid = validateTown(town);
    // Assert
    expect(valid).toBe(false);
  });

  it("Should return false if string contains non Ascii chars", () => {
    // Arrange
    const badTowns = ["§", "¥", "«® ¢"];
    // Act
    badTowns.forEach(town => {
      // Assert
      const valid = validateTown(town);
      expect(valid).toBe(false);
    });
  });

  it("Should return true when input is Ascii string", () => {
    // Arrange
    const goodTowns = ["London", "Lazy Town", "Joe's Jardin"];
    // Act
    goodTowns.forEach(town => {
      // Assert
      const valid = validateTown(town);
      expect(valid).toBe(true);
    });
  });
});