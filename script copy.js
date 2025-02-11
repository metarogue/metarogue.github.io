// Complete mapping for your tier list
const pokemonNameToId = {
    // Z Tier
    'Arceus': 493,
    'Mega-Rayquaza': 384,
    'Kyogre': 382,
    'Groudon': 383,
    'Calyrex-Shadow': 898,
    'Mega-Mewtwo-Y': 150,
    'Mewtwo': 150,
    'Marshadow': 802,
    
    // S+ Tier
    'Necrozma-Dusk Mane': 800,
    'Zacian-Crowned': 888,
    'Magearna': 801,
    'Aegislash': 681,
    'Mimikyu': 778,
    'Xerneas': 716,
    'Mega-Salamence': 373,
    'Dragonite': 149,
    'Yveltal': 717,
    'Lunala': 792,
    'Mega-Gengar': 94,
    'Jirachi': 385,
    'Mew': 151,
    'Gliscor': 472,
    
    // S Tier
    'Darmanitan-Galar': 555,
    'Dragapult': 887,
    'Excadrill': 530,
    'Mega-Lucario': 448,
    'Zygarde-Complete': 718,
    'Salamence': 373,
    'Rayquaza': 384,
    'Kyurem-Black': 646,
    'Naganadel': 804,
    'Mega-Blastoise': 9,
    'Lucario': 448,
    'Milotic': 350,
    'Cetitan': 975,
    'Metagross': 376,
    'Togedemaru': 777,
    'Crobat': 169,
    'Whimsicott': 547,
    'Reuniclus': 579,
    'Hippowdon': 450,
    'Flygon': 330,
    'Mega-Venusaur': 3,
    'Ninetales': 38,
    'Zygarde-50%': 718,
    'Dracovish': 882,
    'Gengar': 94,
    'Lugia': 249,
    'Landorus-Therian': 645,
    'Ho-oh': 250,
    'Volcarona': 637,

    // A Tier
    'Suicune': 245,
    'Slowbro': 80,
    'Mega-Alakazam': 65,
    'Cloyster': 91,
    'Weavile': 461,
    'Mega-Blaziken': 257,
    'Urshifu-Rapid-Strike': 892,
    'Great Tusk': 984,
    'Garchomp': 445,
    'Mega-Garchomp': 445,
    'Mega-Tyranitar': 248,
    'Tyranitar': 248,
    'Medicham': 308,
    'Tapu Koko': 785,
    'Vivillon': 666,
    'Necrozma-Dawn Wings': 800,
    'Mega-Diancie': 719,
    'Thundurus-Therian': 642,
    'Zamazenta-Crowned': 889,
    'Kyurem-White': 646,
    'Zacian': 888,
    'Clefable': 36,
    'Manaphy': 490,
    'Krookodile': 553,
    'Ferrothorn': 598,
    'Zamazenta': 889,
    'Heracross': 214,
    'Kyurem': 646,
    'Serperior': 497,
    'Terrakion': 639,

    // B Tier
    'Mega-Lopunny': 428,
    'Blacephalon': 806,
    'Mega-Charizard-X': 6,
    'Moltres-Galar': 146,
    'Reshiram': 643,
    'Mega-Gallade': 475,
    'Blaziken': 257,
    'Gardevoir': 282,
    'Alakazam': 65,
    'Hoopa-Unbound': 720,
    'Delphox': 655,
    'Conkeldurr': 534,
    'Mega-Gardevoir': 282,
    'Obstagoon': 862,
    'Nidoqueen': 31,
    'Volcanion': 721,
    'Milotic': 350,
    'Cetitan': 975,
    'Metagross': 376,
    'Togedemaru': 777,
    'Crobat': 169,
    'Whimsicott': 547,
    'Reuniclus': 579,
    'Hippowdon': 450,
    'Politoed': 186,
    'Flygon': 330,
    'Mega-Venusaur': 3,
    'Ninetales': 38,
    'Iron Moth': 994,
    'Polteageist': 855,
    'Rotom-Wash': 479,
    'Sableye': 302,
    'Mega-Sableye': 302,
    'Mega-Heracross': 214,
    'Cobalion': 638,
    'Tornadus-Incarnate': 641,
    'Mega-Altaria': 334,
    'Dialga-Origin': 483,
    'Iron Treads': 993,
    'Munkidori': 1015,
    'Deoxys': 386,
    'Incineroar': 727,
    'Scolipede': 545,
    'Deoxys-Attack': 386,
    'Enamorus-Incarnate': 905,
    'Mega-Slowbro': 80,
    'Victini': 494,
    'Starmie': 121,
    'Mega-Charizard-Y': 6,
    'Mega-Pinsir': 127,
    'Hawlucha': 701,
    'Zapdos-Galar': 145,
    'Darmanitan': 555,
    'Tornadus-Therian': 641,
    'Kommo-O': 784,
    'Skeledirge': 912,
    'Mega-Mawile': 303,
    'Registeel': 379,
    'Corviknight': 823,
    'Giratina-Altered': 487,
    'Iron Boulder': 992,
    'Deoxys-Speed': 386,
    'Celebi': 251,
    'Infernape': 392,
    'Hydreigon': 635,
    'Skarmory': 227,
    'Heatran': 485,
    'Amoonguss': 591,
    'Clodsire': 980,
    'Gholdengo': 1000,
    'Calyrex-Ice': 898,
    'Haxorus': 612,
    'Rillaboom': 812,
    'Pheromosa': 795,
    'Gallade': 475,
    'Ursaluna': 901,
    'Melmetal': 809,
    'Staraptor': 398,
    'Solgaleo': 791,
    'Goodra-Hisui': 706,
    'Grimmsnarl': 861,
    'Kingambit': 983,
    'Slowking': 199,
    'Dialga': 483,
    'Weezing-Galar': 110,
    'Muk-Alola': 89,
    'Pelipper': 279,
    'Mega-Swampert': 260,
    'Tapu Fini': 788,
    'Primarina': 730,
    'Feraligatr': 160,
    'Ceruledge': 937,
    'Tinkaton': 959,
    'Okidogi': 1014,
    'Togekiss': 468,
    'Dondozo': 977,
    'Ting-Lu': 1003,
    'Scrafty': 560,
    'Snorlax': 143,
    'Ursaluna-Bloodmoon': 901,
    'Azumarill': 184,
    'Tapu Bulu': 787,

    // C Tier
    'Lycanroc-Dusk': 745,
    'Archeops': 567,
    'Lilligant-Hisui': 549,
    'Ninjask': 291,
    'Glastrier': 896,
    'Umbreon': 197,
    'Kingdra': 230,
    'Meowstic-Male': 678,
    'Venomoth': 49,
    'Froslass': 478,
    'Zarude': 893,
    'Mega-Manectric': 310,
    'Crustle': 558,
    'Slither Wings': 991,
    'Kleavor': 900,
    'Pawmot': 923,
    'Milotic': 350,
    'Cetitan': 975,
    'Metagross': 376,
    'Togedemaru': 777,
    'Crobat': 169,
    'Whimsicott': 547,
    'Reuniclus': 579,
    'Hippowdon': 450,
    'Politoed': 186,
    'Flygon': 330,
    'Mega-Venusaur': 3,
    'Ninetales': 38,
    'Iron Moth': 994,
    'Polteageist': 855,
    'Rotom-Wash': 479,
    'Sableye': 302,
    'Mega-Sableye': 302,
    'Mega-Heracross': 214,
    'Cobalion': 638,
    'Tornadus-Incarnate': 641,
    'Mega-Altaria': 334,
    'Dialga-Origin': 483,
    'Iron Treads': 993,
    'Munkidori': 1015,
    'Deoxys': 386,
    'Incineroar': 727,
    'Scolipede': 545,
    'Deoxys-Attack': 386,
    'Enamorus-Incarnate': 905,
    'Mega-Slowbro': 80,
    'Victini': 494,
    'Starmie': 121,
    'Mega-Charizard-Y': 6,
    'Mega-Pinsir': 127,
    'Hawlucha': 701,
    'Zapdos-Galar': 145,
    'Darmanitan': 555,
    'Tornadus-Therian': 641,
    'Kommo-O': 784,
    'Skeledirge': 912,
    'Mega-Mawile': 303,
    'Registeel': 379,
    'Corviknight': 823,
    'Giratina-Altered': 487,
    'Iron Boulder': 992,
    'Deoxys-Speed': 386,
    'Celebi': 251,
    'Infernape': 392,
    'Hydreigon': 635,
    'Skarmory': 227,
    'Heatran': 485,
    'Amoonguss': 591,
    'Clodsire': 980,
    'Gholdengo': 1000,
    'Calyrex-Ice': 898,
    'Haxorus': 612,
    'Rillaboom': 812,
    'Pheromosa': 795,
    'Gallade': 475,
    'Ursaluna': 901,
    'Melmetal': 809,
    'Staraptor': 398,
    'Solgaleo': 791,
    'Goodra-Hisui': 706,
    'Grimmsnarl': 861,
    'Kingambit': 983,
    'Slowking': 199,
    'Dialga': 483,
    'Weezing-Galar': 110,
    'Muk-Alola': 89,
    'Pelipper': 279,
    'Mega-Swampert': 260,
    'Tapu Fini': 788,
    'Primarina': 730,
    'Feraligatr': 160,
    'Ceruledge': 937,
    'Tinkaton': 959,
    'Okidogi': 1014,
    'Togekiss': 468,
    'Dondozo': 977,
    'Ting-Lu': 1003,
    'Scrafty': 560,
    'Snorlax': 143,
    'Ursaluna-Bloodmoon': 901,
    'Azumarill': 184,
    'Tapu Bulu': 787,

    // D Tier
    'Mega-Sceptile': 254,
    'Mega-Glalie': 362,
    'Raichu-Alola': 26,
    'Raichu': 26,
    'Golurk': 623,
    'Stakataka': 805,
    'Mega-Banette': 354,
    'Avalugg-Hisui': 713,
    'Sandslash-Alola': 28,
    'Jumpluff': 189,
    'Mega-Audino': 531,
    'Braviary': 628,
    'Crabominable': 740,
    'Kangaskhan': 115,
    'Electivire': 466,
    'Abomasnow': 460,
    'Aurorus': 699,
    'Mega-Abomasnow': 460,
    'Regice': 378,
    'Dodrio': 85,
    'Scovillain': 952,
    'Toedscruel': 949,
    'Slaking': 289,
    'Lilligant': 549,
    'Sinistcha': 1013,
    'Victreebel': 71,
    'Vileplume': 45,
    'Butterfree': 12,
    'Shiftry': 275,
    'Frosmoth': 873,
    'Yanmega': 469,
    'Orbeetle': 826,
    'Aggron': 306,
    'Squawkabilly': 931,
    'Uxie': 480,
    'Appletun': 842,
    'Decidueye': 724,
    'Klinklang': 601,
    'Pincurchin': 871,
    'Mawile': 303,
    'Grumpig': 326,
    'Eiscue': 875,
    'Glalie': 362,
    'Zoroark': 571,
    'Decidueye-Hisui': 724,
    'Chesnaught': 652,
    'Arboliva': 930,
    'Simisage': 512,
    'Drapple': 1020,
    'Tsareena': 763,

    // E Tier
    'Shuckle': 213,
    'Dewgong': 87,
    'Lumineon': 457,
    'Pyukumuku': 771,
    'Arbok': 24,
    'Mightyena': 262,
    'Avalugg-Hisui': 713,
    'Armaldo': 348,
    'Seviper': 336,
    'Plusle': 311,
    'Minun': 312,
    'Zebstrika': 523,
    'Wigglytuff': 40,
    'Illumise': 314,
    'Golem-Alola': 76,
    'Magcargo': 219,
    'Calyrex': 898,
    'Dedenne': 702,
    'Chatot': 441,
    'Hypno': 97,
    'Delcatty': 301,
    'Wormadam-Plant': 413,
    'Cursola': 864,
    'Coalossal': 839,
    'Probopass': 476,
    'Wormadam-Trash': 413,
    'Lurantis': 754,
    'Maractus': 556,
    'Bibarel': 400,
    'Tropius': 357,
    'Swalot': 317,
    'Mothim': 414,
    'Regigigas': 486,
    'Sudowoodo': 185,
    'Castform': 351,
    'Vespiquen': 416,
    'Furfrou': 676,
    'Phione': 489,
    'Gumshoos': 735,
    'Dustox': 269,
    'Furret': 162,
    'Eiscue': 875,
    'Glalie': 362,

    // F Tier
    'Ledian': 166,
    'Pachirisu': 417,
    'Parasect': 47,
    'Beautifly': 267,
    'Noctowl': 164,
    'Fearow': 22,
    'Unfezant': 521,
    'Corsola': 222,
    'Ariados': 168,
    'Kricketune': 402,
    'Carnivine': 455,
    'Persian': 53,
    'Spinda': 327,
    'Lopunny': 428,
    'Purugly': 432,
    'Greedent': 820,
    'Pidgeot': 18,
    'Delibird': 225,
    'Watchog': 505,
    'Delcatty': 301,
    'Wormadam-Sandy': 413,
    'Unown': 201,
    'Luvdisc': 370,

    // Add missing regular Pokémon
    'Eelektross': 604,
    'Raikou': 243,
    'Zapdos': 145,
    'Sunflora': 192,
    'Beedrill': 15,
    'Scizor': 212,
    'Spectrier': 897,
    'Kartana': 798,
    'Alomomola': 594,
    'Eternatus': 890,
    'Toxapex': 748,
    'Aerodactyl': 142,
    'Roserade': 407,
    'Palafin': 964,
    'Greninja': 658,
    'Kabutops': 141,
    'Xurkitree': 796,
    'Darkrai': 491,
    'Arcanine': 59,
    'Barbaracle': 689,
    'Cherrim': 421,
    'Barraskewda': 847,
    'Lapras': 131,
    'Glimmora': 970,
    'Vaporeon': 134,
    'Tatsugiri': 978,
    'Seismitoad': 537,
    'Swampert': 260,
    'Minior': 774,
    'Alcremie': 869,
    'Qwilfish': 211,
    'Magnezone': 462,
    'Charizard': 6,
    'Cofagrigus': 563,
    'Forretress': 205,
    'Entei': 244,
    'Simisear': 514,
    'Pyroar': 668,
    'Runerigus': 867,
    'Tauros': 128,
    'Spiritomb': 442,
    'Rotom-Mow': 479,
    'Dusknoir': 477,
    'Goodra': 706,
    'Magmortar': 467,
    'Salazzle': 758,
    'Honchkrow': 430,
    'Meloetta': 648,
    'Mienshao': 620,
    'Drifblim': 426,
    'Drapion': 452,
    'Weezing': 110,
    'Absol': 359,
    'Persian-Alola': 53,
    'Nidoking': 34,
    'Bombirdier': 962,
    'Mismagius': 429,
    'Mabosstiff': 943,
    'Quagsire': 195,
    'Dachsbun': 927,
    'Gastrodon': 423,
    'Slurpuff': 685,
    'Empoleon': 395,
    'Sylveon': 700,
    'Simipour': 516,
    'Carracosta': 565,
    'Jellicent': 593,
    'Emolga': 587,
    'Torterra': 389,
    'Floatzel': 419,
    'Venusaur': 3,
    'Clawitzer': 693,
    'Crawdaunt': 342,
    'Virizion': 640,
    'Golduck': 55,
    'Toxicroak': 454,
    'Swanna': 581,
    'Tentacruel': 73,
    'Samurott': 503,
    'Torkoal': 324,
    'Manectric': 310,
    'Armarouge': 936,
    'Beeheeyem': 606,
    'Aromatisse': 683,
    'Toxtricity': 849,
    'Kingler': 99,
    'Sandslash': 28,
    'Malamar': 687,
    'Volbeat': 313,
    'Rabsca': 955,
    'Mesprit': 481,
    'Duraludon': 884,
    'Audino': 531,
    'Thievul': 828,
    'Emboar': 500,
    'Toucannon': 733,
    'Hatterene': 858,
    'Dugtrio': 51,
    'Throh': 538,
    'Eldegoss': 830,
    'Mudsdale': 750,
    'Komala': 775,
    'Gigalith': 526,
    'Gourgeist': 711,
    'Cramorant': 845,
    'Trevenant': 709,
    'Lunatone': 337,
    'Centiskorch': 851,
    'Palossand': 770,
    'Stunfisk': 618,
    'Donphan': 232,
    'Cryogonal': 615,
    'Regirock': 377,
    'Kecleon': 352,
    'Zangoose': 335,
    'Dudunsparce': 982,
    'Arctovish': 883,
    'Florges': 671,
    'Wishiwashi': 746,
    'Pangoro': 675,
    'Beartic': 614,
    'Lickilicky': 463,
    'Spidops': 916,
    'Mr. Mime': 122,
    'Wailord': 321,
    'Passimian': 766,
    'Carbink': 703,
    "Sirfetch'd": 865,
    'Glaceon': 471,
    'Hitmonlee': 106,
    'Klawf': 950,
    'Falinks': 870,
    'Stonjourner': 874,
    'Wobbuffet': 202,
    'Ditto': 132,
    'Claydol': 344,
    'Xatu': 178,
    'Hitmontop': 237,
    'Cradily': 346,
    'Escavalier': 589,
    'Steelix': 208,
    'Sawk': 539,
    'Copperajah': 879,
    'Walrein': 365,
    'Exploud': 295,
    'Dugtrio-Alola': 51,
    'Hitmonchan': 107,

    // Add missing form variants
    'Mega-Medicham': 308,
    'Mega-Scizor': 212,
    'Mega-Latias': 380,
    'Mega-Beedrill': 15,
    'Mega-Latios': 381,
    'Mega-Kangaskhan': 115,
    'Mega-Gyarados': 130,
    'Mega-Aerodactyl': 142,
    'Mega-Steelix': 208,
    'Mega-Ampharos': 181,
    'Mega-Houndoom': 229,
    'Mega-Aggron': 306,
    'Mega-Blastoise': 9,
    'Tauros-Paldea-Fight': 128,
    'Basculegion-Male': 902,
    'Basculegion-Female': 902,
    'Hoopa-Contained': 720,
    'Tauros-Paldea-Aqua': 128,
    'Tauros-Paldea-Blaze': 128,
    'Tauros-Paldea-Fight': 128,
    'Sandy Shocks': 999,
    'Wo-Chien': 1001,
    'Brute Bonnet': 986,
    'Slowking-Galar': 199,
    'Slowbro-Galar': 80,
    'Oricorio-Pom-Pom': 741,
    'Oricorio-Sensu': 741,
    "Oricorio-Pa'u": 741,
    'Rotom-Frost': 479,
    'Rotom-Heat': 479,
    'Rotom-Fan': 479,
    'Shaymin-Sky': 492,
    'Deoxys-Defense': 386,
    'Zygarde-10%': 718,
    'Ninetales-Alola': 38,
    'Garganacl': 935,
    'Cinderace': 815,
    'Vanilluxe': 584,
    'Latios': 381,
    'Latias': 380,
    'Wugtrio': 961,
    'Genesect': 649,
    'Hydrapple': 1020,
    'Oinkologne-Male': 926,
    'Oinkologne-Female': 926,
    'Gyarados': 130,
    'Iron Jugulis': 995,
    'Sigilyph': 561,
    'Cyclizar': 967,
    'Azelf': 482,
    'Keldeo': 647,
    'Zeraora': 807,
    'Meowscarada': 908,
    'Dracozolt': 880,
    'Overqwil': 904,
    'Articuno': 144,
    'Espeon': 196,
    'Lanturn': 171,
    'Regidrago': 895,
    'Blastoise': 9,
    'Moltres': 146,
    'Ludicolo': 272,
    'Buzzwole': 794,
    'Masquerain': 284,
    'Flamigo': 973,
    'Swellow': 277,
    'Lokix': 920,
    'Veluza': 976,
    'Necrozma': 800,
    'Rhyperior': 464,
    'Bellibolt': 939,
    'Grafaiai': 945,
    'Nihilego': 793,
    'Iron Thorns': 996,
    'Gorebyss': 368,
    'Machamp': 68,
    'Mantine': 226,
    'Omastar': 139,
    'Huntail': 367,
    'Mamoswine': 473,
    'Diggersby': 660,
    'Tyrantrum': 697,
    'Araquanid': 752,
    'Chandelure': 609,
    'Inteleon': 818,
    'Whiscash': 340,
    'Klefki': 707,
    'Sharpedo': 319,
    'Cresselia': 488,
    'Diancie': 719,
    'Blissey': 242,
    'Golisopod': 768,
    'Bronzong': 437,
    'Bewear': 760,
    'Maushold': 925,
    'Revavroom': 966,
    'Cinccino': 573,
    'Talonflame': 663,
    'Raticate': 20,
    'Breloom': 286,
    'Granbull': 210,
    'Hariyama': 297,
    'Heliolisk': 695,
    'Porygon-Z': 474,
    'Mandibuzz': 630,
    'Drednaw': 834,
    'Tangrowth': 465,
    'Poliwrath': 62,
    'Typhlosion': 157,
    'Exeggutor': 103,
    'Durant': 632
};

