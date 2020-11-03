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
  
  const businessTypeEnumArray = [];

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
      businessTypeEnumArray.push({ 
        key: businessType["skos:notation"],
        value: displayNames.en
      });
    }
  });

  const enumFilename = "./businessTypeEnum.json";
  fs.writeFile(
    enumFilename,
    JSON.stringify(businessTypeEnumArray),
    (err) => {
      if (err) {
        return console.log(err);
      }
      console.log(`SUCCESS: ${enumFilename} updated.`);
    }
  );
};

updateBusinessTypesForAutocomplete();
