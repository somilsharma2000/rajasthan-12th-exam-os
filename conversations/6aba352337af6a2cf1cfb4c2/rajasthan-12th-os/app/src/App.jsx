import React, { useState, useEffect, useCallback } from 'react'
import { EXAMS, SHELF } from './data/exams.js'
import { QUESTIONS } from './data/questions.js'
import { ALL_QUESTIONS, BANK_STATS } from './data/bank/index.js'
import { HUBS, AS_OF } from './data/hubs.js'
import { GLOSSARY } from './data/glossary.js'
import { T } from './i18n.js'
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

export default function App() {
  const [lang, setLang] = useState('hi')
  const [screen, setScreen] = useState('home') // home | hub | setup | player | result | glossary
  const [exam, setExam] = useState(null)
  const [session, setSession] = useState(null)
  const [resumable, setResumable] = useState(null)
  const [bms, setBms] = useState([])
  useEffect(() => { setBms(loadBM()) }, [])
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
  useEffect(() => { const a = loadActive(); if (a && a.ids && a.ids.length) setResumable(a) }, [])
  const resumeMock = () => {
    const ex = EXAMS.find(e => e.id === resumable.examId)
    if (!ex) { clearActive(); setResumable(null); return }
    const byId = Object.fromEntries(ALL_QUESTIONS.map(q => [q.id, q]))
    const questions = resumable.ids.map(id => byId[id]).filter(Boolean)
    // Resume from REMAINING time: rebuild startedAt from saved active-elapsed so backgrounded/sleep time is not counted (fixes instant auto-submit)
    setSession({ examId: ex.id, mode: 'mock', lang, questions, answers: resumable.answers || {}, startedAt: Date.now() - (resumable.elapsedMs || 0), submitted: false, config: ex })
    setResumable(null); setScreen('player')
  }
  const t = T(lang)
  const toggleLang = () => setLang(l => l === 'hi' ? 'en' : 'hi')

  const ex_ok = q => q.verification !== 'UNVERIFIED' && !(q.provenance && q.provenance.evidence && String(q.provenance.evidence).includes('QUARANTINED'))
  const availFor = ex => ALL_QUESTIONS.filter(q => ex_ok(q) && ex.subjects.includes(q.subject)).length
  const startSession = (mode, subject) => {
    const target = mode === 'mock' ? exam.pattern.totalQuestions : 10
    const pool = subject ? ALL_QUESTIONS.filter(q => ex_ok(q) && q.subject === subject) : ALL_QUESTIONS
    const s = buildSession(exam, pool, mode, lang, target)
    if (!s.questions.length) return
    s.config = exam
    setSession(s); setScreen('player')
  }

  const startErrSession = () => {
    const eb = Object.values(loadErr())
    if (!eb.length) return
    const byId = Object.fromEntries(ALL_QUESTIONS.map(q => [q.id, q]))
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
  if (screen === 'result') return <Result session={session} lang={lang} onRecord={recordAttempt} onHome={() => { setSession(null); setScreen('home') }} onRetry={() => { const mode = session.mode; startSession(mode) }} />
  if (screen === 'progress') return <Progress lang={lang} onHome={() => setScreen('home')} />
  if (screen === 'saved') return <Saved lang={lang} bookmarks={bms} toggleBookmark={toggleBookmark} onHome={() => setScreen('home')} />
  if (screen === 'errorbook') return <ErrorBook lang={lang} onHome={() => setScreen('home')} onPractice={startErrSession} />
  const avail = exam ? availFor(exam) : 0
  if (screen === 'setup') return (
    <div className="wrap">
      <Bar t={t} lang={lang} toggleLang={toggleLang} onHome={() => setScreen('home')} />
      <div className="card">
        <h2>{exam.name[lang]}</h2>
        <PatternCard exam={exam} lang={lang} />
        <div className="row">
          <button className="big primary" onClick={() => startSession('practice')}>{t.practice} ({lang === 'hi' ? 'मिश्रित' : 'mixed'})</button>
          <button className="big" onClick={() => startSession('mock')}>{t.mock}</button>
        </div>
        <h3>{lang === 'hi' ? 'विषय-वार अभ्यास' : 'Subject-wise practice'}</h3>
        <div className="palette">
          {exam.subjects.map(sub => {
            const n = ALL_QUESTIONS.filter(q => ex_ok(q) && q.subject === sub).length
            return <button key={sub} className="pal" onClick={() => startSession('practice', sub)}>{SUBJECT_LABELS[sub] ? SUBJECT_LABELS[sub][lang] : sub} <small>({n})</small></button>
          })}
        </div>
        <p className="note">{VERSION_NOTE[lang]}</p>
      </div>
    </div>
  )
  if (screen === 'hub') return (
    <div className="wrap">
      <Bar t={t} lang={lang} toggleLang={toggleLang} onHome={() => setScreen('home')} />
      <div className="card">
        <h2>{exam.name[lang]}</h2>
        <PatternCard exam={exam} lang={lang} />
        {(() => { const hub = HUBS[exam.id]; if (!hub) return null
          const rows = [['qualification','पात्रता','Qualification'],['stages','चयन प्रक्रिया','Selection process'],['pay','वेतन स्तर','Pay']]
          return <div>
            <h3>{t.examHub}</h3>
            {rows.map(([k, hi, en]) => <div key={k} className="hubRow"><b>{lang === 'hi' ? hi : en}:</b> <span>{hub[k][lang]}</span></div>)}
            <div className="hubRow"><b>{lang === 'hi' ? 'आधिकारिक पोर्टल' : 'Official portal'}:</b> <a href={hub.official} target="_blank" rel="noreferrer">{hub.official}</a></div>
            <p className="note">{AS_OF[lang]} · {exam.verification}</p>
          </div> })()}
        {exam.pattern.questionCountVerified === 'PENDING_FINAL_LOCK' && <p className="note warn">{lang === 'hi' ? 'प्रश्न-संख्या अंतिम लॉक लंबित — अंक-संरचना सत्यापित है' : 'Question count pending final lock - marks structure verified'}</p>}
        <div className="row">
          <button className="primary big" onClick={() => setScreen('setup')}>{t.start}</button>
          <button onClick={() => setScreen('home')}>{t.back}</button>
        </div>
      </div>
    </div>
  )
  if (screen === 'glossary') return (
    <div className="wrap">
      <Bar t={t} lang={lang} toggleLang={toggleLang} onHome={() => setScreen('home')} />
      <div className="card">
        <h2>{lang === 'hi' ? 'परीक्षा शब्दावली' : 'Exam Glossary'}</h2>
        {GLOSSARY.map((g, i) => (
          <div key={i} className="hubRow" style={{marginBottom:10}}>
            <b>{g.t[lang]}</b>
            <div>{g.d[lang]}</div>
          </div>
        ))}
        <p className="note">{AS_OF[lang]}</p>
      </div>
    </div>
  )
  // HOME
  return (
    <div className="wrap">
      <Bar t={t} lang={lang} toggleLang={toggleLang} />
      <div className="hero">
        <h1>{t.appName}</h1>
        <p>{t.tagline} · {t.disclaimer}</p>
      </div>
      {resumable && (
        <div className="card" style={{border:'2px solid #7c3aed'}}>
          <b>{lang === 'hi' ? 'अधूरा मॉक टेस्ट मिला' : 'Unfinished mock found'}</b>
          <div className="row">
            <button className="primary" onClick={resumeMock}>{lang === 'hi' ? 'जारी रखें' : 'Resume'}</button>
            <button onClick={() => { clearActive(); setResumable(null) }}>{lang === 'hi' ? 'हटाएँ' : 'Discard'}</button>
          </div>
        </div>
      )}
      <div className="row">
        <button onClick={() => setScreen('glossary')}>{lang === 'hi' ? 'शब्दावली' : 'Glossary'}</button>
        <button onClick={() => setScreen('progress')}>{lang === 'hi' ? 'प्रगति रिपोर्ट' : 'Progress'}</button>
        <button onClick={() => setScreen('saved')}>{lang === 'hi' ? 'सहेजे गए' : 'Saved'} ({bms.length})</button>
        <button onClick={() => setScreen('errorbook')}>{lang === 'hi' ? 'त्रुटि-पुस्तक' : 'Error Book'}{(() => { const due = Object.values(loadErr()).filter(e => e.nextReviewAt <= Date.now()).length; return due ? ` (${due})` : '' })()}</button>
      </div>
      <h2>{t.chooseExam}</h2>
      {EXAMS.map(ex => (
        <button key={ex.id} className="examRow" onClick={() => { setExam(ex); setScreen('hub') }}>
          <b>{ex.name[lang]}</b>
          <span className="badge">{ex.pattern.totalQuestions} {lang === 'hi' ? 'प्रश्न' : 'Qs'} · {ex.pattern.durationMin} {lang === 'hi' ? 'मिनट' : 'min'} · −{ex.pattern.negative.wrong === 'none' ? (lang === 'hi' ? 'नेगेटिव नहीं' : 'no negative') : ex.pattern.negative.wrong}</span>
        </button>
      ))}
      <p className="note">{VERSION_NOTE[lang]}</p>
      <p className="note">{lang === 'hi' ? 'सत्यापित प्रश्न-बैंक' : 'Verified question bank'}: {BANK_STATS.shippable} ({lang === 'hi' ? 'असत्यापित कभी शामिल नहीं' : 'unverified never included'}) · {SHELF.map(s => s.name[lang]).join(' · ')}</p>
    </div>
  )
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
      <div className="bar"><button className="ghost" onClick={onHome}>←</button><b style={{color:'#fff'}}>{lang === 'hi' ? 'त्रुटि-पुस्तक' : 'Error Book'}</b><span /></div>
      <div className="card">
        {!eb.length && <p>{lang === 'hi' ? 'अभी कोई त्रुटि दर्ज नहीं हुई। प्रश्न हल करने पर गलत/छूटे प्रश्न यहाँ आते हैं और 1-3-7-15-30 दिन के revision schedule पर लौटते हैं।' : 'No errors logged yet. Wrong/skipped questions land here and return on a 1-3-7-15-30 day revision schedule.'}</p>}
        {eb.length > 0 && <div>
          <p><b>{lang === 'hi' ? 'कुल' : 'Total'}:</b> {eb.length} · <b>{lang === 'hi' ? 'आज दोहराने हेतु' : 'Due now'}:</b> {due.length}</p>
          {Object.entries(bySub).map(([s, n]) => <span key={s} className="badge" style={{marginRight:6}}>{SUBJECT_LABELS[s] ? SUBJECT_LABELS[s][lang] : s} ({n})</span>)}
          <div className="row" style={{marginTop:12}}>
            <button className="big primary" onClick={onPractice}>{lang === 'hi' ? 'त्रुटियाँ अभ्यास करें' : 'Practice errors'} ({Math.min(10, due.length || eb.length)})</button>
            <button onClick={() => { saveErr({}); onHome() }}>{lang === 'hi' ? 'साफ़ करें' : 'Clear all'}</button>
          </div>
          <h3>{lang === 'hi' ? 'दोहराव अनुसूची' : 'Revision schedule'}</h3>
          {due.slice(0, 12).map(e => <div key={e.lastWrongAt} className="hubRow"><span className="badge">Due</span> {SUBJECT_LABELS[e.subject] ? SUBJECT_LABELS[e.subject][lang] : e.subject} · {lang === 'hi' ? 'गलत' : 'wrong'} ×{e.wrongCount}</div>)}
          {later.slice(0, 8).map(e => <div key={e.lastWrongAt} className="hubRow">{fmtDue(e.nextReviewAt)} · {SUBJECT_LABELS[e.subject] ? SUBJECT_LABELS[e.subject][lang] : e.subject} · ×{e.wrongCount}</div>)}
        </div>}
      </div>
    </div>
  )
}

