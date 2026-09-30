import json

path = '/app/conversations/6aba352337af6a2cf1cfb4c2/rajasthan-12th-os/gather/pyq-raw/police-staging.json'
with open(path, 'r', encoding='utf-8') as f:
    raw_data = json.load(f)[0:230]

# Let's inspect Nagabhata II (57), Rajshekhar (59), Moinuddin Chishti (81), Bikaner Ganga Singh (123)
# 57: Nagabhata II -> Gurjara Pratihara king. Pratiharas of Mandore/Bhinmal Rajasthan & Kannauj.
# 59: Rajshekhar -> court poet of Pratiharas.
# 81: Sufi saint Moinuddin Chishti death (1235 AD). Dargah in Ajmer Rajasthan.
# 123: Chamber of Princes first chancellor -> Maharaja Ganga Singh of Bikaner.

# In Rajasthan GK syllabus:
# - Pratihara Dynasty of Rajasthan (Mandore/Bhinmal) -> raj-gk
# - Sufi saint Moinuddin Chishti of Ajmer -> raj-gk or india-gk?
# - Maharaja Ganga Singh of Bikaner / Chamber of Princes -> raj-gk

