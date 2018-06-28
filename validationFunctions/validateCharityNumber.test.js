const validateCharityNumber = require("./validateCharityNumber");

describe("Function: validateCharityNumber", () => {
    it("should return false when type is not string", () => {
        // Arrange
        const badCharityNumber = [[], {}, null, undefined];

        // Act
        badCharityNumber.forEach(charityNumber => {
            // Assert
            const valid = validateCharityNumber(charityNumber);
            expect(valid).toBe(false);
        });
    });

    it("should return false if charity number is empty", () => {
        // Arrange
        const badCharityNumbers = ["", " ", "       "];

        //Act
        badCharityNumbers.forEach(charityNumber => {
            const valid = validateCharityNumber(charityNumber);
            expect(valid).toBe(false);
        });
    });

    it("should return false if charity number is greater than 8 and less than 6 characters", () => {
        // Arrange
        const charityNumbers = ["123456789", "12345"];

        charityNumbers.forEach(charityNumber => {
            // Act
            const valid = validateCharityNumber(charityNumber);

            // Assert
            expect(valid).toBe(false);
        });
    });

    it("should return false if charity number is not alphaNumeric", () => {
        // Arrange
        const charityNumbers = ["123@!678", "1234a!5"];

        charityNumbers.forEach(charityNumber => {
            // Act
            const valid = validateCharityNumber(charityNumber);

            // Assert
            expect(valid).toBe(false);
        });
    });

    it("should return true if companies house number is 6-8 characters, Alphanumeric and may contain dashes", () => {
        // Arrange
        const charityNumbers = ["12345678", "123456", "12345-78", "--123456"];

        charityNumbers.forEach(charityNumber => {
            // Act
            const valid = validateCharityNumber(charityNumber);

            // Assert
            expect(valid).toBe(true);
        });
    });
});
