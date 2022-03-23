const businessTypeEnum = {
  "001": {
    key: "001",
    value: { en: "Fruit and vegetable farm", cy: "Fferm ffrwythau a llysiau" },
    searchTerms: {
      en: ["farmer", "grower", "agriculture", "orchard"],
      cy: ["ffermwr", "tyfwr", "amaethyddiaeth", "perllan"]
    }
  },
  "002": {
    key: "002",
    value: { en: "Livestock farm", cy: "Fferm da byw" },
    searchTerms: {
      en: [
        "farmer",
        "cow",
        "pig",
        "chicken",
        "cattle",
        "poultry",
        "agriculture",
        "sheep",
        "buffalo"
      ],
      cy: [
        "ffermwr",
        "buwch",
        "mochyn",
        "cyw iâr",
        "gwartheg",
        "dofednod",
        "poultry",
        "amaethyddiaeth",
        "defaid",
        "byfflo"
      ]
    }
  },
  "003": {
    key: "003",
    value: { en: "Arable farm", cy: "Fferm âr" },
    searchTerms: {
      en: ["farmer", "crop", "agriculture"],
      cy: ["ffermwr", "cnwd", "amaethyddiaeth"]
    }
  },
  "004": {
    key: "004",
    value: { en: "Beekeeper", cy: "Gwenynwr" },
    searchTerms: {
      en: ["honey", "farmer", "hive", "keeper", "apiarist"],
      cy: ["mêl", "ffermwr", "cwch gwenyn", "ceidwad", "apiarist"]
    }
  },
  "005": {
    key: "005",
    value: { en: "Honey maker", cy: "Gwneuthurwr mêl" },
    searchTerms: {
      en: ["bee", "manufacturer", "honeymaker"],
      cy: ["gwenyn", "gweithgynhyrchwr", "gwneuthurwr mêl"]
    }
  },
  "006": {
    key: "006",
    value: { en: "Hunter and trapper", cy: "Heliwr a thrapiwr" },
    searchTerms: {
      en: ["wildlife", "game", "wild", "fowl", "deer"],
      cy: [
        "bywyd gwyllt",
        "anifeiliaid hela",
        "game",
        "gwyllt",
        "adar",
        "ceirw"
      ]
    }
  },
  "007": {
    key: "007",
    value: { en: "Egg processor", cy: "Prosesydd wyau" },
    searchTerms: {
      en: ["duck", "chicken", "quail"],
      cy: ["hwyaden", "iâr", "sofliar", "quail"]
    }
  },
  "008": {
    key: "008",
    value: {
      en: "Egg producer or packer",
      cy: "Cynhyrchydd neu becynnwr wyau"
    },
    searchTerms: {
      en: ["duck", "quail", "chicken"],
      cy: ["hwyaden", "sofliar", "quail", "iâr"]
    }
  },
  "009": {
    key: "009",
    value: { en: "Fishing boat", cy: "Cwch pysgota" },
    searchTerms: {
      en: [
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
      ],
      cy: [
        "pysgotwr",
        "llong",
        "llong",
        "bwyd môr",
        "pysgod cregyn",
        "wystrys",
        "oysters",
        "cregyn gleision",
        "cregyn cylchog",
        "clams",
        "corgimwch",
        "cimwch",
        "cranc",
        "berdys/shrimp",
        "shrimp/berdys",
        "bwyd môr",
        "cregyn bylchog",
        "scallop",
        "treilliwr",
        "trawler",
        "genweirio",
        "angling"
      ]
    }
  },
  "010": {
    key: "010",
    value: { en: "Fish farm", cy: "Fferm bysgod" },
    searchTerms: {
      en: [
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
      ],
      cy: [
        "pysgotwr",
        "fferm bysgod",
        "bwyd môr",
        "pysgod cregyn",
        "wystrys",
        "oysters",
        "cregyn gleision",
        "cregyn cylchog",
        "clams",
        "corgimwch",
        "cimwch",
        "cranc",
        "berdys/shrimp",
        "shrimp/berdys",
        "bwyd môr",
        "cregyn bylchog",
        "scallop",
        "tilapiaid",
        "eog",
        "cerpynnod",
        "dyframaeth",
        "marwriaeth",
        "mariculture"
      ]
    }
  },
  "011": {
    key: "011",
    value: {
      en: "Meat product manufacturer",
      cy: "Gweithgynhyrchwr cynnyrch cig"
    },
    searchTerms: {
      en: [
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
      ],
      cy: [
        "prosesu",
        "cadw",
        "aersychu",
        "halen",
        "jerky",
        "halltu",
        "cure",
        "cig eidion",
        "porc",
        "cig dafad",
        "cig oen",
        "cyw iâr",
        "pryfaid",
        "biltong",
        "mwg",
        "smoked",
        "sych",
        "briwgig",
        "mince",
        "ham",
        "gwneuthurwr",
        "cynhyrchydd"
      ]
    }
  },
  "012": {
    key: "012",
    value: { en: "Abattoir", cy: "Lladd-dy" },
    searchTerms: {
      en: ["slaughterhouse", "slaughter", "butcher", "halal", "cut"],
      cy: ["lladd-dy", "lladd", "cigydda", "halal", "torri"]
    }
  },
  "013": {
    key: "013",
    value: {
      en: "Fish and shellfish product manufacturer",
      cy: "Gweithgynhyrchwr cynnyrch pysgod a physgod cregyn"
    },
    searchTerms: {
      en: [
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
      ],
      cy: [
        "prosesu",
        "cadw",
        "cramenogion",
        "crustecean",
        "cranc",
        "cimwch",
        "berdys/shrimp",
        "shrimp/berdys",
        "corgimwch",
        "cregyn gleision",
        "cregyn bylchog",
        "scallop",
        "cregyn cylchog",
        "clams",
        "mwg",
        "smoked",
        "halen",
        "sych",
        "aersychu",
        "heli",
        "picl",
        "cynhyrchydd",
        "gwneuthurwr"
      ]
    }
  },
  "014": {
    key: "014",
    value: {
      en: "Shellfish purification centre",
      cy: "Canolfan buro pysgod cregyn"
    },
    searchTerms: {
      en: [
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
      ],
      cy: [
        "ffatri",
        "wystrys",
        "oysters",
        "cregyn gleision",
        "cregyn cylchog",
        "clams",
        "corgimwch",
        "cimwch",
        "cranc",
        "berdys/shrimp",
        "shrimp/berdys",
        "cregyn bylchog",
        "scallop",
        "puro"
      ]
    }
  },
  "015": {
    key: "015",
    value: {
      en: "Potato product manufacturer",
      cy: "Gweithgynhyrchwr cynnyrch tatws"
    },
    searchTerms: {
      en: [
        "process",
        "preserve",
        "chip",
        "crisp",
        "canning",
        "freezing",
        "mash",
        "maker",
        "producer"
      ],
      cy: [
        "prosesu",
        "cadw",
        "sglodion",
        "creision",
        "mewn tun",
        "rhewi",
        "stwnsh",
        "gwneuthurwr",
        "cynhyrchydd"
      ]
    }
  },
  "016": {
    key: "016",
    value: {
      en: "Fruit and vegetable juice manufacturer",
      cy: "Gweithgynhyrchwr sudd ffrwythau a llysiau"
    },
    searchTerms: {
      en: [
        "drink",
        "factory",
        "lassi",
        "smoothie",
        "bottling",
        "blending",
        "maker",
        "producer"
      ],
      cy: [
        "yfed",
        "ffatri",
        "lassi",
        "smwddi",
        "potelu",
        "blendio",
        "gwneuthurwr",
        "gwneuthurwr",
        "gwneuthurwr"
      ]
    }
  },
  "017": {
    key: "017",
    value: {
      en: "Fruit and vegetable product manufacturer",
      cy: "Gweithgynhyrchwr cynnyrch ffrwythau a llysiau"
    },
    searchTerms: {
      en: [
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
      ],
      cy: [
        "ffatri",
        "cadw",
        "sych",
        "picl",
        "jam",
        "rhewi",
        "halen",
        "mewn tun",
        "menyn pysgnau",
        "peanut butter",
        "gwneuthurwr",
        "cynhyrchydd"
      ]
    }
  },
  "018": {
    key: "018",
    value: {
      en: "Oil and/or fat manufacturer",
      cy: "Gweithgynhyrchwr olew a/neu fraster"
    },
    searchTerms: {
      en: [
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
      ],
      cy: [
        "lard",
        "menyn",
        "ffatri",
        "marjarîn",
        "siwet",
        "llysiau",
        "had rêp",
        "olewydd",
        "blodyn yr haul",
        "gwneuthurwr",
        "cynhyrchydd"
      ]
    }
  },
  "019": {
    key: "019",
    value: {
      en: "Dairy and cheese manufacturer",
      cy: "Gweithgynhyrchwr llaeth a chaws"
    },
    searchTerms: {
      en: [
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
      ],
      cy: [
        "iogwrt",
        "prosesu",
        "ffatri",
        "fromage",
        "hufen",
        "cheddar",
        "llaeth",
        "maidd",
        "whey",
        "gwneuthurwr",
        "cynhyrchydd"
      ]
    }
  },
  "020": {
    key: "020",
    value: { en: "Ice cream manufacturer", cy: "Gweithgynhyrchwr hufen iâ" },
    searchTerms: {
      en: [
        "icecream",
        "process",
        "factory",
        "frozen",
        "gelato",
        "yoghurt",
        "maker",
        "producer"
      ],
      cy: [
        "hufen iâ",
        "prosesu",
        "ffatri",
        "rhewi",
        "gelato",
        "iogwrt",
        "gwneuthurwr",
        "cynhyrchydd"
      ]
    }
  },
  "021": {
    key: "021",
    value: {
      en: "Commercial Bakery",
      cy: "Popty / becws / siop fara masnachol"
    },
    searchTerms: {
      en: [
        "patisserie",
        "pastry",
        "manufacture",
        "cake",
        "bread",
        "maker",
        "producer"
      ],
      cy: [
        "patisserie",
        "cynnyrch crwst",
        "pastry",
        "gweithgynhyrchu",
        "cacennau",
        "bara",
        "gwneuthurwr",
        "cynhyrchydd"
      ]
    }
  },
  "022": {
    key: "022",
    value: {
      en: "Ready to eat meals or food manufacturer",
      cy: "Gweithgynhyrchwr bwyd neu brydau parod i’w bwyta"
    },
    searchTerms: {
      en: [
        "dish",
        "readymeal",
        "factory",
        "microwave",
        "frozen",
        "maker",
        "producer"
      ],
      cy: [
        "pryd",
        "pryd parod",
        "ffatri",
        "micro-don",
        "rhewi",
        "gwneuthurwr",
        "cynhyrchydd"
      ]
    }
  },
  "023": {
    key: "023",
    value: {
      en: "Dietic or baby food manufacturer",
      cy: "Gweithgynhyrchwr bwyd deietegol neu fwyd babanod"
    },
    searchTerms: {
      en: [
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
      ],
      cy: [
        "homogeneiddio",
        "fformiwla",
        "protein",
        "powdr",
        "glwten",
        "seliag",
        "lactos",
        "babanod",
        "atchwanegiad",
        "supplement",
        "maeth",
        "meddygol",
        "iechyd",
        "diddyfnu",
        "weaning",
        "gwneuthurwr",
        "cynhyrchydd"
      ]
    }
  },
  "024": {
    key: "024",
    value: {
      en: "Manufacturer of other food products",
      cy: "Gweithgynhyrchwr cynhyrchion bwyd eraill"
    },
    searchTerms: {
      en: ["ice", "mill", "process", "factory", "maker", "producer"],
      cy: ["rhew", "melin", "prosesu", "ffatri", "gwneuthurwr", "cynhyrchydd"]
    }
  },
  "025": {
    key: "025",
    value: {
      en: "Alcoholic drinks manufacturer",
      cy: "Gweithgynhyrchwr diodydd alcoholig"
    },
    searchTerms: {
      en: [
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
      ],
      cy: [
        "bragu",
        "micro-fragdy",
        "bragdy",
        "distyllfa",
        "gwin",
        "gwirod",
        "liqour",
        "spirit",
        "lager",
        "cwrw/beer",
        "ale",
        "beer/cwrw",
        "drafft",
        "seidr",
        "perai",
        "perry",
        "medd",
        "gwindy",
        "gwinllan",
        "moonshine",
        "jin",
        "coctel",
        "wisgi",
        "fodca",
        "rym",
        "crefft",
        "gwneuthurwr",
        "cynhyrchydd"
      ]
    }
  },
  "026": {
    key: "026",
    value: {
      en: "Non alcoholic drinks manufacturer",
      cy: "Gweithgynhyrchwr diodydd di-alcohol"
    },
    searchTerms: {
      en: [
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
      ],
      cy: [
        "diod meddal",
        "soda",
        "dŵr",
        "ffatri",
        "pefriog",
        "mwynol",
        "carbonedig",
        "potel",
        "lemonêd",
        "ffynnon",
        "egni",
        "gwneuthurwr",
        "cynhyrchydd"
      ]
    }
  },
  "027": {
    key: "027",
    value: { en: "Mineral water packer", cy: "Pecynnwr dŵr mwynol" },
    searchTerms: {
      en: ["sparkling", "carbonated", "bottle", "spring"],
      cy: ["pefriog", "potel", "ffynnon"]
    }
  },
  "028": {
    key: "028",
    value: { en: "Contract packer", cy: "Pecynnwr contract" },
    searchTerms: {
      en: [
        "cannery",
        "canning",
        "flowrapping",
        "cartoning",
        "potting",
        "mixing",
        "blending",
        "bottle"
      ],
      cy: [
        "pacio mewn tuniau",
        "mewn tun",
        "lapio llif",
        "pacio mewn cartonau",
        "potio",
        "cymysgu",
        "blendio",
        "potel"
      ]
    }
  },
  "029": {
    key: "029",
    value: { en: "Food delivery service", cy: "Gwasanaeth dosbarthu bwyd" },
    searchTerms: {
      en: ["meals on wheels", "order"],
      cy: ["pryd ar glud", "gorchymyn"]
    }
  },
  "030": {
    key: "030",
    value: { en: "Food ordering service", cy: "Gwasanaeth archebu bwyd" },
    searchTerms: {
      en: ["delivery", "process", "aggregator"],
      cy: ["cyflenwi", "prosesu", "agregydd", "aggregator"]
    }
  },
  "031": {
    key: "031",
    value: { en: "Food storage facility", cy: "Cyfleuster storio bwyd" },
    searchTerms: {
      en: [
        "cold",
        "warehouse",
        "coldstore",
        "unit",
        "refrigerated",
        "distributer"
      ],
      cy: ["oer", "warws", "storfa oer", "uned", "wedi’i oeri", "dosbarthwr"]
    }
  },
  "032": {
    key: "032",
    value: { en: "Food broker", cy: "Brocer bwyd" },
    searchTerms: {
      en: [
        "agent",
        "negotiator",
        "intermediator",
        "mediator",
        "consultant",
        "buyer"
      ],
      cy: [
        "asiant",
        "trafodwr",
        "cyfryngwr",
        "cyfryngwr",
        "ymgynghorydd",
        "prynwr"
      ]
    }
  },
  "033": {
    key: "033",
    value: { en: "Wholesaler", cy: "Cyfanwerthwr" },
    searchTerms: {
      en: ["supplier", "bulk", "producer", "trade", "grocer", "distribute"],
      cy: [
        "cyflenwr",
        "swmp",
        "bulk",
        "cynhyrchydd",
        "masnach",
        "groser",
        "dosbarthu"
      ]
    }
  },
  "034": {
    key: "034",
    value: { en: "Cash and carry", cy: "Talu a chludo" },
    searchTerms: {
      en: ["wholesale", "supplier", "membership", "warehouse", "bulk"],
      cy: ["cyfanwerthu", "cyflenwr", "aelodaeth", "warws", "swmp", "bulk"]
    }
  },
  "035": {
    key: "035",
    value: { en: "Haulage company", cy: "Cwmni cludo" },
    searchTerms: {
      en: [
        "shipping",
        "transport",
        "freightage",
        "shipment",
        "logistics",
        "distributer"
      ],
      cy: [
        "llongau",
        "cludo",
        "cludo nwyddau",
        "llwyth",
        "shipment",
        "logisteg",
        "dosbarthwr"
      ]
    }
  },
  "036": {
    key: "036",
    value: { en: "Online retailer", cy: "Manwerthwr ar-lein" },
    searchTerms: {
      en: [
        "internet",
        "amazon",
        "ebay",
        "computer",
        "web",
        "distance",
        "order",
        "shop",
        "website"
      ],
      cy: [
        "rhyngrwyd",
        "amazon",
        "ebay",
        "cyfrifiadur",
        "y we",
        "o bell",
        "gorchymyn",
        "siop",
        "gwefan"
      ]
    }
  },
  "037": {
    key: "037",
    value: { en: "Supermarket", cy: "Archfarchnad" },
    searchTerms: {
      en: ["hypermarket", "grocery", "market", "store", "shop", "retail"],
      cy: [
        "goruwchfarchnad",
        "hypermarket",
        "groser",
        "marchnad",
        "siop",
        "siop",
        "manwerthu"
      ]
    }
  },
  "038": {
    key: "038",
    value: {
      en: "Local convenience store or corner shop",
      cy: "Siop gyfleustra leol neu siop gornel"
    },
    searchTerms: {
      en: ["cornershop", "store", "grocery", "retail"],
      cy: ["siop gornel", "siop", "groser", "manwerthu"]
    }
  },
  "039": {
    key: "039",
    value: { en: "Farm gate sales", cy: "Gwerthu wrth giât y fferm" },
    searchTerms: {
      en: ["eggs", "potatoes", "gatesale", "retail", "milk", "raw"],
      cy: [
        "wyau",
        "tatws",
        "gwerthu wrth y giât",
        "manwerthu",
        "llaeth",
        "amrwd"
      ]
    }
  },
  "040": {
    key: "040",
    value: { en: "Farm shop", cy: "Siop fferm" },
    searchTerms: { en: ["retail", "farmshop"], cy: ["manwerthu", "siop fferm"] }
  },
  "041": {
    key: "041",
    value: { en: "Sweet shop or confectioner", cy: "Siop felysion" },
    searchTerms: {
      en: ["candy", "dessert", "chocolatier", "store", "bonbon", "retail"],
      cy: ["candi", "pwdin", "siocledwr", "siop", "bonbon", "manwerthu"]
    }
  },
  "042": {
    key: "042",
    value: { en: "Butcher", cy: "Cigydd" },
    searchTerms: {
      en: ["meat", "halal", "retail", "cutting", "store", "shop"],
      cy: ["cig", "halal", "manwerthu", "torri", "siop", "siop"]
    }
  },
  "043": {
    key: "043",
    value: { en: "Fishmonger", cy: "Gwerthwr pysgod" },
    searchTerms: {
      en: [
        "seafood",
        "monger",
        "grocer",
        "retail",
        "shellfish",
        "shop",
        "store"
      ],
      cy: [
        "bwyd môr",
        "gwerthwr",
        "groser",
        "manwerthu",
        "pysgod cregyn",
        "siop",
        "siop"
      ]
    }
  },
  "044": {
    key: "044",
    value: { en: "Greengrocer", cy: "Gwerthwr llysiau" },
    searchTerms: {
      en: [
        "fruiterer",
        "fruit",
        "vegetable",
        "shop",
        "grocer",
        "retail",
        "store"
      ],
      cy: [
        "gwerthu ffrwythau",
        "ffrwythau",
        "llysiau",
        "siop",
        "groser",
        "manwerthu",
        "siop"
      ]
    }
  },
  "045": {
    key: "045",
    value: { en: "Health food shop", cy: "Siop bwyd iechyd" },
    searchTerms: {
      en: [
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
      ],
      cy: [
        "manwerthu",
        "fitaminau",
        "organig",
        "rhydd rhag",
        "naturiol",
        "homeopathig",
        "daioni",
        "lles",
        "maeth",
        "siop"
      ]
    }
  },
  "046": {
    key: "046",
    value: { en: "Bakery", cy: "Siop fara/becws" },
    searchTerms: {
      en: [
        "pastry",
        "shop",
        "patisserie",
        "bread",
        "retail",
        "bread",
        "cake",
        "cookie",
        "store"
      ],
      cy: [
        "cynnyrch crwst",
        "pastry",
        "siop",
        "patisserie",
        "bara",
        "manwerthu",
        "bara",
        "cacennau",
        "cwci",
        "siop"
      ]
    }
  },
  "047": {
    key: "047",
    value: {
      en: "Newsagent or Post Office",
      cy: "Siop Bapur neu Swyddfa'r Post"
    },
    searchTerms: {
      en: ["shop", "tobacconist", "newsstand", "retail", "corner", "store"],
      cy: ["siop", "tybaco", "stand newyddion", "manwerthu", "cornel", "siop"]
    }
  },
  "048": {
    key: "048",
    value: {
      en: "Market stall with permanent location",
      cy: "Stondinau marchnad gyda lleoliad parhaol"
    },
    searchTerms: {
      en: ["pop up", "popup", "bazar"],
      cy: ["pop up", "pop up", "bazar"]
    }
  },
  "049": {
    key: "049",
    value: { en: "Off licence", cy: "Siop ddiodydd drwyddedig" },
    searchTerms: {
      en: [
        "tobacconist",
        "wine",
        "alcohol",
        "beer",
        "spirits",
        "retail",
        "shop",
        "store"
      ],
      cy: [
        "tybaco",
        "gwin",
        "alcohol",
        "cwrw/beer",
        "beer/cwrw",
        "gwirod",
        "spirits",
        "manwerthu",
        "siop",
        "siop"
      ]
    }
  },
  "050": {
    key: "050",
    value: { en: "Petrol station or garage", cy: "Gorsaf betrol neu garej" },
    searchTerms: {
      en: ["retail", "gas", "store", "shop", "store"],
      cy: ["manwerthu", "nwy", "siop", "siop", "siop"]
    }
  },
  "051": {
    key: "051",
    value: { en: "Delicatessen", cy: "Delicatessen" },
    searchTerms: {
      en: [
        "ham",
        "cold cut",
        "kosher",
        "retail",
        "charcuterie",
        "shop",
        "store"
      ],
      cy: [
        "ham",
        "darnau o gig oer",
        "kosher",
        "manwerthu",
        "charcuterie",
        "siop",
        "siop"
      ]
    }
  },
  "052": {
    key: "052",
    value: { en: "Chemist", cy: "Fferyllydd" },
    searchTerms: {
      en: ["pharmacy", "retail", "apothecary", "shop", "store"],
      cy: ["fferyllfa", "manwerthu", "apothecari", "siop", "siop"]
    }
  },
  "053": {
    key: "053",
    value: { en: "Any other retailer", cy: "Unrhyw fanwerthwr arall" },
    searchTerms: {
      en: [
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
      ],
      cy: [
        "siop",
        "siop",
        "groser",
        "marchnad",
        "banc bwyd",
        "maes chwarae",
        "chwarae meddal",
        "amgueddfa",
        "sw",
        "acwariwm",
        "elusen",
        "llyfrgell",
        "campfa",
        "swyddfa",
        "eglwys",
        "mosg",
        "synagog",
        "neuadd bentref",
        "teml",
        "cymunedol",
        "theatr",
        "sinema",
        "stadiwm",
        "syrcas",
        "cyngerdd",
        "cerddoriaeth",
        "bingo",
        "lolfa",
        "cae ras",
        "trac rasio",
        "bowlio",
        "parc",
        "difyrrwch",
        "ffair",
        "casino",
        "atyniad"
      ]
    }
  },
  "054": {
    key: "054",
    value: { en: "Vending machine", cy: "Peiriant gwerthu" },
    searchTerms: {
      en: ["drinks", "snacks", "sweets", "prepacked", "water fountain"],
      cy: [
        "diodydd",
        "byrbrydau",
        "losin",
        "cynnyrch wedi'i becynnu ymlaen llaw",
        "ffynnon ddŵr"
      ]
    }
  },
  "055": {
    key: "055",
    value: {
      en: "Restaurant, cafe, canteen, or fast food restaurant",
      cy: "Bwyty, caffi, ffreutur neu fwyty bwyd cyflym"
    },
    searchTerms: {
      en: [
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
      ],
      cy: [
        "bistro",
        "brunch",
        "te prynhawn",
        "brecwast",
        "swper",
        "swper/te",
        "diner",
        "Bwffe",
        "coffi",
        "pwdin",
        "espresso",
        "cyfuniad",
        "seimllyd",
        "hambyrgyr",
        "byrgyr",
        "cebab",
        "pizza",
        "cinio",
        "pizzeria",
        "maes chwarae",
        "brechdan",
        "chwarae meddal",
        "swshi",
        "te",
        "sudd",
        "amgueddfa",
        "sw",
        "acwariwm",
        "brasserie",
        "carferi",
        "churreria",
        "creperie",
        "sgod a sglods",
        "gril",
        "caffeteria",
        "lloches",
        "tŷ hanner ffordd",
        "carchar",
        "canolfan atal",
        "sba",
        "elusen",
        "llyfrgell",
        "campfa",
        "bwyd cyflym",
        "swyddfa",
        "eglwys",
        "mosg",
        "synagog",
        "neuadd bentref",
        "teml",
        "cymunedol",
        "gastro-dafarn",
        "theatr",
        "sinema",
        "stadiwm",
        "syrcas",
        "cyngerdd",
        "cerddoriaeth",
        "bingo",
        "lolfa",
        "cae ras",
        "trac rasio",
        "bowlio",
        "parc",
        "difyrrwch",
        "ffair",
        "casino",
        "atyniad"
      ]
    }
  },
  "056": {
    key: "056",
    value: {
      en: "Hostel or bed & breakfast",
      cy: "Hostel neu lety gwely a brecwast"
    },
    searchTerms: {
      en: [
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
      ],
      cy: [
        "Gwely a brecwast",
        "&amp;",
        "Gwely a brecwast",
        "tŷ llety bach",
        "tafarn",
        "motel",
        "llety",
        "encil",
        "sba",
        "airbnb"
      ]
    }
  },
  "057": {
    key: "057",
    value: { en: "Hotel", cy: "Gwesty" },
    searchTerms: {
      en: [
        "guesthouse",
        "inn",
        "resort",
        "accomodation",
        "retreat",
        "spa",
        "airbnb"
      ],
      cy: [
        "tŷ llety bach",
        "tafarn",
        "man gwyliau",
        "resort",
        "llety",
        "encil",
        "sba",
        "airbnb"
      ]
    }
  },
  "058": {
    key: "058",
    value: { en: "Pub serving meals", cy: "Tafarn sy’n gweini prydau" },
    searchTerms: {
      en: [
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
      ],
      cy: [
        "bar",
        "alcohol",
        "diodydd",
        "gastro-dafarn",
        "coctel",
        "cwrw/beer",
        "beer/cwrw",
        "theatr",
        "sinema",
        "clwb nos",
        "clwb",
        "stadiwm",
        "cyngerdd",
        "cerddoriaeth",
        "tendio bar",
        "bingo",
        "disgo",
        "lolfa",
        "cae ras",
        "trac rasio",
        "bowlio",
        "parc",
        "ffair",
        "casino",
        "atyniad",
        "bar gwin",
        "bragdy"
      ]
    }
  },
  "059": {
    key: "059",
    value: {
      en: "Pub serving only snacks and drinks",
      cy: "Tafarn sy’n gweini byrbrydau a diodydd yn unig"
    },
    searchTerms: {
      en: [
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
      ],
      cy: [
        "bar",
        "alcohol",
        "coctel",
        "cwrw/beer",
        "beer/cwrw",
        "theatr",
        "sinema",
        "clwb nos",
        "clwb",
        "stadiwm",
        "syrcas",
        "cyngerdd",
        "cerddoriaeth",
        "tendio bar",
        "bingo",
        "disgo",
        "lolfa",
        "cae ras",
        "trac rasio",
        "bowlio",
        "parc",
        "difyrrwch",
        "ffair",
        "casino",
        "atyniad",
        "bar gwin",
        "bragdy",
        "tafarn wlyb"
      ]
    }
  },
  "060": {
    key: "060",
    value: {
      en: "Take away with no food consumed on site",
      cy: "Tecawê lle nad oes bwyd yn cael ei fwyta ar y safle"
    },
    searchTerms: {
      en: [
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
      ],
      cy: [
        "tecawê",
        "cyflenwi",
        "i fynd",
        "ciosg",
        "gyrru drwodd",
        "bwyty",
        "bistro",
        "brunch",
        "te prynhawn",
        "brecwast",
        "swper",
        "swper/te",
        "diner",
        "Bwffe",
        "ffreutur",
        "bwyd cyflym",
        "coffi",
        "pwdin",
        "espresso",
        "cyfuniad",
        "fusion",
        "seimllyd",
        "hambyrgyr",
        "byrgyr",
        "cebab",
        "pizza",
        "cinio",
        "pizzeria",
        "maes chwarae",
        "brechdan",
        "chwarae meddal",
        "swshi",
        "te",
        "bar sudd",
        "amgueddfa",
        "sw",
        "acwariwm",
        "brasserie",
        "carferi",
        "churreria",
        "creperie",
        "sgod a sglods",
        "gril",
        "caffeteria",
        "lloches",
        "tŷ hanner ffordd",
        "carchar",
        "canolfan atal",
        "sba",
        "elusen",
        "llyfrgell",
        "campfa",
        "bwyd cyflym",
        "swyddfa",
        "eglwys",
        "mosg",
        "synagog",
        "neuadd bentref",
        "teml",
        "cymunedol",
        "gastro-dafarn",
        "theatr",
        "sinema",
        "stadiwm",
        "syrcas",
        "cyngerdd",
        "cerddoriaeth",
        "bingo",
        "lolfa",
        "cae ras",
        "trac rasio",
        "bowlio",
        "parc",
        "difyrrwch",
        "ffair",
        "casino",
        "atyniad"
      ]
    }
  },
  "061": {
    key: "061",
    value: {
      en: "Nursing home, care home or day centre",
      cy: "Cartref nyrsio, cartref gofal neu ganolfan ddydd"
    },
    searchTerms: {
      en: [
        "elderly",
        "sheltered",
        "adult",
        "residential",
        "aged",
        "retirement"
      ],
      cy: [
        "oedrannus",
        "gwarchod",
        "oedolion",
        "preswyl",
        "mewn oed",
        "ymddeol"
      ]
    }
  },
  "062": {
    key: "062",
    value: { en: "Hospital", cy: "Ysbyty" },
    searchTerms: {
      en: [
        "GP",
        "emergency",
        "medical",
        "health",
        "clinic",
        "infirmary",
        "canteen",
        "hospice"
      ],
      cy: [
        "Meddyg teulu",
        "argyfwng",
        "meddygol",
        "iechyd",
        "clinig",
        "clafdy",
        "ffreutur",
        "hosbis"
      ]
    }
  },
  "063": {
    key: "063",
    value: { en: "Childminder", cy: "Gwarchodwr plant" },
    searchTerms: {
      en: ["minder", "babysitter", "nanny"],
      cy: ["babysitter", "nani"]
    }
  },
  "064": {
    key: "064",
    value: {
      en: "Childcare, nursery or play group",
      cy: "Gofalwr plant, meithrinfa neu grŵp chwarae"
    },
    searchTerms: {
      en: [
        "care",
        "babysitter",
        "nanny",
        "daycare",
        "playgroup",
        "au pair",
        "breakfast club"
      ],
      cy: [
        "gofal",
        "gwarchodwr plant",
        "babysitter",
        "nani",
        "gofal dydd",
        "grŵp chwarae",
        "au pair",
        "clwb brecwast"
      ]
    }
  },
  "065": {
    key: "065",
    value: { en: "Educational establishment", cy: "Sefydliad addysgol" },
    searchTerms: {
      en: [
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
      ],
      cy: [
        "ysgol",
        "coleg",
        "prifysgol",
        "ffreutur",
        "academi",
        "preswyl",
        "campfa",
        "paratoadol",
        "cyn-ysgol",
        "cynradd"
      ]
    }
  },
  "066": {
    key: "066",
    value: { en: "Mobile retailer", cy: "Manwerthwr symudol" },
    searchTerms: {
      en: [
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
      ],
      cy: [
        "symudol",
        "marchnad",
        "bazar",
        "cerbyd bwyd",
        "tryc",
        "pop up",
        "pop up",
        "cerbyd",
        "stondin",
        "car",
        "beic",
        "hufen iâ",
        "fan",
        "gŵyl",
        "manwerthu",
        "stryd",
        "gwerthwr"
      ]
    }
  },
  "067": {
    key: "067",
    value: { en: "Mobile caterer", cy: "Arlwywr symudol" },
    searchTerms: {
      en: [
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
      ],
      cy: [
        "symudol",
        "marchnad",
        "bazar",
        "cerbyd bwyd",
        "tryc",
        "pop up",
        "pop up",
        "cerbyd",
        "stondin",
        "car",
        "beic",
        "hufen iâ",
        "fan",
        "gŵyl",
        "digwyddiad",
        "parti",
        "digwyddiad",
        "byrgyr",
        "bwyd",
        "stand cŵn poeth",
        "stryd",
        "gwerthwr"
      ]
    }
  },
  "068": {
    key: "068",
    value: { en: "Movable food establishment", cy: "Sefydliad bwyd symudol" },
    searchTerms: {
      en: [
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
      ],
      cy: [
        "trên",
        "locomotif",
        "mordaith",
        "cruise",
        "cwch",
        "llong",
        "catamaran",
        "awyren",
        "awyren",
        "fferi",
        "cwch hwylio",
        "hyfforddwr",
        "bws",
        "tram"
      ]
    }
  },
  "069": {
    key: "069",
    value: { en: "Contract caterer", cy: "Arlwywyr contract" },
    searchTerms: { en: ["office", "lunch"], cy: ["swyddfa", "cinio"] }
  },
  "070": {
    key: "070",
    value: { en: "Home caterer", cy: "Arlwywr cartref" },
    searchTerms: {
      en: ["baker", "cake", "cupcake", "house", "domestic", "cookie", "flat"],
      cy: [
        "pobydd",
        "cacennau",
        "cacennau cupcake",
        "cartref",
        "domestig",
        "cwci",
        "fflat"
      ]
    }
  },
  "071": {
    key: "071",
    value: {
      en: "Meat cutting plant or commercial butcher",
      cy: "Ffatri torri cig neu gigydd masnachol"
    },
    searchTerms: { en: ["halal", "butchery"], cy: ["halal", "cigyddiaeth"] }
  },
  "072": {
    key: "072",
    value: { en: "Food auction hall", cy: "Neuadd ocsiwn bwyd" },
    searchTerms: { en: ["auctioneer", "bidding"], cy: ["arwerthwr", "bidio"] }
  }
};
module.exports = { businessTypeEnum };