// Add these to the pokemonNameToId mapping
const additionalMappings = {
    'Gyarados': 130,
    'Latios': 381,
    'Latias': 380,
    'Vanilluxe': 584,
    'Porygon-Z': 474,
    'Machamp': 68,
    'Mantine': 226,
    'Omastar': 139,
    'Huntail': 367,
    'Mamoswine': 473,
    'Diggersby': 660,
    'Chandelure': 609,
    'Inteleon': 818,
    'Whiscash': 340,
    'Klefki': 707,
    'Sharpedo': 319,
    'Cresselia': 488,
    'Diancie': 719,
    'Blissey': 242,
    'Golisopod': 768,
    'Bronzong': 437,
    'Bewear': 760,
    'Mandibuzz': 630,
    'Drednaw': 834,
    'Tangrowth': 465,
    'Azelf': 482,
    'Keldeo': 647,
    'Zeraora': 807,
    'Durant': 632,
    'Dracozolt': 880,
    'Sigilyph': 561,
    'Cyclizar': 967,
    'Nihilego': 793,
    'Rhyperior': 464,
    'Necrozma': 800,
    'Talonflame': 663,
    'Raticate': 20,
    'Breloom': 286,
    'Granbull': 210,
    'Hariyama': 297,
    'Heliolisk': 695,
    'Cinccino': 573,
    'Swellow': 277,
    'Lokix': 920,
    'Exeggutor': 103,
    'Poliwrath': 62,
    'Articuno': 144,
    'Moltres': 146,
    'Ludicolo': 272,
    'Buzzwole': 794,
    'Masquerain': 284,
    'Mega-Absol': 359,
    'Mega-Sharpedo': 319,
    'Mega-Camerupt': 323,
    'Typhlosion-Hisui': 157,
    'Samurott-Hisui': 503,
    'Overqwil': 904,
    'Espeon': 196,
    'Lanturn': 171,
    'Regidrago': 895,
    'Blastoise': 9,
    'Garganacl': 935,
    'Meowscarada': 908,
    'Cinderace': 815,
    'Wugtrio': 961,
    'Genesect': 649,
    'Hydrapple': 1020,
    'Oinkologne-Male': 926,
    'Oinkologne-Female': 926,
    'Mega-Steelix': 208,
    'Mega-Ampharos': 181,
    'Mega-Houndoom': 229,
    'Mega-Aggron': 306,
    'Mega-Blastoise': 9,
    'Tauros-Paldea-Fight': 128,
    'Basculegion-Male': 902,
    'Basculegion-Female': 902,
    'Hoopa-Contained': 720,
    'Tauros-Paldea-Aqua': 128,
    'Tauros-Paldea-Blaze': 128,
    'Beeheeyem': 'https://raw.githubusercontent.com/msikma/pokesprite/master/pokemon-gen8/regular/beheeyem.png',
    'Wormadam-Plant': 'https://raw.githubusercontent.com/msikma/pokesprite/master/pokemon-gen8/regular/wormadam-sandy.png'
};

