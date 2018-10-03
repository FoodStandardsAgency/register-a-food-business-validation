const validateOpeningDay = day => {
  if (day === true || day === false) {
    return true;
  }
  return false;
};

module.exports = validateOpeningDay;
