const validateEstablishmentType = require("./validateEstablishmentType");
describe("Function: validate establishment type", () => {
  it("Should return false when enum key does not exist", () => {
    // Arrange
    const badValue = ["INVALIDVALUE", {}, null, undefined];
    // Act
    badValue.forEach(key => {
      // Assert
      const valid = validateEstablishmentType(key);
      expect(valid).toBe(false);
    });
  });

  it("Should return true when the enum key exists", () => {
    //Arrange
    const goodValue = ["COMMERCIAL", "MOBILE", "DOMESTIC"];
    //Act
    goodValue.forEach(key => {
      //Assert
      const valid = validateEstablishmentType(key);
      expect(valid).toBe(true);
    });
  });
});
