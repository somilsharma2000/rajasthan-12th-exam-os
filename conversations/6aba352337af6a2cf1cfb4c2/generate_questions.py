import json

questions = []

# Helper to construct and add question
def add_q(qtext, opt_a, opt_b, opt_c, opt_d, correct_opt, exp, subject, topic, diff, est_time):
    questions.append({
        "question_text": qtext,
        "option_a": opt_a,
        "option_b": opt_b,
        "option_c": opt_c,
        "option_d": opt_d,
        "correct_option": correct_opt,
        "explanation": exp,
        "subject": subject,
        "topic": topic,
        "difficulty": diff,
        "estimated_time_seconds": est_time
    })

# --- ANCIENT INDIAN HISTORY (10) ---
# Q1: Lothal -> Correct B
add_q(
    "At which Indus Valley Civilization site was an ancient dockyard discovered by archaeologists?",
    "Kalibangan", "Lothal", "Banawali", "Ropar",
    "B",
    "Lothal, located in the modern state of Gujarat, contains the world's oldest known artificial dockyard. This discovery provides crucial evidence of maritime trade carried out by the Harappan civilization with regions like Mesopotamia.",
    "General Awareness", "Ancient Indian History", "Easy", 25
)

# Q2: Samaveda -> Correct A
add_q(
    "Which of the four Vedas consists predominantly of melodies and chants set to musical tunes?",
    "Samaveda", "Rigveda", "Yajurveda", "Atharvaveda",
    "A",
    "The Samaveda is the Veda of melodies and chants, containing verses set to music that were sung during Vedic rituals. It is widely regarded as one of the earliest foundations of Indian classical music.",
    "General Awareness", "Ancient Indian History", "Easy", 20
)

# Q3: Sarnath -> Correct D
add_q(
    "At which historic location did Gautama Buddha deliver his first sermon, known as the 'Dharmachakrapravartana'?",
    "Bodh Gaya", "Kushinagar", "Lumbini", "Sarnath",
    "D",
    "Gautama Buddha delivered his first sermon to his five former companions at Deer Park in Sarnath, near Varanasi. This event is termed 'Dharmachakrapravartana' or the turning of the wheel of law.",
    "General Awareness", "Ancient Indian History", "Standard", 30
)

# Q4: Chandragupta Maurya -> Correct A
add_q(
    "Which ruler of the Mauryan dynasty abdicated his throne to become a Jain monk and traveled to Chandragiri Hill under the guidance of Acharya Bhadrabahu?",
    "Chandragupta Maurya", "Bindusara", "Ashoka", "Dasharatha Maurya",
    "A",
    "Chandragupta Maurya, founder of the Mauryan Empire, embraced Jainism toward the end of his life. Guided by Acharya Bhadrabahu, he retired to Shravanabelagola in modern Karnataka and performed Santhara.",
    "General Awareness", "Ancient Indian History", "Standard", 35
)

# Q5: Kalidasa -> Correct C
add_q(
    "The celebrated Sanskrit drama 'Abhijnanashakuntalam' was written by which ancient Indian poet and playwright?",
    "Bhasa", "Shudraka", "Kalidasa", "Vishakhadatta",
    "C",
    "Kalidasa, a classical Sanskrit author during the Gupta era, composed the masterpiece 'Abhijnanashakuntalam'. The play narrates the love story of King Dushyanta and Shakuntala.",
    "General Awareness", "Ancient Indian History", "Easy", 25
)

# Q6: Kanishka -> Correct D
add_q(
    "The Fourth Buddhist Council, which led to the division of Buddhism into Hinayana and Mahayana sects, was convened under the patronage of which ruler?",
    "Ashoka", "Ajatashatru", "Kalashoka", "Kanishka",
    "D",
    "The Fourth Buddhist Council was held in Kundalvana, Kashmir, under the patronage of the Kushan Emperor Kanishka. Vasumitra presided over the council with Asvaghosa as his deputy.",
    "General Awareness", "Ancient Indian History", "Standard", 30
)

