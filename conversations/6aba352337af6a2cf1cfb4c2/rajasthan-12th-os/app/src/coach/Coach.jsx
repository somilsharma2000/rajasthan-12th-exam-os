import React, { useState, useEffect, useRef } from 'react'
import { T } from '../i18n.js'

const LS_USAGE = 'examos-coach-usage'
const LOCAL_DAILY_CAP = 15 // client-side UX cap only; the worker's own cap is the real cost control

// AI COACH — doubt-resolution panel. Security model: the LLM API key NEVER lives
// in this client. The client talks to a serverless proxy (Cloudflare Worker in
// serverless/ai-coach-worker.js) that holds the key, enforces per-student daily
// caps, and scopes answers to the current question. The endpoint is baked in at
// build time (VITE_COACH_URL) once the worker is deployed — students never see
// or configure any backend detail. If the endpoint isn't set, or the owner has
// disabled the coach from the Owner Console, this panel shows a plain,
// non-technical "unavailable" message — never a setup form, never a fake reply.
export default function Coach({ lang, context, onClose }) {
  const t = T(lang)
  const endpoint = import.meta.env.VITE_COACH_URL || ''
  const [remoteEnabled, setRemoteEnabled] = useState(true) // optimistic; corrected by /public/config below
  const [checkedRemote, setCheckedRemote] = useState(false)
  const [msgs, setMsgs] = useState([])
  const [input, setInput] = useState('')
  const [busy, setBusy] = useState(false)
  const [err, setErr] = useState('')
  const boxRef = useRef(null)
  const panelRef = useRef(null)

  const [used, setUsed] = useState(() => {
    try { const u = JSON.parse(localStorage.getItem(LS_USAGE)); return u && u.date === new Date().toDateString() ? u.count : 0 } catch { return 0 }
  })
  const bumpUsage = () => {
    const u = { date: new Date().toDateString(), count: used + 1 }
    try { localStorage.setItem(LS_USAGE, JSON.stringify(u)) } catch {}
    setUsed(u.count)
  }

  // Check the (unauthenticated, safe-to-expose) public flag so a coach the owner
  // has paused from the Owner Console shows the same honest state immediately.
  useEffect(() => {
    if (!endpoint) { setCheckedRemote(true); return }
    let done = false
    fetch(endpoint.replace(/\/$/, '') + '/public/config').then(r => r.json()).then(d => {
      if (done) return
      setRemoteEnabled(d?.enabled !== false)
    }).catch(() => { /* network hiccup: stay optimistic, the real gate is server-side anyway */ }).finally(() => { if (!done) setCheckedRemote(true) })
    return () => { done = true }
  }, [endpoint])

  useEffect(() => { boxRef.current?.scrollTo(0, 1e6) }, [msgs.length, busy])
  useEffect(() => {
    const esc = (e) => { if (e.key === 'Escape') onClose() }
    window.addEventListener('keydown', esc)
    return () => window.removeEventListener('keydown', esc)
  }, [onClose])
  // A11Y: focus first control + trap Tab inside the sheet
  useEffect(() => {
    const el = panelRef.current; if (!el) return
    const first = el.querySelector('button, input, textarea'); if (first) first.focus()
    const onKey = (e) => {
      if (e.key !== 'Tab') return
      const items = [...el.querySelectorAll('button, input, textarea')].filter(x => !x.disabled)
      if (!items.length) return
      const f = items[0], l = items[items.length - 1]
      if (e.shiftKey && document.activeElement === f) { e.preventDefault(); l.focus() }
      else if (!e.shiftKey && document.activeElement === l) { e.preventDefault(); f.focus() }
    }
    el.addEventListener('keydown', onKey)
    return () => el.removeEventListener('keydown', onKey)
  }, [])

  const available = !!endpoint && remoteEnabled

  const send = async () => {
    const text = input.trim(); if (!text || busy || used >= LOCAL_DAILY_CAP || !available) return
    setInput(''); setErr('')
    const next = [...msgs, { role: 'user', text }]
    setMsgs(next); setBusy(true)
    try {
      const r = await fetch(endpoint, {
        method: 'POST', headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ context, history: next.slice(-6), lang })
      })
      if (r.status === 503) { setRemoteEnabled(false); throw new Error('disabled') }
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
      <div className="paletteSheet" ref={panelRef} onClick={e => e.stopPropagation()} style={{ maxWidth: 640 }}>
        <div className="row" style={{ justifyContent: 'space-between', alignItems: 'center' }}>
          <h3 style={{ margin: 0 }}>{hi ? 'AI कोच' : 'AI Coach'} {available && <span className="note" style={{ display: 'inline' }}>· {used}/{LOCAL_DAILY_CAP}</span>}</h3>
          <button className="iconBtn" onClick={onClose} aria-label={hi ? 'बंद करें' : 'Close'}>✕</button>
        </div>

        {!checkedRemote ? (
          <p className="note" style={{ marginTop: 14 }}>{hi ? 'लोड हो रहा है…' : 'Loading…'}</p>
        ) : !available ? (
          <div style={{ marginTop: 14 }}>
            <p className="note">{hi
              ? 'AI कोच अभी उपलब्ध नहीं है। कृपया थोड़ी देर बाद कोशिश करें।'
              : 'AI Coach isn\u2019t available right now. Please check back soon.'}</p>
          </div>
        ) : (
          <>
            <div ref={boxRef} className="coachBox">
              {msgs.length === 0 && <p className="note">{hi ? 'प्रश्न के बारे में पूछें — कोच को पूरा प्रश्न, विकल्प और व्याख्या दिख रही है।' : 'Ask about this question — the coach sees the full question, options and explanation.'}</p>}
              {msgs.map((m, i) => <div key={i} className={'coachMsg ' + (m.role === 'user' ? 'me' : '')}>{m.text}</div>)}
              {busy && <div className="note">{hi ? 'सोच रहा है…' : 'Thinking…'}</div>}
              {err && <div className="note" style={{ color: 'var(--danger)' }}>{err}</div>}
            </div>
            <div className="row" style={{ marginTop: 10 }}>
              <input className="coachInput" value={input} onChange={e => setInput(e.target.value)}
                onKeyDown={e => { if (e.key === 'Enter') send() }}
                placeholder={hi ? 'अपना सवाल लिखें…' : 'Type your question…'}
                disabled={used >= LOCAL_DAILY_CAP} />
              <button className="primary" onClick={send} disabled={busy || used >= LOCAL_DAILY_CAP || !input.trim()}>{hi ? 'भेजें' : 'Send'}</button>
            </div>
            {used >= LOCAL_DAILY_CAP && <p className="note" style={{ color: 'var(--danger)' }}>{hi ? 'आज की सीमा पूरी हो गई। कल फिर पूछें।' : 'Daily limit reached. Come back tomorrow.'}</p>}
          </>
        )}
      </div>
    </div>
  )
}
