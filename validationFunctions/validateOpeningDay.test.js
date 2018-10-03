const validateOpeningDay = require("./validateOpeningDay");

describe("Function: validateOpeningDay", () => {
  it("Should return false when type is not boolean", () => {
    // Arrange
    const badDay = [[], {}, null, undefined, "", "true", "false"];
    // Act
    badDay.forEach(day => {
      // Assert
      const valid = validateOpeningDay(day);
      expect(valid).toBe(false);
    });
  });

  it("Should return true when the input is boolean", () => {
    //Arrange
    const goodDay = [true, false];
    //Act
    goodDay.forEach(day => {
      //Assert
      const valid = validateOpeningDay(day);
      expect(valid).toBe(true);
    });
  });
});
