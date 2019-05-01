const validatePartnerPrimaryContact = partners => {
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

module.exports = validatePartnerPrimaryContact;
