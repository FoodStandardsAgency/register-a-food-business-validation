const validatePhoneNumber = require("./validatePhoneNumber");
describe("Function: validate primary contact", () => {
  it("Should return false when type is not string", () => {
    // Arrange
    const badNumber = [[], {}, null, undefined];
    // Act
    badNumber.forEach(number => {
      // Assert
      const valid = validatePhoneNumber(number);
      expect(valid).toBe(false);
    });
  });

  it("Should remove the plus from the beginning of a number before checking the string is numeric", () => {
    //Arrange
    const goodNumber = "+54875875";
    //Act
    const valid = validatePhoneNumber(goodNumber);
    //Assert
    expect(valid).toBe(true);
  });

  it("Should return true when the input is non-empty and numeric and between 5 and 20 characters inclusive", () => {
    //Arrange
    const goodNumber = ["44746", "2874827482", "11024894024292073849"];
    //Act
    goodNumber.forEach(number => {
      //Assert
      const valid = validatePhoneNumber(number);
      expect(valid).toBe(true);
    });
  });

  it("Should return false if string is empty or contains only blank chars", () => {
    //Arrange
    const badNumbers = ["", " ", "       "];
    //Act
    badNumbers.forEach(number => {
      //Assert
      const valid = validatePhoneNumber(number);
      expect(valid).toBe(false);
    });
  });

  it("Should return false if phone number isnt between 5-20", () => {
    //Arrange
    const badNumbers = ["123", "1234567891012345678901"];
    badNumbers.forEach(number => {
      //Assert
      const valid = validatePhoneNumber(number);
      expect(valid).toBe(false);
    });
  });

  it("Should return false if string contains non numeric characters", () => {
    //Arrange
    const badNumbers = ["djdheiu7373", "wuyewixx@$", ".+()-9w"];
    //Act
    badNumbers.forEach(number => {
      //Assert
      const valid = validatePhoneNumber(number);
      expect(valid).toBe(false);
    });
  });
});