function Progress({ lang, onHome }) {
  const hist = loadHist()
  const t = T(lang)
  const mocks = hist.length
  const avgAcc = mocks ? Math.round(hist.reduce((s, h) => s + h.accuracy, 0) / mocks) : 0
  const byExam = {}
  hist.forEach(h => { const e = byExam[h.examId] = byExam[h.examId] || { name: h.examName, n: 0, best: -Infinity, sumAcc: 0 }; e.n++; e.best = Math.max(e.best, h.score); e.sumAcc += h.accuracy })
  return (
    <div className="wrap">
      <div className="bar"><button className="ghost" onClick={onHome}>←</button><b style={{color:'#fff'}}>{t.appName}</b><span /></div>
      <div className="card">
        <h2>{lang === 'hi' ? 'प्रगति रिपोर्ट' : 'Progress Report'}</h2>
        {mocks === 0 && <p className="note">{lang === 'hi' ? 'अभी कोई पूर्ण मॉक नहीं। मॉक टेस्ट देने के बाद यहाँ आपका ट्रैकिंग रिकॉर्ड बनेगा।' : 'No completed mocks yet. Your tracking record will appear here after you take a mock.'}</p>}
        {mocks > 0 && <div>
          <p>{lang === 'hi' ? 'कुल मॉक:' : 'Total mocks:'} <b>{mocks}</b> · {lang === 'hi' ? 'औसत शुद्धता:' : 'Avg accuracy:'} <b>{avgAcc}%</b></p>
          <h3>{lang === 'hi' ? 'परीक्षा-वार' : 'Per exam'}</h3>
          {Object.entries(byExam).map(([id, e]) => (
            <div key={id} className="hubRow"><b>{e.name}:</b> <span>{e.n} {lang === 'hi' ? 'मॉक' : 'mocks'} · {lang === 'hi' ? 'सर्वश्रेष्ठ' : 'Best'}: {e.best} · {lang === 'hi' ? 'औसत शुद्धता' : 'avg acc'}: {Math.round(e.sumAcc / e.n)}%</span></div>
          ))}
          <h3>{lang === 'hi' ? 'हाल के प्रयास' : 'Recent attempts'}</h3>
          {hist.slice(0, 10).map(h => (
            <div key={h.key} className="hubRow"><b>{h.examName}</b> <span>{new Date(h.date).toLocaleDateString('hi-IN')} · {h.score}/{h.max} · {h.accuracy}%</span></div>
          ))}
        </div>}
      </div>
    </div>
  )
}

