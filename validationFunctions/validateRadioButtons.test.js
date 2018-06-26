const validateRadioButtons = require("./validateRadioButtons");

describe("Function: validateRadioButtons", () => {
  it("should return false if radio selected is empty", () => {
    // Arrange
    const radioSelected = "";
    // Act
    const valid = validateRadioButtons(radioSelected);
    // Assert
    expect(valid).toBe(false);
  });

  it("should return true if radio selected is truthy", () => {
    // Arrange
    const radioSelected = "Truthy value";
    // Act
    const valid = validateRadioButtons(radioSelected);
    // Assert
    expect(valid).toBe(true);
  });
});
