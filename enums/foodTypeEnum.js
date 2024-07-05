const foodTypeEnum = {
  RAW_MEAT_FISH_SHELLFISH: {
    key: "RAW_MEAT_FISH_SHELLFISH",
    value: {
      en: "Raw unwrapped meat, fish and shellfish",
      cy: "Cig, pysgod a physgod cregyn amrwd, heb eu lapio"
    }
  },
  READY_TO_EAT: {
    key: "READY_TO_EAT",
    value: {
      en: "Ready to eat food (food that will not be cooked or reheated before serving)",
      cy: "Bwyd parod i’w fwyta (bwyd na fydd yn cael ei goginio na’i ailgynhesu cyn ei weini)"
    }
  },
  COOKED_OR_REHEATED: {
    key: "COOKED_OR_REHEATED",
    value: {
      en: "Food that has been cooked and/or reheated in the establishment",
      cy: "Bwyd sydd wedi’i goginio a/neu ei ailgynhesu yn y sefydliad"
    }
  },
  IMPORTED: {
    key: "IMPORTED",
    value: {
      en: "Food that your business has imported (from outside the UK)",
      cy: "Bwyd y mae eich busnes wedi’i fewnforio (o’r tu allan i’r DU)"
    }
  },
  NONE: {
    key: "NONE",
    value: { en: "None of these", cy: "Dim un o’r rhain" }
  },
  DONT_KNOW: {
    key: "DONT_KNOW",
    value: {
      en: "Don't know",
      cy: "Ddim yn gwybod"
    }
  }
};
module.exports = { foodTypeEnum };
