import json

file_path = '/app/conversations/6aba352337af6a2cf1cfb4c2/rajasthan-12th-os/gather/pyq-raw/police-staging.json'
with open(file_path, 'r', encoding='utf-8') as f:
    data = json.load(f)

my_data = data[0:230]

print(f"Total items loaded: {len(my_data)}")

# Let's inspect each item and write a preliminary decision script
