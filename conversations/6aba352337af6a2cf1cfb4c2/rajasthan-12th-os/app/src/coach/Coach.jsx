import React, { useState, useEffect, useRef } from 'react'
import { T } from '../i18n.js'

const LS_EP = 'examos-coach-endpoint'
const LS_USAGE = 'examos-coach-usage'
const DAILY_CAP = 15

// AI COACH — doubt-resolution panel. Security model: the LLM API key NEVER lives
// in this client. The client talks to a serverless proxy (Cloudflare Worker in
// serverless/ai-coach-worker.js) that holds the key, enforces per-student daily
// caps, and scopes answers to the current question. Until the proxy endpoint is
// configured, the panel shows an honest setup state — no fake replies.
export default function Coach({ lang, context, onClose }) {
  const t = T(lang)
  const [endpoint, setEndpoint] = useState(() => { try { return localStorage.getItem(LS_EP) || '' } catch { return '' } })
  const [draftEp, setDraftEp] = useState('')
  const [msgs, setMsgs] = useState([])
  const [input, setInput] = useState('')
  const [busy, setBusy] = useState(false)
  const [err, setErr] = useState('')
  const boxRef = useRef(null)

  const [used, setUsed] = useState(() => {
    try { const u = JSON.parse(localStorage.getItem(LS_USAGE)); return u && u.date === new Date().toDateString() ? u.count : 0 } catch { return 0 }
  })
  const bumpUsage = () => {
    const u = { date: new Date().toDateString(), count: used + 1 }
    try { localStorage.setItem(LS_USAGE, JSON.stringify(u)) } catch {}
    setUsed(u.count)
  }

  useEffect(() => { boxRef.current?.scrollTo(0, 1e6) }, [msgs.length, busy])
  useEffect(() => {
    const esc = (e) => { if (e.key === 'Escape') onClose() }
    window.addEventListener('keydown', esc)
    return () => window.removeEventListener('keydown', esc)
  }, [onClose])

  const send = async () => {
    const text = input.trim(); if (!text || busy || used >= DAILY_CAP) return
    setInput(''); setErr('')
    const next = [...msgs, { role: 'user', text }]
    setMsgs(next); setBusy(true)
    try {
      const r = await fetch(endpoint, {
        method: 'POST', headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ context, history: next.slice(-6), lang })
      })
      if (!r.ok) throw new Error('HTTP ' + r.status)
      const data = await r.json()
      if (!data.reply) throw new Error('no reply')
      setMsgs(m => [...m, { role: 'coach', text: data.reply }])
      bumpUsage()
    } catch (e) {
      setErr(lang === 'hi' ? 'कोच उत्तर नहीं दे पाया। बाद में फिर कोशिश करें।' : 'Coach unavailable. Try again later.')
    }
    setBusy(false)
  }

  const hi = lang === 'hi'

  return (
    <div className="paletteOverlay" onClick={onClose}>
      <div className="paletteSheet" onClick={e => e.stopPropagation()} style={{ maxWidth: 640 }}>
        <div className="row" style={{ justifyContent: 'space-between', alignItems: 'center' }}>
          <h3 style={{ margin: 0 }}>{hi ? 'AI कोच' : 'AI Coach'} <span className="note" style={{ display: 'inline' }}>· {used}/{DAILY_CAP}</span></h3>
          <button className="iconBtn" onClick={onClose}>✕</button>
        </div>

        {!endpoint ? (
          <div style={{ marginTop: 14 }}>
            <p className="note">{hi
              ? 'कोच अभी सेट नहीं है। यह ऐप बिना बैकएंड के चलता है, इसलिए AI की API key सुरक्षित रखने के लिए एक छोटा सर्वर-प्रॉक्सी चाहिए (कोड रिपो में serverless/ai-coach-worker.js)। प्रॉक्सी का URL यहाँ डालें:'
              : 'Coach not configured. This app runs without a backend, so the AI key must stay behind a serverless proxy (code: serverless/ai-coach-worker.js in the repo). Paste your proxy URL:'}</p>
            <div className="row">
              <input className="coachInput" placeholder="https://…workers.dev" value={draftEp} onChange={e => setDraftEp(e.target.value)} />
              <button className="primary" onClick={() => { if (draftEp.startsWith('https://')) { localStorage.setItem(LS_EP, draftEp); setEndpoint(draftEp) } }}>{hi ? 'सेव' : 'Save'}</button>
            </div>
          </div>
        ) : (
          <>
            <div ref={boxRef} className="coachBox">
              {msgs.length === 0 && <p className="note">{hi ? 'प्रश्न के बारे में पूछें — कोच को पूरा प्रश्न, विकल्प और व्याख्या दिख रही है।' : 'Ask about this question — the coach sees the full question, options and explanation.'}</p>}
              {msgs.map((m, i) => <div key={i} className={'coachMsg ' + (m.role === 'user' ? 'me' : '')}>{m.text}</div>)}
              {busy && <div className="note">{hi ? 'सोच रहा है…' : 'Thinking…'}</div>}
              {err && <div className="note" style={{ color: '#e11d48' }}>{err}</div>}
            </div>
            <div className="row" style={{ marginTop: 10 }}>
              <input className="coachInput" value={input} onChange={e => setInput(e.target.value)}
                onKeyDown={e => { if (e.key === 'Enter') send() }}
                placeholder={hi ? 'अपना सवाल लिखें…' : 'Type your question…'}
                disabled={used >= DAILY_CAP} />
              <button className="primary" onClick={send} disabled={busy || used >= DAILY_CAP || !input.trim()}>{hi ? 'भेजें' : 'Send'}</button>
            </div>
            {used >= DAILY_CAP && <p className="note" style={{ color: '#e11d48' }}>{hi ? 'आज की सीमा पूरी हो गई। कल फिर पूछें।' : 'Daily limit reached. Come back tomorrow.'}</p>}
          </>
        )}
      </div>
    </div>
  )
}
