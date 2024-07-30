const countriesArray = [
    {
        "countryName": "Afghanistan",
        "countryCode": "AF",
        "countryShortName": "AFG",
        "phoneCode": "+93"
    },
    {
        "countryName": "Albania",
        "countryCode": "AL",
        "countryShortName": "ALB",
        "phoneCode": "+355"
    },
    {
        "countryName": "Algeria",
        "countryCode": "DZ",
        "countryShortName": "DZA",
        "phoneCode": "+213"
    },
    {
        "countryName": "Andorra",
        "countryCode": "AD",
        "countryShortName": "AND",
        "phoneCode": "+376"
    },
    {
        "countryName": "Angola",
        "countryCode": "AO",
        "countryShortName": "AGO",
        "phoneCode": "+244"
    },
    {
        "countryName": "Antigua and Barbuda",
        "countryCode": "AG",
        "countryShortName": "ATG",
        "phoneCode": "+1-268"
    },
    {
        "countryName": "Argentina",
        "countryCode": "AR",
        "countryShortName": "ARG",
        "phoneCode": "+54"
    },
    {
        "countryName": "Armenia",
        "countryCode": "AM",
        "countryShortName": "ARM",
        "phoneCode": "+374"
    },
    {
        "countryName": "Australia",
        "countryCode": "AU",
        "countryShortName": "AUS",
        "phoneCode": "+61"
    },
    {
        "countryName": "Austria",
        "countryCode": "AT",
        "countryShortName": "AUT",
        "phoneCode": "+43"
    },
    {
        "countryName": "Azerbaijan",
        "countryCode": "AZ",
        "countryShortName": "AZE",
        "phoneCode": "+994"
    },
    {
        "countryName": "Bahamas",
        "countryCode": "BS",
        "countryShortName": "BHS",
        "phoneCode": "+1-242"
    },
    {
        "countryName": "Bahrain",
        "countryCode": "BH",
        "countryShortName": "BHR",
        "phoneCode": "+973"
    },
    {
        "countryName": "Bangladesh",
        "countryCode": "BD",
        "countryShortName": "BGD",
        "phoneCode": "+880"
    },
    {
        "countryName": "Barbados",
        "countryCode": "BB",
        "countryShortName": "BRB",
        "phoneCode": "+1-246"
    },
    {
        "countryName": "Belarus",
        "countryCode": "BY",
        "countryShortName": "BLR",
        "phoneCode": "+375"
    },
    {
        "countryName": "Belgium",
        "countryCode": "BE",
        "countryShortName": "BEL",
        "phoneCode": "+32"
    },
    {
        "countryName": "Belize",
        "countryCode": "BZ",
        "countryShortName": "BLZ",
        "phoneCode": "+501"
    },
    {
        "countryName": "Benin",
        "countryCode": "BJ",
        "countryShortName": "BEN",
        "phoneCode": "+229"
    },
    {
        "countryName": "Bhutan",
        "countryCode": "BT",
        "countryShortName": "BTN",
        "phoneCode": "+975"
    },
    {
        "countryName": "Bolivia",
        "countryCode": "BO",
        "countryShortName": "BOL",
        "phoneCode": "+591"
    },
    {
        "countryName": "Bosnia and Herzegovina",
        "countryCode": "BA",
        "countryShortName": "BIH",
        "phoneCode": "+387"
    },
    {
        "countryName": "Botswana",
        "countryCode": "BW",
        "countryShortName": "BWA",
        "phoneCode": "+267"
    },
    {
        "countryName": "Brazil",
        "countryCode": "BR",
        "countryShortName": "BRA",
        "phoneCode": "+55"
    },
    {
        "countryName": "Brunei Darussalam",
        "countryCode": "BN",
        "countryShortName": "BRN",
        "phoneCode": "+673"
    },
    {
        "countryName": "Bulgaria",
        "countryCode": "BG",
        "countryShortName": "BGR",
        "phoneCode": "+359"
    },
    {
        "countryName": "Burkina Faso",
        "countryCode": "BF",
        "countryShortName": "BFA",
        "phoneCode": "+226"
    },
    {
        "countryName": "Burundi",
        "countryCode": "BI",
        "countryShortName": "BDI",
        "phoneCode": "+257"
    },
    {
        "countryName": "Cabo Verde",
        "countryCode": "CV",
        "countryShortName": "CPV",
        "phoneCode": "+238"
    },
    {
        "countryName": "Cambodia",
        "countryCode": "KH",
        "countryShortName": "KHM",
        "phoneCode": "+855"
    },
    {
        "countryName": "Cameroon",
        "countryCode": "CM",
        "countryShortName": "CMR",
        "phoneCode": "+237"
    },
    {
        "countryName": "Canada",
        "countryCode": "CA",
        "countryShortName": "CAN",
        "phoneCode": "+1"
    },
    {
        "countryName": "Central African Republic",
        "countryCode": "CF",
        "countryShortName": "CAF",
        "phoneCode": "+236"
    },
    {
        "countryName": "Chad",
        "countryCode": "TD",
        "countryShortName": "TCD",
        "phoneCode": "+235"
    },
    {
        "countryName": "Chile",
        "countryCode": "CL",
        "countryShortName": "CHL",
        "phoneCode": "+56"
    },
    {
        "countryName": "China",
        "countryCode": "CN",
        "countryShortName": "CHN",
        "phoneCode": "+86"
    },
    {
        "countryName": "Colombia",
        "countryCode": "CO",
        "countryShortName": "COL",
        "phoneCode": "+57"
    },
    {
        "countryName": "Comoros",
        "countryCode": "KM",
        "countryShortName": "COM",
        "phoneCode": "+269"
    },
    {
        "countryName": "Congo",
        "countryCode": "CG",
        "countryShortName": "COG",
        "phoneCode": "+242"
    },
    {
        "countryName": "Congo, Democratic Republic of the",
        "countryCode": "CD",
        "countryShortName": "COD",
        "phoneCode": "+243"
    },
    {
        "countryName": "Costa Rica",
        "countryCode": "CR",
        "countryShortName": "CRI",
        "phoneCode": "+506"
    },
    {
        "countryName": "Croatia",
        "countryCode": "HR",
        "countryShortName": "HRV",
        "phoneCode": "+385"
    },
    {
        "countryName": "Cuba",
        "countryCode": "CU",
        "countryShortName": "CUB",
        "phoneCode": "+53"
    },
    {
        "countryName": "Cyprus",
        "countryCode": "CY",
        "countryShortName": "CYP",
        "phoneCode": "+357"
    },
    {
        "countryName": "Czech Republic",
        "countryCode": "CZ",
        "countryShortName": "CZE",
        "phoneCode": "+420"
    },
    {
        "countryName": "Denmark",
        "countryCode": "DK",
        "countryShortName": "DNK",
        "phoneCode": "+45"
    },
    {
        "countryName": "Djibouti",
        "countryCode": "DJ",
        "countryShortName": "DJI",
        "phoneCode": "+253"
    },
    {
        "countryName": "Dominica",
        "countryCode": "DM",
        "countryShortName": "DMA",
        "phoneCode": "+1-767"
    },
    {
        "countryName": "Dominican Republic",
        "countryCode": "DO",
        "countryShortName": "DOM",
        "phoneCode": "+1-809"
    },
    {
        "countryName": "Ecuador",
        "countryCode": "EC",
        "countryShortName": "ECU",
        "phoneCode": "+593"
    },
    {
        "countryName": "Egypt",
        "countryCode": "EG",
        "countryShortName": "EGY",
        "phoneCode": "+20"
    },
    {
        "countryName": "El Salvador",
        "countryCode": "SV",
        "countryShortName": "SLV",
        "phoneCode": "+503"
    },
    {
        "countryName": "Equatorial Guinea",
        "countryCode": "GQ",
        "countryShortName": "GNQ",
        "phoneCode": "+240"
    },
    {
        "countryName": "Eritrea",
        "countryCode": "ER",
        "countryShortName": "ERI",
        "phoneCode": "+291"
    },
    {
        "countryName": "Estonia",
        "countryCode": "EE",
        "countryShortName": "EST",
        "phoneCode": "+372"
    },
    {
        "countryName": "Eswatini",
        "countryCode": "SZ",
        "countryShortName": "SWZ",
        "phoneCode": "+268"
    },
    {
        "countryName": "Ethiopia",
        "countryCode": "ET",
        "countryShortName": "ETH",
        "phoneCode": "+251"
    },
    {
        "countryName": "Fiji",
        "countryCode": "FJ",
        "countryShortName": "FJI",
        "phoneCode": "+679"
    },
    {
        "countryName": "Finland",
        "countryCode": "FI",
        "countryShortName": "FIN",
        "phoneCode": "+358"
    },
    {
        "countryName": "France",
        "countryCode": "FR",
        "countryShortName": "FRA",
        "phoneCode": "+33"
    },
    {
        "countryName": "Gabon",
        "countryCode": "GA",
        "countryShortName": "GAB",
        "phoneCode": "+241"
    },
    {
        "countryName": "Gambia",
        "countryCode": "GM",
        "countryShortName": "GMB",
        "phoneCode": "+220"
    },
    {
        "countryName": "Georgia",
        "countryCode": "GE",
        "countryShortName": "GEO",
        "phoneCode": "+995"
    },
    {
        "countryName": "Germany",
        "countryCode": "DE",
        "countryShortName": "DEU",
        "phoneCode": "+49"
    },
    {
        "countryName": "Ghana",
        "countryCode": "GH",
        "countryShortName": "GHA",
        "phoneCode": "+233"
    },
    {
        "countryName": "Greece",
        "countryCode": "GR",
        "countryShortName": "GRC",
        "phoneCode": "+30"
    },
    {
        "countryName": "Grenada",
        "countryCode": "GD",
        "countryShortName": "GRD",
        "phoneCode": "+1-473"
    },
    {
        "countryName": "Guatemala",
        "countryCode": "GT",
        "countryShortName": "GTM",
        "phoneCode": "+502"
    },
    {
        "countryName": "Guinea",
        "countryCode": "GN",
        "countryShortName": "GIN",
        "phoneCode": "+224"
    },
    {
        "countryName": "Guinea-Bissau",
        "countryCode": "GW",
        "countryShortName": "GNB",
        "phoneCode": "+245"
    },
    {
        "countryName": "Guyana",
        "countryCode": "GY",
        "countryShortName": "GUY",
        "phoneCode": "+592"
    },
    {
        "countryName": "Haiti",
        "countryCode": "HT",
        "countryShortName": "HTI",
        "phoneCode": "+509"
    },
    {
        "countryName": "Honduras",
        "countryCode": "HN",
        "countryShortName": "HND",
        "phoneCode": "+504"
    },
    {
        "countryName": "Hungary",
        "countryCode": "HU",
        "countryShortName": "HUN",
        "phoneCode": "+36"
    },
    {
        "countryName": "Iceland",
        "countryCode": "IS",
        "countryShortName": "ISL",
        "phoneCode": "+354"
    },
    {
        "countryName": "India",
        "countryCode": "IN",
        "countryShortName": "IND",
        "phoneCode": "+91"
    },
    {
        "countryName": "Indonesia",
        "countryCode": "ID",
        "countryShortName": "IDN",
        "phoneCode": "+62"
    },
    {
        "countryName": "Iran",
        "countryCode": "IR",
        "countryShortName": "IRN",
        "phoneCode": "+98"
    },
    {
        "countryName": "Iraq",
        "countryCode": "IQ",
        "countryShortName": "IRQ",
        "phoneCode": "+964"
    },
    {
        "countryName": "Ireland",
        "countryCode": "IE",
        "countryShortName": "IRL",
        "phoneCode": "+353"
    },
    {
        "countryName": "Israel",
        "countryCode": "IL",
        "countryShortName": "ISR",
        "phoneCode": "+972"
    },
    {
        "countryName": "Italy",
        "countryCode": "IT",
        "countryShortName": "ITA",
        "phoneCode": "+39"
    },
    {
        "countryName": "Jamaica",
        "countryCode": "JM",
        "countryShortName": "JAM",
        "phoneCode": "+1-876"
    },
    {
        "countryName": "Japan",
        "countryCode": "JP",
        "countryShortName": "JPN",
        "phoneCode": "+81"
    },
    {
        "countryName": "Jordan",
        "countryCode": "JO",
        "countryShortName": "JOR",
        "phoneCode": "+962"
    },
    {
        "countryName": "Kazakhstan",
        "countryCode": "KZ",
        "countryShortName": "KAZ",
        "phoneCode": "+7"
    },
    {
        "countryName": "Kenya",
        "countryCode": "KE",
        "countryShortName": "KEN",
        "phoneCode": "+254"
    },
    {
        "countryName": "Kiribati",
        "countryCode": "KI",
        "countryShortName": "KIR",
        "phoneCode": "+686"
    },
    {
        "countryName": "Korea, Democratic People's Republic of",
        "countryCode": "KP",
        "countryShortName": "PRK",
        "phoneCode": "+850"
    },
    {
        "countryName": "Korea, Republic of",
        "countryCode": "KR",
        "countryShortName": "KOR",
        "phoneCode": "+82"
    },
    {
        "countryName": "Kuwait",
        "countryCode": "KW",
        "countryShortName": "KWT",
        "phoneCode": "+965"
    },
    {
        "countryName": "Kyrgyzstan",
        "countryCode": "KG",
        "countryShortName": "KGZ",
        "phoneCode": "+996"
    },
    {
        "countryName": "Lao People's Democratic Republic",
        "countryCode": "LA",
        "countryShortName": "LAO",
        "phoneCode": "+856"
    },
    {
        "countryName": "Latvia",
        "countryCode": "LV",
        "countryShortName": "LVA",
        "phoneCode": "+371"
    },
    {
        "countryName": "Lebanon",
        "countryCode": "LB",
        "countryShortName": "LBN",
        "phoneCode": "+961"
    },
    {
        "countryName": "Lesotho",
        "countryCode": "LS",
        "countryShortName": "LSO",
        "phoneCode": "+266"
    },
    {
        "countryName": "Liberia",
        "countryCode": "LR",
        "countryShortName": "LBR",
        "phoneCode": "+231"
    },
    {
        "countryName": "Libya",
        "countryCode": "LY",
        "countryShortName": "LBY",
        "phoneCode": "+218"
    },
    {
        "countryName": "Liechtenstein",
        "countryCode": "LI",
        "countryShortName": "LIE",
        "phoneCode": "+423"
    },
    {
        "countryName": "Lithuania",
        "countryCode": "LT",
        "countryShortName": "LTU",
        "phoneCode": "+370"
    },
    {
        "countryName": "Luxembourg",
        "countryCode": "LU",
        "countryShortName": "LUX",
        "phoneCode": "+352"
    },
    {
        "countryName": "Madagascar",
        "countryCode": "MG",
        "countryShortName": "MDG",
        "phoneCode": "+261"
    },
    {
        "countryName": "Malawi",
        "countryCode": "MW",
        "countryShortName": "MWI",
        "phoneCode": "+265"
    },
    {
        "countryName": "Malaysia",
        "countryCode": "MY",
        "countryShortName": "MYS",
        "phoneCode": "+60"
    },
    {
        "countryName": "Maldives",
        "countryCode": "MV",
        "countryShortName": "MDV",
        "phoneCode": "+960"
    },
    {
        "countryName": "Mali",
        "countryCode": "ML",
        "countryShortName": "MLI",
        "phoneCode": "+223"
    },
    {
        "countryName": "Malta",
        "countryCode": "MT",
        "countryShortName": "MLT",
        "phoneCode": "+356"
    },
    {
        "countryName": "Marshall Islands",
        "countryCode": "MH",
        "countryShortName": "MHL",
        "phoneCode": "+692"
    },
    {
        "countryName": "Mauritania",
        "countryCode": "MR",
        "countryShortName": "MRT",
        "phoneCode": "+222"
    },
    {
        "countryName": "Mauritius",
        "countryCode": "MU",
        "countryShortName": "MUS",
        "phoneCode": "+230"
    },
    {
        "countryName": "Mexico",
        "countryCode": "MX",
        "countryShortName": "MEX",
        "phoneCode": "+52"
    },
    {
        "countryName": "Micronesia (Federated States of)",
        "countryCode": "FM",
        "countryShortName": "FSM",
        "phoneCode": "+691"
    },
    {
        "countryName": "Moldova, Republic of",
        "countryCode": "MD",
        "countryShortName": "MDA",
        "phoneCode": "+373"
    },
    {
        "countryName": "Monaco",
        "countryCode": "MC",
        "countryShortName": "MCO",
        "phoneCode": "+377"
    },
    {
        "countryName": "Mongolia",
        "countryCode": "MN",
        "countryShortName": "MNG",
        "phoneCode": "+976"
    },
    {
        "countryName": "Montenegro",
        "countryCode": "ME",
        "countryShortName": "MNE",
        "phoneCode": "+382"
    },
    {
        "countryName": "Morocco",
        "countryCode": "MA",
        "countryShortName": "MAR",
        "phoneCode": "+212"
    },
    {
        "countryName": "Mozambique",
        "countryCode": "MZ",
        "countryShortName": "MOZ",
        "phoneCode": "+258"
    },
    {
        "countryName": "Myanmar",
        "countryCode": "MM",
        "countryShortName": "MMR",
        "phoneCode": "+95"
    },
    {
        "countryName": "Namibia",
        "countryCode": "NA",
        "countryShortName": "NAM",
        "phoneCode": "+264"
    },
    {
        "countryName": "Nauru",
        "countryCode": "NR",
        "countryShortName": "NRU",
        "phoneCode": "+674"
    },
    {
        "countryName": "Nepal",
        "countryCode": "NP",
        "countryShortName": "NPL",
        "phoneCode": "+977"
    },
    {
        "countryName": "Netherlands",
        "countryCode": "NL",
        "countryShortName": "NLD",
        "phoneCode": "+31"
    },
    {
        "countryName": "New Zealand",
        "countryCode": "NZ",
        "countryShortName": "NZL",
        "phoneCode": "+64"
    },
    {
        "countryName": "Nicaragua",
        "countryCode": "NI",
        "countryShortName": "NIC",
        "phoneCode": "+505"
    },
    {
        "countryName": "Niger",
        "countryCode": "NE",
        "countryShortName": "NER",
        "phoneCode": "+227"
    },
    {
        "countryName": "Nigeria",
        "countryCode": "NG",
        "countryShortName": "NGA",
        "phoneCode": "+234"
    },
    {
        "countryName": "North Macedonia",
        "countryCode": "MK",
        "countryShortName": "MKD",
        "phoneCode": "+389"
    },
    {
        "countryName": "Norway",
        "countryCode": "NO",
        "countryShortName": "NOR",
        "phoneCode": "+47"
    },
    {
        "countryName": "Oman",
        "countryCode": "OM",
        "countryShortName": "OMN",
        "phoneCode": "+968"
    },
    {
        "countryName": "Pakistan",
        "countryCode": "PK",
        "countryShortName": "PAK",
        "phoneCode": "+92"
    },
    {
        "countryName": "Palau",
        "countryCode": "PW",
        "countryShortName": "PLW",
        "phoneCode": "+680"
    },
    {
        "countryName": "Palestine, State of",
        "countryCode": "PS",
        "countryShortName": "PSE",
        "phoneCode": "+970"
    },
    {
        "countryName": "Panama",
        "countryCode": "PA",
        "countryShortName": "PAN",
        "phoneCode": "+507"
    },
    {
        "countryName": "Papua New Guinea",
        "countryCode": "PG",
        "countryShortName": "PNG",
        "phoneCode": "+675"
    },
    {
        "countryName": "Paraguay",
        "countryCode": "PY",
        "countryShortName": "PRY",
        "phoneCode": "+595"
    },
    {
        "countryName": "Peru",
        "countryCode": "PE",
        "countryShortName": "PER",
        "phoneCode": "+51"
    },
    {
        "countryName": "Philippines",
        "countryCode": "PH",
        "countryShortName": "PHL",
        "phoneCode": "+63"
    },
    {
        "countryName": "Poland",
        "countryCode": "PL",
        "countryShortName": "POL",
        "phoneCode": "+48"
    },
    {
        "countryName": "Portugal",
        "countryCode": "PT",
        "countryShortName": "PRT",
        "phoneCode": "+351"
    },
    {
        "countryName": "Qatar",
        "countryCode": "QA",
        "countryShortName": "QAT",
        "phoneCode": "+974"
    },
    {
        "countryName": "Romania",
        "countryCode": "RO",
        "countryShortName": "ROU",
        "phoneCode": "+40"
    },
    {
        "countryName": "Russian Federation",
        "countryCode": "RU",
        "countryShortName": "RUS",
        "phoneCode": "+7"
    },
    {
        "countryName": "Rwanda",
        "countryCode": "RW",
        "countryShortName": "RWA",
        "phoneCode": "+250"
    },
    {
        "countryName": "Saint Kitts and Nevis",
        "countryCode": "KN",
        "countryShortName": "KNA",
        "phoneCode": "+1-869"
    },
    {
        "countryName": "Saint Lucia",
        "countryCode": "LC",
        "countryShortName": "LCA",
        "phoneCode": "+1-758"
    },
    {
        "countryName": "Saint Vincent and the Grenadines",
        "countryCode": "VC",
        "countryShortName": "VCT",
        "phoneCode": "+1-784"
    },
    {
        "countryName": "Samoa",
        "countryCode": "WS",
        "countryShortName": "WSM",
        "phoneCode": "+685"
    },
    {
        "countryName": "San Marino",
        "countryCode": "SM",
        "countryShortName": "SMR",
        "phoneCode": "+378"
    },
    {
        "countryName": "Sao Tome and Principe",
        "countryCode": "ST",
        "countryShortName": "STP",
        "phoneCode": "+239"
    },
    {
        "countryName": "Saudi Arabia",
        "countryCode": "SA",
        "countryShortName": "SAU",
        "phoneCode": "+966"
    },
    {
        "countryName": "Senegal",
        "countryCode": "SN",
        "countryShortName": "SEN",
        "phoneCode": "+221"
    },
    {
        "countryName": "Serbia",
        "countryCode": "RS",
        "countryShortName": "SRB",
        "phoneCode": "+381"
    },
    {
        "countryName": "Seychelles",
        "countryCode": "SC",
        "countryShortName": "SYC",
        "phoneCode": "+248"
    },
    {
        "countryName": "Sierra Leone",
        "countryCode": "SL",
        "countryShortName": "SLE",
        "phoneCode": "+232"
    },
    {
        "countryName": "Singapore",
        "countryCode": "SG",
        "countryShortName": "SGP",
        "phoneCode": "+65"
    },
    {
        "countryName": "Slovakia",
        "countryCode": "SK",
        "countryShortName": "SVK",
        "phoneCode": "+421"
    },
    {
        "countryName": "Slovenia",
        "countryCode": "SI",
        "countryShortName": "SVN",
        "phoneCode": "+386"
    },
    {
        "countryName": "Solomon Islands",
        "countryCode": "SB",
        "countryShortName": "SLB",
        "phoneCode": "+677"
    },
    {
        "countryName": "Somalia",
        "countryCode": "SO",
        "countryShortName": "SOM",
        "phoneCode": "+252"
    },
    {
        "countryName": "South Africa",
        "countryCode": "ZA",
        "countryShortName": "ZAF",
        "phoneCode": "+27"
    },
    {
        "countryName": "South Sudan",
        "countryCode": "SS",
        "countryShortName": "SSD",
        "phoneCode": "+211"
    },
    {
        "countryName": "Spain",
        "countryCode": "ES",
        "countryShortName": "ESP",
        "phoneCode": "+34"
    },
    {
        "countryName": "Sri Lanka",
        "countryCode": "LK",
        "countryShortName": "LKA",
        "phoneCode": "+94"
    },
    {
        "countryName": "Sudan",
        "countryCode": "SD",
        "countryShortName": "SDN",
        "phoneCode": "+249"
    },
    {
        "countryName": "Suriname",
        "countryCode": "SR",
        "countryShortName": "SUR",
        "phoneCode": "+597"
    },
    {
        "countryName": "Sweden",
        "countryCode": "SE",
        "countryShortName": "SWE",
        "phoneCode": "+46"
    },
    {
        "countryName": "Switzerland",
        "countryCode": "CH",
        "countryShortName": "CHE",
        "phoneCode": "+41"
    },
    {
        "countryName": "Syrian Arab Republic",
        "countryCode": "SY",
        "countryShortName": "SYR",
        "phoneCode": "+963"
    },
    {
        "countryName": "Tajikistan",
        "countryCode": "TJ",
        "countryShortName": "TJK",
        "phoneCode": "+992"
    },
    {
        "countryName": "Tanzania, United Republic of",
        "countryCode": "TZ",
        "countryShortName": "TZA",
        "phoneCode": "+255"
    },
    {
        "countryName": "Thailand",
        "countryCode": "TH",
        "countryShortName": "THA",
        "phoneCode": "+66"
    },
    {
        "countryName": "Timor-Leste",
        "countryCode": "TL",
        "countryShortName": "TLS",
        "phoneCode": "+670"
    },
    {
        "countryName": "Togo",
        "countryCode": "TG",
        "countryShortName": "TGO",
        "phoneCode": "+228"
    },
    {
        "countryName": "Tonga",
        "countryCode": "TO",
        "countryShortName": "TON",
        "phoneCode": "+676"
    },
    {
        "countryName": "Trinidad and Tobago",
        "countryCode": "TT",
        "countryShortName": "TTO",
        "phoneCode": "+1-868"
    },
    {
        "countryName": "Tunisia",
        "countryCode": "TN",
        "countryShortName": "TUN",
        "phoneCode": "+216"
    },
    {
        "countryName": "Turkey",
        "countryCode": "TR",
        "countryShortName": "TUR",
        "phoneCode": "+90"
    },
    {
        "countryName": "Turkmenistan",
        "countryCode": "TM",
        "countryShortName": "TKM",
        "phoneCode": "+993"
    },
    {
        "countryName": "Tuvalu",
        "countryCode": "TV",
        "countryShortName": "TUV",
        "phoneCode": "+688"
    },
    {
        "countryName": "Uganda",
        "countryCode": "UG",
        "countryShortName": "UGA",
        "phoneCode": "+256"
    },
    {
        "countryName": "Ukraine",
        "countryCode": "UA",
        "countryShortName": "UKR",
        "phoneCode": "+380"
    },
    {
        "countryName": "United Arab Emirates",
        "countryCode": "AE",
        "countryShortName": "ARE",
        "phoneCode": "+971"
    },
    {
        "countryName": "United Kingdom of Great Britain and Northern Ireland",
        "countryCode": "GB",
        "countryShortName": "GBR",
        "phoneCode": "+44"
    },
    {
        "countryName": "United States of America",
        "countryCode": "US",
        "countryShortName": "USA",
        "phoneCode": "+1"
    },
    {
        "countryName": "Uruguay",
        "countryCode": "UY",
        "countryShortName": "URY",
        "phoneCode": "+598"
    },
    {
        "countryName": "Uzbekistan",
        "countryCode": "UZ",
        "countryShortName": "UZB",
        "phoneCode": "+998"
    },
    {
        "countryName": "Vanuatu",
        "countryCode": "VU",
        "countryShortName": "VUT",
        "phoneCode": "+678"
    },
    {
        "countryName": "Venezuela (Bolivarian Republic of)",
        "countryCode": "VE",
        "countryShortName": "VEN",
        "phoneCode": "+58"
    },
    {
        "countryName": "Viet Nam",
        "countryCode": "VN",
        "countryShortName": "VNM",
        "phoneCode": "+84"
    },
    {
        "countryName": "Yemen",
        "countryCode": "YE",
        "countryShortName": "YEM",
        "phoneCode": "+967"
    },
    {
        "countryName": "Zambia",
        "countryCode": "ZM",
        "countryShortName": "ZMB",
        "phoneCode": "+260"
    },
    {
        "countryName": "Zimbabwe",
        "countryCode": "ZW",
        "countryShortName": "ZWE",
        "phoneCode": "+263"
    }
];

export {countriesArray};