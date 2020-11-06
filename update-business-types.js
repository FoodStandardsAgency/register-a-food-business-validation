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

  function getDisplayNames(rdfsLabel) {
    const displayNames = {};
    if (Array.isArray(rdfsLabel)) {
      rdfsLabel.forEach((label) => {
        displayNames[label["@language"]] = label["@value"];
      });
    } else {
      displayNames[rdfsLabel["@language"]] = rdfsLabel["@value"];
    }
    return displayNames;
  }

  newBusinessTypesArray.forEach(businessType => {
    const displayNames = getDisplayNames(businessType["rdfs:label"]);
    if (businessType["skos:notation"]) {
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