# Q7: Hiuen Tsang -> Correct C
add_q(
    "Which Chinese traveler visited India during the 7th century CE during the reign of King Harshavardhana?",
    "Faxian (Fa-Hien)", "I-Tsing (Yijing)", "Hiuen Tsang (Xuanzang)", "Megasthenes",
    "C",
    "Hiuen Tsang (Xuanzang) spent over a decade traveling through India during King Harshavardhana's reign to study Buddhist scriptures. He documented his detailed observations in his travelogue 'Si-Yu-Ki'.",
    "General Awareness", "Ancient Indian History", "Easy", 25
)

# Q8: Krishna I -> Correct B
add_q(
    "The magnificent rock-cut Kailashnath Temple (Cave 16) at Ellora was constructed under the patronage of which Rashtrakuta king?",
    "Dantidurga", "Krishna I", "Amoghavarsha I", "Govinda III",
    "B",
    "The rock-cut Kailashnath Temple at Ellora in Maharashtra was built in the 8th century CE by Rashtrakuta King Krishna I. It is famous for being carved out of a single monolithic basalt rock cliff.",
    "General Awareness", "Ancient Indian History", "Standard", 30
)

# Q9: Rajagriha -> Correct D
add_q(
    "Which city served as the initial capital of the ancient kingdom of Magadha before it was shifted to Pataliputra?",
    "Varanasi", "Champa", "Ujjain", "Rajagriha",
    "D",
    "Rajagriha (present-day Rajgir in Bihar), surrounded by five hills, served as the early capital of the Magadha kingdom under King Bimbisara and King Ajatashatru. King Udayin later shifted the capital to Pataliputra.",
    "General Awareness", "Ancient Indian History", "Standard", 30
)

# Q10: Major Rock Edict XIII -> Correct A
add_q(
    "Which Major Rock Edict of Emperor Ashoka provides a detailed description of the Kalinga War and expresses his remorse over the bloodshed?",
    "Major Rock Edict XIII", "Major Rock Edict V", "Major Rock Edict X", "Major Rock Edict I",
    "A",
    "Major Rock Edict XIII records Ashoka's victory in the Kalinga War and the profound suffering it caused. This catastrophic event transformed Ashoka, leading him to renounce war and embrace Dhamma.",
    "General Awareness", "Ancient Indian History", "Standard", 35
)


# --- MEDIEVAL INDIAN HISTORY (10) ---
# Q11: Iltutmish -> Correct C
add_q(
    "Which Delhi Sultanate ruler introduced the silver coin called 'Tanka' and the copper coin called 'Jital' into currency circulation?",
    "Qutb-ud-din Aibak", "Ghiyas-ud-din Balban", "Iltutmish", "Alauddin Khilji",
    "C",
    "Shams-ud-din Iltutmish standardized the coinage system of the Delhi Sultanate by issuing two pure metal coins: the silver Tanka and the copper Jital. He is also credited with establishing the Iqta system in India.",
    "General Awareness", "Medieval Indian History", "Standard", 30
)

# Q12: Alauddin Khilji -> Correct D
add_q(
    "Which sultan of Delhi implemented strict price control policies and market regulations for essential goods in the capital?",
    "Muhammad bin Tughlaq", "Firoz Shah Tughlaq", "Ibrahim Lodi", "Alauddin Khilji",
    "D",
    "Alauddin Khilji introduced comprehensive price controls and set up separate markets monitored by officers called Shahna-i-Mandi. This enabled him to maintain a large standing army at fixed wage costs.",
    "General Awareness", "Medieval Indian History", "Easy", 25
)

# Q13: Sikandar Lodi -> Correct A
add_q(
    "The city of Agra was established in 1504 CE by which ruler of the Lodi dynasty?",
    "Sikandar Lodi", "Bahlul Lodi", "Ibrahim Lodi", "Daulat Khan Lodi",
    "A",
    "Sikandar Lodi founded the city of Agra in 1504 CE to keep better control over strategic central trade routes and Rajasthan. He subsequently shifted his capital from Delhi to Agra in 1506 CE.",
    "General Awareness", "Medieval Indian History", "Easy", 25
)

