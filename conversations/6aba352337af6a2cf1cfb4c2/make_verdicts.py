import json

path = '/app/conversations/6aba352337af6a2cf1cfb4c2/rajasthan-12th-os/gather/pyq-raw/cet2024-s1-final.json'
with open(path) as f:
    data = json.load(f)

hindi = {1, 2, 3, 11, 12, 13, 14, 15, 27, 28, 29, 36, 37, 38, 45, 58, 147, 148, 149, 150}
english = {33, 34, 35, 80, 81, 82, 83, 94, 95, 96, 97, 98, 120, 121, 122, 123, 124, 133, 134, 135}
maths = {5, 18, 19, 20, 21, 30, 32, 72, 89, 90, 114, 116, 141, 142, 143, 144}
reasoning = {4, 6, 7, 44, 67, 115, 139, 140}

skip_set = hindi | english | maths | reasoning

# Build dictionary of specific verdicts
# Standard CONFIRMED notes based on topic/fact

verdicts = []

notes_dict = {
    8: "Vikram Sarabhai Space Centre is located in Thiruvananthapuram, Kerala.",
    9: "Magnetic dipole moment M = N * I * A = 500 * 1.5 * 0.06 m^2 = 45 A m^2.",
    10: "Astigmatism is the vision defect caused by non-spherical curvature of the cornea.",
    16: "Ethanoic acid reacts with carbonates to give salt, carbon dioxide and water.",
    17: "Catenation is the property of carbon atoms to form long chains.",
    22: "Intel 4004 (first microprocessor) contained 2,300 transistors.",
    23: "Ctrl + F6 / Ctrl + Tab switches to the next workbook window in MS Excel.",
    24: "Hadoti is spoken in Kota, Bundi, Baran, and Jhalawar districts of Rajasthan.",
    25: "Bichchiyo, Lalar, Nokhila, and Shikhar/Machhar are popular folk songs of Rajasthan.",
    26: "Gogaji is revered as a snake deity and warrior with a spear.",
    31: "Verified calculation: 2000 total, 52% grads = 1040; 60% male = 1200, 50% male grads = 600; female grads = 1040 - 600 = 440 (Option C / index 2).",
    39: "Pangong Tso lake is in Ladakh (Kashmir/Ladakh/Northwestern Himalayas).",
    40: "Discouraging human rights NGOs is contrary to SHRC functions under Protection of Human Rights Act.",
    41: "73rd Constitutional Amendment Act 1992 granted constitutional status to Gram Sabha.",
    42: "The Governor of a State holds office during the pleasure of the President (Article 156).",
    46: "The Preamble begins with 'We, the people of India...'.",
    47: "Sarkaria Commission was set up in 1983 to examine Centre-State relations.",
    48: "Chairman of RPSC is appointed by the Governor of Rajasthan (Article 316).",
    49: "Shri Lal Joshi was a renowned Phad painting artist from Bhilwara.",
    50: "Samp Sabha meetings were annual (on Ashwin Purnima at Mangarh), not monthly.",
    51: "Mand (Dugal) was the ancient name of Jaisalmer region.",
    52: "Subtropical mountain forests exist in Western Ghats, Nilgiris, Himalayas, etc., not only Rajasthan and UP.",
    53: "Western Desert Plain (Thar) covers ~61.11% area of Rajasthan.",
    54: "Andaman and Nicobar Islands has 96 wildlife sanctuaries, highest among Indian states/UTs.",
    55: "Taxus wallichiana (Himalayan Yew) is a medicinal tree yielding taxol.",
    56: "Man Singh won gold at Asian Marathon Championship 2024 in Hong Kong.",
    57: "India is the 2nd largest producer of mobile phones globally after China.",
    59: "Kishangarh (Ajmer) is home to Rajasthan's famous marble dumping yard.",
    60: "Mukhyamantri Laghu Vanijyik Vahan Swarojgar Yojna was notified on 11 October 2022.",
    61: "Fort housing skilled soldiers and army strategy units is termed Sainya Durg.",
    62: "At Ahad civilization, dead bodies were buried with ornaments and jewellery.",
    63: "Karpur Chand Kulish founded Rajasthan Patrika newspaper in 1956.",
    64: "42nd Amendment (1976) added Socialist, Secular, and Integrity to the Preamble.",
    65: "Non-payment of minimum wages constitutes forced labor/begar violating Article 23.",
    66: "Ctrl + P is the standard print shortcut in MS Office.",
    68: "Sonara 64 is a well-known high-yielding Rabi wheat variety.",
    69: "Karl Landsteiner discovered and classified ABO blood groups in 1900.",
    70: "IgA is the predominant antibody class present in mother's milk / colostrum.",
    71: "Deficiency match: Pellagra-dry scales (III), Beri-Beri-muscle weakness (II), Scurvy-bleeding gums (IV), Riboflavinosis-memory loss (I).",
    73: "Hard disk offers maximum storage capacity (terabytes) among listed optical/floppy drives.",
    74: "F7 key triggers spelling and grammar check in MS Excel.",
    75: "TODAY() returns current system date in spreadsheet tools.",
    76: "Text alignment is a paragraph formatting property, not character formatting.",
    77: "Green Revolution made India self-sufficient in food grain production.",
    78: "The Prime Minister served as ex-officio Chairman of Planning Commission.",
    79: "Both import tariffs and import quotas were used for domestic industry protection.",
    84: "Integrated Circuits (ICs) characterize Third Generation computers.",
    85: "Dharma Guardian 2024 (5th edition) was held at Mahajan Field Firing Range, Rajasthan.",
    86: "Services football team won the 77th Santosh Trophy 2023-24.",
    87: "18th Lok Sabha general elections were conducted in 7 phases.",
    88: "Neptis philyra (Long-banded Sailor butterfly) was discovered in Tale Valley, Arunachal Pradesh.",
    91: "Satpura National Park is located in Madhya Pradesh, not Tamil Nadu.",
    92: "Question text 'input device' is mismatched with seed real value formula options in raw JSON (option 1 is correct formula for Seed Real Value).",
    93: "Kanha Biosphere Reserve is located in Madhya Pradesh only, not Uttar Pradesh.",
    99: "Cyclosporin A is an immunosuppressive drug obtained from fungus Trichoderma polysporum.",
    100: "Centella asiatica (Gotu Kola) economically uses leaves/whole plant, not bark.",
    101: "Luni river flows towards Rann of Kutch / Arabian Sea drainage system.",
    102: "Narmada river flows through a rift valley between Vindhya and Satpura ranges.",
    103: "Namcha Barwa peak is situated in the Arunachal / Eastern Himalayas.",
    104: "Thewa Art (gold glass filigree) originated in Pratapgarh, Rajasthan.",
    105: "Mahi Bajaj Sagar Project is a joint venture between Rajasthan (45%) and Gujarat (55%).",
    106: "Both statements false: Alluvial soil is in Eastern Rajasthan, and contains adequate potash but lacks nitrogen.",
    107: "Fly In is an entrance animation effect in MS PowerPoint, not page design.",
    108: "Floppy disks can be read regardless of whether the write protect notch is open or closed.",
    109: "World Future Energy Summit 2024 was hosted in Abu Dhabi, UAE.",
    110: "For normal incidence on plane mirror, both angle of incidence and reflection are 0°.",
    111: "Recombination using inverted second prism yields a beam of white light.",
    112: "Jawaharlal Nehru inaugurated 3-tier Panchayati Raj at Nagaur on 2 Oct 1959.",
    113: "Concept of Welfare State is enshrined in Directive Principles of State Policy (Part IV).",
    117: "AUG acts as initiator codon AND codes for amino acid Methionine.",
    118: "Uracil is present in RNA instead of Thymine, absent from DNA.",
    119: "Mendel studied pod colour as Green/Yellow; white is not a pod colour trait.",
    125: "Chief Minister Corona Sahayata Yojana was launched in June 2021 (25 June 2021).",
    126: "Bhadla Solar Park is located in Jodhpur district, Rajasthan.",
    127: "Rajasthan MSME Amendment Act 2023 extended exemption period from 3 years to 5 years.",
    128: "Rajasthan Panchayati Raj Act 1994 came into force on 23 April 1994.",
    129: "Financial assistance provided by government to producers is called subsidy.",
    130: "Heating sulphide ores strongly in excess air is called roasting.",
    131: "Anodising forms a protective thick oxide layer on aluminum metal surface.",
    132: "Config A: Noble gas (2,8); B: Non-metal Cl (2,8,7); C: Metal Mg (2,8,2). B is non-metal and C is metal.",
    136: "Prof. Aditi Sen De became the first female scientist awarded G.D. Birla Award (2023).",
    137: "4th SCO Startup Forum was held on 19 March 2024 in New Delhi.",
    138: "Paris 2024 standings among these 4 countries: USA (1st/IV), China (2nd/III), Netherlands (3rd/I), Britain (4th/II) -> correct match a-III, b-II, c-I, d-IV. Marked option 3 (a-I, b-II, c-III, d-IV) incorrectly maps China as 3rd and Netherlands as 2nd.",
    145: "BaSO4 is the insoluble white precipitate formed in double displacement reaction.",
    146: "Oxidation-loss of e- (IV), Reduction-gain of e- (I), Reducing agent-loses e- (III), Oxidising agent-accepts e- (II)."
}

for item in data:
    n = item['n']
    if n in skip_set:
        continue
    
    if n == 107:
        v = {
            "n": n,
            "verdict": "WRONG",
            "correct_idx": 2,
            "note": notes_dict[n]
        }
    elif n == 138:
        v = {
            "n": n,
            "verdict": "WRONG",
            "correct_idx": None,
            "note": notes_dict[n]
        }
    elif n == 92:
        v = {
            "n": n,
            "verdict": "UNCERTAIN",
            "correct_idx": None,
            "note": notes_dict[n]
        }
    else:
        v = {
            "n": n,
            "verdict": "CONFIRMED",
            "correct_idx": None,
            "note": notes_dict[n]
        }
    
    verdicts.append(v)

out_file = '/app/conversations/6aba352337af6a2cf1cfb4c2/rajasthan-12th-os/gather/pyq-raw/cet-gk-verdicts.json'
with open(out_file, 'w', encoding='utf-8') as f:
    json.dump(verdicts, f, indent=2, ensure_ascii=False)

print("Saved verdicts. Count:", len(verdicts))

