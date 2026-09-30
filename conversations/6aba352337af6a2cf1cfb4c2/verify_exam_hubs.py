import os

target_dir = "rajasthan-12th-os/gather/exam-hubs"

expected_files = [
    "00-index.md",
    "01-cet-12th.md",
    "02-ldc-junior-assistant.md",
    "03-police-constable.md",
    "04-forester.md",
    "05-forest-guard.md",
    "06-jail-prahari.md",
    "07-hostel-superintendent.md",
    "08-jamadar-grade-2.md",
    "09-lab-assistant.md",
    "10-agriculture-supervisor.md",
    "11-reet-level-1.md",
    "12-stenographer.md"
]

all_ok = True

for fname in expected_files:
    fpath = os.path.join(target_dir, fname)
    if not os.path.exists(fpath):
        print(f"MISSING: {fname}")
        all_ok = False
        continue
    
    with open(fpath, "r") as f:
        content = f.read()
    
    if fname == "00-index.md":
        print(f"Verified {fname}: {len(content)} bytes")
        continue

    # Check for fields 1 through 8
    missing_fields = []
    for i in range(1, 9):
        if f"## Field {i}:" not in content:
            missing_fields.append(f"Field {i}")
            
    if missing_fields:
        print(f"ERROR in {fname}: missing {missing_fields}")
        all_ok = False
    else:
        print(f"Verified {fname}: All 8 fields present ({len(content)} bytes)")

if all_ok:
    print("\nALL 13 EXAM HUB FILES VERIFIED SUCCESSFULLY!")
