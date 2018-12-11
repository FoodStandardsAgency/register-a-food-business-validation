# Using the npm validator package

Some of the validation functions created are generic e.g. phone number or email address. Due to this the npm package `validator` is used as it widely implemented and well documented. For more information, see [validator](https://www.npmjs.com/package/validator)

## Steps:

1.  Import the validator function to be used

```javascript
const { functionToBeUsed } = require("validator")
};
```

2.  Use the function as needed in the custom validation function
