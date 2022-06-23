const validateFsaReferenceNumber = require("./validateFsaRn");

describe("Function: validateFsaReferenceNumber", () => {
  it("should return false when type is not string", () => {
    // Arrange
    const fsaRns = [[], {}, null, undefined];

    // Act / Assert
    fsaRns.forEach((fsaRn) => {
      const valid = validateFsaReferenceNumber(fsaRn);
      expect(valid).toBe(false);
    });
  });

  it("should return true if reference number is empty", () => {
    // Arrange
    const fsaRns = [""];

    // Act / Assert
    fsaRns.forEach((fsaRn) => {
      const valid = validateFsaReferenceNumber(fsaRn);
      expect(valid).toBe(true);
    });
  });

  it("should return false if reference number does not match expected format", () => {
    // Arrange
    const fsaRns = [
      "123456789",
      "A23(+678",
      "12AB34-56CD78-90EF1",
      "2AB34-56CD78-90EF12",
      "12AB3456CD7890EF12",
      " "
    ];

    // Act / Assert
    fsaRns.forEach((fsaRn) => {
      const valid = validateFsaReferenceNumber(fsaRn);
      expect(valid).toBe(false);
    });
  });

  it("should return true if reference number is the correct format", () => {
    // Arrange
    const fsaRns = [
      "12AB34-56CD78-90EF12",
      "123456-789012-345678",
      "ABCDEF-GHIJKL-MNOPQR"
    ];

    // Act / Assert
    fsaRns.forEach((fsaRn) => {
      const valid = validateFsaReferenceNumber(fsaRn);
      expect(valid).toBe(true);
    });
  });
});
