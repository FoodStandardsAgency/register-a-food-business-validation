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

  it("Should return false when input is 256 characters", () => {
    // Arrange
    const badStrings = ["Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce imperdiet semper neque, vel semper lacus commodo eu. Nunc accumsan ligula sed magna ornare blandit. Mauris at est finibus, rhoncus ligula sollicitudin, dapibus nulla. Phasellus elementum dolor."];

    // Act
    badStrings.forEach(string => {
      // Assert
      const valid = validateEstablishmentTradingName(string);
      expect(valid).toBe(false);
    });
  });

  it("Should return true if is non empty and 255 characters or less", () => {
    // Arrange
    const goodTradingNames = [
      "Anisha's awesome avacado café",
      "Joe's Jolly Javahou§e",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce imperdiet semper neque, vel semper lacus commodo eu. Nunc accumsan ligula sed magna ornare blandit. Mauris at est finibus, rhoncus ligula sollicitudin, dapibus nulla. Phasellus elementum dolor"
    ];

    // Act
    goodTradingNames.forEach(tradingName => {
      // Assert
      const valid = validateEstablishmentTradingName(tradingName);
      expect(valid).toBe(true);
    });
  });
});
