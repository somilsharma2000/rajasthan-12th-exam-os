import React, { useState, useRef, useEffect } from 'react'
import { HINDI_PASSAGES, ENGLISH_PASSAGES } from './passages.js'
import { scoreTyping, diffWords } from './scoring.js'
import { T } from '../i18n.js'

const LS_TY = 'examos-typing-history'
const loadTy = () => { try { return JSON.parse(localStorage.getItem(LS_TY)) || [] } catch { return [] } }
const pushTy = r => { try { const h = loadTy(); h.unshift(r); localStorage.setItem(LS_TY, JSON.stringify(h.slice(0, 30))) } catch {} }

const KEYS_PER_EXAM_MIN = 133 // 8000 KDPH / 60

export default function TypingTest({ lang, onHome }) {
  const t = T(lang)
  const [phase, setPhase] = useState('setup') // setup | test | result
  const [paper, setPaper] = useState('hi') // hi | en
  const [duration, setDuration] = useState(10)
  const [highlight, setHighlight] = useState(true)
  const [passage, setPassage] = useState(null)
  const [typed, setTyped] = useState('')
  const [left, setLeft] = useState(0)
  const [result, setResult] = useState(null)
  const taRef = useRef(null)
  const startedRef = useRef(null)
  const hist = loadTy()

  const start = () => {
    const pool = paper === 'hi' ? HINDI_PASSAGES : ENGLISH_PASSAGES
    const p = pool[Math.floor(Math.random() * pool.length)]
    setPassage(p); setTyped(''); setLeft(duration * 60); setPhase('test')
    startedRef.current = null
    setTimeout(() => taRef.current?.focus(), 50)
  }

  useEffect(() => {
    if (phase !== 'test') return
    const iv = setInterval(() => {
      if (!startedRef.current && typed.length) startedRef.current = Date.now()
      setLeft(l => {
        if (l <= 1) { clearInterval(iv); return 0 }
        return l - 1
      })
    }, 1000)
    return () => clearInterval(iv)
  }, [phase, typed.length]) // eslint-disable-line

  useEffect(() => { if (phase === 'test' && left === 0) finish() }, [left, phase]) // eslint-disable-line

  const finish = () => {
    const durSec = startedRef.current ? Math.max((Date.now() - startedRef.current) / 1000, 5) : duration * 60
    const r = scoreTyping(typed, passage.text, durSec)
    r.paper = paper; r.date = Date.now(); r.durationMin = duration; r.title = passage.title
    setResult(r); pushTy(r); setPhase('result')
  }

  const fmt = s => `${Math.floor(s / 60)}:${String(s % 60).padStart(2, '0')}`
  const el = Math.floor(left / 60), es = left % 60
  const elapsedMin = startedRef.current ? Math.min(duration, (Date.now() - startedRef.current) / 60000) : 0
  const liveKdph = Math.round(typed.length / Math.max(elapsedMin, 0.02))

  // setup screen
  if (phase === 'setup') return (
    <div className="wrap">
      <TopBar title={lang === 'hi' ? 'टाइपिंग टेस्ट' : 'Typing Test'} onHome={onHome} lang={lang} />
      <div className="card">
        <p className="sectionTitle" style={{ marginTop: 0 }}>{lang === 'hi' ? 'आरएसएसबी स्पीड टेस्ट (8000 KDPH)' : 'RSSB Speed Test (8000 KDPH)'}</p>
        <p className="note">{lang === 'hi'
          ? 'लिपिक ग्रेड-II / कनिष्ठ सहायक / आशुलिपिक की द्वितीय चरण की प्रणाली: प्रति घंटा 8000 कुंजी-अंकन की गति। अंक = (20/8000) × शुद्ध KDPH, अधिकतम 25। न्यूनतम उत्तीर्ण 9 अंक।'
          : 'LDC / Junior Assistant / Stenographer Phase-II standard: 8000 key depressions per hour. Marks = (20/8000) x Net KDPH, max 25. Qualifying: 9 marks.'}</p>
        <p className="note" style={{ color: 'var(--danger, #e11d48)' }}>{lang === 'hi'
          ? 'मोबाइल टच कीबोर्ड से स्पीड टेस्ट असंभव है — डेस्कटॉप या OTG/USB कीबोर्ड उपयोग करें।'
          : 'Speed test requires a physical keyboard — use desktop or attach a USB/OTG keyboard.'}</p>
      </div>
      <div className="card">
        <p className="sectionTitle" style={{ marginTop: 0 }}>{lang === 'hi' ? 'पेपर चुनें' : 'Choose paper'}</p>
        <div className="row" style={{ marginTop: 0 }}>
          <button className={paper === 'hi' ? 'subBtn on' : 'subBtn'} onClick={() => setPaper('hi')} style={{ flex: 1 }}>{lang === 'hi' ? 'हिंदी' : 'Hindi'}</button>
          <button className={paper === 'en' ? 'subBtn on' : 'subBtn'} onClick={() => setPaper('en')} style={{ flex: 1 }}>{lang === 'hi' ? 'अंग्रेज़ी' : 'English'}</button>
        </div>
        <p className="sectionTitle">{lang === 'hi' ? 'समय' : 'Duration'}</p>
        <div className="row" style={{ marginTop: 0 }}>
          {[2, 5, 10, 15].map(m => <button key={m} className={duration === m ? 'subBtn on' : 'subBtn'} onClick={() => setDuration(m)} style={{ flex: 1 }}><em>{m}m</em></button>)}
        </div>
        <label className="note" style={{ display: 'flex', gap: 8, alignItems: 'center', marginTop: 12 }}>
          <input type="checkbox" checked={highlight} onChange={e => setHighlight(e.target.checked)} />
          {lang === 'hi' ? 'वर्ड हाइलाइट (प्रैक्टिस मोड; परीक्षा में बंद रहता है)' : 'Word highlight (practice; OFF in real exam)'}
        </label>
      </div>
      <button className="modeCard hero" onClick={start}>
        <span className="t">{lang === 'hi' ? 'टेस्ट शुरू करें' : 'Start test'}</span>
        <span className="d">{paper === 'hi' ? 'हिंदी' : 'English'} · {duration}m · {highlight ? (lang === 'hi' ? 'हाइलाइट ऑन' : 'highlight ON') : (lang === 'hi' ? 'हाइलाइट ऑफ (परीक्षा-जैसा)' : 'highlight OFF (exam-real)')}</span>
      </button>
      {hist.length > 0 && <div className="card">
        <p className="sectionTitle" style={{ marginTop: 0 }}>{lang === 'hi' ? 'हाल के प्रयास' : 'Recent attempts'}</p>
        {hist.slice(0, 6).map((h, i) => <div key={i} className="listRow"><b>{h.paper === 'hi' ? 'हिंदी' : 'English'} · {h.marks}/25</b><div>{h.netKdph} KDPH · {h.netWpm} WPM · {h.accuracy}%</div></div>)}
      </div>}
      <div className="dock"><div className="row"><button className="ghost" onClick={onHome}>{t.back}</button></div></div>
    </div>
  )

  // result screen
  if (phase === 'result') { const r = result; return (
    <div className="wrap">
      <TopBar title={lang === 'hi' ? 'टाइपिंग परिणाम' : 'Typing Result'} onHome={onHome} lang={lang} />
      <div className="featured">
        <div className="head"><h2>{r.marks}/25 {lang === 'hi' ? 'अंक' : 'marks'}</h2>
          <span className={r.qualifying ? 'trust' : ''} style={r.qualifying ? {} : { color: '#e11d48' }}>{r.qualifying ? (lang === 'hi' ? '✓ उत्तीर्ण (36%)' : '✓ Qualifying (36%)') : (lang === 'hi' ? '✗ अनुत्तीर्ण' : '✗ Not qualifying')}</span></div>
        <div className="stats">
          <div className="stat"><b>{r.netKdph}</b><span>{lang === 'hi' ? 'शुद्ध KDPH (लक्ष्य 8000)' : 'Net KDPH (target 8000)'}</span></div>
          <div className="stat"><b>{r.grossKdph}</b><span>{lang === 'hi' ? 'सकल KDPH' : 'Gross KDPH'}</span></div>
          <div className="stat"><b>{r.netWpm}</b><span>{lang === 'hi' ? 'शुद्ध WPM' : 'Net WPM'}</span></div>
          <div className="stat"><b>{r.accuracy}%</b><span>{lang === 'hi' ? 'शुद्धता' : 'Accuracy'}</span></div>
          <div className="stat"><b>{r.errors}</b><span>{lang === 'hi' ? 'त्रुटि शब्द (प्रति शब्द −5)' : 'Error words (−5 each)'}</span></div>
          <div className="stat"><b>{r.grossKeystrokes}</b><span>{lang === 'hi' ? 'कुंजी-अंकन' : 'Keystrokes'}</span></div>
        </div>
      </div>
      <div className="card">
        <p className="sectionTitle" style={{ marginTop: 0 }}>{lang === 'hi' ? 'शब्द-स्तरीय समीक्षा' : 'Word-level review'}</p>
        <div style={{ lineHeight: 1.9 }}>
          {diffWords(typed, passage.text).slice(0, 120).map((w, i) => (
            <span key={i} style={{ color: w.ok ? 'var(--tx-2, #9aa0a6)' : '#e11d48', textDecoration: w.ok ? 'none' : 'underline' }}>
              {(w.typed !== undefined ? w.typed : '␣') }{' '}
            </span>
          ))}
        </div>
        <p className="note">{lang === 'hi' ? 'लाल = त्रुटि शब्द। परीक्षा सूत्र: अंक = (20/8000) × शुद्ध KDPH; प्रत्येक त्रुटि शब्द पर 5 कुंजी-अंकन की कटौती।' : 'Red = error words. Exam formula: marks = (20/8000) x Net KDPH; 5 keystrokes deducted per error word.'}</p>
      </div>
      <div className="dock"><div className="row">
        <button className="ghost" onClick={onHome}>{t.back}</button>
        <button className="heroBtn" onClick={() => setPhase('setup')}>{lang === 'hi' ? 'फिर से' : 'Retry'}</button>
      </div></div>
    </div>
  )}

  // test screen — split-pane, exam-real
  const words = passage.text.split(' ')
  const typedWordCount = typed.trim() ? typed.trim().split(/\s+/).length : 0
  return (
    <div className="wrap" style={{ maxWidth: 860 }}>
      <TopBar title={passage.title} onHome={() => { if (confirm(lang === 'hi' ? 'टेस्ट छोड़ें?' : 'Exit test?')) onHome() }} lang={lang} />
      <div className="row" style={{ justifyContent: 'space-between', alignItems: 'center' }}>
        <div className="timer">{el}:{String(es).padStart(2, '0')}</div>
        <div className="note">{lang === 'hi' ? 'कुंजी-अंकन' : 'Keystrokes'}: <b>{typed.length}</b> · {lang === 'hi' ? 'लाइव' : 'live'} {liveKdph > 0 && typed.length > 20 ? liveKdph + ' KDPH' : '—'}</div>
        <button className="ghost" onClick={finish}>{lang === 'hi' ? 'सबमिट' : 'Submit'}</button>
      </div>
      <div className="card" style={{ maxHeight: '38vh', overflowY: 'auto', lineHeight: 2, fontSize: 15 }}>
        {highlight
          ? words.map((w, i) => <span key={i} style={i === typedWordCount ? { background: '#7C3AED33', borderRadius: 3 } : {}}>{w} </span>)
          : passage.text}
      </div>
      <textarea
        ref={taRef}
        className="typeArea"
        value={typed}
        onChange={e => setTyped(e.target.value)}
        placeholder={lang === 'hi' ? 'यहाँ टाइप करें…' : 'Type here…'}
        spellCheck={false}
        autoCapitalize="off"
        autoComplete="off"
      />
      <p className="note">{lang === 'hi'
        ? 'बैकस्पेस अनुमत्य है। परीक्षा में वर्ड-हाइलाइट नहीं होता — प्रैक्टिस में ऑफ रखें। रेमिंगटन GAIL कीबोर्ड का उपयोग करें।'
        : 'Backspace allowed. Real exam has no word-highlight — keep it OFF in practice. Use Remington GAIL layout for Hindi.'}</p>
    </div>
  )
}

function TopBar({ title, onHome, lang }) {
  return (
    <div className="bar">
      <button className="iconBtn" onClick={onHome}>←</button>
      <b>{title}</b>
      <span />
    </div>
  )
}
