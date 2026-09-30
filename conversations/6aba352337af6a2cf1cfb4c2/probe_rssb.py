import urllib.request
import ssl

ctx = ssl.create_default_context()
ctx.check_hostname = False
ctx.verify_mode = ssl.CERT_NONE

urls = [
    "https://rssb.rajasthan.gov.in",
    "https://rssb.rajasthan.gov.in/news",
    "https://rssb.rajasthan.gov.in/advertisements",
    "https://rssb.rajasthan.gov.in/downloads",
    "https://rssb.rajasthan.gov.in/question-paper",
    "https://rssb.rajasthan.gov.in/answer-key",
    "https://police.rajasthan.gov.in",
]

headers = {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
}

for u in urls:
    req = urllib.request.Request(u, headers=headers)
    try:
        with urllib.request.urlopen(req, timeout=8, context=ctx) as resp:
            print(f"SUCCESS {resp.status} : {u} (bytes: {len(resp.read())})")
    except Exception as e:
        print(f"FAIL : {u} -> {e}")

