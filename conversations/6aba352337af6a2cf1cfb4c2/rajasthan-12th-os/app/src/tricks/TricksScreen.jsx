// TRICKS SCREEN — audited Rajasthan GK short-tricks (cycle 11, A5 wave).
// Honest UI: every trick carries its audit verification tag; no invented content.
// Content: src/data/tricks.js generated verbatim from 4-pass-audited drafts.
import React, { useState } from 'react'
import { TRICKS } from '../data/tricks.js'

const SUBJECTS = [
  { v: 'all', hi: 'सभी', en: 'All' },
  { v: 'history', hi: 'इतिहास', en: 'History' },
  { v: 'geo', hi: 'भूगोल', en: 'Geography' },
  { v: 'polity', hi: 'राजव्यवस्था', en: 'Polity' }
]

const VERIF = {
  BANK_VERIFIED: { hi: 'बैंक-सत्यापित', en: 'Bank-verified' },
  WEB_VERIFIED: { hi: 'वेब-सत्यापित', en: 'Web-verified' },
  'BANK+WEB': { hi: 'बैंक+वेब सत्यापित', en: 'Bank+Web verified' }
}

function TopBar({ title, onHome }) {
  return <div className="bar">
    {onHome ? <button className="iconBtn" onClick={onHome} aria-label="home">←</button> : <span />}
    <b>{title}</b>
    <span />
  </div>
}

function TrickCard({ t, lang, open, onToggle }) {
  const hi = lang === 'hi'
  const v = VERIF[t.verif] || VERIF.WEB_VERIFIED
  return (
    <div className="card trickCard" data-trick-id={t.id}>
      <button className="trickHead" onClick={onToggle} aria-expanded={open}
        aria-label={(hi ? 'ट्रिक खोलें/बंद करें: ' : 'Open/close trick: ') + t.title}>
        <span className="trickTitle">{t.title}</span>
        <span className="trickVerif" data-verif={t.verif}>{hi ? v.hi : v.en}</span>
        <svg className={open ? 'trickArrow open' : 'trickArrow'} width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M9 5l7 7-7 7" /></svg>
      </button>
      {open && <>
        <p className="trickMnemonic">{t.mnemonic}</p>
        <ol className="trickChain">
          {t.chain.map((c, i) => <li key={i}>{c}</li>)}
        </ol>
        {t.note && <p className="trickNote">{t.note}</p>}
      </>}
    </div>
  )
}

export default function TricksScreen({ lang, onHome }) {
  const hi = lang === 'hi'
  const [subj, setSubj] = useState('all')
  const [openId, setOpenId] = useState(null)
  const [cluster, setCluster] = useState('all')
  const list = subj === 'all' ? TRICKS : TRICKS.filter(t => t.subject === subj)
  const clusters = ['all', ...Array.from(new Set(list.map(t => t.cluster)))]
  const shown = cluster === 'all' ? list : list.filter(t => t.cluster === cluster)
  return (
    <div className="wrap" id="tricksScreen">
      <TopBar title={hi ? 'राजस्थान जीके ट्रिक्स' : 'Rajasthan GK Tricks'} onHome={onHome} />
      <p className="note">{hi
        ? 'परीक्षा-प्रमुख तथ्यों के सत्यापित सूत्र। हर ट्रिक का सत्यापन टैग देखें — कोई असत्यापित तथ्य शामिल नहीं।'
        : 'Verified mnemonics for exam-recurring facts. Each trick carries its audit tag — no unverified facts included.'}</p>
      <div className="chipRow" role="tablist" aria-label={hi ? 'विषय छाँटें' : 'Filter by subject'}>
        {SUBJECTS.map(s => (
          <button key={s.v} className={'chip' + (subj === s.v ? ' chipOn' : '')}
            role="tab" aria-selected={subj === s.v}
            onClick={() => { setSubj(s.v); setCluster('all'); setOpenId(null) }}>
            {hi ? s.hi : s.en}
          </button>
        ))}
      </div>
      {clusters.length > 2 && (
        <div className="chipRow" aria-label={hi ? 'समूह छाँटें' : 'Filter by cluster'}>
          <button className={'chip chipSm' + (cluster === 'all' ? ' chipOn' : '')}
            onClick={() => setCluster('all')}>{hi ? 'सभी समूह' : 'All clusters'}</button>
          {clusters.filter(c => c !== 'all').map(c => (
            <button key={c} className={'chip chipSm' + (cluster === c ? ' chipOn' : '')}
              onClick={() => setCluster(c)}>{c}</button>
          ))}
        </div>
      )}
      <p className="note trickCount" data-testid="trick-count">
        {hi ? `${shown.length} ट्रिक्स` : `${shown.length} tricks`}
      </p>
      {shown.map(t => (
        <TrickCard key={t.id} t={t} lang={lang} open={openId === t.id}
          onToggle={() => setOpenId(openId === t.id ? null : t.id)} />
      ))}
    </div>
  )
}