function Saved({ lang, bookmarks, toggleBookmark, onHome }) {
  const t = T(lang)
  const qs = ALL_QUESTIONS.filter(q => bookmarks.includes(q.id))
  return (
    <div className="wrap">
      <div className="bar"><button className="ghost" onClick={onHome}>←</button><b style={{color:'#fff'}}>{t.appName}</b><span /></div>
      <div className="card">
        <h2>{lang === 'hi' ? 'सहेजे गए प्रश्न' : 'Saved Questions'}</h2>
        {qs.length === 0 && <p className="note">{lang === 'hi' ? 'कोई प्रश्न सहेजा नहीं गया। प्रश्न पर ☆ दबाकर रिवीजन के लिए सहेजें।' : 'No saved questions yet. Tap ☆ on a question to save it for revision.'}</p>}
        {qs.map(q => (
          <div key={q.id} className="explain" style={{background:'#f8fafc'}}>
            <div className="qText">{q.q[lang]}</div>
            <div>{lang === 'hi' ? 'सही उत्तर' : 'Correct answer'}: <b>{String.fromCharCode(65 + q.answer)}. {q.options[lang][q.answer]}</b></div>
            <div className="note">{q.explanation[lang]}</div>
            <button className="ghost" onClick={() => toggleBookmark(q.id)}>{lang === 'hi' ? 'हटाएँ' : 'Remove'}</button>
          </div>
        ))}
      </div>
    </div>
  )
}

