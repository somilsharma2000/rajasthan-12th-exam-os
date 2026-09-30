import requests
from bs4 import BeautifulSoup
import json
import re

headers = {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
}

paper_urls = [
    # Graduate Level (CEN 05/2024)
    ('https://prepp.in/paper/rrb-ntpc-cbt-1-graduate-question-paper-18-mar-2026-shift-3-69d8bcfd2d005bb9501036da', 'CEN 05/2024 Graduate Level CBT-1 2025', '2025-06-18'),
    ('https://prepp.in/paper/rrb-ntpc-cbt-1-graduate-question-paper-27-mar-2026-shift-2-69da33d48c0aae9bee82d029', 'CEN 05/2024 Graduate Level CBT-1 2025', '2025-06-27'),
    ('https://prepp.in/paper/rrb-ntpc-cbt-1-graduate-question-paper-19-mar-2026-shift-3-69d747173316a4fb788b44f0', 'CEN 05/2024 Graduate Level CBT-1 2025', '2025-06-19'),
    ('https://prepp.in/paper/rrb-ntpc-cbt-1-question-paper-18-jun-2025-shift-1-6875669c499a95731c08a803', 'CEN 05/2024 Graduate Level CBT-1 2025', '2025-06-18'),
    ('https://prepp.in/paper/rrb-ntpc-cbt-1-question-paper-14-jun-2025-shift-1-6872ba49c031966628798671', 'CEN 05/2024 Graduate Level CBT-1 2025', '2025-06-14'),
    ('https://prepp.in/paper/rrb-ntpc-cbt-1-question-paper-20-jun-2025-shift-2-6872ac9f5ccc14adee6ced86', 'CEN 05/2024 Graduate Level CBT-1 2025', '2025-06-20'),
    ('https://prepp.in/paper/rrb-ntpc-cbt-1-question-paper-23-jun-2025-shift-3-68666657823b869c3a3703fa', 'CEN 05/2024 Graduate Level CBT-1 2025', '2025-06-23'),
    ('https://prepp.in/paper/rrb-ntpc-cbt-1-question-paper-24-jun-2025-shift-3-68756a0d568d57c5a21cd83c', 'CEN 05/2024 Graduate Level CBT-1 2025', '2025-06-24'),
    ('https://prepp.in/paper/rrb-ntpc-cbt-1-graduate-question-paper-25-mar-2026-shift-1-69db50f578b9c086ee108d23', 'CEN 05/2024 Graduate Level CBT-1 2025', '2025-06-25'),
    ('https://prepp.in/paper/rrb-ntpc-cbt-1-graduate-question-paper-24-mar-2026-shift-1-69d895843316a4fb78ed7417', 'CEN 05/2024 Graduate Level CBT-1 2025', '2025-06-24'),
    ('https://prepp.in/paper/rrb-ntpc-cbt-1-graduate-question-paper-17-mar-2026-shift-3-69d629ee9b6dcc6331ca0f77', 'CEN 05/2024 Graduate Level CBT-1 2025', '2025-06-17'),
    ('https://prepp.in/paper/rrb-ntpc-cbt-1-graduate-question-paper-22-mar-2026-shift-3-69d8ea16f5a20fc10865e560', 'CEN 05/2024 Graduate Level CBT-1 2025', '2025-06-22'),
    ('https://prepp.in/paper/rrb-ntpc-cbt-1-graduate-question-paper-22-mar-2026-shift-2-69d8df3e3316a4fb780b5b65', 'CEN 05/2024 Graduate Level CBT-1 2025', '2025-06-22'),
    ('https://prepp.in/paper/rrb-ntpc-cbt-1-graduate-question-paper-16-mar-2026-shift-2-69d62a87802d525649c12592', 'CEN 05/2024 Graduate Level CBT-1 2025', '2025-06-16'),
    
    # Under Graduate Level (CEN 06/2024)
    ('https://prepp.in/paper/rrb-ntpc-cbt-1-under-graduate-paper-17-jun-2026-shift-2-6a549ccf6d1b12d03d261620', 'CEN 06/2024 Under Graduate Level CBT-1 2025', '2025-06-17'),
    ('https://prepp.in/paper/rrb-ntpc-cbt-1-under-graduate-paper-13-jun-2026-shift-3-6a47846e73980d483c20fd86', 'CEN 06/2024 Under Graduate Level CBT-1 2025', '2025-06-13'),
    ('https://prepp.in/paper/rrb-ntpc-cbt-1-under-graduate-paper-16-jun-2026-shift-2-6a4cb2cdbf3438d3ff2f519c', 'CEN 06/2024 Under Graduate Level CBT-1 2025', '2025-06-16'),
    ('https://prepp.in/paper/rrb-ntpc-cbt-1-under-graduate-paper-14-jun-2026-shift-1-6a478c254d71d850ffe40b63', 'CEN 06/2024 Under Graduate Level CBT-1 2025', '2025-06-14'),
    ('https://prepp.in/paper/rrb-ntpc-cbt-1-question-paper-04-sep-2025-shift-1-68da606f0a9975836871157b', 'CEN 06/2024 Under Graduate Level CBT-1 2025', '2025-09-04'),
    ('https://prepp.in/paper/rrb-ntpc-cbt-1-question-paper-18-aug-2025-shift-3-68d9e7d95350d8ec45b0c618', 'CEN 06/2024 Under Graduate Level CBT-1 2025', '2025-08-18'),
    ('https://prepp.in/paper/rrb-ntpc-cbt-1-question-paper-03-sep-2025-shift-3-68da3e16c13694afe1d6472f', 'CEN 06/2024 Under Graduate Level CBT-1 2025', '2025-09-03'),
    ('https://prepp.in/paper/rrb-ntpc-undergraduate-paper-29-aug-2025-shift-1-6a15019c2b07185c0a19583a', 'CEN 06/2024 Under Graduate Level CBT-1 2025', '2025-08-29'),
    ('https://prepp.in/paper/rrb-ntpc-under-graduate-question-paper-13-aug-2025-shift-3-68d643e4f08bfe3e91b5f061', 'CEN 06/2024 Under Graduate Level CBT-1 2025', '2025-08-13'),
    ('https://prepp.in/paper/rrb-ntpc-under-graduate-question-paper-09-sep-2025-shift-1-68e3cf2920e5f3eaa21c3786', 'CEN 06/2024 Under Graduate Level CBT-1 2025', '2025-09-09'),
    ('https://prepp.in/paper/rrb-ntpc-cbt-1-under-graduate-paper-15-jun-2026-shift-1-6a489f6208c5c5956f5e634c', 'CEN 06/2024 Under Graduate Level CBT-1 2025', '2025-06-15'),
    ('https://prepp.in/paper/rrb-ntpc-cbt-1-under-graduate-paper-13-jun-2026-shift-2-6a4760e0496b4254ff8f67b6', 'CEN 06/2024 Under Graduate Level CBT-1 2025', '2025-06-13'),
    ('https://prepp.in/paper/rrb-ntpc-cbt-1-under-graduate-paper-14-jun-2026-shift-3-6a4894b4f4df2ff286585507', 'CEN 06/2024 Under Graduate Level CBT-1 2025', '2025-06-14')
]

