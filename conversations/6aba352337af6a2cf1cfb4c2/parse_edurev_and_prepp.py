import requests
from bs4 import BeautifulSoup
import json
import re

headers = {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
}

# 1. Parse EduRev page
edurev_url = 'https://edurev.in/p/424551/rrb-ntpc-cbt-1-previous-year-questions-16-jun-2025-shift-2'
r_edu = requests.get(edurev_url, headers=headers)
html_edu = r_edu.text

# In EduRev HTML, text transcript is inside pre#text_transcript_element
soup_edu = BeautifulSoup(html_edu, 'html.parser')
pre_elem = soup_edu.find('pre', id='text_transcript_element')

edurev_questions = []

if pre_elem:
    raw_text = pre_elem.get_text()
    # Split by Q.1, Q.2, etc.
    q_blocks = re.split(r'Q\.\d+\s+', raw_text)
    for block in q_blocks[1:]:
        # e.g. The Battle of Kalinga was fought in which year after Ashoka embraced Buddhism?\nAns 1. 240 BCE\n2. 261 BCE\n3. 273 BCE\n4. 250 BCE
        lines = [l.strip() for l in block.split('\n') if l.strip()]
        if not lines:
            continue
            
        # Find line starting with Ans or 1.
        ans_start_idx = -1
        for idx, line in enumerate(lines):
            if line.startswith('Ans ') or line.startswith('Ans1.') or line.startswith('Ans 1.'):
                ans_start_idx = idx
                break
                
        if ans_start_idx != -1:
            q_text = ' '.join(lines[:ans_start_idx]).strip()
            opt_lines = lines[ans_start_idx:]
            
            # Extract 4 options
            opts = []
            for ol in opt_lines:
                # remove Ans 1. or 1. or 2. etc.
                cleaned_ol = re.sub(r'^(Ans\s*)?\d+\.\s*', '', ol).strip()
                if cleaned_ol:
                    opts.append(cleaned_ol)
                    
            if len(opts) >= 4 and len(q_text) > 10:
                # For EduRev, let's verify if we can determine subject and correct answer or if EduRev lists the correct answer
                # Let's check how EduRev indicates correct answer or if math/facts give the clear answer
                edurev_questions.append({
                    'q_text': q_text,
                    'opts': opts[:4]
                })

print(f"Parsed {len(edurev_questions)} raw question blocks from EduRev.")

