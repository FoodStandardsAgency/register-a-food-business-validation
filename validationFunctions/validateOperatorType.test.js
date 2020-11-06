const validateOperatorType = require("./validateOperatorType");
describe("Function: validate operator type", () => {
  it("Should return false when enum key does not exist", () => {
    // Arrange
    const badValue = ["INVALIDVALUE", {}, null, undefined];
    // Act
    badValue.forEach(key => {
      // Assert
      const valid = validateOperatorType(key);
      expect(valid).toBe(false);
    });
  });

  it("Should return true when the enum key exists", () => {
    //Arrange
    const goodValue = [
      "SOLETRADER",
      "PARTNERSHIP",
      "PERSON",
      "COMPANY",
      "CHARITY"
    ];
    //Act
    goodValue.forEach(key => {
      //Assert
      const valid = validateOperatorType(key);
      expect(valid).toBe(true);
    });
  });
});