# Q14: Tuluva Dynasty -> Correct C
add_q(
    "Emperor Krishnadevaraya, one of the greatest monarchs of the Vijayanagara Empire, belonged to which ruling dynasty?",
    "Sangama Dynasty", "Saluva Dynasty", "Tuluva Dynasty", "Aravidu Dynasty",
    "C",
    "Krishnadevaraya (reigned 1509–1529 CE) belonged to the Tuluva dynasty, the third dynasty of the Vijayanagara Empire. His reign is celebrated as a golden age of literature, architecture, and military success.",
    "General Awareness", "Medieval Indian History", "Standard", 30
)

# Q15: Ibrahim Lodi -> Correct B
add_q(
    "In the First Battle of Panipat (1526 CE), Babur defeated which ruler to establish the Mughal Empire in India?",
    "Rana Sanga", "Ibrahim Lodi", "Hemu", "Sher Shah Suri",
    "B",
    "The First Battle of Panipat was fought on April 21, 1526, between Babur and the Lodi ruler Ibrahim Lodi. Babur's effective use of field artillery and the Tulughma tactic resulted in a decisive victory.",
    "General Awareness", "Medieval Indian History", "Easy", 25
)

# Q16: Akbar -> Correct D
add_q(
    "Which Mughal Emperor introduced the 'Dahsala' system of land revenue assessment with the assistance of his finance minister Raja Todar Mal?",
    "Babur", "Humayun", "Shah Jahan", "Akbar",
    "D",
    "Mughal Emperor Akbar introduced the Dahsala land revenue system in 1580 CE through his finance minister Raja Todar Mal. Under this system, revenue was calculated based on average crop yield and prices over the preceding ten years.",
    "General Awareness", "Medieval Indian History", "Standard", 30
)

# Q17: Shah Jahan -> Correct B
add_q(
    "The iconic Peacock Throne (Takht-i-Taus), encrusted with priceless jewels, was commissioned during the reign of which Mughal Emperor?",
    "Jahangir", "Shah Jahan", "Aurangzeb", "Bahadur Shah I",
    "B",
    "Shah Jahan commissioned the magnificent gold and jeweled Peacock Throne for the Diwan-i-Khas in Delhi's Red Fort. Nadir Shah of Persia later looted the throne during his invasion of Delhi in 1739 CE.",
    "General Awareness", "Medieval Indian History", "Easy", 25
)

# Q18: Kabir -> Correct A
add_q(
    "Which prominent Bhakti saint authored the 'Bijak', a celebrated compilation of devotional verses and couplets?",
    "Kabir", "Tulsidas", "Surdas", "Ravidas",
    "A",
    "Kabir, a 15th-century Bhakti saint and poet, composed devotional verses collected principally in the 'Bijak'. His teachings emphasized devotion to one Supreme Reality beyond religious orthodoxies.",
    "General Awareness", "Medieval Indian History", "Standard", 30
)

# Q19: Ashtapradhan -> Correct D
add_q(
    "What was the administrative council of eight ministers created by Chhatrapati Shivaji Maharaj to assist in governance called?",
    "Navaratnas", "Ashtadiggajas", "Panchayat", "Ashtapradhan",
    "D",
    "Chhatrapati Shivaji Maharaj established an administrative council of eight ministers known as the 'Ashtapradhan'. It was headed by the Peshwa (Prime Minister) who oversaw executive administration.",
    "General Awareness", "Medieval Indian History", "Easy", 25
)

# Q20: Sher Shah Suri -> Correct B
add_q(
    "Which ruler rebuilt and substantially expanded the historical highway connecting eastern Bengal to Peshawar, known historically as 'Sarak-i-Azam'?",
    "Akbar", "Sher Shah Suri", "Alauddin Khilji", "Muhammad Ghori",
    "B",
    "Sher Shah Suri, founder of the Sur Empire, reconstructed the ancient highway stretching from Sonargaon in Bengal to Peshawar. It was later renamed the Grand Trunk Road (GT Road) during the British era.",
    "General Awareness", "Medieval Indian History", "Easy", 25
)


