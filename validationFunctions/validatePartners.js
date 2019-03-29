const validatePartners = partners => {
  if (Array.isArray(partners)) {
    if (partners.length >= 2 && partners.length <= 5) {
      return true;
    }
  }
  return false;
};

module.exports = validatePartners;
