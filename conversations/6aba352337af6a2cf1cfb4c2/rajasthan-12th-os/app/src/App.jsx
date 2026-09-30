import React, { useState, useEffect, useCallback, useRef, lazy, Suspense } from 'react'
import { EXAMS, SHELF } from './data/exams.js'
import { BANK_META } from './data/bank-meta.js'
import { HUBS, AS_OF } from './data/hubs.js'
import { GLOSSARY } from './data/glossary.js'
import { T } from './i18n.js'
const TypingTest = lazy(() => import('./typing/TypingTest.jsx'))
const Coach = lazy(() => import('./coach/Coach.jsx'))
import { SUBJECT_LABELS, buildSession, scoreSession, fmtTime } from './engine.js'

const VERSION_NOTE = { hi: 'डेटा स्नैपशॉट: 30 सितंबर 2026 · प्रश्न-बैंक पाइपलाइन से बढ़ रहा है', en: 'Data snapshot: 30 Sep 2026 · question bank growing via pipeline' }

const LS_KEY = 'examos-active-mock'
function saveActive(session, idx) {
  try {
    if (!session || session.mode !== 'mock') return
    localStorage.setItem(LS_KEY, JSON.stringify({ examId: session.examId, mode: session.mode, ids: session.questions.map(q => q.id), answers: session.answers, idx, startedAt: session.startedAt, elapsedMs: Date.now() - session.startedAt }))
  } catch {}
}
function loadActive() { try { return JSON.parse(localStorage.getItem(LS_KEY)) } catch { return null } }
function clearActive() { try { localStorage.removeItem(LS_KEY) } catch {} }
const LS_HIST = 'examos-history', LS_BM = 'examos-bookmarks', LS_ERR = 'examos-error-book'
function loadErr() { try { return JSON.parse(localStorage.getItem(LS_ERR)) || {} } catch { return {} } }
function saveErr(eb) { try { localStorage.setItem(LS_ERR, JSON.stringify(eb)) } catch {} }
const REV_LADDER = [1, 3, 7, 15, 30] // days; wrongCount picks the rung (capped)
function updateErrorBook(session) {
  try {
    const eb = loadErr()
    for (const q of session.questions) {
      const a = session.answers[q.id]
      const attempted = a && a.choice !== null && a.choice !== undefined
      const wasWrong = attempted ? a.choice !== q.answer : true // skipped also lands in revision
      if (!wasWrong) continue
      const rec = eb[q.id] || { wrongCount: 0, subject: q.subject }
      rec.wrongCount++
      rec.lastWrongAt = Date.now()
      rec.nextReviewAt = Date.now() + (REV_LADDER[Math.min(rec.wrongCount - 1, REV_LADDER.length - 1)] * 86400000)
      rec.skipped = !attempted
      eb[q.id] = rec
    }
    saveErr(eb)
  } catch {}
}
function loadHist() { try { return JSON.parse(localStorage.getItem(LS_HIST)) || [] } catch { return [] } }
function pushHist(rec) { try { const h = loadHist(); if (h.some(x => x.key === rec.key)) return; h.unshift(rec); localStorage.setItem(LS_HIST, JSON.stringify(h.slice(0, 50))) } catch {} }
function loadBM() { try { return JSON.parse(localStorage.getItem(LS_BM)) || [] } catch { return [] } }
function saveBM(ids) { try { localStorage.setItem(LS_BM, JSON.stringify(ids)) } catch {} }

// Only exams whose OWN paper's real PYQs exist in bank (id prefixes: cet24-, ldc24-, pol22-, sten24-)
const PYQ_PREFIX = { 'cet-12th': 'cet', 'ldc-junior-assistant': 'ldc', 'police-constable': 'pol', 'stenographer': 'sten' }

const EXAM_ICON = {
  hi: { 'cet-12th': 'सी', 'ldc-junior-assistant': 'एल', 'police-constable': 'पु', 'forester': 'वन', 'jail-prahari': 'जे', 'hostel-superintendent': 'हॉ', 'jamadar-excise': 'ज', 'lab-assistant': 'लै', 'agriculture-supervisor': 'कृ', 'reet-level1': 'री', 'stenographer': 'स्टे', 'librarian-grade3': 'पु' },
  en: { 'cet-12th': 'C', 'ldc-junior-assistant': 'L', 'police-constable': 'P', 'forester': 'F', 'jail-prahari': 'J', 'hostel-superintendent': 'H', 'jamadar-excise': 'E', 'lab-assistant': 'LA', 'agriculture-supervisor': 'A', 'reet-level1': 'R', 'stenographer': 'S', 'librarian-grade3': 'LB' }
}

// ICONS: stroke-based, currentColor — replaces emoji glyphs (visual audit 2026-10-01)
const SW = '1.6'
function Ic({ d, size = 18, fill = 'none' }) {
  return <svg width={size} height={size} viewBox="0 0 24 24" fill={fill} stroke="currentColor" strokeWidth={SW} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" style={{ flex: 'none' }}>{d}</svg>
}
export const IcKeyboard = () => <Ic d={<><rect x="2" y="6" width="20" height="12" rx="2" /><path d="M6 10h.01M10 10h.01M14 10h.01M18 10h.01M6 14h.01M18 14h.01M9 14h6" /></>} />
export const IcBook = () => <Ic d={<><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" /><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" /></>} />
export const IcChart = () => <Ic d={<><path d="M3 3v18h18" /><path d="M7 15l4-6 4 4 5-8" /></>} />
export const IcStar = ({ fill = 'none' }) => <Ic fill={fill} d={<><path d="M12 2.5l2.9 6 6.6.9-4.8 4.6 1.2 6.5-5.9-3.2-5.9 3.2 1.2-6.5L2.5 9.4l6.6-.9z" /></>} />
export const IcRefresh = () => <Ic d={<><path d="M21 12a9 9 0 1 1-2.6-6.4" /><path d="M21 3v6h-6" /></>} />
export const IcGrid = () => <Ic d={<><rect x="3" y="3" width="7" height="7" rx="1" /><rect x="14" y="3" width="7" height="7" rx="1" /><rect x="3" y="14" width="7" height="7" rx="1" /><rect x="14" y="14" width="7" height="7" rx="1" /></>} />
export const IcPencil = () => <Ic d={<><path d="M12 20h9" /><path d="M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4z" /></>} />
export const IcTimer = () => <Ic d={<><circle cx="12" cy="13" r="8" /><path d="M12 9v4l2.5 2.5M9 2h6" /></>} />

