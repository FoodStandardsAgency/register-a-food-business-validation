const validateEstablishmentTradingName = require('./validateEstablishmentTradingName');

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

  it("Should return false if string contains non Ascii chars", () => {
    // Arrange
    const badTradingNames = ["§", "¥", "«® ¢"];

    // Act
    badTradingNames.forEach(tradingName => {
      // Assert
      const valid = validateEstablishmentTradingName(tradingName);
      expect(valid).toBe(false);
    });
  });

  it("Should return true if is non empty and Ascii", () => {
    // Arrange
    const goodTradingNames = [
      "Anisha's awesome avacado place",
      "Joe's Jolly Javahouse",
      "Django's Disasterous Dump"
    ];

    // Act
    goodTradingNames.forEach(tradingName => {
      // Assert
      const valid = validateEstablishmentTradingName(tradingName);
      expect(valid).toBe(true);
    });
  });
});