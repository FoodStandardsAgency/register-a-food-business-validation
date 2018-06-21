const validateDeclaration = require("./validateDeclaration");

describe("Function: validateDeclaration", () => {
  it("should return false if declaration is empty", () => {
    // Arrange
    const declaration = "";

    // Act
    const valid = validateDeclaration(declaration);

    // Assert
    expect(valid).toBe(false);
  });

  it("should return true if declaration is declaration is truthy", () => {
    // Arrange
    const declaration = "Truthy value";

    // Act
    const valid = validateDeclaration(declaration);

    // Assert
    expect(valid).toBe(true);
  });
});
