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
 * @param {Array<string>} businessScale The array of strings representing the selected business scale activities
 *
 * @returns {boolean} It will return true if the input is valid and false if it is not valid
 */
const validateBusinessScale = (businessScale) => {
  if (!Array.isArray(businessScale) || businessScale.length === 0) {
    return false;
  }

  // Check if 'NONE' or 'DONT_KNOW' are selected
  const hasNone = businessScale.includes(businessScaleEnum.NONE.key);
  const hasDontKnow = businessScale.includes(businessScaleEnum.DONT_KNOW.key);

  // If 'NONE' or 'DONT_KNOW' are selected, they must be the only selection
  if ((hasNone || hasDontKnow) && businessScale.length > 1) {
    return false;
  }

  // Validate that each selected value is part of the businessScaleEnum
  for (let activity of businessScale) {
    if (!businessScaleEnum[activity]) {
      console.log("val1" + activity);
      return false;
    }
  }

  console.log("val1 " + " val2");
  return true;
};

module.exports = validateBusinessScale;