// Update the form mappings
const formMappings = {
    'incarnate': '',
    'male': 'm',
    'female': 'f',
    'midday': 'midday',
    'baile': 'baile',
    'single-strike': 'single',
    'rapid-strike': 'rapid',
    '50%': '',
    'bloodmoon': 'bloodmoon',
    'paldea-aqua': 'paldea-aqua',
    'paldea-blaze': 'paldea-blaze',
    'paldea-fight': 'paldea-combat',
    'shadow-rider': 'shadow-rider',
    'ice-rider': 'ice-rider',
    'dusk': 'dusk',
    'dawn': 'dawn',
    'altered': 'altered',
    'origin': 'origin',
    'therian': 'therian',
    'sky': 'sky',
    'mega-x': 'mega-x',
    'mega-y': 'mega-y',
    'mega': 'mega',
    'paldea-combat': 'paldea-combat',
    'contained': '',
    'plant': 'plant',
    'single': 'single',
    'rapid': 'rapid'
};

// Add this after pokemonNameToId mapping
const pokemonForms = {
    // Mega Evolutions
    'Mega-Rayquaza': { id: 384, form: 'mega' },
    'Mega-Mewtwo-Y': { id: 150, form: 'mega-y' },
    'Mega-Mewtwo-X': { id: 150, form: 'mega-x' },
    'Mega-Salamence': { id: 373, form: 'mega' },
    'Mega-Gengar': { id: 94, form: 'mega' },
    'Mega-Lucario': { id: 448, form: 'mega' },
    'Mega-Blaziken': { id: 257, form: 'mega' },
    'Mega-Garchomp': { id: 445, form: 'mega' },
    'Mega-Tyranitar': { id: 248, form: 'mega' },
    'Mega-Diancie': { id: 719, form: 'mega' },
    'Mega-Metagross': { id: 376, form: 'mega' },
    'Mega-Lopunny': { id: 428, form: 'mega' },
    'Mega-Charizard-X': { id: 6, form: 'mega-x' },
    'Mega-Charizard-Y': { id: 6, form: 'mega-y' },
    'Mega-Gallade': { id: 475, form: 'mega' },
    'Mega-Gardevoir': { id: 282, form: 'mega' },
    'Mega-Venusaur': { id: 3, form: 'mega' },
    'Mega-Sableye': { id: 302, form: 'mega' },
    'Mega-Heracross': { id: 214, form: 'mega' },
    'Mega-Altaria': { id: 334, form: 'mega' },
    'Mega-Slowbro': { id: 80, form: 'mega' },
    'Mega-Pinsir': { id: 127, form: 'mega' },
    'Mega-Mawile': { id: 303, form: 'mega' },
    'Mega-Swampert': { id: 260, form: 'mega' },
    'Mega-Manectric': { id: 310, form: 'mega' },
    'Mega-Pidgeot': { id: 18, form: 'mega' },
    'Mega-Sceptile': { id: 254, form: 'mega' },
    'Mega-Glalie': { id: 362, form: 'mega' },
    'Mega-Banette': { id: 354, form: 'mega' },
    'Mega-Audino': { id: 531, form: 'mega' },
    'Mega-Abomasnow': { id: 460, form: 'mega' },

    // Regional Forms
    'Darmanitan-Galar': { id: 555, form: 'galar' },
    'Moltres-Galar': { id: 146, form: 'galar' },
    'Zapdos-Galar': { id: 145, form: 'galar' },
    'Weezing-Galar': { id: 110, form: 'galar' },
    'Muk-Alola': { id: 89, form: 'alola' },
    'Raichu-Alola': { id: 26, form: 'alola' },
    'Marowak-Alola': { id: 105, form: 'alola' },
    'Exeggutor-Alola': { id: 103, form: 'alola' },
    'Golem-Alola': { id: 76, form: 'alola' },
    'Sandslash-Alola': { id: 28, form: 'alola' },
    'Rapidash-Galar': { id: 78, form: 'galar' },
    'Stunfisk-Galar': { id: 618, form: 'galar' },
    'Raticate-Alola': { id: 20, form: 'alola' },
    'Avalugg-Hisui': { id: 713, form: 'hisui' },
    'Lilligant-Hisui': { id: 549, form: 'hisui' },
    'Goodra-Hisui': { id: 706, form: 'hisui' },
    'Decidueye-Hisui': { id: 724, form: 'hisui' },

    // Special Forms
    'Zacian-Crowned': { id: 888, form: 'crowned' },
    'Zamazenta-Crowned': { id: 889, form: 'crowned' },
    'Necrozma-Dusk Mane': { id: 800, form: 'dusk' },
    'Necrozma-Dawn Wings': { id: 800, form: 'dawn' },
    'Calyrex-Shadow': { id: 898, form: 'shadow-rider' },
    'Calyrex-Ice': { id: 898, form: 'ice-rider' },
    'Urshifu-Rapid-Strike': { id: 892, form: 'rapid' },
    'Urshifu-Single-Strike': { id: 892, form: 'single' },
    'Indeedee-Male': { id: 876, form: 'male' },
    'Indeedee-Female': { id: 876, form: 'female' },
    'Meowstic-Male': { id: 678, form: 'male' },
    'Meowstic-Female': { id: 678, form: 'female' },
    'Hoopa-Unbound': { id: 720, form: 'unbound' },
    'Giratina-Origin': { id: 487, form: 'origin' },
    'Giratina-Altered': { id: 487, form: 'altered' },
    'Deoxys-Attack': { id: 386, form: 'attack' },
    'Deoxys-Speed': { id: 386, form: 'speed' },
    'Dialga-Origin': { id: 483, form: 'origin' },
    'Zygarde-Complete': { id: 718, form: 'complete' },
    'Zygarde-50%': { id: 718, form: '50%' },
    'Zygarde-10%': { id: 718, form: '10' },
    'Tornadus-Therian': { id: 641, form: 'therian' },
    'Tornadus-Incarnate': { id: 641, form: 'incarnate' },
    'Thundurus-Therian': { id: 642, form: 'therian' },
    'Thundurus-Incarnate': { id: 642, form: 'incarnate' },
    'Landorus-Therian': { id: 645, form: 'therian' },
    'Landorus-Incarnate': { id: 645, form: 'incarnate' },
    'Enamorus-Incarnate': { id: 905, form: 'incarnate' },
    'Wormadam-Plant': { id: 413, form: 'plant' },
    'Wormadam-Sandy': { id: 413, form: 'sandy' },
    'Wormadam-Trash': { id: 413, form: 'trash' },
    'Ursaluna-Bloodmoon': { id: 901, form: 'bloodmoon' },
    'Typhlosion-Hisui': { id: 157, form: 'hisui' },
    'Samurott-Hisui': { id: 503, form: 'hisui' },
    'Mega-Absol': { id: 359, form: 'mega' },
    'Mega-Sharpedo': { id: 319, form: 'mega' },
    'Mega-Camerupt': { id: 323, form: 'mega' },
    'Oinkologne-Male': { id: 926, form: 'male' },
    'Oinkologne-Female': { id: 926, form: 'female' },
    'Mega-Steelix': { id: 208, form: 'mega' },
    'Mega-Ampharos': { id: 181, form: 'mega' },
    'Mega-Houndoom': { id: 229, form: 'mega' },
    'Mega-Aggron': { id: 306, form: 'mega' },
    'Mega-Blastoise': { id: 9, form: 'mega' },
    'Tauros-Paldea-Fight': { id: 128, form: 'paldea-combat' },
    'Basculegion-Male': { id: 902, form: 'male' },
    'Basculegion-Female': { id: 902, form: 'female' },
    'Hoopa-Contained': { id: 720, form: '' },
    'Tauros-Paldea-Aqua': { id: 128, form: 'paldea-aqua' },
    'Tauros-Paldea-Blaze': { id: 128, form: 'paldea-blaze' },
    'Beeheeyem': 'https://raw.githubusercontent.com/msikma/pokesprite/master/pokemon-gen8/regular/beheeyem.png',
    'Wormadam-Plant': 'https://raw.githubusercontent.com/msikma/pokesprite/master/pokemon-gen8/regular/wormadam-sandy.png'
};

