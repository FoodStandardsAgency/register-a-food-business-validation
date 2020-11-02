const validateWaterSupply = require("./validateWaterSupply");

describe("Function: validateWaterSupply", () => {
  it("should return true when type is one of the three allowed types", () => {
    // Arrange
    const allowedWaterSupply = ["PRIVATE", "PUBLIC", "BOTH"];

    // Act
    allowedWaterSupply.forEach(waterSupply => {
      // Assert
      const valid = validateWaterSupply(waterSupply);
      expect(valid).toBe(true);
    });
  });

  it("should return false when type is not one of the three allowed types", () => {
    // Arrange
    const notAllowedWaterSupply = ["", undefined, "438574hfeuhgjhgk"];

    // Act
    notAllowedWaterSupply.forEach(waterSupply => {
      // Assert
      const valid = validateWaterSupply(waterSupply);
      expect(valid).toBe(false);
    });
  });
});
