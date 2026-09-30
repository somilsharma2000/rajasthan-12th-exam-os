import urllib.request
import re
import json
import html as html_module
from bs4 import BeautifulSoup
from datetime import datetime

# List of URLs to process
urls = [
    'https://testbook.com/question-answer/as-of-march-2021-which-of-the-following-companies--62833cbdfb12e3ff5a8a501f',
    'https://testbook.com/question-answer/read-the-following-information-carefully-and-answe--6284a4f8c361535ad503e846',
    'https://testbook.com/question-answer/the-perimeter-of-a-rectangle-is-96-m-and-its-lengt--663237eea909f61419bc5077',
    'https://testbook.com/question-answer/six-girls-are-sitting-in-a-circle-facing-each-othe--663238ec1bff206d5e86f9f5',
    'https://testbook.com/question-answer/of-the-four-words-listed-below-three-are-consiste--663235abcf6045d54292922a',
    'https://testbook.com/question-answer/which-of-the-following-best-depicts-the-relationsh--6285437c4644e038af3f040e',
    'https://testbook.com/question-answer/out-of-the-four-words-listed-three-are-alike-in-s--6276729b3f7074593d10c06c',
    'https://testbook.com/question-answer/select-the-alphanumeric-term-that-can-replace-the--6279356154d610e81dbab848',
    'https://testbook.com/question-answer/consider-the-given-statement-and-decide-which-of-t--6272b15410e396140a0f4057',
    'https://testbook.com/question-answer/40-of-a-number-is-46-less-than-45-of-that-nu--62751f8a285888fe65515344',
    'https://testbook.com/question-answer/in-a-certain-code-language-idiot-is-written-as-rw--627a75178310ccc021c71d60',
    'https://testbook.com/question-answer/ques--6138b41e227853594a406d6c',
    'https://testbook.com/question-answer/which-of-the-following-ministries-has-been-allotte--627b9b66ce4325949f40f1ba',
    'https://testbook.com/question-answer/who-is-considered-to-be-the-father-of-modern--627e5382c460ce1237251ea0',
    'https://testbook.com/question-answer/who-was-the-author-of-the-sanskrit-epic-mahabharat--627a1e357b72a0c2dbf17e76',
    'https://testbook.com/question-answer/who-is-known-as-the-father-of-indian-railways--627cb8619c009d0b36dab09a',
    'https://testbook.com/question-answer/which-was-the-first-commercial-and-marketing-arm-o--627b939bce4325949f4000eb',
    'https://testbook.com/question-answer/select-the-number-from-the-given-options-that-can--663254ca281e59f6b817f86a',
    'https://testbook.com/question-answer/select-the-letter-that-can-come-in-place-of-the-qu--66323d132347bd81f0534dec',
    'https://testbook.com/question-answer/the-circle-positioned-above-represents-people-who--61d31149bbd902b7cbec2580',
    'https://testbook.com/question-answer/in-which-year-was-the-number-of-employees-fired-hi--61d31521f11fde63dbc10d65',
    'https://testbook.com/question-answer/four-words-have-been-given-out-of-which-three-are--61d3185156b3d7c7ffe861ae',
    'https://testbook.com/question-answer/select-the-number-from-among-the-given-options-tha--61d4221bc7eec7449a28c9fd',
    'https://testbook.com/question-answer/select-the-letter-clusters-from-among-the-given-op--61caf8909c452bb9598025d4',
    'https://testbook.com/question-answer/the-following-pie-diagram-shows-the-total-expendit--61cbc5324a59099947ec728f',
    'https://testbook.com/question-answer/which-of-the-following-statements-is-not-true-abou--61cb0a38203066978274fef8',
    'https://testbook.com/question-answer/lander-of-chandrayaan-2-was-named-after-the-scient--61cb659df33deb6ffa6375d8',
    'https://testbook.com/question-answer/how-many-languages-are-enlisted-in-the-eighth-sche--61d56c9b5b25edc2032ec6cd',
    'https://testbook.com/question-answer/which-of-the-following-methods-did-holt-mackenzie--61d5261107d4d24274a6c280',
    'https://testbook.com/question-answer/in-a-certain-code-language-get-up-and-go39--613769888b9a86b70918b067',
    'https://testbook.com/question-answer/which-famous-author-used-the-pen-name-madhavikutty--61376232ebdce83eb1ad1c93',
    'https://testbook.com/question-answer/the-following-graph-shows-the-production-in-tones--6138dd66ab868d700446b7c9',
    'https://testbook.com/question-answer/the-value-of4-sin230-3-cot260--6139b59dfd57d464687746fc',
    'https://testbook.com/question-answer/select-the-number-from-among-the-given-options-tha--6139e9403911f532fd5b99b3',
    'https://testbook.com/question-answer/four-numbers-have-been-given-out-of-which-three-a--61483f78214efb1842ca2865',
    'https://testbook.com/question-answer/the-given-table-shows-the-number-of-formal-learner--6139db0391e6fa9b83655003',
    'https://testbook.com/question-answer/ifrm-xfrac1x9-then-the-value-of--61485dd99f5ea6d2c0a811a1',
    'https://testbook.com/question-answer/select-the-option-that-is-related-to-the-third-ter--614859809fe8a500575df587',
    'https://testbook.com/question-answer/select-the-number-from-among-the-given-options-tha--6151777dbf4345b22da69771',
    'https://testbook.com/question-answer/in-a-certain-code-language-regulation-is-written--61518982e2fc6b4ee44eccde',
    'https://testbook.com/question-answer/study-the-given-pattern-carefully-and-select-the-n--616e6b1f43670630dc96e2fe',
    'https://testbook.com/question-answer/select-the-number-from-among-the-given-options-tha--616e61740d9c857763726322',
    'https://testbook.com/question-answer/the-given-table-shows-the-number-of-people-who-joi--616e634db5a8ad245ff1e8ac',
    'https://testbook.com/question-answer/the-table-below-provides-the-percentage-of-marks-o--61a4d26a778095a48d5e93ad',
    'https://testbook.com/question-answer/select-the-number-from-among-the-given-option-that--61a4dd07231c1db66ea0cafc',
    'https://testbook.com/question-answer/select-the-alphanumeric-cluster-from-among-the-giv--61a545848c2875847323e26f',
    'https://testbook.com/question-answer/four-numbers-have-been-given-out-of-which-three-a--61a4f2b1b7ceb43df5f917f9',
    'https://testbook.com/question-answer/study-the-following-carefully-and-answer-the-quest--61a647692bdba46c1956dd73',
    'https://testbook.com/question-answer/find-the-smallest-positive-number-which-must-be-su--61a638de69ffad4041b2910f',
    'https://testbook.com/question-answer/for-which-of-the-following-diseases-has-u-s-fda-a--61a636382fcb0e5f94fe994a'
]

