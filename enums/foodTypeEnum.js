const foodTypeEnum = {
  RAW_MEAT: {
    key: "RAW_MEAT",
    value: {
      en: "Raw unwrapped meat, fish and shellfish"
    }
  },
  READY_TO_EAT: {
    key: "READY_TO_EAT",
    value: {
      en: "Ready to eat food (food that will not be cooked or reheated before serving)"
    }
  },
  COOKED_OR_REHEATED: {
    key: "COOKED_OR_REHEATED",
    value: {
      en: "Food that has been cooked and/or reheated in the establishment"
    }
  },
  IMPORTED: {
    key: "IMPORTED",
    value: { en: "Food that your business has imported (from outside the UK)" }
  },
  NONE: {
    key: "NONE",
    value: { en: "None" }
  },
  DONT_KNOW: {
    key: "DONT_KNOW",
    value: {
      en: "Don't know"
    }
  }
};
module.exports = { foodTypeEnum };
