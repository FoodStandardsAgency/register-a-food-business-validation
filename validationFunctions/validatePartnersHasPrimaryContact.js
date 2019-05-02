/**
 * Function for validating the partners array
 * @module functions/validatePartnersHasPrimaryContact
 */

/**
 * Runs custom validation on the partners array. It will be true if the supplied argument is an array having between 2 and 5 items, and one primary contact.
 *
 * @param {Object[]} partners The list of partners supplied by the user
 *
 * @returns {boolean} It will return true if the argument is an array with a minimum of 2 and a maximum of 5 items, and exactly one primary contact is defined.
 */

const validatePartnersHasPrimaryContact = partners => {
  if (Array.isArray(partners)) {
    if (partners.length >= 2 && partners.length <= 5) {
      const mainPartnershipContacts = partners.filter(
        partner => partner.partner_is_primary_contact === true
      );
      if (mainPartnershipContacts.length === 1) {
        return true;
      }
    }
  }
  return false;
};

module.exports = validatePartnersHasPrimaryContact;