export default function App() {
  const [lang, setLang] = useState(() => { try { return localStorage.getItem('rjx-lang') === 'en' ? 'en' : 'hi' } catch { return 'hi' } })
  const [screen, setScreen] = useState('home') // home | hub | setup | player | result | glossary | progress | saved | errorbook
  const [exam, setExam] = useState(null)
  const [session, setSession] = useState(null)
  const [resumable, setResumable] = useState(null)
  const [appToast, setAppToast] = useState('')
  const [onboardDone, setOnboardDone] = useState(() => { try { return !!localStorage.getItem('rjx-onboard') } catch { return true } }) // hooks-rule: must run before any conditional return
  const appToastTimer = useRef(null)
  const toastApp = (msg) => { setAppToast(msg); clearTimeout(appToastTimer.current); appToastTimer.current = setTimeout(() => setAppToast(''), 3000) }
  const [bms, setBms] = useState([])
  useEffect(() => { setBms(loadBM()) }, [])
  // ROUTING (audit F2): browser Back must not silently exit the app mid-session.
  // Sentinel pattern: one pushed entry per app lifetime; popstate = "go one screen back".
  useEffect(() => {
    try { history.replaceState({ examos: 'root' }, ''); history.pushState({ examos: 'guard' }, '') } catch {}
    const onPop = () => {
      try { history.pushState({ examos: 'guard' }, '') } catch {} // keep intercepting
      setScreen(cur => {
        if (cur === 'player' || cur === 'result') {
          // answered work in progress → ask, don't discard
          window.dispatchEvent(new CustomEvent('examos-back'))
          return cur
        }
        if (cur === 'home') return cur
        return 'home'
      })
    }
    window.addEventListener('popstate', onPop)
    return () => window.removeEventListener('popstate', onPop)
  }, [])
  // LAZY BANK: heavy question-bank chunk loads after first paint; shell renders from tiny BANK_META.
  const bankRef = useRef(null)
  const [bank, setBank] = useState(null)
  const [bankLoading, setBankLoading] = useState(false)
  const ensureBank = useCallback(() => { bankRef.current ||= import('./data/bank/index.js'); return bankRef.current }, [])
  useEffect(() => { ensureBank().then(setBank) }, [ensureBank])
  const toggleBookmark = (id) => setBms(prev => {
    const next = prev.includes(id) ? prev.filter(x => x !== id) : [...prev, id]
    saveBM(next); return next
  })
  const recordAttempt = (session, r) => {
    updateErrorBook(session) // persistent error book + revision schedule, all modes
    if (session.mode !== 'mock') return
    pushHist({
      key: session.startedAt + '-' + session.examId,
      examId: session.examId, examName: session.config.name.hi,
      date: Date.now(), score: Math.round(r.score * 100) / 100,
      max: r.total * session.config.pattern.marksPerQuestion,
      accuracy: r.accuracy, correct: r.correct, wrong: r.wrong, total: r.total
    })
  }
  useEffect(() => {
    // Validate BEFORE offering resume: reject unknown exam, expired timer, empty ids (state-audit 2026-10-01)
    const a = loadActive()
    if (a && a.ids && a.ids.length) {
      const ex = EXAMS.find(e => e.id === a.examId)
      const durMs = (ex?.pattern?.durationMin || 0) * 60000
      const expired = durMs > 0 && (a.elapsedMs || 0) >= durMs
      if (ex && !expired) setResumable(a)
      else clearActive() // stale/corrupt state silently cleaned, fresh start offered
    }
  }, [])
  const resumeMock = async () => {
    const ex = EXAMS.find(e => e.id === resumable.examId)
    if (!ex) { clearActive(); setResumable(null); return }
    const b = await ensureBank()
    const byId = Object.fromEntries(b.ALL_QUESTIONS.map(q => [q.id, q]))
    const questions = resumable.ids.map(id => byId[id]).filter(Boolean)
    if (!questions.length) { // ids no longer in bank (stale snapshot) — never enter Player with empty questions
      clearActive(); setResumable(null)
      toastApp(lang === 'hi' ? 'यह सत्र अमान्य हो गया — नया टेस्ट शुरू करें' : 'Session invalid — start a fresh test')
      return
    }
    // Resume from REMAINING time: rebuild startedAt from saved active-elapsed so backgrounded/sleep time is not counted (fixes instant auto-submit)
    setSession({ examId: ex.id, mode: 'mock', lang, questions, answers: resumable.answers || {}, startedAt: Date.now() - (resumable.elapsedMs || 0), submitted: false, config: ex })
    setResumable(null); setScreen('player')
  }
  const t = T(lang)
  const toggleLang = () => setLang(l => { const n = l === 'hi' ? 'en' : 'hi'; try { localStorage.setItem('rjx-lang', n) } catch {} return n })

  const ex_ok = q => q.verification !== 'UNVERIFIED' && !(q.provenance && q.provenance.evidence && String(q.provenance.evidence).includes('QUARANTINED'))
  const availFor = ex => ex.subjects.reduce((n, s) => n + (BANK_META.bySubject[s] || 0), 0)
  const pyqFor = ex => {
    const pre = PYQ_PREFIX[ex.id]
    return pre ? (BANK_META.pyqByIdPrefix[pre] || 0) : 0
  }
  const startSession = async (mode, subject) => {
    setBankLoading(true)
    const b = await ensureBank()
    setBankLoading(false)
    const target = mode === 'mock' ? exam.pattern.totalQuestions : 10
    const pool = subject ? b.ALL_QUESTIONS.filter(q => ex_ok(q) && q.subject === subject) : b.ALL_QUESTIONS
    const s = buildSession(exam, pool, mode, lang, target)
    if (!s.questions.length) return
    s.config = exam
    setSession(s); setScreen('player')
  }

  const startErrSession = async () => {
    const eb = Object.values(loadErr())
    if (!eb.length) return
    const b = await ensureBank()
    const byId = Object.fromEntries(b.ALL_QUESTIONS.map(q => [q.id, q]))
    const dueIds = eb.filter(e => e.nextReviewAt <= Date.now()).map(e => e.id)
    const ids = (dueIds.length ? dueIds : eb.map(e => e.id)).filter(id => byId[id] && ex_ok(byId[id]))
    if (!ids.length) return
    const pool = ids.map(id => byId[id])
    const ex = exam || EXAMS.find(e => e.id === 'cet-12th') || EXAMS[0]
    const s = buildSession(ex, pool, 'practice', lang, Math.min(10, ids.length), ids)
    if (!s.questions.length) return
    s.config = ex
    setSession(s); setScreen('player')
  }

  if (screen === 'player') return <Player session={session} setSession={setSession} lang={lang} bookmarks={bms} toggleBookmark={toggleBookmark} onFinish={() => setScreen('result')} onExit={() => { setSession(null); setScreen('hub') }} />
  if (screen === 'result') return <Result session={session} lang={lang} onRecord={recordAttempt} onHome={() => { setSession(null); setScreen('home') }} onErrorReview={() => { setSession(null); setScreen('errorbook') }} onRetry={() => { const mode = session.mode; startSession(mode) }} />
  if (screen === 'progress') return <Progress lang={lang} onHome={() => setScreen('home')} />
  if (screen === 'saved') return <Saved lang={lang} bookmarks={bms} toggleBookmark={toggleBookmark} bank={bank} onHome={() => setScreen('home')} />
  if (screen === 'typing') return <Suspense fallback={<div className="wrap"><p className="note">{lang === 'hi' ? 'लोड हो रहा है…' : 'Loading…'}</p></div>}><TypingTest lang={lang} onHome={() => setScreen('home')} /></Suspense>
  if (screen === 'errorbook') return <ErrorBook lang={lang} onHome={() => setScreen('home')} onPractice={startErrSession} />
  const avail = exam ? availFor(exam) : 0
  if (screen === 'setup') return (
    <div className="wrap">
      <TopBar title={exam.name[lang]} t={t} lang={lang} toggleLang={toggleLang} onHome={() => setScreen('home')} />
      <div className="card">
        <PatternCard exam={exam} lang={lang} />
      </div>
      <p className="sectionTitle">{lang === 'hi' ? 'मोड चुनें' : 'Choose mode'}</p>
      <div className="row" style={{ marginTop: 0 }}>
        <button className="modeCard hero" onClick={() => startSession('practice')}>
          <span className="t"><IcPencil size={15} /> {t.practice}</span>
          <span className="d">{lang === 'hi' ? '10 मिश्रित प्रश्न · तुरंत व्याख्या · बिना टाइमर' : '10 mixed questions · instant explanations · no timer'}</span>
        </button>
        <button className="modeCard" onClick={() => startSession('mock')}>
          <span className="t"><IcTimer size={15} /> {t.mock}</span>
          <span className="d">{lang === 'hi' ? 'पूरा पैटर्न · टाइमर · नकारात्मक अंकन' : 'Full pattern · timer · negative marking'}</span>
        </button>
      </div>
      <p className="sectionTitle">{lang === 'hi' ? 'विषय-वार अभ्यास' : 'Subject-wise practice'}</p>
      <div className="subjects">
        {exam.subjects.map(sub => {
          const n = BANK_META.bySubject[sub] || 0
          return <button key={sub} className="subBtn" onClick={() => startSession('practice', sub)}>
            <span>{SUBJECT_LABELS[sub] ? SUBJECT_LABELS[sub][lang] : sub}</span><em>{n}</em>
          </button>
        })}
      </div>
      <p className="note">{VERSION_NOTE[lang]}</p>
      {bankLoading && <div className="note" style={{ textAlign: 'center' }}>{lang === 'hi' ? 'प्रश्न-बैंक लोड हो रहा है…' : 'Loading question bank…'}</div>}
      <div className="dock"><div className="row">
        <button className="ghost" onClick={() => setScreen('hub')}>{t.back}</button>
      </div></div>
    </div>
  )
  if (screen === 'hub') {
    const hub = HUBS[exam.id]
    const rows = [['qualification', 'पात्रता', 'Qualification'], ['stages', 'चयन प्रक्रिया', 'Selection process'], ['pay', 'वेतन स्तर', 'Pay']]
    return (
      <div className="wrap">
        <TopBar title={t.appName} t={t} lang={lang} toggleLang={toggleLang} onHome={() => setScreen('home')} />
        <div className="featured">
          <div className="head">
            <h2>{exam.name[lang]}</h2>
            {exam.verification === 'OFFICIAL_CONFIRMED' && <span className="trust">✓ {t.verified}</span>}
          </div>
          <div className="stats">
            <div className="stat"><b>{exam.pattern.totalQuestions}</b><span>{lang === 'hi' ? 'प्रश्न' : 'Qs'}</span></div>
            <div className="stat"><b>{exam.pattern.totalMarks}</b><span>{lang === 'hi' ? 'अंक' : 'Marks'}</span></div>
            <div className="stat"><b>{exam.pattern.durationMin}<small>m</small></b><span>{lang === 'hi' ? 'समय' : 'Time'}</span></div>
          </div>
          <p className="note" style={{ marginTop: 12 }}>{lang === 'hi' ? 'बैंक में उपलब्ध' : 'Available in bank'}: {avail} {lang === 'hi' ? 'सत्यापित प्रश्न' : 'verified questions'}</p>
        </div>
        {exam.pattern.questionCountVerified === 'PENDING_FINAL_LOCK' && <p className="warn">{lang === 'hi' ? 'प्रश्न-संख्या अंतिम लॉक लंबित — अंक-संरचना सत्यापित है' : 'Question count pending final lock - marks structure verified'}</p>}
        {hub && <div className="card">
          <h3 style={{ marginBottom: 10 }}>{t.examHub}</h3>
          {rows.map(([k, hi, en]) => <div key={k} className="hubRow"><b>{lang === 'hi' ? hi : en}:</b> <span>{hub[k][lang]}</span></div>)}
          <div className="hubRow"><b>{lang === 'hi' ? 'आधिकारिक पोर्टल' : 'Official portal'}:</b> <a href={hub.official} target="_blank" rel="noreferrer">{hub.official}</a></div>
          <p className="note">{AS_OF[lang]} · {exam.verification}</p>
        </div>}
        <div className="dock"><div className="row">
          <button className="ghost" onClick={() => setScreen('home')}>{t.back}</button>
          <button className="primary big dockNext" onClick={() => setScreen('setup')}>{t.start}</button>
        </div></div>
      </div>
    )
  }
  if (screen === 'glossary') return (
    <div className="wrap">
      <TopBar title={lang === 'hi' ? 'परीक्षा शब्दावली' : 'Exam Glossary'} t={t} lang={lang} toggleLang={toggleLang} onHome={() => setScreen('home')} />
      {GLOSSARY.map((g, i) => (
        <div key={i} className="listRow">
          <b>{g.t[lang]}</b>
          <div>{g.d[lang]}</div>
        </div>
      ))}
      <p className="note">{AS_OF[lang]}</p>
    </div>
  )
  // HOME
  const dueErr = Object.values(loadErr()).filter(e => e.nextReviewAt <= Date.now()).length
  const firstVisit = !onboardDone && !loadHist().length && !Object.keys(loadErr()).length && !loadBM().length
  const dismissOnboard = () => { try { localStorage.setItem('rjx-onboard', '1') } catch {} setOnboardDone(true) }
  return (
    <div className="wrap">
      <TopBar title={t.appName} t={t} lang={lang} toggleLang={toggleLang} />
      <div className="hero">
        <h1>{t.appName}</h1>
        <p>{t.tagline} · {t.disclaimer}</p>
      </div>
      {firstVisit && (
        <div className="onboard" role="note">
          <div className="onbHead">
            <b>{lang === 'hi' ? 'पहली बार? तरीका 30 सेकंड में' : 'New here? The method in 30 seconds'}</b>
            <button className="iconBtn" aria-label={lang === 'hi' ? 'बंद करें' : 'Dismiss'} onClick={dismissOnboard}>✕</button>
          </div>
          <div className="onbStep"><span className="onbKey">1</span><span>{lang === 'hi' ? <>परीक्षा चुनें — पैटर्न, पात्रता और नकारात्मक अंकन हर कार्ड पर सत्यापित (✓)</> : <>Pick your exam — pattern, eligibility and negative marking verified (✓) on every card</>}</span></div>
          <div className="onbStep"><span className="onbKey">2</span><span>{lang === 'hi' ? <>सत्यापित PYQ पर अभ्यास (तुरंत व्याख्या) या पूर्ण-पैटर्न मॉक टेस्ट</> : <>Practice on verified PYQs (instant explanations) or take full-pattern mocks</>}</span></div>
          <div className="onbStep"><span className="onbKey">3</span><span>{lang === 'hi' ? <>गलत/छूटे प्रश्न अपने-आप त्रुटि-बुक में — 1-3-7-15-30 दिन के रिवीजन schedule पर लौटते हैं</> : <>Wrong/skipped questions auto-enter the error book and return on a 1-3-7-15-30 day revision schedule</>}</span></div>
        </div>
      )}
      {resumable && (
        <div className="resume">
          <b>{lang === 'hi' ? 'अधूरा मॉक टेस्ट' : 'Unfinished mock test'}</b>
          <div className="meta">{(EXAMS.find(e => e.id === resumable.examId) || { name: { hi: '' } }).name[lang]} · {Object.values(resumable.answers || {}).filter(a => a && a.choice !== null && a.choice !== undefined).length}/{resumable.ids.length} {lang === 'hi' ? 'प्रश्न' : 'Qs'}</div>
          <div className="row">
            <button className="primary" onClick={resumeMock}>{lang === 'hi' ? '▶ जारी रखें' : '▶ Resume'}</button>
            <button className="ghost" onClick={() => { clearActive(); setResumable(null) }}>{lang === 'hi' ? 'हटाएँ' : 'Discard'}</button>
          </div>
        </div>
      )}
      <div className="tiles">
        <button className="tile" onClick={() => setScreen('typing')}><span className="ic"><IcKeyboard /></span>{lang === 'hi' ? 'टाइपिंग' : 'Typing'}</button>
        <button className="tile" onClick={() => setScreen('glossary')}><span className="ic"><IcBook /></span>{lang === 'hi' ? 'शब्दावली' : 'Glossary'}</button>
        <button className="tile" onClick={() => setScreen('progress')}><span className="ic"><IcChart /></span>{lang === 'hi' ? 'प्रगति' : 'Progress'}</button>
        <button className="tile" onClick={() => setScreen('saved')}><span className="ic"><IcStar /></span>{lang === 'hi' ? 'सहेजे' : 'Saved'} {bms.length ? `(${bms.length})` : ''}</button>
        <button className="tile" onClick={() => setScreen('errorbook')}><span className="ic"><IcRefresh /></span>{lang === 'hi' ? 'त्रुटि' : 'Errors'}{dueErr ? ` (${dueErr})` : ''}</button>
      </div>
      <p className="sectionTitle">{t.chooseExam}</p>
      <div className="grid">
        {EXAMS.map(ex => {
          const pyq = pyqFor(ex)
          return <button key={ex.id} className="examCard" onClick={() => { setExam(ex); setScreen('hub') }}>
            <span className="top">
              <span className="ic">{(EXAM_ICON[lang] || {})[ex.id] || (lang === 'hi' ? 'प' : '?')}</span>
              {pyq > 0 && <span className="pyqTag">PYQ ✓</span>}
            </span>
            <span className="name">{ex.name[lang]}</span>
            <span className="meta">{ex.pattern.totalQuestions} {lang === 'hi' ? 'प्रश्न' : 'Qs'} · {ex.pattern.durationMin}m · −{ex.pattern.negative.wrong === 'none' ? (lang === 'hi' ? 'नेगेटिव नहीं' : 'none') : ex.pattern.negative.wrong}</span>
          </button>
        })}
      </div>
      <p className="note">{VERSION_NOTE[lang]}</p>
      <p className="note">{lang === 'hi' ? 'सत्यापित प्रश्न-बैंक' : 'Verified question bank'}: {BANK_META.shippable} ({lang === 'hi' ? 'असत्यापित कभी शामिल नहीं' : 'unverified never included'}) · {SHELF.map(s => s.name[lang]).join(' · ')}</p>
      {appToast && <div className="toast" role="status" aria-live="polite">{appToast}</div>}
    </div>
  )
}

