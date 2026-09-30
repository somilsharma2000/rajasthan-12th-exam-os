import urllib.request
import json
import re
from bs4 import BeautifulSoup
import html

# Expanded candidate URLs list
adda_urls = [
    "https://www.adda247.com/question-answer/where-is-the-headquarters-of-international-labor-organization-ilo-located/q.v1.05e5d517-2388-453d-8bae-898b6cd47ee9-en",
    "https://www.adda247.com/question-answer/select-the-number-from-among-the-given-options-that-can-replace-the-question-mark-in-the-following-series-139-136-131-124-115-91/q.v1.40b81bfb-70d2-449b-9685-c9f5d5bf18dc-en",
    "https://www.adda247.com/question-answer/which-of-the-following-options-should-come-in-place-of-the-question-mark-in-the-given-series-to-make-it-logically-complete-681-607-533-459-38/q.v1.288bd341-2e25-4883-ab46-36e3a9404d19-en",
    "https://www.adda247.com/question-answer/select-the-option-that-is-related-to-the-third-term-in-the-same-way-as-the-second-term-is-related-to-the-first-term-ten-decade-thousand/q.v1.abdfeddf-bc1e-4649-bc50-aad57f523705-en",
    "https://www.adda247.com/question-answer/the-three-numbers-given-below-are-alike-in-some-manner-identify-the-number-from-among-the-given-options-that-belongs-to-this-group-94-61-83/q.v1.ad74c78a-a1d0-4402-a970-b6058725e523-en",
    "https://www.adda247.com/question-answer/a-sum-becomes-rs-26-400-after-2-years-at-simple-interest-of-5-per-annum-find-the-sum/q.v1.13ad0d75-5631-42c4-80fb-b59bd6ac2883-en",
    "https://www.adda247.com/question-answer/the-marks-scored-by-10-students-are-given-below-13-20-15-13-19-12-12-11-13-10-the-mode-of-the-given-data-is/q.v1.20c39c03-8fee-4956-85f7-6c556b735d29-en",
    "https://www.adda247.com/question-answer/carefully-study-the-given-sequences-and-answer-the-questions-below-12i-6si-df5bb7n4x3y-what-is-the-sum-of-the-numbers-written-in-the-given-seri/q.v1.48cc1f80-52bd-42f6-b4ed-c67de1a073cc-en",
    "https://www.adda247.com/question-answer/decimal-part-of-any-number-is-always/q.v1.60317ab7-9361-4ab3-89f9-57ed111eec49-en",
    "https://www.adda247.com/question-answer/the-sum-of-two-numbers-is-27-five-times-one-number-is-equal-to-4-times-the-other-the-smaller-of-the-two-numbers-is/q.v1.a2814c11-9f80-4b60-8c6f-a0e523eca708-en",
    "https://www.adda247.com/question-answer/a-b-c-d-e-and-f-live-on-six-different-oors-of-the-same-building-the-lowermost-oor-in-the-building-is-numbered-1-the-floor-above-it-number-2-a/q.v1.73b15afc-7795-496a-863a-2abecd9af8d4-en",
    "https://www.adda247.com/question-answer/a-basket-contains-42-fruits-which-are-either-apples-or-oranges-if-there-are-6-more-apples-than-oranges-how-many-oranges-are-there/q.v1.d3e1c330-3458-4e47-963c-1930a9468ffc-en",
    "https://www.adda247.com/question-answer/if-2-is-added-to-each-even-digit-and-2-is-added-to-each-odd-digit-in-the-number-6345127-what-will-be-the-sum-of-the-last-two-and-first-two-digits-in/q.v1.40503820-e846-46af-97a2-8d9cd843bd9f-en",
    "https://www.adda247.com/question-answer/select-the-alphanumeric-cluster-from-among-the-given-options-that-can-replace-the-question-mark-in-the-following-series-d4c3b2a1-h8g7f6e5-l12/q.v1.4731b412-36ba-4845-8ae0-9ce42a64a665-en",
    "https://www.adda247.com/question-answer/find-the-missing-number-in-the-following-series-11-30-22-41-33-44-63/q.v1.46217194-079b-4db4-abd7-2fea94ea6662-en",
    "https://www.adda247.com/question-answer/select-the-letter-from-among-the-given-options-that-can-replace-the-question-mark-in-the-following-series-b-e-h-k-q/q.v1.79cecdec-414d-4b97-8d5b-bf553808b121-en",
    "https://www.adda247.com/question-answer/which-of-the-following-letter-number-clusters-will-replace-the-question-mark-in-the-given-series-to-make-it-logically-complete-hmi-3-jok-6-lqm/q.v1.98886ebd-d457-4439-8b53-0f6aee08f878-en",
    "https://www.adda247.com/question-answer/250-candidates-appeared-for-an-examination-out-of-which-225-passed-the-percentage-of-the-candidates-who-passed-is/q.v1.34f67d03-7aaf-4c9e-929a-674473989af4-en",
    "https://www.adda247.com/question-answer/four-abbreviations-have-been-given-out-of-which-three-are-alike-in-some-manner-and-one-is-different-select-the-odd-one/q.v1.afa81d00-b628-4e04-89ff-c6e62911fafd-en",
    "https://www.adda247.com/question-answer/select-the-option-that-is-different-from-the-rest/q.v1.7e3ad967-088a-42a8-bf81-63d37fa24fe6-en",
    "https://www.adda247.com/question-answer/which-of-the-following-is-are-correct-with-respect-to-the-world-trade-organization-wto-1-wto-agreements-cover-trade-in-goods-as-well-as-services-t/q.v1.05b43b02-22f4-4c1b-8512-04cb3f13c2c6-en",
    "https://www.adda247.com/question-answer/the-principal-judicial-organ-of-the-united-nations-is-situated-in/q.v1.7759554e-0ff4-4681-a17a-ee5643d52ff1-en",
    "https://www.adda247.com/question-answer/which-international-organisation-supports-globalisation-and-free-trade/q.v1.0aa7a6de-98bb-4485-87ff-bc80876e126e-en",
    "https://www.adda247.com/question-answer/which-of-these-is-not-the-member-of-un-security-council-as-of-october-2020/q.v1.579824a0-edf2-4d81-aaba-484e71e1343a-en",
    "https://www.adda247.com/question-answer/which-physician-came-to-india-and-served-in-the-bengal-medical-service-from-1794-to-1815-and-also-undertook-pioneering-survey-explorations-in-several/q.v1.baf55ffe-bf56-45d2-87f9-bdbed4a5a1e3-en",
    "https://www.adda247.com/question-answer/the-sexually-transmitted-disease-aids-is-caused-by-which-of-the-following/q.v1.b3950ecb-fa95-498f-bc81-db78f4ffdaeb-en",
    "https://www.adda247.com/question-answer/select-the-number-from-among-the-given-options-that-can-replace-the-question-mark-in-the-following-series-439-503-628-844/q.v1.77b65b60-259e-42a8-816a-b33bf4ffda3e-en",
    "https://www.adda247.com/question-answer/select-the-number-that-can-replace-the-question-mark-in-the-following-series-14-41-86-230-329/q.v1.175a811d-a4d6-44b4-b7fa-53ad8ec989e5-en",
    "https://www.adda247.com/question-answer/find-the-odd-one-out-from-the-given-options/q.v1.3fbc5d90-da9b-41ed-b219-2ff9e26ab94d-en",
    "https://www.adda247.com/question-answer/identify-the-number-that-does-not-belong-to-the-following-series-5-10-17-28-42-58-77/q.v1.2c7f3135-d645-46f9-a226-7167332f3148-en",
    "https://www.adda247.com/question-answer/select-the-number-that-can-replace-the-question-mark-in-the-following-series-110-91-74-59-46/q.v1.176819d2-5a41-4060-ab88-6c4d4f7f9a10-en",
    "https://www.adda247.com/question-answer/what-will-come-in-the-place-of-the-question-mark-in-the-following-equation-if-and-are-interchanged-and-also-and-are-interchanged/q.v1.8ed5cb46-5771-4a42-bd16-05997c305308-en",
    "https://www.adda247.com/question-answer/which-two-numbers-should-be-interchanged-to-make-the-given-equation-correct-46-24-12-19-2-38-6-44-4-262-note-interchange-shoul/q.v1.79932b9c-c717-417f-bc5b-5148485f8c1b-en",
    "https://www.adda247.com/question-answer/1-is-subtracted-from-each-even-digit-of-the-number-95423671-find-the-number-of-digits-that-are-repeated-more-than-once-in-the-new-number-formed/q.v1.961d5dcb-e1a1-4184-82b4-febf21339f45-en",
    "https://www.adda247.com/question-answer/which-characteristic-of-the-cpu-determines-how-many-instructions-it-can-process-per-second/q.v1.f1b2c3d6-150a-4efb-8b71-d06249005a72-en",
    "https://www.adda247.com/question-answer/who-wrote-the-play-mudrarakshasa/q.v1.43bff678-a238-417a-a067-61ca9593f553-en",
    "https://www.adda247.com/question-answer/anil-pradhan-co-founder-of-ngo-young-tinker-foundation-working-towards-education-in-underserved-areas-awarded-with-rohini-nayyar-prize-for-outstand/q.v1.c4a71483-86b8-40b0-855a-4a5369d4b980-en",
    "https://www.adda247.com/question-answer/which-of-the-following-letter-clusters-will-replace-the-question-mark-in-the-given-series-to-make-it-logically-complete-pdh-rfj-thl-vjn/q.v1.a0892951-1834-442c-a372-574e7261b651-en",
    "https://www.adda247.com/question-answer/complete-the-series-2-5-9-19-37/q.v1.ad0459c7-3868-4969-b296-6c750891b5ee-en",
    "https://www.adda247.com/question-answer/each-element-has-a-name-and/q.v1.890894b1-ff4b-40de-a249-dc35c985ca08-en",
    "https://www.adda247.com/question-answer/the-average-of-7-consecutive-numbers-is-33-the-greatest-of-these-numbers-is/q.v1.810cfdcb-9c6f-4384-841b-278a0dc7aef2-en",
    "https://www.adda247.com/question-answer/if-an-x-m-long-train-running-at-a-speed-of-63-m-s-crosses-a-railway-platform-in-28-sec-find-the-value-of-x-if-the-length-of-the-railway-platform-is/q.v1.8098bc25-ab02-45c6-9807-c33f1068e1f3-en",
    "https://www.adda247.com/question-answer/a-man-driving-a-car-at-a-speed-of-42-km-hr-crosses-a-bridge-in-5-4-minutes-find-the-length-of-the-bridge/q.v1.904c873d-3be0-4db7-a9d1-3a92f119483e-en",
    "https://www.adda247.com/question-answer/if-means-div-means-times-div-means-and-times-means-then-find-the-value-of-2-1-times-4-div/q.v1.b209f23d-c797-4ef7-a148-7f228ae0d5c0-en",
    "https://www.adda247.com/question-answer/a-statement-is-given-followed-by-two-arguments-i-and-ii-read-the-statements-and-the-arguments-carefully-and-select-the-appropriate-answer-the-followi/q.v1.48ea5a82-e555-49bf-a3ba-e1ac8c517382-en",
    "https://www.adda247.com/question-answer/without-assuming-anything-beyond-the-information-given-select-the-correct-nature-of-relationship-between-the-two-events-a-and-b-events-a-tabu-acc/q.v1.76e87fd1-90a9-4681-b2b5-45d18861184c-en",
    "https://www.adda247.com/question-answer/what-does-the-swayam-scheme-launched-by-government-of-india-aim-to-achieve/q.v1.62607a26-16f1-4803-ab0b-ea4e9b9c1b0f-en"
]

