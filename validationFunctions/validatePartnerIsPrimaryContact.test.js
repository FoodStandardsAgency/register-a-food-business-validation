const validatePartnerIsPrimaryContact = require("./validatePartnerIsPrimaryContact");

describe("Function: validatePartnerIsPrimaryContact", () => {
  it("Should return false when type is not boolean", () => {
    // Arrange
    const badIsPrimaryContact = [[], {}, null, undefined, "", "true", "false"];
    // Act
    badIsPrimaryContact.forEach(isPrimaryContact => {
      // Assert
      const valid = validatePartnerIsPrimaryContact(isPrimaryContact);
      expect(valid).toBe(false);
    });
  });

  it("Should return true when the input is boolean", () => {
    //Arrange
    const goodIsPrimaryContact = [true, false];
    //Act
    goodIsPrimaryContact.forEach(isPrimaryContact => {
      //Assert
      const valid = validatePartnerIsPrimaryContact(isPrimaryContact);
      expect(valid).toBe(true);
    });
  });
});
