const fs = require("fs");
const fetch = require("node-fetch");

const updateBusinessTypesForAutocomplete = async () => {
  const businessTypesData = await fetch(
    "https://data.food.gov.uk/codes/business/rafb/establishment-type?_format=jsonld"
  );

  const businessTypesJSON = await businessTypesData.json();

  const newBusinessTypesArray = Object.values(
    JSON.parse(JSON.stringify(businessTypesJSON["@graph"]))
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

  newBusinessTypesArray.forEach(businessType => {
    const displayNames = getDisplayNames(businessType["skos:prefLabel"]);
    if (businessType["skos:notation"] && displayNames.en) {
      businessTypeEnum[businessType["skos:notation"]] = { 
        key: businessType["skos:notation"],
        value: displayNames.en
      };
    }
  });

  const enumFilename = "./enums/businessTypeEnum.js";
  fs.writeFile(
    enumFilename,
    `const businessTypeEnum=${JSON.stringify(businessTypeEnum)}; module.exports={businessTypeEnum};`,
    (err) => {
      if (err) {
        return console.log(err);
      }
      console.log(`SUCCESS: ${enumFilename} updated.`);
    }
  );
};

updateBusinessTypesForAutocomplete();
