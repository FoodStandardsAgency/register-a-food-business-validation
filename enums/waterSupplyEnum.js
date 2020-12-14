const waterSupplyEnum = {
  PUBLIC: {
    key: "PUBLIC",
    value: { en: "Public", cy: "Dŵr o’r prif gyflenwad" }
  },
  PRIVATE: {
    key: "PRIVATE",
    value: { en: "Private", cy: "Cyflenwad dŵr preifat" }
  },
  BOTH: {
    key: "BOTH",
    value: {
      en: "Public and private",
      cy: "Prif gyflenwad a chyflenwad dŵr preifat"
    }
  }
};
module.exports = { waterSupplyEnum };
