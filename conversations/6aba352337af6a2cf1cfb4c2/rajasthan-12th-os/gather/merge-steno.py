# -*- coding: utf-8 -*-
# MERGE: Stenographer 2024 (5 Oct 2024, Shift-1, Paper-1 GK) -> bank module.
# Inputs:
#   steno-2025-verify-input.json  (128 records, archive key, optE)
#   steno-va-results.json        (verdicts Q1-64)
#   steno-vb-results.json        (verdicts Q65-150)
#   steno-subject-final.json     (content-based subject tags, manually reviewed)
# Output: app/src/data/bank/pyq-steno-2024.js
# Policy: AGREE -> archive key; CORRECT -> verified answer; UNSURE -> EXCLUDED (zero-fake-data).
import json, os, re, sys

ROOT = os.path.dirname(os.path.abspath(__file__))
P = os.path.join(ROOT, '..', 'gather', 'pyq-raw')
OUT = os.path.join(ROOT, '..', 'app', 'src', 'data', 'bank', 'pyq-steno-2024.js')

inp = json.load(open(os.path.join(P, 'steno-2025-verify-input.json'), encoding='utf-8'))
tags = {t['n']: t['subject'] for t in json.load(open(os.path.join(P, 'steno-subject-final.json'), encoding='utf-8'))}

verdicts = {}
for f in ('steno-va-results.json', 'steno-vb-results.json'):
    fp = os.path.join(P, f)
    if not os.path.exists(fp):
        sys.exit(f'MISSING {f} — verification agents not finished yet')
    for v in json.load(open(fp, encoding='utf-8')):
        verdicts[(v['shift'], v['n'])] = v

records, excluded = [], []
for r in inp:
    v = verdicts.get((r['shift'], r['n']))
    if v is None:
        sys.exit(f'NO VERDICT for {r["shift"]} Q{r["n"]}')
    if v['verdict'] == 'UNSURE':
        excluded.append((r['n'], v.get('note', '')))
        continue
    ans = v['final_ans'] if v['verdict'] == 'CORRECT' else r['key']
    if ans is None or not (0 <= ans <= 3):
        sys.exit(f'BAD ANSWER for Q{r["n"]}')
    subj = tags.get(r['n'])
    if not subj:
        sys.exit(f'NO SUBJECT TAG for Q{r["n"]}')
    records.append({'n': r['n'], 'subject': subj, 'q': r['q'], 'opts': r['opts'], 'ans': ans,
                    'verdict': v['verdict'], 'note': v.get('note', '')})

def esc(s):
    return s.replace('\\', '\\\\').replace('"', '\\"')

lines = []
lines.append('// REAL PYQ: RSMSSB Stenographer/PA Grade-II Exam 2024 — Paper-1 (GK/Science), 5 October 2024, First Shift')
lines.append('// Source: archived solved-paper transcription (TheExamPillar); answers independently re-verified (agent solve/fact-check pass);')
lines.append('// content-based subject tagging (NB draft + full manual review): raj-gk/science/india-gk.')
lines.append(f'// {len(excluded)} excluded per zero-fake-data: {", ".join(str(x[0]) for x in excluded)}.')
lines.append('// 22 questions were officially dropped by the board key (starred) and never staged.')
lines.append('export const PYQ_STENO_2024 = [')
for i, rec in enumerate(sorted(records, key=lambda x: x['n'])):
    qid = f'sten24-{i+1:03d}'
    note_esc = esc(rec['note']) if rec['verdict'] == 'CORRECT' else 'उत्तर स्वतंत्र रूप से पुनः सत्यापित।'
    note_en = ('Answer corrected during independent verification: ' + rec['note']) if rec['verdict'] == 'CORRECT' else 'Answer independently re-verified.'
    exp_hi = f'RSMSSB स्टेनोग्राफर परीक्षा 2024 (Paper-1, 5 October 2024, First Shift) का वास्तविक प्रश्न। {note_esc}'
    lines.append(' {')
    lines.append(f'  "id": "{qid}",')
    lines.append(f'  "subject": "{rec["subject"]}",')
    lines.append('  "origin": "real_pyq",')
    lines.append('  "verification": "VERIFIED",')
    lines.append('  "q": {')
    lines.append(f'   "hi": "{esc(rec["q"])}",')
    lines.append(f'   "en": "{esc(rec["q"])}"')
    lines.append('  },')
    lines.append('  "options": {')
    lines.append('   "hi": [')
    for o in rec['opts']:
        lines.append(f'    "{esc(o)}",')
    lines.append('   ],')
    lines.append('   "en": [')
    for o in rec['opts']:
        lines.append(f'    "{esc(o)}",')
    lines.append('   ]')
    lines.append('  },')
    lines.append(f'  "answer": {rec["ans"]},')
    lines.append('  "explanation": {')
    lines.append(f'   "hi": "{esc(exp_hi)}",')
    lines.append(f'   "en": "Actual question from RSMSSB Stenographer Exam 2024 (Paper-1, 5 Oct 2024, First Shift). {esc(note_en)}"')
    lines.append('  },')
    lines.append('  "provenance": {')
    lines.append('   "source": "RSMSSB Stenographer 2024 official paper (5 Oct 2024, First Shift, Paper-1), archived solved-paper transcription; answers independently re-verified, content-based subject tagging",')
    lines.append('   "evidence": "REAL_PYQ_VERIFIED"')
    lines.append('  }')
    lines.append(' }' + (',' if i < len(records) - 1 else ''))
lines.append(']')
open(OUT, 'w', encoding='utf-8').write('\n'.join(lines) + '\n')

print(f'merged: {len(records)} | excluded: {len(excluded)} -> {excluded}')
print('module:', OUT)
