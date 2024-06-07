const processingActivitiesEnum = {
  VACUUM_PACKING: {
    key: "VACUUM_PACKING",
    value: {
      en: "Vacuum packing"
    }
  },
  SOUS_VIDE: {
    key: "SOUS_VIDE",
    value: { en: "Sous vide" }
  },
  FERMENTING_OR_CURING: {
    key: "FERMENTING_OR_CURING",
    value: { en: "Fermenting and or curing of meat and fish" }
  },
  PASTEURISING: {
    key: "PASTEURISING",
    value: { en: "Pasteurisation" }
  },
  ANIMAL_UNCOOKED: {
    key: "ANIMAL_UNCOOKED",
    value: {
      en: "Production of foods of animal origin that are not thoroughly cooked (for example steak tartare, ceviche, carpaccio)"
    }
  },
  REWRAPPING_OR_RELABELLING: {
    key: "REWRAPPING_OR_RELABELLING",
    value: { en: "Rewrapping and relabelling previously wrapped food" }
  },
  NONE: {
    key: "NONE",
    value: { en: "None of these" }
  },
  DONT_KNOW: {
    key: "DONT_KNOW",
    value: {
      en: "Don't know"
    }
  }
};
module.exports = { processingActivitiesEnum };