// Add this after the pokemonForms object
const specialUrlMappings = {
    'Urshifu-Single-Strike': 'https://raw.githubusercontent.com/msikma/pokesprite/master/pokemon-gen8/regular/urshifu-gmax.png',
    'Urshifu-Rapid-Strike': 'https://raw.githubusercontent.com/msikma/pokesprite/master/pokemon-gen8/regular/urshifu-rapid-strike-gmax.png',
    'Giratina-Altered': 'https://raw.githubusercontent.com/msikma/pokesprite/master/pokemon-gen8/regular/giratina.png',
    'Ursaluna-Bloodmoon': 'https://raw.githubusercontent.com/msikma/pokesprite/master/pokemon-gen8/regular/ursaluna.png',
    'Basculegion-Male': 'https://raw.githubusercontent.com/msikma/pokesprite/master/pokemon-gen8/regular/basculegion.png',
    'Basculegion-Female': 'https://raw.githubusercontent.com/msikma/pokesprite/master/pokemon-gen8/regular/female/basculegion.png',
    'Hoopa-Contained': 'https://raw.githubusercontent.com/msikma/pokesprite/master/pokemon-gen8/regular/hoopa-unbound.png',
    'Meowstic-Male': 'https://raw.githubusercontent.com/msikma/pokesprite/master/pokemon-gen8/regular/meowstic.png',
    'Indeedee-Male': 'https://raw.githubusercontent.com/msikma/pokesprite/master/pokemon-gen8/regular/indeedee.png',
    'Indeedee-Female': 'https://raw.githubusercontent.com/msikma/pokesprite/master/pokemon-gen8/regular/female/indeedee.png',
    'Tauros-Paldea-Aqua': 'https://raw.githubusercontent.com/msikma/pokesprite/master/pokemon-gen8/regular/tauros.png',
    'Tauros-Paldea-Blaze': 'https://raw.githubusercontent.com/msikma/pokesprite/master/pokemon-gen8/regular/tauros.png',
    'Tauros-Paldea-Fight': 'https://raw.githubusercontent.com/msikma/pokesprite/master/pokemon-gen8/regular/tauros.png',
    'Meowstic-Female': 'https://raw.githubusercontent.com/msikma/pokesprite/master/pokemon-gen8/regular/female/meowstic.png',
    'Beeheeyem': 'https://raw.githubusercontent.com/msikma/pokesprite/master/pokemon-gen8/regular/beheeyem.png',
    'Wormadam-Plant': 'https://raw.githubusercontent.com/msikma/pokesprite/master/pokemon-gen8/regular/wormadam-sandy.png'
};

// Add at the top of the file
let pokemonData = null;

// Remove both existing GEN_9_POKEMON_IDS definitions and replace with this one
const GEN_9_POKEMON_IDS = new Set([
    ...Array.from({ length: 115 }, (_, i) => i + 906)  // Creates a range from 906 to 1020
]);

// Add generation ranges
const GEN_RANGES = {
    1: { start: 1, end: 151 },
    2: { start: 152, end: 251 },
    3: { start: 252, end: 386 },
    4: { start: 387, end: 493 },
    5: { start: 494, end: 649 },
    6: { start: 650, end: 721 },
    7: { start: 722, end: 809 },
    8: { start: 810, end: 905 }
};

async function initializePokemonData() {
    try {
        const response = await fetch('https://raw.githubusercontent.com/msikma/pokesprite/master/data/pokemon.json');
        pokemonData = await response.json();
    } catch (error) {
        console.error('Failed to load Pokemon data:', error);
    }
}

// Add this helper function to debug form names
function debugPokemonForm(pokemonId, pokemonName, form) {
    if (!pokemonData) {
        console.log('PokéSprite data not loaded');
        return;
    }

    const paddedId = String(pokemonId).padStart(3, '0');
    const pokemonInfo = pokemonData[paddedId];
    
    if (!pokemonInfo) {
        console.log(`No data found for ID ${pokemonId} (${pokemonName})`);
        return;
    }

    console.log(`Pokemon: ${pokemonName}`);
    console.log(`Base slug: ${pokemonInfo.slug.eng}`);
    console.log(`Available forms:`, pokemonInfo['gen-8']?.forms || 'No forms data');
    console.log(`Requested form: ${form}`);
}

