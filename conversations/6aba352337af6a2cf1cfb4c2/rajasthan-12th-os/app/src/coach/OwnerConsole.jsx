import React, { useState, useEffect } from 'react'
import { TopBar } from '../App.jsx'

const SS_TOKEN = 'rjx-owner-token' // sessionStorage: session-only, never persisted to disk
const EP = (import.meta.env.VITE_COACH_URL || '').replace(/\/$/, '')

// OWNER CONSOLE (hidden admin panel). This is where backend operations live —
// students NEVER see this screen or any configuration. All actions are verified
// server-side by the Cloudflare Worker (Bearer ADMIN_TOKEN), so this UI being
// in the client bundle changes nothing about who can actually administer:
// a wrong/missing token is rejected by the worker itself.
//
// Opens from Home: tap the footer data-snapshot line 5x quickly.
export default function OwnerConsole({ lang, onHome, toggleLang, t }) {
  const hi = lang === 'hi'
  const [token, setToken] = useState(() => { try { return sessionStorage.getItem(SS_TOKEN) || '' } catch { return '' } })
  const [draftToken, setDraftToken] = useState('')
  const [status, setStatus] = useState(null)
  const [busy, setBusy] = useState(false)
  const [err, setErr] = useState('')
  const [capDraft, setCapDraft] = useState('')

  const saveToken = (v) => { try { if (v) sessionStorage.setItem(SS_TOKEN, v); else sessionStorage.removeItem(SS_TOKEN) } catch {} setToken(v) }
  const authedFetch = async (path, method = 'GET', body) => {
    const r = await fetch(EP + path, { method, headers: { Authorization: `Bearer ${token}`, 'Content-Type': 'application/json' }, body: body ? JSON.stringify(body) : undefined })
    if (r.status === 401) throw new Error('unauthorized')
    if (!r.ok) throw new Error('http_' + r.status)
    return r.json()
  }

  const refresh = async () => {
    if (!EP || !token) return
    setBusy(true); setErr('')
    try { const s = await authedFetch('/admin/status'); setStatus(s); setCapDraft(String(s.dailyCapPerStudent || '')) } catch (e) { setErr(e.message === 'unauthorized' ? (hi ? 'टोकन गलत है।' : 'Wrong token.') : (hi ? 'वर्कर तक नहीं पहुँच सके।' : 'Could not reach the worker.')) }
    setBusy(false)
  }
  useEffect(() => { refresh() }, []) // eslint-disable-line

  const apply = async (body) => {
    setBusy(true); setErr('')
    try { const s = await authedFetch('/admin/config', 'POST', body); setStatus(cur => ({ ...(cur || {}), ...s })) } catch (e) { setErr(e.message === 'unauthorized' ? (hi ? 'टोकन गलत है।' : 'Wrong token.') : (hi ? 'सेव नहीं हुआ।' : 'Save failed.')) }
    setBusy(false)
  }

  const Cap = ({ label, children }) => <div className="card" style={{ padding: 14, marginTop: 10 }}>{label && <h3 style={{ margin: '0 0 8px' }}>{label}</h3>}{children}</div>

  return (
    <div>
      <TopBar title={hi ? 'ओनर कंसोल' : 'Owner Console'} t={t} lang={lang} toggleLang={toggleLang} onHome={onHome} />
      <div className="wrap">
        {!EP ? (
          <Cap>
            <p className="note">{hi
              ? 'बैकएंड वर्कर अभी इस बिल्ड में कनेक्ट नहीं है (VITE_COACH_URL सेट नहीं)। वर्कर डिप्लॉय करके री-बिल्ड करने पर यहाँ कंट्रोल दिखेंगे।'
              : 'No backend worker connected to this build (VITE_COACH_URL unset). After the worker is deployed and the app is rebuilt, controls appear here.'}</p>
          </Cap>
        ) : !token ? (
          <Cap label={hi ? 'एडमिन टोकन डालें' : 'Enter admin token'}>
            <p className="note">{hi ? 'टोकन सिर्फ़ इस सेशन में रहता है (sessionStorage) — डिवाइस पर सेव नहीं होता।' : 'The token stays in sessionStorage only — never written to persistent storage.'}</p>
            <div className="row">
              <input className="coachInput" type="password" value={draftToken} onChange={e => setDraftToken(e.target.value)} placeholder="ADMIN_TOKEN" />
              <button className="primary" onClick={() => { saveToken(draftToken.trim()); setDraftToken(''); }}>{hi ? 'सेव' : 'Save'}</button>
            </div>
          </Cap>
        ) : (
          <>
            <Cap label={hi ? 'AI कोच' : 'AI Coach'}>
              {status ? (
                <>
                  <div className="row" style={{ justifyContent: 'space-between' }}>
                    <span className="note">{hi ? 'स्थिति' : 'Status'}: <b style={{ color: status.enabled ? 'var(--ok, #22c55e)' : 'var(--danger)' }}>{status.enabled ? (hi ? 'चालू' : 'ON') : (hi ? 'बंद' : 'OFF')}</b></span>
                    <button className="ghost" disabled={busy} onClick={() => apply({ enabled: !status.enabled })}>{status.enabled ? (hi ? 'बंद करें' : 'Disable') : (hi ? 'चालू करें' : 'Enable')}</button>
                  </div>
                  <div className="row" style={{ justifyContent: 'space-between', marginTop: 8 }}>
                    <span className="note">{hi ? 'प्रति-छात्र दैनिक सीमा' : 'Per-student daily cap'}</span>
                    <span className="row">
                      <input className="coachInput" style={{ width: 70 }} value={capDraft} onChange={e => setCapDraft(e.target.value.replace(/[^0-9]/g, ''))} inputMode="numeric" aria-label={hi ? 'दैनिक सीमा' : 'daily cap'} />
                      <button className="ghost" disabled={busy || !capDraft} onClick={() => apply({ dailyCap: parseInt(capDraft, 10) })}>{hi ? 'सेट' : 'Set'}</button>
                    </span>
                  </div>
                  <p className="note" style={{ marginTop: 8 }}>{hi ? 'आज के अनुरोध (सभी छात्र)' : 'Requests today (all students)'}: <b>{status.requestsToday ?? '—'}</b></p>
                </>
              ) : (
                <p className="note">{busy ? (hi ? 'लोड हो रहा है…' : 'Loading…') : err}</p>
              )}
              {err && status && <p className="note" style={{ color: 'var(--danger)' }}>{err}</p>}
            </Cap>
            <div className="row" style={{ marginTop: 10 }}>
              <button className="ghost" onClick={refresh} disabled={busy}>{hi ? 'रिफ्रेश' : 'Refresh'}</button>
              <button className="ghost" onClick={() => { saveToken(''); setStatus(null); setErr('') }}>{hi ? 'टोकन हटाएँ' : 'Clear token'}</button>
            </div>
          </>
        )}
      </div>
    </div>
  )
}