# Excluded shifts & URLs from previous batch
excluded_urls = {
    'https://edurev.in/tests/56760',
    'https://edurev.in/tests/56856',
    'https://edurev.in/tests/56857',
    'https://aajexam.com/pyq/rrb-ntpc/rrb-ntpc-28-december-2020-shift-1',
    'https://aajexam.com/pyq/rrb-ntpc/rrb-ntpc-22-february-2021-shift-1',
    'https://aajexam.com/pyq/rrb-ntpc/rrb-ntpc-28-march-2016-shift-1'
}

excluded_shifts_keywords = [
    '28 Dec 2020 Shift 1', '28 December 2020 Shift-1', '28 December 2020 Shift 1',
    '22 Feb 2021 Shift 1', '22 February 2021 Shift-1', '22 February 2021 Shift 1',
    '28 Mar 2016 Shift 1', '28 March 2016 Shift-1', '28 March 2016 Shift 1',
    'CEN 05/2024'
]

def classify_subject_and_topic(q_text, breadcrumbs, url):
    # Subject: 'Mathematics', 'Reasoning', 'General_Awareness'
    bread_str = ' '.join(breadcrumbs).lower()
    
    # Check breadcrumbs first
    if any(k in bread_str for k in ['reasoning', 'logical reasoning', 'general intelligence']):
        subj = 'Reasoning'
    elif any(k in bread_str for k in ['quant', 'quantitative', 'math', 'mathematics', 'numerical']):
        subj = 'Mathematics'
    elif any(k in bread_str for k in ['general knowledge', 'gk', 'general awareness', 'history', 'polity', 'economy', 'geography', 'science']):
        subj = 'General_Awareness'
    else:
        # Fallback to text inspection
        if any(k in q_text.lower() for k in ['father of', 'who was', 'which of the following', 'isro', 'scheduled', 'constitution', 'ministry', 'author', 'pen name']):
            subj = 'General_Awareness'
        elif any(k in q_text.lower() for k in ['code language', 'series', 'pattern', 'odd one', 'related to', 'analog', 'sitting in a circle']):
            subj = 'Reasoning'
        else:
            subj = 'Mathematics'
            
    # Determine topic
    topic = 'General'
    if len(breadcrumbs) >= 2:
        topic = breadcrumbs[-1]
    elif len(breadcrumbs) == 1:
        topic = breadcrumbs[0]
        
    return subj, topic

