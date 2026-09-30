const CACHE = 'examos-v3'
self.addEventListener('install', e => { e.waitUntil(self.skipWaiting()) })
self.addEventListener('activate', e => {
  e.waitUntil(caches.keys().then(keys => Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k)))).then(() => self.clients.claim()))
})
self.addEventListener('fetch', e => {
  if (e.request.method !== 'GET') return
  const url = new URL(e.request.url)
  if (url.origin !== self.location.origin) return
  const isShell = url.pathname.endsWith('/') || url.pathname.endsWith('index.html')
  const isHashed = /-[A-Za-z0-9_-]{8}\.(js|css|woff2?)$/.test(url.pathname)
  if (isShell) {
    // NETWORK-FIRST shell: users always get the latest build; cache is only a fallback when offline
    e.respondWith(fetch(e.request).then(res => {
      const copy = res.clone(); caches.open(CACHE).then(c => c.put(e.request, copy)); return res
    }).catch(() => caches.match(e.request).then(hit => hit || caches.match('./index.html'))))
  } else {
    // cache-first for hashed assets and core files (safe: content-addressed)
    e.respondWith(caches.match(e.request).then(hit => hit || fetch(e.request).then(res => {
      if (res.ok) { const copy = res.clone(); caches.open(CACHE).then(c => c.put(e.request, copy)) }
      return res
    })))
  }
})
