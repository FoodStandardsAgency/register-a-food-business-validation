const validateWebAddress = require("./validateWebAddress.js");

describe("Function: validate web address", () => {
  it("Should return false when type is not string", () => {
    // Arrange
    const badNumber = [[], {}, null, undefined];
    // Act
    badNumber.forEach(number => {
      // Assert
      const valid = validateWebAddress(number);
      expect(valid).toBe(false);
    });
  });

  it("Should return true when the input is non-empty", () => {
    //Arrange
    const goodaddress = ["uygffd.com", "kjhfds.co.uk", "njlhbhjgcfxdf.net"];
    //Act
    goodaddress.forEach(number => {
      //Assert
      const valid = validateWebAddress(number);
      expect(valid).toBe(true);
    });
  });

  it("Should return true when input is empty", () => {
    // Arrange
    const webAddress = "";
    // Act
    const valid = validateWebAddress(webAddress);
    //Assert
    expect(valid).toBe(true);
  });

  it("Should return true when input is 255 characters or less with or without trailing spaces", () => {
    // Arrange
    const goodStrings = [
      " Iamagoodstring.com",
      "BestString.net ",
      "IamagoodstringIamagoodstringIamagoodstringIamagoodstring.co.uk"
    ];

    // Act
    goodStrings.forEach(string => {
      // Assert
      const valid = validateWebAddress(string);
      expect(valid).toBe(true);
    });
  });

  it("Should return false when input is over 255 characters", () => {
    // Arrange
    const badStrings = [
      "IamagoodIamagoodIamagoodIamagoodIamagoodIamagoodIamagoodIamagoodIamagoodIamagoodIamagoodIamagoodIamagoodIamagoodIamagoodIamagoodIamagoodIamagoodIamagoodIamagoodIamagoodIamagoodIamagoodIamagoodIamagoodstringIamagoodstringIamagoodstringIamagoodstring.co.uk."
    ];

    // Act
    badStrings.forEach(string => {
      // Assert
      const valid = validateWebAddress(string);
      expect(valid).toBe(false);
    });
  });
});
