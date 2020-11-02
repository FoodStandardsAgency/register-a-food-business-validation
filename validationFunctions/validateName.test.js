const validateName = require("./validateName");

describe("Function: validateName", () => {
  it("Should return false when type is not string", () => {
    // Arrange
    const badName = [[], {}, null, undefined];
    // Act
    badName.forEach(name => {
      // Assert
      const valid = validateName(name);
      expect(valid).toBe(false);
    });
  });

  it("Should return true when the input is non-empty and 255 characters or less", () => {
    //Arrange
    const goodName = [
      "Joe§",
      "Django! Café",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce imperdiet semper neque, vel semper lacus commodo eu. Nunc accumsan ligula sed magna ornare blandit. Mauris at est finibus, rhoncus ligula sollicitudin, dapibus nulla. Phasellus elementum dolor"
    ];
    //Act
    goodName.forEach(name => {
      //Assert
      const valid = validateName(name);
      expect(valid).toBe(true);
    });
  });

  it("Should return false if string is empty or contains only blank chars", () => {
    //Arrange
    const badNames = ["", " ", "       "];
    //Act
    badNames.forEach(name => {
      const valid = validateName(name);
      expect(valid).toBe(false);
    });
    //Assert
  });

  it("Should return false when input is greater than 255 characters", () => {
    // Arrange
    const badStrings = [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce imperdiet semper neque, vel semper lacus commodo eu. Nunc accumsan ligula sed magna ornare blandit. Mauris at est finibus, rhoncus ligula sollicitudin, dapibus nulla. Phasellus elementum dolor."
    ];

    // Act
    badStrings.forEach(string => {
      // Assert
      const valid = validateName(string);
      expect(valid).toBe(false);
    });
  });
});
