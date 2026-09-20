// Minimal service worker to enable PWA installation
self.addEventListener("install", (event) => {
  // Skip waiting so the SW activates immediately
  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  // Optional: clean up old caches if you add caching later
  event.waitUntil(self.clients.claim());
});

self.addEventListener("fetch", (event) => {
  // For now, just pass all requests through to the network
  event.respondWith(fetch(event.request));
});