q_links_map = {}

for purl, cycle, sdate in paper_urls:
    try:
        r = requests.get(purl, headers=headers, timeout=10)
        soup = BeautifulSoup(r.text, 'html.parser')
        for a in soup.find_all('a', href=True):
            href = a['href']
            if '/question/' in href:
                full_url = 'https://prepp.in' + href if href.startswith('/') else href
                if full_url not in q_links_map:
                    q_links_map[full_url] = {'cycle': cycle, 'date': sdate, 'paper_url': purl}
    except Exception as e:
        print(f"Error fetching paper {purl}: {e}")

print(f"Total unique question links found: {len(q_links_map)}")

collected = []
rejected = []

def map_subject(raw_subj, topic):
    s = (raw_subj + ' ' + topic).lower()
    if any(k in s for k in ['reasoning', 'intelligence', 'puzzle', 'coding', 'analogy', 'series', 'seating', 'syllogism', 'alpha', 'blood', 'direction', 'venn', 'statement']):
        return 'Reasoning'
    if any(k in s for k in ['math', 'aptitude', 'quantitative', 'percentage', 'interest', 'proportion', 'trigonometr', 'triangle', 'number', 'profit', 'ratio', 'time', 'speed', 'average', 'geometry', 'algebra', 'simplification', 'lcm', 'work', 'discount', 'mensuration', 'hcf', 'pipe']):
        return 'Mathematics'
    return 'General_Awareness'

