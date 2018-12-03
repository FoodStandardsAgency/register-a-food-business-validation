/**
 * Function for validating the customer type mandatory field
 * @module functions/validateCustomerType
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