// Update the getImageUrl function
function getImageUrl(pokemonId, pokemonName) {
    // Check for special URL mapping first
    if (specialUrlMappings[pokemonName]) {
        return specialUrlMappings[pokemonName];
    }
    
    console.log(`Getting image for: ${pokemonName} (ID: ${pokemonId})`);
    
    if (GEN_9_POKEMON_IDS.has(pokemonId)) {
        console.log(`Skipping Gen 9 Pokemon: ${pokemonName} (ID: ${pokemonId})`);
        return null;
    }

    const formData = pokemonForms[pokemonName];
    const baseUrl = 'https://raw.githubusercontent.com/msikma/pokesprite/master/pokemon-gen8/regular/';
    
    let finalUrl;
    if (formData) {
        const form = formData.form;
        debugPokemonForm(pokemonId, pokemonName, form);
        
        if (pokemonData && pokemonId) {
            const pokemonInfo = pokemonData[String(pokemonId).padStart(3, '0')];
            if (pokemonInfo) {
                const baseSlug = pokemonInfo.slug.eng;
                
                if (form) {
                    const formKey = form.toLowerCase();
                    const mappedForm = formMappings[formKey];
                    
                    if (mappedForm !== undefined) {
                        finalUrl = mappedForm ? `${baseUrl}${baseSlug}-${mappedForm}.png` 
                                            : `${baseUrl}${baseSlug}.png`;
                    } else {
                        finalUrl = `${baseUrl}${baseSlug}-${formKey}.png`;
                    }
                }
            }
        }
    }
    
    // Fallback to base URL if no specific handling
    finalUrl = finalUrl || `${baseUrl}${getPokemonSlug(pokemonName)}.png`;
    
    console.log(`Generated URL: ${finalUrl}`);
    return finalUrl;
}

// Updated helper function to match PokéSprite's naming convention
function getPokemonSlug(name) {
    return name.toLowerCase()
        .replace(/['']/g, '')
        .replace(/\s+/g, '-')
        .replace(/\./g, '')
        .replace(/:/g, '')
        .replace(/♀/g, '-f')
        .replace(/♂/g, '-m')
        .replace('mega-', '')  // Remove mega prefix
        .replace(/\(|\)/g, '') // Remove parentheses
        .replace(/-+/g, '-')   // Replace multiple hyphens with single hyphen
        .replace(/-$/g, '');   // Remove trailing hyphen
}

// Update formatPokemonName function
function formatPokemonName(name) {
    console.log(`Formatting name: ${name}`);
    const pokemonId = pokemonNameToId[name] || (pokemonForms[name] && pokemonForms[name].id);
    
    if (pokemonId) {
        console.log(`Found ID: ${pokemonId} for ${name}`);
        const imageUrl = getImageUrl(pokemonId, name);
        return imageUrl;
    }
    
    console.log(`No ID found for: ${name}, using fallback`);
    return `https://img.pokemondb.net/sprites/home/normal/${name.toLowerCase()
        .replace(/[^a-z0-9-]/g, '')
        .replace('mega-', '')
        .replace('-galar', '')
        .replace('-alola', '')
        .replace('-hisui', '')}.png`;
}

async function fetchPokemonData() {
    try {
        const response = await fetch('tierlist.csv');
        const csvText = await response.text();
        console.log('CSV loaded successfully');
        return parseCsvData(csvText);
    } catch (error) {
        console.error('Error loading Pokemon data:', error);
        return [];
    }
}

function parseCsvData(csvText) {
    console.log('Parsing CSV data');
    const rows = csvText.split('\n');
    console.log(`Found ${rows.length} rows`);
    const headers = rows[0].split(',').map(h => h.trim());
    const pokemonByTier = [];

    for (let i = 1; i < rows.length; i++) {
        const cells = rows[i].split(',').map(c => c.trim());
        cells.forEach((pokemon, index) => {
            // Only add Pokémon that are in our pokemonNameToId mapping
            if (pokemon && pokemonNameToId.hasOwnProperty(pokemon)) {
                pokemonByTier.push({
                    name: pokemon,
                    tier: headers[index].replace(' tier', ''),
                    image: formatPokemonName(pokemon)
                });
            }
        });
    }

    return pokemonByTier;
}

async function initializeTierList() {
    const pokemonData = await fetchPokemonData();
    
    pokemonData.forEach(pokemon => {
        const tierContainer = document.querySelector(`.tier[data-tier="${pokemon.tier}"] .tier-pokemon`);
        if (tierContainer) {
            const pokemonCard = createPokemonCard(pokemon);
            if (pokemonCard) {  // Only append if card was created
                tierContainer.appendChild(pokemonCard);
            }
        }
    });

    // Initialize search after cards are created
    initializeSearch();
    countPokemon(); // Add this line to count after cards are created
}

function createPokemonCard(pokemon) {
    // Only create cards for Pokémon in our mapping
    if (!pokemonNameToId.hasOwnProperty(pokemon.name)) {
        return null;
    }

    // Skip Gen 9 Pokémon
    const pokemonId = pokemonNameToId[pokemon.name];
    if (GEN_9_POKEMON_IDS.has(pokemonId)) {
        console.log(`Skipping Gen 9 Pokemon: ${pokemon.name} (ID: ${pokemonId})`);
        return null;
    }

    const card = document.createElement('div');
    card.className = 'pokemon-card';
    
    const img = document.createElement('img');
    img.src = pokemon.image;
    img.alt = pokemon.name;
    img.onerror = () => {
        img.src = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/0.png';
    };
    
    const name = document.createElement('div');
    name.className = 'name';
    name.textContent = pokemon.name;
    
    card.appendChild(img);
    card.appendChild(name);
    
    return card;
}

// Add this near your other initialization code
function initializeDarkMode() {
    const darkModeToggle = document.getElementById('darkModeToggle');
    const body = document.body;
    
    // Check for saved dark mode preference
    const isDarkMode = localStorage.getItem('darkMode') === 'true';
    if (isDarkMode) {
        body.classList.add('dark-mode');
        darkModeToggle.checked = true;
    }

    darkModeToggle.addEventListener('change', () => {
        body.classList.toggle('dark-mode');
        const isDark = body.classList.contains('dark-mode');
        localStorage.setItem('darkMode', isDark);
    });
}

function initializeSearch() {
    const searchInput = document.getElementById('pokemonSearch');
    const searchContainer = document.querySelector('.search-container');
    
    // Create suggestions container
    const suggestionsDiv = document.createElement('div');
    suggestionsDiv.className = 'search-suggestions';
    searchContainer.appendChild(suggestionsDiv);
    
    // Get all Pokémon names for suggestions
    const allPokemonCards = document.querySelectorAll('.pokemon-card');
    const allPokemonNames = Array.from(allPokemonCards).map(card => {
        const name = card.querySelector('.name').textContent;
        const image = card.querySelector('img').src;
        return { name, image };
    });
    
    searchInput.addEventListener('input', (e) => {
        const searchText = e.target.value.toLowerCase();
        const tiers = document.querySelectorAll('.tier');
        
        if (searchText.length > 0) {
            const matches = allPokemonNames.filter(pokemon => 
                pokemon.name.toLowerCase().includes(searchText)
            ).slice(0, 5);
            
            suggestionsDiv.innerHTML = '';
            matches.forEach(pokemon => {
                const div = document.createElement('div');
                div.className = 'suggestion-item';
                div.innerHTML = `
                    <img src="${pokemon.image}" alt="${pokemon.name}">
                    <span>${pokemon.name}</span>
                `;
                div.addEventListener('click', () => {
                    searchInput.value = pokemon.name;
                    suggestionsDiv.classList.remove('active');
                    const tiers = document.querySelectorAll('.tier');
                    filterPokemon(pokemon.name.toLowerCase(), tiers);
                });
                suggestionsDiv.appendChild(div);
            });
            
            suggestionsDiv.classList.add('active');
        } else {
            suggestionsDiv.classList.remove('active');
        }
        
        filterPokemon(searchText, tiers);
    });
    
    // Close suggestions when clicking outside
    document.addEventListener('click', (e) => {
        if (!searchContainer.contains(e.target)) {
            suggestionsDiv.classList.remove('active');
        }
    });
}

function filterPokemon(searchText, tiers) {
    const selectedGens = Array.from(document.querySelectorAll('.gen-filters input:checked'))
        .map(checkbox => checkbox.dataset.gen);
    const showForms = selectedGens.includes('forms');
    const selectedGenNums = selectedGens
        .filter(gen => gen !== 'forms')
        .map(gen => parseInt(gen));
    
    console.log('Selected generations:', selectedGenNums, 'Forms:', showForms);

    tiers.forEach(tier => {
        const cards = tier.querySelectorAll('.pokemon-card');
        
        cards.forEach(card => {
            const pokemonName = card.querySelector('.name').textContent.toLowerCase();
            const pokemonId = getPokemonId(pokemonName);
            const isForme = pokemonName.includes('-') || pokemonName.includes('mega');
            const matchesGen = pokemonId ? isInSelectedGens(pokemonId, selectedGenNums) : isForme && showForms;
            
            if (pokemonName.includes(searchText) && matchesGen) {
                card.style.display = '';
            } else {
                card.style.display = 'none';
            }
        });
    });

    countPokemon(); // Add this line to update counts after filtering
}

function isInSelectedGens(pokemonId, selectedGens) {
    const isInGen = selectedGens.some(gen => {
        const range = GEN_RANGES[gen];
        return pokemonId >= range.start && pokemonId <= range.end;
    });
    console.log(`Checking if ${pokemonId} is in gens ${selectedGens}: ${isInGen}`);  // Debug log
    return isInGen;
}

