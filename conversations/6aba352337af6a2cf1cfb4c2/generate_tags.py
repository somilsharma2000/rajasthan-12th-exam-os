import json

file_path = '/app/conversations/6aba352337af6a2cf1cfb4c2/rajasthan-12th-os/gather/pyq-raw/cet2024-s1-final.json'
with open(file_path, 'r', encoding='utf-8') as f:
    questions = json.load(f)

# Explicit map of n -> subject
# Taxonomy values:
# 'raj-gk', 'india-gk', 'current-affairs', 'maths', 'reasoning', 'hindi', 'english', 'computer', 'science'

tags = {}

# Q1-Q3: Hindi grammar (sandhi, kriya)
tags[1] = 'hindi'
tags[2] = 'hindi'
tags[3] = 'hindi'

# Q4: Reasoning (coding)
tags[4] = 'reasoning'

# Q5: Maths (infinite series)
tags[5] = 'maths'

# Q6-Q7: Reasoning (queue ranking)
tags[6] = 'reasoning'
tags[7] = 'reasoning'

# Q8: India-GK (Vikram Sarabhai Space Centre location)
tags[8] = 'india-gk'

# Q9-Q10: Science (magnetic dipole moment, cornea defect)
tags[9] = 'science'
tags[10] = 'science'

# Q11-Q15: Hindi grammar (sarvanam, sangya, kriya match, antonyms, samas)
tags[11] = 'hindi'
tags[12] = 'hindi'
tags[13] = 'hindi'
tags[14] = 'hindi'
tags[15] = 'hindi'

# Q16-Q17: Science (chemistry - ethanoic acid, catenation)
tags[16] = 'science'
tags[17] = 'science'

# Q18-Q21: Maths (median/stats, simple/compound interest, ratio, trigonometry height/distance)
tags[18] = 'maths'
tags[19] = 'maths'
tags[20] = 'maths'
tags[21] = 'maths'

# Q22-Q23: Computer (microprocessor transistors, excel shortcut)
tags[22] = 'computer'
tags[23] = 'computer'

# Q24-Q26: Raj-GK (Hadoti dialect, folk songs, Gogaji/folk deity)
tags[24] = 'raj-gk'
tags[25] = 'raj-gk'
tags[26] = 'raj-gk'

# Q27-Q29: Hindi (one word, lokokti, official letter term)
tags[27] = 'hindi'
tags[28] = 'hindi'
tags[29] = 'hindi'

# Q30-Q32: Maths (profit/loss, percentage, log)
tags[30] = 'maths'
tags[31] = 'maths'
tags[32] = 'maths'

# Q33-Q35: English (grammar, official letter format, preposition)
tags[33] = 'english'
tags[34] = 'english'
tags[35] = 'english'

# Q36-Q38: Hindi (anekarthi, pratyaya, upsarg)
tags[36] = 'hindi'
tags[37] = 'hindi'
tags[38] = 'hindi'

# Q39-Q42: India-GK (Pangong Tso, State Human Rights Commission function, 73rd Amendment Gram Sabha, Governor removal)
tags[39] = 'india-gk'
tags[40] = 'india-gk'
tags[41] = 'india-gk'
tags[42] = 'india-gk'

# Q44: Reasoning (syllogism)
tags[44] = 'reasoning'

# Q45: Hindi (shabd yugma)
tags[45] = 'hindi'

# Q46-Q47: India-GK (Preamble start, Sarkaria Commission)
tags[46] = 'india-gk'
tags[47] = 'india-gk'

# Q48-Q53: Raj-GK (RPSC chairman, Lal Joshi Phad artist, Govind Guru & Bhils, Jaisalmer ancient name, subtropical mountain forests Mount Abu, biggest region Western desert)
tags[48] = 'raj-gk'
tags[49] = 'raj-gk'
tags[50] = 'raj-gk'
tags[51] = 'raj-gk'
tags[52] = 'raj-gk'
tags[53] = 'raj-gk'

# Q54-Q55: India-GK / Science?
# Q54: Highest number of wildlife sanctuaries (Andaman & Nicobar) -> India-GK
tags[54] = 'india-gk'
# Q55: Himalayan yew (Taxus Wallichiana) - medicinal tree -> Science (Botany/Medicinal plant)
tags[55] = 'science'

# Q56-Q57: Current Affairs (Asian Marathon 2024, 2nd largest producer of mobile phones)
tags[56] = 'current-affairs'
tags[57] = 'current-affairs'

# Q58: Hindi (Valid -> विधिमान्य)
tags[58] = 'hindi'

# Q59-Q63: Raj-GK (Marble dumping yard Kishangarh, Mukhyamantri Laghu Vanijyik Vahan Swarojgar Yojna, Fort Sainya Durg, Civilization Ahad/Gilund, Karpur Chand Kulish)
tags[59] = 'raj-gk'
tags[60] = 'raj-gk'
tags[61] = 'raj-gk'
tags[62] = 'raj-gk'
tags[63] = 'raj-gk'

# Q64-Q65: India-GK (42nd Amendment, Fundamental Rights)
tags[64] = 'india-gk'
tags[65] = 'india-gk'

# Q66: Computer (Ctrl+P)
tags[66] = 'computer'

# Q67: Reasoning (analogy)
tags[67] = 'reasoning'

# Q68: Science (Crops - Wheat/Rabi/Sonara, Rice, Maize) -> Agriculture / Botany / Science
tags[68] = 'science'

# Q69-Q71: Science (Blood groups, Mother's milk IgA, Deficiency diseases)
tags[69] = 'science'
tags[70] = 'science'
tags[71] = 'science'

