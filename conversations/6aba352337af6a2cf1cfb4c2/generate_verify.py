import json

file_path = '/app/conversations/6aba352337af6a2cf1cfb4c2/rajasthan-12th-os/gather/pyq-raw/police-staging.json'
output_path = '/app/conversations/6aba352337af6a2cf1cfb4c2/rajasthan-12th-os/gather/pyq-raw/verify-reasoning.json'

with open(file_path, 'r', encoding='utf-8') as f:
    data = json.load(f)

indices = [30, 34, 35, 66, 83, 102, 103, 104, 105, 108, 145, 148, 151, 154, 156, 242, 289, 291, 292, 293, 296, 297, 301, 302, 306, 307, 308, 309, 434, 436, 437, 439, 441, 442, 445, 584, 585]

# Mapping of index to result
results_map = {
    30: {
        "verdict": "CONFIRMED",
        "corrected_ans": None,
        "broken": False,
        "note": "Independently verified correct: both conclusions follow from statement"
    },
    34: {
        "verdict": "CONFIRMED",
        "corrected_ans": None,
        "broken": False,
        "note": "Independently verified correct: school is called ROOM"
    },
    35: {
        "verdict": "CONFIRMED",
        "corrected_ans": None,
        "broken": False,
        "note": "Independently verified correct: Delhi is coded as nst"
    },
    66: {
        "verdict": "BROKEN",
        "corrected_ans": None,
        "broken": True,
        "note": "Missing referenced statements 1, 2, and 3 in question text"
    },
    83: {
        "verdict": "CONFIRMED",
        "corrected_ans": None,
        "broken": False,
        "note": "Independently verified correct: HSRA was founded in 1928 at Feroz Shah Kotla"
    },
    102: {
        "verdict": "CONFIRMED",
        "corrected_ans": None,
        "broken": False,
        "note": "Independently verified correct: assumption II is implicit"
    },
    103: {
        "verdict": "CONFIRMED",
        "corrected_ans": None,
        "broken": False,
        "note": "Independently verified correct: argument II is strong"
    },
    104: {
        "verdict": "CONFIRMED",
        "corrected_ans": None,
        "broken": False,
        "note": "Independently verified correct: code for 'and' is 9"
    },
    105: {
        "verdict": "CONFIRMED",
        "corrected_ans": None,
        "broken": False,
        "note": "Independently verified correct: GLASS is coded as 25177"
    },
    108: {
        "verdict": "CONFIRMED",
        "corrected_ans": None,
        "broken": False,
        "note": "Independently verified correct: final position relative to origin is West"
    },
    145: {
        "verdict": "CONFIRMED",
        "corrected_ans": None,
        "broken": False,
        "note": "Independently verified correct: UJM maps to YGP (+4, -3, +3 pattern)"
    },
    148: {
        "verdict": "CONFIRMED",
        "corrected_ans": None,
        "broken": False,
        "note": "Independently verified correct: reverse word and shift +3 gives QDJB"
    },
    151: {
        "verdict": "BROKEN",
        "corrected_ans": None,
        "broken": True,
        "note": "Malformed operator definitions: duplicate A+B definition and missing minus definition"
    },
    154: {
        "verdict": "CONFIRMED",
        "corrected_ans": None,
        "broken": False,
        "note": "Independently verified correct: neither conclusion follows"
    },
    156: {
        "verdict": "CONFIRMED",
        "corrected_ans": None,
        "broken": False,
        "note": "Independently verified correct: both assumptions I and II are implicit"
    },
    242: {
        "verdict": "CONFIRMED",
        "corrected_ans": None,
        "broken": False,
        "note": "Independently verified correct: POCSO Act Section 39 provides guidelines for child assistance"
    },
    289: {
        "verdict": "CONFIRMED",
        "corrected_ans": None,
        "broken": False,
        "note": "Independently verified correct: reverse word and add (+1,+2,+3,+4,+5) gives TRKMG"
    },
    291: {
        "verdict": "BROKEN",
        "corrected_ans": None,
        "broken": True,
        "note": "Correct reverse-alphabetically sorted string 'UTSONMLIIBA' is absent from all options"
    },
    292: {
        "verdict": "CONFIRMED",
        "corrected_ans": None,
        "broken": False,
        "note": "Independently verified correct: THEY = (20+8+5+25)*2 = 116"
    },
    293: {
        "verdict": "CONFIRMED",
        "corrected_ans": None,
        "broken": False,
        "note": "Independently verified correct: COLLEGE reverse letter sum is 130"
    },
    296: {
        "verdict": "CONFIRMED",
        "corrected_ans": None,
        "broken": False,
        "note": "Independently verified correct: Raman is South-West of Reshma"
    },
    297: {
        "verdict": "CONFIRMED",
        "corrected_ans": None,
        "broken": False,
        "note": "Independently verified correct: Manjula's house is South-West of Sushma's house"
    },
    301: {
        "verdict": "CONFIRMED",
        "corrected_ans": None,
        "broken": False,
        "note": "Independently verified correct: only conclusion II follows"
    },
    302: {
        "verdict": "CONFIRMED",
        "corrected_ans": None,
        "broken": False,
        "note": "Independently verified correct: only assumption I is implicit"
    },
    306: {
        "verdict": "CONFIRMED",
        "corrected_ans": None,
        "broken": False,
        "note": "Independently verified correct: CXOPB is odd-one-out (lacks opposite letter pair)"
    },
    307: {
        "verdict": "CONFIRMED",
        "corrected_ans": None,
        "broken": False,
        "note": "Independently verified correct: acaaacba forms repeating sequence 'abaca'"
    },
    308: {
        "verdict": "CONFIRMED",
        "corrected_ans": None,
        "broken": False,
        "note": "Independently verified correct: mnmmmnmmn forms repeating sequence 'nmmnmp'"
    },
    309: {
        "verdict": "CONFIRMED",
        "corrected_ans": None,
        "broken": False,
        "note": "Independently verified correct: 20th element from right in modified sequence is E"
    },
    434: {
        "verdict": "CONFIRMED",
        "corrected_ans": None,
        "broken": False,
        "note": "Independently verified correct: EUR maps to AXP (-4, +3, -2 pattern)"
    },
    436: {
        "verdict": "CONFIRMED",
        "corrected_ans": None,
        "broken": False,
        "note": "Independently verified correct: CAPTION substitutes to TOAIPNC"
    },
    437: {
        "verdict": "CONFIRMED",
        "corrected_ans": None,
        "broken": False,
        "note": "Independently verified correct: PEON = 7565 (sum of digits of letter positions)"
    },
    439: {
        "verdict": "CONFIRMED",
        "corrected_ans": None,
        "broken": False,
        "note": "Independently verified correct: TAT LOR transforms to ATJMRO"
    },
    441: {
        "verdict": "CONFIRMED",
        "corrected_ans": None,
        "broken": False,
        "note": "Independently verified correct: North-West rotated 45 degrees clockwise becomes North"
    },
    442: {
        "verdict": "BROKEN",
        "corrected_ans": None,
        "broken": True,
        "note": "Incomplete premises: conclusions reference carrots and jackfruits absent from statement"
    },
    445: {
        "verdict": "CONFIRMED",
        "corrected_ans": None,
        "broken": False,
        "note": "Independently verified correct: neither assumption I nor II is implicit"
    },
    584: {
        "verdict": "CONFIRMED",
        "corrected_ans": None,
        "broken": False,
        "note": "Independently verified correct: M is Q's mother's sister (मौसी)"
    },
    585: {
        "verdict": "CONFIRMED",
        "corrected_ans": None,
        "broken": False,
        "note": "Independently verified correct: both assumptions I and II are implicit"
    }
}

output_list = []
for idx in indices:
    res = results_map[idx]
    entry = {
        "i": idx,
        "verdict": res["verdict"],
        "corrected_ans": res["corrected_ans"],
        "broken": res["broken"],
        "note": res["note"]
    }
    output_list.append(entry)

with open(output_path, 'w', encoding='utf-8') as f:
    json.dump(output_list, f, indent=2, ensure_ascii=False)

print(f"Successfully generated {output_path} with {len(output_list)} items.")

# Calculate statistics
from collections import Counter
verdicts = Counter([item["verdict"] for item in output_list])
print("Verdict Distribution:", dict(verdicts))
