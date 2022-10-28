const fs = require("fs");
const axios = require("axios");

const { businessTypeEnum_cy } = require("./enums/businessTypes-cy-temp.js");

// Mapping V2 Business Type strings to V1 strings
const v1BusinessTypesMapping = {
  "Hunter and trapper": "Hunting and trapping",
  "Dairy and cheese manufacturer": "Dairies and cheese manufacturer",
  "Sweet shop or confectioner": "Sweet shop or Confectioner",
  "Market stall with permanent location": "Market stalls with permanent pitch",
  "Restaurant, cafe, canteen, or fast food restaurant":
    "Restaurant, cafe, canteen or fast food",
  "Hostel or bed & breakfast": "Hostel or bed and breakfast ",
  "Commercial Bakery": "Commercial bakery",
  "Childcare, nursery or play group": "Childcarer, nursery or play group"
};

const updateBusinessTypesEnum = async () => {
  const businessTypesData = await axios(
    "https://data.food.gov.uk/codes/business/rafb/establishment-type?_format=jsonld"
  );

  const businessTypesJSON = businessTypesData.data;

  const newBusinessTypesArray = Object.values(
    JSON.parse(JSON.stringify(businessTypesJSON["@graph"]))
  );

  const searchTermData = await axios(
    "https://raw.githubusercontent.com/FoodStandardsAgency/Future-Risk-Engine-Development/master/business-types.json"
  );

  const searchTermJSON = searchTermData.data;

  const newSearchTermDataArray = Object.values(
    JSON.parse(JSON.stringify(searchTermJSON))
  );

  const businessTypeEnum = {};

  function getDisplayNames(prefLabel) {
    const displayNames = {};
    if (prefLabel) {
      if (Array.isArray(prefLabel)) {
        prefLabel.forEach((label) => {
          displayNames[label["@language"]] = label["@value"];
        });
      } else {
        displayNames[prefLabel["@language"]] = prefLabel["@value"];
      }
    }
    return displayNames;
  }

  newBusinessTypesArray.forEach((businessType) => {
    const displayNames = getDisplayNames(businessType["skos:prefLabel"]);
    if (businessType["skos:notation"] && displayNames.en) {
      businessTypeEnum[businessType["skos:notation"]] = {
        key: businessType["skos:notation"],
        value: {
          en: displayNames.en,
          cy: businessTypeEnum_cy[businessType["skos:notation"]].value // Temporarily use hard coded welsh translations until source repos are updated
        },
        searchTerms: {
          en: [],
          cy: businessTypeEnum_cy[businessType["skos:notation"]].searchTerms // Temporarily use hard coded welsh translations until source repos are updated
        }
      };
    }
  });

  const businessTypeKeys = Object.keys(businessTypeEnum);

  newSearchTermDataArray.forEach((searchTermData) => {
    const businessTypeKey = businessTypeKeys.find(
      (key) =>
        searchTermData.displayName === businessTypeEnum[key].value.en ||
        searchTermData.displayName ===
          v1BusinessTypesMapping[businessTypeEnum[key].value.en]
    );

    if (businessTypeKey) {
      businessTypeEnum[businessTypeKey].searchTerms.en =
        searchTermData.searchTerms;
    }
  });

  const enumFilename = "./enums/businessTypeEnum.js";
  fs.writeFile(
    enumFilename,
    `const businessTypeEnum=${JSON.stringify(
      businessTypeEnum
    )}; module.exports={businessTypeEnum};`,
    (err) => {
      if (err) {
        return console.log(err);
      }
      console.log(`SUCCESS: ${enumFilename} updated.`);
    }
  );
};

updateBusinessTypesEnum();
