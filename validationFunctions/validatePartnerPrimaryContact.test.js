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
      { name: "", partner_is_primary_contact: true },
      { name: "", partner_is_primary_contact: true },
      { name: "", partner_is_primary_contact: false },
      { name: "", partner_is_primary_contact: false },
      { name: "", partner_is_primary_contact: false }
    ];
    //Act
    const valid = validatePartnerPrimaryContact(twoPrimaryContacts);
    //Assert
    expect(valid).toBe(false);
  });

  it("Should return false if no primary contact is specified", () => {
    //Arrange
    const noPrimaryContact = [
      { name: "", partner_is_primary_contact: false },
      { name: "", partner_is_primary_contact: false },
      { name: "", partner_is_primary_contact: false },
      { name: "", partner_is_primary_contact: false }
    ];
    //Act
    const valid = validatePartnerPrimaryContact(noPrimaryContact);
    //Assert
    expect(valid).toBe(false);
  });

  it("Should return true when the array has exactly one primary contact", () => {
    //Arrange
    const onePrimaryContact = [
      { name: "", partner_is_primary_contact: true },
      { name: "", partner_is_primary_contact: false },
      { name: "", partner_is_primary_contact: false },
      { name: "", partner_is_primary_contact: false },
      { name: "", partner_is_primary_contact: false }
    ];
    //Act
    const valid = validatePartnerPrimaryContact(onePrimaryContact);
    //Assert
    expect(valid).toBe(true);
  });

  it("Should return false when the array length is less than 2", () => {
    //Arrange
    const badPartnersLength = [{ name: "", partner_is_primary_contact: true }];
    //Act
    const valid = validatePartnerPrimaryContact(badPartnersLength);
    //Assert
    expect(valid).toBe(false);
  });
  it("Should return false when the array length is over 5", () => {
    //Arrange
    const badPartnersLength = [
      { name: "", partner_is_primary_contact: true },
      { name: "", partner_is_primary_contact: false },
      { name: "", partner_is_primary_contact: false },
      { name: "", partner_is_primary_contact: false },
      { name: "", partner_is_primary_contact: false },
      { name: "", partner_is_primary_contact: false },
      { name: "", partner_is_primary_contact: false },
      { name: "", partner_is_primary_contact: false }
    ];
    //Act
    const valid = validatePartnerPrimaryContact(badPartnersLength);
    //Assert
    expect(valid).toBe(false);
  });
  it("Should return true when the array length is between 2 and 5", () => {
    //Arrange
    const goodPartnersLength = [
      { name: "", partner_is_primary_contact: true },
      { name: "", partner_is_primary_contact: false },
      { name: "", partner_is_primary_contact: false }
    ];
    //Act
    const valid = validatePartnerPrimaryContact(goodPartnersLength);
    //Assert
    expect(valid).toBe(true);
  });
});
