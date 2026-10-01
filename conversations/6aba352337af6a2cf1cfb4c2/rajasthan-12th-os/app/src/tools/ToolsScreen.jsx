// TOOLS SCREEN — free utility calculators (cycle 10). Honest UI only: every number
// comes from the engine or the verified exam config; unverified facts show honest
// unverified states, never invented limits. No emoji icons (inline SVG only).
import React, { useState } from 'react'
import { EXAMS } from '../data/exams.js'
import { calcNegativeMarks, calcAge, calcAgeEligibility, calcCountdown } from '../engine.js'

const LS_CD = 'examos-tools-countdown'
const loadCd = () => { try { return JSON.parse(localStorage.getItem(LS_CD)) || null } catch { return null } }
const saveCd = v => { try { localStorage.setItem(LS_CD, JSON.stringify(v)) } catch {} }
const CATS = ['GEN', 'EWS', 'BC', 'MBC', 'SC', 'ST']
const NEG_SCHEMES = [
  { v: 'none', hi: 'नहीं (कोई कटौती नहीं)', en: 'None (no penalty)' },
  { v: '1/3', hi: 'प्रत्येक गलत पर 1/3 अंक', en: '1/3 mark per wrong' },
  { v: '1/4', hi: 'प्रत्येक गलत पर 1/4 अंक', en: '1/4 mark per wrong' },
  { v: '1-mark-per-wrong', hi: 'प्रत्येक गलत पर 1 अंक', en: '1 mark per wrong' }
]

function TopBar({ title, onHome, lang }) {
  return <div className="bar">
    {onHome ? <button className="iconBtn" onClick={onHome}>←</button> : <span />}
    <b>{title}</b>
    <span />
  </div>
}

const Fld = ({ label, children }) => (
  <label className="toolFld"><span>{label}</span>{children}</label>
)

// ── 1. Negative marks calculator ────────────────────────────────────────────
function NegCalc({ lang }) {
  const hi = lang === 'hi'
  const [examId, setExamId] = useState(EXAMS[0]?.id || '')
  const exam = EXAMS.find(e => e.id === examId) || EXAMS[0]
  const pat = exam?.pattern || {}
  const [total, setTotal] = useState(pat.totalQuestions || 100)
  const [mpq, setMpq] = useState(pat.marksPerQuestion || 1)
  const [scheme, setScheme] = useState(pat.negative?.wrong || '1/3')
  const [correct, setCorrect] = useState('')
  const [wrong, setWrong] = useState('')
  const onExam = id => {
    setExamId(id)
    const p = EXAMS.find(e => e.id === id)?.pattern || {}
    setTotal(p.totalQuestions || 100); setMpq(p.marksPerQuestion || 1)
    setScheme(p.negative?.wrong || '1/3')
  }
  const r = calcNegativeMarks({ totalQuestions: total, marksPerQuestion: mpq, negativeScheme: scheme, correct: Number(correct) || 0, wrong: Number(wrong) || 0 }, exam)
  const note = hi ? r.noteHi : r.noteEn
  const fifth = hi ? r.fifthOptionNoteHi : r.fifthOptionNoteEn
  return (
    <div className="card" id="toolNeg">
      <h3>{hi ? 'नकारात्मक अंकन कैलकुलेटर' : 'Negative Marks Calculator'}</h3>
      <p className="note">{hi ? 'परीक्षा चुनें — पैटर्न सत्यापित कॉन्फ़िग से भर जाएगा (बदल भी सकते हैं)' : 'Pick an exam — pattern pre-fills from the verified config (you can override)'}</p>
      <div className="toolGrid">
        <Fld label={hi ? 'परीक्षा' : 'Exam'}>
          <select value={examId} onChange={e => onExam(e.target.value)}>
            {EXAMS.map(x => <option key={x.id} value={x.id}>{x.name?.[lang] || x.name?.hi}</option>)}
          </select>
        </Fld>
        <Fld label={hi ? 'कुल प्रश्न' : 'Total questions'}>
          <input type="number" min="1" value={total} onChange={e => setTotal(e.target.value)} />
        </Fld>
        <Fld label={hi ? 'अंक / प्रश्न' : 'Marks / question'}>
          <input type="number" min="0" step="0.5" value={mpq} onChange={e => setMpq(e.target.value)} />
        </Fld>
        <Fld label={hi ? 'नकारात्मक अंकन' : 'Negative marking'}>
          <select value={scheme} onChange={e => setScheme(e.target.value)}>
            {NEG_SCHEMES.map(s => <option key={s.v} value={s.v}>{hi ? s.hi : s.en}</option>)}
          </select>
        </Fld>
        <Fld label={hi ? 'सही उत्तर' : 'Correct'}>
          <input type="number" min="0" value={correct} onChange={e => setCorrect(e.target.value)} placeholder="0" />
        </Fld>
        <Fld label={hi ? 'गलत उत्तर' : 'Wrong'}>
          <input type="number" min="0" value={wrong} onChange={e => setWrong(e.target.value)} placeholder="0" />
        </Fld>
      </div>
      <div className="toolOut" aria-label={hi ? 'शुद्ध अंक' : 'Net score'}>
        <div className="toolScore"><b>{r.netScore}</b><span> / {r.maxScore}</span></div>
        <div className="toolMeta">
          <span>{hi ? `सही अंक: ${r.correctMarks}` : `Correct marks: ${r.correctMarks}`}</span>
          <span>{hi ? `कटौती: −${r.totalPenalty}` : `Penalty: −${r.totalPenalty}`}</span>
          <span>{hi ? `अप्रयासित: ${r.unattempted}` : `Unattempted: ${r.unattempted}`}</span>
          <span>{hi ? `शुद्धता: ${r.accuracy}%` : `Accuracy: ${r.accuracy}%`}</span>
        </div>
      </div>
      {note && <p className="note">{note}</p>}
      {fifth && <p className="note">{fifth}</p>}
    </div>
  )
}

