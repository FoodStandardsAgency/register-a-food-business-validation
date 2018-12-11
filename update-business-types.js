const fs = require("fs");
const fetch = require("node-fetch");

const updateBusinessTypesForAutocomplete = async () => {
  const businessTypesData = await fetch(
    "https://raw.githubusercontent.com/Nathan-Philippo/risk-engine-rules/master/business-types.json"
  );

  const businessTypesJSON = await businessTypesData.json();

  const newBusinessTypesArray = Object.values(
    JSON.parse(JSON.stringify(businessTypesJSON))
  );

  const transformedBusinessTypeArray = [];

  newBusinessTypesArray.forEach(businessType => {
    businessType.searchTerms.forEach(searchTerm => {
      const newArrayEntry = businessType.displayName;
      transformedBusinessTypeArray.push(newArrayEntry);
    });
  });

  function onlyUnique(value, index, self) {
    return self.indexOf(value) === index;
  }

  var uniqueBusinessTypes = transformedBusinessTypeArray.filter(onlyUnique);

  fs.writeFile(
    "./valid-business-types.json",
    JSON.stringify(uniqueBusinessTypes),
    err => {
      if (err) {
        return console.log(err);
      }
      console.log("SUCCESS: /valid-business-types.json updated.");
    }
  );
};

updateBusinessTypesForAutocomplete();