def is_garbled_option(opt):
    o = opt.strip()
    if len(o) > 150:
        return True
    bad_keywords = [
        '?', '::', '#', '%', 'how many', 'sits between', 'following series',
        'download pdf', 'cbt 2', 'question paper', 'previously asked',
        'is coded as', 'replace the question mark', 'pattern and relationship',
        'sitting around', 'badminton match', 'only c sits', 'select the pair',
        'quantitative aptitude', 'logical reasoning', 'general awareness'
    ]
    o_lower = o.lower()
    for kw in bad_keywords:
        if kw in o_lower:
            return True
    return False

for q_url, p_info in q_links_map.items():
    try:
        r = requests.get(q_url, headers=headers, timeout=10)
        soup = BeautifulSoup(r.text, 'html.parser')
        
        text = soup.get_text('\n', strip=True)
        lines = [l for l in text.split('\n') if l.strip()]
        
        if 'Question' not in lines:
            rejected.append({'url': q_url, 'reason': "No 'Question' header found in page text"})
            continue
            
        q_idx = lines.index('Question')
        raw_subj = lines[q_idx+1] if q_idx+1 < len(lines) else ''
        raw_topic = lines[q_idx-2] if q_idx >= 2 else 'General'
        
        topic = raw_topic.strip()
        if topic.lower().startswith('which') or topic.lower().startswith('what') or len(topic) > 50:
            topic = lines[q_idx-3] if q_idx >= 3 else 'General'
            
        q_text = lines[q_idx+2] if q_idx+2 < len(lines) else ''
        
        # Validation on question_text
        if not q_text or len(q_text) < 15 or 'Quantitative Aptitude' in q_text or 'Logical Reasoning' in q_text:
            rejected.append({'url': q_url, 'reason': f"Invalid or header question_text: '{q_text}'"})
            continue
            
        opts = lines[q_idx+3 : q_idx+7]
        if len(opts) < 4:
            rejected.append({'url': q_url, 'reason': f"Found only {len(opts)} options, expected 4"})
            continue
            
        # Strict validation on all 4 options
        garbled = False
        for opt in opts:
            if is_garbled_option(opt):
                garbled = True
                break
        if garbled:
            rejected.append({'url': q_url, 'reason': f"Garbled/misplaced option text detected: {opts}"})
            continue

        # Solution section
        sol_idx = -1
        for idx in range(q_idx+7, min(q_idx+15, len(lines))):
            if lines[idx] == 'Solution':
                sol_idx = idx
                break
                
        if sol_idx == -1:
            rejected.append({'url': q_url, 'reason': "No 'Solution' section found on page"})
            continue
            
        if lines[sol_idx+1] == 'The correct answer is':
            ans_str = lines[sol_idx+2]
        else:
            ans_str = lines[sol_idx+1]
            
        # Match option
        correct_letter = None
        for i, opt in enumerate(opts):
            o_clean = opt.strip().lower()
            a_clean = ans_str.strip().lower()
            if o_clean == a_clean or a_clean in o_clean or o_clean in a_clean:
                correct_letter = ['A', 'B', 'C', 'D'][i]
                break
                
        if not correct_letter:
            rejected.append({'url': q_url, 'reason': f"Correct answer string '{ans_str}' could not be matched to options {opts}"})
            continue

        subj = map_subject(raw_subj, topic)
        
        item = {
            "question_text": q_text,
            "option_a": opts[0],
            "option_b": opts[1],
            "option_c": opts[2],
            "option_d": opts[3],
            "correct_option": correct_letter,
            "subject": subj,
            "topic": topic,
            "source_name": "Prepp",
            "source_url": q_url,
            "source_date": p_info['date'],
            "is_memory_based": True,
            "cycle": p_info['cycle'],
            "language": "English"
        }
        
        # Avoid duplicate question_text
        if not any(c['question_text'].strip() == q_text.strip() for c in collected):
            collected.append(item)
            print(f"Collected [{len(collected)}]: {item['subject']} | {item['topic']} | {item['question_text'][:50]}...")
            if len(collected) >= 30:
                break
            
    except Exception as e:
        rejected.append({'url': q_url, 'reason': f"Exception during parsing: {e}"})

print(f"\nFinal Strictly Filtered Clean Collected Count: {len(collected)}")
print(f"Total Rejected Count: {len(rejected)}")

# Save to collect-a.json and rejected.json
with open('collect-a.json', 'w', encoding='utf-8') as f:
    json.dump(collected, f, indent=2, ensure_ascii=False)

with open('rejected.json', 'w', encoding='utf-8') as f:
    json.dump(rejected, f, indent=2, ensure_ascii=False)

