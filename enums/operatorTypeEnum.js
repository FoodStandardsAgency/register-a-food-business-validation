const operatorTypeEnum = {
  SOLETRADER: {
    key: "SOLETRADER",
    value: {
      en: "Sole trader",
      cy: "Unig fasnachwr"
    }
  },
  PARTNERSHIP: {
    key: "PARTNERSHIP",
    value: { en: "Partnership", cy: "Partneriaeth" }
  },
  PERSON: {
    key: "PERSON",
    value: {
      en: "A person (registered by a representative)",
      cy: "Person sy'n berchen ar y busnes bwyd neu sy'n ei weithredu"
    }
  },
  COMPANY: {
    key: "COMPANY",
    value: {
      en: "A company (registered by a representative)",
      cy: "Cwmni cyfyngedig sy'n berchen ar y busnes bwyd neu sy'n ei weithredu"
    }
  },
  CHARITY: {
    key: "CHARITY",
    value: {
      en: "A charity (registered by a representative)",
      cy: "Elusen, sefydliad neu ymddiriedolaeth sy'n berchen ar y busnes bwyd neu sy'n ei weithredu"
    }
  }
};

module.exports = { operatorTypeEnum };
