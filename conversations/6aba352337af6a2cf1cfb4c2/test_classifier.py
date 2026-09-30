import json

path = '/app/conversations/6aba352337af6a2cf1cfb4c2/rajasthan-12th-os/gather/pyq-raw/police-staging.json'
with open(path, 'r', encoding='utf-8') as f:
    data = json.load(f)[0:230]

# Detailed classification logic or manual index mapping combined with checks
# Let's inspect each item and assign category.

def classify(i, q, opts, orig):
    q_str = q + " " + " ".join(opts)

    # Let's write explicit logic or lookup table for all 230 items after reviewing each item.
    pass