// A11Y: trap Tab focus inside overlays (modal/palette/coach) + focus first control on open
function useTrap(open) {
  const ref = useRef(null)
  useEffect(() => {
    if (!open) return
    const el = ref.current; if (!el) return
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
  }, [open])
  return ref
}

function TopBar({ title, t, lang, toggleLang, onHome }) {
  return <div className="bar">
    {onHome ? <button className="iconBtn" onClick={onHome}>←</button> : <span />}
    <b>{title}</b>
    <button className="ghost" onClick={toggleLang} style={{ padding: '6px 12px', minHeight: 0 }}>{lang === 'hi' ? 'EN' : 'हिं'}</button>
  </div>
}

function ErrorBook({ lang, onHome, onPractice }) {
  const eb = Object.values(loadErr())
  const now = Date.now()
  const due = eb.filter(e => e.nextReviewAt <= now)
  const later = eb.filter(e => e.nextReviewAt > now).sort((a, b) => a.nextReviewAt - b.nextReviewAt)
  const bySub = {}
  eb.forEach(e => { bySub[e.subject] = (bySub[e.subject] || 0) + 1 })
  const fmtDue = (ts) => new Date(ts).toLocaleDateString(lang === 'hi' ? 'hi-IN' : 'en-IN')
  return (
    <div className="wrap">
      <TopBar title={lang === 'hi' ? 'त्रुटि-पुस्तक' : 'Error Book'} t={T(lang)} lang={lang} toggleLang={() => {}} onHome={onHome} />
      <div className="card">
        {!eb.length && <p style={{ fontSize: 13.5, color: 'var(--tx2)', margin: 0, lineHeight: 1.7 }}>{lang === 'hi' ? 'अभी कोई त्रुटि दर्ज नहीं हुई। प्रश्न हल करने पर गलत/छूटे प्रश्न यहाँ आते हैं और 1-3-7-15-30 दिन के revision schedule पर लौटते हैं।' : 'No errors logged yet. Wrong/skipped questions land here and return on a 1-3-7-15-30 day revision schedule.'}</p>}
        {eb.length > 0 && <div>
          <p style={{ fontSize: 13, color: 'var(--tx2)', margin: '0 0 10px' }}><b style={{ color: 'var(--tx)' }}>{eb.length}</b> {lang === 'hi' ? 'कुल त्रुटियाँ' : 'total errors'} · <b style={{ color: 'var(--ok)' }}>{due.length}</b> {lang === 'hi' ? 'आज दोहराने हेतु' : 'due now'}</p>
          {Object.entries(bySub).map(([s, n]) => <span key={s} className="badge" style={{ marginRight: 6 }}>{SUBJECT_LABELS[s] ? SUBJECT_LABELS[s][lang] : s} ({n})</span>)}
          <div className="row">
            <button className="big primary" onClick={onPractice}>{lang === 'hi' ? 'त्रुटियाँ अभ्यास करें' : 'Practice errors'} ({Math.min(10, due.length || eb.length)})</button>
            <button className="ghost" onClick={() => { saveErr({}); onHome() }}>{lang === 'hi' ? 'साफ़ करें' : 'Clear all'}</button>
          </div>
          <h3 style={{ marginTop: 18, marginBottom: 8 }}>{lang === 'hi' ? 'दोहराव अनुसूची' : 'Revision schedule'}</h3>
          {due.slice(0, 12).map(e => <div key={e.lastWrongAt} className="listRow"><span className="badge pyq" style={{ marginRight: 6 }}>Due</span> {SUBJECT_LABELS[e.subject] ? SUBJECT_LABELS[e.subject][lang] : e.subject} · {lang === 'hi' ? 'गलत' : 'wrong'} ×{e.wrongCount}</div>)}
          {later.slice(0, 8).map(e => <div key={e.lastWrongAt} className="listRow">{fmtDue(e.nextReviewAt)} · {SUBJECT_LABELS[e.subject] ? SUBJECT_LABELS[e.subject][lang] : e.subject} · ×{e.wrongCount}</div>)}
        </div>}
      </div>
    </div>
  )
}

