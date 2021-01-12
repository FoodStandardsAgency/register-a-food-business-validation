/**
 * Function for validating the partners array
 * @module functions/validatePartnersAreUnique
 */

/**
 * Runs custom validation on the partners array. It will be true if the supplied argument is an array with no duplicate partner values.
 *
 * @param {Object[]} partners The list of partners supplied by the user
 *
 * @returns {boolean} It will return true if the argument is an array with no duplicate partner values, false otherwise.
 */

const validatePartnersAreUnique = (partners) => {
  var uniquePartners = new Set(partners);
  return uniquePartners.size === partners.length;
};

module.exports = validatePartnersAreUnique;
