const businessScaleEnum = {
  LOCAL: {
    key: "LOCAL",
    value: {
      en: "To local customers (who live or work in the local area)",
      cy: "I gwsmeriaid lleol (sy’n byw neu’n gweithio yn yr ardal leol)"
    }
  },
  NATIONAL: {
    key: "NATIONAL",
    value: {
      en: "To national customers (who live or work across the UK)",
      cy: "I gwsmeriaid cenedlaethol (sy’n byw neu’n gweithio ar draws y DU)"
    }
  },
  EXPORT: {
    key: "EXPORT",
    value: {
      en: "To those outside of the UK (for export)",
      cy: "I’r rhai y tu allan i’r DU (ar gyfer allforio)"
    }
  },
  ONLINE: {
    key: "ONLINE",
    value: { en: "To provide food online", cy: "I ddarparu bwyd ar-lein" }
  },
  FBO: {
    key: "FBO",
    value: {
      en: "To provide food directly to other food businesses",
      cy: "I ddarparu bwyd yn uniongyrchol i fusnesau bwyd eraill"
    }
  },
  SENIOR_YOUTH: {
    key: "SENIOR_YOUTH",
    value: {
      en: "To those under 5 years old or over 65 years old",
      cy: "I’r rhai dan 5 oed a/neu dros 65 oed"
    }
  },
  HEALTHCARE: {
    key: "HEALTHCARE",
    value: {
      en: "To residents in a healthcare setting (for example in a hospital, nursing home or similar)",
      cy: "I breswylwyr mewn lleoliad gofal iechyd (er enghraifft mewn ysbyty, cartref nyrsio neu debyg)"
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
module.exports = { businessScaleEnum };