testbook_urls = [
    "https://testbook.com/question-answer/what-should-come-in-place-of-question-mark-in--68e222a7f9b3b78d7bf264ee",
    "https://testbook.com/question-answer/select-the-number-from-among-the-given-options-tha--68dddda0e4ed08dd9ac106df",
    "https://testbook.com/question-answer/what-should-come-in-place-of-in-the-given-series--68e4102ef901d6ccf0fda5fc",
    "https://testbook.com/question-answer/what-should-come-in-place-of-the-question-mark--68fa2c935ad7a7bf775575df",
    "https://testbook.com/question-answer/select-the-letter-that-will-come-next-in-the-follo--627bd79c3f7aa86728ba534b",
    "https://testbook.com/question-answer/select-the-number-from-the-options-that-can-replac--62b45633b4b4ee6daa5f7add",
    "https://testbook.com/question-answer/if-1-is-added-to-each-even-digit-and-1-is-subtract--68ecab9a6228370db45330ce"
]

adda_urls = list(dict.fromkeys(adda_urls))
testbook_urls = list(dict.fromkeys(testbook_urls))

def clean_text(text):
    if not text:
        return ""
    text = html.unescape(text)
    text = re.sub(r'<[^>]+>', ' ', text)
    text = re.sub(r'\s+', ' ', text)
    return text.strip()

