/**
 * Function for validating the partners array
 * @module functions/validatePartnersAreDifferent
 */

/**
 * Runs custom validation on the partners array. It will be true if the supplied argument is an array with no duplicate partner values.
 *
 * @param {Object[]} partners The list of partners supplied by the user
 *
 * @returns {boolean} It will return true if the argument is an array with no duplicate partner values, false otherwise.
 */

const validatePartnersAreDifferent = (
  partners
) => {
  var i;
  for (i = 1; i < partners.length; i++) {
    if (
      partners[i - 1].name === partners[i].name
    ) {
      return false;
    } else {
      return true;
    }
  }
};

module.exports = validatePartnersAreDifferent;
