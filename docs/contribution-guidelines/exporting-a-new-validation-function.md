# Exporting a new validation function

To export a new validation function you need to export the module from the file it was written in and then export it from the index page. Exporting it from the index page means they can all be imported together when required rather than individually.

## Steps:

1.  Using `module.exports` export the function in the page it was created
2.  `require` the function in [index.js](../index.js)
3.  Using `module.exports` export the function from the index.js
