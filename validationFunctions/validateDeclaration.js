/**
 * Function for validating the declaration mandatory field
 * @module functions/validateDeclaration
 */

/**
 * Runs custom validation on the declaration checkboxes. The function returns true if the declaration exists and false if it doesnt as it is a mandatory field.
 *
 * @param {string} declaration The string of the declaration statement the user supplies
 *
 * @returns {boolean} It will return true if the string is valid and false if it is not valid
 */

const validateDeclaration = (declaration) => {
  return declaration ? true : false;
};

module.exports = validateDeclaration;
