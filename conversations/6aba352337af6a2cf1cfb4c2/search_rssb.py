import urllib.request
import re
from bs4 import BeautifulSoup

def get_page(url):
    req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)'})
    try:
        with urllib.request.urlopen(req, timeout=10) as resp:
            return resp.read().decode('utf-8', errors='ignore')
    except Exception as e:
        print(f"Error fetching {url}: {e}")
        return ""

html = get_page("https://rssb.rajasthan.gov.in")
soup = BeautifulSoup(html, 'html.parser')
for a in soup.find_all('a', href=True):
    href = a['href']
    text = a.get_text(strip=True)
    if any(k in href.lower() or k in text.lower() for k in ['question', 'paper', 'answer', 'key', 'cet', 'ldc', 'constable']):
        print(f"TEXT: {text} | HREF: {href}")
