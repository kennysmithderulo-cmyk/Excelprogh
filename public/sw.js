// Excel Pro GH - Force Update SW v4 - 2026
const VERSION = 'v4-' + Date.now();

self.addEventListener("install", (event) => {
  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    (async () => {
      // 1. Delete ALL old caches
      const keys = await caches.keys();
      await Promise.all(keys.map(k => caches.delete(k)));
      // 2. Take control immediately
      await self.clients.claim();
      // 3. Force reload all open tabs
      const clients = await self.clients.matchAll({ type: 'window' });
      clients.forEach(client => client.navigate(client.url));
    })()
  );
});

self.addEventListener("fetch", (event) => {
  // Always go to network, never cache HTML/JS/images
  event.respondWith(
    fetch(event.request, { cache: 'no-store', headers: { 'Cache-Control': 'no-cache' } })
  );
});