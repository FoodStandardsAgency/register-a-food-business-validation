const validateEmail = require("./validateEmail");

describe("Function: validateEmail", () => {
  it("Should return false if type is not string", () => {
    // Arrange
    const badEmails = [[], {}, undefined, null];

    // Act
    badEmails.forEach((email) => {
      // Assert
      const valid = validateEmail(email);
      expect(valid).toBe(false);
    });
  });

  it("Should return false if string is empty or contains only blank chars", () => {
    // Arrange
    const badEmails = ["", " ", "       "];

    // Act
    badEmails.forEach((email) => {
      // Assert
      const valid = validateEmail(email);
      expect(valid).toBe(false);
    });
  });

  it("Should return false if string is not a valid e-mail", () => {
    // Arrange
    const badEmails = ["bademail.com", "bademail@bademail", "iama bademail1"];
    // Act
    badEmails.forEach((email) => {
      // Assert
      const valid = validateEmail(email);
      expect(valid).toBe(false);
    });
  });

  it("Should return false if string is not a valid e-mail (Invalid Characters)", () => {
    // Arrange
    const badEmails = [
      "badmai$l@email.com",
      "Owner.me..7080@abcd.com",
      "Inownzsite()&@abcd.com",
      "Ourwebsiteismne.azbyz.com",
      "badémail@bad.com",
      "yourminewebsite@.com.you",
      "@youmenandwe.we.ne",
      "Younourmetd345@abcd.b"
    ];
    // Act
    badEmails.forEach((email) => {
      // Assert
      const valid = validateEmail(email);
      expect(valid).toBe(false);
    });
  });

  it("Should return false if greater than 254 characters", () => {
    //Arrange
    const badEmails = [
      "LoremipsumdolorsitametconsectetueradipiscingelitAeneancommodoligulaegetdolorAeneanmassa.CumsociisnatoquepenatibusetmagnisdisparturientmontesnasceturridiculusmusDonecquamfelisultriciesnecpellentesqueeupretiumquis@testyMctestemailaddressthatislongerthan254characters.com"
    ];
    //Act
    badEmails.forEach((email) => {
      //Assert
      const valid = validateEmail(email);
      expect(valid).toBe(false);
    });
  });

  it("Should return true if is non empty and valid email address", () => {
    // Arrange
    const goodEmails = [
      "anishasawesome@avacado.com",
      "joejolly1@gmail.co.uk",
      "django123@hotmail.com"
    ];
    // Act
    goodEmails.forEach((email) => {
      // Assert
      const valid = validateEmail(email);
      expect(valid).toBe(true);
    });
  });

  it("Should return true if there is an empty space before or after the e-mail", () => {
    // Arrange
    const goodEmails = [
      "                     anishasawesome@avacado.com                               ",
      " joejolly1@gmail.co.uk",
      "django123@hotmail.com  "
    ];
    // Act
    goodEmails.forEach((email) => {
      // Assert
      const valid = validateEmail(email);
      expect(valid).toBe(true);
    });
  });
});
