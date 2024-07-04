const processingActivitiesEnum = {
  VACUUM_PACKING: {
    key: "VACUUM_PACKING",
    value: {
      en: "Vacuum packing",
      cy: "Pecynnu dan wactod"
    }
  },
  SOUS_VIDE: {
    key: "SOUS_VIDE",
    value: { en: "Sous vide", cy: "Sous vide" }
  },
  FERMENTING_OR_CURING: {
    key: "FERMENTING_OR_CURING",
    value: {
      en: "Fermenting and or curing of meat and fish",
      cy: "Eplesu a/neu halltu cig neu bysgod"
    }
  },
  PASTEURISING: {
    key: "PASTEURISING",
    value: { en: "Pasteurisation", cy: "Pasteureiddio" }
  },
  ANIMAL_UNCOOKED: {
    key: "ANIMAL_UNCOOKED",
    value: {
      en: "Production of foods of animal origin that are not thoroughly cooked (for example steak tartare, ceviche, carpaccio)",
      cy: "Cynhyrchu bwydydd sy’n dod o anifeiliaid nad ydynt yn cael eu coginio’n drylwyr (er enghraifft stêc tartare, ceviche, carpaccio)"
    }
  },
  REWRAPPING_OR_RELABELLING: {
    key: "REWRAPPING_OR_RELABELLING",
    value: {
      en: "Rewrapping and relabelling previously wrapped food",
      cy: "Ail-lapio ac ail-labelu bwyd sydd wedi’i lapio’n flaenorol"
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
module.exports = { processingActivitiesEnum };
