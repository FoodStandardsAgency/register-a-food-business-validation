/**
 * Function for validating the food type activities field
 * @module functions/validateFoodType
 */

const { foodTypeEnum } = require("../enums/foodTypeEnum");

/**
 * Runs custom validation on the food type activities. The function will return true if:
 * - The input contains any combination of the allowed values except for 'NONE' and 'DONT_KNOW' being selected together with other values.
 * - 'NONE' and 'DONT_KNOW' can only be selected exclusively.
 * An empty array will return false as the field is mandatory.
 *
 * @param {Array<string>} foodTypes The array of strings representing the selected food type activities
 *
 * @returns {boolean} It will return true if the input is valid and false if it is not valid
 */
const validateFoodType = (foodTypes) => {
  if (!Array.isArray(foodTypes) || foodTypes.length === 0) {
    return false;
  }

  // Check if 'NONE' or 'DONT_KNOW' are selected
  const hasNone = foodTypes.includes(foodTypeEnum.NONE.key);
  const hasDontKnow = foodTypes.includes(foodTypeEnum.DONT_KNOW.key);

  // If 'NONE' or 'DONT_KNOW' are selected, they must be the only selection
  if ((hasNone || hasDontKnow) && foodTypes.length > 1) {
    return false;
  }

  // Validate that each selected value is part of the foodTypeEnum
  for (let foodType of foodTypes) {
    if (!foodTypeEnum[foodType]) {
      return false;
    }
  }

  return true;
};

module.exports = validateFoodType;
