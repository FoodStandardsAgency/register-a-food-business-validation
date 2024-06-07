/**
 * Function for validating the business scale activities field
 * @module functions/validateProcessingActivities
 */

const {
  processingActivitiesEnum
} = require("../enums/processingActivitiesEnum");

/**
 * Runs custom validation on the processing activity. The function will return true if:
 * - The input contains any combination of the allowed values except for 'NONE' and 'DONT_KNOW' being selected together with other values.
 * - 'NONE' and 'DONT_KNOW' can only be selected exclusively.
 * An empty array will return false as the field is mandatory.
 *
 * @param {Array<string>} processingActivities The array of strings representing the selected activities
 *
 * @returns {boolean} It will return true if the input is valid and false if it is not valid
 */
const validateProcessingActivities = (processingActivities) => {
  if (
    !Array.isArray(processingActivities) ||
    processingActivities.length === 0
  ) {
    return false;
  }

  // Check if 'NONE' or 'DONT_KNOW' are selected
  const hasNone = processingActivities.includes(
    processingActivitiesEnum.NONE.key
  );
  const hasDontKnow = processingActivities.includes(
    processingActivitiesEnum.DONT_KNOW.key
  );

  // If 'NONE' or 'DONT_KNOW' are selected, they must be the only selection
  if ((hasNone || hasDontKnow) && processingActivities.length > 1) {
    return false;
  }

  // Validate that each selected value is part of the proceessingActivitiesEnum
  for (let processingActivity of processingActivities) {
    if (!processingActivitiesEnum[processingActivity]) {
      return false;
    }
  }

  return true;
};

module.exports = validateProcessingActivities;
