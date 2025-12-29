const CACHE_NAME = 'rotec-v4';

const ASSETS_TO_CACHE = [
  '/Checklist-BBLK/',
  '/Checklist-BBLK/index.html',
  '/Checklist-BBLK/manifest.json',
  '/Checklist-BBLK/icons/icon-192x192.png',
  '/Checklist-BBLK/icons/icon-512x512.png'
];

// INSTALL
self.addEventListener('install', event => {
  self.skipWaiting();
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(ASSETS_TO_CACHE))
  );
});

// ACTIVATE
self.addEventListener('activate', event => {
  event.waitUntil(
    Promise.all([
      self.clients.claim(),
      caches.keys().then(keys =>
        Promise.all(
          keys.map(key => key !== CACHE_NAME && caches.delete(key))
        )
      )
    ])
  );
});

// FETCH (cache-first com fallback)
self.addEventListener('fetch', event => {
  if (event.request.method !== 'GET') return;

  event.respondWith(
    caches.match(event.request).then(cached => {
      if (cached) return cached;
      return fetch(event.request).catch(() =>
        caches.match('/Checklist-BBLK/index.html')
      );
    })
  );
});