function Progress({ lang, onHome }) {
  const [confirmWipe, setConfirmWipe] = useState(false)
  const wipeAll = () => {
    try { ['examos-history', 'examos-bookmarks', 'examos-error-book', 'examos-active-mock', 'examos-typing-history', 'examos-coach-usage', 'examos-errlog'].forEach(k => localStorage.removeItem(k)) } catch {}
    location.reload()
  }
  const hist = loadHist()
  const t = T(lang)
  const mocks = hist.length
  const avgAcc = mocks ? Math.round(hist.reduce((s, h) => s + h.accuracy, 0) / mocks) : 0
  const byExam = {}
  hist.forEach(h => { const e = byExam[h.examId] = byExam[h.examId] || { name: h.examName, n: 0, best: -Infinity, sumAcc: 0 }; e.n++; e.best = Math.max(e.best, h.score); e.sumAcc += h.accuracy })
  return (
    <div className="wrap">
      <TopBar title={lang === 'hi' ? 'प्रगति रिपोर्ट' : 'Progress Report'} t={t} lang={lang} toggleLang={() => {}} onHome={onHome} />
      <div className="card">
        {mocks === 0 && <p className="note" style={{ margin: 0, fontSize: 13.5 }}>{lang === 'hi' ? 'अभी कोई पूर्ण मॉक नहीं। मॉक टेस्ट देने के बाद यहाँ आपका ट्रैकिंग रिकॉर्ड बनेगा।' : 'No completed mocks yet. Your tracking record will appear here after you take a mock.'}</p>}
        {mocks > 0 && <div>
          <div className="stats" style={{ marginTop: 0 }}>
            <div className="stat"><b>{mocks}</b><span>{lang === 'hi' ? 'मॉक' : 'Mocks'}</span></div>
            <div className="stat"><b>{avgAcc}%</b><span>{lang === 'hi' ? 'औसत शुद्धता' : 'Avg accuracy'}</span></div>
            <div className="stat"><b>{hist.length}</b><span>{lang === 'hi' ? 'प्रयास' : 'Attempts'}</span></div>
          </div>
          <h3 style={{ marginTop: 18, marginBottom: 8 }}>{lang === 'hi' ? 'परीक्षा-वार' : 'Per exam'}</h3>
          {Object.entries(byExam).map(([id, e]) => (
            <div key={id} className="listRow"><b>{e.name}</b><div>{e.n} {lang === 'hi' ? 'मॉक' : 'mocks'} · {lang === 'hi' ? 'सर्वश्रेष्ठ' : 'Best'}: {e.best} · {lang === 'hi' ? 'औसत शुद्धता' : 'avg acc'}: {Math.round(e.sumAcc / e.n)}%</div></div>
          ))}
          <h3 style={{ marginTop: 18, marginBottom: 8 }}>{lang === 'hi' ? 'हाल के प्रयास' : 'Recent attempts'}</h3>
          {hist.slice(0, 10).map(h => (
            <div key={h.key} className="listRow"><b>{h.examName}</b> <div>{new Date(h.date).toLocaleDateString('hi-IN')} · {h.score}/{h.max} · {h.accuracy}%</div></div>
          ))}
        </div>}
        <p className="sectionTitle" style={{ marginTop: 28 }}>{lang === 'hi' ? 'डेटा' : 'Data'}</p>
        <div className="row" style={{ marginTop: 0 }}>
          <button className="danger" onClick={() => setConfirmWipe(true)}>{lang === 'hi' ? 'सारा डेटा मिटाएँ' : 'Clear all data'}</button>
        </div>
        {confirmWipe && (
          <div className="scrim" onClick={() => setConfirmWipe(false)}>
            <div className="modal" onClick={e => e.stopPropagation()}>
              <p style={{ margin: '0 0 14px' }}>{lang === 'hi' ? 'पक्का? इससे इतिहास, बुकमार्क, एरर बुक, टाइपिंग स्कोर और सेव सत्र — सब हमेशा के लिए मिट जाएंगे।' : 'Sure? History, bookmarks, error book, typing scores and any saved session will be permanently deleted.'}</p>
              <div className="row"><div className="row" style={{ flex: 1 }}>
                <button className="ghost" onClick={() => setConfirmWipe(false)}>{lang === 'hi' ? 'रद्द करें' : 'Cancel'}</button>
                <button className="danger" onClick={wipeAll}>{lang === 'hi' ? 'हाँ, मिटाएँ' : 'Yes, delete'}</button>
              </div></div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

function Saved({ lang, bookmarks, toggleBookmark, bank, onHome }) {
  const t = T(lang)
  const qs = (bank ? bank.ALL_QUESTIONS : []).filter(q => bookmarks.includes(q.id))
  return (
    <div className="wrap">
      <TopBar title={lang === 'hi' ? 'सहेजे गए प्रश्न' : 'Saved Questions'} t={t} lang={lang} toggleLang={() => {}} onHome={onHome} />
      {!qs.length && <div className="card"><p className="note" style={{ margin: 0, fontSize: 13.5 }}>{lang === 'hi' ? 'कोई प्रश्न सहेजा नहीं गया। प्रश्न पर ☆ दबाकर रिवीजन के लिए सहेजें।' : 'No saved questions yet. Tap ☆ on a question to save it for revision.'}</p></div>}
      {qs.map(q => (
        <div key={q.id} className="listRow">
          <div className="qText small" style={{ marginBottom: 8 }}>{q.q[lang]}</div>
          <div>{lang === 'hi' ? 'सही उत्तर' : 'Correct answer'}: <b>{String.fromCharCode(65 + q.answer)}. {q.options[lang][q.answer]}</b></div>
          <div className="note">{q.explanation[lang]}</div>
          <div className="row"><button className="ghost" onClick={() => toggleBookmark(q.id)}>{lang === 'hi' ? 'हटाएँ' : 'Remove'}</button></div>
        </div>
      ))}
    </div>
  )
}

function PatternCard({ exam, lang }) {
  const p = exam.pattern
  const neg = p.negative.wrong === 'none'
    ? (lang === 'hi' ? 'कोई नकारात्मक अंकन नहीं' : 'No negative marking')
    : (lang === 'hi' ? `गलत पर −${p.negative.wrong}` : `−${p.negative.wrong} per wrong`)
  return <div className="pattern">
    <div>{lang === 'hi' ? 'प्रश्न' : 'Questions'}: <b>{p.totalQuestions}</b> · {lang === 'hi' ? 'अंक' : 'Marks'}: <b>{p.totalMarks}</b> · {lang === 'hi' ? 'समय' : 'Time'}: <b>{p.durationMin}m</b></div>
    <div>{lang === 'hi' ? 'नकारात्मक अंकन' : 'Negative marking'}: <b>{neg}</b></div>
    {p.negative.noteHi && <div className="note">{lang === 'hi' ? p.negative.noteHi : p.negative.noteEn}</div>}
    {p.fifthOptionRule && <div className="warn">{lang === 'hi' ? p.fifthOptionRule.noteHi : p.fifthOptionRule.noteEn}</div>}
  </div>
}

function Player({ session, setSession, lang, bookmarks, toggleBookmark, onFinish, onExit }) {
  const t = T(lang)
  const [idx, setIdx] = useState(0)
  const [now, setNow] = useState(Date.now())
  const [showPal, setShowPal] = useState(false)
  const [coachCtx, setCoachCtx] = useState(null)
  const [confirmExit, setConfirmExit] = useState(false)
  const palRef = useTrap(showPal)
  const modalRef = useTrap(confirmExit)
  // browser Back during session → same confirm as ← (answers are protected)
  useEffect(() => {
    const onBack = () => setConfirmExit(true)
    window.addEventListener('examos-back', onBack)
    return () => window.removeEventListener('examos-back', onBack)
  }, [])
  const q = session.questions[idx]
  const endAt = session.startedAt + (session.durationMin || session.config.pattern.durationMin) * 60000
  useEffect(() => {
    if (session.mode !== 'mock') return
    const iv = setInterval(() => { setNow(Date.now()); saveActive(session, idx) }, 1000)
    return () => clearInterval(iv)
  }, [session.mode, session, idx])
  useEffect(() => {
    if (session.mode === 'mock' && Date.now() >= endAt) finish()
  })
  useEffect(() => { saveActive(session, idx) }, [session, idx])
  const setAnswer = useCallback((choice) => {
    setSession(s => {
      const answers = { ...s.answers, [q.id]: { choice, markedE: choice === null ? true : (s.answers[q.id]?.markedE || false) } }
      return { ...s, answers }
    })
  }, [q.id, setSession])
  const markE = () => setSession(s => {
    const prev = s.answers[q.id] || {}
    return { ...s, answers: { ...s.answers, [q.id]: { choice: null, markedE: !prev.markedE } } }
  })
  const a = session.answers[q.id]
  const showFeedback = session.mode === 'practice' && a && a.choice !== null
  const answeredCount = session.questions.filter(qq => { const aa = session.answers[qq.id]; return aa && aa.choice !== null && aa.choice !== undefined }).length
  const lowTime = session.mode === 'mock' && (endAt - now) < 5 * 60000
  const requestExit = () => { if (answeredCount > 0) setConfirmExit(true); else onExit() }

  function finish() { clearActive(); onFinish() }

  const nextQ = () => idx < session.questions.length - 1 ? setIdx(i => i + 1) : finish()

  // MOTION/UX: reset scroll on question change
  useEffect(() => { window.scrollTo({ top: 0 }) }, [idx])

  // TOAST: transient, non-blocking feedback
  const [toast, setToast] = useState('')
  const toastTimer = useRef(null)
  const flash = (msg) => { setToast(msg); clearTimeout(toastTimer.current); toastTimer.current = setTimeout(() => setToast(''), 1500) }

  // KEYBOARD: 1-5 pick option, E = option-E, arrows navigate, ESC closes overlays
  useEffect(() => {
    const onKey = (e) => {
      if (coachCtx || showPal || confirmExit) { if (e.key === 'Escape') { setCoachCtx(null); setShowPal(false); setConfirmExit(false) } return }
      const tag = (document.activeElement || {}).tagName
      if (tag === 'INPUT' || tag === 'TEXTAREA') return
      if (e.key === 'Escape') { requestExit(); return }
      const n = Number(e.key)
      if (n >= 1 && n <= q.options[lang].length) { setAnswer(n - 1); return }
      if (e.key === 'e' || e.key === 'E') { if (session.config.pattern.fifthOptionRule?.enabled) markE(); return }
      if (e.key === 'ArrowRight') { e.preventDefault(); nextQ() }
      if (e.key === 'ArrowLeft' && idx > 0) { e.preventDefault(); setIdx(i => i - 1) }
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [idx, q, lang, coachCtx, showPal, confirmExit, session])

  const bookmark = () => {
    const was = bookmarks.includes(q.id)
    toggleBookmark(q.id)
    flash(lang === 'hi' ? (was ? 'सहेजे से हटाया गया' : 'सहेज लिया गया') : (was ? 'Removed from Saved' : 'Saved'))
  }

  return (
    <div className="wrap" style={{ paddingBottom: 104 }}>
      <div className="bar">
        <button className="iconBtn" onClick={requestExit}>←</button>
        <b>{session.mode === 'mock' ? t.mock : t.practice}{session.mode === 'mock' && session.questions.length < session.config.pattern.totalQuestions ? ' (' + session.questions.length + 'Q)' : ''}</b>
        {session.mode === 'mock'
          ? <span className={'timer' + (lowTime ? ' low' : '')}>{fmtTime(endAt - now)}</span>
          : <span className="badge">{q.subject && SUBJECT_LABELS[q.subject][lang]}</span>}
      </div>
      <div className="card" style={{ borderTop: 'none', borderRadius: '0 0 var(--r-lg) var(--r-lg)', marginTop: -16 }}>
        <div className="progressTrack"><div className="progressFill" style={{ width: `${((idx + 1) / session.questions.length) * 100}%` }} /></div>
        <div className="qHead">
          <span>{t.question} {idx + 1}/{session.questions.length}</span>
          <span className="spacer" />
          {q.origin === 'real_pyq' ? <span className="badge pyq">{t.pyq} · {t.verified}</span> : <span className="badge ai">{t.agentAuthored}</span>}
          <button className={'iconBtn' + (bookmarks.includes(q.id) ? ' bmOn' : '')} onClick={bookmark} aria-label={lang === 'hi' ? 'सहेजें' : 'Bookmark'}>{bookmarks.includes(q.id) ? <IcStar fill="currentColor" size={17} /> : <IcStar size={17} />}</button>
        </div>
        <p className="qText">{q.q[lang]}</p>
        {q.options[lang].map((opt, i) => {
          const chosen = a && a.choice === i
          const isAnswer = q.answer === i
          let cls = 'opt'
          if (chosen) cls += ' chosen'
          if (showFeedback && isAnswer) cls += ' correct'
          if (showFeedback && chosen && !isAnswer) cls += ' incorrect'
          return <button key={i} className={cls} onClick={() => setAnswer(i)}><span className="key">{String.fromCharCode(65 + i)}</span>{opt}</button>
        })}
        {session.config.pattern.fifthOptionRule?.enabled && (
          <button className={'opt e' + (a?.markedE ? ' chosen' : '')} onClick={markE}><span className="key">E</span>{lang === 'hi' ? 'अनुत्तरित (विकल्प-E)' : 'Unattempted (Option-E)'}</button>
        )}
        {showFeedback && (
          <div className="explain">
            <b>{t.explanation}:</b> {q.explanation[lang]}
            <div className="note">{lang === 'hi' ? 'स्रोत' : 'Source'}: {q.provenance.source} · {q.provenance.evidence}</div>
            <button className="ghost" style={{ marginTop: 8 }} onClick={() => setCoachCtx({
              question: q.q[lang], options: q.options[lang], answer: q.answer,
              chosen: a?.choice, explanation: q.explanation[lang], subject: q.subject, origin: q.origin
            })}>{lang === 'hi' ? 'AI कोच से पूछें' : 'Ask AI Coach'}</button>
          </div>
        )}
        {coachCtx && <Suspense fallback={<div className="paletteOverlay"><div className="paletteSheet"><p className="note">…</p></div></div>}><Coach lang={lang} context={coachCtx} onClose={() => setCoachCtx(null)} /></Suspense>}
      </div>
      <div className="dock"><div className="row">
        <button className="ghost dockPrev" disabled={idx === 0} onClick={() => setIdx(i => i - 1)}>{t.prev}</button>
        <button className="ghost" onClick={() => setShowPal(true)} title={lang === 'hi' ? 'प्रश्न पैलेट' : 'Question palette'} aria-label={lang === 'hi' ? 'प्रश्न पैलेट' : 'Question palette'}><IcGrid size={16} /></button>
        <button className="primary dockNext" onClick={nextQ}>{idx < session.questions.length - 1 ? t.next : (session.mode === 'mock' ? t.submit : t.finish)}</button>
      </div></div>
      {toast && <div className="toast" role="status" aria-live="polite">{toast}</div>}
      {showPal && (
        <div className="paletteOverlay" onClick={() => setShowPal(false)}>
          <div className="paletteSheet" ref={palRef} onClick={e => e.stopPropagation()}>
            <h3>{lang === 'hi' ? 'प्रश्न पैलेट' : 'Question palette'}</h3>
            <div className="legend">
              <span><i style={{ background: 'rgba(124,58,237,.5)' }} />{lang === 'hi' ? 'उत्तरित' : 'Answered'}</span>
              <span><i style={{ background: 'var(--elev)' }} />{lang === 'hi' ? 'शेष' : 'Remaining'}</span>
              <span><i style={{ background: 'var(--violet)', outline: '2px solid var(--lav)' }} />{lang === 'hi' ? 'वर्तमान' : 'Current'}</span>
            </div>
            <div className="palGrid">
              {session.questions.map((qq, i) => {
                const done = session.answers[qq.id] && session.answers[qq.id].choice !== null && session.answers[qq.id].choice !== undefined
                return <button key={qq.id} className={'pal ' + (i === idx ? 'cur ' : '') + (done ? 'done' : '')} onClick={() => { setIdx(i); setShowPal(false) }}>{i + 1}</button>
              })}
            </div>
          </div>
        </div>
      )}
      {confirmExit && (
        <div className="modalWrap" onClick={() => setConfirmExit(false)}>
          <div className="modal" ref={modalRef} onClick={e => e.stopPropagation()}>
            <h3>{lang === 'hi' ? 'सत्र छोड़ें?' : 'Leave session?'}</h3>
            <p>{session.mode === 'mock'
              ? (lang === 'hi' ? 'आपके उत्तर सहेजे जाएँगे — होम से मॉक फिर से जारी रख सकते हैं।' : 'Your answers are saved — you can resume the mock from Home.')
              : (lang === 'hi' ? 'अभी तक के उत्तर त्रुटि-पुस्तक में दर्ज होंगे।' : 'Answers so far will be logged to the Error Book.')}</p>
            <div className="row">
              <button className="ghost" onClick={() => setConfirmExit(false)}>{lang === 'hi' ? 'जारी रखें' : 'Keep going'}</button>
              <button className="danger" onClick={() => { setConfirmExit(false); onExit() }}>{lang === 'hi' ? 'छोड़ें' : 'Leave'}</button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

function Result({ session, lang, onRecord, onHome, onRetry, onErrorReview }) {
  const t = T(lang)
  const r = scoreSession(session)
  const conf = session.config
  useEffect(() => { if (onRecord) onRecord(session, r) }, [])
  // EXAM DNA: per-subject breakdown
  const bySub = {}
  session.questions.forEach(q => {
    const a = session.answers[q.id]
    const st = bySub[q.subject] = bySub[q.subject] || { total: 0, correct: 0, wrong: 0 }
    st.total++
    if (a && a.choice !== null && a.choice !== undefined) { a.choice === q.answer ? st.correct++ : st.wrong++ }
  })
  // ERROR BOOK: every wrong answer with correct answer + explanation
  const wrongQs = session.questions.filter(q => {
    const a = session.answers[q.id]
    return a && a.choice !== null && a.choice !== undefined && a.choice !== q.answer
  })
  const maxMarks = r.total * conf.pattern.marksPerQuestion
  const pct = Math.max(0, Math.min(100, Math.round((r.score / maxMarks) * 100)))
  return (
    <div className="wrap" style={{ paddingBottom: 104 }}>
      <TopBar title={t.result} t={t} lang={lang} toggleLang={() => {}} />
      <div className="resultHero">
        <h2 style={{ fontSize: 15, color: 'var(--tx2)' }}>{session.config.name[lang]}</h2>
        <div className="gauge" style={{ '--pctg': pct }} role="img" aria-label={lang === 'hi' ? `स्कोर ${Math.round(r.score * 100) / 100} / ${maxMarks}` : `Score ${Math.round(r.score * 100) / 100} / ${maxMarks}`}>
          <b>{Math.round(r.score * 100) / 100}</b>
          <span>/ {maxMarks}</span>
        </div>
        <div className="resultGrid">
          <div className="stat"><b>{r.correct}</b><span>{t.correct}</span></div>
          <div className="stat"><b>{r.wrong}</b><span>{t.wrong}</span></div>
          <div className="stat"><b>{r.total - r.attempted}</b><span>{t.skipped}</span></div>
          <div className="stat"><b>{r.accuracy}%</b><span>{lang === 'hi' ? 'शुद्धता' : 'Accuracy'}</span></div>
        </div>
      </div>
      {r.blankWithoutE > 0 && <p className="warn">{lang === 'hi' ? `विकल्प-E बिना खाली: ${r.blankWithoutE} (हर एक पर −${(conf.pattern.marksPerQuestion / 3).toFixed(2)})` : `Blank without Option-E: ${r.blankWithoutE}`}</p>}
      {r.disqualified && <p className="warn">{lang === 'hi' ? 'चेतावनी: 10% से अधिक खाली बिना E — वास्तविक परीक्षा में अपात्रता!' : 'Warning: >10% blank without E — disqualification in the real exam!'}</p>}
      <div className="card">
        <h3 style={{ marginBottom: 6 }}>{lang === 'hi' ? 'विषय-वार विश्लेषण (Exam DNA)' : 'Subject analysis (Exam DNA)'}</h3>
        {Object.entries(bySub).map(([sub, st]) => {
          const p = st.total ? Math.round(st.correct / st.total * 100) : 0
          return <div key={sub} className="dnaRow">
            <span className="lbl">{SUBJECT_LABELS[sub] ? SUBJECT_LABELS[sub][lang] : sub}</span>
            <span className="dnaTrack"><span className={'dnaFill' + (p >= 60 ? '' : p >= 30 ? ' mid' : ' weak')} style={{ display: 'block', width: `${p}%` }} /></span>
            <span className="val">{st.correct}/{st.total} · {p}%</span>
          </div>
        })}
      </div>
      {wrongQs.length > 0 && <div className="card">
        <h3 style={{ marginBottom: 6 }}>{lang === 'hi' ? `एरर बुक (${wrongQs.length} गलत)` : `Error book (${wrongQs.length} wrong)`}</h3>
        {wrongQs.map(q => (
          <div key={q.id} className="explain err">
            <div className="qText small" style={{ marginBottom: 6 }}>{q.q[lang]}</div>
            <div>{lang === 'hi' ? 'आपका उत्तर' : 'Your answer'}: <b>{q.options[lang][session.answers[q.id].choice]}</b></div>
            <div>{lang === 'hi' ? 'सही उत्तर' : 'Correct answer'}: <b style={{ color: 'var(--ok)' }}>{q.options[lang][q.answer]}</b></div>
            <div className="note">{q.explanation[lang]}</div>
          </div>
        ))}
      </div>}
      <div className="dock"><div className="row">
        {wrongQs.length > 0 ? (<>
          {/* Momentum CTA: the highest-value next step after a test is to close the error loop, not to leave */}
          <button className="ghost" onClick={onHome}>{lang === 'hi' ? 'होम पर जाएँ' : 'Go Home'}</button>
          <button className="ghost" onClick={onRetry}>{lang === 'hi' ? 'फिर से करें' : 'Retry'}</button>
          <button className="primary big dockNext" onClick={onErrorReview}>{lang === 'hi' ? `एरर रिव्यू करें (${wrongQs.length})` : `Review errors (${wrongQs.length})`}</button>
        </>) : (<>
          <button className="ghost" onClick={onHome}>{lang === 'hi' ? 'होम पर जाएँ' : 'Go Home'}</button>
          <button className="primary big dockNext" onClick={onRetry}>{lang === 'hi' ? 'फिर से करें' : 'Retry'}</button>
        </>)}
      </div></div>
    </div>
  )
}
