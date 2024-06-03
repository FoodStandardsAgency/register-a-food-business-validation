const businessScaleEnum = {
  LOCAL: {
    key: "LOCAL",
    value: {
      en: "To local customers (who live or work in the local area)"
    }
  },
  NATIONAL: {
    key: "NATIONAL",
    value: { en: "To national customers (who live or work across the UK)" }
  },
  EXPORT: {
    key: "EXPORT",
    value: { en: "To those outside of the UK (for export)" }
  },
  ONLINE: {
    key: "ONLINE",
    value: { en: "To provide food online" }
  },
  FBO: {
    key: "FBO",
    value: { en: "To provide food directly to other businesses" }
  },
  SENIOR_YOUTH: {
    key: "SENIOR_YOUTH",
    value: { en: "To those under 5 years old or over 65 years old" }
  },
  HEALTHCARE: {
    key: "HEALTHCARE",
    value: {
      en: "To residents in a healthcare setting(for example in a hospital, nursing home or similar)"
    }
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
module.exports = { businessScaleEnum };