function getPokemonId(pokemonName) {
    // Convert name to match the format in pokemonNameToId
    const formattedName = pokemonName
        .split(' ')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
        .join('-');
    
    const id = pokemonNameToId[formattedName];
    console.log(`Getting ID for ${pokemonName} (${formattedName}): ${id}`);
    return id;
}

// Add generation filter initialization
function initializeGenFilters() {
    const genFilters = document.querySelectorAll('.gen-filters input');
    console.log('Found gen filters:', genFilters.length);  // Debug log
    genFilters.forEach(filter => {
        filter.addEventListener('change', () => {
            console.log('Gen filter changed:', filter.dataset.gen);  // Debug log
            const searchText = document.getElementById('pokemonSearch').value.toLowerCase();
            const tiers = document.querySelectorAll('.tier');
            filterPokemon(searchText, tiers);
        });
    });
}

function initializeTeamBuilder() {
    const teamSlots = document.querySelectorAll('.team-slot');
    
    function handleCardClick(event) {
        const card = event.currentTarget;
        const emptySlot = Array.from(teamSlots).find(slot => slot.classList.contains('empty'));
        if (emptySlot) {
            const pokemonName = card.querySelector('.name').textContent;
            const pokemonImg = card.querySelector('img').src;
            const tier = card.closest('.tier').dataset.tier;
            const tierColor = getComputedStyle(card.closest('.tier').querySelector('.tier-label')).backgroundColor;
            
            emptySlot.innerHTML = `
                <img src="${pokemonImg}" alt="${pokemonName}">
                <div class="tier-badge" style="background-color: ${tierColor}">${tier}</div>
                <div class="team-pokemon-name">${pokemonName}</div>
            `;
            emptySlot.classList.remove('empty');
            emptySlot.setAttribute('data-pokemon', pokemonName);
            emptySlot.title = pokemonName;
            
            // Add click to remove
            emptySlot.addEventListener('click', () => {
                emptySlot.innerHTML = '';
                emptySlot.classList.add('empty');
                emptySlot.removeAttribute('data-pokemon');
                emptySlot.title = '';
                analyzeTeam(); // Add analysis update on remove
            });

            analyzeTeam(); // Add analysis update on add
        }
    }

    // Call this once after tier list is initialized
    const pokemonCards = document.querySelectorAll('.pokemon-card');
    pokemonCards.forEach(card => {
        card.addEventListener('click', handleCardClick);
    });
}

// Update the hover initialization
function initializePokemonHover() {
    const hoverCard = document.createElement('div');
    hoverCard.className = 'pokemon-hover-card';
    hoverCard.innerHTML = `
        <div class="types"></div>
        <div class="stats"></div>
        <div class="abilities"></div>
        <div class="effectiveness">
            <div class="weak-4x"></div>
            <div class="weak-2x"></div>
            <div class="resist-05x"></div>
            <div class="resist-025x"></div>
            <div class="immune-to"></div>
        </div>
    `;
    document.body.appendChild(hoverCard);

    // Update selector to include both tier list and team builder Pokémon
    const pokemonCards = document.querySelectorAll('.pokemon-card, .team-slot:not(.empty)');
    
    pokemonCards.forEach(card => {
        card.addEventListener('mouseenter', (e) => {
            // Get Pokémon name from either card type
            const nameElement = card.querySelector('.name');
            const pokemonName = nameElement ? nameElement.textContent : card.getAttribute('data-pokemon');
            
            const data = getPokemonStats(pokemonName);
            
            if (data) {
                // Update types
                const typesHtml = data.types.map(type => 
                    `<div class="type-badge" style="background-color: var(--${type}-color)">${type.toUpperCase()}</div>`
                ).join('');
                hoverCard.querySelector('.types').innerHTML = typesHtml;

                // Update stats
                const maxStat = 255;
                const statsHtml = `
                    <div class="stat-bar hp">
                        <div class="stat-label">HP</div>
                        <div class="bar"></div>
                        <div class="value"></div>
                    </div>
                    <div class="stat-bar attack">
                        <div class="stat-label">ATK</div>
                        <div class="bar"></div>
                        <div class="value"></div>
                    </div>
                    <div class="stat-bar defense">
                        <div class="stat-label">DEF</div>
                        <div class="bar"></div>
                        <div class="value"></div>
                    </div>
                    <div class="stat-bar spAtk">
                        <div class="stat-label">SP.ATK</div>
                        <div class="bar"></div>
                        <div class="value"></div>
                    </div>
                    <div class="stat-bar spDef">
                        <div class="stat-label">SP.DEF</div>
                        <div class="bar"></div>
                        <div class="value"></div>
                    </div>
                    <div class="stat-bar speed">
                        <div class="stat-label">SPD</div>
                        <div class="bar"></div>
                        <div class="value"></div>
                    </div>
                `;
                hoverCard.querySelector('.stats').innerHTML = statsHtml;

                // Add this code to fill the stat bars and set values
                Object.entries(data.stats).forEach(([stat, value]) => {
                    const statBar = hoverCard.querySelector(`.stat-bar.${stat}`);
                    if (statBar) {
                        statBar.querySelector('.value').textContent = value;
                        const bar = statBar.querySelector('.bar');
                        const percentage = (value / maxStat) * 100;
                        bar.style.setProperty('--stat-fill-width', `${percentage}%`);
                        bar.style.setProperty('--stat-color', getStatColor(value));
                    }
                });

                // Update abilities with formatting
                if (data.abilities) {
                    const abilities = [...data.abilities];
                    if (abilities.length > 1) {
                        const hiddenAbility = abilities.pop();
                        const regularAbilitiesHtml = abilities.map(ability => 
                            `${ability}<span class="ability-desc">${ABILITY_DESCRIPTIONS[ability] || ''}</span>`
                        ).join('\n');
                        
                        hoverCard.querySelector('.abilities').innerHTML = 
                            `${regularAbilitiesHtml}\n<span class="hidden"><span class="ability-name">${hiddenAbility}</span> <span class="ha-tag">(HA)</span></span><span class="ability-desc">${ABILITY_DESCRIPTIONS[hiddenAbility] || ''}</span>`;
                    } else {
                        const ability = abilities[0];
                        hoverCard.querySelector('.abilities').innerHTML = `${ability}<span class="ability-desc">${ABILITY_DESCRIPTIONS[ability] || ''}</span>`;
                    }
                }

                // Update effectiveness
                const weak4xHtml = data.effectiveness.doubleWeakTo?.length > 0 ? 
                    data.effectiveness.doubleWeakTo.map(type => 
                        `<span class="type-badge double-weak" style="background-color: var(--${type.toLowerCase()}-color)">${type}</span>`
                    ).join('\n') : 
                    '<div class="none-text">None</div>';  // Wrap "None" in a div

                const weak2xHtml = data.effectiveness.weakTo.filter(type => !data.effectiveness.doubleWeakTo?.includes(type)).length > 0 ? 
                    data.effectiveness.weakTo.filter(type => !data.effectiveness.doubleWeakTo?.includes(type)).map(type => 
                        `<span class="type-badge" style="background-color: var(--${type.toLowerCase()}-color)">${type}</span>`
                    ).join('\n') : 
                    '<div class="none-text">None</div>';

                const resist025xHtml = data.effectiveness.doubleResistantTo?.length > 0 ? 
                    data.effectiveness.doubleResistantTo.map(type => 
                        `<span class="type-badge double-resist" style="background-color: var(--${type.toLowerCase()}-color)">${type}</span>`
                    ).join('\n') : 
                    '<div class="none-text">None</div>';  // Add div wrapper

                const resist05xHtml = data.effectiveness.resistantTo.filter(type => !data.effectiveness.doubleResistantTo?.includes(type)).length > 0 ? 
                    data.effectiveness.resistantTo.filter(type => !data.effectiveness.doubleResistantTo?.includes(type)).map(type => 
                        `<span class="type-badge" style="background-color: var(--${type.toLowerCase()}-color)">${type}</span>`
                    ).join('\n') : 
                    '<div class="none-text">None</div>';  // Add div wrapper

                const immuneHtml = data.effectiveness.immuneTo.length > 0 ? 
                    data.effectiveness.immuneTo.map(type => 
                        `<span class="type-badge" style="background-color: var(--${type.toLowerCase()}-color)">${type}</span>`
                    ).join('\n') : 
                    '<div class="none-text">None</div>';  // Add div wrapper

                hoverCard.querySelector('.weak-4x').innerHTML = weak4xHtml;
                hoverCard.querySelector('.weak-2x').innerHTML = weak2xHtml;
                hoverCard.querySelector('.resist-025x').innerHTML = resist025xHtml;
                hoverCard.querySelector('.resist-05x').innerHTML = resist05xHtml;
                hoverCard.querySelector('.immune-to').innerHTML = immuneHtml;

                // Position the card
                const cardRect = card.getBoundingClientRect();
                const hoverCardRect = hoverCard.getBoundingClientRect();
                
                let leftPos = cardRect.right + 10;
                if (leftPos + hoverCardRect.width > window.innerWidth) {
                    leftPos = cardRect.left - hoverCardRect.width - 10;
                }
                
                hoverCard.style.left = `${leftPos}px`;
                hoverCard.style.top = `${cardRect.top}px`;
                hoverCard.style.display = 'block';
            }
        });

        card.addEventListener('mouseleave', () => {
            hoverCard.style.display = 'none';
        });
    });

    // Add event delegation for dynamically added team slots
    document.querySelector('.team-slots').addEventListener('mouseenter', (e) => {
        const slot = e.target.closest('.team-slot');
        if (slot && !slot.classList.contains('empty')) {
            const pokemonName = slot.getAttribute('data-pokemon');
            const data = getPokemonStats(pokemonName);
            
            if (data) {
                // Copy the same hover card update code from above
                const typesHtml = data.types.map(type => 
                    `<div class="type-badge" style="background-color: var(--${type}-color)">${type.toUpperCase()}</div>`
                ).join('');
                hoverCard.querySelector('.types').innerHTML = typesHtml;

                // Rest of the hover card update code...
                // (Copy the same code that updates stats and abilities)

                // Position the card
                const slotRect = slot.getBoundingClientRect();
                let leftPos = slotRect.right + 10;
                if (leftPos + hoverCard.offsetWidth > window.innerWidth) {
                    leftPos = slotRect.left - hoverCard.offsetWidth - 10;
                }
                hoverCard.style.left = `${leftPos}px`;
                hoverCard.style.top = `${slotRect.top}px`;
                hoverCard.style.display = 'block';
            }
        }
    }, true);

    // Add mouseleave handler for team slots
    document.querySelector('.team-slots').addEventListener('mouseleave', (e) => {
        const slot = e.target.closest('.team-slot');
        if (slot && !slot.classList.contains('empty')) {
            hoverCard.style.display = 'none';
        }
    }, true);
}