function Bar({ t, lang, toggleLang, onHome }) {
  return <div className="bar">
    {onHome ? <button onClick={onHome} className="ghost">←</button> : <span />}
    <b style={{color:'#fff'}}>{t.appName}</b>
    <button className="ghost" onClick={toggleLang}>{lang === 'hi' ? 'EN' : 'हिं'}</button>
  </div>
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
    {p.fifthOptionRule && <div className="note warn">{lang === 'hi' ? p.fifthOptionRule.noteHi : p.fifthOptionRule.noteEn}</div>}
  </div>
}

function Player({ session, setSession, lang, bookmarks, toggleBookmark, onFinish, onExit }) {
  const t = T(lang)
  const [idx, setIdx] = useState(0)
  const [now, setNow] = useState(Date.now())
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

  function finish() { clearActive(); onFinish() }

  return (
    <div className="wrap">
      <div className="bar">
        <button className="ghost" onClick={onExit}>←</button>
        <b style={{color:'#fff'}}>{session.mode === 'mock' ? t.mock : t.practice}{session.mode === 'mock' && session.questions.length < session.config.pattern.totalQuestions ? ' (' + session.questions.length + 'Q)' : ''}</b>
        {session.mode === 'mock'
          ? <span className="timer">{t.timeLeft}: {fmtTime(endAt - now)}</span>
          : <span className="badge">{q.subject && SUBJECT_LABELS[q.subject][lang]}</span>}
      </div>
      <div className="card">
        <div className="qHead">
          <span>{t.question} {idx + 1}/{session.questions.length}</span>
          <button className={'ghost' + (bookmarks.includes(q.id) ? ' bmOn' : '')} onClick={() => toggleBookmark(q.id)}>{bookmarks.includes(q.id) ? '★' : '☆'}</button>
          {q.origin === 'real_pyq' ? <span className="badge pyq">{t.pyq} · {t.verified}</span> : <span className="badge ai">{t.agentAuthored}</span>}
        </div>
        <p className="qText">{q.q[lang]}</p>
        {q.options[lang].map((opt, i) => {
          const chosen = a && a.choice === i
          const isAnswer = q.answer === i
          let cls = 'opt'
          if (chosen) cls += ' chosen'
          if (showFeedback && isAnswer) cls += ' correct'
          if (showFeedback && chosen && !isAnswer) cls += ' incorrect'
          return <button key={i} className={cls} onClick={() => setAnswer(i)}>{String.fromCharCode(65 + i)}. {opt}</button>
        })}
        {session.config.pattern.fifthOptionRule?.enabled && (
          <button className={'opt e' + (a?.markedE ? ' chosen' : '')} onClick={markE}>E. {lang === 'hi' ? 'अनुत्तरित (विकल्प-E)' : 'Unattempted (Option-E)'}</button>
        )}
        {showFeedback && (
          <div className="explain">
            <b>{t.explanation}:</b> {q.explanation[lang]}
            <div className="note">स्रोत: {q.provenance.source} · {q.provenance.evidence}</div>
          </div>
        )}
        <div className="row">
          <button disabled={idx === 0} onClick={() => setIdx(i => i - 1)}>{t.prev}</button>
          {idx < session.questions.length - 1
            ? <button className="primary" onClick={() => setIdx(i => i + 1)}>{t.next}</button>
            : <button className="primary" onClick={finish}>{session.mode === 'mock' ? t.submit : t.finish}</button>}
        </div>
        <div className="palette">
          {session.questions.map((qq, i) => (
            <button key={qq.id} className={'pal ' + (i === idx ? 'cur ' : '') + (session.answers[qq.id] && session.answers[qq.id].choice !== null && session.answers[qq.id].choice !== undefined ? 'done' : '')}
              onClick={() => setIdx(i)}>{i + 1}</button>
          ))}
        </div>
      </div>
    </div>
  )
}

