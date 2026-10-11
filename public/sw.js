// Excel Pro GH - Force Update SW v5 - Clear All Cache
const CACHE_NAME = 'excelprogh-v5-' + Date.now();

self.addEventListener("install", (event) => {
  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    (async () => {
      const keys = await caches.keys();
      await Promise.all(keys.map(k => caches.delete(k)));
      await self.clients.claim();
    })()
  );
});

self.addEventListener("fetch", (event) => {
  event.respondWith(fetch(event.request, { cache: 'no-store' }));
});