// Add this function to count Pokémon
function countPokemon() {
    // Count visible Pokémon cards
    const visibleCards = document.querySelectorAll('.pokemon-card:not([style*="display: none"])');
    const totalCards = document.querySelectorAll('.pokemon-card');
    
    console.log('Currently visible Pokémon:', visibleCards.length);
    console.log('Total Pokémon cards:', totalCards.length);
    
    // Count by tier
    const tiers = document.querySelectorAll('.tier');
    tiers.forEach(tier => {
        const tierName = tier.dataset.tier;
        const visibleInTier = tier.querySelectorAll('.pokemon-card:not([style*="display: none"])').length;
        console.log(`${tierName} tier: ${visibleInTier} Pokémon`);
    });
}

// Replace the existing POKEMON_DATA constant with this
let POKEMON_DATA = {};

// Update the loadPokemonData function
async function loadPokemonData() {
    try {
        // First load the base data
        const response = await fetch('pokemon-data-manual.json');
        const baseData = await response.json();
        
        // Recalculate effectiveness for each Pokemon
        POKEMON_DATA = {};
        for (const [name, data] of Object.entries(baseData)) {
            const effectiveness = calculateTypeEffectiveness(data.types);
            POKEMON_DATA[name] = {
                ...data,
                effectiveness: effectiveness
            };
        }
        
        console.log('Loaded and processed data for', Object.keys(POKEMON_DATA).length, 'Pokémon');
    } catch (error) {
        console.error('Error loading Pokemon data:', error);
    }
}

// Initialize everything when the DOM is ready
document.addEventListener('DOMContentLoaded', async () => {
    await loadPokemonData();
    await initializePokemonData();
    await initializeTierList();
    initializeTeamBuilder();
    initializeDarkMode();
    initializeGenFilters();
    initializePokemonHover();
    countPokemon();
});

// Complete type chart
const TYPE_CHART = {
    normal: { weakTo: ['fighting'], resistantTo: [], immuneTo: ['ghost'] },
    fire: { weakTo: ['water', 'ground', 'rock'], resistantTo: ['fire', 'grass', 'ice', 'bug', 'steel', 'fairy'], immuneTo: [] },
    water: { weakTo: ['electric', 'grass'], resistantTo: ['fire', 'water', 'ice', 'steel'], immuneTo: [] },
    electric: { weakTo: ['ground'], resistantTo: ['electric', 'flying', 'steel'], immuneTo: [] },
    grass: { weakTo: ['fire', 'ice', 'poison', 'flying', 'bug'], resistantTo: ['water', 'electric', 'grass', 'ground'], immuneTo: [] },
    ice: { weakTo: ['fire', 'fighting', 'rock', 'steel'], resistantTo: ['ice'], immuneTo: [] },
    fighting: { weakTo: ['flying', 'psychic', 'fairy'], resistantTo: ['bug', 'rock', 'dark'], immuneTo: [] },
    poison: { weakTo: ['ground', 'psychic'], resistantTo: ['grass', 'fighting', 'poison', 'bug', 'fairy'], immuneTo: [] },
    ground: { weakTo: ['water', 'grass', 'ice'], resistantTo: ['poison', 'rock'], immuneTo: ['electric'] },
    flying: { weakTo: ['electric', 'ice', 'rock'], resistantTo: ['grass', 'fighting', 'bug'], immuneTo: ['ground'] },
    psychic: { weakTo: ['bug', 'ghost', 'dark'], resistantTo: ['fighting', 'psychic'], immuneTo: [] },
    bug: { weakTo: ['fire', 'flying', 'rock'], resistantTo: ['grass', 'fighting', 'ground'], immuneTo: [] },
    rock: { weakTo: ['water', 'grass', 'fighting', 'ground', 'steel'], resistantTo: ['normal', 'fire', 'poison', 'flying'], immuneTo: [] },
    ghost: { weakTo: ['ghost', 'dark'], resistantTo: ['poison', 'bug'], immuneTo: ['normal', 'fighting'] },
    dragon: { weakTo: ['ice', 'dragon', 'fairy'], resistantTo: ['fire', 'water', 'electric', 'grass'], immuneTo: [] },
    dark: { weakTo: ['fighting', 'bug', 'fairy'], resistantTo: ['ghost', 'dark'], immuneTo: ['psychic'] },
    steel: { weakTo: ['fire', 'fighting', 'ground'], resistantTo: ['normal', 'grass', 'ice', 'flying', 'psychic', 'bug', 'rock', 'dragon', 'steel', 'fairy'], immuneTo: ['poison'] },
    fairy: { weakTo: ['poison', 'steel'], resistantTo: ['fighting', 'bug', 'dark'], immuneTo: ['dragon'] }
};

// Add this before the fetchPokemonStats function
const POKEMON_NAME_MAPPING = {
    'Mega-Rayquaza': 'rayquaza-mega',
    'Mega-Mewtwo-Y': 'mewtwo-mega-y',
    'Necrozma-Dusk Mane': 'necrozma-dusk',
    'Zacian-Crowned': 'zacian-crowned',
    'Darmanitan-Galar': 'darmanitan-galar-standard',
    // Add more mappings as needed
};

// Replace the fetchPokemonStats function with this simpler version
function getPokemonStats(pokemonName) {
    return POKEMON_DATA[pokemonName] || null;
}

// Add this color mapping table
const STAT_COLORS = {
    5: 'rgba(255, 0, 0, 1)',
    10: 'rgba(255, 0, 0, 1)',
    13: 'rgba(255, 0, 0, 1)',
    15: 'rgba(255, 0, 0, 1)',
    20: 'rgba(255, 0, 0, 1)',
    25: 'rgba(255, 0, 0, 1)',
    28: 'rgba(255, 0, 0, 1)',
    29: 'rgba(255, 0, 0, 1)',
    30: 'rgba(255, 0, 0, 1)',
    // ... (skipping some values for brevity)
    50: 'rgba(255, 0, 0, 1)',
    51: 'rgba(255, 4, 0, 1)',
    60: 'rgba(255, 50, 0, 1)',
    70: 'rgba(255, 102, 0, 1)',
    80: 'rgba(255, 152, 0, 1)',
    90: 'rgba(255, 204, 0, 1)',
    100: 'rgba(255, 254, 0, 1)',
    110: 'rgba(204, 255, 0, 1)',
    120: 'rgba(154, 255, 0, 1)',
    130: 'rgba(102, 255, 0, 1)',
    140: 'rgba(52, 255, 0, 1)',
    150: 'rgba(2, 255, 42, 1)',
    160: 'rgba(2, 255, 85, 1)',
    170: 'rgba(2, 255, 127, 1)',
    180: 'rgba(2, 255, 170, 1)',
    200: 'rgba(2, 255, 255, 1)',
    230: 'rgba(2, 255, 255, 1)'
};

function getStatColor(value) {
    // Find the closest threshold that's less than or equal to the value
    const thresholds = Object.keys(STAT_COLORS).map(Number).sort((a, b) => a - b);
    const closestThreshold = thresholds.reduce((prev, curr) => {
        if (curr <= value && curr > prev) {
            return curr;
        }
        return prev;
    });
    
    return STAT_COLORS[closestThreshold] || STAT_COLORS[230]; // Default to highest color if value exceeds all thresholds
}