function Result({ session, lang, onRecord, onHome, onRetry }) {
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
  return (
    <div className="wrap">
      <div className="bar"><button className="ghost" onClick={onHome}>←</button><b style={{color:'#fff'}}>{t.result}</b><span /></div>
      <div className="card">
        <h2>{session.config.name[lang]}</h2>
        <p>{t.score}: <b>{Math.round(r.score * 100) / 100}</b> / {r.total * conf.pattern.marksPerQuestion}</p>
        <p>{t.correct}: <b>{r.correct}</b> · {t.wrong}: <b>{r.wrong}</b> · {t.skipped}: <b>{r.total - r.attempted}</b> · {lang === 'hi' ? 'शुद्धता' : 'Accuracy'}: <b>{r.accuracy}%</b></p>
        {r.blankWithoutE > 0 && <p className="note warn">{lang === 'hi' ? `विकल्प-E बिना खाली: ${r.blankWithoutE} (हर एक पर −${(conf.pattern.marksPerQuestion / 3).toFixed(2)})` : `Blank without Option-E: ${r.blankWithoutE}`}</p>}
        {r.disqualified && <p className="note warn">{lang === 'hi' ? 'चेतावनी: 10% से अधिक खाली बिना E — वास्तविक परीक्षा में अपात्रता!' : 'Warning: >10% blank without E — disqualification in the real exam!'}</p>}
        <h3>{lang === 'hi' ? 'विषय-वार विश्लेषण (Exam DNA)' : 'Subject analysis (Exam DNA)'}</h3>
        {Object.entries(bySub).map(([sub, st]) => (
          <div key={sub} className="hubRow"><b>{SUBJECT_LABELS[sub] ? SUBJECT_LABELS[sub][lang] : sub}:</b> <span>{st.correct}/{st.total} {lang === 'hi' ? 'सही' : 'correct'} · {st.total ? Math.round(st.correct / st.total * 100) : 0}%</span></div>
        ))}
        {wrongQs.length > 0 && <div>
          <h3>{lang === 'hi' ? `एरर बुक (${wrongQs.length} गलत)` : `Error book (${wrongQs.length} wrong)`}</h3>
          {wrongQs.map(q => (
            <div key={q.id} className="explain" style={{background:'#fff1f2'}}>
              <div className="qText">{q.q[lang]}</div>
              <div>{lang === 'hi' ? 'आपका उत्तर' : 'Your answer'}: <b>{q.options[lang][session.answers[q.id].choice]}</b></div>
              <div>{lang === 'hi' ? 'सही उत्तर' : 'Correct answer'}: <b>{q.options[lang][q.answer]}</b></div>
              <div className="note">{q.explanation[lang]}</div>
            </div>
          ))}
        </div>}
        <div style={{display:'flex', gap:'10px', marginTop:'16px'}}>
          <button className="big" onClick={onRetry} style={{flex:1}}>{lang === 'hi' ? 'फिर से करें' : 'Retry'}</button>
          <button className="big primary" onClick={onHome} style={{flex:1}}>{lang === 'hi' ? 'होम पर जाएँ' : 'Go Home'}</button>
        </div>
      </div>
    </div>
  )
}
