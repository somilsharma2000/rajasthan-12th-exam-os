// RESULT SHARE CARD (v4 cycle 8, roadmap A4) — the first distribution loop: a student who
// just saw their score is the highest-intent marketer. Renders a 1080x1350 (4:5) PNG card
// with ONLY measured numbers (honesty: no invented percentile, no fake badges) and shares
// it via the Web Share API, falling back to a plain download.
//
// Colors are hardcoded to mirror src/styles.css :root tokens (canvas cannot read CSS vars).
import { buildShareData } from './engine.js'

const C = {
  bg: '#09090B', card: '#141417', border: 'rgba(255,255,255,.085)',
  tx: '#FAFAFA', tx2: '#A1A1AA', tx3: '#8B8B93',
  violet: '#7C3AED', lav: '#A78BFA',
  ok: '#4ADE80', no: '#F87171', skip: '#3F3F46'
}

export function drawResultCard(data) {
  const W = 1080, H = 1350
  const cv = document.createElement('canvas')
  cv.width = W; cv.height = H
  const x = cv.getContext('2d')

  // canvas + frame
  x.fillStyle = C.bg
  x.fillRect(0, 0, W, H)
  x.strokeStyle = C.border
  x.lineWidth = 3
  roundRect(x, 40, 40, W - 80, H - 80, 28); x.stroke()

  // header
  x.textAlign = 'center'
  x.fillStyle = C.lav
  x.font = '700 46px sans-serif'
  x.fillText(data.appHi, W / 2, 150)
  x.fillStyle = C.tx2
  x.font = '500 30px sans-serif'
  x.fillText(data.reportLabel, W / 2, 200)

  // exam name (wrap to 2 lines max)
  x.fillStyle = C.tx
  x.font = '700 58px sans-serif'
  const lines = wrapLines(x, data.examHi, W - 220)
  lines.slice(0, 2).forEach((ln, i) => x.fillText(ln, W / 2, 290 + i * 74))
  x.fillStyle = C.tx3
  x.font = '500 28px sans-serif'
  x.fillText(data.dateHi, W / 2, 290 + Math.min(lines.length, 2) * 74 + 20)

  // score gauge ring
  const cx = W / 2, cy = 700, R = 190
  x.lineWidth = 34; x.lineCap = 'round'
  x.strokeStyle = C.card
  x.beginPath(); x.arc(cx, cy, R, 0, Math.PI * 2); x.stroke()
  x.strokeStyle = C.violet
  const sweep = Math.max(0, Math.min(1, data.pct / 100)) * Math.PI * 2
  x.beginPath(); x.arc(cx, cy, R, -Math.PI / 2, -Math.PI / 2 + sweep); x.stroke()
  x.fillStyle = C.tx
  x.font = '800 88px sans-serif'
  x.fillText(String(data.score), cx, cy + 14)
  x.fillStyle = C.tx2
  x.font = '600 34px sans-serif'
  x.fillText('/ ' + data.max, cx, cy + 64)

  // stacked outcome bar: measured correct/wrong/skipped only
  const bx = 140, bw = W - 280, by = 950, bh = 30
  const segs = [
    { n: data.correct, c: C.ok },
    { n: data.wrong, c: C.no },
    { n: data.skipped, c: C.skip }
  ]
  let off = bx
  x.fillStyle = C.card
  roundRect(x, bx, by, bw, bh, 15); x.fill()
  for (const s of segs) {
    if (!s.n) continue
    const w = bw * (s.n / data.total)
    x.fillStyle = s.c
    x.fillRect(off, by + 3, w, bh - 6)
    off += w
  }

  // stats row
  const stats = [[data.correct, data.correctHi], [data.wrong, data.wrongHi], [data.skipped, data.skippedHi], [data.accuracy + '%', data.accuracyHi]]
  const step = (W - 280) / 4
  stats.forEach(([v, lbl], i) => {
    const sx = bx + step * i + step / 2
    x.fillStyle = C.tx
    x.font = '800 52px sans-serif'
    x.fillText(String(v), sx, by + 130)
    x.fillStyle = C.tx2
    x.font = '500 26px sans-serif'
    x.fillText(lbl, sx, by + 168)
  })

  // footer CTA: real URL, honest free claim
  x.strokeStyle = C.border
  x.lineWidth = 2
  x.beginPath(); x.moveTo(140, 1170); x.lineTo(W - 140, 1170); x.stroke()
  x.fillStyle = C.tx
  x.font = '600 32px sans-serif'
  x.fillText(data.ctaHi, W / 2, 1230)
  x.fillStyle = C.lav
  x.font = '600 30px sans-serif'
  x.fillText(data.url, W / 2, 1278)

  return cv
}

function roundRect(x, rx, ry, rw, rh, r) {
  x.beginPath()
  x.moveTo(rx + r, ry)
  x.arcTo(rx + rw, ry, rx + rw, ry + rh, r)
  x.arcTo(rx + rw, ry + rh, rx, ry + rh, r)
  x.arcTo(rx, ry + rh, rx, ry, r)
  x.arcTo(rx, ry, rx + rw, ry, r)
  x.closePath()
}

function wrapLines(x, text, maxW) {
  const words = String(text).split(' ')
  const lines = []; let cur = ''
  for (const w of words) {
    const t = cur ? cur + ' ' + w : w
    if (x.measureText(t).width > maxW && cur) { lines.push(cur); cur = w } else cur = t
  }
  if (cur) lines.push(cur)
  return lines
}

// share flow: Web Share API with PNG file; download fallback. Returns 'shared' | 'downloaded'.
export async function shareResultCard(session, r, lang) {
  const data = buildShareData(session, r, lang)
  const cv = drawResultCard(data)
  const blob = await new Promise(res => cv.toBlob(res, 'image/png'))
  const file = new File([blob], 'my-mock-result.png', { type: 'image/png' })
  if (navigator.canShare && navigator.canShare({ files: [file] })) {
    try {
      await navigator.share({
        files: [file],
        title: data.shareTitle,
        text: data.shareText
      })
      return 'shared'
    } catch (e) { if (e && e.name === 'AbortError') return 'cancelled' } // user closed the sheet — not an error
  }
  // fallback: plain download (desktop / no Web Share)
  const a = document.createElement('a')
  a.href = URL.createObjectURL(blob)
  a.download = 'my-mock-result.png'
  a.click()
  setTimeout(() => URL.revokeObjectURL(a.href), 4000)
  return 'downloaded'
}
