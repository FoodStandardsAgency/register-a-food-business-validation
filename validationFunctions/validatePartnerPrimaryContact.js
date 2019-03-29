const validatePartnerPrimaryContact = partners => {
  if (Array.isArray(partners)) {
    const mainPartnershipContacts = partners.filter(
      partner => partner.is_primary_contact === true
    );
    if (mainPartnershipContacts.length === 1) {
      return true;
    }
  }
  return false;
};

module.exports = validatePartnerPrimaryContact;
