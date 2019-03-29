const validatePartners = require("./validatePartners");

describe("Function: validatePartners", () => {
  it("Should return false when type is not array", () => {
    // Arrange
    const badPartners = ["", {}, null, undefined];
    // Act
    badPartners.forEach(partner => {
      // Assert
      const valid = validatePartners(partner);
      expect(valid).toBe(false);
    });
  });

  it("Should return false if array length is above 5", () => {
    //Arrange
    const badPartnersLength = [
      { name: "", is_primary_contact: true },
      { name: "", is_primary_contact: false },
      { name: "", is_primary_contact: false },
      { name: "", is_primary_contact: false },
      { name: "", is_primary_contact: false },
      { name: "", is_primary_contact: false }
    ];
    //Act
    const valid = validatePartners(badPartnersLength);
    //Assert
    expect(valid).toBe(false);
  });

  it("Should return false if array length is below 2", () => {
    //Arrange
    const badPartnersLength = [{ name: "", is_primary_contact: true }];
    //Act
    const valid = validatePartners(badPartnersLength);
    //Assert
    expect(valid).toBe(false);
  });

  it("Should return true when the array length is between 2-5", () => {
    //Arrange
    const goodPartnersLength = [
      { name: "", is_primary_contact: true },
      { name: "", is_primary_contact: false },
      { name: "", is_primary_contact: false },
      { name: "", is_primary_contact: false }
    ];
    //Act
    const valid = validatePartners(goodPartnersLength);
    //Assert
    expect(valid).toBe(true);
  });
});
