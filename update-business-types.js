const fs = require("fs");
const fetch = require("node-fetch");

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
  const businessTypesData = await fetch(
    "https://data.food.gov.uk/codes/business/rafb/establishment-type?_format=jsonld"
  );

  const businessTypesJSON = await businessTypesData.json();

  const newBusinessTypesArray = Object.values(
    JSON.parse(JSON.stringify(businessTypesJSON["@graph"]))
  );

  const searchTermData = await fetch(
    "https://raw.githubusercontent.com/FoodStandardsAgency/Future-Risk-Engine-Development/master/business-types.json"
  );

  const searchTermJSON = await searchTermData.json();

  const newSearchTermDataArray = Object.values(
    JSON.parse(JSON.stringify(searchTermJSON))
  );

  const businessTypeEnum = {};

  function getDisplayNames(prefLabel) {
    const displayNames = {};
    if (prefLabel) {
      if (Array.isArray(prefLabel)) {
        prefLabel.forEach(label => {
          displayNames[label["@language"]] = label["@value"];
        });
      } else {
        displayNames[prefLabel["@language"]] = prefLabel["@value"];
      }
    }
    return displayNames;
  }

  newBusinessTypesArray.forEach(businessType => {
    const displayNames = getDisplayNames(businessType["skos:prefLabel"]);
    if (businessType["skos:notation"] && displayNames.en) {
      businessTypeEnum[businessType["skos:notation"]] = {
        key: businessType["skos:notation"],
        value: displayNames.en,
        searchTerms: []
      };
    }
  });

  const businessTypeKeys = Object.keys(businessTypeEnum);

  newSearchTermDataArray.forEach(searchTermData => {
    const businessTypeKey = businessTypeKeys.find(
      key =>
        searchTermData.displayName === businessTypeEnum[key].value ||
        searchTermData.displayName ===
          v1BusinessTypesMapping[businessTypeEnum[key].value]
    );

    if (businessTypeKey) {
      businessTypeEnum[businessTypeKey].searchTerms =
        searchTermData.searchTerms;
    }
  });

  const enumFilename = "./enums/businessTypeEnum.js";
  fs.writeFile(
    enumFilename,
    `const businessTypeEnum=${JSON.stringify(
      businessTypeEnum
    )}; module.exports={businessTypeEnum};`,
    err => {
      if (err) {
        return console.log(err);
      }
      console.log(`SUCCESS: ${enumFilename} updated.`);
    }
  );
};

updateBusinessTypesEnum();