# --- INDIAN ECONOMY AND BANKING (10) ---
# Q21: 1949 -> Correct C
add_q(
    "In which year was the Reserve Bank of India (RBI) nationalised, bringing it under complete government ownership?",
    "1935", "1947", "1949", "1951",
    "C",
    "The Reserve Bank of India was nationalised on January 1, 1949, in accordance with the Reserve Bank (Transfer to Public Ownership) Act, 1948. Prior to nationalisation, the central bank had been established in 1935 as a private shareholders' bank.",
    "General Awareness", "Indian Economy and Banking", "Easy", 25
)

# Q22: Harrod-Domar Model -> Correct B
add_q(
    "India's First Five-Year Plan (1951–1956) was formulated primarily based on which growth model?",
    "Mahalanobis Model", "Harrod-Domar Model", "Solow Model", "Feldman Model",
    "B",
    "The First Five-Year Plan was based on the Harrod-Domar economic growth model, emphasizing investments in agriculture, irrigation, and power generation. The second plan later adopted the Mahalanobis heavy-industry model.",
    "General Awareness", "Indian Economy and Banking", "Standard", 30
)

# Q23: Net Factor Income from Abroad -> Correct A
add_q(
    "Gross National Product (GNP) is calculated by adding which component to Gross Domestic Product (GDP)?",
    "Net Factor Income from Abroad", "Net Indirect Taxes", "Depreciation", "Subsidies",
    "A",
    "Gross National Product (GNP) equals Gross Domestic Product (GDP) plus Net Factor Income from Abroad (NFIA). NFIA accounts for income earned by residents from overseas investments minus income earned by foreign residents domestically.",
    "General Awareness", "Indian Economy and Banking", "Standard", 35
)

# Q24: Stagflation -> Correct D
add_q(
    "What term describes an economic condition characterized by stagnant economic growth, high unemployment, and high inflation occurring simultaneously?",
    "Deflation", "Hyperinflation", "Disinflation", "Stagflation",
    "D",
    "Stagflation occurs when high inflation is accompanied by economic stagnation and rising unemployment. It presents a challenging policy dilemma because measures to curb inflation can worsen unemployment.",
    "General Awareness", "Indian Economy and Banking", "Standard", 30
)

# Q25: Repo Rate -> Correct C
add_q(
    "What is the interest rate at which the Reserve Bank of India lends short-term money to commercial banks against government securities?",
    "Reverse Repo Rate", "Bank Rate", "Repo Rate", "Cash Reserve Ratio",
    "C",
    "The Repo Rate (Repurchase Option Rate) is the key policy interest rate at which commercial banks borrow funds short-term from the RBI against collateral. It serves as a major monetary tool to regulate liquidity and inflation.",
    "General Awareness", "Indian Economy and Banking", "Easy", 25
)

# Q26: B. Sivaraman Committee -> Correct D
add_q(
    "NABARD (National Bank for Agriculture and Rural Development) was established in 1982 based on the recommendations of which committee?",
    "Narasimham Committee", "Urjit Patel Committee", "Kelkar Committee", "B. Sivaraman Committee",
    "D",
    "NABARD was set up on July 12, 1982, on the recommendation of the Committee to Review Arrangements For Institutional Credit for Agriculture and Rural Development (CRAFICARD), chaired by B. Sivaraman. It acts as the apex development bank for rural development.",
    "General Awareness", "Indian Economy and Banking", "Standard", 35
)

# Q27: Corporation Tax -> Correct A
add_q(
    "Which of the following is classified as a Direct Tax in the Indian taxation system?",
    "Corporation Tax", "Goods and Services Tax (GST)", "Central Excise Duty", "Customs Duty",
    "A",
    "Corporation Tax is a direct tax levied directly on the net income or profit of companies. In contrast, GST, Excise Duty, and Customs Duty are indirect taxes paid by consumers through goods and services.",
    "General Awareness", "Indian Economy and Banking", "Easy", 25
)

