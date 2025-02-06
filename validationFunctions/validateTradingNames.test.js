const validateTradingNames = require("./validateTradingNames");

describe("Function: validateTradingNames", () => {
  it("Should return false when type is not array", () => {
    // Arrange
    const badTradingNames = ["", {}, null, undefined];
    //  Act
    badTradingNames.forEach((tradingNames) => {
      // Assert
      const valid = validateTradingNames(tradingNames);
      expect(valid).toBe(false);
    });
  });

  it("Should return false if array length is above 10", () => {
    //Arrange
    const badTradingNames = [
      "mickyds",
      "MichaelDonald",
      "MickDonal",
      "MICHAELdon",
      "MikeyCorleone",
      "McDonal",
      "McDs",
      "McDarren",
      "McDyson",
      "McDoner",
      "John"
    ];
    //Act
    const valid = validateTradingNames(badTradingNames);
    //Assert
    expect(valid).toBe(false);
  });

  it("Should return true when the array length is between 0-10", () => {
    //Arrange
    const goodTradingNames = [
      "mickyds",
      "MichaelDonald",
      "MickDonal",
      "MICHAELdon",
      "MikeyCorleone",
      "McDonal"
    ];
    //Act
    const valid = validateTradingNames(goodTradingNames);
    //Assert
    expect(valid).toBe(true);
  });

  it("Should return true when the array is empty length is 0", () => {
    //Arrange
    const emptyTradingNames = [];
    //Act
    const valid = validateTradingNames(emptyTradingNames);
    //Assert
    expect(valid).toBe(true);
  });

  it("Should return true when the array length is exactly 10", () => {
    //Arrange
    const goodTradingNames = [
      "mickyds",
      "MichaelDonald",
      "MickDonal",
      "MICHAELdon",
      "MikeyCorleone",
      "McDonal",
      "McDs",
      "McDarren",
      "McDyson",
      "John"
    ];
    //Act
    const valid = validateTradingNames(goodTradingNames);
    //Assert
    expect(valid).toBe(true);
  });

  it("Should return false if consecutive values in array are duplicated", () => {
    //Arrange
    const duplicatesTradingNameArray = ["MickyDs", "MickyDs", "Matt"];
    //Act
    const valid = validateTradingNames(duplicatesTradingNameArray);
    //Assert
    expect(valid).toBe(false);
  });

  it("Should return false if any value in array is duplicated", () => {
    //Arrange
    const duplicatesTradingNameArray = ["MickyDs", "Matt", "MickyDs"];
    //Act
    const valid = validateTradingNames(duplicatesTradingNameArray);
    //Assert
    expect(valid).toBe(false);
  });

  it("Should return true if array has no duplicate values", () => {
    //Arrange
    const validTradingNameArray = ["Micky", "Donald"];
    //Act
    const valid = validateTradingNames(validTradingNameArray);
    //Assert
    expect(valid).toBe(true);
  });
});
