const validateOptionalString = require("./validateOptionalString");

describe("Function: validateOptionalString", () => {
  it("Should return false when type is not string", () => {
    // Arrange
    const badString = [[], {}, null, undefined];
    // Act
    badString.forEach(string => {
      // Assert
      const valid = validateOptionalString(string);
      expect(valid).toBe(false);
    });
  });

  it("Should return true when input is empty", () => {
    // Arrange
    const string = "";

    // Act
    const valid = validateOptionalString(string);

    expect(valid).toBe(true);
  });

  it("Should return false when input is blank string", () => {
    // Arrange
    const string = "    ";

    // Act
    const valid = validateOptionalString(string);

    expect(valid).toBe(false);
  });

  it("Should return false if string contains non Ascii chars", () => {
    // Arrange
    const badStrings = ["§", "¥", "«® ¢"];

    // Act
    badStrings.forEach(string => {
      // Assert
      const valid = validateOptionalString(string);
      expect(valid).toBe(false);
    });
  });

  it("Should return true when input is Ascii string", () => {
    // Arrange
    const goodStrings = ["I am a good string", "Best String"];

    // Act
    goodStrings.forEach(string => {
      // Assert
      const valid = validateOptionalString(string);
      expect(valid).toBe(true);
    });
  });

  it("Should return true when input is 255 characters", () => {
    // Arrange
    const goodStrings = [
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis,"
    ];

    // Act
    goodStrings.forEach(string => {
      // Assert
      const valid = validateOptionalString(string);
      expect(valid).toBe(true);
    });
  });

  it("Should return false when input is 256 characters", () => {
    // Arrange
    const badStrings = [
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis,."
    ];

    // Act
    badStrings.forEach(string => {
      // Assert
      const valid = validateOptionalString(string);
      expect(valid).toBe(false);
    });
  });
});
