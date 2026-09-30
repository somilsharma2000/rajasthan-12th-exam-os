import json

with open('/app/conversations/6aba352337af6a2cf1cfb4c2/rajasthan-12th-os/gather/pyq-raw/ldc-2024-p1-final.json') as f:
    data = json.load(f)

# Mapping dictionary for index i -> (subject, note)
mapping = {}

# 0: Mauryan administrative system (Samaharta)
mapping[0] = ("india-gk", "")
# 1: Malla Mahajanapada capital
mapping[1] = ("india-gk", "")
# 2: Jain first Tirthankara (Rishabhdev)
mapping[2] = ("india-gk", "Main question asks about Jain Tirthankaras (Ancient India history); English text field contained extraneous statistics text.")
# 3: Nodal industry for synthetic textile
mapping[3] = ("india-gk", "")
# 4: Rajasthan copper mine centres North to South
mapping[4] = ("raj-gk", "")
# 5: Western coast port of India (Kochi)
mapping[5] = ("india-gk", "")
# 6: Indian state not sharing boundary with Bangladesh
mapping[6] = ("india-gk", "")
# 7: Trigonometry expression
mapping[7] = ("maths", "")
# 8: Data interpretation table average
mapping[8] = ("maths", "Data interpretation table question classified as maths per prompt guidelines.")
# 9: Batan Ri Phulwari author (Vijaydan Detha)
mapping[9] = ("raj-gk", "")
# 10: First wetland city of India (Udaipur)
mapping[10] = ("raj-gk", "Udaipur in Rajasthan nominated as India's first wetland city; tagged raj-gk as specific Rajasthan current affairs.")
# 11: Chanwari tax (Bijolia peasant movement)
mapping[11] = ("raj-gk", "")
# 12: Widal test (Typhoid)
mapping[12] = ("science", "")
# 13: Convex lens image at 2F
mapping[13] = ("science", "")
# 14: Polygon interior angle 150
mapping[14] = ("maths", "")
# 15: Triangle ABC angle bisectors
mapping[15] = ("maths", "")
# 16: Mendel garden pea dominant trait
mapping[16] = ("science", "")
# 17: Single Cell Protein / Spirulina
mapping[17] = ("science", "")
# 18: Satish Dhawan Space Centre location
mapping[18] = ("india-gk", "")
# 19: Soaps and detergents statements
mapping[19] = ("science", "")
# 20: Mean and median difference
mapping[20] = ("maths", "")
# 21: Girls and boys count product 272
mapping[21] = ("maths", "")
# 22: 2*Median - Mode
mapping[22] = ("maths", "")
# 23: Polynomial factor
mapping[23] = ("maths", "")
# 24: Fundamental Rights court recourse
mapping[24] = ("india-gk", "")
# 25: Capitalist economy demerit
mapping[25] = ("india-gk", "")
# 26: Anti-defection amendment
mapping[26] = ("india-gk", "")
# 27: Circle diameter coordinates
mapping[27] = ("maths", "")
# 28: Room dimensions and coloring cost
mapping[28] = ("maths", "")
# 29: Aeroplane elevation height
mapping[29] = ("maths", "")
# 30: Birthday cap cone area
mapping[30] = ("maths", "")
# 31: Trigonometry expression
mapping[31] = ("maths", "")
# 32: Gangaur festival (Parvati)
mapping[32] = ("raj-gk", "")
# 33: Lacchiram (Kuchamani Khayal)
mapping[33] = ("raj-gk", "")
# 34: Iron and steel plant in Karnataka
mapping[34] = ("india-gk", "")
# 35: Tryst with Destiny speech
mapping[35] = ("india-gk", "")
# 36: Koraput mining center in Odisha
mapping[36] = ("india-gk", "")
# 37: Age-sex pyramid component
mapping[37] = ("india-gk", "")
# 38: Chemical equation CaO + H2O
mapping[38] = ("science", "")
# 39: Aerated water soda water solution
mapping[39] = ("science", "")
# 40: Beti Bachao Beti Padhao scheme launch year
mapping[40] = ("india-gk", "")
# 41: IX Asian Games New Delhi
mapping[41] = ("india-gk", "")
# 42: Father of Indian Constitution
mapping[42] = ("india-gk", "")
# 43: Short-circuiting in circuit
mapping[43] = ("science", "")
# 44: Physical quantities and units
mapping[44] = ("science", "")
# 45: First geostationary satellite ISRO 1981 (APPLE)
mapping[45] = ("science", "Space technology / satellite mission categorized under science (Science & Tech).")
# 46: Armoured fort (Ranthambore)
mapping[46] = ("raj-gk", "")
# 47: Hawa Mahal builder
mapping[47] = ("raj-gk", "")
# 48: Captain Hawkins and Sir Thomas Roe (Jahangir)
mapping[48] = ("india-gk", "")
# 49: Vedika, Amalak, Shikhar (Temple architecture)
mapping[49] = ("india-gk", "")
# 50: Simon Commission 1927
mapping[50] = ("india-gk", "")
# 51: Uparmal Panch Board
mapping[51] = ("raj-gk", "")
# 52: Ahmednagar merged in Mughal empire
mapping[52] = ("india-gk", "")
# 53: National Statistical Commission (NSC)
mapping[53] = ("india-gk", "")
# 54: Indus Saraswati Civilization
mapping[54] = ("india-gk", "")
# 55: George Thomas called Rajasthan Rajputana in 1800
mapping[55] = ("raj-gk", "")
# 56: Ozone layer UV shield
mapping[56] = ("science", "")
# 57: Cattle feeding and milk yield
mapping[57] = ("science", "")
# 58: Mauritius island location
mapping[58] = ("india-gk", "")
# 59: Sijda and Paibos (Balban)
mapping[59] = ("india-gk", "")
# 60: Sisodia Rajputs fort on Gambhiri & Berach (Chittorgarh)
mapping[60] = ("raj-gk", "")
# 61: Hypermetropic eye
mapping[61] = ("science", "")
# 62: Power of accommodation of eye
mapping[62] = ("science", "")
# 63: Justice for the Judge author
mapping[63] = ("india-gk", "")
# 64: RTI Act assent year
mapping[64] = ("india-gk", "")
# 65: Ladder wall angle of elevation
mapping[65] = ("maths", "")
# 66: Math expression value
mapping[66] = ("maths", "")
# 67: Tower and car depression angles
mapping[67] = ("maths", "")
# 68: Eye lens type
mapping[68] = ("science", "")
# 69: Burning coal oxidation
mapping[69] = ("science", "")
# 70: Sedimentary nutrient cycle
mapping[70] = ("science", "")
# 71: Indira Gandhi Canal Project 1st stage district
mapping[71] = ("raj-gk", "")
# 72: World Bank President 2023 (Ajay Banga)
mapping[72] = ("india-gk", "")
# 73: Disease and pathogen matching
mapping[73] = ("science", "")
# 74: Mechanical to electrical energy (Generator)
mapping[74] = ("science", "")
# 75: Rusting statements
mapping[75] = ("science", "")
# 76: Folk art and material matching (Paane, Phad, etc.)
mapping[76] = ("raj-gk", "")
# 77: Theva art (Pratapgarh)
mapping[77] = ("raj-gk", "")
# 78: UN establishment year
mapping[78] = ("india-gk", "")
# 79: Nitrogenous base not in DNA
mapping[79] = ("science", "")
# 80: First transgenic cow Rosie
mapping[80] = ("science", "")
# 81: Golden Quadrilateral East-West corridor
mapping[81] = ("india-gk", "")
# 82: Ports of India North to South
mapping[82] = ("india-gk", "")
# 83: Highest mountain peak in India
mapping[83] = ("india-gk", "")
# 84: Haldia port subsidiary to Kolkata
mapping[84] = ("india-gk", "")
# 85: Anand Math author
mapping[85] = ("india-gk", "")
# 86: RIICO Agro food park
mapping[86] = ("raj-gk", "")
# 87: Coordinate geometry ratio by x-axis
mapping[87] = ("maths", "")
# 88: Garden path paving cost
mapping[88] = ("maths", "")
# 89: Rectangle perimeter new area
mapping[89] = ("maths", "")
# 90: Mean and median of dataset k
mapping[90] = ("maths", "")
# 91: Sum of numbers given difference and product
mapping[91] = ("maths", "")
# 92: Partnership investment
mapping[92] = ("maths", "")
# 93: Partnership ratio
mapping[93] = ("maths", "")
# 94: Vipul tour expense equation
mapping[94] = ("maths", "")
# 95: Operation Flood (White Revolution)
mapping[95] = ("india-gk", "")
# 96: Agricultural problem of India
mapping[96] = ("india-gk", "")
# 97: Footloose industries statement
mapping[97] = ("india-gk", "")
# 98: King of France during French Revolution
mapping[98] = ("india-gk", "")
# 99: Gautam Buddha first sermon
mapping[99] = ("india-gk", "")
# 100: Anuvrat Movement pioneer (Acharya Tulsi)
mapping[100] = ("raj-gk", "Acharya Tulsi launched the Anuvrat Movement in Rajaldesar, Rajasthan in 1949; a classic Rajasthan history/personality question.")
# 101: Arid soil of Rajasthan
mapping[101] = ("raj-gk", "")
# 102: Rivers North to South on India map
mapping[102] = ("india-gk", "")
# 103: Ilahi Era calendar (Akbar)
mapping[103] = ("india-gk", "")
# 104: Data interpretation table ratio
mapping[104] = ("maths", "Data interpretation table question classified as maths per prompt guidelines.")
# 105: Pie chart book publishing cost
mapping[105] = ("maths", "Data interpretation pie-chart question classified as maths per prompt guidelines.")
# 106: Metal cut with knife
mapping[106] = ("science", "")
# 107: Propanol class
mapping[107] = ("science", "")
# 108: India House London founder
mapping[108] = ("india-gk", "")
# 109: Agro-based industry example
mapping[109] = ("india-gk", "")
# 110: Igneous rock example (Granite)
mapping[110] = ("science", "Geology / petrology rock types categorized under science.")
# 111: Tower height complementary angles
mapping[111] = ("maths", "")
# 112: Cylinder volume surface area
mapping[112] = ("maths", "")
# 113: Melting cube surface area count
mapping[113] = ("maths", "")
# 114: Amrita Devi Vishnoi Khejri trees
mapping[114] = ("raj-gk", "")
# 115: Tejaji birth district
mapping[115] = ("raj-gk", "")
# 116: Kesariya Balam Mand singer
mapping[116] = ("raj-gk", "")
# 117: Not an alkali metal
mapping[117] = ("science", "")
# 118: Blue sky scattering
mapping[118] = ("science", "")
# 119: Human sex determination XX-XY
mapping[119] = ("science", "")
# 120: DNA to protein transcription translation
mapping[120] = ("science", "")
# 121: Primary consumers food chain
mapping[121] = ("science", "")
# 122: DNA fingerprinting forensic science
mapping[122] = ("science", "")
# 123: Blood group antibodies
mapping[123] = ("science", "")
# 124: Current carrying rod in magnetic field
mapping[124] = ("science", "")
# 125: Transgenic organism outcome
mapping[125] = ("science", "")
# 126: Amoebiasis protozoan disease
mapping[126] = ("science", "")
# 127: Four resistors parallel minimum resistance
mapping[127] = ("science", "")
# 128: Gap between two neurons
mapping[128] = ("science", "")
# 129: Carbon compounds statements
mapping[129] = ("science", "")
# 130: Karewa landform in Kashmir Himalayas
mapping[130] = ("india-gk", "")
# 131: Ramgarh Vishdhari sanctuary
mapping[131] = ("raj-gk", "")
# 132: Aizawl capital of Mizoram
mapping[132] = ("india-gk", "")
# 133: Sodium stored in Kerosene
mapping[133] = ("science", "")
# 134: Vitamins matching
mapping[134] = ("science", "")
# 135: Factor of (x+y)^3 - (x^3+y^3)
mapping[135] = ("maths", "")
# 136: Congruent triangles angle CAB
mapping[136] = ("maths", "")
# 137: Similar / Congruent triangles
mapping[137] = ("maths", "")
# 138: Triangle angle bisector inequality
mapping[138] = ("maths", "")
# 139: Political consequence of Industrial Revolution
mapping[139] = ("india-gk", "")
# 140: SAARC secretariat location
mapping[140] = ("india-gk", "")
# 141: NATO full form
mapping[141] = ("india-gk", "")
# 142: Folk dance forms of Rajasthan
mapping[142] = ("raj-gk", "")

print("Mapping generated for indices 0 to 142. Total mapped:", len(mapping))
