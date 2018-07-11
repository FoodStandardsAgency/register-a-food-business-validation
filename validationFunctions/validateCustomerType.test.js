const validateCustomerType = require("./validateCustomerType");

describe("Function: validateCustomerType", () => {
    it("should return true when type is one of the three allowed types", () => {
        // Arrange
        const allowedCustomerTypes = ["Other businesses", "End consumer", "End consumer and other businesses"];

        // Act
        allowedCustomerTypes.forEach(customerType => {
            // Assert
            const valid = validateCustomerType(customerType);
            expect(valid).toBe(true);
        });
    })

    it("should return false when type is not one of the three allowed types", () => {
        // Arrange
        const notAllowedCustomerTypes = ["", undefined, "438574hfeuhgjhgk"];

        // Act
        notAllowedCustomerTypes.forEach(notCustomerType => {
            // Assert
            const valid = validateCustomerType(notCustomerType);
            expect(valid).toBe(false);
        });
    });
})