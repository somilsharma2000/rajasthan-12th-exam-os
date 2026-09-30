import subprocess
import re
from bs4 import BeautifulSoup

def curl_url(url):
    cmd = ["curl", "-k", "-s", "-L", "-m", "15", "-A", "Mozilla/5.0 (Windows NT 10.0; Win64; x64)", url]
    res = subprocess.run(cmd, capture_output=True, text=True)
    return res.stdout

html = curl_url("https://rssb.rajasthan.gov.in")
soup = BeautifulSoup(html, 'html.parser')
print("Title:", soup.title.string if soup.title else "No title")
for a in soup.find_all('a', href=True):
    href = a['href']
    text = a.get_text(strip=True)
    if any(k in href.lower() or k in text.lower() for k in ['question', 'paper', 'answer', 'key', 'cet', 'ldc', 'constable', 'candidate']):
        print(f"TEXT: {text} | HREF: {href}")
