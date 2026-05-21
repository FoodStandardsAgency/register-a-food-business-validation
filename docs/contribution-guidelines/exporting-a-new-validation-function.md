# Exporting a new validation function

To export a new validation function:

- Export the function from its own file using `module.exports = <functionName>`.
- Require that function in `index.js` using `require("./validationFunctions/<file>")`.
- Add it to the `module.exports` object in `index.js`.

Doing this allows consumers of the package to import all validation functions from the package entry point instead of requiring individual files.

This also applies to enums: anything you intend to use elsewhere must be exported from both its source file and from `index.js`.

## Steps:

1.  Use `module.exports` to export the function in the file where it was created.
2.  `require` the function in [index.js](../index.js).
3.  Add the function to the `module.exports` object in `index.js`.
