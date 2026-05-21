# Writing unit tests

Every validation function in this repository must have a matching unit test file.

## Where to put tests

- Test files live next to the validation function they cover.
- Use the same base name as the function file, with `.test.js` appended.
- Example: `validationFunctions/validateEmail.js` -> `validationFunctions/validateEmail.test.js`

## Test framework

- This project uses Jest for unit tests.
- Run tests with `npm test`.
- During development, use `npm run test:watch` to rerun tests automatically.

## File structure

A standard validation test file uses `describe` and `it` blocks:

```javascript
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
});
```

## What to test

When writing validation tests, cover:

- invalid input types (e.g. non-string values)
- empty strings or strings with only whitespace
- invalid values for the specific domain rule
- valid values that should be accepted
- edge cases such as maximum length or optional whitespace

## Example expectations

- `expect(valid).toBe(false)` for invalid values
- `expect(valid).toBe(true)` for valid values

## Keep tests maintainable

- Keep the name of the test file and the function under test aligned.
- Keep each `it` block focused on a single behavior.
- Group similar invalid inputs in one test block when appropriate.
- Avoid overly broad tests that hide the reason for failure.
