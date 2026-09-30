import json

with open('/app/conversations/6aba352337af6a2cf1cfb4c2/rajasthan-12th-os/gather/pyq-raw/steno-2025-verify-input.json') as f:
    data = json.load(f)

my_range = [r for r in data if 1 <= r['n'] <= 64]

# Verification dictionary mapping n -> (verdict, final_ans, note)
verifications = {
    1: ("AGREE", 2, "Guhila, Gehlot, Parmar, and Sinsinwar are dynasties of Rajasthan, whereas Harihar was of Vijayanagara."),
    2: ("AGREE", 0, "Typhoid Mary was the nickname of Mary Mallon, an asymptomatic carrier of Salmonella Typhi."),
    3: ("AGREE", 3, "Padma Singh, Kel Singh, Shilpi Keylan, and Shilpi Karma were architects during Raval Samar Singh's reign."),
    4: ("AGREE", 3, "Grass (producer) -> Goat (primary consumer) -> Human (secondary consumer) forms a valid food chain."),
    5: ("AGREE", 0, "Khejri tree (Prosopis cineraria) is known as the Kalpvriksha of the Thar desert."),
    6: ("AGREE", 0, "Tin is less reactive than zinc, so food cans are coated with tin to prevent chemical reaction with food."),
    7: ("AGREE", 3, "The frequency of domestic AC electric power supply in India is 50 Hz."),
    8: ("AGREE", 2, "BRICS countries (Brazil, Russia, India, China, South Africa) are founding members of NDB."),
    9: ("CORRECT", 1, "Correct colloid match is Aerosol-Mist(iii), Emulsion-Face Cream(iv), Foam-Shaving Cream(ii), Gel-Butter(i), which is option B."),
    10: ("AGREE", 2, "Salmonella Typhi enters the human small intestine through contaminated food and water."),
    11: ("CORRECT", 1, "Round face with broad heels is not a clinical feature of Turner syndrome; webbed neck, absence of ovaries, and swollen hands/feet are typical."),
    12: ("AGREE", 0, "Mahatma Gandhi English Medium Schools are government schools established by the Rajasthan Government."),
    13: ("AGREE", 0, "All listed microorganisms (Rhizobium, Azospirillum, Azotobacter, Blue-Green Algae, Mycorrhiza, Acetobacter) are biofertilizers."),
    14: ("AGREE", 0, "Iodine is a non-metal that possesses a lustrous appearance."),
    15: ("CORRECT", 3, "A Freemartin is a sterile female calf born twin to a male calf (male and female twin pair)."),
    16: ("AGREE", 3, "Slaked lime Ca(OH)2 reacts with chlorine gas to form bleaching powder (CaOCl2)."),
    17: ("AGREE", 2, "Bajra, Moth, and Til are major Kharif crops cultivated in the arid western plain zone of Rajasthan."),
    18: ("CORRECT", 1, "Indira Point, the southernmost point of India, is located in the Nicobar district (Great Nicobar Island)."),
    19: ("AGREE", 2, "Physical changes involve no new substance formation, state/color change, and are reversible (a, c, d true)."),
    20: ("AGREE", 2, "Kalibangan is a major archaeological site of the Indus Valley Civilization."),
    21: ("AGREE", 3, "Ghurla dance is performed exclusively by women in Marwar region during the Ghurla festival."),
    23: ("AGREE", 3, "Pandit Hiralal Shastri became the first Chief Minister of Rajasthan upon the integration of Matsya Sangh into Greater Rajasthan."),
    24: ("AGREE", 3, "Concave mirrors are used as reflectors in vehicle headlights to project parallel light beams."),
    25: ("AGREE", 0, "Coal and sea water are mixtures, whereas iron is an element and hydrochloric acid is a compound/pure substance."),
    26: ("CORRECT", 3, "Under States' Startup Ranking 2022 (DPIIT), Rajasthan was recognized as a Top Performer in Category A."),
    27: ("AGREE", 0, "1 kilowatt-hour (1 kWh) = 3.6 × 10^6 Joules."),
    28: ("AGREE", 1, "Murrah is an indigenous milch breed of buffalo, whereas Jamunapari, Jakhrana, and Beetal are goat breeds."),
    31: ("AGREE", 1, "China and India are the world's top two producers of silk."),
    32: ("AGREE", 0, "The Barad (Bundi) Peasant Movement started in April 1922 led by Pt. Nayanuram Sharma."),
    33: ("AGREE", 3, "Equivalent resistance of n identical resistors r connected in parallel is Req = r/n."),
    34: ("AGREE", 3, "By Joule's law H = I^2 R t, doubling current quadruples (4 times) heat generated."),
    35: ("AGREE", 1, "Bauxite deposits are formed by rock decomposition, leaving a residual mass of weathered material."),
    36: ("AGREE", 1, "A concave lens forms a virtual image, which cannot be captured on a screen regardless of screen distance."),
    37: ("AGREE", 2, "Iron water pipes are galvanized (coated with zinc) to prevent rusting."),
    39: ("AGREE", 0, "Acids turn blue litmus red, so the pH must be acidic (pH < 7), which is 5."),
    40: ("AGREE", 2, "Nanakram was a painter of Kishangarh School, not Alwar School (Baldev, Daluram, Jamnadas belong to Alwar)."),
    42: ("AGREE", 1, "PEHM 1 is a hybrid variety of maize (corn), not bajra (pearl millet); HHB 67, RHB 121, RHB 127 are bajra hybrids."),
    43: ("AGREE", 3, "Madhavendra Bhawan in Nahargarh Fort features 9 identical suites built for nine queens."),
    44: ("AGREE", 0, "Nuclear energy is derived from nuclear reactions of radioactive elements, not from biomass."),
    45: ("AGREE", 1, "Sugarcane is not a major crop of Rajasthan due to dry climate requirements; Bajra, Maize, and Groundnut are major crops."),
    47: ("AGREE", 0, "Punjabi is spoken by the highest percentage of population in Rajasthan among the options listed (Census 2011)."),
    48: ("AGREE", 1, "The sugar industry is seasonal as sugarcane harvesting and crushing take place during specific months."),
    49: ("AGREE", 3, "Phytoplankton stage is the pioneer (first) stage in hydrarch succession (hydrosere)."),
    50: ("AGREE", 3, "The human brain contains a system of four interconnected ventricles."),
    51: ("AGREE", 3, "PagarBook is an employee payroll and attendance management app, not a millet startup."),
    52: ("AGREE", 1, "Milk is a colloidal solution (emulsion) and a heterogeneous mixture."),
    53: ("AGREE", 0, "Sonority is the property of metals that produce a ringing sound when struck, used in bells and musical instruments."),
    54: ("AGREE", 0, "Indira Gandhi Canal is the longest man-made canal in India (~650 km)."),
    55: ("AGREE", 2, "The 84-Pillared Cenotaph in Bundi was constructed by Rao Raja Anirudh Singh in 1683."),
    56: ("AGREE", 1, "Displacement reactions occur when a more reactive metal displaces a less reactive metal; Pb displaces Cu (b) and Mg displaces Zn (d)."),
    58: ("AGREE", 1, "The Chota Nagpur Plateau is the most mineral-rich plateau in India."),
    59: ("AGREE", 2, "As of July 2024, the IMF Special Drawing Rights (SDR) department had 190 member countries."),
    60: ("AGREE", 0, "Gulabi Gangaur is celebrated on Chaitra Shukla Panchami in Nathdwara."),
    61: ("AGREE", 3, "Karan Swiss was developed at NDRI Karnal by crossing Brown Swiss bulls with Sahiwal or Red Sindhi cows."),
    62: ("AGREE", 2, "The Bijolia Peasant Movement (started in 1897) was the first peasant movement in Rajasthan."),
    63: ("AGREE", 2, "Lemna (duckweed) is a floating aquatic macrophyte (plant), not a zooplankton."),
    64: ("CORRECT", 0, "Mount Abu has sub-tropical evergreen forests (uposhna katibandhiya), whereas Bikaner, Pali, Jodhpur have tropical thorn forests.")
}

print(f"Total verifications defined: {len(verifications)}")
missing = [r['n'] for r in my_range if r['n'] not in verifications]
print(f"Missing question verifications: {missing}")