# Q72: Maths (Square diagonals ratio)
tags[72] = 'maths'

# Q73-Q76: Computer (Hard disk capacity, Spell check Excel, TODAY(), Alignment)
tags[73] = 'computer'
tags[74] = 'computer'
tags[75] = 'computer'
tags[76] = 'computer'

# Q77-Q79: India-GK (Green Revolution, Planning Commission, Quotas/Tariffs)
tags[77] = 'india-gk'
tags[78] = 'india-gk'
tags[79] = 'india-gk'

# Q80-Q83: English (grammar, passive, articles, synonym)
tags[80] = 'english'
tags[81] = 'english'
tags[82] = 'english'
tags[83] = 'english'

# Q84: Computer (IC 3rd gen)
tags[84] = 'computer'

# Q85-Q88: Current Affairs (Dharma Guardian, Santosh Trophy 2023-24, 18th Lok Sabha 7 phases, Neptis Philyra butterfly)
tags[85] = 'current-affairs'
tags[86] = 'current-affairs'
tags[87] = 'current-affairs'
tags[88] = 'current-affairs'

# Q89-Q90: Maths (Geometry angle, Coordinate geometry)
tags[89] = 'maths'
tags[90] = 'maths'

# Q91: India-GK (National parks)
tags[91] = 'india-gk'

# Q92: Computer (Input device for alphanumeric/special chars)
tags[92] = 'computer'

# Q93: India-GK (Biosphere reserves)
tags[93] = 'india-gk'

# Q94-Q98: English (Passage questions Q94-Q97, Antonym SURPLUS Q98)
tags[94] = 'english'
tags[95] = 'english'
tags[96] = 'english'
tags[97] = 'english'
tags[98] = 'english'

# Q99-Q100: Science (Cyclosporin A, Plant economic parts)
tags[99] = 'science'
tags[100] = 'science'

# Q101: Raj-GK (Luni river)
tags[101] = 'raj-gk'

# Q102-Q103: India-GK (Rift valley Narmada, Namcha Barwa peak)
tags[102] = 'india-gk'
tags[103] = 'india-gk'

# Q104-Q106: Raj-GK (Thewa art Pratapgarh, Mahi Bajaj Sagar, Soil in Western desert)
tags[104] = 'raj-gk'
tags[105] = 'raj-gk'
tags[106] = 'raj-gk'

# Q107-Q108: Computer (Fly in PowerPoint, Floppy disk)
tags[107] = 'computer'
tags[108] = 'computer'

# Q109: Current Affairs (World Future Energy Summit 2024 Abu Dhabi)
tags[109] = 'current-affairs'

# Q110-Q111: Science (Plane mirror reflection, Prism dispersion)
tags[110] = 'science'
tags[111] = 'science'

# Q112: Raj-GK (Panchayati raj inauguration Nagaur 1959)
tags[112] = 'raj-gk'

# Q113: India-GK (Welfare state DPSP)
tags[113] = 'india-gk'

# Q114: Maths (Cube surface area & volume)
tags[114] = 'maths'

# Q115-Q116: Reasoning (Directions, Clock angle)
tags[115] = 'reasoning'
tags[116] = 'reasoning'

# Q117-Q119: Science (Genetic code, DNA nitrogenous base, Mendel pea traits)
tags[117] = 'science'
tags[118] = 'science'
tags[119] = 'science'

# Q120-Q124: English (Translation Hindi to English, Reported speech, Tenses, Antonym ERUDITE, Synonym Homage)
tags[120] = 'english'
tags[121] = 'english'
tags[122] = 'english'
tags[123] = 'english'
tags[124] = 'english'

# Q125-Q128: Raj-GK (CM Corona Sahayata Yojna, Bhadla Solar Park, MSME Amendment Act 2023, Rajasthan Panchayati Raj Act)
tags[125] = 'raj-gk'
tags[126] = 'raj-gk'
tags[127] = 'raj-gk'
tags[128] = 'raj-gk'

# Q129: India-GK (Monetary assistance / Subsidy)
tags[129] = 'india-gk'

# Q130-Q132: Science (Roasting, Anodising, Electronic configurations)
tags[130] = 'science'
tags[131] = 'science'
tags[132] = 'science'

# Q133-Q135: English (Prepositions, English word for 'अभिग्रहण', Tombstone epitaph)
tags[133] = 'english'
tags[134] = 'english'
tags[135] = 'english'

# Q136-Q138: Current Affairs (G. D. Birla Award 2024, SCO Startup Forum 2024, Paris Olympics 2024)
tags[136] = 'current-affairs'
tags[137] = 'current-affairs'
tags[138] = 'current-affairs'

# Q139-Q140: Reasoning (Blood relation, Number of triangles)
tags[139] = 'reasoning'
tags[140] = 'reasoning'

# Q141-Q143: Maths (Triangle congruence, Trigonometry, Algebra expression)
tags[141] = 'maths'
tags[142] = 'maths'
tags[143] = 'maths'

# Q144-Q146: Science (Electrochemistry electrolysis time, Precipitate BaSO4, Oxidation/Reduction)
tags[144] = 'science'
tags[145] = 'science'
tags[146] = 'science'

# Q147-Q150: Hindi (Vakyansh ek shabd, Shuddh vartani, Paryayvachi, Ashuddh vakya)
tags[147] = 'hindi'
tags[148] = 'hindi'
tags[149] = 'hindi'
tags[150] = 'hindi'

print("Total questions tagged:", len(tags))