results = []
rejected = []

for url in sorted(set(urls)):
    if url in excluded_urls:
        rejected.append({'url': url, 'reason': 'URL in previous batch excluded list'})
        continue

    try:
        req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)'})
        html = urllib.request.urlopen(req).read().decode('utf-8')
        soup = BeautifulSoup(html, 'html.parser')
        
        # Shift / Held on
        m = re.search(r'(?:Official Paper \(Held On:|Held On:)\s*([^)]+)\)', html)
        shift_str = m.group(1).strip() if m else 'unknown'
        
        # Check excluded shifts
        if any(ex.lower() in shift_str.lower() for ex in excluded_shifts_keywords):
            rejected.append({'url': url, 'reason': f'Shift excluded: {shift_str}'})
            continue
            
        # Options from DOM
        opt_els = soup.find_all(class_=re.compile(r'\boption\b', re.I))
        options = [o.get_text(strip=True) for o in opt_els]
        
        if len(options) != 4:
            rejected.append({'url': url, 'reason': f'Found {len(options)} options, expected 4'})
            continue
            
        # Question text from JSON-LD or DOM
        q_text = ''
        for s in soup.find_all('script', type='application/ld+json'):
            if s.string and 'QAPage' in s.string:
                try:
                    data = json.loads(s.string)
                    q_text = data['mainEntity']['text']
                    q_text = html_module.unescape(q_text).strip('"\t\r\n ')
                except Exception as e:
                    pass
                    
        if not q_text:
            rejected.append({'url': url, 'reason': 'Could not extract question text'})
            continue
            
        # Answer
        corr_opt = ''
        ans_m = re.search(r'Option (\d+)\s*:', html)
        if ans_m:
            num = int(ans_m.group(1))
            if 1 <= num <= 4:
                corr_opt = ['A', 'B', 'C', 'D'][num - 1]
                
        if not corr_opt:
            rejected.append({'url': url, 'reason': 'No published answer found'})
            continue
            
        # Language
        lang = 'Hindi' if '/hn/' in url or any('\u0900' <= c <= '\u097F' for c in q_text) else 'English'
        
        # Date
        date_m = re.search(r'(\d{1,2}\s+[A-Za-z]+\s+\d{4})', shift_str)
        source_date = 'unknown'
        if date_m:
            raw_d = date_m.group(1)
            for fmt in ('%d %b %Y', '%d %B %Y'):
                try:
                    dt = datetime.strptime(raw_d, fmt)
                    source_date = dt.strftime('%Y-%m-%d')
                    break
                except:
                    pass
                    
        # Breadcrumbs
        breadcrumbs = []
        for b in soup.find_all('a', class_=re.compile(r'breadcrumb', re.I)):
            breadcrumbs.append(b.text.strip())
        if not breadcrumbs:
            # Fallback to meta tags or links
            for b in soup.find_all('span', class_=re.compile(r'breadcrumb', re.I)):
                breadcrumbs.append(b.text.strip())
                
        subject, topic = classify_subject_and_topic(q_text, breadcrumbs, url)
        
        results.append({
            'question_text': q_text,
            'option_a': options[0],
            'option_b': options[1],
            'option_c': options[2],
            'option_d': options[3],
            'correct_option': corr_opt,
            'subject': subject,
            'topic': topic,
            'source_name': 'Testbook',
            'source_url': url,
            'source_date': source_date,
            'cycle': 'CEN 01/2019 CBT-1',
            'shift': shift_str,
            'language': lang
        })
    except Exception as e:
        rejected.append({'url': url, 'reason': f'Exception during fetch/parse: {str(e)}'})

print(f'Total Processed: {len(urls)}')
print(f'Valid Questions: {len(results)}')
print(f'Rejected: {len(rejected)}')

with open('test_results.json', 'w', encoding='utf-8') as f:
    json.dump(results, f, indent=2, ensure_ascii=False)

with open('test_rejected.json', 'w', encoding='utf-8') as f:
    json.dump(rejected, f, indent=2, ensure_ascii=False)
