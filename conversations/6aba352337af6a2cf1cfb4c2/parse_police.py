import urllib.request
import ssl
from bs4 import BeautifulSoup

ctx = ssl.create_default_context()
ctx.check_hostname = False
ctx.verify_mode = ssl.CERT_NONE

url = "https://police.rajasthan.gov.in"
headers = {'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)'}
req = urllib.request.Request(url, headers=headers)
try:
    with urllib.request.urlopen(req, timeout=10, context=ctx) as resp:
        html = resp.read().decode('utf-8', errors='ignore')
        soup = BeautifulSoup(html, 'html.parser')
        print("Title:", soup.title.string if soup.title else "None")
        for a in soup.find_all('a', href=True):
            href = a['href']
            text = a.get_text(strip=True)
            if any(k in href.lower() or k in text.lower() for k in ['constable', 'recruitment', 'paper', 'key', 'answer', 'result', 'download', 'archive']):
                print(f"TEXT: {text} | HREF: {href}")
except Exception as e:
    print("Error:", e)
