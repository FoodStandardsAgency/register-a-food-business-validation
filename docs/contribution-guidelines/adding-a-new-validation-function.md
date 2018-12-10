# Adding a new validation

To add a new data field you must update the UI, E2E, and unit tests, create custom validation, and ensure that it is displayed and submitted in the correct format.

## Steps:

1.  Write the unit tests for the new function. For more information, see [Writing unit tests](./writing-unit-tests.md)
2.  The function should take the field to be validated as its input and return true or false based on whether or not it passes the validation criteria. The npm validator package can be used to do common validation. For more information, see [Using npm validator package](./using-npm-validator-package-for-custom-validation.md).

```javascript
const validationFunctionExample = dataToBeValidated => {
  // validation code
  return true / false;
};
```

3.  Export the validation function. For more information, see [Exporting a new validation function](./exporting-a-new-validation-function.md)