def parse_adda247(url):
    req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)'})
    try:
        with urllib.request.urlopen(req, timeout=10) as resp:
            html_content = resp.read().decode('utf-8')
    except Exception as e:
        return None, f"HTTP fetch error: {e}"

    soup = BeautifulSoup(html_content, 'html.parser')
    page_text = soup.get_text()

    quiz_data = None
    for s in soup.find_all('script', type='application/ld+json'):
        if not s.string: continue
        try:
            d = json.loads(s.string)
            if d.get('@type') == 'Quiz':
                quiz_data = d
                break
        except:
            pass

    if not quiz_data or 'hasPart' not in quiz_data or not quiz_data['hasPart']:
        return None, "No Quiz JSON-LD found"

    part = quiz_data['hasPart'][0]
    q_text = clean_text(part.get('text', ''))
    if not q_text:
        return None, "Empty question text"

    s_answers = part.get('suggestedAnswer', [])
    if len(s_answers) < 4:
        return None, f"Fewer than 4 options ({len(s_answers)})"

    opts = {}
    pos_map = {1: 'A', 2: 'B', 3: 'C', 4: 'D'}
    for sa in s_answers:
        pos = sa.get('position')
        opt_key = pos_map.get(pos)
        if opt_key:
            opts[opt_key] = clean_text(sa.get('text', ''))

    if len(opts) < 4:
        return None, "Could not map 4 options"

    acc_answer = part.get('acceptedAnswer', {})
    corr_pos = acc_answer.get('position')
    corr_opt = pos_map.get(corr_pos)
    if not corr_opt:
        ans_text = str(acc_answer.get('text', '')).strip().upper()
        if ans_text in ['A', 'B', 'C', 'D']:
            corr_opt = ans_text
        elif ans_text in ['1', '2', '3', '4']:
            corr_opt = pos_map.get(int(ans_text))

    if not corr_opt or corr_opt not in ['A', 'B', 'C', 'D']:
        return None, "Invalid correct option"

    # Precise subject & topic classification
    raw_topic = part.get('assesses', '') or part.get('educationalAlignment', {}).get('targetName', '')
    q_lower = q_text.lower()

    if any(k in q_lower for k in ['series', 'pattern', 'code', 'cluster', 'odd one', 'relationship', 'analogy', 'arrange', 'direction', 'mirror', 'syllogism', 'floor', 'statement', 'arguments', 'letter', 'alphanumeric']):
        subject = "Reasoning"
        if "series" in q_lower or "pattern" in q_lower or "cluster" in q_lower or "letter" in q_lower:
            topic = "Series Completion"
        elif "analogy" in q_lower or "related" in q_lower:
            topic = "Analogy"
        elif "odd" in q_lower or "different" in q_lower or "group" in q_lower:
            topic = "Classification / Odd One Out"
        elif "floor" in q_lower or "seating" in q_lower or "building" in q_lower:
            topic = "Puzzles / Seating Arrangement"
        elif "statement" in q_lower or "argument" in q_lower:
            topic = "Statements & Arguments"
        else:
            topic = raw_topic or "Verbal Reasoning"
    elif any(k in q_lower for k in ['sum', 'ratio', 'percentage', 'value of', 'simplify', 'interest', 'mode', 'mean', 'median', 'speed', 'distance', 'time', 'work', 'profit', 'loss', 'table', 'fraction', 'number', 'average', 'train', 'bridge', 'decimal']):
        subject = "Mathematics"
        if "interest" in q_lower:
            topic = "Simple & Compound Interest"
        elif "mode" in q_lower or "mean" in q_lower or "median" in q_lower:
            topic = "Statistics"
        elif "speed" in q_lower or "train" in q_lower or "bridge" in q_lower:
            topic = "Speed, Time & Distance"
        elif "percentage" in q_lower or "percent" in q_lower:
            topic = "Percentages"
        elif "ratio" in q_lower:
            topic = "Ratio & Proportion"
        elif "average" in q_lower:
            topic = "Averages"
        elif "decimal" in q_lower or "fraction" in q_lower:
            topic = "Decimals & Fractions"
        else:
            topic = raw_topic or "Number System / Arithmetic"
    else:
        subject = "General_Awareness"
        if "headquarters" in q_lower or "organization" in q_lower or "un" in q_lower or "wto" in q_lower or "ilo" in q_lower:
            topic = "International Organizations"
        elif "play" in q_lower or "wrote" in q_lower or "physician" in q_lower:
            topic = "History & Culture"
        elif "aids" in q_lower or "disease" in q_lower:
            topic = "General Biology"
        elif "cpu" in q_lower or "computer" in q_lower:
            topic = "Computer Awareness"
        elif "scheme" in q_lower or "swayam" in q_lower or "prize" in q_lower or "foundation" in q_lower:
            topic = "Government Schemes & Current Affairs"
        else:
            topic = raw_topic or "Static GK"

    source_date = "2025-08-07"
    is_memory_based = True if ("memory" in page_text.lower() or "pyp" in page_text.lower()) else False
    cycle = "CEN 06/2024 UG Level CBT-1"

    item = {
        "question_text": q_text,
        "option_a": opts['A'],
        "option_b": opts['B'],
        "option_c": opts['C'],
        "option_d": opts['D'],
        "correct_option": corr_opt,
        "subject": subject,
        "topic": topic,
        "source_name": "Adda247",
        "source_url": url,
        "source_date": source_date,
        "is_memory_based": is_memory_based,
        "cycle": cycle,
        "language": "English"
    }
    return item, None

