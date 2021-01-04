const validatePartnersAreDifferent = require("./validatePartnersAreDifferent");

describe("Function: validatePartnersAreDifferent", () => {
  it("Should return false if any value in array is duplicated", () => {
    //Arrange
    const duplicatesPartnersArray = [
      {
        name: "John Baker",
        is_primary_contact: true,
      },
      {
        name: "John Baker",
        is_primary_contact: false,
      },
      { name: "Matt", is_primary_contact: false },
    ];
    //Act
    const valid = validatePartnersAreDifferent(
      duplicatesPartnersArray
    );
    //Assert
    expect(valid).toBe(false);
  });

  it("Should return true if array has no duplicate values", () => {
    //Arrange
    const validPartnersArray = [
      {
        name: "John Baker",
        is_primary_contact: true,
      },
      { name: "Matt", is_primary_contact: false },
    ];
    //Act
    const valid = validatePartnersAreDifferent(
      validPartnersArray
    );
    //Assert
    expect(valid).toBe(true);
  });
});
