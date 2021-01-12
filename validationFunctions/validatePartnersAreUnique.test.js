const validatePartnersAreUnique = require("./validatePartnersAreUnique");

describe("Function: validatePartnersAreUnique", () => {
  it("Should return false if consecutive values in array are duplicated", () => {
    //Arrange
    const duplicatesPartnersArray = ["John Barnes", "John Barnes", "Matt"];
    //Act
    const valid = validatePartnersAreUnique(duplicatesPartnersArray);
    //Assert
    expect(valid).toBe(false);
  });

  it("Should return false if any value in array is duplicated", () => {
    //Arrange
    const duplicatesPartnersArray = ["John Barnes", "Matt", "John Barnes"];
    //Act
    const valid = validatePartnersAreUnique(duplicatesPartnersArray);
    //Assert
    expect(valid).toBe(false);
  });

  it("Should return true if array has no duplicate values", () => {
    //Arrange
    const validPartnersArray = ["Matt", "John Barnes"];
    //Act
    const valid = validatePartnersAreUnique(validPartnersArray);
    //Assert
    expect(valid).toBe(true);
  });
});
