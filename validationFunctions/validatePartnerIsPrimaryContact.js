/**
 * Function for validating the partner_is_primary_contact attribute
 * @module functions/validatePartnerIsPrimaryContact
 */

/**
 * Runs custom validation on the partner_is_primary_contact. It will be true if the input is either true or false. Empty input will also return false.
 *
 * @param {boolean} partner_is_primary_contact Whether the partner is the main partnership contact
 *
 * @returns {boolean} It will return true if the supplied argument is a boolean
 */

const validatePartnerIsPrimaryContact = (partner_is_primary_contact) => {
  if (
    partner_is_primary_contact === true ||
    partner_is_primary_contact === false
  ) {
    return true;
  }
  return false;
};

module.exports = validatePartnerIsPrimaryContact;
