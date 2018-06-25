const validateOperatorType = require('./validateOperatorType');

describe("Function: validateOperatortype", () => {
    it("should return false if operator type is empty", () => {
        // Arrange
        const operatorType = "";
        // Act
        const valid = validateOperatorType(operatorType);
        // Assert
        expect(valid).toBe(false);
    });

    it("should return true if operator type is truthy", () => {
        // Arrange
        const operatorType = "Truthy value";
        // Act
        const valid = validateOperatorType(operatorType);
        // Assert
        expect(valid).toBe(true);
    });
});