# Q28: M1 -> Correct D
add_q(
    "In monetary terminology, which measure of money supply in India is commonly referred to as 'Narrow Money'?",
    "M3", "M4", "M0", "M1",
    "D",
    "M1 consists of currency with the public, demand deposits with banks, and other deposits with the RBI, making it highly liquid and referred to as 'Narrow Money'. M3 includes time deposits as well and is known as 'Broad Money'.",
    "General Awareness", "Indian Economy and Banking", "Standard", 30
)

# Q29: 1992 -> Correct C
add_q(
    "In which year was statutory status granted to the Securities and Exchange Board of India (SEBI) through an Act of Parliament?",
    "1988", "1995", "1992", "2000",
    "C",
    "Although formed as an executive body in 1988, SEBI received statutory authority on January 30, 1992, through the passage of the SEBI Act, 1992. This empowered SEBI to regulate securities markets in India.",
    "General Awareness", "Indian Economy and Banking", "Standard", 30
)

# Q30: 1969 -> Correct A
add_q(
    "The first major bank nationalisation event in India, in which 14 leading private commercial banks were nationalised, took place in which year?",
    "1969", "1955", "1980", "1991",
    "A",
    "On July 19, 1969, the Government of India nationalised 14 major commercial banks holding over 85 percent of national bank deposits. This move was intended to expand banking access into rural areas.",
    "General Awareness", "Indian Economy and Banking", "Easy", 25
)


# --- COMPUTERS AND IT (10) ---
# Q31: ROM -> Correct B
add_q(
    "Which non-volatile computer memory holds the essential Basic Input/Output System (BIOS) program required to boot a computer?",
    "RAM", "ROM", "SRAM", "DRAM",
    "B",
    "Read-Only Memory (ROM) is permanent, non-volatile memory that retains its data even when power is turned off. It stores the BIOS firmware which initializes hardware components during start-up.",
    "General Awareness", "Computers and IT", "Easy", 20
)

# Q32: Program Counter -> Correct D
add_q(
    "Which internal CPU register contains the memory address of the next sequential instruction to be fetched and executed?",
    "Accumulator", "Memory Buffer Register", "Instruction Register", "Program Counter",
    "D",
    "The Program Counter (PC), also called the Instruction Pointer, automatically increments to store the memory address of the next instruction waiting to be fetched. It keeps execution flowing in proper sequence.",
    "General Awareness", "Computers and IT", "Standard", 30
)

# Q33: 4 bits -> Correct C
add_q(
    "In digital data representation, a 'nibble' consists of how many individual bits?",
    "2 bits", "8 bits", "4 bits", "16 bits",
    "C",
    "A nibble is an aggregation of 4 bits, representing half of an 8-bit byte. In hexadecimal notation, a single hex digit corresponds precisely to one nibble.",
    "General Awareness", "Computers and IT", "Easy", 20
)

# Q34: Star Topology -> Correct A
add_q(
    "In which network topology is every peripheral node connected directly to a central hub or switch?",
    "Star Topology", "Bus Topology", "Ring Topology", "Mesh Topology",
    "A",
    "In a Star Topology, all device nodes are individually linked via point-to-point cables to a central networking hub or switch. If one cable fails, only that device's connection is interrupted.",
    "General Awareness", "Computers and IT", "Easy", 25
)

# Q35: Network Layer -> Correct B
add_q(
    "Which layer of the 7-layer OSI reference model handles packet routing, forwarding, and logical IP addressing across networks?",
    "Data Link Layer", "Network Layer", "Transport Layer", "Session Layer",
    "B",
    "The Network Layer (Layer 3) is responsible for routing data packets from source to destination using logical network addresses (such as IP addresses). Routers function primarily at this layer.",
    "General Awareness", "Computers and IT", "Standard", 30
)

# Q36: Compiler -> Correct C
add_q(
    "What is the primary function of a software program known as a 'compiler'?",
    "Executes line-by-line interpretation of source code",
    "Converts assembly language directly into machine instructions",
    "Translates high-level source code into machine code as a complete unit",
    "Manages hardware memory allocation during runtime",
    "C",
    "A compiler converts an entire high-level program (like C or C++) into executable machine code prior to execution. In contrast, an interpreter processes and executes source code line by line.",
    "General Awareness", "Computers and IT", "Easy", 25
)

