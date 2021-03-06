
export interface Category {
  alias: string;
  title: string;
  parents: string[];
  country_whitelist?: (boolean |string)[];
  country_blacklist?: (boolean | string)[];
}

export const categories: Category[] = [
  {
      "alias": "3dprinting",
      "title": "3D Printing",
      "parents": [
          "localservices"
      ]
  },
  {
      "alias": "abruzzese",
      "title": "Abruzzese",
      "parents": [
          "italian"
      ],
      "country_whitelist": [
          "IT"
      ]
  },
  {
      "alias": "absinthebars",
      "title": "Absinthe Bars",
      "parents": [
          "bars"
      ],
      "country_whitelist": [
          "CZ"
      ]
  },
  {
      "alias": "acaibowls",
      "title": "Acai Bowls",
      "parents": [
          "food"
      ],
      "country_blacklist": [
          "CL",
          "IT",
          "TR",
          "MX",
          "AR",
          "PL"
      ]
  },
  {
      "alias": "accessories",
      "title": "Accessories",
      "parents": [
          "fashion"
      ]
  },
  {
      "alias": "accountants",
      "title": "Accountants",
      "parents": [
          "professional"
      ]
  },
  {
      "alias": "acnetreatment",
      "title": "Acne Treatment",
      "parents": [
          "beautysvc"
      ]
  },
  {
      "alias": "active",
      "title": "Active Life",
      "parents": []
  },
  {
      "alias": "acupuncture",
      "title": "Acupuncture",
      "parents": [
          "health"
      ]
  },
  {
      "alias": "addictionmedicine",
      "title": "Addiction Medicine",
      "parents": [
          "physicians"
      ],
      "country_blacklist": [
          "JP"
      ]
  },
  {
      "alias": "adoptionservices",
      "title": "Adoption Services",
      "parents": [
          "localservices"
      ]
  },
  {
      "alias": "adult",
      "title": "Adult",
      "parents": [
          "shopping"
      ]
  },
  {
      "alias": "adultedu",
      "title": "Adult Education",
      "parents": [
          "education"
      ]
  },
  {
      "alias": "adultentertainment",
      "title": "Adult Entertainment",
      "parents": [
          "nightlife"
      ]
  },
  {
      "alias": "advertising",
      "title": "Advertising",
      "parents": [
          "professional"
      ]
  },
  {
      "alias": "aerialfitness",
      "title": "Aerial Fitness",
      "parents": [
          "fitness"
      ]
  },
  {
      "alias": "aerialtours",
      "title": "Aerial Tours",
      "parents": [
          "tours"
      ]
  },
  {
      "alias": "aestheticians",
      "title": "Aestheticians",
      "parents": [
          "medicalspa"
      ],
      "country_blacklist": [
          "CL",
          "BE",
          "MX",
          "CH",
          "AR",
          "FR"
      ]
  },
  {
      "alias": "afghani",
      "title": "Afghan",
      "parents": [
          "restaurants"
      ],
      "country_blacklist": [
          "TR",
          "MX"
      ]
  },
  {
      "alias": "african",
      "title": "African",
      "parents": [
          "restaurants"
      ],
      "country_blacklist": [
          "TR"
      ]
  },
  {
      "alias": "afrobrazilian",
      "title": "Afro-Brazilian",
      "parents": [
          "religiousorgs"
      ],
      "country_whitelist": [
          "BR"
      ]
  },
  {
      "alias": "agriturismi",
      "title": "Agriturismi",
      "parents": [
          "hotels"
      ],
      "country_whitelist": [
          "AT",
          "CH",
          "AR",
          "CZ",
          "PL",
          "CL",
          "DE",
          "IT",
          "TW",
          "ES",
          "MX",
          "FR"
      ]
  },
  {
      "alias": "aircraftdealers",
      "title": "Aircraft Dealers",
      "parents": [
          "auto"
      ],
      "country_whitelist": [
          "US",
          "CZ",
          "PT"
      ]
  },
  {
      "alias": "aircraftrepairs",
      "title": "Aircraft Repairs",
      "parents": [
          "auto"
      ]
  },
  {
      "alias": "airductcleaning",
      "title": "Air Duct Cleaning",
      "parents": [
          "localservices"
      ],
      "country_whitelist": [
          "CA",
          "IE",
          "IT",
          "PH",
          "US",
          "GB",
          "ES",
          "AU",
          "NZ",
          "MY",
          "SG"
      ]
  },
  {
      "alias": "airlines",
      "title": "Airlines",
      "parents": [
          "transport"
      ]
  },
  {
      "alias": "airport_shuttles",
      "title": "Airport Shuttles",
      "parents": [
          "transport"
      ]
  },
  {
      "alias": "airportlounges",
      "title": "Airport Lounges",
      "parents": [
          "bars"
      ]
  },
  {
      "alias": "airports",
      "title": "Airports",
      "parents": [
          "hotelstravel"
      ]
  },
  {
      "alias": "airportterminals",
      "title": "Airport Terminals",
      "parents": [
          "airports"
      ]
  },
  {
      "alias": "airsoft",
      "title": "Airsoft",
      "parents": [
          "active"
      ]
  },
  {
      "alias": "alentejo",
      "title": "Alentejo",
      "parents": [
          "portuguese"
      ],
      "country_whitelist": [
          "PT"
      ]
  },
  {
      "alias": "algarve",
      "title": "Algarve",
      "parents": [
          "portuguese"
      ],
      "country_whitelist": [
          "PT"
      ]
  },
  {
      "alias": "allergist",
      "title": "Allergists",
      "parents": [
          "physicians"
      ]
  },
  {
      "alias": "alsatian",
      "title": "Alsatian",
      "parents": [
          "french"
      ],
      "country_whitelist": [
          "DE",
          "FR"
      ]
  },
  {
      "alias": "alternativemedicine",
      "title": "Alternative Medicine",
      "parents": [
          "health"
      ],
      "country_blacklist": [
          "AT",
          "HK",
          "PT",
          "AR",
          "CL",
          "DE",
          "PH",
          "TW",
          "TR",
          "MX",
          "MY",
          "FI",
          "CH",
          "PL",
          "ES",
          "JP"
      ]
  },
  {
      "alias": "altoatesine",
      "title": "Altoatesine",
      "parents": [
          "italian"
      ],
      "country_whitelist": [
          "IT"
      ]
  },
  {
      "alias": "amateursportsteams",
      "title": "Amateur Sports Teams",
      "parents": [
          "active"
      ],
      "country_blacklist": [
          "CZ"
      ]
  },
  {
      "alias": "amusementparks",
      "title": "Amusement Parks",
      "parents": [
          "active"
      ]
  },
  {
      "alias": "andalusian",
      "title": "Andalusian",
      "parents": [
          "restaurants"
      ],
      "country_whitelist": [
          "ES",
          "IT"
      ]
  },
  {
      "alias": "anesthesiologists",
      "title": "Anesthesiologists",
      "parents": [
          "physicians"
      ],
      "country_whitelist": [
          "IT",
          "US",
          "BE",
          "AU",
          "SE",
          "PT",
          "FR"
      ]
  },
  {
      "alias": "animalassistedtherapy",
      "title": "Animal Assisted Therapy",
      "parents": [
          "health"
      ]
  },
  {
      "alias": "animalholistic",
      "title": "Holistic Animal Care",
      "parents": [
          "petservices"
      ]
  },
  {
      "alias": "animalphysicaltherapy",
      "title": "Animal Physical Therapy",
      "parents": [
          "petservices"
      ]
  },
  {
      "alias": "animalshelters",
      "title": "Animal Shelters",
      "parents": [
          "pets"
      ]
  },
  {
      "alias": "antiques",
      "title": "Antiques",
      "parents": [
          "shopping"
      ]
  },
  {
      "alias": "apartmentagents",
      "title": "Apartment Agents",
      "parents": [
          "realestateagents"
      ]
  },
  {
      "alias": "apartments",
      "title": "Apartments",
      "parents": [
          "realestate"
      ]
  },
  {
      "alias": "appliances",
      "title": "Appliances",
      "parents": [
          "homeandgarden"
      ]
  },
  {
      "alias": "appraisalservices",
      "title": "Appraisal Services",
      "parents": [
          "localservices"
      ]
  },
  {
      "alias": "apulian",
      "title": "Apulian",
      "parents": [
          "italian"
      ],
      "country_whitelist": [
          "IT",
          "FR"
      ]
  },
  {
      "alias": "aquariums",
      "title": "Aquariums",
      "parents": [
          "active"
      ]
  },
  {
      "alias": "aquariumservices",
      "title": "Aquarium Services",
      "parents": [
          "petservices"
      ],
      "country_blacklist": [
          "CL",
          "JP",
          "HK",
          "MX",
          "AR"
      ]
  },
  {
      "alias": "arabian",
      "title": "Arabian",
      "parents": [
          "restaurants"
      ],
      "country_blacklist": [
          "DK"
      ]
  },
  {
      "alias": "arabpizza",
      "title": "Arab Pizza",
      "parents": [
          "arabian"
      ],
      "country_whitelist": [
          "BR"
      ]
  },
  {
      "alias": "arcades",
      "title": "Arcades",
      "parents": [
          "arts"
      ]
  },
  {
      "alias": "archery",
      "title": "Archery",
      "parents": [
          "active"
      ]
  },
  {
      "alias": "architects",
      "title": "Architects",
      "parents": [
          "professional"
      ]
  },
  {
      "alias": "architecturaltours",
      "title": "Architectural Tours",
      "parents": [
          "tours"
      ]
  },
  {
      "alias": "argentine",
      "title": "Argentine",
      "parents": [
          "restaurants"
      ],
      "country_blacklist": [
          "FI"
      ]
  },
  {
      "alias": "armenian",
      "title": "Armenian",
      "parents": [
          "restaurants"
      ],
      "country_whitelist": [
          "BE",
          "AR",
          "CZ",
          "PL",
          "IT",
          "US",
          "GB",
          "ES",
          "TR",
          "FR"
      ]
  },
  {
      "alias": "arroceria_paella",
      "title": "Arroceria / Paella",
      "parents": [
          "spanish"
      ],
      "country_whitelist": [
          "ES"
      ]
  },
  {
      "alias": "artclasses",
      "title": "Art Classes",
      "parents": [
          "education"
      ],
      "country_blacklist": [
          "CL",
          "JP",
          "HK",
          "MX",
          "AR"
      ]
  },
  {
      "alias": "artconsultants",
      "title": "Art Consultants",
      "parents": [
          "professional"
      ]
  },
  {
      "alias": "artificialturf",
      "title": "Artificial Turf",
      "parents": [
          "homeservices"
      ]
  },
  {
      "alias": "artinstallation",
      "title": "Art Installation",
      "parents": [
          "localservices"
      ],
      "country_whitelist": [
          "DE",
          "PH",
          "US",
          "AT",
          "CH",
          "MY",
          "PL"
      ]
  },
  {
      "alias": "artmuseums",
      "title": "Art Museums",
      "parents": [
          "museums"
      ],
      "country_blacklist": [
          "FR"
      ]
  },
  {
      "alias": "artrestoration",
      "title": "Art Restoration",
      "parents": [
          "localservices"
      ]
  },
  {
      "alias": "arts",
      "title": "Arts & Entertainment",
      "parents": []
  },
  {
      "alias": "artsandcrafts",
      "title": "Arts & Crafts",
      "parents": [
          "shopping"
      ]
  },
  {
      "alias": "artschools",
      "title": "Art Schools",
      "parents": [
          "specialtyschools"
      ]
  },
  {
      "alias": "artspacerentals",
      "title": "Art Space Rentals",
      "parents": [
          "realestate"
      ],
      "country_whitelist": [
          "HK",
          "SE",
          "IE",
          "IT",
          "US",
          "GB",
          "JP",
          "SG"
      ]
  },
  {
      "alias": "artsupplies",
      "title": "Art Supplies",
      "parents": [
          "artsandcrafts"
      ]
  },
  {
      "alias": "arttours",
      "title": "Art Tours",
      "parents": [
          "tours"
      ]
  },
  {
      "alias": "asianfusion",
      "title": "Asian Fusion",
      "parents": [
          "restaurants"
      ]
  },
  {
      "alias": "assistedliving",
      "title": "Assisted Living Facilities",
      "parents": [
          "health"
      ]
  },
  {
      "alias": "astrologers",
      "title": "Astrologers",
      "parents": [
          "psychic_astrology"
      ]
  },
  {
      "alias": "asturian",
      "title": "Asturian",
      "parents": [
          "restaurants"
      ],
      "country_whitelist": [
          "ES"
      ]
  },
  {
      "alias": "ateliers",
      "title": "Ateliers",
      "parents": [
          "artsandcrafts"
      ],
      "country_whitelist": [
          "NL",
          "BE",
          "AT",
          "CH",
          "NO",
          "DE",
          "IT",
          "TR",
          "JP",
          "DK"
      ]
  },
  {
      "alias": "attractionfarms",
      "title": "Attraction Farms",
      "parents": [
          "farms"
      ],
      "country_whitelist": [
          "BR",
          "AT",
          "SE",
          "CH",
          "PT",
          "NO",
          "DE",
          "IT",
          "US",
          "ES",
          "DK"
      ]
  },
  {
      "alias": "atvrentals",
      "title": "ATV Rentals/Tours",
      "parents": [
          "active"
      ],
      "country_whitelist": [
          "NL",
          "BE",
          "AT",
          "SE",
          "CH",
          "AR",
          "PL",
          "NO",
          "CL",
          "DE",
          "US",
          "ES",
          "MX",
          "FI"
      ]
  },
  {
      "alias": "auctionhouses",
      "title": "Auction Houses",
      "parents": [
          "shopping"
      ],
      "country_blacklist": [
          "HK",
          "AR",
          "CL",
          "PH",
          "TW",
          "TR",
          "JP",
          "MY"
      ]
  },
  {
      "alias": "audiologist",
      "title": "Audiologist",
      "parents": [
          "physicians"
      ],
      "country_blacklist": [
          "DE",
          "AT",
          "CZ",
          "CH"
      ]
  },
  {
      "alias": "audiovisualequipmentrental",
      "title": "Audio/Visual Equipment Rental",
      "parents": [
          "partyequipmentrentals"
      ],
      "country_whitelist": [
          "BR",
          "BE",
          "AT",
          "DE",
          "PH",
          "IE",
          "US",
          "DK",
          "MY",
          "CA",
          "NL",
          "SE",
          "CH",
          "PL",
          "NO",
          "GB",
          "ES",
          "AU",
          "SG",
          "FR"
      ]
  },
  {
      "alias": "australian",
      "title": "Australian",
      "parents": [
          "restaurants"
      ]
  },
  {
      "alias": "austrian",
      "title": "Austrian",
      "parents": [
          "restaurants"
      ],
      "country_blacklist": [
          "ES",
          "DK"
      ]
  },
  {
      "alias": "authorized_postal_representative",
      "title": "Authorized Postal Representative",
      "parents": [
          "publicservicesgovt"
      ],
      "country_whitelist": [
          "SE",
          "NO"
      ]
  },
  {
      "alias": "auto",
      "title": "Automotive",
      "parents": []
  },
  {
      "alias": "auto_detailing",
      "title": "Auto Detailing",
      "parents": [
          "auto"
      ],
      "country_blacklist": [
          "AU",
          "ES",
          "BR"
      ]
  },
  {
      "alias": "autocustomization",
      "title": "Auto Customization",
      "parents": [
          "auto"
      ],
      "country_whitelist": [
          "CA",
          "AT",
          "CH",
          "PT",
          "AR",
          "CZ",
          "PL",
          "CL",
          "DE",
          "US",
          "ES",
          "MX",
          "SG"
      ]
  },
  {
      "alias": "autodamageassessment",
      "title": "Car Inspectors",
      "parents": [
          "auto"
      ],
      "country_whitelist": [
          "BR",
          "NL",
          "BE",
          "SE",
          "PT",
          "NO",
          "DE",
          "US",
          "DK"
      ]
  },
  {
      "alias": "autoelectric",
      "title": "Auto Electric Services",
      "parents": [
          "auto"
      ],
      "country_whitelist": [
          "BR",
          "PT",
          "AR",
          "CZ",
          "CL",
          "IT",
          "ES",
          "MX"
      ]
  },
  {
      "alias": "autoglass",
      "title": "Auto Glass Services",
      "parents": [
          "auto"
      ],
      "country_blacklist": [
          "ES"
      ]
  },
  {
      "alias": "autoinsurance",
      "title": "Auto Insurance",
      "parents": [
          "insurance"
      ],
      "country_blacklist": [
          "CA",
          "AT",
          "HK",
          "CH",
          "DE",
          "IE",
          "PH",
          "TW",
          "GB",
          "FI",
          "NZ",
          "MY",
          "SG",
          "FR"
      ]
  },
  {
      "alias": "autoloanproviders",
      "title": "Auto Loan Providers",
      "parents": [
          "auto"
      ],
      "country_whitelist": [
          "BE",
          "PT",
          "PH",
          "IT",
          "IE",
          "US",
          "TR",
          "NZ",
          "MY",
          "CA",
          "NL",
          "CZ",
          "PL",
          "GB",
          "AU",
          "SG"
      ]
  },
  {
      "alias": "autopartssupplies",
      "title": "Auto Parts & Supplies",
      "parents": [
          "auto"
      ]
  },
  {
      "alias": "autorepair",
      "title": "Auto Repair",
      "parents": [
          "auto"
      ]
  },
  {
      "alias": "autosecurity",
      "title": "Auto Security",
      "parents": [
          "auto"
      ],
      "country_blacklist": [
          "FR"
      ]
  },
  {
      "alias": "autoupholstery",
      "title": "Auto Upholstery",
      "parents": [
          "auto"
      ]
  },
  {
      "alias": "auvergnat",
      "title": "Auvergnat",
      "parents": [
          "french"
      ],
      "country_whitelist": [
          "FR"
      ]
  },
  {
      "alias": "aviationservices",
      "title": "Aviation Services",
      "parents": [
          "auto"
      ]
  },
  {
      "alias": "awnings",
      "title": "Awnings",
      "parents": [
          "localservices"
      ]
  },
  {
      "alias": "axethrowing",
      "title": "Axe Throwing",
      "parents": [
          "active"
      ],
      "country_whitelist": [
          "US",
          "CA",
          "GB"
      ]
  },
  {
      "alias": "ayurveda",
      "title": "Ayurveda",
      "parents": [
          "health"
      ]
  },
  {
      "alias": "azores",
      "title": "Azores",
      "parents": [
          "portuguese"
      ],
      "country_whitelist": [
          "PT"
      ]
  },
  {
      "alias": "baby_gear",
      "title": "Baby Gear & Furniture",
      "parents": [
          "shopping"
      ]
  },
  {
      "alias": "backflowservices",
      "title": "Backflow Services",
      "parents": [
          "plumbing"
      ],
      "country_whitelist": [
          "US"
      ]
  },
  {
      "alias": "backshop",
      "title": "Backshop",
      "parents": [
          "food"
      ],
      "country_whitelist": [
          "DE",
          "AT",
          "CH"
      ]
  },
  {
      "alias": "baden",
      "title": "Baden",
      "parents": [
          "german"
      ],
      "country_whitelist": [
          "DE"
      ]
  },
  {
      "alias": "badminton",
      "title": "Badminton",
      "parents": [
          "active"
      ],
      "country_blacklist": [
          "SG",
          "BR",
          "PL",
          "NZ"
      ]
  },
  {
      "alias": "bagels",
      "title": "Bagels",
      "parents": [
          "food"
      ],
      "country_blacklist": [
          "AU",
          "ES"
      ]
  },
  {
      "alias": "baguettes",
      "title": "Baguettes",
      "parents": [
          "restaurants"
      ],
      "country_whitelist": [
          "SE",
          "PT",
          "CZ",
          "NO",
          "DE",
          "IT",
          "TR",
          "MX"
      ]
  },
  {
      "alias": "bailbondsmen",
      "title": "Bail Bondsmen",
      "parents": [
          "localservices"
      ],
      "country_whitelist": [
          "US",
          "PT"
      ]
  },
  {
      "alias": "bakeries",
      "title": "Bakeries",
      "parents": [
          "food"
      ]
  },
  {
      "alias": "balloonservices",
      "title": "Balloon Services",
      "parents": [
          "eventservices"
      ],
      "country_whitelist": [
          "CA",
          "BR",
          "NL",
          "BE",
          "AT",
          "CH",
          "PL",
          "IE",
          "DE",
          "US",
          "GB",
          "AU",
          "NZ",
          "SG"
      ]
  },
  {
      "alias": "bangladeshi",
      "title": "Bangladeshi",
      "parents": [
          "restaurants"
      ],
      "country_blacklist": [
          "ES",
          "TR",
          "DK",
          "MX",
          "PT"
      ]
  },
  {
      "alias": "bankruptcy",
      "title": "Bankruptcy Law",
      "parents": [
          "lawyers"
      ]
  },
  {
      "alias": "banks",
      "title": "Banks & Credit Unions",
      "parents": [
          "financialservices"
      ]
  },
  {
      "alias": "barbers",
      "title": "Barbers",
      "parents": [
          "beautysvc"
      ]
  },
  {
      "alias": "barcrawl",
      "title": "Bar Crawl",
      "parents": [
          "nightlife"
      ],
      "country_whitelist": [
          "AT",
          "CH",
          "AR",
          "CZ",
          "PL",
          "DE",
          "US",
          "AU",
          "MX"
      ]
  },
  {
      "alias": "barreclasses",
      "title": "Barre Classes",
      "parents": [
          "fitness"
      ],
      "country_whitelist": [
          "CA",
          "NL",
          "BE",
          "PT",
          "CZ",
          "NO",
          "IE",
          "US",
          "GB",
          "AU",
          "DK",
          "NZ",
          "FI"
      ]
  },
  {
      "alias": "bars",
      "title": "Bars",
      "parents": [
          "nightlife"
      ]
  },
  {
      "alias": "bartenders",
      "title": "Bartenders",
      "parents": [
          "eventservices"
      ],
      "country_blacklist": [
          "AT",
          "HK",
          "CH",
          "PL",
          "NO",
          "IE",
          "PH",
          "TW",
          "GB",
          "TR",
          "JP",
          "NZ",
          "MY",
          "SG",
          "FI"
      ]
  },
  {
      "alias": "bartendingschools",
      "title": "Bartending Schools",
      "parents": [
          "specialtyschools"
      ]
  },
  {
      "alias": "baseballfields",
      "title": "Baseball Fields",
      "parents": [
          "active"
      ],
      "country_blacklist": [
          "FR"
      ]
  },
  {
      "alias": "basketballcourts",
      "title": "Basketball Courts",
      "parents": [
          "active"
      ],
      "country_blacklist": [
          "IE",
          "CA",
          "BR",
          "GB",
          "NL",
          "SE",
          "PL"
      ]
  },
  {
      "alias": "basque",
      "title": "Basque",
      "parents": [
          "restaurants"
      ],
      "country_blacklist": [
          "TR",
          "AU",
          "DK",
          "PT",
          "CZ",
          "SG"
      ]
  },
  {
      "alias": "bathing_area",
      "title": "Bathing Area",
      "parents": [
          "active"
      ],
      "country_whitelist": [
          "AT",
          "SE",
          "CH",
          "PT",
          "CZ",
          "NO",
          "DE",
          "JP",
          "DK",
          "FI"
      ]
  },
  {
      "alias": "batterystores",
      "title": "Battery Stores",
      "parents": [
          "shopping"
      ],
      "country_blacklist": [
          "CZ"
      ]
  },
  {
      "alias": "battingcages",
      "title": "Batting Cages",
      "parents": [
          "active"
      ],
      "country_whitelist": [
          "SG",
          "US",
          "JP",
          "TW"
      ]
  },
  {
      "alias": "bavarian",
      "title": "Bavarian",
      "parents": [
          "restaurants"
      ],
      "country_whitelist": [
          "DE",
          "AT",
          "CH"
      ]
  },
  {
      "alias": "bbq",
      "title": "Barbeque",
      "parents": [
          "restaurants"
      ],
      "country_blacklist": [
          "AU",
          "BR"
      ]
  },
  {
      "alias": "beachbars",
      "title": "Beach Bars",
      "parents": [
          "bars"
      ],
      "country_blacklist": [
          "CA",
          "BE",
          "HK",
          "CZ",
          "PL",
          "IE",
          "PH",
          "US",
          "TW",
          "GB",
          "TR",
          "JP",
          "NZ",
          "MY",
          "FI"
      ]
  },
  {
      "alias": "beachequipmentrental",
      "title": "Beach Equipment Rentals",
      "parents": [
          "active"
      ]
  },
  {
      "alias": "beaches",
      "title": "Beaches",
      "parents": [
          "active"
      ]
  },
  {
      "alias": "beachvolleyball",
      "title": "Beach Volleyball",
      "parents": [
          "active"
      ],
      "country_blacklist": [
          "BE",
          "HK",
          "IE",
          "IT",
          "PH",
          "US",
          "TW",
          "TR",
          "NZ",
          "MY",
          "CA",
          "NL",
          "CH",
          "PL",
          "GB",
          "FR"
      ]
  },
  {
      "alias": "beautysvc",
      "title": "Beauty & Spas",
      "parents": []
  },
  {
      "alias": "bedbreakfast",
      "title": "Bed & Breakfast",
      "parents": [
          "hotelstravel"
      ]
  },
  {
      "alias": "beer_and_wine",
      "title": "Beer, Wine & Spirits",
      "parents": [
          "food"
      ]
  },
  {
      "alias": "beerbar",
      "title": "Beer Bar",
      "parents": [
          "bars"
      ]
  },
  {
      "alias": "beergarden",
      "title": "Beer Garden",
      "parents": [
          "restaurants"
      ],
      "country_whitelist": [
          "DE",
          "AT",
          "CZ",
          "CH"
      ]
  },
  {
      "alias": "beergardens",
      "title": "Beer Gardens",
      "parents": [
          "nightlife"
      ],
      "country_whitelist": [
          "CA",
          "SE",
          "CZ",
          "PL",
          "NO",
          "IE",
          "IT",
          "US",
          "GB",
          "JP",
          "AU",
          "DK",
          "MX",
          "FR"
      ]
  },
  {
      "alias": "beerhall",
      "title": "Beer Hall",
      "parents": [
          "restaurants"
      ],
      "country_whitelist": [
          "DE",
          "AT",
          "CH"
      ]
  },
  {
      "alias": "beertours",
      "title": "Beer Tours",
      "parents": [
          "tours"
      ]
  },
  {
      "alias": "behavioranalysts",
      "title": "Behavior Analysts",
      "parents": [
          "health"
      ]
  },
  {
      "alias": "beira",
      "title": "Beira",
      "parents": [
          "portuguese"
      ],
      "country_whitelist": [
          "PT"
      ]
  },
  {
      "alias": "beisl",
      "title": "Beisl",
      "parents": [
          "restaurants"
      ],
      "country_whitelist": [
          "AT"
      ]
  },
  {
      "alias": "belgian",
      "title": "Belgian",
      "parents": [
          "restaurants"
      ]
  },
  {
      "alias": "bento",
      "title": "Bento",
      "parents": [
          "food"
      ],
      "country_whitelist": [
          "JP"
      ]
  },
  {
      "alias": "berrichon",
      "title": "Berrichon",
      "parents": [
          "french"
      ],
      "country_whitelist": [
          "FR"
      ]
  },
  {
      "alias": "bespoke",
      "title": "Bespoke Clothing",
      "parents": [
          "shopping"
      ],
      "country_blacklist": [
          "BR",
          "SE",
          "AR",
          "CL",
          "TR",
          "JP",
          "MX",
          "FI"
      ]
  },
  {
      "alias": "bettingcenters",
      "title": "Betting Centers",
      "parents": [
          "arts"
      ],
      "country_blacklist": [
          "US",
          "CA",
          "FI",
          "NZ",
          "SG",
          "NO",
          "FR"
      ]
  },
  {
      "alias": "beverage_stores",
      "title": "Beverage Store",
      "parents": [
          "food"
      ],
      "country_whitelist": [
          "NL",
          "BE",
          "AT",
          "CH",
          "PT",
          "CL",
          "DE",
          "IT",
          "US",
          "ES",
          "TR",
          "AU"
      ]
  },
  {
      "alias": "bicyclepaths",
      "title": "Bicycle Paths",
      "parents": [
          "active"
      ],
      "country_blacklist": [
          "CA",
          "AT",
          "HK",
          "CH",
          "DE",
          "IT",
          "PH",
          "US",
          "TW",
          "TR",
          "MY",
          "FR"
      ]
  },
  {
      "alias": "bicycles",
      "title": "Bicycles",
      "parents": [],
      "country_whitelist": [
          "CZ",
          "DK",
          "PL",
          "PT"
      ]
  },
  {
      "alias": "bike_repair_maintenance",
      "title": "Bike Repair/Maintenance",
      "parents": [
          "localservices"
      ]
  },
  {
      "alias": "bikeassociations",
      "title": "Bike Associations",
      "parents": [
          "bicycles"
      ],
      "country_whitelist": [
          "DK",
          "PT"
      ]
  },
  {
      "alias": "bikeparking",
      "title": "Bike Parking",
      "parents": [
          "active"
      ],
      "country_blacklist": [
          "FR"
      ]
  },
  {
      "alias": "bikerentals",
      "title": "Bike Rentals",
      "parents": [
          "active"
      ]
  },
  {
      "alias": "bikerepair",
      "title": "Bike Repair",
      "parents": [
          "bicycles"
      ],
      "country_whitelist": [
          "DK",
          "PT"
      ]
  },
  {
      "alias": "bikes",
      "title": "Bikes",
      "parents": [
          "sportgoods"
      ]
  },
  {
      "alias": "bikesharing",
      "title": "Bike Sharing",
      "parents": [
          "transport"
      ]
  },
  {
      "alias": "bikeshop",
      "title": "Bike Shop",
      "parents": [
          "bicycles"
      ],
      "country_whitelist": [
          "DK",
          "PT"
      ]
  },
  {
      "alias": "biketours",
      "title": "Bike tours",
      "parents": [
          "tours"
      ]
  },
  {
      "alias": "billingservices",
      "title": "Billing Services",
      "parents": [
          "professional"
      ],
      "country_whitelist": [
          "SE",
          "US"
      ]
  },
  {
      "alias": "bingo",
      "title": "Bingo Halls",
      "parents": [
          "arts"
      ],
      "country_whitelist": [
          "BR",
          "SE",
          "AR",
          "NO",
          "CL",
          "IE",
          "IT",
          "US",
          "GB",
          "ES",
          "AU",
          "DK",
          "MX",
          "NZ",
          "FI"
      ]
  },
  {
      "alias": "biohazardcleanup",
      "title": "Biohazard Cleanup",
      "parents": [
          "localservices"
      ]
  },
  {
      "alias": "birdshops",
      "title": "Bird Shops",
      "parents": [
          "petstore"
      ],
      "country_whitelist": [
          "NL",
          "BE",
          "SE",
          "NO",
          "DE",
          "IT",
          "US",
          "ES",
          "DK",
          "SG"
      ]
  },
  {
      "alias": "bistros",
      "title": "Bistros",
      "parents": [
          "restaurants"
      ],
      "country_blacklist": [
          "US"
      ]
  },
  {
      "alias": "blacksea",
      "title": "Black Sea",
      "parents": [
          "restaurants"
      ],
      "country_whitelist": [
          "TR"
      ]
  },
  {
      "alias": "blinds",
      "title": "Shades & Blinds",
      "parents": [
          "homeservices"
      ]
  },
  {
      "alias": "blooddonation",
      "title": "Blood & Plasma Donation Centers",
      "parents": [
          "health"
      ],
      "country_blacklist": [
          "CA",
          "NL",
          "BE",
          "HK",
          "IE",
          "PH",
          "TW",
          "GB",
          "MY",
          "SG"
      ]
  },
  {
      "alias": "blowfish",
      "title": "Blowfish",
      "parents": [
          "japanese"
      ],
      "country_whitelist": [
          "JP"
      ]
  },
  {
      "alias": "blowoutservices",
      "title": "Blow Dry/Out Services",
      "parents": [
          "hair"
      ],
      "country_whitelist": [
          "CA",
          "PT",
          "CZ",
          "NO",
          "IE",
          "US",
          "GB",
          "TR",
          "AU",
          "DK",
          "FR"
      ]
  },
  {
      "alias": "boatcharters",
      "title": "Boat Charters",
      "parents": [
          "eventservices"
      ],
      "country_blacklist": [
          "CZ"
      ]
  },
  {
      "alias": "boatdealers",
      "title": "Boat Dealers",
      "parents": [
          "auto"
      ],
      "country_blacklist": [
          "BR",
          "FR",
          "HK",
          "CL",
          "IT",
          "PH",
          "TW",
          "TR",
          "JP",
          "MY",
          "FI"
      ]
  },
  {
      "alias": "boating",
      "title": "Boating",
      "parents": [
          "active"
      ]
  },
  {
      "alias": "boatpartsandsupplies",
      "title": "Boat Parts & Supplies",
      "parents": [
          "auto"
      ]
  },
  {
      "alias": "boatrepair",
      "title": "Boat Repair",
      "parents": [
          "professional"
      ],
      "country_blacklist": [
          "CZ"
      ]
  },
  {
      "alias": "boattours",
      "title": "Boat Tours",
      "parents": [
          "tours"
      ]
  },
  {
      "alias": "bobsledding",
      "title": "Bobsledding",
      "parents": [
          "active"
      ]
  },
  {
      "alias": "bocceball",
      "title": "Bocce Ball",
      "parents": [
          "active"
      ]
  },
  {
      "alias": "bodycontouring",
      "title": "Body Contouring",
      "parents": [
          "health"
      ],
      "country_blacklist": [
          "IT",
          "FR"
      ]
  },
  {
      "alias": "bodyshops",
      "title": "Body Shops",
      "parents": [
          "auto"
      ]
  },
  {
      "alias": "bookbinding",
      "title": "Bookbinding",
      "parents": [
          "localservices"
      ]
  },
  {
      "alias": "bookkeepers",
      "title": "Bookkeepers",
      "parents": [
          "professional"
      ],
      "country_whitelist": [
          "CA",
          "NL",
          "BE",
          "HK",
          "CZ",
          "IE",
          "PH",
          "US",
          "TW",
          "GB",
          "AU",
          "NZ",
          "MY",
          "SG"
      ]
  },
  {
      "alias": "bookstores",
      "title": "Bookstores",
      "parents": [
          "media"
      ]
  },
  {
      "alias": "bootcamps",
      "title": "Boot Camps",
      "parents": [
          "fitness"
      ],
      "country_whitelist": [
          "SE",
          "PT",
          "CZ",
          "PL",
          "NO",
          "IT",
          "US",
          "ES",
          "AU",
          "DK",
          "NZ"
      ]
  },
  {
      "alias": "boudoirphotography",
      "title": "Boudoir Photography",
      "parents": [
          "photographers"
      ],
      "country_whitelist": [
          "DE",
          "SE",
          "US",
          "CA"
      ]
  },
  {
      "alias": "bouncehouserentals",
      "title": "Bounce House Rentals",
      "parents": [
          "partyequipmentrentals"
      ],
      "country_whitelist": [
          "CA",
          "NL",
          "BE",
          "AT",
          "SE",
          "CH",
          "PL",
          "NO",
          "DE",
          "IE",
          "US",
          "GB",
          "AU",
          "DK",
          "NZ"
      ]
  },
  {
      "alias": "bourguignon",
      "title": "Bourguignon",
      "parents": [
          "french"
      ],
      "country_whitelist": [
          "FR"
      ]
  },
  {
      "alias": "bowling",
      "title": "Bowling",
      "parents": [
          "active"
      ]
  },
  {
      "alias": "boxing",
      "title": "Boxing",
      "parents": [
          "fitness"
      ],
      "country_blacklist": [
          "ES",
          "TR",
          "AU",
          "SE",
          "SG",
          "PL",
          "FI"
      ]
  },
  {
      "alias": "brasseries",
      "title": "Brasseries",
      "parents": [
          "restaurants"
      ],
      "country_blacklist": [
          "MX",
          "AR"
      ]
  },
  {
      "alias": "brazilian",
      "title": "Brazilian",
      "parents": [
          "restaurants"
      ]
  },
  {
      "alias": "brazilianempanadas",
      "title": "Brazilian Empanadas",
      "parents": [
          "brazilian"
      ],
      "country_whitelist": [
          "BR"
      ]
  },
  {
      "alias": "brazilianjiujitsu",
      "title": "Brazilian Jiu-jitsu",
      "parents": [
          "martialarts"
      ]
  },
  {
      "alias": "breakfast_brunch",
      "title": "Breakfast & Brunch",
      "parents": [
          "restaurants"
      ]
  },
  {
      "alias": "breweries",
      "title": "Breweries",
      "parents": [
          "food"
      ]
  },
  {
      "alias": "brewingsupplies",
      "title": "Brewing Supplies",
      "parents": [
          "shopping"
      ],
      "country_blacklist": [
          "CL",
          "HK",
          "JP",
          "AR"
      ]
  },
  {
      "alias": "brewpubs",
      "title": "Brewpubs",
      "parents": [
          "breweries"
      ],
      "country_blacklist": [
          "CL",
          "IT",
          "ES",
          "MX",
          "AR",
          "FR"
      ]
  },
  {
      "alias": "bridal",
      "title": "Bridal",
      "parents": [
          "shopping"
      ]
  },
  {
      "alias": "british",
      "title": "British",
      "parents": [
          "restaurants"
      ],
      "country_blacklist": [
          "FI"
      ]
  },
  {
      "alias": "bubblesoccer",
      "title": "Bubble Soccer",
      "parents": [
          "active"
      ]
  },
  {
      "alias": "bubbletea",
      "title": "Bubble Tea",
      "parents": [
          "food"
      ],
      "country_blacklist": [
          "ES",
          "TR",
          "AT",
          "MX",
          "CH",
          "AR"
      ]
  },
  {
      "alias": "buddhist_temples",
      "title": "Buddhist Temples",
      "parents": [
          "religiousorgs"
      ]
  },
  {
      "alias": "buffets",
      "title": "Buffets",
      "parents": [
          "restaurants"
      ]
  },
  {
      "alias": "buildingsupplies",
      "title": "Building Supplies",
      "parents": [
          "homeservices"
      ]
  },
  {
      "alias": "bulgarian",
      "title": "Bulgarian",
      "parents": [
          "restaurants"
      ],
      "country_blacklist": [
          "CA",
          "BR",
          "NL",
          "NO",
          "TR",
          "DK",
          "NZ",
          "SG"
      ]
  },
  {
      "alias": "bulkbilling",
      "title": "Bulk Billing",
      "parents": [
          "medcenters"
      ],
      "country_whitelist": [
          "AU"
      ]
  },
  {
      "alias": "bungeejumping",
      "title": "Bungee Jumping",
      "parents": [
          "active"
      ]
  },
  {
      "alias": "burgers",
      "title": "Burgers",
      "parents": [
          "restaurants"
      ]
  },
  {
      "alias": "burmese",
      "title": "Burmese",
      "parents": [
          "restaurants"
      ],
      "country_blacklist": [
          "ES",
          "TR",
          "DK",
          "PT",
          "CZ",
          "FI"
      ]
  },
  {
      "alias": "buses",
      "title": "Buses",
      "parents": [
          "transport"
      ]
  },
  {
      "alias": "businessconsulting",
      "title": "Business Consulting",
      "parents": [
          "professional"
      ],
      "country_blacklist": [
          "TW",
          "TR",
          "HK",
          "CZ",
          "FI"
      ]
  },
  {
      "alias": "businessfinancing",
      "title": "Business Financing",
      "parents": [
          "financialservices"
      ]
  },
  {
      "alias": "businesslawyers",
      "title": "Business Law",
      "parents": [
          "lawyers"
      ],
      "country_whitelist": [
          "CA",
          "BR",
          "PT",
          "CZ",
          "PL",
          "NO",
          "IE",
          "US",
          "GB",
          "DK"
      ]
  },
  {
      "alias": "busrental",
      "title": "Bus Rental",
      "parents": [
          "localservices"
      ]
  },
  {
      "alias": "busstations",
      "title": "Bus Stations",
      "parents": [
          "transport"
      ],
      "country_blacklist": [
          "FR"
      ]
  },
  {
      "alias": "bustours",
      "title": "Bus Tours",
      "parents": [
          "tours"
      ]
  },
  {
      "alias": "butcher",
      "title": "Butcher",
      "parents": [
          "food"
      ],
      "country_blacklist": [
          "DE",
          "AT",
          "CH"
      ]
  },
  {
      "alias": "c_and_mh",
      "title": "Counseling & Mental Health",
      "parents": [
          "health"
      ]
  },
  {
      "alias": "cabaret",
      "title": "Cabaret",
      "parents": [
          "arts"
      ],
      "country_blacklist": [
          "CL",
          "JP",
          "HK",
          "MX",
          "AR"
      ]
  },
  {
      "alias": "cabinetry",
      "title": "Cabinetry",
      "parents": [
          "homeservices"
      ],
      "country_blacklist": [
          "CL",
          "JP",
          "HK",
          "MX",
          "AR"
      ]
  },
  {
      "alias": "cablecars",
      "title": "Cable Cars",
      "parents": [
          "transport"
      ],
      "country_whitelist": [
          "BR",
          "AT",
          "CH",
          "PT",
          "CZ",
          "DE",
          "IT",
          "US",
          "TR",
          "JP",
          "NZ",
          "FR"
      ]
  },
  {
      "alias": "cafes",
      "title": "Cafes",
      "parents": [
          "restaurants"
      ],
      "country_blacklist": [
          "MX",
          "ES",
          "FI",
          "AR"
      ]
  },
  {
      "alias": "cafeteria",
      "title": "Cafeteria",
      "parents": [
          "restaurants"
      ],
      "country_blacklist": [
          "IE",
          "CA",
          "BR",
          "SE",
          "NZ",
          "SG",
          "FR"
      ]
  },
  {
      "alias": "cajun",
      "title": "Cajun/Creole",
      "parents": [
          "restaurants"
      ],
      "country_blacklist": [
          "AU",
          "ES",
          "SG",
          "PT"
      ]
  },
  {
      "alias": "cakeshop",
      "title": "Patisserie/Cake Shop",
      "parents": [
          "food"
      ]
  },
  {
      "alias": "calabrian",
      "title": "Calabrian",
      "parents": [
          "italian"
      ],
      "country_whitelist": [
          "IT",
          "US",
          "FR"
      ]
  },
  {
      "alias": "calligraphy",
      "title": "Calligraphy",
      "parents": [
          "localservices"
      ],
      "country_whitelist": [
          "IT",
          "US",
          "BR",
          "NL",
          "ES",
          "TR",
          "BE"
      ]
  },
  {
      "alias": "cambodian",
      "title": "Cambodian",
      "parents": [
          "restaurants"
      ],
      "country_blacklist": [
          "ES",
          "TR",
          "DK",
          "PT",
          "CZ",
          "FI"
      ]
  },
  {
      "alias": "campgrounds",
      "title": "Campgrounds",
      "parents": [
          "hotelstravel"
      ]
  },
  {
      "alias": "candlestores",
      "title": "Candle Stores",
      "parents": [
          "homeandgarden"
      ]
  },
  {
      "alias": "candy",
      "title": "Candy Stores",
      "parents": [
          "gourmet"
      ]
  },
  {
      "alias": "cannabis_clinics",
      "title": "Cannabis Clinics",
      "parents": [
          "health"
      ],
      "country_whitelist": [
          "CA",
          "NL",
          "PL",
          "IE",
          "IT",
          "US",
          "GB",
          "TR"
      ]
  },
  {
      "alias": "cannabiscollective",
      "title": "Cannabis Collective",
      "parents": [
          "health"
      ],
      "country_whitelist": [
          "US",
          "CA"
      ]
  },
  {
      "alias": "cannabisdispensaries",
      "title": "Cannabis Dispensaries",
      "parents": [
          "shopping"
      ],
      "country_whitelist": [
          "US",
          "CA"
      ]
  },
  {
      "alias": "cannabisreferrals",
      "title": "Medical Cannabis Referrals",
      "parents": [
          "health"
      ],
      "country_whitelist": [
          "US",
          "CA"
      ]
  },
  {
      "alias": "cannabistours",
      "title": "Cannabis Tours",
      "parents": [
          "cannabis_clinics"
      ],
      "country_whitelist": [
          "US",
          "CA"
      ]
  },
  {
      "alias": "canteen",
      "title": "Canteen",
      "parents": [
          "restaurants"
      ],
      "country_whitelist": [
          "NL",
          "BE",
          "AT",
          "CH",
          "CZ",
          "PL",
          "NO",
          "DE",
          "IT",
          "JP",
          "DK",
          "FI"
      ]
  },
  {
      "alias": "cantonese",
      "title": "Cantonese",
      "parents": [
          "chinese"
      ],
      "country_whitelist": [
          "BE",
          "HK",
          "AR",
          "IT",
          "US",
          "TW",
          "NZ",
          "MY",
          "CA",
          "NL",
          "SE",
          "GB",
          "JP",
          "AU",
          "SG",
          "FR"
      ]
  },
  {
      "alias": "canyoneering",
      "title": "Canyoneering",
      "parents": [
          "active"
      ]
  },
  {
      "alias": "car_dealers",
      "title": "Car Dealers",
      "parents": [
          "auto"
      ]
  },
  {
      "alias": "carauctions",
      "title": "Car Auctions",
      "parents": [
          "auto"
      ],
      "country_whitelist": [
          "PH",
          "US",
          "TW",
          "HK",
          "MY",
          "SG"
      ]
  },
  {
      "alias": "carbrokers",
      "title": "Car Brokers",
      "parents": [
          "auto"
      ],
      "country_whitelist": [
          "AU",
          "US",
          "NZ",
          "AR"
      ]
  },
  {
      "alias": "carbuyers",
      "title": "Car Buyers",
      "parents": [
          "auto"
      ],
      "country_whitelist": [
          "BR",
          "BE",
          "AT",
          "IE",
          "DE",
          "PH",
          "US",
          "NZ",
          "DK",
          "MY",
          "CA",
          "NL",
          "CH",
          "CZ",
          "NO",
          "PL",
          "GB",
          "AU",
          "SG"
      ]
  },
  {
      "alias": "cardioclasses",
      "title": "Cardio Classes",
      "parents": [
          "fitness"
      ]
  },
  {
      "alias": "cardiology",
      "title": "Cardiologists",
      "parents": [
          "physicians"
      ]
  },
  {
      "alias": "careercounseling",
      "title": "Career Counseling",
      "parents": [
          "professional"
      ]
  },
  {
      "alias": "caribbean",
      "title": "Caribbean",
      "parents": [
          "restaurants"
      ],
      "country_blacklist": [
          "TR",
          "PT",
          "FI"
      ]
  },
  {
      "alias": "caricatures",
      "title": "Caricatures",
      "parents": [
          "eventservices"
      ],
      "country_whitelist": [
          "BR",
          "SE",
          "PL",
          "NO",
          "IT",
          "US",
          "ES",
          "DK",
          "SG"
      ]
  },
  {
      "alias": "carousels",
      "title": "Carousels",
      "parents": [
          "active"
      ]
  },
  {
      "alias": "carpenters",
      "title": "Carpenters",
      "parents": [
          "homeservices"
      ],
      "country_blacklist": [
          "TR"
      ]
  },
  {
      "alias": "carpet_cleaning",
      "title": "Carpet Cleaning",
      "parents": [
          "localservices"
      ]
  },
  {
      "alias": "carpetdyeing",
      "title": "Carpet Dyeing",
      "parents": [
          "localservices"
      ],
      "country_whitelist": [
          "CA",
          "PL",
          "PH",
          "IE",
          "US",
          "GB",
          "AU",
          "NZ",
          "MY",
          "SG"
      ]
  },
  {
      "alias": "carpeting",
      "title": "Carpeting",
      "parents": [
          "homeservices"
      ]
  },
  {
      "alias": "carpetinstallation",
      "title": "Carpet Installation",
      "parents": [
          "homeservices"
      ]
  },
  {
      "alias": "carrental",
      "title": "Car Rental",
      "parents": [
          "hotelstravel"
      ]
  },
  {
      "alias": "carshares",
      "title": "Car Share Services",
      "parents": [
          "auto"
      ],
      "country_blacklist": [
          "BR",
          "NL",
          "BE",
          "HK",
          "PT",
          "TW",
          "TR",
          "JP",
          "SG",
          "FI"
      ]
  },
  {
      "alias": "carwash",
      "title": "Car Wash",
      "parents": [
          "auto"
      ]
  },
  {
      "alias": "carwindowtinting",
      "title": "Car Window Tinting",
      "parents": [
          "autoglass"
      ],
      "country_whitelist": [
          "CA",
          "NL",
          "BE",
          "IE",
          "IT",
          "US",
          "GB",
          "ES",
          "AU",
          "NZ",
          "SG"
      ]
  },
  {
      "alias": "casinos",
      "title": "Casinos",
      "parents": [
          "arts"
      ],
      "country_blacklist": [
          "HK",
          "JP"
      ]
  },
  {
      "alias": "castles",
      "title": "Castles",
      "parents": [
          "arts"
      ],
      "country_whitelist": [
          "BE",
          "AT",
          "SE",
          "CH",
          "PT",
          "CZ",
          "NO",
          "DE",
          "IT",
          "GB",
          "ES",
          "JP",
          "FI",
          "DK",
          "FR"
      ]
  },
  {
      "alias": "catalan",
      "title": "Catalan",
      "parents": [
          "restaurants"
      ],
      "country_whitelist": [
          "PT",
          "AR",
          "CL",
          "IT",
          "US",
          "ES",
          "TR",
          "MX",
          "FR"
      ]
  },
  {
      "alias": "catering",
      "title": "Caterers",
      "parents": [
          "eventservices"
      ]
  },
  {
      "alias": "cellphoneaccessories",
      "title": "Mobile Phone Accessories",
      "parents": [
          "shopping"
      ],
      "country_blacklist": [
          "PH",
          "TR",
          "MY",
          "PL",
          "FI"
      ]
  },
  {
      "alias": "centralbrazilian",
      "title": "Central Brazilian",
      "parents": [
          "brazilian"
      ],
      "country_whitelist": [
          "BR"
      ]
  },
  {
      "alias": "ceremonialclothing",
      "title": "Ceremonial Clothing",
      "parents": [
          "fashion"
      ],
      "country_blacklist": [
          "DE",
          "JP",
          "AT",
          "CH",
          "FR"
      ]
  },
  {
      "alias": "challengecourses",
      "title": "Challenge Courses",
      "parents": [
          "active"
      ],
      "country_whitelist": [
          "CA",
          "AT",
          "HK",
          "SE",
          "CH",
          "CZ",
          "PL",
          "NO",
          "DE",
          "US",
          "DK",
          "NZ",
          "SG",
          "FR"
      ]
  },
  {
      "alias": "champagne_bars",
      "title": "Champagne Bars",
      "parents": [
          "bars"
      ],
      "country_blacklist": [
          "AU"
      ]
  },
  {
      "alias": "cheekufta",
      "title": "Chee Kufta",
      "parents": [
          "turkish"
      ],
      "country_whitelist": [
          "DE",
          "TR"
      ]
  },
  {
      "alias": "cheerleading",
      "title": "Cheerleading",
      "parents": [
          "specialtyschools"
      ],
      "country_whitelist": [
          "DE",
          "US",
          "CA",
          "AT",
          "SE",
          "CH"
      ]
  },
  {
      "alias": "cheese",
      "title": "Cheese Shops",
      "parents": [
          "gourmet"
      ]
  },
  {
      "alias": "cheesesteaks",
      "title": "Cheesesteaks",
      "parents": [
          "restaurants"
      ],
      "country_whitelist": [
          "IE",
          "US",
          "CA",
          "GB",
          "NL",
          "AU",
          "PL"
      ]
  },
  {
      "alias": "cheesetastingclasses",
      "title": "Cheese Tasting Classes",
      "parents": [
          "tastingclasses"
      ]
  },
  {
      "alias": "chicken_wings",
      "title": "Chicken Wings",
      "parents": [
          "restaurants"
      ],
      "country_blacklist": [
          "NL",
          "BE",
          "CH",
          "PT",
          "NO",
          "CL",
          "IT",
          "ES",
          "JP",
          "FI",
          "DK",
          "FR"
      ]
  },
  {
      "alias": "chickenshop",
      "title": "Chicken Shop",
      "parents": [
          "restaurants"
      ],
      "country_blacklist": [
          "CZ"
      ]
  },
  {
      "alias": "childbirthedu",
      "title": "Childbirth Education",
      "parents": [
          "specialtyschools"
      ],
      "country_whitelist": [
          "BR",
          "BE",
          "AT",
          "IE",
          "IT",
          "DE",
          "US",
          "PH",
          "DK",
          "NZ",
          "MY",
          "CA",
          "NL",
          "SE",
          "CH",
          "NO",
          "PL",
          "GB",
          "ES",
          "AU",
          "SG",
          "FR"
      ]
  },
  {
      "alias": "childcare",
      "title": "Child Care & Day Care",
      "parents": [
          "localservices"
      ]
  },
  {
      "alias": "childcloth",
      "title": "Children's Clothing",
      "parents": [
          "fashion"
      ]
  },
  {
      "alias": "childproofing",
      "title": "Childproofing",
      "parents": [
          "homeservices"
      ],
      "country_whitelist": [
          "US",
          "BR",
          "PT"
      ]
  },
  {
      "alias": "childrensmuseums",
      "title": "Children's Museums",
      "parents": [
          "museums"
      ],
      "country_blacklist": [
          "FR"
      ]
  },
  {
      "alias": "chilean",
      "title": "Chilean",
      "parents": [
          "restaurants"
      ],
      "country_whitelist": [
          "CL",
          "BR",
          "FR",
          "FI"
      ]
  },
  {
      "alias": "chimneycakes",
      "title": "Chimney Cakes",
      "parents": [
          "food"
      ],
      "country_whitelist": [
          "US",
          "CZ",
          "PL",
          "FR"
      ]
  },
  {
      "alias": "chimneysweeps",
      "title": "Chimney Sweeps",
      "parents": [
          "homeservices"
      ],
      "country_blacklist": [
          "MX"
      ]
  },
  {
      "alias": "chinese",
      "title": "Chinese",
      "parents": [
          "restaurants"
      ]
  },
  {
      "alias": "chinesebazaar",
      "title": "Chinese Bazaar",
      "parents": [
          "shopping"
      ],
      "country_whitelist": [
          "ES",
          "PT"
      ]
  },
  {
      "alias": "chinesemartialarts",
      "title": "Chinese Martial Arts",
      "parents": [
          "martialarts"
      ]
  },
  {
      "alias": "chiropractors",
      "title": "Chiropractors",
      "parents": [
          "health"
      ]
  },
  {
      "alias": "chocolate",
      "title": "Chocolatiers & Shops",
      "parents": [
          "gourmet"
      ]
  },
  {
      "alias": "choirs",
      "title": "Choirs",
      "parents": [
          "arts"
      ],
      "country_blacklist": [
          "CA",
          "BR",
          "NL",
          "BE",
          "CZ",
          "PL",
          "US",
          "NZ",
          "SG"
      ]
  },
  {
      "alias": "christmastrees",
      "title": "Christmas Trees",
      "parents": [
          "homeandgarden"
      ]
  },
  {
      "alias": "churches",
      "title": "Churches",
      "parents": [
          "religiousorgs"
      ]
  },
  {
      "alias": "churros",
      "title": "Churros",
      "parents": [
          "food"
      ],
      "country_whitelist": [
          "CL",
          "BR",
          "ES",
          "PT",
          "MX",
          "AR"
      ]
  },
  {
      "alias": "cideries",
      "title": "Cideries",
      "parents": [
          "food"
      ],
      "country_blacklist": [
          "NL",
          "BE",
          "NO",
          "IT",
          "TR",
          "JP",
          "DK",
          "FR"
      ]
  },
  {
      "alias": "cigarbars",
      "title": "Cigar Bars",
      "parents": [
          "bars"
      ],
      "country_whitelist": [
          "US"
      ]
  },
  {
      "alias": "circuittraininggyms",
      "title": "Circuit Training Gyms",
      "parents": [
          "gyms"
      ],
      "country_whitelist": [
          "US"
      ]
  },
  {
      "alias": "circusschools",
      "title": "Circus Schools",
      "parents": [
          "specialtyschools"
      ],
      "country_whitelist": [
          "BR",
          "PT",
          "AR",
          "CL",
          "ES",
          "FI",
          "MX",
          "FR"
      ]
  },
  {
      "alias": "civiccenter",
      "title": "Civic Center",
      "parents": [
          "publicservicesgovt"
      ],
      "country_whitelist": [
          "US"
      ]
  },
  {
      "alias": "climbing",
      "title": "Climbing",
      "parents": [
          "active"
      ]
  },
  {
      "alias": "clockrepair",
      "title": "Clock Repair",
      "parents": [
          "localservices"
      ],
      "country_blacklist": [
          "CL",
          "IT",
          "JP",
          "MX",
          "AR"
      ]
  },
  {
      "alias": "clothingrental",
      "title": "Clothing Rental",
      "parents": [
          "fashion"
      ]
  },
  {
      "alias": "clowns",
      "title": "Clowns",
      "parents": [
          "eventservices"
      ],
      "country_blacklist": [
          "TR",
          "SE",
          "CZ",
          "SG",
          "PL",
          "FI"
      ]
  },
  {
      "alias": "clubcrawl",
      "title": "Club Crawl",
      "parents": [
          "nightlife"
      ],
      "country_whitelist": [
          "US"
      ]
  },
  {
      "alias": "cocktailbars",
      "title": "Cocktail Bars",
      "parents": [
          "bars"
      ]
  },
  {
      "alias": "coffee",
      "title": "Coffee & Tea",
      "parents": [
          "food"
      ]
  },
  {
      "alias": "coffeeroasteries",
      "title": "Coffee Roasteries",
      "parents": [
          "food"
      ]
  },
  {
      "alias": "coffeeshops",
      "title": "Coffeeshops",
      "parents": [
          "nightlife"
      ],
      "country_whitelist": [
          "NL",
          "PT"
      ]
  },
  {
      "alias": "coffeeteasupplies",
      "title": "Coffee & Tea Supplies",
      "parents": [
          "food"
      ],
      "country_blacklist": [
          "BR",
          "PT",
          "AR",
          "CZ",
          "CL",
          "IT",
          "PH",
          "US",
          "ES",
          "MX",
          "MY",
          "FI"
      ]
  },
  {
      "alias": "collegecounseling",
      "title": "College Counseling",
      "parents": [
          "education"
      ],
      "country_whitelist": [
          "US",
          "PT"
      ]
  },
  {
      "alias": "collegeuniv",
      "title": "Colleges & Universities",
      "parents": [
          "education"
      ]
  },
  {
      "alias": "colombian",
      "title": "Colombian",
      "parents": [
          "latin"
      ],
      "country_whitelist": [
          "CA",
          "BE",
          "AR",
          "CL",
          "US",
          "ES",
          "FI",
          "MX",
          "FR"
      ]
  },
  {
      "alias": "colonics",
      "title": "Colonics",
      "parents": [
          "health"
      ],
      "country_whitelist": [
          "CA",
          "NO",
          "IE",
          "US",
          "GB",
          "AU",
          "DK",
          "NZ",
          "SG"
      ]
  },
  {
      "alias": "comedyclubs",
      "title": "Comedy Clubs",
      "parents": [
          "nightlife"
      ],
      "country_blacklist": [
          "CZ"
      ]
  },
  {
      "alias": "comfortfood",
      "title": "Comfort Food",
      "parents": [
          "restaurants"
      ],
      "country_whitelist": [
          "CL",
          "US",
          "CA",
          "JP",
          "MX",
          "AR",
          "FI"
      ]
  },
  {
      "alias": "comicbooks",
      "title": "Comic Books",
      "parents": [
          "media"
      ]
  },
  {
      "alias": "commercialrealestate",
      "title": "Commercial Real Estate",
      "parents": [
          "realestate"
      ],
      "country_whitelist": [
          "CA",
          "BR",
          "NL",
          "BE",
          "PT",
          "CZ",
          "PL",
          "NO",
          "DE",
          "US",
          "AU",
          "DK"
      ]
  },
  {
      "alias": "commissionedartists",
      "title": "Commissioned Artists",
      "parents": [
          "professional"
      ],
      "country_blacklist": [
          "FR"
      ]
  },
  {
      "alias": "communitybookbox",
      "title": "Community Book Box",
      "parents": [
          "localservices"
      ],
      "country_blacklist": [
          "AR",
          "CL",
          "IT",
          "PH",
          "ES",
          "JP",
          "MX",
          "MY",
          "FR"
      ]
  },
  {
      "alias": "communitycenters",
      "title": "Community Centers",
      "parents": [
          "publicservicesgovt"
      ],
      "country_whitelist": [
          "CA",
          "BR",
          "SE",
          "PT",
          "CZ",
          "NO",
          "IE",
          "US",
          "GB",
          "DK"
      ]
  },
  {
      "alias": "communitygardens",
      "title": "Community Gardens",
      "parents": [
          "localservices"
      ],
      "country_whitelist": [
          "BR",
          "PT",
          "DE",
          "IE",
          "IT",
          "US",
          "DK",
          "NZ",
          "CA",
          "SE",
          "NO",
          "GB",
          "ES",
          "AU",
          "SG",
          "FR"
      ]
  },
  {
      "alias": "computers",
      "title": "Computers",
      "parents": [
          "shopping"
      ]
  },
  {
      "alias": "concept_shops",
      "title": "Concept Shops",
      "parents": [
          "shopping"
      ],
      "country_blacklist": [
          "CA",
          "BR",
          "HK",
          "SE",
          "AR",
          "PL",
          "CL",
          "IT",
          "US",
          "ES",
          "TR",
          "JP",
          "NZ",
          "SG"
      ]
  },
  {
      "alias": "conciergemedicine",
      "title": "Concierge Medicine",
      "parents": [
          "health"
      ],
      "country_whitelist": [
          "US"
      ]
  },
  {
      "alias": "condominiums",
      "title": "Condominiums",
      "parents": [
          "realestate"
      ],
      "country_blacklist": [
          "AU",
          "NZ"
      ]
  },
  {
      "alias": "congee",
      "title": "Congee",
      "parents": [
          "chinese"
      ],
      "country_whitelist": [
          "HK",
          "MY",
          "SG",
          "TW"
      ]
  },
  {
      "alias": "consumerlaw",
      "title": "Consumer Law",
      "parents": [
          "lawyers"
      ],
      "country_blacklist": [
          "HK",
          "SE",
          "CZ",
          "NO",
          "TW",
          "ES",
          "TR",
          "JP",
          "DK",
          "FI"
      ]
  },
  {
      "alias": "contractlaw",
      "title": "Contract Law",
      "parents": [
          "lawyers"
      ],
      "country_blacklist": [
          "FR"
      ]
  },
  {
      "alias": "contractors",
      "title": "Contractors",
      "parents": [
          "homeservices"
      ]
  },
  {
      "alias": "convenience",
      "title": "Convenience Stores",
      "parents": [
          "food"
      ],
      "country_blacklist": [
          "FI"
      ]
  },
  {
      "alias": "conveyorsushi",
      "title": "Conveyor Belt Sushi",
      "parents": [
          "japanese"
      ],
      "country_whitelist": [
          "NL",
          "BE",
          "AT",
          "HK",
          "SE",
          "CH",
          "PL",
          "DE",
          "IT",
          "US",
          "TW",
          "JP",
          "SG"
      ]
  },
  {
      "alias": "cookingclasses",
      "title": "Cooking Classes",
      "parents": [
          "artsandcrafts"
      ]
  },
  {
      "alias": "cookingschools",
      "title": "Cooking Schools",
      "parents": [
          "specialtyschools"
      ]
  },
  {
      "alias": "copyshops",
      "title": "Printing Services",
      "parents": [
          "localservices"
      ]
  },
  {
      "alias": "corsican",
      "title": "Corsican",
      "parents": [
          "restaurants"
      ],
      "country_whitelist": [
          "FR",
          "BE"
      ]
  },
  {
      "alias": "cosmeticdentists",
      "title": "Cosmetic Dentists",
      "parents": [
          "dentists"
      ],
      "country_blacklist": [
          "CZ"
      ]
  },
  {
      "alias": "cosmetics",
      "title": "Cosmetics & Beauty Supply",
      "parents": [
          "beautysvc",
          "shopping"
      ]
  },
  {
      "alias": "cosmeticsurgeons",
      "title": "Cosmetic Surgeons",
      "parents": [
          "physicians"
      ]
  },
  {
      "alias": "cosmetology_schools",
      "title": "Cosmetology Schools",
      "parents": [
          "specialtyschools"
      ]
  },
  {
      "alias": "costumes",
      "title": "Costumes",
      "parents": [
          "artsandcrafts"
      ]
  },
  {
      "alias": "countertopinstall",
      "title": "Countertop Installation",
      "parents": [
          "homeservices"
      ],
      "country_blacklist": [
          "DE",
          "IT",
          "AT",
          "CH",
          "CZ",
          "FR"
      ]
  },
  {
      "alias": "countryclubs",
      "title": "Country Clubs",
      "parents": [
          "arts"
      ],
      "country_whitelist": [
          "BR",
          "HK",
          "AR",
          "CL",
          "IT",
          "US",
          "TW",
          "ES",
          "JP",
          "MX",
          "SG"
      ]
  },
  {
      "alias": "countrydancehalls",
      "title": "Country Dance Halls",
      "parents": [
          "nightlife"
      ],
      "country_whitelist": [
          "SE",
          "US"
      ]
  },
  {
      "alias": "couriers",
      "title": "Couriers & Delivery Services",
      "parents": [
          "localservices"
      ]
  },
  {
      "alias": "courthouses",
      "title": "Courthouses",
      "parents": [
          "publicservicesgovt"
      ],
      "country_blacklist": [
          "HK",
          "AR",
          "CL",
          "IE",
          "PH",
          "TW",
          "TR",
          "MX",
          "NZ",
          "MY",
          "FI",
          "CA",
          "GB",
          "ES",
          "JP",
          "SG"
      ]
  },
  {
      "alias": "courtreporters",
      "title": "Court Reporters",
      "parents": [
          "legalservices"
      ],
      "country_whitelist": [
          "NL",
          "US",
          "CA",
          "BE"
      ]
  },
  {
      "alias": "cprclasses",
      "title": "CPR Classes",
      "parents": [
          "specialtyschools"
      ],
      "country_whitelist": [
          "AU",
          "SE",
          "US",
          "PT"
      ]
  },
  {
      "alias": "craneservices",
      "title": "Crane Services",
      "parents": [
          "localservices"
      ],
      "country_blacklist": [
          "FR",
          "HK",
          "PH",
          "TW",
          "TR",
          "JP",
          "MY",
          "FI"
      ]
  },
  {
      "alias": "cremationservices",
      "title": "Cremation Services",
      "parents": [
          "funeralservices"
      ],
      "country_blacklist": [
          "TR"
      ]
  },
  {
      "alias": "creperies",
      "title": "Creperies",
      "parents": [
          "restaurants"
      ]
  },
  {
      "alias": "criminaldefense",
      "title": "Criminal Defense Law",
      "parents": [
          "lawyers"
      ]
  },
  {
      "alias": "crisispregnancycenters",
      "title": "Crisis Pregnancy Centers",
      "parents": [
          "health"
      ],
      "country_whitelist": [
          "US"
      ]
  },
  {
      "alias": "cryotherapy",
      "title": "Cryotherapy",
      "parents": [
          "health"
      ],
      "country_whitelist": [
          "IT",
          "US"
      ]
  },
  {
      "alias": "csa",
      "title": "CSA",
      "parents": [
          "food"
      ],
      "country_whitelist": [
          "DE",
          "US",
          "AT",
          "CH",
          "FR"
      ]
  },
  {
      "alias": "cuban",
      "title": "Cuban",
      "parents": [
          "restaurants"
      ],
      "country_blacklist": [
          "SG",
          "TR",
          "DK"
      ]
  },
  {
      "alias": "cucinacampana",
      "title": "Cucina campana",
      "parents": [
          "italian"
      ],
      "country_whitelist": [
          "IT"
      ]
  },
  {
      "alias": "culturalcenter",
      "title": "Cultural Center",
      "parents": [
          "arts"
      ],
      "country_blacklist": [
          "IE",
          "TR",
          "CA",
          "NZ"
      ]
  },
  {
      "alias": "cupcakes",
      "title": "Cupcakes",
      "parents": [
          "food"
      ],
      "country_blacklist": [
          "ES",
          "TR",
          "CZ",
          "CA"
      ]
  },
  {
      "alias": "currencyexchange",
      "title": "Currency Exchange",
      "parents": [
          "financialservices"
      ]
  },
  {
      "alias": "currysausage",
      "title": "Curry Sausage",
      "parents": [
          "restaurants"
      ],
      "country_whitelist": [
          "DE",
          "AT",
          "CH"
      ]
  },
  {
      "alias": "customcakes",
      "title": "Custom Cakes",
      "parents": [
          "food"
      ],
      "country_blacklist": [
          "DE",
          "AT",
          "CH",
          "FR"
      ]
  },
  {
      "alias": "custommerchandise",
      "title": "Customized Merchandise",
      "parents": [
          "shopping"
      ]
  },
  {
      "alias": "customsbrokers",
      "title": "Customs Brokers",
      "parents": [
          "professional"
      ]
  },
  {
      "alias": "cyclingclasses",
      "title": "Cycling Classes",
      "parents": [
          "active"
      ],
      "country_blacklist": [
          "IE",
          "CA",
          "BR",
          "PT",
          "MX",
          "NZ",
          "AR"
      ]
  },
  {
      "alias": "cypriot",
      "title": "Cypriot",
      "parents": [
          "restaurants"
      ],
      "country_whitelist": [
          "DE",
          "AT",
          "CH"
      ]
  },
  {
      "alias": "czech",
      "title": "Czech",
      "parents": [
          "restaurants"
      ],
      "country_whitelist": [
          "CA",
          "BE",
          "SE",
          "CZ",
          "PL",
          "NO",
          "DE",
          "IE",
          "IT",
          "US",
          "GB",
          "AU",
          "FI",
          "DK",
          "FR"
      ]
  },
  {
      "alias": "czechslovakian",
      "title": "Czech/Slovakian",
      "parents": [
          "restaurants"
      ],
      "country_whitelist": [
          "PT",
          "MX",
          "AR"
      ]
  },
  {
      "alias": "dagashi",
      "title": "Dagashi",
      "parents": [
          "gourmet"
      ],
      "country_whitelist": [
          "JP"
      ]
  },
  {
      "alias": "damagerestoration",
      "title": "Damage Restoration",
      "parents": [
          "homeservices"
      ],
      "country_whitelist": [
          "US",
          "CA",
          "TR",
          "AU",
          "NZ",
          "PT",
          "SG"
      ]
  },
  {
      "alias": "dance_schools",
      "title": "Dance Schools",
      "parents": [
          "specialtyschools"
      ]
  },
  {
      "alias": "danceclubs",
      "title": "Dance Clubs",
      "parents": [
          "nightlife"
      ]
  },
  {
      "alias": "dancerestaurants",
      "title": "Dance Restaurants",
      "parents": [
          "nightlife"
      ],
      "country_whitelist": [
          "FI"
      ]
  },
  {
      "alias": "dancestudio",
      "title": "Dance Studios",
      "parents": [
          "fitness"
      ]
  },
  {
      "alias": "dancewear",
      "title": "Dance Wear",
      "parents": [
          "sportswear"
      ]
  },
  {
      "alias": "danish",
      "title": "Danish",
      "parents": [
          "restaurants"
      ],
      "country_whitelist": [
          "SE",
          "DK",
          "NO",
          "FR"
      ]
  },
  {
      "alias": "dartarenas",
      "title": "Dart Arenas",
      "parents": [
          "active"
      ],
      "country_whitelist": [
          "DE",
          "US",
          "AT",
          "CH",
          "PL"
      ]
  },
  {
      "alias": "datarecovery",
      "title": "Data Recovery",
      "parents": [
          "itservices"
      ],
      "country_blacklist": [
          "PH",
          "TW",
          "NL",
          "JP",
          "HK",
          "MY",
          "FI"
      ]
  },
  {
      "alias": "daycamps",
      "title": "Day Camps",
      "parents": [
          "active"
      ],
      "country_blacklist": [
          "CL",
          "JP",
          "HK",
          "MX",
          "AR"
      ]
  },
  {
      "alias": "debtrelief",
      "title": "Debt Relief Services",
      "parents": [
          "financialservices"
      ],
      "country_whitelist": [
          "US",
          "CA"
      ]
  },
  {
      "alias": "decksrailing",
      "title": "Decks & Railing",
      "parents": [
          "homeservices"
      ]
  },
  {
      "alias": "delicatessen",
      "title": "Delicatessen",
      "parents": [
          "food"
      ],
      "country_blacklist": [
          "US"
      ]
  },
  {
      "alias": "delis",
      "title": "Delis",
      "parents": [
          "restaurants"
      ],
      "country_blacklist": [
          "CL",
          "IT",
          "NL",
          "BE",
          "SE",
          "PT",
          "FR"
      ]
  },
  {
      "alias": "demolitionservices",
      "title": "Demolition Services",
      "parents": [
          "homeservices"
      ],
      "country_whitelist": [
          "BR",
          "NL",
          "BE",
          "AT",
          "CH",
          "PT",
          "CZ",
          "PL",
          "NO",
          "DE",
          "IT",
          "US",
          "ES",
          "AU",
          "DK"
      ]
  },
  {
      "alias": "dentalhygeiniststorefront",
      "title": "Storefront Clinics",
      "parents": [
          "dentalhygienists"
      ],
      "country_whitelist": [
          "CA"
      ]
  },
  {
      "alias": "dentalhygienists",
      "title": "Dental Hygienists",
      "parents": [
          "health"
      ],
      "country_whitelist": [
          "DE",
          "US",
          "CA",
          "NL",
          "DK",
          "PT",
          "NO"
      ]
  },
  {
      "alias": "dentalhygienistsmobile",
      "title": "Mobile Clinics",
      "parents": [
          "dentalhygienists"
      ],
      "country_whitelist": [
          "CA"
      ]
  },
  {
      "alias": "dentists",
      "title": "Dentists",
      "parents": [
          "health"
      ]
  },
  {
      "alias": "departmentsofmotorvehicles",
      "title": "Departments of Motor Vehicles",
      "parents": [
          "publicservicesgovt"
      ],
      "country_blacklist": [
          "FR",
          "BE"
      ]
  },
  {
      "alias": "deptstores",
      "title": "Department Stores",
      "parents": [
          "fashion",
          "shopping"
      ]
  },
  {
      "alias": "dermatology",
      "title": "Dermatologists",
      "parents": [
          "physicians"
      ]
  },
  {
      "alias": "desserts",
      "title": "Desserts",
      "parents": [
          "food"
      ]
  },
  {
      "alias": "diagnosticimaging",
      "title": "Diagnostic Imaging",
      "parents": [
          "diagnosticservices"
      ],
      "country_whitelist": [
          "CA",
          "BR",
          "PT",
          "AR",
          "CL",
          "IE",
          "US",
          "GB",
          "ES",
          "AU",
          "MX",
          "FR"
      ]
  },
  {
      "alias": "diagnosticservices",
      "title": "Diagnostic Services",
      "parents": [
          "health"
      ]
  },
  {
      "alias": "dialysisclinics",
      "title": "Dialysis Clinics",
      "parents": [
          "health"
      ],
      "country_whitelist": [
          "BR",
          "PT",
          "AR",
          "CL",
          "IT",
          "US",
          "ES",
          "TR",
          "MX"
      ]
  },
  {
      "alias": "diamondbuyers",
      "title": "Diamond Buyers",
      "parents": [
          "shopping"
      ]
  },
  {
      "alias": "dietitians",
      "title": "Dietitians",
      "parents": [
          "health"
      ]
  },
  {
      "alias": "digitizingservices",
      "title": "Digitizing Services",
      "parents": [
          "professional"
      ],
      "country_whitelist": [
          "US",
          "DK",
          "BR",
          "NO"
      ]
  },
  {
      "alias": "dimsum",
      "title": "Dim Sum",
      "parents": [
          "chinese"
      ],
      "country_blacklist": [
          "TR",
          "BR",
          "PT"
      ]
  },
  {
      "alias": "diners",
      "title": "Diners",
      "parents": [
          "restaurants"
      ],
      "country_blacklist": [
          "AU",
          "SE",
          "CZ",
          "FI"
      ]
  },
  {
      "alias": "dinnertheater",
      "title": "Dinner Theater",
      "parents": [
          "restaurants"
      ],
      "country_blacklist": [
          "IT",
          "NL",
          "JP",
          "BE",
          "FR"
      ]
  },
  {
      "alias": "disabilitylaw",
      "title": "Disability Law",
      "parents": [
          "lawyers"
      ]
  },
  {
      "alias": "discgolf",
      "title": "Disc Golf",
      "parents": [
          "active"
      ],
      "country_blacklist": [
          "AU",
          "SG",
          "DK"
      ]
  },
  {
      "alias": "discountstore",
      "title": "Discount Store",
      "parents": [
          "shopping"
      ]
  },
  {
      "alias": "distilleries",
      "title": "Distilleries",
      "parents": [
          "food"
      ]
  },
  {
      "alias": "divebars",
      "title": "Dive Bars",
      "parents": [
          "bars"
      ],
      "country_blacklist": [
          "IT",
          "NL",
          "BE",
          "AU",
          "CZ",
          "FR"
      ]
  },
  {
      "alias": "diveshops",
      "title": "Dive Shops",
      "parents": [
          "sportgoods"
      ],
      "country_whitelist": [
          "BR",
          "AT",
          "CH",
          "AR",
          "CL",
          "DE",
          "IT",
          "US",
          "ES",
          "JP",
          "AU",
          "MX",
          "NZ"
      ]
  },
  {
      "alias": "diving",
      "title": "Diving",
      "parents": [
          "active"
      ]
  },
  {
      "alias": "divorce",
      "title": "Divorce & Family Law",
      "parents": [
          "lawyers"
      ]
  },
  {
      "alias": "diyautoshop",
      "title": "DIY Auto Shop",
      "parents": [
          "autorepair"
      ],
      "country_whitelist": [
          "DE",
          "US",
          "AU",
          "AT",
          "CH",
          "PT"
      ]
  },
  {
      "alias": "diyfood",
      "title": "Do-It-Yourself Food",
      "parents": [
          "food"
      ],
      "country_blacklist": [
          "AT",
          "SE",
          "CH",
          "CZ",
          "CL",
          "DE",
          "IT",
          "ES",
          "FI",
          "MX",
          "NZ",
          "FR"
      ]
  },
  {
      "alias": "djs",
      "title": "DJs",
      "parents": [
          "eventservices"
      ]
  },
  {
      "alias": "dog_parks",
      "title": "Dog Parks",
      "parents": [
          "parks"
      ]
  },
  {
      "alias": "dogwalkers",
      "title": "Dog Walkers",
      "parents": [
          "petservices"
      ]
  },
  {
      "alias": "dolmusstation",
      "title": "Dolmus Station",
      "parents": [
          "transport"
      ],
      "country_whitelist": [
          "TR"
      ]
  },
  {
      "alias": "dominican",
      "title": "Dominican",
      "parents": [
          "caribbean"
      ],
      "country_whitelist": [
          "US"
      ]
  },
  {
      "alias": "donairs",
      "title": "Donairs",
      "parents": [
          "food"
      ],
      "country_whitelist": [
          "CA",
          "TR",
          "BE",
          "DK",
          "CZ",
          "PL",
          "FR"
      ]
  },
  {
      "alias": "donationcenter",
      "title": "Donation Center",
      "parents": [
          "localservices"
      ],
      "country_whitelist": [
          "BR",
          "NL",
          "BE",
          "AT",
          "CH",
          "NO",
          "DE",
          "US",
          "ES",
          "DK"
      ]
  },
  {
      "alias": "donburi",
      "title": "Donburi",
      "parents": [
          "japanese"
      ],
      "country_whitelist": [
          "HK",
          "JP",
          "TW"
      ]
  },
  {
      "alias": "donuts",
      "title": "Donuts",
      "parents": [
          "food"
      ],
      "country_blacklist": [
          "ES"
      ]
  },
  {
      "alias": "doorsales",
      "title": "Door Sales/Installation",
      "parents": [
          "homeservices"
      ],
      "country_blacklist": [
          "HK",
          "AR",
          "CL",
          "IE",
          "PH",
          "TW",
          "TR",
          "DK",
          "MX",
          "MY",
          "FI",
          "SE",
          "NO",
          "ES",
          "JP",
          "FR"
      ]
  },
  {
      "alias": "doulas",
      "title": "Doulas",
      "parents": [
          "health"
      ],
      "country_whitelist": [
          "IT",
          "US",
          "CA",
          "BE",
          "PT",
          "CZ",
          "FR"
      ]
  },
  {
      "alias": "dramaschools",
      "title": "Drama Schools",
      "parents": [
          "specialtyschools"
      ]
  },
  {
      "alias": "driedfruit",
      "title": "Dried Fruit",
      "parents": [
          "gourmet"
      ],
      "country_whitelist": [
          "BR",
          "HK",
          "SE",
          "AR",
          "CZ",
          "PL",
          "CL",
          "TW",
          "ES",
          "TR",
          "JP",
          "MX"
      ]
  },
  {
      "alias": "driveintheater",
      "title": "Drive-In Theater",
      "parents": [
          "movietheaters"
      ],
      "country_blacklist": [
          "CL",
          "MX",
          "AR",
          "PL",
          "FR"
      ]
  },
  {
      "alias": "drivethrubars",
      "title": "Drive-Thru Bars",
      "parents": [
          "bars"
      ],
      "country_whitelist": [
          "US"
      ]
  },
  {
      "alias": "driving_schools",
      "title": "Driving Schools",
      "parents": [
          "specialtyschools"
      ]
  },
  {
      "alias": "drones",
      "title": "Drones",
      "parents": [
          "shopping"
      ]
  },
  {
      "alias": "drugstores",
      "title": "Drugstores",
      "parents": [
          "shopping"
      ],
      "country_blacklist": [
          "SE",
          "AR",
          "NO",
          "CL",
          "TR",
          "DK",
          "MX",
          "FR"
      ]
  },
  {
      "alias": "dryclean",
      "title": "Dry Cleaning",
      "parents": [
          "laundryservices"
      ]
  },
  {
      "alias": "drywall",
      "title": "Drywall Installation & Repair",
      "parents": [
          "homeservices"
      ],
      "country_blacklist": [
          "HK",
          "JP"
      ]
  },
  {
      "alias": "duilawyers",
      "title": "DUI Law",
      "parents": [
          "lawyers"
      ],
      "country_whitelist": [
          "DE",
          "US",
          "CA"
      ]
  },
  {
      "alias": "duischools",
      "title": "DUI Schools",
      "parents": [
          "specialtyschools"
      ],
      "country_whitelist": [
          "US"
      ]
  },
  {
      "alias": "dumplings",
      "title": "Dumplings",
      "parents": [
          "restaurants"
      ],
      "country_whitelist": [
          "CA",
          "NL",
          "BE",
          "AT",
          "CH",
          "PL",
          "DE",
          "IE",
          "GB",
          "JP",
          "AU",
          "NZ",
          "SG"
      ]
  },
  {
      "alias": "dumpsterrental",
      "title": "Dumpster Rental",
      "parents": [
          "junkremovalandhauling"
      ],
      "country_whitelist": [
          "BE",
          "AT",
          "HK",
          "IE",
          "DE",
          "PH",
          "US",
          "DK",
          "NZ",
          "MY",
          "CA",
          "NL",
          "CH",
          "PL",
          "NO",
          "GB",
          "AU",
          "SG"
      ]
  },
  {
      "alias": "duplicationservices",
      "title": "Duplication Services",
      "parents": [
          "professional"
      ],
      "country_whitelist": [
          "US"
      ]
  },
  {
      "alias": "dutyfreeshops",
      "title": "Duty-Free Shops",
      "parents": [
          "shopping"
      ]
  },
  {
      "alias": "earnosethroat",
      "title": "Ear Nose & Throat",
      "parents": [
          "physicians"
      ]
  },
  {
      "alias": "eastern_european",
      "title": "Eastern European",
      "parents": [
          "restaurants"
      ],
      "country_whitelist": [
          "AU",
          "DK",
          "CZ",
          "NO",
          "FR"
      ]
  },
  {
      "alias": "easterngerman",
      "title": "Eastern German",
      "parents": [
          "german"
      ],
      "country_whitelist": [
          "DE"
      ]
  },
  {
      "alias": "easternmexican",
      "title": "Eastern Mexican",
      "parents": [
          "mexican"
      ],
      "country_whitelist": [
          "MX"
      ]
  },
  {
      "alias": "eatertainment",
      "title": "Eatertainment",
      "parents": [
          "arts"
      ],
      "country_whitelist": [
          "DE",
          "US",
          "BR",
          "NL",
          "BE",
          "AT",
          "CH"
      ]
  },
  {
      "alias": "editorialservices",
      "title": "Editorial Services",
      "parents": [
          "professional"
      ],
      "country_whitelist": [
          "BR",
          "BE",
          "AT",
          "PT",
          "AR",
          "DE",
          "CL",
          "IT",
          "US",
          "PH",
          "IE",
          "DK",
          "MX",
          "NZ",
          "MY",
          "CA",
          "NL",
          "CH",
          "NO",
          "PL",
          "GB",
          "ES",
          "AU",
          "SG",
          "FR"
      ]
  },
  {
      "alias": "education",
      "title": "Education",
      "parents": []
  },
  {
      "alias": "educationservices",
      "title": "Educational Services",
      "parents": [
          "education"
      ],
      "country_blacklist": [
          "BR"
      ]
  },
  {
      "alias": "egyptian",
      "title": "Egyptian",
      "parents": [
          "mideastern"
      ],
      "country_whitelist": [
          "IT",
          "US",
          "CA",
          "BE",
          "FR"
      ]
  },
  {
      "alias": "eldercareplanning",
      "title": "Elder Care Planning",
      "parents": [
          "localservices"
      ]
  },
  {
      "alias": "elderlaw",
      "title": "Elder Law",
      "parents": [
          "lawyers"
      ],
      "country_whitelist": [
          "BR",
          "AT",
          "CH",
          "PT",
          "PL",
          "DE",
          "US",
          "TR"
      ]
  },
  {
      "alias": "electricians",
      "title": "Electricians",
      "parents": [
          "homeservices"
      ]
  },
  {
      "alias": "electricitysuppliers",
      "title": "Electricity Suppliers",
      "parents": [
          "utilities"
      ]
  },
  {
      "alias": "electronics",
      "title": "Electronics",
      "parents": [
          "shopping"
      ]
  },
  {
      "alias": "electronicsrepair",
      "title": "Electronics Repair",
      "parents": [
          "localservices"
      ]
  },
  {
      "alias": "elementaryschools",
      "title": "Elementary Schools",
      "parents": [
          "education"
      ]
  },
  {
      "alias": "elevatorservices",
      "title": "Elevator Services",
      "parents": [
          "localservices"
      ],
      "country_blacklist": [
          "AR",
          "CZ",
          "CL",
          "PH",
          "JP",
          "FI",
          "MX",
          "MY",
          "FR"
      ]
  },
  {
      "alias": "eltern_cafes",
      "title": "Parent Cafes",
      "parents": [
          "food",
          "restaurants"
      ],
      "country_whitelist": [
          "DE",
          "AT",
          "CH"
      ]
  },
  {
      "alias": "embassy",
      "title": "Embassy",
      "parents": [
          "publicservicesgovt"
      ],
      "country_blacklist": [
          "TR"
      ]
  },
  {
      "alias": "embroideryandcrochet",
      "title": "Embroidery & Crochet",
      "parents": [
          "artsandcrafts"
      ]
  },
  {
      "alias": "emergencymedicine",
      "title": "Emergency Medicine",
      "parents": [
          "physicians"
      ]
  },
  {
      "alias": "emergencypethospital",
      "title": "Emergency Pet Hospital",
      "parents": [
          "petservices"
      ]
  },
  {
      "alias": "emergencyrooms",
      "title": "Emergency Rooms",
      "parents": [
          "health"
      ]
  },
  {
      "alias": "emilian",
      "title": "Emilian",
      "parents": [
          "italian"
      ],
      "country_whitelist": [
          "IT"
      ]
  },
  {
      "alias": "empanadas",
      "title": "Empanadas",
      "parents": [
          "food"
      ],
      "country_whitelist": [
          "CL",
          "ES",
          "US",
          "AR"
      ]
  },
  {
      "alias": "employmentagencies",
      "title": "Employment Agencies",
      "parents": [
          "professional"
      ]
  },
  {
      "alias": "employmentlawyers",
      "title": "Employment Law",
      "parents": [
          "lawyers"
      ]
  },
  {
      "alias": "emstraining",
      "title": "EMS Training",
      "parents": [
          "fitness"
      ],
      "country_whitelist": [
          "DE",
          "ES",
          "AT",
          "SE",
          "CH"
      ]
  },
  {
      "alias": "endocrinologists",
      "title": "Endocrinologists",
      "parents": [
          "physicians"
      ],
      "country_blacklist": [
          "CA",
          "HK",
          "SE",
          "PL",
          "IE",
          "TW",
          "GB",
          "JP",
          "AU",
          "NZ",
          "SG",
          "FI"
      ]
  },
  {
      "alias": "endodontists",
      "title": "Endodontists",
      "parents": [
          "dentists"
      ],
      "country_blacklist": [
          "CZ"
      ]
  },
  {
      "alias": "engraving",
      "title": "Engraving",
      "parents": [
          "localservices"
      ]
  },
  {
      "alias": "entertainmentlaw",
      "title": "Entertainment Law",
      "parents": [
          "lawyers"
      ],
      "country_whitelist": [
          "US"
      ]
  },
  {
      "alias": "enviroabatement",
      "title": "Environmental Abatement",
      "parents": [
          "localservices"
      ]
  },
  {
      "alias": "environmentaltesting",
      "title": "Environmental Testing",
      "parents": [
          "localservices"
      ],
      "country_whitelist": [
          "CA",
          "NL",
          "BE",
          "NO",
          "IE",
          "US",
          "GB",
          "AU",
          "DK",
          "NZ",
          "SG",
          "FI"
      ]
  },
  {
      "alias": "eritrean",
      "title": "Eritrean",
      "parents": [
          "restaurants"
      ],
      "country_whitelist": [
          "DE",
          "IT",
          "US",
          "AT",
          "CH"
      ]
  },
  {
      "alias": "eroticmassage",
      "title": "Erotic Massage",
      "parents": [
          "beautysvc"
      ],
      "country_blacklist": [
          "HK",
          "SE",
          "NO",
          "CL",
          "PH",
          "US",
          "TW",
          "TR",
          "JP",
          "DK",
          "MY",
          "FI"
      ]
  },
  {
      "alias": "escapegames",
      "title": "Escape Games",
      "parents": [
          "active"
      ]
  },
  {
      "alias": "estateliquidation",
      "title": "Estate Liquidation",
      "parents": [
          "realestate"
      ],
      "country_blacklist": [
          "CZ"
      ]
  },
  {
      "alias": "estatephotography",
      "title": "Real Estate Photography",
      "parents": [
          "realestatesvcs"
      ],
      "country_blacklist": [
          "IT",
          "JP"
      ]
  },
  {
      "alias": "estateplanning",
      "title": "Estate Planning Law",
      "parents": [
          "lawyers"
      ],
      "country_blacklist": [
          "SE",
          "NO"
      ]
  },
  {
      "alias": "estheticians",
      "title": "Estheticians",
      "parents": [
          "skincare"
      ]
  },
  {
      "alias": "ethicgrocery",
      "title": "Ethical Grocery",
      "parents": [
          "food"
      ],
      "country_blacklist": [
          "NL",
          "BE",
          "AT",
          "CH",
          "CZ",
          "DE",
          "PH",
          "US",
          "TR",
          "JP",
          "MY",
          "FR"
      ]
  },
  {
      "alias": "ethiopian",
      "title": "Ethiopian",
      "parents": [
          "restaurants"
      ],
      "country_blacklist": [
          "SG",
          "TR",
          "CZ",
          "MX"
      ]
  },
  {
      "alias": "evchargingstations",
      "title": "EV Charging Stations",
      "parents": [
          "auto"
      ]
  },
  {
      "alias": "eventphotography",
      "title": "Event Photography",
      "parents": [
          "photographers"
      ]
  },
  {
      "alias": "eventplanning",
      "title": "Party & Event Planning",
      "parents": [
          "eventservices"
      ]
  },
  {
      "alias": "eventservices",
      "title": "Event Planning & Services",
      "parents": []
  },
  {
      "alias": "excavationservices",
      "title": "Excavation Services",
      "parents": [
          "homeservices"
      ]
  },
  {
      "alias": "experiences",
      "title": "Experiences",
      "parents": [
          "active"
      ],
      "country_whitelist": [
          "DE",
          "SE",
          "DK",
          "PT",
          "CZ",
          "NO"
      ]
  },
  {
      "alias": "eyebrowservices",
      "title": "Eyebrow Services",
      "parents": [
          "beautysvc"
      ]
  },
  {
      "alias": "eyelashservice",
      "title": "Eyelash Service",
      "parents": [
          "beautysvc"
      ],
      "country_blacklist": [
          "IT"
      ]
  },
  {
      "alias": "fabricstores",
      "title": "Fabric Stores",
      "parents": [
          "artsandcrafts"
      ]
  },
  {
      "alias": "facepainting",
      "title": "Face Painting",
      "parents": [
          "eventservices"
      ],
      "country_blacklist": [
          "HK",
          "AR",
          "CL",
          "IT",
          "PH",
          "TW",
          "TR",
          "MX",
          "MY",
          "FI",
          "SE",
          "PL",
          "ES",
          "JP",
          "SG",
          "FR"
      ]
  },
  {
      "alias": "fado_houses",
      "title": "Fado Houses",
      "parents": [
          "portuguese"
      ],
      "country_whitelist": [
          "PT"
      ]
  },
  {
      "alias": "faithbasedcpc",
      "title": "Faith-based Crisis Pregnancy Centers",
      "parents": [
          "crisispregnancycenters"
      ],
      "country_whitelist": [
          "US"
      ]
  },
  {
      "alias": "falafel",
      "title": "Falafel",
      "parents": [
          "mediterranean"
      ],
      "country_blacklist": [
          "PT",
          "MX",
          "AR"
      ]
  },
  {
      "alias": "familydr",
      "title": "Family Practice",
      "parents": [
          "physicians"
      ],
      "country_blacklist": [
          "BR"
      ]
  },
  {
      "alias": "farmequipmentrepair",
      "title": "Farm Equipment Repair",
      "parents": [
          "localservices"
      ]
  },
  {
      "alias": "farmersmarket",
      "title": "Farmers Market",
      "parents": [
          "food"
      ]
  },
  {
      "alias": "farmingequipment",
      "title": "Farming Equipment",
      "parents": [
          "shopping"
      ]
  },
  {
      "alias": "farms",
      "title": "Farms",
      "parents": [
          "arts"
      ]
  },
  {
      "alias": "farriers",
      "title": "Farriers",
      "parents": [
          "petservices"
      ]
  },
  {
      "alias": "fashion",
      "title": "Fashion",
      "parents": [
          "shopping"
      ]
  },
  {
      "alias": "fasil",
      "title": "Fasil Music",
      "parents": [
          "nightlife"
      ],
      "country_whitelist": [
          "TR"
      ]
  },
  {
      "alias": "fencesgates",
      "title": "Fences & Gates",
      "parents": [
          "homeservices"
      ]
  },
  {
      "alias": "fencing",
      "title": "Fencing Clubs",
      "parents": [
          "active"
      ]
  },
  {
      "alias": "fengshui",
      "title": "Feng Shui",
      "parents": [
          "professional"
      ]
  },
  {
      "alias": "ferries",
      "title": "Ferries",
      "parents": [
          "transport"
      ]
  },
  {
      "alias": "fertility",
      "title": "Fertility",
      "parents": [
          "physicians"
      ]
  },
  {
      "alias": "festivals",
      "title": "Festivals",
      "parents": [
          "arts"
      ]
  },
  {
      "alias": "filipino",
      "title": "Filipino",
      "parents": [
          "restaurants"
      ],
      "country_blacklist": [
          "TR",
          "CZ",
          "DK",
          "FI"
      ]
  },
  {
      "alias": "financialadvising",
      "title": "Financial Advising",
      "parents": [
          "financialservices"
      ]
  },
  {
      "alias": "financialservices",
      "title": "Financial Services",
      "parents": []
  },
  {
      "alias": "fingerprinting",
      "title": "Fingerprinting",
      "parents": [
          "localservices"
      ],
      "country_whitelist": [
          "US"
      ]
  },
  {
      "alias": "firearmtraining",
      "title": "Firearm Training",
      "parents": [
          "specialtyschools"
      ],
      "country_whitelist": [
          "US"
      ]
  },
  {
      "alias": "firedepartments",
      "title": "Fire Departments",
      "parents": [
          "publicservicesgovt"
      ],
      "country_blacklist": [
          "IE",
          "CA",
          "GB",
          "NZ",
          "SG"
      ]
  },
  {
      "alias": "fireplace",
      "title": "Fireplace Services",
      "parents": [
          "homeservices"
      ]
  },
  {
      "alias": "fireprotection",
      "title": "Fire Protection Services",
      "parents": [
          "homeservices"
      ]
  },
  {
      "alias": "firewood",
      "title": "Firewood",
      "parents": [
          "homeservices"
      ],
      "country_blacklist": [
          "NL",
          "BE",
          "HK",
          "CZ",
          "PH",
          "TW",
          "TR",
          "JP",
          "MY"
      ]
  },
  {
      "alias": "fireworks",
      "title": "Fireworks",
      "parents": [
          "shopping"
      ],
      "country_whitelist": [
          "CA",
          "PT",
          "AR",
          "CZ",
          "CL",
          "US",
          "GB",
          "AU",
          "MX",
          "NZ"
      ]
  },
  {
      "alias": "firstaidclasses",
      "title": "First Aid Classes",
      "parents": [
          "specialtyschools"
      ],
      "country_blacklist": [
          "IE",
          "BR",
          "NL",
          "BE",
          "NZ",
          "SG",
          "FR"
      ]
  },
  {
      "alias": "fischbroetchen",
      "title": "Fischbroetchen",
      "parents": [
          "restaurants"
      ],
      "country_whitelist": [
          "DE"
      ]
  },
  {
      "alias": "fishing",
      "title": "Fishing",
      "parents": [
          "active"
      ]
  },
  {
      "alias": "fishmonger",
      "title": "Fishmonger",
      "parents": [
          "food"
      ],
      "country_whitelist": [
          "NL",
          "BE",
          "AT",
          "SE",
          "CH",
          "PT",
          "CZ",
          "PL",
          "NO",
          "DE",
          "IT",
          "AU",
          "DK",
          "FI"
      ]
  },
  {
      "alias": "fishnchips",
      "title": "Fish & Chips",
      "parents": [
          "restaurants"
      ],
      "country_blacklist": [
          "BR",
          "PT"
      ]
  },
  {
      "alias": "fitness",
      "title": "Fitness & Instruction",
      "parents": [
          "active"
      ]
  },
  {
      "alias": "fitnessequipment",
      "title": "Fitness/Exercise Equipment",
      "parents": [
          "shopping"
      ]
  },
  {
      "alias": "flatbread",
      "title": "Flatbread",
      "parents": [
          "restaurants"
      ],
      "country_whitelist": [
          "DE",
          "AT",
          "DK",
          "CH",
          "PL"
      ]
  },
  {
      "alias": "fleamarkets",
      "title": "Flea Markets",
      "parents": [
          "shopping"
      ]
  },
  {
      "alias": "flemish",
      "title": "Flemish",
      "parents": [
          "belgian"
      ],
      "country_whitelist": [
          "FR"
      ]
  },
  {
      "alias": "flightinstruction",
      "title": "Flight Instruction",
      "parents": [
          "specialtyschools"
      ]
  },
  {
      "alias": "floatspa",
      "title": "Float Spa",
      "parents": [
          "health"
      ],
      "country_blacklist": [
          "IT",
          "JP",
          "FR"
      ]
  },
  {
      "alias": "flooring",
      "title": "Flooring",
      "parents": [
          "homeservices"
      ]
  },
  {
      "alias": "floraldesigners",
      "title": "Floral Designers",
      "parents": [
          "eventservices"
      ],
      "country_blacklist": [
          "FR"
      ]
  },
  {
      "alias": "florists",
      "title": "Florists",
      "parents": [
          "flowers"
      ]
  },
  {
      "alias": "flowers",
      "title": "Flowers & Gifts",
      "parents": [
          "shopping"
      ]
  },
  {
      "alias": "flyboarding",
      "title": "Flyboarding",
      "parents": [
          "active"
      ]
  },
  {
      "alias": "fondue",
      "title": "Fondue",
      "parents": [
          "restaurants"
      ],
      "country_blacklist": [
          "ES",
          "CZ",
          "DK"
      ]
  },
  {
      "alias": "food",
      "title": "Food",
      "parents": []
  },
  {
      "alias": "food_court",
      "title": "Food Court",
      "parents": [
          "restaurants"
      ],
      "country_blacklist": [
          "TR",
          "TW",
          "FR",
          "FI"
      ]
  },
  {
      "alias": "foodbanks",
      "title": "Food Banks",
      "parents": [
          "nonprofit"
      ]
  },
  {
      "alias": "fooddeliveryservices",
      "title": "Food Delivery Services",
      "parents": [
          "food"
      ]
  },
  {
      "alias": "foodsafety",
      "title": "Food Safety Training",
      "parents": [
          "specialtyschools"
      ],
      "country_whitelist": [
          "SG",
          "US",
          "BR",
          "PT"
      ]
  },
  {
      "alias": "foodstands",
      "title": "Food Stands",
      "parents": [
          "restaurants"
      ]
  },
  {
      "alias": "foodtours",
      "title": "Food Tours",
      "parents": [
          "tours"
      ]
  },
  {
      "alias": "foodtrucks",
      "title": "Food Trucks",
      "parents": [
          "food"
      ],
      "country_blacklist": [
          "SG"
      ]
  },
  {
      "alias": "football",
      "title": "Soccer",
      "parents": [
          "active"
      ]
  },
  {
      "alias": "footcare",
      "title": "Foot Care",
      "parents": [
          "beautysvc"
      ],
      "country_whitelist": [
          "CA",
          "NL",
          "BE",
          "AT",
          "CH",
          "DE",
          "IE",
          "IT",
          "PH",
          "GB",
          "JP",
          "AU",
          "NZ",
          "MY",
          "SG"
      ]
  },
  {
      "alias": "forestry",
      "title": "Forestry",
      "parents": [
          "localservices"
      ],
      "country_whitelist": [
          "CA",
          "SE",
          "DK",
          "CZ",
          "NO",
          "FI"
      ]
  },
  {
      "alias": "formalwear",
      "title": "Formal Wear",
      "parents": [
          "fashion"
      ],
      "country_blacklist": [
          "HK",
          "SE",
          "CH",
          "PH",
          "IT",
          "TW",
          "TR",
          "JP",
          "MY",
          "FI"
      ]
  },
  {
      "alias": "foundationrepair",
      "title": "Foundation Repair",
      "parents": [
          "homeservices"
      ],
      "country_blacklist": [
          "DE",
          "AT",
          "CH"
      ]
  },
  {
      "alias": "framing",
      "title": "Framing",
      "parents": [
          "artsandcrafts"
      ]
  },
  {
      "alias": "franconian",
      "title": "Franconian",
      "parents": [
          "german"
      ],
      "country_whitelist": [
          "DE"
      ]
  },
  {
      "alias": "freediving",
      "title": "Free Diving",
      "parents": [
          "diving"
      ]
  },
  {
      "alias": "freiduria",
      "title": "Freiduria",
      "parents": [
          "restaurants"
      ],
      "country_whitelist": [
          "CL",
          "ES",
          "MX",
          "AR"
      ]
  },
  {
      "alias": "french",
      "title": "French",
      "parents": [
          "restaurants"
      ]
  },
  {
      "alias": "friterie",
      "title": "Friterie",
      "parents": [
          "food"
      ],
      "country_whitelist": [
          "IT",
          "NL",
          "BE",
          "AU",
          "PL",
          "FR"
      ]
  },
  {
      "alias": "friulan",
      "title": "Friulan",
      "parents": [
          "italian"
      ],
      "country_whitelist": [
          "IT"
      ]
  },
  {
      "alias": "frozenfood",
      "title": "Frozen Food",
      "parents": [
          "gourmet"
      ],
      "country_whitelist": [
          "IT",
          "GB",
          "ES",
          "BE",
          "SG",
          "FR"
      ]
  },
  {
      "alias": "fueldocks",
      "title": "Fuel Docks",
      "parents": [
          "auto"
      ],
      "country_whitelist": [
          "US",
          "ES",
          "SE",
          "DK",
          "MX",
          "NO"
      ]
  },
  {
      "alias": "funeralservices",
      "title": "Funeral Services & Cemeteries",
      "parents": [
          "localservices"
      ]
  },
  {
      "alias": "funfair",
      "title": "Fun Fair",
      "parents": [
          "festivals"
      ],
      "country_whitelist": [
          "NL",
          "BE",
          "AT",
          "CH",
          "PT",
          "CZ",
          "NO",
          "DE",
          "DK"
      ]
  },
  {
      "alias": "furclothing",
      "title": "Fur Clothing",
      "parents": [
          "fashion"
      ]
  },
  {
      "alias": "furniture",
      "title": "Furniture Stores",
      "parents": [
          "homeandgarden"
      ]
  },
  {
      "alias": "furnitureassembly",
      "title": "Furniture Assembly",
      "parents": [
          "homeservices"
      ],
      "country_blacklist": [
          "CZ"
      ]
  },
  {
      "alias": "furniturerepair",
      "title": "Furniture Repair",
      "parents": [
          "localservices"
      ]
  },
  {
      "alias": "fuzhou",
      "title": "Fuzhou",
      "parents": [
          "chinese"
      ],
      "country_whitelist": [
          "HK",
          "MY",
          "SG",
          "TW"
      ]
  },
  {
      "alias": "galician",
      "title": "Galician",
      "parents": [
          "restaurants"
      ],
      "country_whitelist": [
          "ES",
          "PT"
      ]
  },
  {
      "alias": "galleries",
      "title": "Art Galleries",
      "parents": [
          "arts",
          "shopping"
      ]
  },
  {
      "alias": "gamemeat",
      "title": "Game Meat",
      "parents": [
          "restaurants"
      ],
      "country_blacklist": [
          "CA",
          "BR",
          "HK",
          "PT",
          "AR",
          "CL",
          "PH",
          "TW",
          "TR",
          "JP",
          "MX",
          "MY",
          "FI"
      ]
  },
  {
      "alias": "gametruckrental",
      "title": "Game Truck Rental",
      "parents": [
          "eventservices"
      ],
      "country_whitelist": [
          "CL",
          "US",
          "CA",
          "MX",
          "AR"
      ]
  },
  {
      "alias": "garage_door_services",
      "title": "Garage Door Services",
      "parents": [
          "homeservices"
      ],
      "country_blacklist": [
          "AT",
          "HK",
          "SE",
          "CH",
          "AR",
          "PL",
          "CL",
          "DE",
          "PH",
          "TW",
          "JP",
          "MY"
      ]
  },
  {
      "alias": "gardeners",
      "title": "Gardeners",
      "parents": [
          "homeservices"
      ]
  },
  {
      "alias": "gardening",
      "title": "Nurseries & Gardening",
      "parents": [
          "homeandgarden"
      ]
  },
  {
      "alias": "gardens",
      "title": "Botanical Gardens",
      "parents": [
          "arts"
      ]
  },
  {
      "alias": "gastroenterologist",
      "title": "Gastroenterologist",
      "parents": [
          "physicians"
      ]
  },
  {
      "alias": "gastropubs",
      "title": "Gastropubs",
      "parents": [
          "restaurants"
      ]
  },
  {
      "alias": "gaybars",
      "title": "Gay Bars",
      "parents": [
          "bars"
      ]
  },
  {
      "alias": "gelato",
      "title": "Gelato",
      "parents": [
          "food"
      ],
      "country_whitelist": [
          "SE",
          "PT",
          "CZ",
          "PL",
          "NO",
          "PH",
          "IT",
          "US",
          "AU",
          "DK",
          "SG"
      ]
  },
  {
      "alias": "gemstonesandminerals",
      "title": "Gemstones & Minerals",
      "parents": [
          "shopping"
      ]
  },
  {
      "alias": "general_litigation",
      "title": "General Litigation",
      "parents": [
          "lawyers"
      ]
  },
  {
      "alias": "generaldentistry",
      "title": "General Dentistry",
      "parents": [
          "dentists"
      ]
  },
  {
      "alias": "generalfestivals",
      "title": "General Festivals",
      "parents": [
          "festivals"
      ],
      "country_whitelist": [
          "DE",
          "JP",
          "AT",
          "CH",
          "PT"
      ]
  },
  {
      "alias": "generatorinstallrepair",
      "title": "Generator Installation/Repair",
      "parents": [
          "localservices"
      ],
      "country_whitelist": [
          "US"
      ]
  },
  {
      "alias": "geneticists",
      "title": "Geneticists",
      "parents": [
          "physicians"
      ]
  },
  {
      "alias": "georgian",
      "title": "Georgian",
      "parents": [
          "restaurants"
      ],
      "country_whitelist": [
          "AT",
          "CH",
          "CZ",
          "PL",
          "DE",
          "US",
          "GB",
          "FI"
      ]
  },
  {
      "alias": "german",
      "title": "German",
      "parents": [
          "restaurants"
      ]
  },
  {
      "alias": "gerontologist",
      "title": "Gerontologists",
      "parents": [
          "physicians"
      ]
  },
  {
      "alias": "gestorias",
      "title": "Gestorias",
      "parents": [
          "localservices"
      ],
      "country_whitelist": [
          "CL",
          "ES",
          "MX",
          "AR"
      ]
  },
  {
      "alias": "giblets",
      "title": "Giblets",
      "parents": [
          "restaurants"
      ],
      "country_whitelist": [
          "TR"
      ]
  },
  {
      "alias": "giftshops",
      "title": "Gift Shops",
      "parents": [
          "flowers"
      ],
      "country_blacklist": [
          "TR",
          "SG",
          "PL"
      ]
  },
  {
      "alias": "glassandmirrors",
      "title": "Glass & Mirrors",
      "parents": [
          "homeservices"
      ],
      "country_blacklist": [
          "TR"
      ]
  },
  {
      "alias": "glassblowing",
      "title": "Glass Blowing",
      "parents": [
          "artclasses"
      ],
      "country_blacklist": [
          "DE",
          "AT",
          "CH"
      ]
  },
  {
      "alias": "gliding",
      "title": "Gliding",
      "parents": [
          "active"
      ],
      "country_whitelist": [
          "AT",
          "SE",
          "CH",
          "PT",
          "CZ",
          "PL",
          "NO",
          "DE",
          "FR"
      ]
  },
  {
      "alias": "gluhwein",
      "title": "Mulled Wine",
      "parents": [
          "food"
      ],
      "country_whitelist": [
          "DE",
          "AT",
          "SE",
          "CH",
          "CZ"
      ]
  },
  {
      "alias": "gluten_free",
      "title": "Gluten-Free",
      "parents": [
          "restaurants"
      ]
  },
  {
      "alias": "gokarts",
      "title": "Go Karts",
      "parents": [
          "active"
      ]
  },
  {
      "alias": "goldbuyers",
      "title": "Gold Buyers",
      "parents": [
          "shopping"
      ],
      "country_whitelist": [
          "CA",
          "BR",
          "NL",
          "BE",
          "AT",
          "SE",
          "CH",
          "PT",
          "DE",
          "IT",
          "US",
          "ES",
          "FR"
      ]
  },
  {
      "alias": "golf",
      "title": "Golf",
      "parents": [
          "active"
      ]
  },
  {
      "alias": "golfcartdealers",
      "title": "Golf Cart Dealers",
      "parents": [
          "auto"
      ],
      "country_whitelist": [
          "US",
          "CA"
      ]
  },
  {
      "alias": "golfcartrentals",
      "title": "Golf Cart Rentals",
      "parents": [
          "eventservices"
      ],
      "country_whitelist": [
          "US"
      ]
  },
  {
      "alias": "golfequipment",
      "title": "Golf Equipment",
      "parents": [
          "sportgoods"
      ],
      "country_whitelist": [
          "DE",
          "US",
          "CA",
          "NL",
          "BE",
          "AU"
      ]
  },
  {
      "alias": "golflessons",
      "title": "Golf Lessons",
      "parents": [
          "fitness"
      ],
      "country_blacklist": [
          "CA",
          "BR",
          "AT",
          "HK",
          "CH",
          "DE",
          "IE",
          "PH",
          "TW",
          "TR",
          "MY",
          "SG",
          "FI"
      ]
  },
  {
      "alias": "gourmet",
      "title": "Specialty Food",
      "parents": [
          "food"
      ]
  },
  {
      "alias": "gozleme",
      "title": "Gozleme",
      "parents": [
          "turkish"
      ],
      "country_whitelist": [
          "TR"
      ]
  },
  {
      "alias": "graphicdesign",
      "title": "Graphic Design",
      "parents": [
          "professional"
      ]
  },
  {
      "alias": "greek",
      "title": "Greek",
      "parents": [
          "restaurants"
      ]
  },
  {
      "alias": "grillingequipment",
      "title": "Grilling Equipment",
      "parents": [
          "homeandgarden"
      ]
  },
  {
      "alias": "grillservices",
      "title": "Grill Services",
      "parents": [
          "localservices"
      ],
      "country_whitelist": [
          "BR",
          "AT",
          "CH",
          "PT",
          "AR",
          "PL",
          "CL",
          "DE",
          "US",
          "ES",
          "MX"
      ]
  },
  {
      "alias": "grocery",
      "title": "Grocery",
      "parents": [
          "food"
      ]
  },
  {
      "alias": "groomer",
      "title": "Pet Groomers",
      "parents": [
          "petservices"
      ]
  },
  {
      "alias": "groutservices",
      "title": "Grout Services",
      "parents": [
          "homeservices"
      ],
      "country_blacklist": [
          "FR"
      ]
  },
  {
      "alias": "guamanian",
      "title": "Guamanian",
      "parents": [
          "restaurants"
      ],
      "country_blacklist": [
          "CL",
          "TR",
          "JP",
          "MX",
          "AR",
          "PL",
          "FR"
      ]
  },
  {
      "alias": "guesthouses",
      "title": "Guest Houses",
      "parents": [
          "hotelstravel"
      ],
      "country_blacklist": [
          "SG"
      ]
  },
  {
      "alias": "guitarstores",
      "title": "Guitar Stores",
      "parents": [
          "musicinstrumentservices"
      ]
  },
  {
      "alias": "gun_ranges",
      "title": "Gun/Rifle Ranges",
      "parents": [
          "active"
      ],
      "country_blacklist": [
          "AT",
          "SG",
          "CH",
          "BE"
      ]
  },
  {
      "alias": "guns_and_ammo",
      "title": "Guns & Ammo",
      "parents": [
          "shopping"
      ],
      "country_whitelist": [
          "CA",
          "AT",
          "CH",
          "PT",
          "AR",
          "PL",
          "CL",
          "DE",
          "PH",
          "US",
          "ES",
          "MX",
          "MY"
      ]
  },
  {
      "alias": "gunsmith",
      "title": "Gunsmith",
      "parents": [
          "localservices"
      ],
      "country_blacklist": [
          "BR",
          "NL",
          "BE",
          "AT",
          "HK",
          "CH",
          "DE",
          "TW",
          "TR",
          "JP"
      ]
  },
  {
      "alias": "gutterservices",
      "title": "Gutter Services",
      "parents": [
          "homeservices"
      ],
      "country_blacklist": [
          "MX",
          "AR"
      ]
  },
  {
      "alias": "gymnastics",
      "title": "Gymnastics",
      "parents": [
          "active"
      ],
      "country_whitelist": [
          "CA",
          "BR",
          "PT",
          "CZ",
          "NO",
          "US",
          "MX",
          "DK",
          "NZ"
      ]
  },
  {
      "alias": "gyms",
      "title": "Gyms",
      "parents": [
          "fitness"
      ]
  },
  {
      "alias": "gyudon",
      "title": "Gyudon",
      "parents": [
          "donburi"
      ],
      "country_whitelist": [
          "JP"
      ]
  },
  {
      "alias": "habilitativeservices",
      "title": "Habilitative Services",
      "parents": [
          "health"
      ]
  },
  {
      "alias": "hainan",
      "title": "Hainan",
      "parents": [
          "chinese"
      ],
      "country_whitelist": [
          "PH",
          "US",
          "HK",
          "MY",
          "SG"
      ]
  },
  {
      "alias": "hair",
      "title": "Hair Salons",
      "parents": [
          "beautysvc"
      ]
  },
  {
      "alias": "hair_extensions",
      "title": "Hair Extensions",
      "parents": [
          "beautysvc",
          "hair"
      ],
      "country_blacklist": [
          "NL",
          "TR",
          "BE",
          "HK",
          "PL"
      ]
  },
  {
      "alias": "hairloss",
      "title": "Hair Loss Centers",
      "parents": [
          "beautysvc"
      ]
  },
  {
      "alias": "hairremoval",
      "title": "Hair Removal",
      "parents": [
          "beautysvc"
      ]
  },
  {
      "alias": "hairstylists",
      "title": "Hair Stylists",
      "parents": [
          "hair"
      ],
      "country_whitelist": [
          "BE",
          "AT",
          "HK",
          "PT",
          "AR",
          "CL",
          "IE",
          "DE",
          "US",
          "TW",
          "DK",
          "MX",
          "CA",
          "NL",
          "SE",
          "CH",
          "CZ",
          "PL",
          "NO",
          "GB",
          "ES",
          "AU",
          "SG"
      ]
  },
  {
      "alias": "haitian",
      "title": "Haitian",
      "parents": [
          "caribbean"
      ],
      "country_whitelist": [
          "US",
          "CA"
      ]
  },
  {
      "alias": "hakka",
      "title": "Hakka",
      "parents": [
          "chinese"
      ],
      "country_whitelist": [
          "PH",
          "CA",
          "TW",
          "HK",
          "MY",
          "SG"
      ]
  },
  {
      "alias": "halal",
      "title": "Halal",
      "parents": [
          "restaurants"
      ],
      "country_blacklist": [
          "TR",
          "PT"
      ]
  },
  {
      "alias": "halfwayhouses",
      "title": "Halfway Houses",
      "parents": [
          "health"
      ],
      "country_whitelist": [
          "US"
      ]
  },
  {
      "alias": "halotherapy",
      "title": "Halotherapy",
      "parents": [
          "health"
      ],
      "country_blacklist": [
          "FR"
      ]
  },
  {
      "alias": "handball",
      "title": "Handball",
      "parents": [
          "active"
      ],
      "country_blacklist": [
          "HK",
          "PT",
          "DE",
          "IE",
          "PH",
          "US",
          "TW",
          "TR",
          "MX",
          "NZ",
          "MY",
          "CA",
          "CZ",
          "GB",
          "AU",
          "SG"
      ]
  },
  {
      "alias": "handrolls",
      "title": "Hand Rolls",
      "parents": [
          "japanese"
      ],
      "country_whitelist": [
          "BR",
          "TW"
      ]
  },
  {
      "alias": "handyman",
      "title": "Handyman",
      "parents": [
          "homeservices"
      ]
  },
  {
      "alias": "hanggliding",
      "title": "Hang Gliding",
      "parents": [
          "active"
      ],
      "country_blacklist": [
          "CA",
          "NL",
          "HK",
          "CZ",
          "PL",
          "DE",
          "IE",
          "PH",
          "TW",
          "GB",
          "TR",
          "DK",
          "MY",
          "SG",
          "FI"
      ]
  },
  {
      "alias": "hardware",
      "title": "Hardware Stores",
      "parents": [
          "homeandgarden"
      ]
  },
  {
      "alias": "hats",
      "title": "Hats",
      "parents": [
          "fashion"
      ],
      "country_blacklist": [
          "AT",
          "HK",
          "SE",
          "CH",
          "PL",
          "IE",
          "GB",
          "TR",
          "JP"
      ]
  },
  {
      "alias": "hauntedhouses",
      "title": "Haunted Houses",
      "parents": [
          "arts"
      ]
  },
  {
      "alias": "hawaiian",
      "title": "Hawaiian",
      "parents": [
          "restaurants"
      ],
      "country_blacklist": [
          "TR",
          "AU",
          "DK",
          "PT",
          "CZ"
      ]
  },
  {
      "alias": "hawkercentre",
      "title": "Hawker Centre",
      "parents": [
          "food"
      ],
      "country_whitelist": [
          "HK",
          "AR",
          "PH",
          "CL",
          "TW",
          "MX",
          "MY",
          "SG"
      ]
  },
  {
      "alias": "hazardouswastedisposal",
      "title": "Hazardous Waste Disposal",
      "parents": [
          "localservices"
      ],
      "country_blacklist": [
          "BR",
          "AT",
          "HK",
          "SE",
          "CH",
          "PT",
          "CZ",
          "DE",
          "PH",
          "TR",
          "JP",
          "MY",
          "FR"
      ]
  },
  {
      "alias": "headshops",
      "title": "Head Shops",
      "parents": [
          "shopping"
      ]
  },
  {
      "alias": "health",
      "title": "Health & Medical",
      "parents": []
  },
  {
      "alias": "healthcoach",
      "title": "Health Coach",
      "parents": [
          "health"
      ]
  },
  {
      "alias": "healthinsurance",
      "title": "Health Insurance Offices",
      "parents": [
          "health"
      ],
      "country_whitelist": [
          "BR",
          "BE",
          "AT",
          "CH",
          "PT",
          "CZ",
          "PL",
          "DE",
          "US",
          "AU",
          "MX",
          "NZ",
          "SG",
          "FR"
      ]
  },
  {
      "alias": "healthmarkets",
      "title": "Health Markets",
      "parents": [
          "gourmet"
      ]
  },
  {
      "alias": "healthretreats",
      "title": "Health Retreats",
      "parents": [
          "hotelstravel"
      ],
      "country_blacklist": [
          "MX",
          "AR"
      ]
  },
  {
      "alias": "healthtrainers",
      "title": "Trainers",
      "parents": [
          "fitness"
      ]
  },
  {
      "alias": "hearing_aids",
      "title": "Hearing Aids",
      "parents": [
          "health"
      ],
      "country_whitelist": [
          "BR",
          "AT",
          "CH",
          "PT",
          "AR",
          "CZ",
          "PL",
          "NO",
          "CL",
          "DE",
          "ES",
          "FI",
          "DK",
          "MX",
          "FR"
      ]
  },
  {
      "alias": "hearingaidproviders",
      "title": "Hearing Aid Providers",
      "parents": [
          "health"
      ],
      "country_blacklist": [
          "AT",
          "HK",
          "SE",
          "CH",
          "AR",
          "CZ",
          "CL",
          "DE",
          "ES",
          "TR",
          "JP",
          "MX"
      ]
  },
  {
      "alias": "henghwa",
      "title": "Henghwa",
      "parents": [
          "chinese"
      ],
      "country_whitelist": [
          "HK",
          "MY",
          "SG",
          "TW"
      ]
  },
  {
      "alias": "hennaartists",
      "title": "Henna Artists",
      "parents": [
          "eventservices"
      ],
      "country_whitelist": [
          "BR",
          "CA",
          "AT",
          "CH",
          "NO",
          "DE",
          "IT",
          "US",
          "AU",
          "NZ",
          "DK",
          "FR"
      ]
  },
  {
      "alias": "hepatologists",
      "title": "Hepatologists",
      "parents": [
          "physicians"
      ]
  },
  {
      "alias": "herbalshops",
      "title": "Herbal Shops",
      "parents": [
          "health"
      ]
  },
  {
      "alias": "herbsandspices",
      "title": "Herbs & Spices",
      "parents": [
          "gourmet"
      ]
  },
  {
      "alias": "hessian",
      "title": "Hessian",
      "parents": [
          "german"
      ],
      "country_whitelist": [
          "DE"
      ]
  },
  {
      "alias": "heuriger",
      "title": "Heuriger",
      "parents": [
          "restaurants"
      ],
      "country_whitelist": [
          "AT"
      ]
  },
  {
      "alias": "hifi",
      "title": "High Fidelity Audio Equipment",
      "parents": [
          "shopping"
      ],
      "country_blacklist": [
          "CZ"
      ]
  },
  {
      "alias": "highschools",
      "title": "Middle Schools & High Schools",
      "parents": [
          "education"
      ]
  },
  {
      "alias": "hiking",
      "title": "Hiking",
      "parents": [
          "active"
      ]
  },
  {
      "alias": "himalayan",
      "title": "Himalayan/Nepalese",
      "parents": [
          "restaurants"
      ]
  },
  {
      "alias": "hindu_temples",
      "title": "Hindu Temples",
      "parents": [
          "religiousorgs"
      ]
  },
  {
      "alias": "historicaltours",
      "title": "Historical Tours",
      "parents": [
          "tours"
      ]
  },
  {
      "alias": "hkcafe",
      "title": "Hong Kong Style Cafe",
      "parents": [
          "restaurants"
      ],
      "country_whitelist": [
          "HK",
          "US",
          "CA",
          "TW"
      ]
  },
  {
      "alias": "hobbyshops",
      "title": "Hobby Shops",
      "parents": [
          "shopping"
      ]
  },
  {
      "alias": "hockeyequipment",
      "title": "Hockey Equipment",
      "parents": [
          "sportgoods"
      ]
  },
  {
      "alias": "hokkien",
      "title": "Hokkien",
      "parents": [
          "chinese"
      ],
      "country_whitelist": [
          "HK",
          "MY",
          "SG",
          "TW"
      ]
  },
  {
      "alias": "holidaydecorations",
      "title": "Holiday Decorations",
      "parents": [
          "homeandgarden"
      ]
  },
  {
      "alias": "home_inspectors",
      "title": "Home Inspectors",
      "parents": [
          "homeservices"
      ]
  },
  {
      "alias": "home_organization",
      "title": "Home Organization",
      "parents": [
          "homeservices"
      ],
      "country_whitelist": [
          "US",
          "CA"
      ]
  },
  {
      "alias": "homeandgarden",
      "title": "Home & Garden",
      "parents": [
          "shopping"
      ]
  },
  {
      "alias": "homeappliancerepair",
      "title": "Appliances & Repair",
      "parents": [
          "localservices"
      ]
  },
  {
      "alias": "homeautomation",
      "title": "Home Automation",
      "parents": [
          "homeservices"
      ]
  },
  {
      "alias": "homecleaning",
      "title": "Home Cleaning",
      "parents": [
          "homeservices"
      ]
  },
  {
      "alias": "homedecor",
      "title": "Home Decor",
      "parents": [
          "homeandgarden"
      ]
  },
  {
      "alias": "homedevelopers",
      "title": "Home Developers",
      "parents": [
          "realestate"
      ],
      "country_blacklist": [
          "CL",
          "IT",
          "BR",
          "MX",
          "AR"
      ]
  },
  {
      "alias": "homeenergyauditors",
      "title": "Home Energy Auditors",
      "parents": [
          "homeservices"
      ],
      "country_whitelist": [
          "BE",
          "AT",
          "PT",
          "DE",
          "PH",
          "IE",
          "US",
          "DK",
          "NZ",
          "MY",
          "FI",
          "CA",
          "NL",
          "SE",
          "CH",
          "NO",
          "PL",
          "GB",
          "ES",
          "AU",
          "SG",
          "FR"
      ]
  },
  {
      "alias": "homehealthcare",
      "title": "Home Health Care",
      "parents": [
          "health"
      ]
  },
  {
      "alias": "homeinsurance",
      "title": "Home & Rental Insurance",
      "parents": [
          "insurance"
      ]
  },
  {
      "alias": "homelessshelters",
      "title": "Homeless Shelters",
      "parents": [
          "nonprofit"
      ],
      "country_whitelist": [
          "US"
      ]
  },
  {
      "alias": "homemadefood",
      "title": "Homemade Food",
      "parents": [
          "turkish"
      ],
      "country_whitelist": [
          "TR"
      ]
  },
  {
      "alias": "homenetworkinstall",
      "title": "Home Network Installation",
      "parents": [
          "homeservices"
      ],
      "country_whitelist": [
          "BR",
          "NL",
          "BE",
          "AT",
          "SE",
          "CH",
          "PT",
          "CZ",
          "NO",
          "DE",
          "US",
          "ES",
          "DK",
          "FI"
      ]
  },
  {
      "alias": "homeopathic",
      "title": "Homeopathic",
      "parents": [
          "physicians"
      ],
      "country_blacklist": [
          "CA",
          "HK",
          "IE",
          "US",
          "TW",
          "GB",
          "TR",
          "AU",
          "NZ",
          "SG"
      ]
  },
  {
      "alias": "homeownerassociation",
      "title": "Homeowner Association",
      "parents": [
          "realestate"
      ],
      "country_whitelist": [
          "US",
          "CZ",
          "PL"
      ]
  },
  {
      "alias": "homeservices",
      "title": "Home Services",
      "parents": []
  },
  {
      "alias": "homestaging",
      "title": "Home Staging",
      "parents": [
          "realestate"
      ],
      "country_blacklist": [
          "BR",
          "ES",
          "PT",
          "CZ",
          "FR"
      ]
  },
  {
      "alias": "hometheatreinstallation",
      "title": "Home Theatre Installation",
      "parents": [
          "homeservices"
      ],
      "country_blacklist": [
          "CZ",
          "DK"
      ]
  },
  {
      "alias": "homewindowtinting",
      "title": "Home Window Tinting",
      "parents": [
          "homeservices"
      ],
      "country_whitelist": [
          "CA",
          "NL",
          "BE",
          "PT",
          "IE",
          "US",
          "GB",
          "AU",
          "NZ",
          "SG"
      ]
  },
  {
      "alias": "honduran",
      "title": "Honduran",
      "parents": [
          "restaurants"
      ],
      "country_blacklist": [
          "TR",
          "JP"
      ]
  },
  {
      "alias": "honey",
      "title": "Honey",
      "parents": [
          "food"
      ],
      "country_whitelist": [
          "FR",
          "SE",
          "PL",
          "DE",
          "IT",
          "US",
          "TR",
          "FI"
      ]
  },
  {
      "alias": "hookah_bars",
      "title": "Hookah Bars",
      "parents": [
          "bars"
      ],
      "country_blacklist": [
          "AU",
          "SG"
      ]
  },
  {
      "alias": "horse_boarding",
      "title": "Horse Boarding",
      "parents": [
          "pets"
      ],
      "country_whitelist": [
          "CA",
          "SE",
          "CZ",
          "NO",
          "DE",
          "IE",
          "US",
          "GB",
          "AU",
          "DK",
          "NZ",
          "FR"
      ]
  },
  {
      "alias": "horsebackriding",
      "title": "Horseback Riding",
      "parents": [
          "active"
      ]
  },
  {
      "alias": "horsequipment",
      "title": "Horse Equipment Shops",
      "parents": [
          "shopping"
      ],
      "country_blacklist": [
          "HK",
          "CH",
          "PH",
          "TW",
          "TR",
          "JP",
          "NZ",
          "MY"
      ]
  },
  {
      "alias": "horseracing",
      "title": "Horse Racing",
      "parents": [
          "active"
      ],
      "country_blacklist": [
          "CA",
          "BR",
          "IE",
          "IT",
          "PH",
          "GB",
          "NZ",
          "MY",
          "SG",
          "FR"
      ]
  },
  {
      "alias": "horumon",
      "title": "Horumon",
      "parents": [
          "japanese"
      ],
      "country_whitelist": [
          "JP",
          "TW"
      ]
  },
  {
      "alias": "hospice",
      "title": "Hospice",
      "parents": [
          "health"
      ]
  },
  {
      "alias": "hospitalists",
      "title": "Hospitalists",
      "parents": [
          "physicians"
      ],
      "country_blacklist": [
          "DE",
          "IT",
          "TR",
          "JP",
          "AT",
          "CH"
      ]
  },
  {
      "alias": "hospitals",
      "title": "Hospitals",
      "parents": [
          "health"
      ]
  },
  {
      "alias": "hostels",
      "title": "Hostels",
      "parents": [
          "hotelstravel"
      ]
  },
  {
      "alias": "hot_air_balloons",
      "title": "Hot Air Balloons",
      "parents": [
          "active"
      ],
      "country_blacklist": [
          "SG",
          "CA",
          "BR",
          "NZ"
      ]
  },
  {
      "alias": "hotdog",
      "title": "Hot Dogs",
      "parents": [
          "restaurants"
      ]
  },
  {
      "alias": "hotdogs",
      "title": "Fast Food",
      "parents": [
          "restaurants"
      ]
  },
  {
      "alias": "hotel_bar",
      "title": "Hotel bar",
      "parents": [
          "bars"
      ],
      "country_whitelist": [
          "BR",
          "SE",
          "DK",
          "PT",
          "NO",
          "FI"
      ]
  },
  {
      "alias": "hotels",
      "title": "Hotels",
      "parents": [
          "hotelstravel",
          "eventservices"
      ]
  },
  {
      "alias": "hotelstravel",
      "title": "Hotels & Travel",
      "parents": []
  },
  {
      "alias": "hotpot",
      "title": "Hot Pot",
      "parents": [
          "restaurants"
      ],
      "country_whitelist": [
          "CA",
          "BR",
          "HK",
          "SE",
          "PH",
          "US",
          "TW",
          "JP",
          "MY",
          "SG",
          "FR"
      ]
  },
  {
      "alias": "hotsprings",
      "title": "Hot Springs",
      "parents": [
          "beautysvc"
      ],
      "country_whitelist": [
          "BR",
          "AT",
          "CH",
          "CZ",
          "DE",
          "US",
          "TW",
          "JP",
          "AU",
          "NZ"
      ]
  },
  {
      "alias": "hottubandpool",
      "title": "Hot Tub & Pool",
      "parents": [
          "homeandgarden"
      ]
  },
  {
      "alias": "housesitters",
      "title": "House Sitters",
      "parents": [
          "homeservices"
      ],
      "country_whitelist": [
          "CA",
          "AT",
          "CH",
          "PL",
          "DE",
          "IT",
          "US",
          "AU"
      ]
  },
  {
      "alias": "housingcooperatives",
      "title": "Housing Cooperatives",
      "parents": [
          "realestate"
      ],
      "country_blacklist": [
          "CL",
          "IT",
          "MX",
          "AR"
      ]
  },
  {
      "alias": "hunan",
      "title": "Hunan",
      "parents": [
          "chinese"
      ],
      "country_whitelist": [
          "TW",
          "HK",
          "MY",
          "SG",
          "FR"
      ]
  },
  {
      "alias": "hungarian",
      "title": "Hungarian",
      "parents": [
          "restaurants"
      ]
  },
  {
      "alias": "huntingfishingsupplies",
      "title": "Hunting & Fishing Supplies",
      "parents": [
          "sportgoods"
      ]
  },
  {
      "alias": "hvac",
      "title": "Heating & Air Conditioning/HVAC",
      "parents": [
          "homeservices"
      ]
  },
  {
      "alias": "hybridcarrepair",
      "title": "Hybrid Car Repair",
      "parents": [
          "auto"
      ],
      "country_whitelist": [
          "SE",
          "CZ",
          "PL",
          "IE",
          "US",
          "GB",
          "AU",
          "NZ",
          "SG"
      ]
  },
  {
      "alias": "hydrojetting",
      "title": "Hydro-jetting",
      "parents": [
          "localservices"
      ],
      "country_whitelist": [
          "US",
          "CZ"
      ]
  },
  {
      "alias": "hydroponics",
      "title": "Hydroponics",
      "parents": [
          "gardening"
      ]
  },
  {
      "alias": "hydrotherapy",
      "title": "Hydrotherapy",
      "parents": [
          "health"
      ]
  },
  {
      "alias": "hypnosis",
      "title": "Hypnosis/Hypnotherapy",
      "parents": [
          "health"
      ],
      "country_blacklist": [
          "NL",
          "HK",
          "TR"
      ]
  },
  {
      "alias": "iberian",
      "title": "Iberian",
      "parents": [
          "restaurants"
      ],
      "country_whitelist": [
          "US",
          "CA",
          "PT"
      ]
  },
  {
      "alias": "icecream",
      "title": "Ice Cream & Frozen Yogurt",
      "parents": [
          "food"
      ]
  },
  {
      "alias": "icedelivery",
      "title": "Ice Delivery",
      "parents": [
          "localservices"
      ]
  },
  {
      "alias": "immigrationlawyers",
      "title": "Immigration Law",
      "parents": [
          "lawyers"
      ]
  },
  {
      "alias": "immunodermatologists",
      "title": "Immunodermatologists",
      "parents": [
          "physicians"
      ],
      "country_blacklist": [
          "JP",
          "FR"
      ]
  },
  {
      "alias": "importedfood",
      "title": "Imported Food",
      "parents": [
          "food"
      ]
  },
  {
      "alias": "indonesian",
      "title": "Indonesian",
      "parents": [
          "restaurants"
      ],
      "country_blacklist": [
          "ES",
          "MX"
      ]
  },
  {
      "alias": "indoor_playcenter",
      "title": "Indoor Playcentre",
      "parents": [
          "active"
      ],
      "country_blacklist": [
          "BR",
          "AT",
          "HK",
          "CH",
          "AR",
          "PL",
          "CL",
          "IE",
          "PH",
          "TW",
          "TR",
          "MX",
          "MY",
          "SG",
          "FI"
      ]
  },
  {
      "alias": "indoorlandscaping",
      "title": "Indoor Landscaping",
      "parents": [
          "professional"
      ],
      "country_blacklist": [
          "IT"
      ]
  },
  {
      "alias": "indpak",
      "title": "Indian",
      "parents": [
          "restaurants"
      ]
  },
  {
      "alias": "infectiousdisease",
      "title": "Infectious Disease Specialists",
      "parents": [
          "physicians"
      ]
  },
  {
      "alias": "installmentloans",
      "title": "Installment Loans",
      "parents": [
          "financialservices"
      ],
      "country_whitelist": [
          "US"
      ]
  },
  {
      "alias": "insulationinstallation",
      "title": "Insulation Installation",
      "parents": [
          "homeservices"
      ]
  },
  {
      "alias": "insurance",
      "title": "Insurance",
      "parents": [
          "financialservices"
      ]
  },
  {
      "alias": "interiordesign",
      "title": "Interior Design",
      "parents": [
          "homeservices"
      ]
  },
  {
      "alias": "interlocksystems",
      "title": "Interlock Systems",
      "parents": [
          "auto"
      ],
      "country_whitelist": [
          "US"
      ]
  },
  {
      "alias": "internalmed",
      "title": "Internal Medicine",
      "parents": [
          "physicians"
      ],
      "country_blacklist": [
          "BR"
      ]
  },
  {
      "alias": "international",
      "title": "International",
      "parents": [
          "restaurants"
      ],
      "country_blacklist": [
          "PH",
          "IT",
          "US",
          "TR",
          "MY",
          "FI"
      ]
  },
  {
      "alias": "internetbooth",
      "title": "Internet Booths & Calling Centers",
      "parents": [
          "localservices"
      ],
      "country_whitelist": [
          "CL",
          "IT",
          "BR",
          "ES",
          "MX",
          "AR"
      ]
  },
  {
      "alias": "internetcafe",
      "title": "Internet Cafes",
      "parents": [
          "food"
      ]
  },
  {
      "alias": "intervaltraininggyms",
      "title": "Interval Training Gyms",
      "parents": [
          "gyms"
      ],
      "country_whitelist": [
          "US"
      ]
  },
  {
      "alias": "intlgrocery",
      "title": "International Grocery",
      "parents": [
          "food"
      ]
  },
  {
      "alias": "investing",
      "title": "Investing",
      "parents": [
          "financialservices"
      ]
  },
  {
      "alias": "iplaw",
      "title": "IP & Internet Law",
      "parents": [
          "lawyers"
      ],
      "country_whitelist": [
          "US",
          "CZ"
      ]
  },
  {
      "alias": "irish",
      "title": "Irish",
      "parents": [
          "restaurants"
      ]
  },
  {
      "alias": "irish_pubs",
      "title": "Irish Pub",
      "parents": [
          "bars"
      ]
  },
  {
      "alias": "irrigation",
      "title": "Irrigation",
      "parents": [
          "homeservices"
      ],
      "country_whitelist": [
          "US"
      ]
  },
  {
      "alias": "island_pub",
      "title": "Island Pub",
      "parents": [
          "restaurants"
      ],
      "country_whitelist": [
          "SE"
      ]
  },
  {
      "alias": "isps",
      "title": "Internet Service Providers",
      "parents": [
          "professional",
          "homeservices"
      ]
  },
  {
      "alias": "israeli",
      "title": "Israeli",
      "parents": [
          "restaurants"
      ],
      "country_whitelist": [
          "DE",
          "AT",
          "CZ",
          "CH"
      ]
  },
  {
      "alias": "italian",
      "title": "Italian",
      "parents": [
          "restaurants"
      ]
  },
  {
      "alias": "itservices",
      "title": "IT Services & Computer Repair",
      "parents": [
          "localservices"
      ]
  },
  {
      "alias": "ivhydration",
      "title": "IV Hydration",
      "parents": [
          "health"
      ],
      "country_whitelist": [
          "US"
      ]
  },
  {
      "alias": "izakaya",
      "title": "Izakaya",
      "parents": [
          "japanese"
      ],
      "country_whitelist": [
          "BR",
          "HK",
          "US",
          "TW",
          "JP",
          "AU",
          "MX",
          "NZ",
          "SG"
      ]
  },
  {
      "alias": "jailsandprisons",
      "title": "Jails & Prisons",
      "parents": [
          "publicservicesgovt"
      ]
  },
  {
      "alias": "jaliscan",
      "title": "Jaliscan",
      "parents": [
          "mexican"
      ],
      "country_whitelist": [
          "MX"
      ]
  },
  {
      "alias": "japacurry",
      "title": "Japanese Curry",
      "parents": [
          "japanese"
      ],
      "country_whitelist": [
          "US",
          "TW",
          "JP",
          "HK",
          "SG"
      ]
  },
  {
      "alias": "japanese",
      "title": "Japanese",
      "parents": [
          "restaurants"
      ]
  },
  {
      "alias": "jazzandblues",
      "title": "Jazz & Blues",
      "parents": [
          "nightlife",
          "arts"
      ]
  },
  {
      "alias": "jetskis",
      "title": "Jet Skis",
      "parents": [
          "active"
      ]
  },
  {
      "alias": "jewelry",
      "title": "Jewelry",
      "parents": [
          "shopping"
      ]
  },
  {
      "alias": "jewelryrepair",
      "title": "Jewelry Repair",
      "parents": [
          "localservices"
      ],
      "country_blacklist": [
          "AT",
          "HK",
          "SE",
          "CH",
          "DE",
          "IE",
          "TW",
          "GB",
          "NZ",
          "SG",
          "FI"
      ]
  },
  {
      "alias": "jewish",
      "title": "Jewish",
      "parents": [
          "restaurants"
      ],
      "country_whitelist": [
          "DE",
          "IT",
          "PL"
      ]
  },
  {
      "alias": "jpsweets",
      "title": "Japanese Sweets",
      "parents": [
          "food"
      ],
      "country_whitelist": [
          "JP"
      ]
  },
  {
      "alias": "juicebars",
      "title": "Juice Bars & Smoothies",
      "parents": [
          "food"
      ]
  },
  {
      "alias": "junkremovalandhauling",
      "title": "Junk Removal & Hauling",
      "parents": [
          "localservices"
      ]
  },
  {
      "alias": "junkyards",
      "title": "Junkyards",
      "parents": [
          "localservices"
      ],
      "country_whitelist": [
          "BR",
          "BE",
          "AT",
          "IE",
          "DE",
          "US",
          "DK",
          "NZ",
          "CA",
          "NL",
          "SE",
          "CZ",
          "PL",
          "NO",
          "GB",
          "AU",
          "SG",
          "FR"
      ]
  },
  {
      "alias": "kaiseki",
      "title": "Kaiseki",
      "parents": [
          "japanese"
      ],
      "country_whitelist": [
          "JP",
          "TW"
      ]
  },
  {
      "alias": "karaoke",
      "title": "Karaoke",
      "parents": [
          "nightlife"
      ]
  },
  {
      "alias": "karaokerental",
      "title": "Karaoke Rental",
      "parents": [
          "partyequipmentrentals"
      ]
  },
  {
      "alias": "karate",
      "title": "Karate",
      "parents": [
          "martialarts"
      ]
  },
  {
      "alias": "kebab",
      "title": "Kebab",
      "parents": [
          "restaurants"
      ]
  },
  {
      "alias": "kickboxing",
      "title": "Kickboxing",
      "parents": [
          "martialarts"
      ]
  },
  {
      "alias": "kids_activities",
      "title": "Kids Activities",
      "parents": [
          "active"
      ],
      "country_blacklist": [
          "SG"
      ]
  },
  {
      "alias": "kidshairsalons",
      "title": "Kids Hair Salons",
      "parents": [
          "hair"
      ]
  },
  {
      "alias": "kimonos",
      "title": "Kimonos",
      "parents": [
          "fashion"
      ],
      "country_whitelist": [
          "JP"
      ]
  },
  {
      "alias": "kiosk",
      "title": "Kiosk",
      "parents": [
          "food",
          "shopping"
      ],
      "country_blacklist": [
          "CA",
          "BR",
          "HK",
          "IE",
          "IT",
          "US",
          "GB",
          "NZ",
          "SG",
          "FR"
      ]
  },
  {
      "alias": "kitchenandbath",
      "title": "Kitchen & Bath",
      "parents": [
          "homeandgarden"
      ]
  },
  {
      "alias": "kitchenincubators",
      "title": "Kitchen Incubators",
      "parents": [
          "realestate"
      ],
      "country_whitelist": [
          "US",
          "GB"
      ]
  },
  {
      "alias": "kitchensupplies",
      "title": "Kitchen Supplies",
      "parents": [
          "kitchenandbath"
      ]
  },
  {
      "alias": "kiteboarding",
      "title": "Kiteboarding",
      "parents": [
          "active"
      ],
      "country_blacklist": [
          "IT",
          "HK",
          "CZ"
      ]
  },
  {
      "alias": "knifesharpening",
      "title": "Knife Sharpening",
      "parents": [
          "localservices"
      ]
  },
  {
      "alias": "knittingsupplies",
      "title": "Knitting Supplies",
      "parents": [
          "shopping"
      ]
  },
  {
      "alias": "kombucha",
      "title": "Kombucha",
      "parents": [
          "food"
      ],
      "country_whitelist": [
          "US"
      ]
  },
  {
      "alias": "kopitiam",
      "title": "Kopitiam",
      "parents": [
          "restaurants"
      ],
      "country_whitelist": [
          "MY",
          "SG"
      ]
  },
  {
      "alias": "korean",
      "title": "Korean",
      "parents": [
          "restaurants"
      ]
  },
  {
      "alias": "kosher",
      "title": "Kosher",
      "parents": [
          "restaurants"
      ],
      "country_blacklist": [
          "TR",
          "PT"
      ]
  },
  {
      "alias": "kurdish",
      "title": "Kurdish",
      "parents": [
          "restaurants"
      ],
      "country_whitelist": [
          "SE",
          "NO"
      ]
  },
  {
      "alias": "kushikatsu",
      "title": "Kushikatsu",
      "parents": [
          "japanese"
      ],
      "country_whitelist": [
          "JP"
      ]
  },
  {
      "alias": "laboratorytesting",
      "title": "Laboratory Testing",
      "parents": [
          "diagnosticservices"
      ],
      "country_whitelist": [
          "BR",
          "CA",
          "BE",
          "PT",
          "AR",
          "CZ",
          "PL",
          "CL",
          "IT",
          "US",
          "ES",
          "AU",
          "MX",
          "FR"
      ]
  },
  {
      "alias": "lactationservices",
      "title": "Lactation Services",
      "parents": [
          "health"
      ],
      "country_whitelist": [
          "IT",
          "US",
          "BR",
          "BE",
          "PT",
          "FR"
      ]
  },
  {
      "alias": "lahmacun",
      "title": "Lahmacun",
      "parents": [
          "turkish"
      ],
      "country_whitelist": [
          "TR"
      ]
  },
  {
      "alias": "lakes",
      "title": "Lakes",
      "parents": [
          "active"
      ]
  },
  {
      "alias": "lancenters",
      "title": "LAN Centers",
      "parents": [
          "arts"
      ],
      "country_blacklist": [
          "PH",
          "IT",
          "MY"
      ]
  },
  {
      "alias": "landmarks",
      "title": "Landmarks & Historical Buildings",
      "parents": [
          "publicservicesgovt"
      ]
  },
  {
      "alias": "landscapearchitects",
      "title": "Landscape Architects",
      "parents": [
          "homeservices"
      ]
  },
  {
      "alias": "landscaping",
      "title": "Landscaping",
      "parents": [
          "homeservices"
      ]
  },
  {
      "alias": "landsurveying",
      "title": "Land Surveying",
      "parents": [
          "realestatesvcs"
      ],
      "country_blacklist": [
          "JP"
      ]
  },
  {
      "alias": "language_schools",
      "title": "Language Schools",
      "parents": [
          "specialtyschools"
      ]
  },
  {
      "alias": "laos",
      "title": "Laos",
      "parents": [
          "restaurants"
      ],
      "country_whitelist": [
          "AU"
      ]
  },
  {
      "alias": "laotian",
      "title": "Laotian",
      "parents": [
          "restaurants"
      ],
      "country_blacklist": [
          "CZ"
      ]
  },
  {
      "alias": "laser_hair_removal",
      "title": "Laser Hair Removal",
      "parents": [
          "hairremoval"
      ]
  },
  {
      "alias": "laserlasikeyes",
      "title": "Laser Eye Surgery/Lasik",
      "parents": [
          "health"
      ]
  },
  {
      "alias": "lasertag",
      "title": "Laser Tag",
      "parents": [
          "active"
      ],
      "country_blacklist": [
          "IE",
          "BR"
      ]
  },
  {
      "alias": "latin",
      "title": "Latin American",
      "parents": [
          "restaurants"
      ]
  },
  {
      "alias": "laundromat",
      "title": "Laundromat",
      "parents": [
          "laundryservices"
      ]
  },
  {
      "alias": "laundryservices",
      "title": "Laundry Services",
      "parents": [
          "localservices"
      ]
  },
  {
      "alias": "lawn_bowling",
      "title": "Lawn Bowling",
      "parents": [
          "active"
      ],
      "country_whitelist": [
          "AU",
          "SE",
          "NZ",
          "PT",
          "NO",
          "FI"
      ]
  },
  {
      "alias": "lawnservices",
      "title": "Lawn Services",
      "parents": [
          "landscaping"
      ],
      "country_whitelist": [
          "US",
          "CA",
          "BR",
          "NL",
          "BE"
      ]
  },
  {
      "alias": "lawyers",
      "title": "Lawyers",
      "parents": [
          "professional"
      ]
  },
  {
      "alias": "leather",
      "title": "Leather Goods",
      "parents": [
          "fashion"
      ]
  },
  {
      "alias": "lebanese",
      "title": "Lebanese",
      "parents": [
          "mideastern"
      ],
      "country_blacklist": [
          "HK",
          "JP",
          "AR"
      ]
  },
  {
      "alias": "legalservices",
      "title": "Legal Services",
      "parents": [
          "professional"
      ],
      "country_blacklist": [
          "AT",
          "HK",
          "SE",
          "CH",
          "AR",
          "CL",
          "DE",
          "IE",
          "PH",
          "TW",
          "GB",
          "ES",
          "MX",
          "MY",
          "FI"
      ]
  },
  {
      "alias": "libraries",
      "title": "Libraries",
      "parents": [
          "publicservicesgovt"
      ]
  },
  {
      "alias": "liceservices",
      "title": "Lice Services",
      "parents": [
          "health"
      ],
      "country_blacklist": [
          "HK",
          "AR",
          "CZ",
          "CL",
          "DE",
          "JP",
          "MX",
          "FI"
      ]
  },
  {
      "alias": "lifecoach",
      "title": "Life Coach",
      "parents": [
          "professional"
      ]
  },
  {
      "alias": "lifeinsurance",
      "title": "Life Insurance",
      "parents": [
          "insurance"
      ],
      "country_blacklist": [
          "CA",
          "AT",
          "HK",
          "CH",
          "PT",
          "DE",
          "PH",
          "TW",
          "FI",
          "MY",
          "FR"
      ]
  },
  {
      "alias": "lighting",
      "title": "Lighting Fixtures & Equipment",
      "parents": [
          "homeservices"
      ]
  },
  {
      "alias": "lightingstores",
      "title": "Lighting Stores",
      "parents": [
          "homeandgarden"
      ]
  },
  {
      "alias": "ligurian",
      "title": "Ligurian",
      "parents": [
          "italian"
      ],
      "country_whitelist": [
          "IT",
          "FR"
      ]
  },
  {
      "alias": "limos",
      "title": "Limos",
      "parents": [
          "transport"
      ]
  },
  {
      "alias": "linens",
      "title": "Linens",
      "parents": [
          "homeandgarden"
      ],
      "country_whitelist": [
          "BE",
          "AT",
          "CH",
          "PT",
          "CZ",
          "NO",
          "DE",
          "IT",
          "DK",
          "FR"
      ]
  },
  {
      "alias": "lingerie",
      "title": "Lingerie",
      "parents": [
          "fashion"
      ]
  },
  {
      "alias": "livestocksupply",
      "title": "Livestock Feed & Supply",
      "parents": [
          "shopping"
      ]
  },
  {
      "alias": "localfishstores",
      "title": "Local Fish Stores",
      "parents": [
          "petstore"
      ],
      "country_whitelist": [
          "BE",
          "AT",
          "DE",
          "IT",
          "PH",
          "US",
          "IE",
          "DK",
          "NZ",
          "MY",
          "CA",
          "NL",
          "SE",
          "CH",
          "CZ",
          "NO",
          "PL",
          "GB",
          "ES",
          "JP",
          "AU",
          "SG",
          "FR"
      ]
  },
  {
      "alias": "localflavor",
      "title": "Local Flavor",
      "parents": []
  },
  {
      "alias": "localservices",
      "title": "Local Services",
      "parents": []
  },
  {
      "alias": "locksmiths",
      "title": "Keys & Locksmiths",
      "parents": [
          "homeservices"
      ]
  },
  {
      "alias": "lounges",
      "title": "Lounges",
      "parents": [
          "bars"
      ]
  },
  {
      "alias": "luggage",
      "title": "Luggage",
      "parents": [
          "shopping"
      ]
  },
  {
      "alias": "luggagestorage",
      "title": "Luggage Storage",
      "parents": [
          "travelservices"
      ]
  },
  {
      "alias": "lumbard",
      "title": "Lumbard",
      "parents": [
          "italian"
      ],
      "country_whitelist": [
          "IT"
      ]
  },
  {
      "alias": "lyonnais",
      "title": "Lyonnais",
      "parents": [
          "restaurants"
      ],
      "country_whitelist": [
          "FR",
          "BE"
      ]
  },
  {
      "alias": "macarons",
      "title": "Macarons",
      "parents": [
          "gourmet"
      ],
      "country_blacklist": [
          "PH",
          "IT",
          "MY"
      ]
  },
  {
      "alias": "machinerental",
      "title": "Machine & Tool Rental",
      "parents": [
          "localservices"
      ]
  },
  {
      "alias": "machineshops",
      "title": "Machine Shops",
      "parents": [
          "localservices"
      ],
      "country_whitelist": [
          "US"
      ]
  },
  {
      "alias": "madeira",
      "title": "Madeira",
      "parents": [
          "portuguese"
      ],
      "country_whitelist": [
          "PT"
      ]
  },
  {
      "alias": "magicians",
      "title": "Magicians",
      "parents": [
          "eventservices"
      ],
      "country_blacklist": [
          "SE",
          "TR",
          "SG",
          "FI"
      ]
  },
  {
      "alias": "mags",
      "title": "Newspapers & Magazines",
      "parents": [
          "media"
      ]
  },
  {
      "alias": "mahjong",
      "title": "Mah Jong Halls",
      "parents": [
          "arts"
      ],
      "country_whitelist": [
          "HK",
          "JP"
      ]
  },
  {
      "alias": "mailboxcenters",
      "title": "Mailbox Centers",
      "parents": [
          "localservices"
      ],
      "country_whitelist": [
          "US"
      ]
  },
  {
      "alias": "makerspaces",
      "title": "Makerspaces",
      "parents": [
          "arts"
      ],
      "country_blacklist": [
          "IT"
      ]
  },
  {
      "alias": "makeupartists",
      "title": "Makeup Artists",
      "parents": [
          "beautysvc"
      ]
  },
  {
      "alias": "malaysian",
      "title": "Malaysian",
      "parents": [
          "restaurants"
      ],
      "country_blacklist": [
          "ES",
          "TR",
          "CZ",
          "PT"
      ]
  },
  {
      "alias": "mamak",
      "title": "Mamak",
      "parents": [
          "malaysian"
      ],
      "country_whitelist": [
          "AU",
          "MY"
      ]
  },
  {
      "alias": "marchingbands",
      "title": "Marching Bands",
      "parents": [
          "arts"
      ],
      "country_whitelist": [
          "AT",
          "SE",
          "CH",
          "PT",
          "NO",
          "DE",
          "GB",
          "TR"
      ]
  },
  {
      "alias": "marinas",
      "title": "Marinas",
      "parents": [
          "auto"
      ],
      "country_whitelist": [
          "BR",
          "BE",
          "AT",
          "AR",
          "DE",
          "CL",
          "IT",
          "IE",
          "US",
          "TR",
          "DK",
          "NZ",
          "MX",
          "CA",
          "NL",
          "SE",
          "CH",
          "NO",
          "GB",
          "ES",
          "AU",
          "SG",
          "FR"
      ]
  },
  {
      "alias": "marketing",
      "title": "Marketing",
      "parents": [
          "professional"
      ]
  },
  {
      "alias": "markets",
      "title": "Fruits & Veggies",
      "parents": [
          "gourmet"
      ]
  },
  {
      "alias": "marketstalls",
      "title": "Market Stalls",
      "parents": [
          "shopping"
      ],
      "country_whitelist": [
          "AT",
          "CH",
          "PT",
          "CZ",
          "PL",
          "NO",
          "DE",
          "IE",
          "IT",
          "GB",
          "DK"
      ]
  },
  {
      "alias": "martialarts",
      "title": "Martial Arts",
      "parents": [
          "fitness"
      ]
  },
  {
      "alias": "masonry_concrete",
      "title": "Masonry/Concrete",
      "parents": [
          "homeservices"
      ],
      "country_blacklist": [
          "IE",
          "BR",
          "GB",
          "NL",
          "BE",
          "NZ",
          "SG"
      ]
  },
  {
      "alias": "massage",
      "title": "Massage",
      "parents": [
          "beautysvc"
      ]
  },
  {
      "alias": "massage_schools",
      "title": "Massage Schools",
      "parents": [
          "specialtyschools"
      ]
  },
  {
      "alias": "massage_therapy",
      "title": "Massage Therapy",
      "parents": [
          "health"
      ],
      "country_blacklist": [
          "AT",
          "HK",
          "DE",
          "IE",
          "PH",
          "TW",
          "TR",
          "NZ",
          "MY",
          "FI",
          "SE",
          "CH",
          "CZ",
          "PL",
          "SG",
          "FR"
      ]
  },
  {
      "alias": "massmedia",
      "title": "Mass Media",
      "parents": []
  },
  {
      "alias": "matchmakers",
      "title": "Matchmakers",
      "parents": [
          "professional"
      ],
      "country_whitelist": [
          "CA",
          "CH",
          "PT",
          "AR",
          "PL",
          "NO",
          "CL",
          "DE",
          "US",
          "ES",
          "JP",
          "AU",
          "DK",
          "MX",
          "FR"
      ]
  },
  {
      "alias": "materialeelettrico",
      "title": "Materiale elettrico",
      "parents": [
          "homeandgarden"
      ],
      "country_whitelist": [
          "CL",
          "IT",
          "ES",
          "MX",
          "AR"
      ]
  },
  {
      "alias": "maternity",
      "title": "Maternity Wear",
      "parents": [
          "fashion"
      ]
  },
  {
      "alias": "mattresses",
      "title": "Mattresses",
      "parents": [
          "homeandgarden"
      ]
  },
  {
      "alias": "mauritius",
      "title": "Mauritius",
      "parents": [
          "french"
      ],
      "country_blacklist": [
          "BR",
          "AT",
          "CH",
          "AR",
          "PL",
          "NO",
          "CL",
          "DE",
          "TR",
          "JP",
          "AU",
          "DK",
          "MX",
          "NZ"
      ]
  },
  {
      "alias": "meaderies",
      "title": "Meaderies",
      "parents": [
          "food"
      ],
      "country_whitelist": [
          "AT",
          "CH",
          "AR",
          "PL",
          "CL",
          "DE",
          "US",
          "ES",
          "MX"
      ]
  },
  {
      "alias": "meatballs",
      "title": "Meatballs",
      "parents": [
          "restaurants"
      ],
      "country_whitelist": [
          "NL",
          "TR",
          "FR",
          "BE"
      ]
  },
  {
      "alias": "meats",
      "title": "Meat Shops",
      "parents": [
          "gourmet"
      ]
  },
  {
      "alias": "medcenters",
      "title": "Medical Centers",
      "parents": [
          "health"
      ]
  },
  {
      "alias": "media",
      "title": "Books, Mags, Music & Video",
      "parents": [
          "shopping"
      ]
  },
  {
      "alias": "mediators",
      "title": "Mediators",
      "parents": [
          "professional"
      ],
      "country_whitelist": [
          "CA",
          "NL",
          "BE",
          "AT",
          "CH",
          "IE",
          "DE",
          "IT",
          "US",
          "GB",
          "AU",
          "NZ",
          "SG"
      ]
  },
  {
      "alias": "medicalfoot",
      "title": "Medical Foot Care",
      "parents": [
          "health"
      ],
      "country_blacklist": [
          "BR",
          "AT",
          "PT",
          "AR",
          "CL",
          "IT",
          "PH",
          "US",
          "TR",
          "MX",
          "MY",
          "FI",
          "CZ",
          "PL",
          "ES",
          "JP"
      ]
  },
  {
      "alias": "medicallaw",
      "title": "Medical Law",
      "parents": [
          "lawyers"
      ]
  },
  {
      "alias": "medicalspa",
      "title": "Medical Spas",
      "parents": [
          "beautysvc",
          "health"
      ]
  },
  {
      "alias": "medicalsupplies",
      "title": "Medical Supplies",
      "parents": [
          "shopping"
      ]
  },
  {
      "alias": "medicaltransportation",
      "title": "Medical Transportation",
      "parents": [
          "health"
      ],
      "country_whitelist": [
          "BR",
          "NL",
          "BE",
          "AT",
          "CH",
          "PT",
          "NO",
          "DE",
          "IT",
          "US",
          "AU",
          "DK",
          "SG",
          "FR"
      ]
  },
  {
      "alias": "meditationcenters",
      "title": "Meditation Centers",
      "parents": [
          "fitness"
      ]
  },
  {
      "alias": "mediterranean",
      "title": "Mediterranean",
      "parents": [
          "restaurants"
      ]
  },
  {
      "alias": "memorycare",
      "title": "Memory Care",
      "parents": [
          "health"
      ]
  },
  {
      "alias": "menscloth",
      "title": "Men's Clothing",
      "parents": [
          "fashion"
      ]
  },
  {
      "alias": "menshair",
      "title": "Men's Hair Salons",
      "parents": [
          "hair"
      ],
      "country_whitelist": [
          "NL",
          "BE",
          "PT",
          "AR",
          "CZ",
          "NO",
          "CL",
          "US",
          "ES",
          "AU",
          "DK",
          "MX"
      ]
  },
  {
      "alias": "metaldetectorservices",
      "title": "Metal Detector Services",
      "parents": [
          "localservices"
      ]
  },
  {
      "alias": "metalfabricators",
      "title": "Metal Fabricators",
      "parents": [
          "localservices"
      ],
      "country_blacklist": [
          "SE",
          "MX",
          "AR"
      ]
  },
  {
      "alias": "metrostations",
      "title": "Metro Stations",
      "parents": [
          "transport"
      ]
  },
  {
      "alias": "mexican",
      "title": "Mexican",
      "parents": [
          "restaurants"
      ]
  },
  {
      "alias": "mideastern",
      "title": "Middle Eastern",
      "parents": [
          "restaurants"
      ],
      "country_blacklist": [
          "BR"
      ]
  },
  {
      "alias": "midwives",
      "title": "Midwives",
      "parents": [
          "health"
      ]
  },
  {
      "alias": "militarysurplus",
      "title": "Military Surplus",
      "parents": [
          "shopping"
      ]
  },
  {
      "alias": "milkbars",
      "title": "Milk Bars",
      "parents": [
          "restaurants"
      ],
      "country_whitelist": [
          "AU",
          "PL"
      ]
  },
  {
      "alias": "milkshakebars",
      "title": "Milkshake Bars",
      "parents": [
          "food"
      ],
      "country_whitelist": [
          "GB"
      ]
  },
  {
      "alias": "minho",
      "title": "Minho",
      "parents": [
          "portuguese"
      ],
      "country_whitelist": [
          "PT"
      ]
  },
  {
      "alias": "mini_golf",
      "title": "Mini Golf",
      "parents": [
          "active"
      ],
      "country_blacklist": [
          "IT"
      ]
  },
  {
      "alias": "mistingsystemservices",
      "title": "Misting System Services",
      "parents": [
          "localservices"
      ],
      "country_whitelist": [
          "US"
      ]
  },
  {
      "alias": "mobile_home_repair",
      "title": "Mobile Home Repair",
      "parents": [
          "homeservices"
      ],
      "country_whitelist": [
          "US",
          "CA",
          "NL",
          "BE",
          "SE"
      ]
  },
  {
      "alias": "mobiledentrepair",
      "title": "Mobile Dent Repair",
      "parents": [
          "auto"
      ],
      "country_whitelist": [
          "US",
          "CA"
      ]
  },
  {
      "alias": "mobilehomes",
      "title": "Mobile Home Dealers",
      "parents": [
          "realestate"
      ],
      "country_blacklist": [
          "CZ"
      ]
  },
  {
      "alias": "mobileparks",
      "title": "Mobile Home Parks",
      "parents": [
          "realestate"
      ],
      "country_whitelist": [
          "US"
      ]
  },
  {
      "alias": "mobilephonerepair",
      "title": "Mobile Phone Repair",
      "parents": [
          "itservices"
      ]
  },
  {
      "alias": "mobilephones",
      "title": "Mobile Phones",
      "parents": [
          "shopping"
      ]
  },
  {
      "alias": "mobilityequipment",
      "title": "Mobility Equipment Sales & Services",
      "parents": [
          "auto"
      ],
      "country_whitelist": [
          "US",
          "CA"
      ]
  },
  {
      "alias": "modern_australian",
      "title": "Modern Australian",
      "parents": [
          "restaurants"
      ],
      "country_whitelist": [
          "AU"
      ]
  },
  {
      "alias": "modern_european",
      "title": "Modern European",
      "parents": [
          "restaurants"
      ]
  },
  {
      "alias": "mohels",
      "title": "Mohels",
      "parents": [
          "eventservices"
      ],
      "country_whitelist": [
          "US"
      ]
  },
  {
      "alias": "mongolian",
      "title": "Mongolian",
      "parents": [
          "restaurants"
      ],
      "country_blacklist": [
          "ES",
          "TR",
          "PT",
          "FI"
      ]
  },
  {
      "alias": "montessori",
      "title": "Montessori Schools",
      "parents": [
          "education"
      ]
  },
  {
      "alias": "moroccan",
      "title": "Moroccan",
      "parents": [
          "restaurants"
      ],
      "country_blacklist": [
          "TR"
      ]
  },
  {
      "alias": "mortgagebrokers",
      "title": "Mortgage Brokers",
      "parents": [
          "realestate"
      ],
      "country_blacklist": [
          "ES",
          "DK",
          "BR"
      ]
  },
  {
      "alias": "mortgagelenders",
      "title": "Mortgage Lenders",
      "parents": [
          "financialservices"
      ],
      "country_blacklist": [
          "DE",
          "TR",
          "AT",
          "CH",
          "FR"
      ]
  },
  {
      "alias": "mortuaryservices",
      "title": "Mortuary Services",
      "parents": [
          "funeralservices"
      ],
      "country_blacklist": [
          "IT"
      ]
  },
  {
      "alias": "mosques",
      "title": "Mosques",
      "parents": [
          "religiousorgs"
      ]
  },
  {
      "alias": "motodealers",
      "title": "Motorsport Vehicle Dealers",
      "parents": [
          "auto"
      ],
      "country_whitelist": [
          "IT",
          "US",
          "TW",
          "ES",
          "SE"
      ]
  },
  {
      "alias": "motorcycle_rental",
      "title": "Motorcycle Rental",
      "parents": [
          "hotelstravel"
      ],
      "country_whitelist": [
          "BR",
          "PT",
          "CZ",
          "NO",
          "DE",
          "IT",
          "US",
          "ES",
          "AU",
          "FI",
          "MX",
          "NZ",
          "SG",
          "FR"
      ]
  },
  {
      "alias": "motorcycledealers",
      "title": "Motorcycle Dealers",
      "parents": [
          "auto"
      ]
  },
  {
      "alias": "motorcyclepartsandsupplies",
      "title": "Motorcycle Parts & Supplies",
      "parents": [
          "autopartssupplies"
      ]
  },
  {
      "alias": "motorcyclerepair",
      "title": "Motorcycle Repair",
      "parents": [
          "auto"
      ]
  },
  {
      "alias": "motorcyclinggear",
      "title": "Motorcycle Gear",
      "parents": [
          "shopping"
      ],
      "country_blacklist": [
          "IE",
          "CA",
          "GB",
          "NZ"
      ]
  },
  {
      "alias": "motorepairs",
      "title": "Motorsport Vehicle Repairs",
      "parents": [
          "auto"
      ],
      "country_whitelist": [
          "IT",
          "US",
          "TW",
          "ES",
          "SE"
      ]
  },
  {
      "alias": "mountainbiking",
      "title": "Mountain Biking",
      "parents": [
          "active"
      ]
  },
  {
      "alias": "mountainhuts",
      "title": "Mountain Huts",
      "parents": [
          "hotels"
      ],
      "country_whitelist": [
          "AT",
          "SE",
          "CH",
          "AR",
          "CZ",
          "PL",
          "NO",
          "CL",
          "DE",
          "IT",
          "US",
          "ES",
          "NZ",
          "FR"
      ]
  },
  {
      "alias": "movers",
      "title": "Movers",
      "parents": [
          "homeservices"
      ]
  },
  {
      "alias": "movietheaters",
      "title": "Cinema",
      "parents": [
          "arts"
      ]
  },
  {
      "alias": "muaythai",
      "title": "Muay Thai",
      "parents": [
          "martialarts"
      ]
  },
  {
      "alias": "municipality",
      "title": "Municipality",
      "parents": [
          "publicservicesgovt"
      ],
      "country_whitelist": [
          "US"
      ]
  },
  {
      "alias": "museums",
      "title": "Museums",
      "parents": [
          "arts"
      ]
  },
  {
      "alias": "musicalinstrumentsandteachers",
      "title": "Musical Instruments & Teachers",
      "parents": [
          "shopping"
      ]
  },
  {
      "alias": "musicians",
      "title": "Musicians",
      "parents": [
          "eventservices"
      ],
      "country_blacklist": [
          "TR"
      ]
  },
  {
      "alias": "musicinstrumentservices",
      "title": "Musical Instrument Services",
      "parents": [
          "localservices"
      ]
  },
  {
      "alias": "musicproduction",
      "title": "Music Production Services",
      "parents": [
          "professional"
      ]
  },
  {
      "alias": "musicvenues",
      "title": "Music Venues",
      "parents": [
          "nightlife",
          "arts"
      ]
  },
  {
      "alias": "musicvideo",
      "title": "Music & DVDs",
      "parents": [
          "media"
      ]
  },
  {
      "alias": "mystics",
      "title": "Mystics",
      "parents": [
          "psychic_astrology"
      ],
      "country_blacklist": [
          "FR"
      ]
  },
  {
      "alias": "nailtechnicians",
      "title": "Nail Technicians",
      "parents": [
          "othersalons"
      ],
      "country_blacklist": [
          "DE",
          "BR",
          "TR",
          "JP",
          "AT",
          "CH",
          "FR"
      ]
  },
  {
      "alias": "nannys",
      "title": "Nanny Services",
      "parents": [
          "localservices"
      ],
      "country_blacklist": [
          "SE",
          "FI"
      ]
  },
  {
      "alias": "napoletana",
      "title": "Napoletana",
      "parents": [
          "italian"
      ],
      "country_whitelist": [
          "IT",
          "CZ",
          "FR"
      ]
  },
  {
      "alias": "nasilemak",
      "title": "Nasi Lemak",
      "parents": [
          "food"
      ],
      "country_whitelist": [
          "MY",
          "SG"
      ]
  },
  {
      "alias": "naturalgassuppliers",
      "title": "Natural Gas Suppliers",
      "parents": [
          "utilities"
      ]
  },
  {
      "alias": "naturopathic",
      "title": "Naturopathic/Holistic",
      "parents": [
          "physicians"
      ]
  },
  {
      "alias": "nephrologists",
      "title": "Nephrologists",
      "parents": [
          "physicians"
      ],
      "country_blacklist": [
          "DE",
          "AT",
          "CH"
      ]
  },
  {
      "alias": "neurologist",
      "title": "Neurologist",
      "parents": [
          "physicians"
      ]
  },
  {
      "alias": "neuropathologists",
      "title": "Neuropathologists",
      "parents": [
          "physicians"
      ]
  },
  {
      "alias": "neurotologists",
      "title": "Neurotologists",
      "parents": [
          "physicians"
      ],
      "country_blacklist": [
          "JP"
      ]
  },
  {
      "alias": "newamerican",
      "title": "American (New)",
      "parents": [
          "restaurants"
      ],
      "country_whitelist": [
          "IE",
          "US",
          "GB",
          "SE",
          "DK",
          "NO"
      ]
  },
  {
      "alias": "newcanadian",
      "title": "Canadian (New)",
      "parents": [
          "restaurants"
      ],
      "country_whitelist": [
          "CA"
      ]
  },
  {
      "alias": "newmexican",
      "title": "New Mexican Cuisine",
      "parents": [
          "restaurants"
      ],
      "country_whitelist": [
          "US"
      ]
  },
  {
      "alias": "newzealand",
      "title": "New Zealand",
      "parents": [
          "restaurants"
      ],
      "country_whitelist": [
          "NZ"
      ]
  },
  {
      "alias": "nicaraguan",
      "title": "Nicaraguan",
      "parents": [
          "restaurants"
      ],
      "country_blacklist": [
          "CL",
          "AR"
      ]
  },
  {
      "alias": "nicois",
      "title": "Nicoise",
      "parents": [
          "french"
      ],
      "country_whitelist": [
          "FR"
      ]
  },
  {
      "alias": "nightfood",
      "title": "Night Food",
      "parents": [
          "restaurants"
      ],
      "country_whitelist": [
          "NO",
          "TR",
          "SE",
          "DK",
          "PL"
      ]
  },
  {
      "alias": "nightlife",
      "title": "Nightlife",
      "parents": []
  },
  {
      "alias": "nikkei",
      "title": "Nikkei",
      "parents": [
          "restaurants"
      ],
      "country_whitelist": [
          "CL",
          "BR",
          "ES",
          "MX",
          "AR"
      ]
  },
  {
      "alias": "nonprofit",
      "title": "Community Service/Non-Profit",
      "parents": [
          "localservices"
      ]
  },
  {
      "alias": "noodles",
      "title": "Noodles",
      "parents": [
          "restaurants"
      ],
      "country_blacklist": [
          "DE",
          "AT",
          "CH",
          "FR"
      ]
  },
  {
      "alias": "norcinerie",
      "title": "Norcinerie",
      "parents": [
          "restaurants"
      ],
      "country_whitelist": [
          "IT"
      ]
  },
  {
      "alias": "northeasternbrazilian",
      "title": "Northeastern Brazilian",
      "parents": [
          "brazilian"
      ],
      "country_whitelist": [
          "BR"
      ]
  },
  {
      "alias": "northernbrazilian",
      "title": "Northern Brazilian",
      "parents": [
          "brazilian"
      ],
      "country_whitelist": [
          "BR"
      ]
  },
  {
      "alias": "northerngerman",
      "title": "Northern German",
      "parents": [
          "german"
      ],
      "country_whitelist": [
          "DE"
      ]
  },
  {
      "alias": "northernmexican",
      "title": "Northern Mexican",
      "parents": [
          "mexican"
      ],
      "country_whitelist": [
          "MX"
      ]
  },
  {
      "alias": "norwegian",
      "title": "Traditional Norwegian",
      "parents": [
          "restaurants"
      ],
      "country_whitelist": [
          "NO",
          "FR"
      ]
  },
  {
      "alias": "notaries",
      "title": "Notaries",
      "parents": [
          "localservices"
      ],
      "country_blacklist": [
          "NO"
      ]
  },
  {
      "alias": "nudist",
      "title": "Nudist",
      "parents": [
          "active"
      ],
      "country_whitelist": [
          "BR",
          "BE",
          "AT",
          "PT",
          "DE",
          "IE",
          "US",
          "DK",
          "NZ",
          "FI",
          "CA",
          "NL",
          "SE",
          "CH",
          "CZ",
          "PL",
          "NO",
          "GB",
          "ES",
          "AU",
          "FR"
      ]
  },
  {
      "alias": "nursepractitioner",
      "title": "Nurse Practitioner",
      "parents": [
          "health"
      ]
  },
  {
      "alias": "nursingschools",
      "title": "Nursing Schools",
      "parents": [
          "specialtyschools"
      ]
  },
  {
      "alias": "nutritionists",
      "title": "Nutritionists",
      "parents": [
          "health"
      ]
  },
  {
      "alias": "nyonya",
      "title": "Nyonya",
      "parents": [
          "malaysian"
      ],
      "country_whitelist": [
          "AU",
          "MY"
      ]
  },
  {
      "alias": "oaxacan",
      "title": "Oaxacan",
      "parents": [
          "mexican"
      ],
      "country_whitelist": [
          "MX"
      ]
  },
  {
      "alias": "obgyn",
      "title": "Obstetricians & Gynecologists",
      "parents": [
          "physicians"
      ]
  },
  {
      "alias": "observatories",
      "title": "Observatories",
      "parents": [
          "arts"
      ]
  },
  {
      "alias": "occupationaltherapy",
      "title": "Occupational Therapy",
      "parents": [
          "health"
      ],
      "country_blacklist": [
          "AT",
          "HK",
          "PH",
          "IT",
          "TW",
          "TR",
          "NZ",
          "MY",
          "FI",
          "SE",
          "CH",
          "CZ",
          "PL",
          "JP",
          "SG",
          "FR"
      ]
  },
  {
      "alias": "oden",
      "title": "Oden",
      "parents": [
          "japanese"
      ],
      "country_whitelist": [
          "JP",
          "TW"
      ]
  },
  {
      "alias": "officecleaning",
      "title": "Office Cleaning",
      "parents": [
          "professional"
      ]
  },
  {
      "alias": "officeequipment",
      "title": "Office Equipment",
      "parents": [
          "shopping"
      ]
  },
  {
      "alias": "officiants",
      "title": "Officiants",
      "parents": [
          "eventservices"
      ]
  },
  {
      "alias": "oilchange",
      "title": "Oil Change Stations",
      "parents": [
          "auto"
      ],
      "country_blacklist": [
          "DE",
          "AT",
          "SE",
          "CH"
      ]
  },
  {
      "alias": "okinawan",
      "title": "Okinawan",
      "parents": [
          "japanese"
      ],
      "country_whitelist": [
          "JP"
      ]
  },
  {
      "alias": "okonomiyaki",
      "title": "Okonomiyaki",
      "parents": [
          "japanese"
      ],
      "country_whitelist": [
          "JP",
          "TW"
      ]
  },
  {
      "alias": "oliveoil",
      "title": "Olive Oil",
      "parents": [
          "gourmet"
      ],
      "country_whitelist": [
          "DE",
          "US",
          "ES",
          "BE",
          "AT",
          "FR"
      ]
  },
  {
      "alias": "oncologist",
      "title": "Oncologist",
      "parents": [
          "physicians"
      ]
  },
  {
      "alias": "onigiri",
      "title": "Onigiri",
      "parents": [
          "japanese"
      ],
      "country_whitelist": [
          "JP",
          "TW"
      ]
  },
  {
      "alias": "opensandwiches",
      "title": "Open Sandwiches",
      "parents": [
          "restaurants"
      ],
      "country_whitelist": [
          "SE",
          "TR",
          "DK",
          "NO"
      ]
  },
  {
      "alias": "opera",
      "title": "Opera & Ballet",
      "parents": [
          "arts"
      ]
  },
  {
      "alias": "opthamalogists",
      "title": "Ophthalmologists",
      "parents": [
          "physicians"
      ]
  },
  {
      "alias": "opticians",
      "title": "Eyewear & Opticians",
      "parents": [
          "shopping"
      ]
  },
  {
      "alias": "optometrists",
      "title": "Optometrists",
      "parents": [
          "health"
      ],
      "country_blacklist": [
          "DE",
          "AT",
          "CH"
      ]
  },
  {
      "alias": "oralsurgeons",
      "title": "Oral Surgeons",
      "parents": [
          "dentists"
      ]
  },
  {
      "alias": "organdonorservices",
      "title": "Organ & Tissue Donor Services",
      "parents": [
          "health"
      ],
      "country_whitelist": [
          "US"
      ]
  },
  {
      "alias": "organic_stores",
      "title": "Organic Stores",
      "parents": [
          "food"
      ]
  },
  {
      "alias": "oriental",
      "title": "Oriental",
      "parents": [
          "restaurants"
      ],
      "country_whitelist": [
          "DE",
          "AT",
          "CH",
          "PT",
          "PL",
          "FR"
      ]
  },
  {
      "alias": "orthodontists",
      "title": "Orthodontists",
      "parents": [
          "dentists"
      ]
  },
  {
      "alias": "orthopedists",
      "title": "Orthopedists",
      "parents": [
          "physicians"
      ]
  },
  {
      "alias": "orthotics",
      "title": "Orthotics",
      "parents": [
          "health"
      ],
      "country_whitelist": [
          "BR",
          "CZ",
          "NO",
          "IE",
          "IT",
          "US",
          "GB",
          "ES",
          "AU",
          "FI",
          "DK",
          "NZ",
          "SG",
          "FR"
      ]
  },
  {
      "alias": "osteopathicphysicians",
      "title": "Osteopathic Physicians",
      "parents": [
          "physicians"
      ]
  },
  {
      "alias": "osteopaths",
      "title": "Osteopaths",
      "parents": [
          "medcenters"
      ],
      "country_whitelist": [
          "AU"
      ]
  },
  {
      "alias": "othersalons",
      "title": "Nail Salons",
      "parents": [
          "beautysvc"
      ]
  },
  {
      "alias": "otologists",
      "title": "Otologists",
      "parents": [
          "physicians"
      ],
      "country_blacklist": [
          "DE",
          "AT",
          "CH",
          "FR"
      ]
  },
  {
      "alias": "ottomancuisine",
      "title": "Ottoman Cuisine",
      "parents": [
          "turkish"
      ],
      "country_whitelist": [
          "TR"
      ]
  },
  {
      "alias": "outdoorfurniture",
      "title": "Outdoor Furniture Stores",
      "parents": [
          "homeandgarden"
      ]
  },
  {
      "alias": "outdoorgear",
      "title": "Outdoor Gear",
      "parents": [
          "sportgoods"
      ]
  },
  {
      "alias": "outdoormovies",
      "title": "Outdoor Movies",
      "parents": [
          "movietheaters"
      ],
      "country_blacklist": [
          "PL"
      ]
  },
  {
      "alias": "outdoorpowerequipmentservices",
      "title": "Outdoor Power Equipment Services",
      "parents": [
          "localservices"
      ],
      "country_whitelist": [
          "CA",
          "BR",
          "AT",
          "CH",
          "PT",
          "PL",
          "NO",
          "DE",
          "PH",
          "US",
          "DK",
          "MY"
      ]
  },
  {
      "alias": "outlet_stores",
      "title": "Outlet Stores",
      "parents": [
          "shopping"
      ]
  },
  {
      "alias": "oxygenbars",
      "title": "Oxygen Bars",
      "parents": [
          "health"
      ],
      "country_whitelist": [
          "US"
      ]
  },
  {
      "alias": "oyakodon",
      "title": "Oyakodon",
      "parents": [
          "donburi"
      ],
      "country_whitelist": [
          "JP"
      ]
  },
  {
      "alias": "pachinko",
      "title": "Pachinko",
      "parents": [
          "arts"
      ],
      "country_whitelist": [
          "JP"
      ]
  },
  {
      "alias": "packingservices",
      "title": "Packing Services",
      "parents": [
          "homeservices"
      ],
      "country_whitelist": [
          "CA",
          "BE",
          "HK",
          "CZ",
          "PL",
          "PH",
          "US",
          "TW",
          "MY",
          "SG",
          "FR"
      ]
  },
  {
      "alias": "packingsupplies",
      "title": "Packing Supplies",
      "parents": [
          "shopping"
      ],
      "country_whitelist": [
          "BR",
          "BE",
          "AT",
          "PT",
          "IE",
          "DE",
          "US",
          "DK",
          "NZ",
          "CA",
          "NL",
          "CH",
          "CZ",
          "NO",
          "GB",
          "JP",
          "AU",
          "SG",
          "FR"
      ]
  },
  {
      "alias": "paddleboarding",
      "title": "Paddleboarding",
      "parents": [
          "active"
      ],
      "country_blacklist": [
          "HK",
          "SE",
          "PH",
          "IT",
          "TW",
          "TR",
          "JP",
          "MY"
      ]
  },
  {
      "alias": "painmanagement",
      "title": "Pain Management",
      "parents": [
          "physicians"
      ]
  },
  {
      "alias": "paintandsip",
      "title": "Paint & Sip",
      "parents": [
          "arts"
      ],
      "country_whitelist": [
          "HK",
          "US"
      ]
  },
  {
      "alias": "paintball",
      "title": "Paintball",
      "parents": [
          "active"
      ],
      "country_blacklist": [
          "SG"
      ]
  },
  {
      "alias": "painters",
      "title": "Painters",
      "parents": [
          "homeservices"
      ]
  },
  {
      "alias": "paintstores",
      "title": "Paint Stores",
      "parents": [
          "homeandgarden"
      ],
      "country_blacklist": [
          "PH",
          "TW",
          "TR",
          "HK",
          "PT",
          "MY",
          "FI"
      ]
  },
  {
      "alias": "paintyourownpottery",
      "title": "Paint-Your-Own Pottery",
      "parents": [
          "artsandcrafts"
      ],
      "country_whitelist": [
          "CA",
          "HK",
          "DE",
          "PH",
          "US",
          "TW",
          "MY",
          "SG"
      ]
  },
  {
      "alias": "pakistani",
      "title": "Pakistani",
      "parents": [
          "restaurants"
      ]
  },
  {
      "alias": "palatine",
      "title": "Palatine",
      "parents": [
          "german"
      ],
      "country_whitelist": [
          "DE"
      ]
  },
  {
      "alias": "panasian",
      "title": "Pan Asian",
      "parents": [
          "restaurants"
      ],
      "country_blacklist": [
          "IT"
      ]
  },
  {
      "alias": "pancakes",
      "title": "Pancakes",
      "parents": [
          "breakfast_brunch"
      ]
  },
  {
      "alias": "panzerotti",
      "title": "Panzerotti",
      "parents": [
          "food"
      ],
      "country_whitelist": [
          "IT"
      ]
  },
  {
      "alias": "paragliding",
      "title": "Paragliding",
      "parents": [
          "active"
      ]
  },
  {
      "alias": "parasailing",
      "title": "Parasailing",
      "parents": [
          "active"
      ]
  },
  {
      "alias": "parentingclasses",
      "title": "Parenting Classes",
      "parents": [
          "specialtyschools"
      ]
  },
  {
      "alias": "parking",
      "title": "Parking",
      "parents": [
          "auto"
      ]
  },
  {
      "alias": "parklets",
      "title": "Parklets",
      "parents": [
          "localflavor"
      ],
      "country_whitelist": [
          "US"
      ]
  },
  {
      "alias": "parks",
      "title": "Parks",
      "parents": [
          "active"
      ]
  },
  {
      "alias": "parma",
      "title": "Parma",
      "parents": [
          "restaurants"
      ],
      "country_whitelist": [
          "AU"
      ]
  },
  {
      "alias": "partybikerentals",
      "title": "Party Bike Rentals",
      "parents": [
          "eventservices"
      ],
      "country_whitelist": [
          "DE",
          "IE",
          "US",
          "NL",
          "ES",
          "BE"
      ]
  },
  {
      "alias": "partybusrentals",
      "title": "Party Bus Rentals",
      "parents": [
          "eventservices"
      ],
      "country_blacklist": [
          "CA",
          "HK",
          "PT",
          "CZ",
          "PL",
          "IE",
          "IT",
          "PH",
          "TW",
          "ES",
          "JP",
          "MX",
          "MY",
          "FR"
      ]
  },
  {
      "alias": "partycharacters",
      "title": "Party Characters",
      "parents": [
          "eventservices"
      ]
  },
  {
      "alias": "partyequipmentrentals",
      "title": "Party Equipment Rentals",
      "parents": [
          "eventservices"
      ],
      "country_blacklist": [
          "HK",
          "TW",
          "FI"
      ]
  },
  {
      "alias": "partysupplies",
      "title": "Party Supplies",
      "parents": [
          "eventservices"
      ]
  },
  {
      "alias": "passportvisaservices",
      "title": "Passport & Visa Services",
      "parents": [
          "travelservices"
      ]
  },
  {
      "alias": "pastashops",
      "title": "Pasta Shops",
      "parents": [
          "gourmet"
      ],
      "country_whitelist": [
          "NL",
          "BE",
          "AR",
          "CZ",
          "NO",
          "CL",
          "IE",
          "IT",
          "US",
          "GB",
          "JP",
          "AU",
          "DK",
          "NZ",
          "SG"
      ]
  },
  {
      "alias": "patentlaw",
      "title": "Patent Law",
      "parents": [
          "professional"
      ]
  },
  {
      "alias": "pathologists",
      "title": "Pathologists",
      "parents": [
          "physicians"
      ]
  },
  {
      "alias": "patiocoverings",
      "title": "Patio Coverings",
      "parents": [
          "homeservices"
      ],
      "country_whitelist": [
          "IT",
          "US",
          "CA",
          "BR",
          "NL",
          "BE",
          "PT"
      ]
  },
  {
      "alias": "pawn",
      "title": "Pawn Shops",
      "parents": [
          "shopping"
      ],
      "country_blacklist": [
          "TR",
          "BR"
      ]
  },
  {
      "alias": "paydayloans",
      "title": "Check Cashing/Pay-day Loans",
      "parents": [
          "financialservices"
      ],
      "country_blacklist": [
          "AT",
          "CH",
          "CZ",
          "DE",
          "IT",
          "ES",
          "DK",
          "NZ"
      ]
  },
  {
      "alias": "payroll",
      "title": "Payroll Services",
      "parents": [
          "professional"
      ],
      "country_whitelist": [
          "CA",
          "NL",
          "BE",
          "CZ",
          "IE",
          "US",
          "GB",
          "TR",
          "AU",
          "NZ",
          "SG"
      ]
  },
  {
      "alias": "pediatric_dentists",
      "title": "Pediatric Dentists",
      "parents": [
          "dentists"
      ]
  },
  {
      "alias": "pediatricians",
      "title": "Pediatricians",
      "parents": [
          "physicians"
      ]
  },
  {
      "alias": "pedicabs",
      "title": "Pedicabs",
      "parents": [
          "transport"
      ],
      "country_whitelist": [
          "AT",
          "SE",
          "CH",
          "NO",
          "DE",
          "PH",
          "US",
          "DK",
          "MY"
      ]
  },
  {
      "alias": "pekinese",
      "title": "Pekinese",
      "parents": [
          "chinese"
      ],
      "country_whitelist": [
          "IT",
          "TW",
          "JP",
          "HK",
          "MY",
          "SG",
          "FR"
      ]
  },
  {
      "alias": "pensions",
      "title": "Pensions",
      "parents": [
          "hotels"
      ],
      "country_whitelist": [
          "BR",
          "AT",
          "SE",
          "CZ",
          "NO",
          "DE",
          "ES",
          "JP",
          "DK"
      ]
  },
  {
      "alias": "perfume",
      "title": "Perfume",
      "parents": [
          "beautysvc",
          "shopping"
      ],
      "country_blacklist": [
          "CA",
          "TR",
          "SG",
          "PL",
          "FI"
      ]
  },
  {
      "alias": "periodontists",
      "title": "Periodontists",
      "parents": [
          "dentists"
      ]
  },
  {
      "alias": "permanentmakeup",
      "title": "Permanent Makeup",
      "parents": [
          "beautysvc"
      ],
      "country_blacklist": [
          "SG",
          "NZ",
          "FI"
      ]
  },
  {
      "alias": "persian",
      "title": "Persian/Iranian",
      "parents": [
          "restaurants"
      ]
  },
  {
      "alias": "personal_injury",
      "title": "Personal Injury Law",
      "parents": [
          "lawyers"
      ],
      "country_blacklist": [
          "CZ"
      ]
  },
  {
      "alias": "personal_shopping",
      "title": "Personal Shopping",
      "parents": [
          "shopping"
      ],
      "country_blacklist": [
          "CL",
          "BR",
          "ES",
          "MX",
          "AR",
          "CZ"
      ]
  },
  {
      "alias": "personalassistants",
      "title": "Personal Assistants",
      "parents": [
          "professional"
      ],
      "country_whitelist": [
          "US",
          "CZ",
          "PT"
      ]
  },
  {
      "alias": "personalcare",
      "title": "Personal Care Services",
      "parents": [
          "health"
      ],
      "country_whitelist": [
          "BR",
          "NL",
          "BE",
          "CZ",
          "PL",
          "NO",
          "US",
          "AU",
          "FI",
          "DK",
          "FR"
      ]
  },
  {
      "alias": "personalchefs",
      "title": "Personal Chefs",
      "parents": [
          "eventservices"
      ]
  },
  {
      "alias": "peruvian",
      "title": "Peruvian",
      "parents": [
          "restaurants"
      ],
      "country_blacklist": [
          "TR",
          "SG",
          "PT"
      ]
  },
  {
      "alias": "pest_control",
      "title": "Pest Control",
      "parents": [
          "localservices"
      ]
  },
  {
      "alias": "pet_sitting",
      "title": "Pet Sitting",
      "parents": [
          "petservices"
      ]
  },
  {
      "alias": "pet_training",
      "title": "Pet Training",
      "parents": [
          "petservices"
      ]
  },
  {
      "alias": "petadoption",
      "title": "Pet Adoption",
      "parents": [
          "pets"
      ],
      "country_blacklist": [
          "CL",
          "JP",
          "HK",
          "MX",
          "AR"
      ]
  },
  {
      "alias": "petboarding",
      "title": "Pet Boarding",
      "parents": [
          "pet_sitting"
      ]
  },
  {
      "alias": "petbreeders",
      "title": "Pet Breeders",
      "parents": [
          "petservices"
      ],
      "country_blacklist": [
          "BR",
          "HK",
          "PT",
          "AR",
          "CL",
          "IE",
          "PH",
          "TW",
          "TR",
          "MX",
          "NZ",
          "MY",
          "SG",
          "FI"
      ]
  },
  {
      "alias": "petcremation",
      "title": "Pet Cremation Services",
      "parents": [
          "petservices"
      ]
  },
  {
      "alias": "pethospice",
      "title": "Pet Hospice",
      "parents": [
          "petservices"
      ]
  },
  {
      "alias": "petinsurance",
      "title": "Pet Insurance",
      "parents": [
          "petservices"
      ]
  },
  {
      "alias": "petphotography",
      "title": "Pet Photography",
      "parents": [
          "petservices"
      ]
  },
  {
      "alias": "pets",
      "title": "Pets",
      "parents": []
  },
  {
      "alias": "petservices",
      "title": "Pet Services",
      "parents": [
          "pets"
      ]
  },
  {
      "alias": "petstore",
      "title": "Pet Stores",
      "parents": [
          "pets"
      ]
  },
  {
      "alias": "pettingzoos",
      "title": "Petting Zoos",
      "parents": [
          "zoos"
      ],
      "country_whitelist": [
          "NL",
          "BE",
          "AT",
          "CH",
          "NO",
          "DE",
          "IT",
          "US",
          "GB",
          "ES",
          "DK"
      ]
  },
  {
      "alias": "pettransport",
      "title": "Pet Transportation",
      "parents": [
          "petservices"
      ],
      "country_whitelist": [
          "SE",
          "US"
      ]
  },
  {
      "alias": "petwasteremoval",
      "title": "Pet Waste Removal",
      "parents": [
          "petservices"
      ]
  },
  {
      "alias": "pfcomercial",
      "title": "PF/Comercial",
      "parents": [
          "restaurants"
      ],
      "country_whitelist": [
          "BR"
      ]
  },
  {
      "alias": "pharmacy",
      "title": "Pharmacy",
      "parents": [
          "health"
      ],
      "country_blacklist": [
          "FI"
      ]
  },
  {
      "alias": "phlebologists",
      "title": "Phlebologists",
      "parents": [
          "physicians"
      ]
  },
  {
      "alias": "photoboothrentals",
      "title": "Photo Booth Rentals",
      "parents": [
          "eventservices"
      ],
      "country_blacklist": [
          "HK",
          "JP",
          "FI"
      ]
  },
  {
      "alias": "photoclasses",
      "title": "Photography Classes",
      "parents": [
          "specialtyschools"
      ]
  },
  {
      "alias": "photographers",
      "title": "Photographers",
      "parents": [
          "eventservices"
      ]
  },
  {
      "alias": "photographystores",
      "title": "Photography Stores & Services",
      "parents": [
          "shopping"
      ]
  },
  {
      "alias": "physicaltherapy",
      "title": "Physical Therapy",
      "parents": [
          "health"
      ]
  },
  {
      "alias": "physicians",
      "title": "Doctors",
      "parents": [
          "health"
      ]
  },
  {
      "alias": "piadina",
      "title": "Piadina",
      "parents": [
          "food"
      ],
      "country_whitelist": [
          "IT",
          "US"
      ]
  },
  {
      "alias": "pianobars",
      "title": "Piano Bars",
      "parents": [
          "nightlife"
      ],
      "country_blacklist": [
          "BR",
          "AT",
          "CH",
          "PL",
          "IE",
          "ES",
          "AU",
          "NZ",
          "SG",
          "FI"
      ]
  },
  {
      "alias": "pianoservices",
      "title": "Piano Services",
      "parents": [
          "musicinstrumentservices"
      ]
  },
  {
      "alias": "pianostores",
      "title": "Piano Stores",
      "parents": [
          "musicinstrumentservices"
      ]
  },
  {
      "alias": "pickleball",
      "title": "Pickleball",
      "parents": [
          "active"
      ],
      "country_whitelist": [
          "DE",
          "US",
          "AT",
          "CH",
          "PL"
      ]
  },
  {
      "alias": "pickyourown",
      "title": "Pick Your Own Farms",
      "parents": [
          "farms"
      ],
      "country_whitelist": [
          "AT",
          "CH",
          "CZ",
          "NO",
          "DE",
          "US",
          "JP",
          "DK",
          "FR"
      ]
  },
  {
      "alias": "piemonte",
      "title": "Piemonte",
      "parents": [
          "italian"
      ],
      "country_whitelist": [
          "IT",
          "FR"
      ]
  },
  {
      "alias": "piercing",
      "title": "Piercing",
      "parents": [
          "beautysvc"
      ]
  },
  {
      "alias": "pierogis",
      "title": "Pierogis",
      "parents": [
          "polish"
      ],
      "country_whitelist": [
          "PL"
      ]
  },
  {
      "alias": "pilates",
      "title": "Pilates",
      "parents": [
          "fitness"
      ]
  },
  {
      "alias": "pita",
      "title": "Pita",
      "parents": [
          "restaurants"
      ],
      "country_whitelist": [
          "TR"
      ]
  },
  {
      "alias": "pizza",
      "title": "Pizza",
      "parents": [
          "restaurants"
      ]
  },
  {
      "alias": "placentaencapsulation",
      "title": "Placenta Encapsulations",
      "parents": [
          "health"
      ],
      "country_blacklist": [
          "DE",
          "TR",
          "AT",
          "CH",
          "CZ",
          "PL",
          "FR"
      ]
  },
  {
      "alias": "planetarium",
      "title": "Planetarium",
      "parents": [
          "arts"
      ]
  },
  {
      "alias": "plasticsurgeons",
      "title": "Plastic Surgeons",
      "parents": [
          "physicians"
      ],
      "country_blacklist": [
          "CL",
          "ES",
          "MX",
          "AR"
      ]
  },
  {
      "alias": "playgrounds",
      "title": "Playgrounds",
      "parents": [
          "active"
      ]
  },
  {
      "alias": "playsets",
      "title": "Playsets",
      "parents": [
          "homeandgarden"
      ]
  },
  {
      "alias": "plumbing",
      "title": "Plumbing",
      "parents": [
          "homeservices"
      ]
  },
  {
      "alias": "plus_size_fashion",
      "title": "Plus Size Fashion",
      "parents": [
          "fashion"
      ],
      "country_blacklist": [
          "CA",
          "HK",
          "AR",
          "PL",
          "CL",
          "IE",
          "GB",
          "TR",
          "JP",
          "MX",
          "SG"
      ]
  },
  {
      "alias": "podiatrists",
      "title": "Podiatrists",
      "parents": [
          "physicians"
      ],
      "country_blacklist": [
          "FR"
      ]
  },
  {
      "alias": "poke",
      "title": "Poke",
      "parents": [
          "food"
      ],
      "country_whitelist": [
          false,
          "BR",
          "BE",
          "AT",
          "PT",
          "DE",
          "IE",
          "PH",
          "US",
          "DK",
          "NZ",
          "MY",
          "CA",
          "NL",
          "SE",
          "CH",
          "PL",
          "GB",
          "AU",
          "SG",
          "FR"
      ]
  },
  {
      "alias": "poledancingclasses",
      "title": "Pole Dancing Classes",
      "parents": [
          "specialtyschools"
      ],
      "country_blacklist": [
          "CA",
          "BE",
          "AT",
          "CH",
          "PT",
          "AR",
          "PL",
          "CL",
          "IE",
          "GB",
          "ES",
          "TR",
          "MX"
      ]
  },
  {
      "alias": "policedepartments",
      "title": "Police Departments",
      "parents": [
          "publicservicesgovt"
      ]
  },
  {
      "alias": "polish",
      "title": "Polish",
      "parents": [
          "restaurants"
      ],
      "country_blacklist": [
          "SG",
          "FI"
      ]
  },
  {
      "alias": "polynesian",
      "title": "Polynesian",
      "parents": [
          "restaurants"
      ],
      "country_whitelist": [
          "US"
      ]
  },
  {
      "alias": "poolbilliards",
      "title": "Pool & Billiards",
      "parents": [
          "shopping"
      ],
      "country_blacklist": [
          "AT",
          "SE",
          "CH",
          "AR",
          "CZ",
          "PL",
          "NO",
          "CL",
          "DE",
          "ES",
          "MX",
          "FI"
      ]
  },
  {
      "alias": "poolcleaners",
      "title": "Pool Cleaners",
      "parents": [
          "homeservices"
      ],
      "country_blacklist": [
          "DK",
          "NO"
      ]
  },
  {
      "alias": "poolhalls",
      "title": "Pool Halls",
      "parents": [
          "nightlife"
      ]
  },
  {
      "alias": "poolservice",
      "title": "Pool & Hot Tub Service",
      "parents": [
          "homeservices"
      ]
  },
  {
      "alias": "popcorn",
      "title": "Popcorn Shops",
      "parents": [
          "gourmet"
      ],
      "country_whitelist": [
          "US",
          "JP",
          "GB"
      ]
  },
  {
      "alias": "popuprestaurants",
      "title": "Pop-Up Restaurants",
      "parents": [
          "restaurants"
      ],
      "country_whitelist": [
          "BE",
          "HK",
          "DE",
          "PH",
          "IE",
          "US",
          "TW",
          "DK",
          "NZ",
          "MY",
          "CA",
          "NL",
          "SE",
          "NO",
          "GB",
          "AU",
          "SG",
          "FR"
      ]
  },
  {
      "alias": "popupshops",
      "title": "Pop-up Shops",
      "parents": [
          "shopping"
      ],
      "country_blacklist": [
          "PT"
      ]
  },
  {
      "alias": "portabletoiletservices",
      "title": "Portable Toilet Services",
      "parents": [
          "localservices"
      ],
      "country_blacklist": [
          "HK",
          "AR",
          "CZ",
          "CL",
          "PH",
          "TW",
          "JP",
          "FI",
          "MX",
          "MY",
          "FR"
      ]
  },
  {
      "alias": "portuguese",
      "title": "Portuguese",
      "parents": [
          "restaurants"
      ],
      "country_blacklist": [
          "FI"
      ]
  },
  {
      "alias": "postoffices",
      "title": "Post Offices",
      "parents": [
          "publicservicesgovt"
      ]
  },
  {
      "alias": "postpartumcare",
      "title": "Postpartum Care",
      "parents": [
          "health"
      ],
      "country_whitelist": [
          "TW",
          "JP",
          "HK",
          "MY",
          "PL"
      ]
  },
  {
      "alias": "potatoes",
      "title": "Potatoes",
      "parents": [
          "restaurants"
      ],
      "country_whitelist": [
          "AU",
          "AT",
          "CH",
          "DE"
      ]
  },
  {
      "alias": "poutineries",
      "title": "Poutineries",
      "parents": [
          "restaurants"
      ],
      "country_whitelist": [
          "US",
          "CA"
      ]
  },
  {
      "alias": "powdercoating",
      "title": "Powder Coating",
      "parents": [
          "localservices"
      ],
      "country_whitelist": [
          "US"
      ]
  },
  {
      "alias": "prenatal",
      "title": "Prenatal/Perinatal Care",
      "parents": [
          "health"
      ],
      "country_blacklist": [
          "CA",
          "AT",
          "HK",
          "CH",
          "PL",
          "DE",
          "IE",
          "PH",
          "TW",
          "GB",
          "TR",
          "JP",
          "MY",
          "SG"
      ]
  },
  {
      "alias": "preschools",
      "title": "Preschools",
      "parents": [
          "education"
      ],
      "country_blacklist": [
          "DK"
      ]
  },
  {
      "alias": "pressurewashers",
      "title": "Pressure Washers",
      "parents": [
          "homeservices"
      ],
      "country_blacklist": [
          "CL",
          "JP",
          "HK",
          "MX",
          "AR"
      ]
  },
  {
      "alias": "pretzels",
      "title": "Pretzels",
      "parents": [
          "food"
      ],
      "country_whitelist": [
          "DE",
          "US",
          "CH",
          "PT"
      ]
  },
  {
      "alias": "preventivemedicine",
      "title": "Preventive Medicine",
      "parents": [
          "physicians"
      ]
  },
  {
      "alias": "printmedia",
      "title": "Print Media",
      "parents": [
          "massmedia"
      ]
  },
  {
      "alias": "privateinvestigation",
      "title": "Private Investigation",
      "parents": [
          "professional"
      ]
  },
  {
      "alias": "privatejetcharter",
      "title": "Private Jet Charter",
      "parents": [
          "transport"
      ]
  },
  {
      "alias": "privateschools",
      "title": "Private Schools",
      "parents": [
          "education"
      ],
      "country_whitelist": [
          "BR",
          "SE",
          "PT",
          "AR",
          "CZ",
          "NO",
          "CL",
          "US",
          "ES",
          "AU",
          "DK",
          "MX",
          "NZ"
      ]
  },
  {
      "alias": "privatetutors",
      "title": "Private Tutors",
      "parents": [
          "education"
      ]
  },
  {
      "alias": "processservers",
      "title": "Process Servers",
      "parents": [
          "legalservices"
      ],
      "country_whitelist": [
          "US",
          "FR",
          "BE"
      ]
  },
  {
      "alias": "proctologist",
      "title": "Proctologists",
      "parents": [
          "physicians"
      ]
  },
  {
      "alias": "productdesign",
      "title": "Product Design",
      "parents": [
          "professional"
      ],
      "country_whitelist": [
          "CA",
          "NL",
          "BE",
          "NO",
          "IE",
          "PH",
          "US",
          "GB",
          "AU",
          "DK",
          "SG",
          "FR"
      ]
  },
  {
      "alias": "professional",
      "title": "Professional Services",
      "parents": []
  },
  {
      "alias": "propane",
      "title": "Propane",
      "parents": [
          "localservices"
      ],
      "country_blacklist": [
          "CZ",
          "MX",
          "NZ",
          "AR"
      ]
  },
  {
      "alias": "propertymgmt",
      "title": "Property Management",
      "parents": [
          "realestate"
      ]
  },
  {
      "alias": "props",
      "title": "Props",
      "parents": [
          "shopping"
      ],
      "country_whitelist": [
          "US",
          "BE"
      ]
  },
  {
      "alias": "prosthetics",
      "title": "Prosthetics",
      "parents": [
          "health"
      ],
      "country_whitelist": [
          "AU",
          "ES",
          "IT",
          "US"
      ]
  },
  {
      "alias": "prosthodontists",
      "title": "Prosthodontists",
      "parents": [
          "health"
      ],
      "country_whitelist": [
          "ES",
          "IT",
          "US"
      ]
  },
  {
      "alias": "provencal",
      "title": "Provencal",
      "parents": [
          "french"
      ],
      "country_whitelist": [
          "FR"
      ]
  },
  {
      "alias": "psychiatrists",
      "title": "Psychiatrists",
      "parents": [
          "physicians"
      ]
  },
  {
      "alias": "psychic_astrology",
      "title": "Supernatural Readings",
      "parents": [
          "arts"
      ]
  },
  {
      "alias": "psychicmediums",
      "title": "Psychic Mediums",
      "parents": [
          "psychic_astrology"
      ],
      "country_blacklist": [
          "PL"
      ]
  },
  {
      "alias": "psychics",
      "title": "Psychics",
      "parents": [
          "psychic_astrology"
      ]
  },
  {
      "alias": "psychoanalysts",
      "title": "Psychoanalysts",
      "parents": [
          "c_and_mh"
      ],
      "country_whitelist": [
          "BR",
          "NL",
          "BE",
          "PT",
          "AR",
          "CZ",
          "ES",
          "MX",
          "FR"
      ]
  },
  {
      "alias": "psychologists",
      "title": "Psychologists",
      "parents": [
          "c_and_mh"
      ],
      "country_blacklist": [
          "IE",
          "GB",
          "JP",
          "HK",
          "SG",
          "PL"
      ]
  },
  {
      "alias": "psychotechnicaltests",
      "title": "Psychotechnical Tests",
      "parents": [
          "health"
      ],
      "country_whitelist": [
          "ES",
          "BR"
      ]
  },
  {
      "alias": "psychotherapists",
      "title": "Psychotherapists",
      "parents": [
          "c_and_mh"
      ],
      "country_whitelist": [
          "BR",
          "AT",
          "CH",
          "CZ",
          "NO",
          "DE",
          "FI",
          "DK",
          "SG",
          "FR"
      ]
  },
  {
      "alias": "pubfood",
      "title": "Pub Food",
      "parents": [
          "restaurants"
      ],
      "country_whitelist": [
          "AU"
      ]
  },
  {
      "alias": "publicadjusters",
      "title": "Public Adjusters",
      "parents": [
          "professional"
      ],
      "country_whitelist": [
          "US"
      ]
  },
  {
      "alias": "publicart",
      "title": "Public Art",
      "parents": [
          "localflavor"
      ]
  },
  {
      "alias": "publicmarkets",
      "title": "Public Markets",
      "parents": [
          "shopping"
      ]
  },
  {
      "alias": "publicplazas",
      "title": "Public Plazas",
      "parents": [
          "active"
      ],
      "country_blacklist": [
          "CA",
          "NL",
          "BE",
          "IE",
          "US",
          "GB",
          "AU",
          "NZ"
      ]
  },
  {
      "alias": "publicrelations",
      "title": "Public Relations",
      "parents": [
          "professional"
      ]
  },
  {
      "alias": "publicservicesgovt",
      "title": "Public Services & Government",
      "parents": []
  },
  {
      "alias": "publictransport",
      "title": "Public Transportation",
      "parents": [
          "transport"
      ]
  },
  {
      "alias": "pubs",
      "title": "Pubs",
      "parents": [
          "bars"
      ]
  },
  {
      "alias": "pueblan",
      "title": "Pueblan",
      "parents": [
          "mexican"
      ],
      "country_whitelist": [
          "MX"
      ]
  },
  {
      "alias": "puertorican",
      "title": "Puerto Rican",
      "parents": [
          "caribbean"
      ],
      "country_whitelist": [
          "US"
      ]
  },
  {
      "alias": "pulmonologist",
      "title": "Pulmonologist",
      "parents": [
          "physicians"
      ]
  },
  {
      "alias": "pulquerias",
      "title": "Pulquerias",
      "parents": [
          "bars"
      ],
      "country_whitelist": [
          "MX"
      ]
  },
  {
      "alias": "pumpkinpatches",
      "title": "Pumpkin Patches",
      "parents": [
          "homeandgarden"
      ],
      "country_whitelist": [
          "US"
      ]
  },
  {
      "alias": "qigong",
      "title": "Qi Gong",
      "parents": [
          "fitness"
      ]
  },
  {
      "alias": "races",
      "title": "Races & Competitions",
      "parents": [
          "active"
      ],
      "country_blacklist": [
          "CA",
          "HK",
          "PT",
          "AR",
          "CL",
          "IE",
          "IT",
          "PH",
          "TW",
          "ES",
          "TR",
          "JP",
          "MX",
          "MY",
          "FI"
      ]
  },
  {
      "alias": "racetracks",
      "title": "Race Tracks",
      "parents": [
          "arts"
      ],
      "country_blacklist": [
          "DE",
          "IE",
          "BR",
          "AT",
          "CH",
          "SG"
      ]
  },
  {
      "alias": "racingexperience",
      "title": "Racing Experience",
      "parents": [
          "active"
      ],
      "country_whitelist": [
          "SE",
          "US",
          "FR"
      ]
  },
  {
      "alias": "radiologists",
      "title": "Radiologists",
      "parents": [
          "physicians"
      ]
  },
  {
      "alias": "radiostations",
      "title": "Radio Stations",
      "parents": [
          "massmedia"
      ]
  },
  {
      "alias": "rafting",
      "title": "Rafting/Kayaking",
      "parents": [
          "active"
      ]
  },
  {
      "alias": "ramen",
      "title": "Ramen",
      "parents": [
          "japanese"
      ]
  },
  {
      "alias": "ranches",
      "title": "Ranches",
      "parents": [
          "farms"
      ],
      "country_whitelist": [
          "CL",
          "US",
          "ES",
          "MX",
          "AR",
          "CZ"
      ]
  },
  {
      "alias": "raw_food",
      "title": "Live/Raw Food",
      "parents": [
          "restaurants"
      ]
  },
  {
      "alias": "realestate",
      "title": "Real Estate",
      "parents": [
          "homeservices"
      ]
  },
  {
      "alias": "realestateagents",
      "title": "Real Estate Agents",
      "parents": [
          "realestate"
      ]
  },
  {
      "alias": "realestatelawyers",
      "title": "Real Estate Law",
      "parents": [
          "lawyers"
      ]
  },
  {
      "alias": "realestatesvcs",
      "title": "Real Estate Services",
      "parents": [
          "realestate"
      ],
      "country_blacklist": [
          "CZ"
      ]
  },
  {
      "alias": "record_labels",
      "title": "Record Labels",
      "parents": [
          "localservices"
      ],
      "country_whitelist": [
          "BR",
          "AT",
          "CH",
          "PT",
          "CZ",
          "NO",
          "DE",
          "DK"
      ]
  },
  {
      "alias": "recording_studios",
      "title": "Recording & Rehearsal Studios",
      "parents": [
          "localservices"
      ]
  },
  {
      "alias": "recreation",
      "title": "Recreation Centers",
      "parents": [
          "active"
      ]
  },
  {
      "alias": "recyclingcenter",
      "title": "Recycling Center",
      "parents": [
          "localservices"
      ]
  },
  {
      "alias": "refinishing",
      "title": "Refinishing Services",
      "parents": [
          "homeservices"
      ]
  },
  {
      "alias": "reflexology",
      "title": "Reflexology",
      "parents": [
          "health"
      ],
      "country_blacklist": [
          "SE",
          "TR",
          "PL",
          "FI"
      ]
  },
  {
      "alias": "registrationservices",
      "title": "Registration Services",
      "parents": [
          "auto"
      ],
      "country_blacklist": [
          "CL",
          "ES",
          "DK",
          "MX",
          "AR",
          "NO"
      ]
  },
  {
      "alias": "registry_office",
      "title": "Registry Office",
      "parents": [
          "publicservicesgovt"
      ],
      "country_whitelist": [
          "BR",
          "NL",
          "BE",
          "AT",
          "CH",
          "PT",
          "CZ",
          "NO",
          "DE",
          "IT",
          "DK",
          "FI"
      ]
  },
  {
      "alias": "rehabilitation_center",
      "title": "Rehabilitation Center",
      "parents": [
          "health"
      ],
      "country_blacklist": [
          "AT",
          "HK",
          "CH",
          "PH",
          "TW",
          "TR",
          "MY",
          "SG",
          "FR"
      ]
  },
  {
      "alias": "reiki",
      "title": "Reiki",
      "parents": [
          "health"
      ],
      "country_blacklist": [
          "CL",
          "JP",
          "HK",
          "MX",
          "AR"
      ]
  },
  {
      "alias": "religiousitems",
      "title": "Religious Items",
      "parents": [
          "shopping"
      ]
  },
  {
      "alias": "religiousorgs",
      "title": "Religious Organizations",
      "parents": []
  },
  {
      "alias": "religiousschools",
      "title": "Religious Schools",
      "parents": [
          "education"
      ],
      "country_whitelist": [
          "BR",
          "PT",
          "AR",
          "CZ",
          "NO",
          "CL",
          "PH",
          "US",
          "ES",
          "AU",
          "DK",
          "MX",
          "NZ",
          "MY"
      ]
  },
  {
      "alias": "rentfurniture",
      "title": "Furniture Rental",
      "parents": [
          "localservices"
      ],
      "country_whitelist": [
          "CA",
          "NL",
          "BE",
          "PT",
          "AR",
          "CL",
          "US",
          "ES",
          "JP",
          "AU",
          "MX"
      ]
  },
  {
      "alias": "reproductivehealthservices",
      "title": "Reproductive Health Services",
      "parents": [
          "health"
      ]
  },
  {
      "alias": "reptileshops",
      "title": "Reptile Shops",
      "parents": [
          "petstore"
      ],
      "country_whitelist": [
          "NL",
          "BE",
          "SE",
          "NO",
          "DE",
          "IT",
          "US",
          "ES",
          "JP",
          "DK"
      ]
  },
  {
      "alias": "residences",
      "title": "Residences",
      "parents": [
          "hotels"
      ],
      "country_whitelist": [
          "AT",
          "CH",
          "CZ",
          "PL",
          "DE",
          "IT",
          "PH",
          "US",
          "ES",
          "MY",
          "SG"
      ]
  },
  {
      "alias": "resorts",
      "title": "Resorts",
      "parents": [
          "hotelstravel"
      ]
  },
  {
      "alias": "restaurants",
      "title": "Restaurants",
      "parents": []
  },
  {
      "alias": "reststops",
      "title": "Rest Stops",
      "parents": [
          "hotels"
      ]
  },
  {
      "alias": "retinaspecialists",
      "title": "Retina Specialists",
      "parents": [
          "opthamalogists"
      ],
      "country_blacklist": [
          "DE",
          "AT",
          "CH",
          "FR"
      ]
  },
  {
      "alias": "retirement_homes",
      "title": "Retirement Homes",
      "parents": [
          "health"
      ]
  },
  {
      "alias": "reunion",
      "title": "Reunion",
      "parents": [
          "french"
      ],
      "country_blacklist": [
          "BR",
          "AT",
          "CH",
          "AR",
          "PL",
          "NO",
          "CL",
          "DE",
          "TR",
          "JP",
          "AU",
          "DK",
          "MX",
          "NZ"
      ]
  },
  {
      "alias": "reupholstery",
      "title": "Furniture Reupholstery",
      "parents": [
          "localservices"
      ]
  },
  {
      "alias": "rhematologists",
      "title": "Rheumatologists",
      "parents": [
          "physicians"
      ],
      "country_blacklist": [
          "CA",
          "HK",
          "PL",
          "IE",
          "TW",
          "GB",
          "TR",
          "JP",
          "AU",
          "NZ",
          "SG",
          "FI"
      ]
  },
  {
      "alias": "rhinelandian",
      "title": "Rhinelandian",
      "parents": [
          "german"
      ],
      "country_whitelist": [
          "DE"
      ]
  },
  {
      "alias": "ribatejo",
      "title": "Ribatejo",
      "parents": [
          "portuguese"
      ],
      "country_whitelist": [
          "PT"
      ]
  },
  {
      "alias": "riceshop",
      "title": "Rice",
      "parents": [
          "restaurants"
      ],
      "country_whitelist": [
          "TR",
          "JP"
      ]
  },
  {
      "alias": "roadsideassist",
      "title": "Roadside Assistance",
      "parents": [
          "auto"
      ],
      "country_blacklist": [
          "BR",
          "FR",
          "HK",
          "SE",
          "PT",
          "IE",
          "TW",
          "GB",
          "TR",
          "NZ",
          "SG",
          "FI"
      ]
  },
  {
      "alias": "robatayaki",
      "title": "Robatayaki",
      "parents": [
          "japanese"
      ],
      "country_whitelist": [
          "HK",
          "JP",
          "TW"
      ]
  },
  {
      "alias": "rock_climbing",
      "title": "Rock Climbing",
      "parents": [
          "active"
      ]
  },
  {
      "alias": "rodeo",
      "title": "Rodeo",
      "parents": [
          "arts"
      ],
      "country_whitelist": [
          "US"
      ]
  },
  {
      "alias": "rodizios",
      "title": "Rodizios",
      "parents": [
          "brazilian"
      ],
      "country_whitelist": [
          "PT",
          "BR",
          "AR"
      ]
  },
  {
      "alias": "roman",
      "title": "Roman",
      "parents": [
          "italian"
      ],
      "country_whitelist": [
          "IT",
          "JP",
          "FR"
      ]
  },
  {
      "alias": "romanian",
      "title": "Romanian",
      "parents": [
          "restaurants"
      ],
      "country_whitelist": [
          "BE",
          "AT",
          "CH",
          "CZ",
          "PL",
          "DE",
          "ES",
          "FR"
      ]
  },
  {
      "alias": "roofing",
      "title": "Roofing",
      "parents": [
          "homeservices"
      ]
  },
  {
      "alias": "roofinspectors",
      "title": "Roof Inspectors",
      "parents": [
          "homeservices"
      ],
      "country_whitelist": [
          "US",
          "CA"
      ]
  },
  {
      "alias": "rotisserie_chicken",
      "title": "Rotisserie Chicken",
      "parents": [
          "restaurants"
      ],
      "country_whitelist": [
          "BR",
          "NL",
          "BE",
          "PT",
          "AR",
          "PL",
          "CL",
          "IT",
          "ES",
          "AU",
          "MX",
          "NZ",
          "FR"
      ]
  },
  {
      "alias": "rugs",
      "title": "Rugs",
      "parents": [
          "homeandgarden"
      ],
      "country_blacklist": [
          "AT",
          "HK",
          "CH",
          "CZ",
          "PL",
          "DE",
          "IE",
          "JP"
      ]
  },
  {
      "alias": "russian",
      "title": "Russian",
      "parents": [
          "restaurants"
      ]
  },
  {
      "alias": "rv_dealers",
      "title": "RV Dealers",
      "parents": [
          "auto"
      ],
      "country_blacklist": [
          "HK",
          "PT",
          "AR",
          "CL",
          "IE",
          "PH",
          "TW",
          "GB",
          "TR",
          "JP",
          "AU",
          "MX",
          "NZ",
          "MY",
          "SG"
      ]
  },
  {
      "alias": "rvparks",
      "title": "RV Parks",
      "parents": [
          "hotelstravel"
      ],
      "country_whitelist": [
          "BE",
          "AT",
          "AR",
          "DE",
          "CL",
          "IT",
          "IE",
          "US",
          "TR",
          "DK",
          "NZ",
          "MX",
          "FI",
          "CA",
          "NL",
          "SE",
          "CH",
          "CZ",
          "PL",
          "NO",
          "GB",
          "ES",
          "AU",
          "SG",
          "FR"
      ]
  },
  {
      "alias": "rvrental",
      "title": "RV Rental",
      "parents": [
          "hotelstravel"
      ],
      "country_blacklist": [
          "SG"
      ]
  },
  {
      "alias": "rvrepair",
      "title": "RV Repair",
      "parents": [
          "auto"
      ],
      "country_whitelist": [
          "BR",
          "BE",
          "AT",
          "PT",
          "DE",
          "PH",
          "IE",
          "US",
          "DK",
          "NZ",
          "MY",
          "CA",
          "NL",
          "CH",
          "PL",
          "NO",
          "GB",
          "AU",
          "SG"
      ]
  },
  {
      "alias": "ryokan",
      "title": "Ryokan",
      "parents": [
          "hotels"
      ],
      "country_whitelist": [
          "JP"
      ]
  },
  {
      "alias": "safestores",
      "title": "Safe Stores",
      "parents": [
          "shopping"
      ]
  },
  {
      "alias": "safetyequipment",
      "title": "Safety Equipment",
      "parents": [
          "shopping"
      ]
  },
  {
      "alias": "sailing",
      "title": "Sailing",
      "parents": [
          "active"
      ]
  },
  {
      "alias": "sakebars",
      "title": "Sake Bars",
      "parents": [
          "bars"
      ],
      "country_whitelist": [
          "JP"
      ]
  },
  {
      "alias": "salad",
      "title": "Salad",
      "parents": [
          "restaurants"
      ]
  },
  {
      "alias": "salumerie",
      "title": "Salumerie",
      "parents": [
          "food"
      ],
      "country_whitelist": [
          "CL",
          "IT",
          "ES",
          "PT",
          "MX",
          "AR"
      ]
  },
  {
      "alias": "salvadoran",
      "title": "Salvadoran",
      "parents": [
          "latin"
      ],
      "country_whitelist": [
          "US",
          "CA"
      ]
  },
  {
      "alias": "sambaschools",
      "title": "Samba Schools",
      "parents": [
          "specialtyschools"
      ],
      "country_whitelist": [
          "IT",
          "SE",
          "BR",
          "FI"
      ]
  },
  {
      "alias": "sandblasting",
      "title": "Sandblasting",
      "parents": [
          "localservices"
      ],
      "country_whitelist": [
          "BR",
          "NL",
          "BE",
          "AT",
          "CH",
          "DE",
          "IT",
          "US",
          "ES"
      ]
  },
  {
      "alias": "sandwiches",
      "title": "Sandwiches",
      "parents": [
          "restaurants"
      ]
  },
  {
      "alias": "sardinian",
      "title": "Sardinian",
      "parents": [
          "italian"
      ],
      "country_whitelist": [
          "IT",
          "US",
          "FR"
      ]
  },
  {
      "alias": "saunainstallation",
      "title": "Sauna Installation & Repair",
      "parents": [
          "homeservices"
      ],
      "country_whitelist": [
          "AT",
          "DE",
          "IE",
          "IT",
          "US",
          "DK",
          "NZ",
          "FI",
          "CA",
          "SE",
          "CH",
          "CZ",
          "PL",
          "NO",
          "GB",
          "AU",
          "SG"
      ]
  },
  {
      "alias": "saunas",
      "title": "Saunas",
      "parents": [
          "health"
      ],
      "country_blacklist": [
          "CA",
          "PL",
          "PH",
          "ES",
          "AU",
          "NZ",
          "MY",
          "SG"
      ]
  },
  {
      "alias": "scandinavian",
      "title": "Scandinavian",
      "parents": [
          "restaurants"
      ],
      "country_blacklist": [
          "PT"
      ]
  },
  {
      "alias": "scandinaviandesign",
      "title": "Scandinavian Design",
      "parents": [
          "shopping"
      ],
      "country_whitelist": [
          "SE",
          "DK",
          "NO",
          "FI"
      ]
  },
  {
      "alias": "scavengerhunts",
      "title": "Scavenger Hunts",
      "parents": [
          "active"
      ],
      "country_whitelist": [
          "US"
      ]
  },
  {
      "alias": "schnitzel",
      "title": "Schnitzel",
      "parents": [
          "restaurants"
      ],
      "country_whitelist": [
          "DE",
          "AT",
          "PL",
          "CH"
      ]
  },
  {
      "alias": "scooterrentals",
      "title": "Scooter Rentals",
      "parents": [
          "active"
      ]
  },
  {
      "alias": "scootertours",
      "title": "Scooter Tours",
      "parents": [
          "tours"
      ]
  },
  {
      "alias": "scottish",
      "title": "Scottish",
      "parents": [
          "restaurants"
      ],
      "country_whitelist": [
          "DE",
          "IE",
          "US",
          "CA",
          "GB",
          "AT",
          "CH"
      ]
  },
  {
      "alias": "screen_printing_tshirt_printing",
      "title": "Screen Printing/T-Shirt Printing",
      "parents": [
          "localservices"
      ],
      "country_blacklist": [
          "CA",
          "HK",
          "CZ",
          "PL",
          "IE",
          "IT",
          "TW",
          "GB",
          "TR",
          "NZ",
          "SG",
          "FI"
      ]
  },
  {
      "alias": "screenprinting",
      "title": "Screen Printing",
      "parents": [
          "localservices"
      ]
  },
  {
      "alias": "scuba",
      "title": "Scuba Diving",
      "parents": [
          "diving"
      ]
  },
  {
      "alias": "seafood",
      "title": "Seafood",
      "parents": [
          "restaurants"
      ]
  },
  {
      "alias": "seafoodmarkets",
      "title": "Seafood Markets",
      "parents": [
          "gourmet"
      ]
  },
  {
      "alias": "seasonaldecorservices",
      "title": "Holiday Decorating Services",
      "parents": [
          "homeservices"
      ],
      "country_blacklist": [
          "NL",
          "BE",
          "AT",
          "CH",
          "NO",
          "DE",
          "IT",
          "TR",
          "JP",
          "DK",
          "FR"
      ]
  },
  {
      "alias": "security",
      "title": "Security Services",
      "parents": [
          "professional"
      ],
      "country_blacklist": [
          "NZ"
      ]
  },
  {
      "alias": "securitysystems",
      "title": "Security Systems",
      "parents": [
          "homeservices"
      ]
  },
  {
      "alias": "selfdefenseclasses",
      "title": "Self-defense Classes",
      "parents": [
          "fitness"
      ]
  },
  {
      "alias": "selfstorage",
      "title": "Self Storage",
      "parents": [
          "localservices"
      ]
  },
  {
      "alias": "senegalese",
      "title": "Senegalese",
      "parents": [
          "african"
      ],
      "country_whitelist": [
          "IT",
          "US",
          "CA",
          "BE",
          "FR"
      ]
  },
  {
      "alias": "seniorcenters",
      "title": "Senior Centers",
      "parents": [
          "active"
      ],
      "country_blacklist": [
          "FR"
      ]
  },
  {
      "alias": "septicservices",
      "title": "Septic Services",
      "parents": [
          "localservices"
      ],
      "country_whitelist": [
          "CA",
          "BR",
          "NL",
          "BE",
          "PT",
          "PL",
          "NO",
          "US",
          "DK"
      ]
  },
  {
      "alias": "serbocroatian",
      "title": "Serbo Croatian",
      "parents": [
          "restaurants"
      ],
      "country_whitelist": [
          "BE",
          "AT",
          "SE",
          "CH",
          "AR",
          "CZ",
          "PL",
          "CL",
          "DE",
          "IT",
          "FR"
      ]
  },
  {
      "alias": "service_stations",
      "title": "Service Stations",
      "parents": [
          "auto"
      ],
      "country_blacklist": [
          "BR",
          "FR",
          "HK",
          "SE",
          "PT",
          "CZ",
          "NO",
          "PH",
          "TW",
          "TR",
          "JP",
          "DK",
          "MY",
          "FI"
      ]
  },
  {
      "alias": "servicestations",
      "title": "Gas Stations",
      "parents": [
          "auto"
      ]
  },
  {
      "alias": "sessionphotography",
      "title": "Session Photography",
      "parents": [
          "photographers"
      ]
  },
  {
      "alias": "sewingalterations",
      "title": "Sewing & Alterations",
      "parents": [
          "localservices"
      ]
  },
  {
      "alias": "sextherapists",
      "title": "Sex Therapists",
      "parents": [
          "c_and_mh"
      ]
  },
  {
      "alias": "shanghainese",
      "title": "Shanghainese",
      "parents": [
          "chinese"
      ],
      "country_whitelist": [
          "BE",
          "HK",
          "SE",
          "IT",
          "US",
          "TW",
          "JP",
          "AU",
          "MY",
          "SG",
          "FR"
      ]
  },
  {
      "alias": "sharedofficespaces",
      "title": "Shared Office Spaces",
      "parents": [
          "realestate"
      ]
  },
  {
      "alias": "sharedtaxis",
      "title": "Shared Taxis",
      "parents": [
          "transport"
      ],
      "country_whitelist": [
          "PH",
          "BR",
          "TR",
          "SE",
          "DK",
          "NO"
      ]
  },
  {
      "alias": "shavedice",
      "title": "Shaved Ice",
      "parents": [
          "food"
      ],
      "country_whitelist": [
          "AR",
          "CZ",
          "CL",
          "IT",
          "US",
          "TW",
          "JP",
          "MX",
          "SG"
      ]
  },
  {
      "alias": "shavedsnow",
      "title": "Shaved Snow",
      "parents": [
          "food"
      ],
      "country_whitelist": [
          "US",
          "CA",
          "TW",
          "HK",
          "MY",
          "SG"
      ]
  },
  {
      "alias": "shedsandoutdoorstorage",
      "title": "Sheds & Outdoor Storage",
      "parents": [
          "homeandgarden"
      ],
      "country_blacklist": [
          "FR",
          "HK",
          "SE",
          "CZ",
          "NO",
          "TW",
          "ES",
          "TR",
          "JP",
          "DK",
          "FI"
      ]
  },
  {
      "alias": "shipping_centers",
      "title": "Shipping Centers",
      "parents": [
          "localservices"
      ],
      "country_blacklist": [
          "SE",
          "NO"
      ]
  },
  {
      "alias": "shoerepair",
      "title": "Shoe Repair",
      "parents": [
          "localservices"
      ]
  },
  {
      "alias": "shoes",
      "title": "Shoe Stores",
      "parents": [
          "fashion"
      ]
  },
  {
      "alias": "shoeshine",
      "title": "Shoe Shine",
      "parents": [
          "localservices"
      ],
      "country_blacklist": [
          "NL",
          "BE"
      ]
  },
  {
      "alias": "shopping",
      "title": "Shopping",
      "parents": []
  },
  {
      "alias": "shoppingcenters",
      "title": "Shopping Centers",
      "parents": [
          "shopping"
      ]
  },
  {
      "alias": "shoppingpassages",
      "title": "Shopping Passages",
      "parents": [
          "shopping"
      ],
      "country_blacklist": [
          "US"
      ]
  },
  {
      "alias": "shredding",
      "title": "Shredding Services",
      "parents": [
          "professional"
      ],
      "country_whitelist": [
          "CA",
          "NL",
          "BE",
          "AT",
          "CH",
          "CZ",
          "DE",
          "IE",
          "US",
          "GB",
          "AU",
          "NZ",
          "SG"
      ]
  },
  {
      "alias": "shrines",
      "title": "Shrines",
      "parents": [
          "religiousorgs"
      ],
      "country_whitelist": [
          "CL",
          "ES",
          "JP",
          "MX",
          "AR"
      ]
  },
  {
      "alias": "shutters",
      "title": "Shutters",
      "parents": [
          "homeservices"
      ]
  },
  {
      "alias": "sicilian",
      "title": "Sicilian",
      "parents": [
          "italian"
      ],
      "country_whitelist": [
          "IT",
          "US",
          "CZ",
          "PL",
          "FR"
      ]
  },
  {
      "alias": "signature_cuisine",
      "title": "Signature Cuisine",
      "parents": [
          "restaurants"
      ],
      "country_whitelist": [
          "SE",
          "PT",
          "AR",
          "NO",
          "CL",
          "ES",
          "DK",
          "MX"
      ]
  },
  {
      "alias": "signmaking",
      "title": "Signmaking",
      "parents": [
          "professional"
      ]
  },
  {
      "alias": "sikhtemples",
      "title": "Sikh Temples",
      "parents": [
          "religiousorgs"
      ]
  },
  {
      "alias": "silentdisco",
      "title": "Silent Disco",
      "parents": [
          "eventservices"
      ],
      "country_blacklist": [
          "JP"
      ]
  },
  {
      "alias": "singaporean",
      "title": "Singaporean",
      "parents": [
          "restaurants"
      ],
      "country_blacklist": [
          "ES",
          "TR",
          "DK",
          "PT",
          "CZ",
          "FI"
      ]
  },
  {
      "alias": "skate_parks",
      "title": "Skate Parks",
      "parents": [
          "parks"
      ]
  },
  {
      "alias": "skateshops",
      "title": "Skate Shops",
      "parents": [
          "sportgoods"
      ]
  },
  {
      "alias": "skatingrinks",
      "title": "Skating Rinks",
      "parents": [
          "active"
      ]
  },
  {
      "alias": "skiing",
      "title": "Skiing",
      "parents": [
          "active"
      ],
      "country_blacklist": [
          "BR",
          "HK",
          "PL",
          "IE",
          "IT",
          "PH",
          "US",
          "TW",
          "GB",
          "TR",
          "AU",
          "MX",
          "MY",
          "SG",
          "FR"
      ]
  },
  {
      "alias": "skillednursing",
      "title": "Skilled Nursing",
      "parents": [
          "health"
      ],
      "country_whitelist": [
          "US"
      ]
  },
  {
      "alias": "skincare",
      "title": "Skin Care",
      "parents": [
          "beautysvc"
      ]
  },
  {
      "alias": "skiresorts",
      "title": "Ski Resorts",
      "parents": [
          "hotelstravel"
      ],
      "country_blacklist": [
          "SG",
          "DK",
          "BR",
          "MX"
      ]
  },
  {
      "alias": "skischools",
      "title": "Ski Schools",
      "parents": [
          "specialtyschools"
      ]
  },
  {
      "alias": "skishops",
      "title": "Ski & Snowboard Shops",
      "parents": [
          "sportgoods"
      ],
      "country_blacklist": [
          "BR",
          "HK",
          "PT",
          "PH",
          "TW",
          "TR",
          "DK",
          "MX",
          "MY",
          "SG"
      ]
  },
  {
      "alias": "skydiving",
      "title": "Skydiving",
      "parents": [
          "active"
      ]
  },
  {
      "alias": "sledding",
      "title": "Sledding",
      "parents": [
          "active"
      ],
      "country_whitelist": [
          "CA",
          "AT",
          "CH",
          "PT",
          "CZ",
          "NO",
          "DE",
          "IT",
          "US",
          "TR",
          "NZ",
          "FI"
      ]
  },
  {
      "alias": "sleepspecialists",
      "title": "Sleep Specialists",
      "parents": [
          "health"
      ]
  },
  {
      "alias": "sleepwear",
      "title": "Sleepwear",
      "parents": [
          "fashion"
      ],
      "country_whitelist": [
          "AU",
          "PT"
      ]
  },
  {
      "alias": "slovakian",
      "title": "Slovakian",
      "parents": [
          "restaurants"
      ],
      "country_whitelist": [
          "CA",
          "BE",
          "CZ",
          "PL",
          "IE",
          "IT",
          "US",
          "GB",
          "AU",
          "FR"
      ]
  },
  {
      "alias": "smog_check_stations",
      "title": "Smog Check Stations",
      "parents": [
          "auto"
      ],
      "country_blacklist": [
          "SE",
          "DK",
          "NO",
          "FI"
      ]
  },
  {
      "alias": "smokehouse",
      "title": "Smokehouse",
      "parents": [
          "food"
      ],
      "country_blacklist": [
          "CL",
          "IT",
          "TR",
          "MX",
          "AR",
          "PL",
          "FR"
      ]
  },
  {
      "alias": "smokingareas",
      "title": "Smoking Areas",
      "parents": [
          "localservices"
      ],
      "country_whitelist": [
          "JP"
      ]
  },
  {
      "alias": "snorkeling",
      "title": "Snorkeling",
      "parents": [
          "active"
      ],
      "country_blacklist": [
          "DE",
          "AT",
          "CH"
      ]
  },
  {
      "alias": "snowremoval",
      "title": "Snow Removal",
      "parents": [
          "localservices"
      ],
      "country_blacklist": [
          "HK",
          "NZ",
          "BR",
          "MX"
      ]
  },
  {
      "alias": "snuggleservices",
      "title": "Snuggle Services",
      "parents": [
          "localservices"
      ],
      "country_whitelist": [
          "US",
          "JP"
      ]
  },
  {
      "alias": "soba",
      "title": "Soba",
      "parents": [
          "japanese"
      ],
      "country_whitelist": [
          "JP",
          "TW"
      ]
  },
  {
      "alias": "social_clubs",
      "title": "Social Clubs",
      "parents": [
          "arts"
      ]
  },
  {
      "alias": "socialsecuritylaw",
      "title": "Social Security Law",
      "parents": [
          "lawyers"
      ],
      "country_blacklist": [
          "CZ",
          "PL"
      ]
  },
  {
      "alias": "softwaredevelopment",
      "title": "Software Development",
      "parents": [
          "professional"
      ]
  },
  {
      "alias": "solarinstallation",
      "title": "Solar Installation",
      "parents": [
          "homeservices"
      ]
  },
  {
      "alias": "solarpanelcleaning",
      "title": "Solar Panel Cleaning",
      "parents": [
          "homeservices"
      ],
      "country_whitelist": [
          "US"
      ]
  },
  {
      "alias": "somali",
      "title": "Somali",
      "parents": [
          "restaurants"
      ],
      "country_whitelist": [
          "DE",
          "IT",
          "US",
          "AT",
          "CH",
          "PL"
      ]
  },
  {
      "alias": "sommelierservices",
      "title": "Sommelier Services",
      "parents": [
          "eventservices"
      ],
      "country_blacklist": [
          "FR"
      ]
  },
  {
      "alias": "sophrologists",
      "title": "Sophrologists",
      "parents": [
          "c_and_mh"
      ],
      "country_whitelist": [
          "CZ",
          "PL",
          "FR",
          "BE"
      ]
  },
  {
      "alias": "soulfood",
      "title": "Soul Food",
      "parents": [
          "restaurants"
      ],
      "country_whitelist": [
          "CA",
          "NL",
          "SE",
          "PL",
          "NO",
          "IE",
          "US",
          "GB",
          "ES"
      ]
  },
  {
      "alias": "soup",
      "title": "Soup",
      "parents": [
          "restaurants"
      ]
  },
  {
      "alias": "southafrican",
      "title": "South African",
      "parents": [
          "african"
      ],
      "country_whitelist": [
          "IT",
          "US",
          "CA",
          "BE",
          "AU",
          "FR"
      ]
  },
  {
      "alias": "southern",
      "title": "Southern",
      "parents": [
          "restaurants"
      ],
      "country_whitelist": [
          "CA",
          "NL",
          "SE",
          "PL",
          "IE",
          "US",
          "GB",
          "TR",
          "NZ"
      ]
  },
  {
      "alias": "souvenirs",
      "title": "Souvenir Shops",
      "parents": [
          "shopping"
      ],
      "country_blacklist": [
          "SG",
          "CA"
      ]
  },
  {
      "alias": "spanish",
      "title": "Spanish",
      "parents": [
          "restaurants"
      ]
  },
  {
      "alias": "spas",
      "title": "Day Spas",
      "parents": [
          "beautysvc"
      ]
  },
  {
      "alias": "speakeasies",
      "title": "Speakeasies",
      "parents": [
          "bars"
      ],
      "country_blacklist": [
          "IT",
          "TR",
          "DK",
          "NO"
      ]
  },
  {
      "alias": "specialbikes",
      "title": "Special Bikes",
      "parents": [
          "bicycles"
      ],
      "country_whitelist": [
          "DK",
          "PT"
      ]
  },
  {
      "alias": "specialed",
      "title": "Special Education",
      "parents": [
          "education"
      ],
      "country_blacklist": [
          "FI"
      ]
  },
  {
      "alias": "specialtyschools",
      "title": "Specialty Schools",
      "parents": [
          "education"
      ]
  },
  {
      "alias": "speech_therapists",
      "title": "Speech Therapists",
      "parents": [
          "health"
      ]
  },
  {
      "alias": "speechtraining",
      "title": "Speech Training",
      "parents": [
          "specialtyschools"
      ]
  },
  {
      "alias": "spermclinic",
      "title": "Sperm Clinic",
      "parents": [
          "health"
      ],
      "country_whitelist": [
          "NL",
          "BE",
          "AR",
          "NO",
          "DE",
          "CL",
          "IT",
          "US",
          "ES",
          "DK",
          "MX",
          "FR"
      ]
  },
  {
      "alias": "spinesurgeons",
      "title": "Spine Surgeons",
      "parents": [
          "physicians"
      ],
      "country_whitelist": [
          "US"
      ]
  },
  {
      "alias": "spiritism",
      "title": "Spiritism",
      "parents": [
          "religiousorgs"
      ],
      "country_whitelist": [
          "BR"
      ]
  },
  {
      "alias": "spiritual_shop",
      "title": "Spiritual Shop",
      "parents": [
          "shopping"
      ]
  },
  {
      "alias": "sport_equipment_hire",
      "title": "Sport Equipment Hire",
      "parents": [
          "active"
      ],
      "country_whitelist": [
          "PT",
          "AR",
          "CZ",
          "NO",
          "CL",
          "ES",
          "AU",
          "DK",
          "MX"
      ]
  },
  {
      "alias": "sportgoods",
      "title": "Sporting Goods",
      "parents": [
          "shopping"
      ]
  },
  {
      "alias": "sports_clubs",
      "title": "Sports Clubs",
      "parents": [
          "active"
      ]
  },
  {
      "alias": "sportsbars",
      "title": "Sports Bars",
      "parents": [
          "bars"
      ],
      "country_blacklist": [
          "AT",
          "CH"
      ]
  },
  {
      "alias": "sportsbetting",
      "title": "Sports Betting",
      "parents": [
          "arts"
      ],
      "country_whitelist": [
          "IT",
          "US"
      ]
  },
  {
      "alias": "sportsmed",
      "title": "Sports Medicine",
      "parents": [
          "physicians"
      ]
  },
  {
      "alias": "sportspsychologists",
      "title": "Sports Psychologists",
      "parents": [
          "c_and_mh"
      ],
      "country_whitelist": [
          "SG",
          "IT",
          "US",
          "NZ"
      ]
  },
  {
      "alias": "sportsteams",
      "title": "Professional Sports Teams",
      "parents": [
          "arts"
      ]
  },
  {
      "alias": "sportswear",
      "title": "Sports Wear",
      "parents": [
          "fashion",
          "sportgoods"
      ]
  },
  {
      "alias": "spraytanning",
      "title": "Spray Tanning",
      "parents": [
          "tanning"
      ],
      "country_blacklist": [
          "IE",
          "CA",
          "BR",
          "SE",
          "PL"
      ]
  },
  {
      "alias": "squash",
      "title": "Squash",
      "parents": [
          "active"
      ],
      "country_blacklist": [
          "SG",
          "PT",
          "BR",
          "NZ"
      ]
  },
  {
      "alias": "srilankan",
      "title": "Sri Lankan",
      "parents": [
          "restaurants"
      ],
      "country_blacklist": [
          "CZ"
      ]
  },
  {
      "alias": "stadiumsarenas",
      "title": "Stadiums & Arenas",
      "parents": [
          "arts"
      ]
  },
  {
      "alias": "stationery",
      "title": "Cards & Stationery",
      "parents": [
          "artsandcrafts",
          "flowers",
          "eventservices"
      ]
  },
  {
      "alias": "steak",
      "title": "Steakhouses",
      "parents": [
          "restaurants"
      ]
  },
  {
      "alias": "stereo_installation",
      "title": "Car Stereo Installation",
      "parents": [
          "auto"
      ],
      "country_blacklist": [
          "AT",
          "DK",
          "CH"
      ]
  },
  {
      "alias": "stockings",
      "title": "Stockings",
      "parents": [
          "fashion"
      ],
      "country_whitelist": [
          "DE",
          "NL",
          "BE",
          "AT",
          "CH",
          "PT",
          "CZ"
      ]
  },
  {
      "alias": "stonemasons",
      "title": "Stonemasons",
      "parents": [
          "localservices"
      ]
  },
  {
      "alias": "streetart",
      "title": "Street Art",
      "parents": [
          "arts"
      ],
      "country_blacklist": [
          "CA",
          "AT",
          "CH",
          "IE",
          "US",
          "GB",
          "TR",
          "MY",
          "SG",
          "FI"
      ]
  },
  {
      "alias": "streetvendors",
      "title": "Street Vendors",
      "parents": [
          "food"
      ]
  },
  {
      "alias": "stripclubs",
      "title": "Strip Clubs",
      "parents": [
          "adultentertainment"
      ]
  },
  {
      "alias": "stripteasedancers",
      "title": "Striptease Dancers",
      "parents": [
          "adultentertainment"
      ]
  },
  {
      "alias": "structuralengineers",
      "title": "Structural Engineers",
      "parents": [
          "homeservices"
      ]
  },
  {
      "alias": "stucco",
      "title": "Stucco Services",
      "parents": [
          "homeservices"
      ]
  },
  {
      "alias": "studiotaping",
      "title": "Studio Taping",
      "parents": [
          "arts"
      ],
      "country_whitelist": [
          "NL",
          "US",
          "BE"
      ]
  },
  {
      "alias": "sud_ouest",
      "title": "French Southwest",
      "parents": [
          "restaurants"
      ],
      "country_whitelist": [
          "FR",
          "BE"
      ]
  },
  {
      "alias": "sugaring",
      "title": "Sugaring",
      "parents": [
          "hairremoval"
      ],
      "country_whitelist": [
          "AT",
          "CH",
          "CZ",
          "NO",
          "DE",
          "US",
          "DK",
          "FI"
      ]
  },
  {
      "alias": "sugarshacks",
      "title": "Sugar Shacks",
      "parents": [
          "food"
      ],
      "country_whitelist": [
          "CA"
      ]
  },
  {
      "alias": "sukiyaki",
      "title": "Sukiyaki",
      "parents": [
          "japanese"
      ],
      "country_whitelist": [
          "JP",
          "TW"
      ]
  },
  {
      "alias": "summer_camps",
      "title": "Summer Camps",
      "parents": [
          "active"
      ]
  },
  {
      "alias": "sunglasses",
      "title": "Sunglasses",
      "parents": [
          "opticians"
      ]
  },
  {
      "alias": "supperclubs",
      "title": "Supper Clubs",
      "parents": [
          "restaurants"
      ],
      "country_whitelist": [
          "ES",
          "US",
          "CA",
          "GB"
      ]
  },
  {
      "alias": "suppliesrestaurant",
      "title": "Restaurant Supplies",
      "parents": [
          "wholesalers"
      ],
      "country_whitelist": [
          "BE",
          "AT",
          "AR",
          "CL",
          "IE",
          "DE",
          "IT",
          "US",
          "DK",
          "NZ",
          "MX",
          "CA",
          "NL",
          "CH",
          "NO",
          "PL",
          "GB",
          "ES",
          "JP",
          "AU",
          "SG"
      ]
  },
  {
      "alias": "surfing",
      "title": "Surfing",
      "parents": [
          "active"
      ],
      "country_whitelist": [
          "BR",
          "NL",
          "SE",
          "PT",
          "AR",
          "CL",
          "DE",
          "IT",
          "US",
          "ES",
          "JP",
          "DK",
          "MX",
          "NZ",
          "FR"
      ]
  },
  {
      "alias": "surflifesaving",
      "title": "Surf Lifesaving",
      "parents": [
          "active"
      ],
      "country_whitelist": [
          "BR",
          "PT",
          "AR",
          "CL",
          "ES",
          "AU",
          "MX",
          "NZ"
      ]
  },
  {
      "alias": "surfschools",
      "title": "Surf Schools",
      "parents": [
          "specialtyschools"
      ]
  },
  {
      "alias": "surfshop",
      "title": "Surf Shop",
      "parents": [
          "fashion"
      ],
      "country_blacklist": [
          "CA",
          "BR",
          "NL",
          "BE",
          "SE",
          "CZ",
          "NO",
          "IE",
          "FI",
          "SG",
          "FR"
      ]
  },
  {
      "alias": "surgeons",
      "title": "Surgeons",
      "parents": [
          "physicians"
      ]
  },
  {
      "alias": "sushi",
      "title": "Sushi Bars",
      "parents": [
          "restaurants"
      ]
  },
  {
      "alias": "swabian",
      "title": "Swabian",
      "parents": [
          "restaurants"
      ],
      "country_whitelist": [
          "DE",
          "AT",
          "CH"
      ]
  },
  {
      "alias": "swedish",
      "title": "Swedish",
      "parents": [
          "restaurants"
      ],
      "country_whitelist": [
          "SE"
      ]
  },
  {
      "alias": "swimminglessons",
      "title": "Swimming Lessons/Schools",
      "parents": [
          "fitness",
          "specialtyschools"
      ]
  },
  {
      "alias": "swimmingpools",
      "title": "Swimming Pools",
      "parents": [
          "active"
      ]
  },
  {
      "alias": "swimwear",
      "title": "Swimwear",
      "parents": [
          "fashion"
      ]
  },
  {
      "alias": "swissfood",
      "title": "Swiss Food",
      "parents": [
          "restaurants"
      ],
      "country_whitelist": [
          "CL",
          "DE",
          "ES",
          "MX",
          "CH",
          "AR",
          "CZ"
      ]
  },
  {
      "alias": "synagogues",
      "title": "Synagogues",
      "parents": [
          "religiousorgs"
      ]
  },
  {
      "alias": "syrian",
      "title": "Syrian",
      "parents": [
          "restaurants"
      ]
  },
  {
      "alias": "szechuan",
      "title": "Szechuan",
      "parents": [
          "chinese"
      ],
      "country_whitelist": [
          "HK",
          "IE",
          "US",
          "TW",
          "GB",
          "JP",
          "AU",
          "NZ",
          "MY",
          "SG",
          "FR"
      ]
  },
  {
      "alias": "tabac",
      "title": "Tabac",
      "parents": [
          "bars"
      ],
      "country_whitelist": [
          "IT",
          "ES",
          "BE",
          "CZ",
          "FR"
      ]
  },
  {
      "alias": "tabernas",
      "title": "Tabernas",
      "parents": [
          "restaurants"
      ],
      "country_whitelist": [
          "ES",
          "TR",
          "PT"
      ]
  },
  {
      "alias": "tablaoflamenco",
      "title": "Tablao Flamenco",
      "parents": [
          "arts"
      ],
      "country_whitelist": [
          "CL",
          "ES",
          "MX",
          "PT",
          "AR"
      ]
  },
  {
      "alias": "tabletopgames",
      "title": "Tabletop Games",
      "parents": [
          "shopping"
      ]
  },
  {
      "alias": "tableware",
      "title": "Tableware",
      "parents": [
          "homeandgarden"
      ],
      "country_whitelist": [
          "BR",
          "NL",
          "BE",
          "AT",
          "CH",
          "PT",
          "AR",
          "CZ",
          "NO",
          "CL",
          "DE",
          "US",
          "DK",
          "MX",
          "FR"
      ]
  },
  {
      "alias": "tacos",
      "title": "Tacos",
      "parents": [
          "mexican"
      ],
      "country_whitelist": [
          "US",
          "MX"
      ]
  },
  {
      "alias": "taekwondo",
      "title": "Taekwondo",
      "parents": [
          "martialarts"
      ]
  },
  {
      "alias": "taichi",
      "title": "Tai Chi",
      "parents": [
          "fitness"
      ]
  },
  {
      "alias": "taiwanese",
      "title": "Taiwanese",
      "parents": [
          "restaurants"
      ],
      "country_blacklist": [
          "ES",
          "TR",
          "PT",
          "CZ",
          "FI"
      ]
  },
  {
      "alias": "taiyaki",
      "title": "Taiyaki",
      "parents": [
          "jpsweets"
      ],
      "country_whitelist": [
          "JP"
      ]
  },
  {
      "alias": "takoyaki",
      "title": "Takoyaki",
      "parents": [
          "japanese"
      ],
      "country_whitelist": [
          "JP",
          "TW"
      ]
  },
  {
      "alias": "talentagencies",
      "title": "Talent Agencies",
      "parents": [
          "professional"
      ],
      "country_blacklist": [
          "CA",
          "AT",
          "HK",
          "CH",
          "CZ",
          "IE",
          "GB",
          "TR",
          "AU",
          "NZ",
          "SG"
      ]
  },
  {
      "alias": "tamales",
      "title": "Tamales",
      "parents": [
          "mexican"
      ],
      "country_whitelist": [
          "MX"
      ]
  },
  {
      "alias": "tanning",
      "title": "Tanning",
      "parents": [
          "beautysvc"
      ]
  },
  {
      "alias": "tanningbeds",
      "title": "Tanning Beds",
      "parents": [
          "tanning"
      ],
      "country_blacklist": [
          "SE",
          "BR",
          "PL",
          "FI"
      ]
  },
  {
      "alias": "taoisttemples",
      "title": "Taoist Temples",
      "parents": [
          "religiousorgs"
      ],
      "country_whitelist": [
          "HK",
          "TW"
      ]
  },
  {
      "alias": "tapas",
      "title": "Tapas Bars",
      "parents": [
          "restaurants"
      ],
      "country_blacklist": [
          "AU",
          "SG",
          "FI"
      ]
  },
  {
      "alias": "tapasmallplates",
      "title": "Tapas/Small Plates",
      "parents": [
          "restaurants"
      ]
  },
  {
      "alias": "tastingclasses",
      "title": "Tasting Classes",
      "parents": [
          "education"
      ]
  },
  {
      "alias": "tattoo",
      "title": "Tattoo",
      "parents": [
          "beautysvc"
      ]
  },
  {
      "alias": "tattooremoval",
      "title": "Tattoo Removal",
      "parents": [
          "physicians"
      ]
  },
  {
      "alias": "tavolacalda",
      "title": "Tavola Calda",
      "parents": [
          "restaurants"
      ],
      "country_whitelist": [
          "IT"
      ]
  },
  {
      "alias": "taxidermy",
      "title": "Taxidermy",
      "parents": [
          "professional"
      ],
      "country_blacklist": [
          "CA",
          "BR",
          "NL",
          "SE",
          "CZ",
          "NO",
          "IE",
          "DK",
          "NZ",
          "SG",
          "FI"
      ]
  },
  {
      "alias": "taxis",
      "title": "Taxis",
      "parents": [
          "transport"
      ]
  },
  {
      "alias": "taxlaw",
      "title": "Tax Law",
      "parents": [
          "lawyers"
      ],
      "country_whitelist": [
          "BR",
          "BE",
          "AT",
          "CH",
          "CZ",
          "PL",
          "DE",
          "US",
          "AU",
          "SG",
          "FR"
      ]
  },
  {
      "alias": "taxoffice",
      "title": "Tax Office",
      "parents": [
          "publicservicesgovt"
      ],
      "country_blacklist": [
          "US",
          "CA",
          "ES",
          "SG",
          "PL"
      ]
  },
  {
      "alias": "taxservices",
      "title": "Tax Services",
      "parents": [
          "financialservices"
      ]
  },
  {
      "alias": "tcm",
      "title": "Traditional Chinese Medicine",
      "parents": [
          "health"
      ],
      "country_blacklist": [
          "CZ"
      ]
  },
  {
      "alias": "tea",
      "title": "Tea Rooms",
      "parents": [
          "food"
      ]
  },
  {
      "alias": "teachersupplies",
      "title": "Teacher Supplies",
      "parents": [
          "shopping"
      ],
      "country_blacklist": [
          "IT",
          "FR"
      ]
  },
  {
      "alias": "teambuilding",
      "title": "Team Building Activities",
      "parents": [
          "eventservices"
      ]
  },
  {
      "alias": "teethwhitening",
      "title": "Teeth Whitening",
      "parents": [
          "beautysvc"
      ],
      "country_blacklist": [
          "DE",
          "AT",
          "CH"
      ]
  },
  {
      "alias": "telecommunications",
      "title": "Telecommunications",
      "parents": [
          "itservices"
      ],
      "country_blacklist": [
          "CL",
          "JP",
          "MX",
          "AR"
      ]
  },
  {
      "alias": "televisionserviceproviders",
      "title": "Television Service Providers",
      "parents": [
          "homeservices"
      ]
  },
  {
      "alias": "televisionstations",
      "title": "Television Stations",
      "parents": [
          "massmedia"
      ]
  },
  {
      "alias": "tempura",
      "title": "Tempura",
      "parents": [
          "japanese"
      ],
      "country_whitelist": [
          "SG",
          "JP",
          "TW"
      ]
  },
  {
      "alias": "tenantlaw",
      "title": "Tenant and Eviction Law",
      "parents": [
          "professional"
      ],
      "country_blacklist": [
          "CZ"
      ]
  },
  {
      "alias": "tennis",
      "title": "Tennis",
      "parents": [
          "active"
      ]
  },
  {
      "alias": "teochew",
      "title": "Teochew",
      "parents": [
          "chinese"
      ],
      "country_whitelist": [
          "HK",
          "MY",
          "SG",
          "TW"
      ]
  },
  {
      "alias": "teppanyaki",
      "title": "Teppanyaki",
      "parents": [
          "japanese"
      ],
      "country_whitelist": [
          "HK",
          "US",
          "TW",
          "JP",
          "AU",
          "NZ",
          "MX",
          "SG"
      ]
  },
  {
      "alias": "testprep",
      "title": "Test Preparation",
      "parents": [
          "education"
      ]
  },
  {
      "alias": "tex-mex",
      "title": "Tex-Mex",
      "parents": [
          "restaurants"
      ],
      "country_blacklist": [
          "AU",
          "ES",
          "DK",
          "PT"
      ]
  },
  {
      "alias": "thai",
      "title": "Thai",
      "parents": [
          "restaurants"
      ]
  },
  {
      "alias": "theater",
      "title": "Performing Arts",
      "parents": [
          "arts"
      ]
  },
  {
      "alias": "themedcafes",
      "title": "Themed Cafes",
      "parents": [
          "cafes"
      ],
      "country_whitelist": [
          "BE",
          "AT",
          "HK",
          "AR",
          "DE",
          "PH",
          "CL",
          "US",
          "IE",
          "TW",
          "DK",
          "NZ",
          "MX",
          "MY",
          "FI",
          "CA",
          "NL",
          "SE",
          "CH",
          "NO",
          "PL",
          "GB",
          "JP",
          "AU",
          "SG",
          "FR"
      ]
  },
  {
      "alias": "threadingservices",
      "title": "Threading Services",
      "parents": [
          "hairremoval"
      ]
  },
  {
      "alias": "thrift_stores",
      "title": "Thrift Stores",
      "parents": [
          "shopping"
      ],
      "country_blacklist": [
          "FI"
      ]
  },
  {
      "alias": "tickets",
      "title": "Tickets",
      "parents": [
          "shopping"
      ],
      "country_whitelist": [
          "SE",
          "PT",
          "CZ",
          "PL",
          "NO",
          "CL",
          "DK",
          "FI"
      ]
  },
  {
      "alias": "ticketsales",
      "title": "Ticket Sales",
      "parents": [
          "arts"
      ],
      "country_blacklist": [
          "NL",
          "SE",
          "PL",
          "IE",
          "GB",
          "ES",
          "TR",
          "NZ",
          "SG",
          "FI"
      ]
  },
  {
      "alias": "tikibars",
      "title": "Tiki Bars",
      "parents": [
          "bars"
      ],
      "country_blacklist": [
          "DE",
          "TR",
          "JP",
          "AT",
          "CH",
          "PL",
          "FR"
      ]
  },
  {
      "alias": "tiling",
      "title": "Tiling",
      "parents": [
          "homeservices"
      ],
      "country_blacklist": [
          "CA",
          "BR",
          "NL",
          "BE",
          "HK",
          "PT",
          "PL",
          "IE",
          "PH",
          "TW",
          "GB",
          "TR",
          "JP",
          "MY",
          "FI"
      ]
  },
  {
      "alias": "tires",
      "title": "Tires",
      "parents": [
          "auto"
      ]
  },
  {
      "alias": "titleloans",
      "title": "Title Loans",
      "parents": [
          "financialservices"
      ],
      "country_whitelist": [
          "US",
          "CA"
      ]
  },
  {
      "alias": "tobaccoshops",
      "title": "Tobacco Shops",
      "parents": [
          "shopping"
      ]
  },
  {
      "alias": "tofu",
      "title": "Tofu Shops",
      "parents": [
          "gourmet"
      ],
      "country_whitelist": [
          "JP"
      ]
  },
  {
      "alias": "tonkatsu",
      "title": "Tonkatsu",
      "parents": [
          "japanese"
      ],
      "country_whitelist": [
          "SG",
          "JP",
          "TW"
      ]
  },
  {
      "alias": "torshi",
      "title": "Torshi",
      "parents": [
          "food"
      ],
      "country_whitelist": [
          "TR"
      ]
  },
  {
      "alias": "tortillas",
      "title": "Tortillas",
      "parents": [
          "food"
      ],
      "country_whitelist": [
          "MX"
      ]
  },
  {
      "alias": "tours",
      "title": "Tours",
      "parents": [
          "hotelstravel"
      ]
  },
  {
      "alias": "towing",
      "title": "Towing",
      "parents": [
          "auto"
      ]
  },
  {
      "alias": "towncarservice",
      "title": "Town Car Service",
      "parents": [
          "transport"
      ],
      "country_whitelist": [
          "CA",
          "NL",
          "BE",
          "HK",
          "IE",
          "PH",
          "US",
          "TW",
          "GB",
          "AU",
          "NZ",
          "MY",
          "SG"
      ]
  },
  {
      "alias": "townhall",
      "title": "Town Hall",
      "parents": [
          "publicservicesgovt"
      ],
      "country_blacklist": [
          "CA",
          "HK",
          "PL",
          "IE",
          "PH",
          "TW",
          "GB",
          "JP",
          "AU",
          "NZ",
          "MY",
          "SG",
          "FI"
      ]
  },
  {
      "alias": "toxicologists",
      "title": "Toxicologists",
      "parents": [
          "physicians"
      ]
  },
  {
      "alias": "toys",
      "title": "Toy Stores",
      "parents": [
          "shopping"
      ]
  },
  {
      "alias": "tradamerican",
      "title": "American (Traditional)",
      "parents": [
          "restaurants"
      ]
  },
  {
      "alias": "tradclothing",
      "title": "Traditional Clothing",
      "parents": [
          "fashion"
      ]
  },
  {
      "alias": "tradefairs",
      "title": "Trade Fairs",
      "parents": [
          "festivals"
      ],
      "country_whitelist": [
          "NL",
          "BE",
          "AT",
          "CH",
          "PT",
          "CZ",
          "NO",
          "DE",
          "IT",
          "TR",
          "JP",
          "DK",
          "MX",
          "NZ",
          "FI"
      ]
  },
  {
      "alias": "traditional_swedish",
      "title": "Traditional Swedish",
      "parents": [
          "restaurants"
      ],
      "country_whitelist": [
          "SE",
          "FI"
      ]
  },
  {
      "alias": "trafficschools",
      "title": "Traffic Schools",
      "parents": [
          "specialtyschools"
      ],
      "country_whitelist": [
          "US"
      ]
  },
  {
      "alias": "trafficticketinglaw",
      "title": "Traffic Ticketing Law",
      "parents": [
          "lawyers"
      ],
      "country_whitelist": [
          "US"
      ]
  },
  {
      "alias": "trailerdealers",
      "title": "Trailer Dealers",
      "parents": [
          "auto"
      ],
      "country_whitelist": [
          "CA",
          "NO",
          "DE",
          "IE",
          "US",
          "GB",
          "AU",
          "DK",
          "NZ",
          "SG"
      ]
  },
  {
      "alias": "trailerrental",
      "title": "Trailer Rental",
      "parents": [
          "auto"
      ]
  },
  {
      "alias": "trailerrepair",
      "title": "Trailer Repair",
      "parents": [
          "auto"
      ],
      "country_whitelist": [
          "BR",
          "BE",
          "AT",
          "PT",
          "IE",
          "DE",
          "PH",
          "US",
          "DK",
          "NZ",
          "MY",
          "CA",
          "NL",
          "SE",
          "CH",
          "PL",
          "NO",
          "GB",
          "AU",
          "SG"
      ]
  },
  {
      "alias": "trains",
      "title": "Trains",
      "parents": [
          "transport"
      ],
      "country_blacklist": [
          "HK",
          "AR",
          "CL",
          "IT",
          "PH",
          "TW",
          "ES",
          "TR",
          "JP",
          "MX",
          "NZ",
          "MY",
          "SG",
          "FI"
      ]
  },
  {
      "alias": "trainstations",
      "title": "Train Stations",
      "parents": [
          "hotelstravel"
      ]
  },
  {
      "alias": "trampoline",
      "title": "Trampoline Parks",
      "parents": [
          "active"
      ],
      "country_blacklist": [
          "BR",
          "HK",
          "AR",
          "CL",
          "PH",
          "TW",
          "ES",
          "JP",
          "MX",
          "NZ",
          "MY",
          "SG"
      ]
  },
  {
      "alias": "translationservices",
      "title": "Translation Services",
      "parents": [
          "professional"
      ],
      "country_blacklist": [
          "SE"
      ]
  },
  {
      "alias": "transmissionrepair",
      "title": "Transmission Repair",
      "parents": [
          "auto"
      ],
      "country_blacklist": [
          "DE",
          "IT",
          "PH",
          "AT",
          "CH",
          "MY"
      ]
  },
  {
      "alias": "transport",
      "title": "Transportation",
      "parents": [
          "hotelstravel"
      ]
  },
  {
      "alias": "tras_os_montes",
      "title": "Tras-os-Montes",
      "parents": [
          "portuguese"
      ],
      "country_whitelist": [
          "PT"
      ]
  },
  {
      "alias": "trattorie",
      "title": "Trattorie",
      "parents": [
          "restaurants"
      ],
      "country_whitelist": [
          "CL",
          "IT",
          "CH",
          "AR",
          "PL",
          "FR"
      ]
  },
  {
      "alias": "travelagents",
      "title": "Travel Agents",
      "parents": [
          "travelservices"
      ],
      "country_blacklist": [
          "IT"
      ]
  },
  {
      "alias": "travelservices",
      "title": "Travel Services",
      "parents": [
          "hotelstravel"
      ]
  },
  {
      "alias": "treeservices",
      "title": "Tree Services",
      "parents": [
          "homeservices"
      ]
  },
  {
      "alias": "trinidadian",
      "title": "Trinidadian",
      "parents": [
          "caribbean"
      ],
      "country_whitelist": [
          "US"
      ]
  },
  {
      "alias": "triviahosts",
      "title": "Trivia Hosts",
      "parents": [
          "eventservices"
      ],
      "country_whitelist": [
          "US"
      ]
  },
  {
      "alias": "trophyshops",
      "title": "Trophy Shops",
      "parents": [
          "shopping"
      ],
      "country_blacklist": [
          "BR",
          "TR",
          "SE",
          "NZ",
          "SG",
          "FI"
      ]
  },
  {
      "alias": "tropicalmedicine",
      "title": "Tropical Medicine",
      "parents": [
          "physicians"
      ],
      "country_whitelist": [
          "DE",
          "IT",
          "BR",
          "NL",
          "BE",
          "AT",
          "CH"
      ]
  },
  {
      "alias": "truck_rental",
      "title": "Truck Rental",
      "parents": [
          "auto"
      ],
      "country_blacklist": [
          "NL",
          "TR",
          "JP",
          "SE",
          "CZ",
          "FI"
      ]
  },
  {
      "alias": "truckdealers",
      "title": "Commercial Truck Dealers",
      "parents": [
          "auto"
      ],
      "country_blacklist": [
          "TW",
          "TR",
          "JP",
          "SE",
          "HK",
          "CZ",
          "FI"
      ]
  },
  {
      "alias": "truckrepair",
      "title": "Commercial Truck Repair",
      "parents": [
          "auto"
      ],
      "country_whitelist": [
          "BR",
          "BE",
          "AT",
          "AR",
          "CL",
          "IE",
          "DE",
          "IT",
          "US",
          "PH",
          "DK",
          "NZ",
          "MX",
          "MY",
          "CA",
          "NL",
          "CH",
          "NO",
          "PL",
          "GB",
          "ES",
          "AU",
          "SG",
          "FR"
      ]
  },
  {
      "alias": "tubing",
      "title": "Tubing",
      "parents": [
          "active"
      ],
      "country_whitelist": [
          "US"
      ]
  },
  {
      "alias": "tuina",
      "title": "Tui Na",
      "parents": [
          "tcm"
      ]
  },
  {
      "alias": "turkish",
      "title": "Turkish",
      "parents": [
          "restaurants"
      ]
  },
  {
      "alias": "turkishravioli",
      "title": "Turkish Ravioli",
      "parents": [
          "turkish"
      ],
      "country_whitelist": [
          "TR"
      ]
  },
  {
      "alias": "tuscan",
      "title": "Tuscan",
      "parents": [
          "italian"
      ],
      "country_whitelist": [
          "IT",
          "US",
          "FR"
      ]
  },
  {
      "alias": "tutoring",
      "title": "Tutoring Centers",
      "parents": [
          "education"
      ]
  },
  {
      "alias": "tvmounting",
      "title": "TV Mounting",
      "parents": [
          "localservices"
      ],
      "country_blacklist": [
          "IT",
          "NL",
          "JP",
          "BE",
          "FR"
      ]
  },
  {
      "alias": "udon",
      "title": "Udon",
      "parents": [
          "japanese"
      ],
      "country_whitelist": [
          "TW",
          "JP",
          "HK",
          "SE",
          "DK",
          "NO",
          "FI"
      ]
  },
  {
      "alias": "ukrainian",
      "title": "Ukrainian",
      "parents": [
          "restaurants"
      ],
      "country_blacklist": [
          "ES",
          "TR",
          "DK"
      ]
  },
  {
      "alias": "ultrasoundimagingcenters",
      "title": "Ultrasound Imaging Centers",
      "parents": [
          "health"
      ]
  },
  {
      "alias": "unagi",
      "title": "Unagi",
      "parents": [
          "japanese"
      ],
      "country_whitelist": [
          "JP",
          "TW"
      ]
  },
  {
      "alias": "underseamedicine",
      "title": "Undersea/Hyperbaric Medicine",
      "parents": [
          "physicians"
      ]
  },
  {
      "alias": "uniforms",
      "title": "Uniforms",
      "parents": [
          "shopping"
      ],
      "country_blacklist": [
          "NL",
          "AT",
          "SE",
          "CH",
          "CZ",
          "IE",
          "TR",
          "JP"
      ]
  },
  {
      "alias": "university_housing",
      "title": "University Housing",
      "parents": [
          "realestate"
      ]
  },
  {
      "alias": "unofficialyelpevents",
      "title": "Unofficial Yelp Events",
      "parents": [
          "localflavor"
      ]
  },
  {
      "alias": "urgent_care",
      "title": "Urgent Care",
      "parents": [
          "health"
      ]
  },
  {
      "alias": "urologists",
      "title": "Urologists",
      "parents": [
          "physicians"
      ]
  },
  {
      "alias": "usedbooks",
      "title": "Used Bookstore",
      "parents": [
          "shopping"
      ],
      "country_blacklist": [
          "AU",
          "TR",
          "CL",
          "AR"
      ]
  },
  {
      "alias": "usedcardealers",
      "title": "Used Car Dealers",
      "parents": [
          "auto"
      ]
  },
  {
      "alias": "utilities",
      "title": "Utilities",
      "parents": [
          "homeservices"
      ],
      "country_whitelist": [
          "NL",
          "BE",
          "PT",
          "CZ",
          "PL",
          "IT",
          "US",
          "GB",
          "AU",
          "SG"
      ]
  },
  {
      "alias": "uzbek",
      "title": "Uzbek",
      "parents": [
          "restaurants"
      ],
      "country_whitelist": [
          "US",
          "CZ"
      ]
  },
  {
      "alias": "vacation_rentals",
      "title": "Vacation Rentals",
      "parents": [
          "hotelstravel"
      ],
      "country_blacklist": [
          "SG"
      ]
  },
  {
      "alias": "vacationrentalagents",
      "title": "Vacation Rental Agents",
      "parents": [
          "hotelstravel"
      ],
      "country_blacklist": [
          "ES",
          "SG"
      ]
  },
  {
      "alias": "valetservices",
      "title": "Valet Services",
      "parents": [
          "eventservices"
      ],
      "country_whitelist": [
          "US",
          "TR",
          "BR"
      ]
  },
  {
      "alias": "vapeshops",
      "title": "Vape Shops",
      "parents": [
          "shopping"
      ],
      "country_blacklist": [
          "SG",
          "BR"
      ]
  },
  {
      "alias": "vascularmedicine",
      "title": "Vascular Medicine",
      "parents": [
          "physicians"
      ]
  },
  {
      "alias": "vegan",
      "title": "Vegan",
      "parents": [
          "restaurants"
      ]
  },
  {
      "alias": "vegetarian",
      "title": "Vegetarian",
      "parents": [
          "restaurants"
      ]
  },
  {
      "alias": "vehicleshipping",
      "title": "Vehicle Shipping",
      "parents": [
          "auto"
      ]
  },
  {
      "alias": "vehiclewraps",
      "title": "Vehicle Wraps",
      "parents": [
          "auto"
      ],
      "country_blacklist": [
          "TR",
          "FR",
          "BE"
      ]
  },
  {
      "alias": "venetian",
      "title": "Venetian",
      "parents": [
          "italian"
      ],
      "country_whitelist": [
          "IT",
          "FR"
      ]
  },
  {
      "alias": "venezuelan",
      "title": "Venezuelan",
      "parents": [
          "latin"
      ],
      "country_whitelist": [
          "CL",
          "US",
          "CA",
          "ES",
          "PT",
          "AR",
          "FR"
      ]
  },
  {
      "alias": "venison",
      "title": "Venison",
      "parents": [
          "restaurants"
      ],
      "country_whitelist": [
          "CA",
          "CZ",
          "PL",
          "NO",
          "IE",
          "IT",
          "GB",
          "AU",
          "DK",
          "NZ",
          "SG"
      ]
  },
  {
      "alias": "venues",
      "title": "Venues & Event Spaces",
      "parents": [
          "eventservices"
      ]
  },
  {
      "alias": "vermouthbars",
      "title": "Vermouth Bars",
      "parents": [
          "bars"
      ],
      "country_blacklist": [
          "BR",
          "PL",
          "NO",
          "IT",
          "TR",
          "JP",
          "DK",
          "FR"
      ]
  },
  {
      "alias": "vet",
      "title": "Veterinarians",
      "parents": [
          "pets"
      ]
  },
  {
      "alias": "veteransorganizations",
      "title": "Veterans Organizations",
      "parents": [
          "social_clubs"
      ],
      "country_whitelist": [
          "US"
      ]
  },
  {
      "alias": "videoandgames",
      "title": "Videos & Video Game Rental",
      "parents": [
          "media"
      ]
  },
  {
      "alias": "videofilmproductions",
      "title": "Video/Film Production",
      "parents": [
          "professional"
      ]
  },
  {
      "alias": "videogamestores",
      "title": "Video Game Stores",
      "parents": [
          "media"
      ]
  },
  {
      "alias": "videographers",
      "title": "Videographers",
      "parents": [
          "eventservices"
      ]
  },
  {
      "alias": "vietnamese",
      "title": "Vietnamese",
      "parents": [
          "restaurants"
      ]
  },
  {
      "alias": "vintage",
      "title": "Used, Vintage & Consignment",
      "parents": [
          "fashion"
      ]
  },
  {
      "alias": "vinyl_records",
      "title": "Vinyl Records",
      "parents": [
          "media"
      ]
  },
  {
      "alias": "vinylsiding",
      "title": "Siding",
      "parents": [
          "homeservices"
      ],
      "country_whitelist": [
          "CA",
          "NL",
          "BE",
          "SE",
          "NO",
          "IE",
          "US",
          "GB",
          "AU",
          "DK",
          "NZ",
          "SG"
      ]
  },
  {
      "alias": "virtualrealitycenters",
      "title": "Virtual Reality Centers",
      "parents": [
          "arts"
      ]
  },
  {
      "alias": "visitorcenters",
      "title": "Visitor Centers",
      "parents": [
          "travelservices"
      ]
  },
  {
      "alias": "vitaminssupplements",
      "title": "Vitamins & Supplements",
      "parents": [
          "shopping"
      ],
      "country_blacklist": [
          "PH",
          "MY"
      ]
  },
  {
      "alias": "vocalcoach",
      "title": "Vocal Coach",
      "parents": [
          "musicinstrumentservices"
      ]
  },
  {
      "alias": "vocation",
      "title": "Vocational & Technical School",
      "parents": [
          "specialtyschools"
      ]
  },
  {
      "alias": "volleyball",
      "title": "Volleyball",
      "parents": [
          "active"
      ],
      "country_whitelist": [
          "BR",
          "AT",
          "SE",
          "CZ",
          "NO",
          "DE",
          "JP",
          "AU",
          "FI",
          "DK",
          "NZ",
          "SG",
          "FR"
      ]
  },
  {
      "alias": "waffles",
      "title": "Waffles",
      "parents": [
          "restaurants"
      ]
  },
  {
      "alias": "waldorfschools",
      "title": "Waldorf Schools",
      "parents": [
          "education"
      ],
      "country_blacklist": [
          "FI"
      ]
  },
  {
      "alias": "walkinclinics",
      "title": "Walk-in Clinics",
      "parents": [
          "medcenters"
      ],
      "country_blacklist": [
          "DE",
          "AT",
          "IT",
          "CH"
      ]
  },
  {
      "alias": "walkingtours",
      "title": "Walking Tours",
      "parents": [
          "tours"
      ]
  },
  {
      "alias": "wallpapering",
      "title": "Wallpapering",
      "parents": [
          "homeservices"
      ]
  },
  {
      "alias": "watch_repair",
      "title": "Watch Repair",
      "parents": [
          "localservices"
      ]
  },
  {
      "alias": "watches",
      "title": "Watches",
      "parents": [
          "shopping"
      ]
  },
  {
      "alias": "waterdelivery",
      "title": "Water Delivery",
      "parents": [
          "localservices"
      ],
      "country_whitelist": [
          "PH",
          "US",
          "BR",
          "CA",
          "HK",
          "MY"
      ]
  },
  {
      "alias": "waterheaterinstallrepair",
      "title": "Water Heater Installation/Repair",
      "parents": [
          "homeservices"
      ]
  },
  {
      "alias": "waterparks",
      "title": "Water Parks",
      "parents": [
          "active"
      ],
      "country_blacklist": [
          "AT",
          "HK",
          "CH",
          "AR",
          "CL",
          "DE",
          "IE",
          "GB",
          "AU",
          "NZ",
          "MY",
          "FI"
      ]
  },
  {
      "alias": "waterproofing",
      "title": "Waterproofing",
      "parents": [
          "homeservices"
      ]
  },
  {
      "alias": "waterpurification",
      "title": "Water Purification Services",
      "parents": [
          "homeservices"
      ]
  },
  {
      "alias": "waterstores",
      "title": "Water Stores",
      "parents": [
          "food"
      ],
      "country_whitelist": [
          "BR",
          "US",
          "CA",
          "MX"
      ]
  },
  {
      "alias": "watersuppliers",
      "title": "Water Suppliers",
      "parents": [
          "utilities"
      ]
  },
  {
      "alias": "watertaxis",
      "title": "Water Taxis",
      "parents": [
          "transport"
      ],
      "country_whitelist": [
          "IE",
          "IT",
          "GB",
          "AU",
          "MX",
          "NZ"
      ]
  },
  {
      "alias": "waxing",
      "title": "Waxing",
      "parents": [
          "hairremoval"
      ]
  },
  {
      "alias": "web_design",
      "title": "Web Design",
      "parents": [
          "professional"
      ]
  },
  {
      "alias": "wedding_planning",
      "title": "Wedding Planning",
      "parents": [
          "eventservices"
      ]
  },
  {
      "alias": "weddingchappels",
      "title": "Wedding Chapels",
      "parents": [
          "eventservices"
      ],
      "country_whitelist": [
          "AU",
          "US",
          "JP"
      ]
  },
  {
      "alias": "weightlosscenters",
      "title": "Weight Loss Centers",
      "parents": [
          "health"
      ]
  },
  {
      "alias": "welldrilling",
      "title": "Well Drilling",
      "parents": [
          "localservices"
      ],
      "country_whitelist": [
          "BR",
          "AT",
          "AR",
          "CL",
          "IT",
          "DE",
          "US",
          "PH",
          "DK",
          "MX",
          "MY",
          "CH",
          "CZ",
          "PL",
          "NO",
          "ES"
      ]
  },
  {
      "alias": "westernjapanese",
      "title": "Western Style Japanese Food",
      "parents": [
          "japanese"
      ],
      "country_whitelist": [
          "SG",
          "JP",
          "TW"
      ]
  },
  {
      "alias": "whalewatchingtours",
      "title": "Whale Watching Tours",
      "parents": [
          "tours"
      ],
      "country_blacklist": [
          "DE",
          "AT",
          "CH"
      ]
  },
  {
      "alias": "wheelrimrepair",
      "title": "Wheel & Rim Repair",
      "parents": [
          "auto"
      ],
      "country_whitelist": [
          "IT",
          "US",
          "PT"
      ]
  },
  {
      "alias": "whiskeybars",
      "title": "Whiskey Bars",
      "parents": [
          "bars"
      ],
      "country_blacklist": [
          "IT"
      ]
  },
  {
      "alias": "wholesale_stores",
      "title": "Wholesale Stores",
      "parents": [
          "shopping"
      ],
      "country_blacklist": [
          "DE",
          "AT",
          "CH"
      ]
  },
  {
      "alias": "wholesalers",
      "title": "Wholesalers",
      "parents": [
          "professional"
      ],
      "country_blacklist": [
          "BR",
          "FR",
          "HK",
          "SE",
          "PT",
          "CZ",
          "PH",
          "TW",
          "TR",
          "MY",
          "FI"
      ]
  },
  {
      "alias": "wigs",
      "title": "Wigs",
      "parents": [
          "shopping"
      ],
      "country_blacklist": [
          "BR",
          "AT",
          "HK",
          "SE",
          "CH",
          "IE",
          "PH",
          "TW",
          "GB",
          "TR",
          "JP",
          "NZ",
          "MY",
          "SG"
      ]
  },
  {
      "alias": "wildlifecontrol",
      "title": "Wildlife Control",
      "parents": [
          "localservices"
      ],
      "country_blacklist": [
          "JP"
      ]
  },
  {
      "alias": "wildlifehunting",
      "title": "Wildlife Hunting Ranges",
      "parents": [
          "active"
      ],
      "country_whitelist": [
          "US"
      ]
  },
  {
      "alias": "willstrustsprobates",
      "title": "Wills, Trusts, & Probates",
      "parents": [
          "estateplanning"
      ],
      "country_whitelist": [
          "CA",
          "NL",
          "BE",
          "IE",
          "IT",
          "US",
          "GB",
          "AU",
          "NZ",
          "SG"
      ]
  },
  {
      "alias": "windowsinstallation",
      "title": "Windows Installation",
      "parents": [
          "homeservices"
      ]
  },
  {
      "alias": "windowwashing",
      "title": "Window Washing",
      "parents": [
          "homeservices"
      ]
  },
  {
      "alias": "windshieldinstallrepair",
      "title": "Windshield Installation & Repair",
      "parents": [
          "auto"
      ],
      "country_blacklist": [
          "DE",
          "AT",
          "CZ",
          "CH"
      ]
  },
  {
      "alias": "wine_bars",
      "title": "Wine Bars",
      "parents": [
          "bars"
      ]
  },
  {
      "alias": "wineries",
      "title": "Wineries",
      "parents": [
          "food",
          "arts"
      ],
      "country_blacklist": [
          "FI"
      ]
  },
  {
      "alias": "winetasteclasses",
      "title": "Wine Tasting Classes",
      "parents": [
          "tastingclasses"
      ]
  },
  {
      "alias": "winetastingroom",
      "title": "Wine Tasting Room",
      "parents": [
          "wineries"
      ]
  },
  {
      "alias": "winetours",
      "title": "Wine Tours",
      "parents": [
          "tours"
      ]
  },
  {
      "alias": "wok",
      "title": "Wok",
      "parents": [
          "restaurants"
      ],
      "country_blacklist": [
          "CA",
          "BR",
          "HK",
          "AR",
          "PL",
          "IE",
          "IT",
          "US",
          "TW",
          "GB",
          "TR",
          "JP",
          "AU",
          "NZ",
          "SG"
      ]
  },
  {
      "alias": "womenscloth",
      "title": "Women's Clothing",
      "parents": [
          "fashion"
      ]
  },
  {
      "alias": "workerscomplaw",
      "title": "Workers Compensation Law",
      "parents": [
          "lawyers"
      ],
      "country_blacklist": [
          "DE",
          "AT",
          "CH",
          "FR"
      ]
  },
  {
      "alias": "wraps",
      "title": "Wraps",
      "parents": [
          "restaurants"
      ],
      "country_whitelist": [
          "US",
          "TR",
          "SE",
          "DK",
          "PT",
          "CZ",
          "NO"
      ]
  },
  {
      "alias": "xmasmarkets",
      "title": "Christmas Markets",
      "parents": [
          "festivals"
      ],
      "country_blacklist": [
          "IE",
          "US",
          "CA",
          "BR",
          "TR",
          "NZ",
          "SG"
      ]
  },
  {
      "alias": "yakiniku",
      "title": "Yakiniku",
      "parents": [
          "japanese"
      ],
      "country_whitelist": [
          "SG",
          "JP",
          "TW"
      ]
  },
  {
      "alias": "yakitori",
      "title": "Yakitori",
      "parents": [
          "japanese"
      ],
      "country_whitelist": [
          "SG",
          "JP",
          "TW"
      ]
  },
  {
      "alias": "yelpevents",
      "title": "Yelp Events",
      "parents": [
          "localflavor"
      ]
  },
  {
      "alias": "yoga",
      "title": "Yoga",
      "parents": [
          "fitness"
      ]
  },
  {
      "alias": "youth_club",
      "title": "Youth Club",
      "parents": [
          "localservices"
      ],
      "country_whitelist": [
          "BE",
          "PT",
          "IE",
          "DE",
          "IT",
          "DK",
          "NZ",
          "FI",
          "CA",
          "NL",
          "SE",
          "CH",
          "CZ",
          "NO",
          "GB",
          "AU",
          "SG",
          "FR"
      ]
  },
  {
      "alias": "yucatan",
      "title": "Yucatan",
      "parents": [
          "mexican"
      ],
      "country_whitelist": [
          "MX"
      ]
  },
  {
      "alias": "yugoslav",
      "title": "Yugoslav",
      "parents": [
          "restaurants"
      ],
      "country_whitelist": [
          "IT",
          "BE",
          "AU",
          "SE",
          "PT",
          "FR"
      ]
  },
  {
      "alias": "zapiekanka",
      "title": "Zapiekanka",
      "parents": [
          "food"
      ],
      "country_whitelist": [
          "PL"
      ]
  },
  {
      "alias": "zipline",
      "title": "Ziplining",
      "parents": [
          "active"
      ]
  },
  {
      "alias": "zoos",
      "title": "Zoos",
      "parents": [
          "active"
      ]
  },
  {
      "alias": "zorbing",
      "title": "Zorbing",
      "parents": [
          "active"
      ],
      "country_whitelist": [
          "US",
          "ES",
          "MX",
          "NZ",
          "PT",
          "CZ"
      ]
  }
];

export const L1Categories = categories.filter(cat => !cat.parents.length)


