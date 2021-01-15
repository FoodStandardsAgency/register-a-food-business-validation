/**
 * Function for validating the partners array
 * @module functions/validatePartners
 */

/**
 * Runs custom validation on the partners array. It will be true if the supplied argument is an array having between 2 and 5 items with no duplicate partner values.
 *
 * @param {Object[]} partners The list of partners supplied by the user
 *
 * @returns {boolean} It will return true if the argument is an array with a minimum of 2 and a maximum of 5 items with no duplicate partner values, false otherwise.
 */

const validatePartners = (partners) => {
  if (Array.isArray(partners)) {
    var uniquePartners = new Set(partners);
    if (
      partners.length >= 2 &&
      partners.length <= 5 &&
      uniquePartners.size === partners.length
    ) {
      return true;
    } else {
      return false;
    }
  }
  return false;
};

module.exports = validatePartners;
