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
    'Espathra': 956,
    'Mimikyu': 778,
    'Xerneas': 716,
    'Chien-Pao': 1002,
    'Sneasler': 984,
    'Quaquaval': 914,
    'Mega-Salamence': 373,
    'Flutter Mane': 987,
    'Annihilape': 979,
    'Dragonite': 149,
    'Yveltal': 717,
    'Lunala': 792,
    'Mega-Gengar': 94,
    'Iron Valiant': 1006,
    'Archaludon': 1018,
    'Jirachi': 385,
    'Mew': 151,
    'Gliscor': 472,
    
    // S Tier
    'Darmanitan-Galar': 555,
    'Dragapult': 887,
    'Iron Bundle': 995,
    'Excadrill': 530,
    'Mega-Lucario': 448,
    'Zygarde-Complete': 718,
    'Salamence': 373,
    'Rayquaza': 384,
    'Kyurem-Black': 646,
    'Baxcalibur': 998,
    'Naganadel': 804,
    'Mega-Blastoise': 9,
    'Ogerpon': 1017,
    'Roaring Moon': 1005,
    'Chi-Yu': 1004,
    'Zekrom': 644,
    'Raging Bolt': 1020,
    'Landorus-Incarnate': 645,
    'Mega-Metagross': 376,
    'Palkia': 484,
    'Ribombee': 743,
    'Tapu Lele': 786,
    'Celesteela': 797,
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
    'Lucario': 448,
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
    'Orthworm': 968,
    'Rotom': 479,
    'Bruxish': 779,
    'Marowak-Alola': 105,
    'Dragalge': 691,
    'Mega-Pidgeot': 18,
    'Noivern': 715,
    'Silvally': 773,
    'Fezandipiti': 1013,
    'Jynx': 124,
    'Houndoom': 229,
    'Indeedee-Male': 876,
    'Indeedee-Female': 876,
    'Scream Tail': 985,
    'Shaymin': 492,
    'Galvantula': 596,
    'Pinsir': 127,
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
    'Gogoat': 673,
    'Sawsbuck': 586,
    'Sceptile': 254,
    'Leafeon': 470,
    'Altaria': 334,
    'Guzzlord': 799,
    'Grapploct': 853,
    'Solrock': 338,
    'Stunfisk-Galar': 618,
    'Muk': 89,
    'Exeggutor-Alola': 103,
    'Skuntank': 435,
    'Garbodor': 569,
    'Relicanth': 369,
    'Seaking': 119,
    'Marowak': 105,
    'Jolteon': 135,
    'Electrode': 101,
    'Bellossom': 182,
    'Shiinotic': 756,
    'Comfey': 764,
    'Meganium': 154,
    'Miltank': 241,
    'Leavanny': 542,
    'Wyrdeer': 899,
    'Farigiraf': 981,
    'Octillery': 224,
    'Liepard': 510,
    'Gothitelle': 576,
    'Musharna': 518,
    'Meowstic-Female': 678,
    'Sandaconda': 844,
    'Lycanroc-Midday': 745,
    'Golem': 76,
    'Ambipom': 424,
    'Smeargle': 235,
    'Accelgor': 617,
    'Oranguru': 765,
    'Brambleghast': 947,
    'Dhelmise': 781,
    'Avalugg': 713,
    'Basculin': 550,
    'Drampa': 780,
    'Chimecho': 358,
    'Dubwool': 832,
    'Swoobat': 528,
    'Rapidash-Galar': 78,
    'Ampharos': 181,
    'Morpeko': 877,
    'Shedinja': 292,
    'Perrserker': 863,
    'Arctozolt': 881,
    'Druddigon': 621,
    'Linoone': 264,
    'Bouffalant': 626,
    'Stoutland': 508,
    'Raticate-Alola': 20,
    'Banette': 354,
    'Bastiodon': 411,
    'Luxray': 405,
    'Rampardos': 409,
    'Cacturne': 332,
    'Turtonator': 776,
    'Camerupt': 323,
    'Mr. Rime': 866,
    'Boltund': 836,
    'Lycanroc-Midnight': 745,
    'Heatmor': 631,
    'Vikavolt': 738,
    'Rapidash': 78,
    'Flareon': 136,

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
    'Mega-Aggron': 306,
    'Mega-Houndoom': 229,
    'Squawkabilly (Sheer Force variants )': 931,
    'Squawkabilly (Guts variants)': 931,
    'Iron Hands my beloved': 992,
    'Kilowattrel': 941,
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
    'Oricorio-Baile': 741,
    "Oricorio-Pa'u": 741,
    'Basculegion-Male': 902,
    'Basculegion-Female': 902,
    'Articuno-Galar': 144,
    'Braviary-Hisui': 628,
    'Electrode-Hisui': 101,
    'Rotom-Frost': 479,
    'Rotom-Heat': 479,
    'Rotom-Fan': 479,
    'Hoopa-Contained': 720,
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
    'Hydrapple': 1020,
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
    'Oinkologne-Female': 926
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
    'Lycanroc-Midday': { id: 745, form: 'midday' },
    'Oricorio-Baile': { id: 741, form: 'baile' },
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
            if (pokemon) {
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
}

function createPokemonCard(pokemon) {
    // Skip creating card if image is null (Gen 9 Pokemon)
    if (!pokemon.image) {
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
    tiers.forEach(tier => {
        const cards = tier.querySelectorAll('.pokemon-card');
        let visibleCards = 0;
        
        cards.forEach(card => {
            const pokemonName = card.querySelector('.name').textContent.toLowerCase();
            if (pokemonName.includes(searchText)) {
                card.style.display = '';
                visibleCards++;
            } else {
                card.style.display = 'none';
            }
        });
        
        if (visibleCards === 0) {
            tier.style.display = 'none';
        } else {
            tier.style.display = '';
        }
    });
}

// Update the DOMContentLoaded listener
document.addEventListener('DOMContentLoaded', async () => {
    await initializePokemonData();
    await initializeTierList();  // Wait for tier list to complete
    initializeDarkMode();
}); 