import requests
from bs4 import BeautifulSoup
import json
import re

headers = {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
}

paper_urls = [
    ('https://prepp.in/paper/rrb-ntpc-cbt-1-graduate-question-paper-18-mar-2026-shift-3-69d8bcfd2d005bb9501036da', 'CEN 05/2024 Graduate Level CBT-1 2025'),
    ('https://prepp.in/paper/rrb-ntpc-cbt-1-graduate-question-paper-27-mar-2026-shift-2-69da33d48c0aae9bee82d029', 'CEN 05/2024 Graduate Level CBT-1 2025'),
    ('https://prepp.in/paper/rrb-ntpc-cbt-1-graduate-question-paper-19-mar-2026-shift-3-69d747173316a4fb788b44f0', 'CEN 05/2024 Graduate Level CBT-1 2025'),
    ('https://prepp.in/paper/rrb-ntpc-cbt-1-under-graduate-paper-17-jun-2026-shift-2-6a549ccf6d1b12d03d261620', 'CEN 06/2024 Under Graduate Level CBT-1 2025'),
    ('https://prepp.in/paper/rrb-ntpc-cbt-1-under-graduate-paper-13-jun-2026-shift-3-6a47846e73980d483c20fd86', 'CEN 06/2024 Under Graduate Level CBT-1 2025'),
    ('https://prepp.in/paper/rrb-ntpc-cbt-1-under-graduate-paper-16-jun-2026-shift-2-6a4cb2cdbf3438d3ff2f519c', 'CEN 06/2024 Under Graduate Level CBT-1 2025'),
    ('https://prepp.in/paper/rrb-ntpc-cbt-1-under-graduate-paper-14-jun-2026-shift-1-6a478c254d71d850ffe40b63', 'CEN 06/2024 Under Graduate Level CBT-1 2025')
]

question_links = []

for purl, cycle in paper_urls:
    try:
        r = requests.get(purl, headers=headers, timeout=10)
        soup = BeautifulSoup(r.text, 'html.parser')
        for a in soup.find_all('a', href=True):
            href = a['href']
            if '/question/' in href:
                full_url = 'https://prepp.in' + href if href.startswith('/') else href
                if not any(q['url'] == full_url for q in question_links):
                    question_links.append({'url': full_url, 'cycle': cycle, 'paper_url': purl})
    except Exception as e:
        print(f"Error fetching paper {purl}: {e}")

print(f"Total question links collected: {len(question_links)}")

