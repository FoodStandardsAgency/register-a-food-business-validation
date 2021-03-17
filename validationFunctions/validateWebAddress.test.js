const validateWebAddress = require("./validateWebAddress");

describe("Function: validateWebAddress", () => {
  it("Should return false if string is not a valid web address", () => {
    // Arrange
    const badWebAddress = ["badwebAddress", "badwebAddress@badwebAddress", "iamabadwebAddress1"];
    // Act
    badWebAddress.forEach(webAddress => {
      // Assert
      const valid = validateWebAddress(webAddress);
      expect(valid).toBe(false);
    });
  });

  it("Should return false if greater than 254 characters", () => {
    //Arrange
    const badWebAddress = [
      "LoremipsumdolorsitametconsectetueradipiscingelitAeneancommodoligulaegetdolorAeneanmassa.CumsociisnatoquepenatibusetmagnisdisparturientmontesnasceturridiculusmusDonecquamfelisultriciesnecpellentesqueeupretiumquis@testyMctestwebAddressaddressthatislongerthan254characters.com"
    ];
    //Act
    badWebAddress.forEach(webAddress => {
      //Assert
      const valid = validateWebAddress(webAddress);
      expect(valid).toBe(false);
    });
  });

  it("Should return true if is non empty and valid web address", () => {
    // Arrange
    const goodwebAddresss = [
      "anishasawesome.com",
      "joejolly1.co.uk",
      "django123.com"
    ];
    // Act
    goodwebAddresss.forEach(webAddress => {
      // Assert
      const valid = validateWebAddress(webAddress);
      expect(valid).toBe(true);
    });
  });

  it("Should return true if there is an empty space before or after the web address", () => {
    // Arrange
    const goodwebAddresss = [
      "anishasawesome.com ",
      " joejolly1l.co.uk",
      "django123.com  "
    ];
    // Act
    goodwebAddresss.forEach(webAddress => {
      // Assert
      const valid = validateWebAddress(webAddress);
      expect(valid).toBe(true);
    });
  });
});
