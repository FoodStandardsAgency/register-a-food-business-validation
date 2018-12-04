/**
 * Function for validating mandatory radio button fields
 * @module functions/validateRadioButtons
 */

/**
 * Runs custom validation on radio buttons. The function returns true if a radio button has been selected (data field has a value) and false if it doesnt as it is a mandatory field.
 *
 * @param {string} radioSelected The text string of the declaration statement the user supplies
 *
 * @returns {boolean} It will return true if the string is valid and false if it is not valid
 */

const validateRadioButtons = radioSelected => {
  return radioSelected ? true : false;
};

module.exports = validateRadioButtons;
