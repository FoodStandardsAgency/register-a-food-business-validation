const validatePartners = require("./validatePartners");

describe("Function: validatePartners", () => {
  it("Should return false when type is not array", () => {
    // Arrange
    const badPartners = ["", {}, null, undefined];
    // Act
    badPartners.forEach((partner) => {
      // Assert
      const valid = validatePartners(partner);
      expect(valid).toBe(false);
    });
  });

  it("Should return false if array length is above 5", () => {
    //Arrange
    const badPartnersLength = [
      "jon",
      "Mike",
      "jo",
      "dan",
      "wes",
      "exa",
    ];
    //Act
    const valid = validatePartners(
      badPartnersLength
    );
    //Assert
    expect(valid).toBe(false);
  });

  it("Should return false if array length is below 2", () => {
    //Arrange
    const badPartnersLength = ["was"];
    //Act
    const valid = validatePartners(
      badPartnersLength
    );
    //Assert
    expect(valid).toBe(false);
  });

  it("Should return true when the array length is between 2-5", () => {
    //Arrange
    const goodPartnersLength = [
      "jon",
      "Mike",
      "jo",
      "dan",
    ];
    //Act
    const valid = validatePartners(
      goodPartnersLength
    );
    //Assert
    expect(valid).toBe(true);
  });

  it("Should return true when the array length is exactly 2", () => {
    //Arrange
    const goodPartnersLength = ["jon", "exa"];
    //Act
    const valid = validatePartners(
      goodPartnersLength
    );
    //Assert
    expect(valid).toBe(true);
  });

  it("Should return true when the array length is exactly 5", () => {
    //Arrange
    const goodPartnersLength = [
      "jon",
      "Mike",
      "jo",
      "dan",
      "exa",
    ];
    //Act
    const valid = validatePartners(
      goodPartnersLength
    );
    //Assert
    expect(valid).toBe(true);
  });
});

describe("Function: validatePartners", () => {
  it("Should return false if consecutive values in array are duplicated", () => {
    //Arrange
    const duplicatesPartnersArray = [
      "John Barnes",
      "John Barnes",
      "Matt",
    ];
    //Act
    const valid = validatePartners(
      duplicatesPartnersArray
    );
    //Assert
    expect(valid).toBe(false);
  });

  it("Should return false if any value in array is duplicated", () => {
    //Arrange
    const duplicatesPartnersArray = [
      "John Barnes",
      "Matt",
      "John Barnes",
    ];
    //Act
    const valid = validatePartners(
      duplicatesPartnersArray
    );
    //Assert
    expect(valid).toBe(false);
  });

  it("Should return true if array has no duplicate values", () => {
    //Arrange
    const validPartnersArray = [
      "Matt",
      "John Barnes",
    ];
    //Act
    const valid = validatePartners(
      validPartnersArray
    );
    //Assert
    expect(valid).toBe(true);
  });
});