# Q37: HTTPS -> Correct A
add_q(
    "In web networking protocols, what does the security acronym 'HTTPS' stand for?",
    "Hypertext Transfer Protocol Secure", "High Transfer Text Protocol Service",
    "Hypertext Translation System Secure", "Hyperlink Transfer Protocol Server",
    "A",
    "HTTPS stands for Hypertext Transfer Protocol Secure, an extension of HTTP. It encrypts communication data using Transport Layer Security (TLS/SSL) to protect sensitive user traffic.",
    "General Awareness", "Computers and IT", "Easy", 20
)

# Q38: Ransomware -> Correct D
add_q(
    "A class of malicious software that encrypts user files and demands financial payment for decryption keys is known as?",
    "Spyware", "Adware", "Trojans", "Ransomware",
    "D",
    "Ransomware is malware designed to lock or encrypt a target's system files until a specified ransom is paid to the attacker. Common historically known instances include WannaCry and Locky.",
    "General Awareness", "Computers and IT", "Easy", 20
)

# Q39: Cache Memory -> Correct B
add_q(
    "Which ultra-fast volatile memory is located directly between the CPU cores and main RAM to store frequently accessed data?",
    "Flash Memory", "Cache Memory", "Virtual Memory", "EEPROM",
    "B",
    "Cache memory is a small, extremely high-speed SRAM unit integrated into or near the CPU. It reduces data retrieval latencies by caching instructions and data likely to be needed next.",
    "General Awareness", "Computers and IT", "Easy", 20
)

# Q40: SQL -> Correct A
add_q(
    "In relational database management systems, what does the standard abbreviation 'SQL' stand for?",
    "Structured Query Language", "Sequential Query Logic",
    "Systematic Access Language", "Standard Quantitative Logic",
    "A",
    "SQL stands for Structured Query Language, a standard domain-specific programming language used to manage, query, and manipulate relational databases. It was developed by IBM in the 1970s and remains fundamental to modern data management.",
    "General Awareness", "Computers and IT", "Easy", 20
)


# --- ENVIRONMENT AND ECOLOGY (10) ---
# Q41: 10% -> Correct C
add_q(
    "According to Lindeman's 10 Percent Law of ecological energy transfer, what percentage of energy is transferred to the next higher trophic level?",
    "20%", "50%", "10%", "90%",
    "C",
    "Lindeman's law states that during energy transfer from an organic food chain level to the next higher level, only about 10% of the energy is stored as biomass. The remaining 90% is lost primarily through metabolic heat.",
    "General Awareness", "Environment and Ecology", "Easy", 25
)

# Q42: Norman Myers -> Correct B
add_q(
    "Who introduced the concept of 'Biodiversity Hotspots' in 1988 to identify regions featuring high endemic species richness under threat?",
    "E. O. Wilson", "Norman Myers", "Arthur Tansley", "Ernst Haeckel",
    "B",
    "Ecologist Norman Myers introduced the concept of Biodiversity Hotspots in 1988. To qualify, a region must contain at least 1,500 endemic vascular plant species and have lost at least 70% of its primary vegetation.",
    "General Awareness", "Environment and Ecology", "Standard", 30
)

# Q43: Ozone Layer -> Correct D
add_q(
    "The landmark Montreal Protocol (1987) was signed internationally to phase out the production of substances that deplete which protective atmospheric layer?",
    "Troposphere", "Ionosphere", "Exosphere", "Stratospheric Ozone Layer",
    "D",
    "The Montreal Protocol on Substances that Deplete the Ozone Layer was adopted in 1987. It phased out ozone-depleting chemicals like chlorofluorocarbons (CFCs) to protect the stratospheric ozone layer.",
    "General Awareness", "Environment and Ecology", "Easy", 25
)

