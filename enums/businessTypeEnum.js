const businessTypeEnum = {
  "001": {
    key: "001",
    value: "Fruit and vegetable farm",
    searchTerms: ["farmer", "grower", "agriculture", "orchard"]
  },
  "002": {
    key: "002",
    value: "Livestock farm",
    searchTerms: [
      "farmer",
      "cow",
      "pig",
      "chicken",
      "cattle",
      "poultry",
      "agriculture",
      "sheep",
      "buffalo"
    ]
  },
  "003": {
    key: "003",
    value: "Arable farm",
    searchTerms: ["farmer", "crop", "agriculture"]
  },
  "004": {
    key: "004",
    value: "Beekeeper",
    searchTerms: ["honey", "farmer", "hive", "keeper", "apiarist"]
  },
  "005": {
    key: "005",
    value: "Honey maker",
    searchTerms: ["bee", "manufacturer", "honeymaker"]
  },
  "006": {
    key: "006",
    value: "Hunter and trapper",
    searchTerms: ["wildlife", "game", "wild", "fowl", "deer"]
  },
  "007": {
    key: "007",
    value: "Egg processor",
    searchTerms: ["duck", "chicken", "quail"]
  },
  "008": {
    key: "008",
    value: "Egg producer or packer",
    searchTerms: ["duck", "quail", "chicken"]
  },
  "009": {
    key: "009",
    value: "Fishing boat",
    searchTerms: [
      "fisherman",
      "vessel",
      "ship",
      "seafood",
      "shellfish",
      "oyster",
      "mussel",
      "clam",
      "prawn",
      "lobster",
      "crab",
      "shrimp",
      "seafood",
      "scallop",
      "trawler",
      "angling"
    ]
  },
  "010": {
    key: "010",
    value: "Fish farm",
    searchTerms: [
      "fisherman",
      "fishfarm",
      "seafood",
      "shellfish",
      "oyster",
      "mussel",
      "clam",
      "prawn",
      "lobster",
      "crab",
      "shrimp",
      "seafood",
      "scallop",
      "tilapia",
      "salmon",
      "carp",
      "aquaculture",
      "mariculture"
    ]
  },
  "011": {
    key: "011",
    value: "Meat product manufacturer",
    searchTerms: [
      "process",
      "preserve",
      "airdry",
      "salt",
      "jerky",
      "cure",
      "beef",
      "pork",
      "mutton",
      "lamb",
      "chicken",
      "insect",
      "biltong",
      "smoke",
      "dry",
      "mince",
      "ham",
      "maker",
      "producer"
    ]
  },
  "012": {
    key: "012",
    value: "Abattoir",
    searchTerms: ["slaughterhouse", "slaughter", "butcher", "halal", "cut"]
  },
  "013": {
    key: "013",
    value: "Fish and shellfish product manufacturer",
    searchTerms: [
      "process",
      "preserve",
      "crustecean",
      "crab",
      "lobster",
      "shrimp",
      "prawn",
      "mussel",
      "scallop",
      "clam",
      "smoke",
      "salt",
      "dry",
      "airdry",
      "brine",
      "pickle",
      "producer",
      "maker"
    ]
  },
  "014": {
    key: "014",
    value: "Shellfish purification centre",
    searchTerms: [
      "plant",
      "oyster",
      "mussel",
      "clam",
      "prawn",
      "lobster",
      "crab",
      "shrimp",
      "scallop",
      "depuration"
    ]
  },
  "015": {
    key: "015",
    value: "Potato product manufacturer",
    searchTerms: [
      "process",
      "preserve",
      "chip",
      "crisp",
      "canning",
      "freezing",
      "mash",
      "maker",
      "producer"
    ]
  },
  "016": {
    key: "016",
    value: "Fruit and vegetable juice manufacturer",
    searchTerms: [
      "drink",
      "factory",
      "lassi",
      "smoothie",
      "bottling",
      "blending",
      "maker",
      "producer"
    ]
  },
  "017": {
    key: "017",
    value: "Fruit and vegetable product manufacturer",
    searchTerms: [
      "process",
      "factory",
      "preserve",
      "dry",
      "pickle",
      "jam",
      "freeze",
      "salt",
      "canning",
      "peanut butter",
      "maker",
      "producer"
    ]
  },
  "018": {
    key: "018",
    value: "Oil and/or fat manufacturer",
    searchTerms: [
      "lard",
      "butter",
      "factory",
      "margarine",
      "suet",
      "vegetable",
      "rapeseed",
      "olive",
      "sunflower",
      "maker",
      "producer"
    ]
  },
  "019": {
    key: "019",
    value: "Dairy and cheese manufacturer",
    searchTerms: [
      "yoghurt",
      "process",
      "factory",
      "fromage",
      "cream",
      "cheddar",
      "milk",
      "whey",
      "maker",
      "producer"
    ]
  },
  "020": {
    key: "020",
    value: "Ice cream manufacturer",
    searchTerms: [
      "icecream",
      "process",
      "factory",
      "frozen",
      "gelato",
      "yoghurt",
      "maker",
      "producer"
    ]
  },
  "021": {
    key: "021",
    value: "Commercial Bakery",
    searchTerms: [
      "patisserie",
      "pastry",
      "manufacture",
      "cake",
      "bread",
      "maker",
      "producer"
    ]
  },
  "022": {
    key: "022",
    value: "Ready to eat meals or food manufacturer",
    searchTerms: [
      "dish",
      "readymeal",
      "factory",
      "microwave",
      "frozen",
      "maker",
      "producer"
    ]
  },
  "023": {
    key: "023",
    value: "Dietic or baby food manufacturer",
    searchTerms: [
      "homogenise",
      "formula",
      "protein",
      "powder",
      "gluten",
      "celiac",
      "lactose",
      "infant",
      "supplement",
      "nutrition",
      "medical",
      "health",
      "weaning",
      "maker",
      "producer"
    ]
  },
  "024": {
    key: "024",
    value: "Manufacturer of other food products",
    searchTerms: ["ice", "mill", "process", "factory", "maker", "producer"]
  },
  "025": {
    key: "025",
    value: "Alcoholic drinks manufacturer",
    searchTerms: [
      "brew",
      "microbrewery",
      "brewery",
      "distillery",
      "wine",
      "liqour",
      "spirit",
      "lager",
      "ale",
      "beer",
      "draught",
      "cider",
      "perry",
      "mead",
      "winery",
      "vineyard",
      "moonshine",
      "gin",
      "cocktail",
      "whiskey",
      "vodka",
      "rum",
      "craft",
      "maker",
      "producer"
    ]
  },
  "026": {
    key: "026",
    value: "Non alcoholic drinks manufacturer",
    searchTerms: [
      "soft",
      "soda",
      "water",
      "factory",
      "sparkling",
      "mineral",
      "carbonated",
      "bottle",
      "lemonade",
      "spring",
      "energy",
      "maker",
      "producer"
    ]
  },
  "027": {
    key: "027",
    value: "Mineral water packer",
    searchTerms: ["sparkling", "carbonated", "bottle", "spring"]
  },
  "028": {
    key: "028",
    value: "Contract packer",
    searchTerms: [
      "cannery",
      "canning",
      "flowrapping",
      "cartoning",
      "potting",
      "mixing",
      "blending",
      "bottle"
    ]
  },
  "029": {
    key: "029",
    value: "Food delivery service",
    searchTerms: ["meals on wheels", "order"]
  },
  "030": {
    key: "030",
    value: "Food ordering service",
    searchTerms: ["delivery", "process", "aggregator"]
  },
  "031": {
    key: "031",
    value: "Food storage facility",
    searchTerms: [
      "cold",
      "warehouse",
      "coldstore",
      "unit",
      "refrigerated",
      "distributer"
    ]
  },
  "032": {
    key: "032",
    value: "Food broker",
    searchTerms: [
      "agent",
      "negotiator",
      "intermediator",
      "mediator",
      "consultant",
      "buyer"
    ]
  },
  "033": {
    key: "033",
    value: "Wholesaler",
    searchTerms: [
      "supplier",
      "bulk",
      "producer",
      "trade",
      "grocer",
      "distribute"
    ]
  },
  "034": {
    key: "034",
    value: "Cash and carry",
    searchTerms: ["wholesale", "supplier", "membership", "warehouse", "bulk"]
  },
  "035": {
    key: "035",
    value: "Haulage company",
    searchTerms: [
      "shipping",
      "transport",
      "freightage",
      "shipment",
      "logistics",
      "distributer"
    ]
  },
  "036": {
    key: "036",
    value: "Online retailer",
    searchTerms: [
      "internet",
      "amazon",
      "ebay",
      "computer",
      "web",
      "distance",
      "order",
      "shop",
      "website"
    ]
  },
  "037": {
    key: "037",
    value: "Supermarket",
    searchTerms: ["hypermarket", "grocery", "market", "store", "shop", "retail"]
  },
  "038": {
    key: "038",
    value: "Local convenience store or corner shop",
    searchTerms: ["cornershop", "store", "grocery", "retail"]
  },
  "039": {
    key: "039",
    value: "Farm gate sales",
    searchTerms: ["eggs", "potatoes", "gatesale", "retail", "milk", "raw"]
  },
  "040": {
    key: "040",
    value: "Farm shop",
    searchTerms: ["retail", "farmshop"]
  },
  "041": {
    key: "041",
    value: "Sweet shop or confectioner",
    searchTerms: [
      "candy",
      "dessert",
      "chocolatier",
      "store",
      "bonbon",
      "retail"
    ]
  },
  "042": {
    key: "042",
    value: "Butcher",
    searchTerms: ["meat", "halal", "retail", "cutting", "store", "shop"]
  },
  "043": {
    key: "043",
    value: "Fishmonger",
    searchTerms: [
      "seafood",
      "monger",
      "grocer",
      "retail",
      "shellfish",
      "shop",
      "store"
    ]
  },
  "044": {
    key: "044",
    value: "Greengrocer",
    searchTerms: [
      "fruiterer",
      "fruit",
      "vegetable",
      "shop",
      "grocer",
      "retail",
      "store"
    ]
  },
  "045": {
    key: "045",
    value: "Health food shop",
    searchTerms: [
      "retail",
      "vitamins",
      "organic",
      "freefrom",
      "natural",
      "homeopathic",
      "goodness",
      "wellness",
      "nutrition",
      "store"
    ]
  },
  "046": {
    key: "046",
    value: "Bakery",
    searchTerms: [
      "pastry",
      "shop",
      "patisserie",
      "bread",
      "retail",
      "bread",
      "cake",
      "cookie",
      "store"
    ]
  },
  "047": {
    key: "047",
    value: "Newsagent or Post Office",
    searchTerms: [
      "shop",
      "tobacconist",
      "newsstand",
      "retail",
      "corner",
      "store"
    ]
  },
  "048": {
    key: "048",
    value: "Market stall with permanent location",
    searchTerms: ["pop up", "popup", "bazar"]
  },
  "049": {
    key: "049",
    value: "Off licence",
    searchTerms: [
      "tobacconist",
      "wine",
      "alcohol",
      "beer",
      "spirits",
      "retail",
      "shop",
      "store"
    ]
  },
  "050": {
    key: "050",
    value: "Petrol station or garage",
    searchTerms: ["retail", "gas", "store", "shop", "store"]
  },
  "051": {
    key: "051",
    value: "Delicatessen",
    searchTerms: [
      "ham",
      "cold cut",
      "kosher",
      "retail",
      "charcuterie",
      "shop",
      "store"
    ]
  },
  "052": {
    key: "052",
    value: "Chemist",
    searchTerms: ["pharmacy", "retail", "apothecary", "shop", "store"]
  },
  "053": {
    key: "053",
    value: "Any other retailer",
    searchTerms: [
      "shop",
      "store",
      "grocery",
      "market",
      "foodbank",
      "playground",
      "softplay",
      "museum",
      "zoo",
      "aquarium",
      "charity",
      "library",
      "gym",
      "office",
      "church",
      "mosque",
      "synagogue",
      "village hall",
      "temple",
      "community",
      "theatre",
      "cinema",
      "stadium",
      "circus",
      "concert",
      "music",
      "bingo",
      "lounge",
      "racecourse",
      "racetrack",
      "bowling",
      "park",
      "amusement",
      "fairground",
      "casino",
      "attraction"
    ]
  },
  "054": {
    key: "054",
    value: "Vending machine",
    searchTerms: ["drinks", "snacks", "sweets", "prepacked", "water fountain"]
  },
  "055": {
    key: "055",
    value: "Restaurant, cafe, canteen, or fast food restaurant",
    searchTerms: [
      "bistro",
      "brunch",
      "afternoon tea",
      "breakfast",
      "supper",
      "dinner",
      "diner",
      "Buffet",
      "coffee",
      "dessert",
      "espresso",
      "fusion",
      "greasy",
      "hamburger",
      "burger",
      "kebab",
      "pizza",
      "lunch",
      "pizzeria",
      "playground",
      "sandwich",
      "softplay",
      "sushi",
      "tea",
      "juice",
      "museum",
      "zoo",
      "aquarium",
      "brasserie",
      "carvery",
      "churreria",
      "creperie",
      "fish and chip",
      "grill",
      "cafeteria",
      "shelter",
      "halfway",
      "prison",
      "detention",
      "spa",
      "charity",
      "library",
      "gym",
      "fast food",
      "office",
      "church",
      "mosque",
      "synagogue",
      "village hall",
      "temple",
      "community",
      "gastropub",
      "theatre",
      "cinema",
      "stadium",
      "circus",
      "concert",
      "music",
      "bingo",
      "lounge",
      "racecourse",
      "racetrack",
      "bowling",
      "park",
      "amusement",
      "fairground",
      "casino",
      "attraction"
    ]
  },
  "056": {
    key: "056",
    value: "Hostel or bed & breakfast",
    searchTerms: [
      "B&B",
      "&",
      "B and B",
      "guesthouse",
      "inn",
      "motel",
      "accomodation",
      "retreat",
      "spa",
      "airbnb"
    ]
  },
  "057": {
    key: "057",
    value: "Hotel",
    searchTerms: [
      "guesthouse",
      "inn",
      "resort",
      "accomodation",
      "retreat",
      "spa",
      "airbnb"
    ]
  },
  "058": {
    key: "058",
    value: "Pub serving meals",
    searchTerms: [
      "bar",
      "alcohol",
      "drinks",
      "gastropub",
      "cocktail",
      "beer",
      "theatre",
      "cinema",
      "nightclub",
      "club",
      "stadium",
      "concert",
      "music",
      "bartending",
      "bingo",
      "disco",
      "lounge",
      "racecourse",
      "racetrack",
      "bowling",
      "park",
      "fairground",
      "casino",
      "attraction",
      "winebar",
      "brewery"
    ]
  },
  "059": {
    key: "059",
    value: "Pub serving only snacks and drinks",
    searchTerms: [
      "bar",
      "alcohol",
      "cocktail",
      "beer",
      "theatre",
      "cinema",
      "nightclub",
      "club",
      "stadium",
      "circus",
      "concert",
      "music",
      "bartending",
      "bingo",
      "disco",
      "lounge",
      "racecourse",
      "racetrack",
      "bowling",
      "park",
      "amusement",
      "fairground",
      "casino",
      "attraction",
      "winebar",
      "brewery",
      "wet pub"
    ]
  },
  "060": {
    key: "060",
    value: "Take away with no food consumed on site",
    searchTerms: [
      "takeaway",
      "delivery",
      "to go",
      "kiosk",
      "drive through",
      "restaurant",
      "bistro",
      "brunch",
      "afternoon tea",
      "breakfast",
      "supper",
      "dinner",
      "diner",
      "Buffet",
      "canteen",
      "fast food",
      "coffee",
      "dessert",
      "espresso",
      "fusion",
      "greasy",
      "hamburger",
      "burger",
      "kebab",
      "pizza",
      "lunch",
      "pizzeria",
      "playground",
      "sandwich",
      "softplay",
      "sushi",
      "tea",
      "juice bar",
      "museum",
      "zoo",
      "aquarium",
      "brasserie",
      "carvery",
      "churreria",
      "creperie",
      "fish and chip",
      "grill",
      "cafeteria",
      "shelter",
      "halfway",
      "prison",
      "detention",
      "spa",
      "charity",
      "library",
      "gym",
      "fast food",
      "office",
      "church",
      "mosque",
      "synagogue",
      "village hall",
      "temple",
      "community",
      "gastropub",
      "theatre",
      "cinema",
      "stadium",
      "circus",
      "concert",
      "music",
      "bingo",
      "lounge",
      "racecourse",
      "racetrack",
      "bowling",
      "park",
      "amusement",
      "fairground",
      "casino",
      "attraction"
    ]
  },
  "061": {
    key: "061",
    value: "Nursing home, care home or day centre",
    searchTerms: [
      "elderly",
      "sheltered",
      "adult",
      "residential",
      "aged",
      "retirement"
    ]
  },
  "062": {
    key: "062",
    value: "Hospital",
    searchTerms: [
      "GP",
      "emergency",
      "medical",
      "health",
      "clinic",
      "infirmary",
      "canteen",
      "hospice"
    ]
  },
  "063": {
    key: "063",
    value: "Childminder",
    searchTerms: ["minder", "babysitter", "nanny"]
  },
  "064": {
    key: "064",
    value: "Childcare, nursery or play group",
    searchTerms: [
      "care",
      "babysitter",
      "nanny",
      "daycare",
      "playgroup",
      "au pair",
      "breakfast club"
    ]
  },
  "065": {
    key: "065",
    value: "Educational establishment",
    searchTerms: [
      "school",
      "college",
      "university",
      "canteen",
      "academy",
      "boarding",
      "gymnasium",
      "preparatory",
      "preschool",
      "primary"
    ]
  },
  "066": {
    key: "066",
    value: "Mobile retailer",
    searchTerms: [
      "movable",
      "market",
      "bazar",
      "foodtruck",
      "truck",
      "pop up",
      "popup",
      "vehicle",
      "stall",
      "car",
      "bike",
      "ice cream",
      "van",
      "festival",
      "retail",
      "street",
      "vendor"
    ]
  },
  "067": {
    key: "067",
    value: "Mobile caterer",
    searchTerms: [
      "movable",
      "market",
      "bazar",
      "foodtruck",
      "truck",
      "pop up",
      "popup",
      "vehicle",
      "stall",
      "car",
      "bike",
      "ice cream",
      "van",
      "festival",
      "event",
      "party",
      "function",
      "burger",
      "food",
      "hot dog stand",
      "street",
      "vendor"
    ]
  },
  "068": {
    key: "068",
    value: "Movable food establishment",
    searchTerms: [
      "train",
      "locomotive",
      "cruise",
      "boat",
      "ship",
      "catamaran",
      "airplane",
      "plane",
      "ferry",
      "yacht",
      "coach",
      "bus",
      "tram"
    ]
  },
  "069": {
    key: "069",
    value: "Contract caterer",
    searchTerms: ["office", "lunch"]
  },
  "070": {
    key: "070",
    value: "Home caterer",
    searchTerms: [
      "baker",
      "cake",
      "cupcake",
      "house",
      "domestic",
      "cookie",
      "flat"
    ]
  },
  "071": {
    key: "071",
    value: "Meat cutting plant or commercial butcher",
    searchTerms: ["halal", "butchery"]
  },
  "072": {
    key: "072",
    value: "Food auction hall",
    searchTerms: ["auctioneer", "bidding"]
  }
};
module.exports = { businessTypeEnum };