// ── 2. Age / eligibility calculator ──────────────────────────────────────────
function AgeCalc({ lang }) {
  const hi = lang === 'hi'
  const [examId, setExamId] = useState(EXAMS[0]?.id || '')
  const [dob, setDob] = useState('')
  const [cat, setCat] = useState('GEN')
  const exam = EXAMS.find(e => e.id === examId) || EXAMS[0]
  const cfg = exam?.ageLimit
  const verified = cfg?.verification === 'OFFICIAL_CONFIRMED' && cfg.minAge && cfg.maxAge
  const todayIso = new Date().toISOString().slice(0, 10)
  const age = dob ? calcAge(dob, verified ? cfg.refDate : todayIso) : null
  const v = verified ? calcAgeEligibility(age, cat, cfg) : null
  const ageStr = age ? `${age.years} ${hi ? 'वर्ष' : 'y'} ${age.months} ${hi ? 'माह' : 'm'} ${age.days} ${hi ? 'दिन' : 'd'}` : (hi ? '—' : '—')
  return (
    <div className="card" id="toolAge">
      <h3>{hi ? 'आयु / पात्रता कैलकुलेटर' : 'Age / Eligibility Calculator'}</h3>
      <div className="toolGrid">
        <Fld label={hi ? 'परीक्षा' : 'Exam'}>
          <select value={examId} onChange={e => setExamId(e.target.value)}>
            {EXAMS.map(x => <option key={x.id} value={x.id}>{x.name?.[lang] || x.name?.hi}</option>)}
          </select>
        </Fld>
        <Fld label={hi ? 'जन्मतिथि' : 'Date of birth'}>
          <input type="date" value={dob} onChange={e => setDob(e.target.value)} />
        </Fld>
        <Fld label={hi ? 'वर्ग' : 'Category'}>
          <select value={cat} onChange={e => setCat(e.target.value)}>
            {CATS.map(c => <option key={c} value={c}>{c}</option>)}
          </select>
        </Fld>
      </div>
      {dob && age && (
        <div className="toolOut" aria-label={hi ? 'आयु परिणाम' : 'Age result'}>
          <div className="toolScore"><b>{ageStr}</b></div>
          <div className="toolMeta">
            <span>{verified
              ? (hi ? `संदर्भ तिथि: ${cfg.refDate}` : `As on ${cfg.refDate}`)
              : (hi ? 'आज की तिथि तक (सीमा असत्यापित)' : 'As on today (limit unverified)')}</span>
          </div>
          {v && <p className={v.verdict === 'ELIGIBLE' ? 'toolOk' : 'warn'}>{hi ? v.reasonHi : v.reasonEn}</p>}
          {!verified && (
            <p className="warn">{hi
              ? 'इस परीक्षा की उम्र सीमा अभी सत्यापित नहीं है — अधिकारिक विज्ञापन देखें।'
              : 'Age limit for this exam is not yet verified — check the official advertisement.'}</p>
          )}
        </div>
      )}
      {verified && cfg.noteHi && <p className="note">{hi ? cfg.noteHi : cfg.noteEn}</p>}
    </div>
  )
}

