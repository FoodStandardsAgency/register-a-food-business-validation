/**
 * Function for validating the customer type mandatory field
 * @module functions/validateCustomerType
 */

/**
 * Runs custom validation on the string customer type. It will be true if the input is any of the allowed values("Other businesses", "End consumer", "End consumer and other businesses"). Empty string will return false as the field is mandatory.
 *
 * @param {string} customerType The text string of the customer type the user supplies
 *
 * @returns {boolean} It will return true if the string is valid and false if it is not valid
 */
const validateCustomerType = customerType => {
  const allowedValues = [
    "Other businesses",
    "End consumer",
    "End consumer and other businesses"
  ];

  if (allowedValues.includes(customerType)) {
    return true;
  }
  return false;
};

module.exports = validateCustomerType;
