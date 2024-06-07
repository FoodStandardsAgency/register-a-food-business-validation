/**
 * Function for validating the business scale activities field
 * @module functions/validateBusinessScale
 */

const { businessScaleEnum } = require("../enums/businessScaleEnum");

/**
 * Runs custom validation on the business scale activities. The function will return true if:
 * - The input contains any combination of the allowed values except for 'NONE' and 'DONT_KNOW' being selected together with other values.
 * - 'NONE' and 'DONT_KNOW' can only be selected exclusively.
 * An empty array will return false as the field is mandatory.
 *
 * @param {Array<string>} businessScales The array of strings representing the selected business scale activities
 *
 * @returns {boolean} It will return true if the input is valid and false if it is not valid
 */
const validateBusinessScale = (businessScales) => {
  if (!Array.isArray(businessScales) || businessScales.length === 0) {
    return false;
  }

  // Check if 'NONE' or 'DONT_KNOW' are selected
  const hasNone = businessScales.includes(businessScaleEnum.NONE.key);
  const hasDontKnow = businessScales.includes(businessScaleEnum.DONT_KNOW.key);

  // If 'NONE' or 'DONT_KNOW' are selected, they must be the only selection
  if ((hasNone || hasDontKnow) && businessScales.length > 1) {
    return false;
  }

  // Validate that each selected value is part of the businessScaleEnum
  for (let businessScale of businessScales) {
    if (!businessScaleEnum[businessScale]) {
      return false;
    }
  }

  return true;
};

module.exports = validateBusinessScale;