# Q44: Rajasthan -> Correct C
add_q(
    "Keoladeo National Park, a world-renowned bird sanctuary and designated Ramsar wetland site, is located in which Indian state?",
    "Gujarat", "Madhya Pradesh", "Rajasthan", "Haryana",
    "C",
    "Keoladeo National Park (formerly Bharatpur Bird Sanctuary) is situated in Bharatpur, Rajasthan. It hosts thousands of migratory birds, including rare species like the Siberian crane during winter.",
    "General Awareness", "Environment and Ecology", "Easy", 25
)

# Q45: Nilgiri -> Correct A
add_q(
    "Which was the first designated Biosphere Reserve established in India in the year 1986?",
    "Nilgiri Biosphere Reserve", "Nanda Devi Biosphere Reserve",
    "Sundarbans Biosphere Reserve", "Gulf of Mannar Biosphere Reserve",
    "A",
    "The Nilgiri Biosphere Reserve in the Western Ghats (spanning Tamil Nadu, Kerala, and Karnataka) was established in 1986 as India's first biosphere reserve under UNESCO's Man and the Biosphere programme. It encompasses major national parks including Bandipur, Nagarhole, and Silent Valley.",
    "General Awareness", "Environment and Ecology", "Standard", 30
)

# Q46: Eutrophication -> Correct B
add_q(
    "The process of excessive nutrient enrichment in an aquatic ecosystem causing dense growth of plant life and algal bloom is termed?",
    "Biomagnification", "Eutrophication", "Bioaccumulation", "Salinization",
    "B",
    "Eutrophication occurs when water bodies receive excess nutrients like nitrates and phosphates, causing rapid algal growth (algal blooms). As the algae die and decompose, dissolved oxygen is depleted, harming aquatic life.",
    "General Awareness", "Environment and Ecology", "Standard", 30
)

# Q47: Troposphere -> Correct D
add_q(
    "In which lowest layer of Earth's atmosphere do almost all weather phenomena, such as cloud formation, rain, and storms, occur?",
    "Stratosphere", "Mesosphere", "Thermosphere", "Troposphere",
    "D",
    "The Troposphere is the lowest atmospheric layer extending up to roughly 8 to 18 km from Earth's surface. It contains around 75% of the atmosphere's mass and virtually all water vapor, harboring all weather events.",
    "General Awareness", "Environment and Ecology", "Easy", 20
)

# Q48: 1986 -> Correct C
add_q(
    "In which year was the comprehensive Environment Protection Act passed by the Parliament of India under Article 253 of the Constitution?",
    "1972", "1981", "1986", "1992",
    "C",
    "The Environment Protection Act was enacted in 1986 following the Bhopal Gas Tragedy. It serves as umbrella legislation empowering the Central Government to coordinate actions for protecting and improving environmental quality.",
    "General Awareness", "Environment and Ecology", "Standard", 30
)

# Q49: 1973 -> Correct A
add_q(
    "The landmark conservation initiative 'Project Tiger' was launched by the Government of India in which year from Corbett National Park?",
    "1973", "1971", "1980", "1985",
    "A",
    "Project Tiger was launched on April 1, 1973, by the Indira Gandhi government from Jim Corbett National Park, Uttarakhand. It aimed to stem the rapid decline of wild Bengal tigers by creating dedicated tiger reserves.",
    "General Awareness", "Environment and Ecology", "Easy", 25
)

# Q50: SO2 and NOx -> Correct B
add_q(
    "Acid rain is primarily caused by atmospheric chemical reactions involving emissions of which two acidic gases?",
    "Carbon Monoxide and Methane", "Sulfur Dioxide and Nitrogen Oxides",
    "Chlorofluorocarbons and Ozone", "Carbon Dioxide and Ammonia",
    "B",
    "Acid rain forms when sulfur dioxide ($SO_2$) and nitrogen oxides ($NO_x$) react with water, oxygen, and atmospheric chemicals to form sulfuric and nitric acids. These fall to the ground mixed with rain, snow, or fog.",
    "General Awareness", "Environment and Ecology", "Easy", 25
)

# Save to authored-ga-b.json
with open('authored-ga-b.json', 'w', encoding='utf-8') as f:
    json.dump(questions, f, indent=2, ensure_ascii=False)

print(f"Successfully wrote {len(questions)} questions to authored-ga-b.json")
