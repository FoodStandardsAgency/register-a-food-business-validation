# Adding a new validation

To add a new validation function you must write unit tests, create the custom validation function, and export it.

## Steps:

1.  Write the unit tests for the new function. For more information, see [Writing unit tests](./writing-unit-tests.md)
2.  Creta e anew file and write the validation function in it. The function should take the field to be validated as its input and return true or false based on whether or not it passes the validation criteria. The npm validator package can be used to do common validation. For more information, see [Using npm validator package](./using-npm-validator-package-for-custom-validation.md).

```javascript
const validationFunctionExample = dataToBeValidated => {
  // validation code
  return true / false;
};
```

3.  Export the validation function. For more information, see [Exporting a new validation function](./exporting-a-new-validation-function.md)
4.  Re-publish the validation package. For more information, see [Re-publishing the package](./republishing-the-repository-as-an-npm-package.md)