def parse_testbook(url):
    req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)'})
    try:
        with urllib.request.urlopen(req, timeout=10) as resp:
            html_content = resp.read().decode('utf-8')
    except Exception as e:
        return None, f"HTTP fetch error: {e}"

    soup = BeautifulSoup(html_content, 'html.parser')
    page_text = soup.get_text()

    # Check for question text in QAPage LD+JSON
    qa_data = None
    for s in soup.find_all('script', type='application/ld+json'):
        if not s.string: continue
        try:
            d = json.loads(s.string)
            if d.get('@type') == 'QAPage':
                qa_data = d
                break
        except:
            pass

    if not qa_data:
        return None, "No QAPage LD+JSON found"

    main_ent = qa_data.get('mainEntity', {})
    q_text = clean_text(main_ent.get('text', ''))
    if not q_text:
        return None, "Empty question text"

    # Extract options from HTML
    opt_divs = soup.find_all('div', class_='option')
    if len(opt_divs) < 4:
        opt_divs = soup.find_all('li', class_=re.compile(r'option', re.I))

    if len(opt_divs) < 4:
        return None, f"Fewer than 4 option divs ({len(opt_divs)})"

    opts = {
        'A': clean_text(opt_divs[0].text),
        'B': clean_text(opt_divs[1].text),
        'C': clean_text(opt_divs[2].text),
        'D': clean_text(opt_divs[3].text)
    }

    acc_ans = main_ent.get('acceptedAnswer', {}).get('text', '')
    corr_opt = None
    m = re.search(r'Option\s*([1-4])', acc_ans, re.I)
    if m:
        pos_map = {'1': 'A', '2': 'B', '3': 'C', '4': 'D'}
        corr_opt = pos_map.get(m.group(1))

    if not corr_opt:
        return None, "Could not determine correct option"

    q_lower = q_text.lower()
    if any(k in q_lower for k in ['series', 'pattern', 'code', 'cluster', 'odd one', 'relationship', 'analogy', 'letter']):
        subject = "Reasoning"
        topic = "Series Completion"
    elif any(k in q_lower for k in ['sum', 'ratio', 'percentage', 'value of', 'simplify', 'number', 'prime']):
        subject = "Mathematics"
        topic = "Number System"
    else:
        subject = "General_Awareness"
        topic = "General Science / Static GK"

    source_date = "2025-08-20"
    is_memory_based = True if "memory" in page_text.lower() else False
    cycle = "CEN 06/2024 UG Level CBT-1"

    item = {
        "question_text": q_text,
        "option_a": opts['A'],
        "option_b": opts['B'],
        "option_c": opts['C'],
        "option_d": opts['D'],
        "correct_option": corr_opt,
        "subject": subject,
        "topic": topic,
        "source_name": "Testbook",
        "source_url": url,
        "source_date": source_date,
        "is_memory_based": is_memory_based,
        "cycle": cycle,
        "language": "English"
    }
    return item, None

collected_all = []
rejected_log = []

for url in adda_urls:
    item, err = parse_adda247(url)
    if item:
        collected_all.append(item)
    else:
        rejected_log.append({"url": url, "reason": err})

for url in testbook_urls:
    item, err = parse_testbook(url)
    if item:
        collected_all.append(item)
    else:
        rejected_log.append({"url": url, "reason": err})

# Deduplicate
seen_q = set()
final_items = []
for item in collected_all:
    norm_q = re.sub(r'\s+', '', item['question_text'].lower())
    if norm_q not in seen_q:
        seen_q.add(norm_q)
        final_items.append(item)

print(f"Total collected after deduplication: {len(final_items)}")

# Write collect-d.json
with open('collect-d.json', 'w', encoding='utf-8') as f:
    json.dump(final_items, f, indent=2, ensure_ascii=False)

print("Saved collect-d.json successfully!")
