// OBSERVABILITY: surface unhandled errors to the user + keep last 20 for debugging (audit 2026-10-01)
window.addEventListener('error', (e) => {
  try {
    const log = JSON.parse(localStorage.getItem('examos-errlog') || '[]')
    log.push({ m: String(e.message).slice(0, 200), t: Date.now(), src: (e.filename || '').slice(0, 80) })
    localStorage.setItem('examos-errlog', JSON.stringify(log.slice(-20)))
  } catch {}
  const t = document.createElement('div')
  t.className = 'toast'; t.setAttribute('role', 'status'); t.setAttribute('aria-live', 'polite')
  t.textContent = 'अनपेक्षित त्रुटि — अगर यह दोबारा हो तो रिफ्रेश करें'
  document.body.appendChild(t); setTimeout(() => t.remove(), 3500)
})
import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
createRoot(document.getElementById('root')).render(<App />)
if ('serviceWorker' in navigator) navigator.serviceWorker.register('./sw.js').catch(() => {})
