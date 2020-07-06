const validateEstablishmentTradingName = require("./validateEstablishmentTradingName");

describe("Function: validateEstablishmentTradingName", () => {
  it("Should return false if type is not string", () => {
    // Arrange
    const badTradingName = [[], {}, undefined, null];

    // Act
    badTradingName.forEach(tradingName => {
      // Assert
      const valid = validateEstablishmentTradingName(tradingName);
      expect(valid).toBe(false);
    });
  });

  it("Should return false if string is empty or contains only blank chars", () => {
    // Arrange
    const badTradingNames = ["", " ", "       "];

    // Act
    badTradingNames.forEach(tradingName => {
      // Assert
      const valid = validateEstablishmentTradingName(tradingName);
      expect(valid).toBe(false);
    });
  });

  it("Should return false when input is 51 characters", () => {
    // Arrange
    const badStrings = ["Lorem ipsum dolor sit amet, consectetuer adipiscing"];

    // Act
    badStrings.forEach(string => {
      // Assert
      const valid = validateEstablishmentTradingName(string);
      expect(valid).toBe(false);
    });
  });

  it("Should return true if is non empty and 50 characters or less", () => {
    // Arrange
    const goodTradingNames = [
      "Anisha's awesome avacado café",
      "Joe's Jolly Javahou§e",
      "Lorem ipsum dolor sit amet, consectetuer adipiscin"
    ];

    // Act
    goodTradingNames.forEach(tradingName => {
      // Assert
      const valid = validateEstablishmentTradingName(tradingName);
      expect(valid).toBe(true);
    });
  });
});
