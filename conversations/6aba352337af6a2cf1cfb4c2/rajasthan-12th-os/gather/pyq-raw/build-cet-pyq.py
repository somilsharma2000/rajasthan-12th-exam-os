import re
import json, sys
BASE = '/app/conversations/6aba352337af6a2cf1cfb4c2/rajasthan-12th-os'
qs = json.load(open(BASE + '/gather/pyq-raw/cet2024-s1-final.json'))
try: gk = {v['n']: v for v in json.load(open(BASE + '/gather/pyq-raw/cet-all-verdicts.json'))}
except: gk = {}
try: mth = {v['n']: v for v in json.load(open(BASE + '/gather/pyq-raw/cet-math-verdicts.json'))}
except: mth = {}
try: tags = {v['n']: v['subject'] for v in json.load(open(BASE + '/gather/pyq-raw/cet-subject-tags.json'))}
except: tags = {}
verdicts = {**gk, **mth}
ship, drop = [], []
assert len(tags) > 0, 'subject tags not ready yet'
for q in qs:
    v = verdicts.get(q['n'])
    if not v: drop.append((q['n'], 'no-verdict')); continue
    if v['verdict'] == 'CONFIRMED': ans = q['ans']
    elif v['verdict'] == 'WRONG' and v.get('correct_idx') is not None: ans = v['correct_idx']
    else: drop.append((q['n'], v['verdict'])); continue
    is_hindi = bool(re.search('[\u0900-\u097F]', q['q']))
    txt = q['q'].strip()
    src_lang = 'hi' if is_hindi else 'en'
    ship.append({
        'id': f'cet24-{q["n"]:03d}', 'subject': tags.get(q['n'], q['subject']),
        'origin': 'real_pyq', 'verification': 'VERIFIED',
        'q': {'hi': txt, 'en': txt},
        'options': {'hi': [o.strip() for o in q['opts']], 'en': [o.strip() for o in q['opts']]},
        'answer': ans,
        'explanation': {'hi': f'राजस्थान सीईटी (सीनियर सेकेंडरी) 2024, शिफ्ट-1 (22 अक्टूबर 2024) का वास्तविक प्रश्न। उत्तर स्वतंत्र रूप से पुनः सत्यापित।', 'en': f'Actual question from Rajasthan CET (Senior Secondary) 2024, Shift-1 (22 Oct 2024). Answer independently re-verified.'},
        'provenance': {'source': 'RSSB CET Senior Secondary 2024 Shift-1 official paper (archived solved transcription via shikshanagari.com), answer cross-verified independently', 'evidence': 'REAL_PYQ_VERIFIED'}
    })
print(f'shipping {len(ship)} | dropped {len(drop)}: {drop}')
items = json.dumps(ship, ensure_ascii=False, indent=1)
out = f"// REAL PYQ: Rajasthan CET (Senior Secondary) 2024, Shift-1 (22 Oct 2024) — {len(ship)} verified questions\n// Source: archived solved paper transcription, answers independently re-verified (compute + web cross-check). Uncertain ones excluded.\nexport const PYQ_CET_2024 = {items}\n"
open(BASE + '/app/src/data/bank/pyq-cet-2024.js', 'w').write(out)
print('bank file written: app/src/data/bank/pyq-cet-2024.js')