// Add this function to analyze team coverage
function analyzeTeam() {
    const teamSlots = document.querySelectorAll('.team-slot:not(.empty)');
    const teamAnalysis = {
        weaknesses: {},      // Types that are super effective against team
        doubleWeaknesses: {},// Types that are 4x effective against team
        resistances: {},     // Types team resists
        doubleResistances: {},// Types team double resists
        immunities: {},      // Types team is immune to
        coverage: {}         // Types team can hit super effectively
    };

    // Initialize counters for all types
    const allTypes = ['normal', 'fire', 'water', 'electric', 'grass', 'ice', 
                     'fighting', 'poison', 'ground', 'flying', 'psychic', 'bug', 
                     'rock', 'ghost', 'dragon', 'dark', 'steel', 'fairy'];
    
    allTypes.forEach(type => {
        teamAnalysis.weaknesses[type] = 0;
        teamAnalysis.doubleWeaknesses[type] = 0;
        teamAnalysis.resistances[type] = 0;
        teamAnalysis.doubleResistances[type] = 0;
        teamAnalysis.immunities[type] = 0;
        teamAnalysis.coverage[type] = 0;
    });

    // Analyze each Pokemon in the team
    teamSlots.forEach(slot => {
        const pokemonName = slot.getAttribute('data-pokemon');
        const data = getPokemonStats(pokemonName);
        
        if (data) {
            // Add weaknesses and double weaknesses
            data.effectiveness.weakTo.forEach(type => {
                if (data.effectiveness.doubleWeakTo?.includes(type)) {
                    teamAnalysis.doubleWeaknesses[type.toLowerCase()]++;
                } else {
                    teamAnalysis.weaknesses[type.toLowerCase()]++;
                }
            });

            // Add resistances and double resistances
            data.effectiveness.resistantTo.forEach(type => {
                if (data.effectiveness.doubleResistantTo?.includes(type)) {
                    teamAnalysis.doubleResistances[type.toLowerCase()]++;
                } else {
                    teamAnalysis.resistances[type.toLowerCase()]++;
                }
            });

            // Add immunities
            data.effectiveness.immuneTo.forEach(type => {
                teamAnalysis.immunities[type.toLowerCase()]++;
            });
        }
    });

    updateTeamAnalysisDisplay(teamAnalysis);
}

function updateTeamAnalysisDisplay(analysis) {
    const analysisHtml = `
        <div class="team-analysis">
            <h3>Team Analysis</h3>
            <div class="analysis-section">
                <h4>Team Weaknesses</h4>
                <div class="type-list">
                    ${Object.entries(analysis.doubleWeaknesses)
                        .filter(([_, count]) => count > 0)
                        .sort((a, b) => b[1] - a[1])
                        .map(([type, count]) => `
                            <div class="type-badge double-weak" style="background-color: var(--${type}-color)">
                                ${type.toUpperCase()} (4x: ${count})
                            </div>
                        `).join('')}
                    ${Object.entries(analysis.weaknesses)
                        .filter(([_, count]) => count > 0)
                        .sort((a, b) => b[1] - a[1])
                        .map(([type, count]) => `
                            <div class="type-badge" style="background-color: var(--${type}-color)">
                                ${type.toUpperCase()} (2x: ${count})
                            </div>
                        `).join('')}
                </div>
            </div>
            <div class="analysis-section">
                <h4>Team Resistances</h4>
                <div class="type-list">
                    ${Object.entries(analysis.doubleResistances)
                        .filter(([_, count]) => count > 0)
                        .sort((a, b) => b[1] - a[1])
                        .map(([type, count]) => `
                            <div class="type-badge double-resist" style="background-color: var(--${type}-color)">
                                ${type.toUpperCase()} (0.25x: ${count})
                            </div>
                        `).join('')}
                    ${Object.entries(analysis.resistances)
                        .filter(([_, count]) => count > 0)
                        .sort((a, b) => b[1] - a[1])
                        .map(([type, count]) => `
                            <div class="type-badge" style="background-color: var(--${type}-color)">
                                ${type.toUpperCase()} (0.5x: ${count})
                            </div>
                        `).join('')}
                </div>
            </div>
        </div>
    `;

    // Add or update the analysis display
    const teamPanel = document.querySelector('.team-panel');
    let analysisElement = teamPanel.querySelector('.team-analysis');
    if (analysisElement) {
        analysisElement.outerHTML = analysisHtml;
    } else {
        teamPanel.insertAdjacentHTML('beforeend', analysisHtml);
    }
}

// Add this function to calculate type effectiveness including double weaknesses/resistances
function calculateTypeEffectiveness(types) {
    const effectiveness = {
        weakTo: [],
        doubleWeakTo: [],
        resistantTo: [],
        doubleResistantTo: [],
            immuneTo: []
    };
    
    // Create a map to track effectiveness multipliers for each type
    const typeMultipliers = {};
    
    // Initialize multipliers for all types
    Object.keys(TYPE_CHART).forEach(type => {
        typeMultipliers[type] = 1;
    });

    // Calculate combined effectiveness for all types
    types.forEach(pokemonType => {
        const typeData = TYPE_CHART[pokemonType.toLowerCase()];
        console.log(`Processing type: ${pokemonType}`);
        
        // Process weaknesses (2x damage)
        typeData.weakTo.forEach(type => {
            typeMultipliers[type.toLowerCase()] *= 2;
            console.log(`${type}: multiplier now ${typeMultipliers[type.toLowerCase()]}`);
        });
        
        // Process resistances (0.5x damage)
        typeData.resistantTo.forEach(type => {
            typeMultipliers[type.toLowerCase()] *= 0.5;
        });
        
        // Process immunities (0x damage)
        typeData.immuneTo.forEach(type => {
            typeMultipliers[type.toLowerCase()] = 0;
        });
    });

    // Log final multipliers
    console.log('Final multipliers:', typeMultipliers);

    // Categorize the final multipliers
    Object.entries(typeMultipliers).forEach(([type, multiplier]) => {
        if (multiplier === 0) {
            effectiveness.immuneTo.push(type);
        } else if (multiplier === 4) {
            effectiveness.doubleWeakTo.push(type);
            effectiveness.weakTo.push(type);
        } else if (multiplier === 2) {
            effectiveness.weakTo.push(type);
        } else if (multiplier === 0.25) {
            effectiveness.doubleResistantTo.push(type);
            effectiveness.resistantTo.push(type);
        } else if (multiplier === 0.5) {
            effectiveness.resistantTo.push(type);
        }
    });

    console.log('Final effectiveness:', effectiveness);
    return effectiveness;
}

// Update the Pokemon data generation to use this new calculation
async function generatePokemonData() {
    const pokemonData = {};
    
    // For each Pokemon...
    for (const [name, types] of Object.entries(POKEMON_TYPES)) {
        const effectiveness = calculateTypeEffectiveness(types);
        
        pokemonData[name] = {
            types: types,
            stats: POKEMON_STATS[name] || {},
            abilities: POKEMON_ABILITIES[name] || [],
            effectiveness: effectiveness
        };
    }

    return pokemonData;
}

function findHighestStats() {
    let highest = {
        hp: { value: 0, pokemon: [] },
        attack: { value: 0, pokemon: [] },
        defense: { value: 0, pokemon: [] },
        spAtk: { value: 0, pokemon: [] },
        spDef: { value: 0, pokemon: [] },
        speed: { value: 0, pokemon: [] }
    };

    for (const [name, data] of Object.entries(POKEMON_DATA)) {
        const stats = data.stats;
        
        // Check each stat
        if (stats.hp > highest.hp.value) {
            highest.hp = { value: stats.hp, pokemon: [name] };
        } else if (stats.hp === highest.hp.value) {
            highest.hp.pokemon.push(name);
        }

        if (stats.attack > highest.attack.value) {
            highest.attack = { value: stats.attack, pokemon: [name] };
        } else if (stats.attack === highest.attack.value) {
            highest.attack.pokemon.push(name);
        }

        if (stats.defense > highest.defense.value) {
            highest.defense = { value: stats.defense, pokemon: [name] };
        } else if (stats.defense === highest.defense.value) {
            highest.defense.pokemon.push(name);
        }

        if (stats.spAtk > highest.spAtk.value) {
            highest.spAtk = { value: stats.spAtk, pokemon: [name] };
        } else if (stats.spAtk === highest.spAtk.value) {
            highest.spAtk.pokemon.push(name);
        }

        if (stats.spDef > highest.spDef.value) {
            highest.spDef = { value: stats.spDef, pokemon: [name] };
        } else if (stats.spDef === highest.spDef.value) {
            highest.spDef.pokemon.push(name);
        }

        if (stats.speed > highest.speed.value) {
            highest.speed = { value: stats.speed, pokemon: [name] };
        } else if (stats.speed === highest.speed.value) {
            highest.speed.pokemon.push(name);
        }
    }

    console.log('Highest Stats:', highest);
    return highest;
}

// Add this near the top of the file, after any imports/constants
const hoverCard = document.querySelector('.pokemon-hover-card');

// Make sure the hover card exists before trying to use it
if (!hoverCard) {
    console.error('Hover card element not found');
}

// Add this near the top with other constants
const ABILITY_DESCRIPTIONS = {
    "Hyper Cutter": "Prevents Attack stat from being lowered by other Pokémon",
    "Sand Veil": "Boosts evasion during a sandstorm",
    "Poison Heal": "Restores HP if the Pokémon is poisoned, instead of taking damage",
    "Intimidate": "Lowers opponent's Attack stat when entering battle",
    "Moxie": "Boosts Attack after knocking out any Pokémon",
    // Add more ability descriptions...
};