// ── 3. Exam countdown ───────────────────────────────────────────────────────
function Countdown({ lang }) {
  const hi = lang === 'hi'
  const [saved, setSaved] = useState(loadCd)
  const [examId, setExamId] = useState(saved?.examId || EXAMS[0]?.id || '')
  const [date, setDate] = useState(saved?.date || '')
  const exam = EXAMS.find(e => e.id === examId) || EXAMS[0]
  const r = date ? calcCountdown(date) : null
  const save = () => { const v = { examId, date }; saveCd(v); setSaved(v) }
  return (
    <div className="card" id="toolCd">
      <h3>{hi ? 'एग्जाम काउंटडाउन' : 'Exam Countdown'}</h3>
      <p className="note">{hi ? 'तिथि आपका अनुमान है, अधिकारिक तिथि नहीं — विज्ञापन आने पर अपडेट करें' : 'The date is your own estimate, not the official one — update when the advertisement arrives'}</p>
      <div className="toolGrid">
        <Fld label={hi ? 'परीक्षा' : 'Exam'}>
          <select value={examId} onChange={e => setExamId(e.target.value)}>
            {EXAMS.map(x => <option key={x.id} value={x.id}>{x.name?.[lang] || x.name?.hi}</option>)}
          </select>
        </Fld>
        <Fld label={hi ? 'अनुमानित तिथि' : 'Expected date'}>
          <input type="date" value={date} onChange={e => setDate(e.target.value)} />
        </Fld>
      </div>
      <button className="primary" style={{ width: '100%', marginTop: 12 }} onClick={save} disabled={!date}>
        {hi ? 'सेव करें' : 'Save'}
      </button>
      {r && (
        <div className="toolOut" aria-label={hi ? 'काउंटडाउन परिणाम' : 'Countdown result'}>
          <div className="toolScore">
            {r.isPast
              ? <b>{hi ? 'तिथि गुजर चुकी' : 'Date has passed'}</b>
              : r.isToday
                ? <b>{hi ? 'आज है!' : 'Today!'}</b>
                : <><b>{r.days}</b><span> {hi ? 'दिन बाकी' : 'days to go'}</span></>}
          </div>
          <div className="toolMeta"><span>{exam?.name?.[lang] || exam?.name?.hi}</span></div>
        </div>
      )}
    </div>
  )
}

export default function ToolsScreen({ lang, onHome }) {
  const hi = lang === 'hi'
  return (
    <div className="wrap">
      <TopBar title={hi ? 'टूल्स' : 'Tools'} onHome={onHome} lang={lang} />
      <NegCalc lang={lang} />
      <AgeCalc lang={lang} />
      <Countdown lang={lang} />
      <p className="note">{hi
        ? 'सभी आँकड़े आपके इनपुट और सत्यापित परीक्षा कॉन्फ़िग से गणना होते हैं — कोई काल्पनिक संख्या नहीं।'
        : 'All figures are computed from your inputs and the verified exam configs — nothing invented.'}</p>
    </div>
  )
}
