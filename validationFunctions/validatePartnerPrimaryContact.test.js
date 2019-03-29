const validatePartnerPrimaryContact = require("./validatePartnerPrimaryContact");

describe("Function: validatePartnerPrimaryContact", () => {
  it("Should return false when type is not array", () => {
    // Arrange
    const badPartners = ["", {}, null, undefined];
    // Act
    badPartners.forEach(partner => {
      // Assert
      const valid = validatePartnerPrimaryContact(partner);
      expect(valid).toBe(false);
    });
  });

  it("Should return false if more than one primary contact is specified", () => {
    //Arrange
    const twoPrimaryContacts = [
      { name: "", is_primary_contact: true },
      { name: "", is_primary_contact: true },
      { name: "", is_primary_contact: false },
      { name: "", is_primary_contact: false },
      { name: "", is_primary_contact: false }
    ];
    //Act
    const valid = validatePartnerPrimaryContact(twoPrimaryContacts);
    //Assert
    expect(valid).toBe(false);
  });

  it("Should return false if no primary contact is specified", () => {
    //Arrange
    const noPrimaryContact = [
      { name: "", is_primary_contact: false },
      { name: "", is_primary_contact: false },
      { name: "", is_primary_contact: false },
      { name: "", is_primary_contact: false }
    ];
    //Act
    const valid = validatePartnerPrimaryContact(noPrimaryContact);
    //Assert
    expect(valid).toBe(false);
  });

  it("Should return true when the array has exactly one primary contact", () => {
    //Arrange
    const onePrimaryContact = [
      { name: "", is_primary_contact: true },
      { name: "", is_primary_contact: false },
      { name: "", is_primary_contact: false },
      { name: "", is_primary_contact: false },
      { name: "", is_primary_contact: false }
    ];
    //Act
    const valid = validatePartnerPrimaryContact(onePrimaryContact);
    //Assert
    expect(valid).toBe(true);
  });
});
