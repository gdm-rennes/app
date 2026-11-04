// Service worker minimal : ouverture hors connexion de la coque de l'application. Aucune donnée envoyée.
const CACHE = "gdm-v5.3.1";
const FICHIERS = ["./","./index.html","./config.js","./ressources.json","./annuaire.json","./agenda.json","./manifest.webmanifest","./icon-192.png","./icon-512.png","./icon-180.png","./favicon.png",
 "./fonts/nunito-latin-400-normal.woff2","./fonts/nunito-latin-600-normal.woff2","./fonts/nunito-latin-700-normal.woff2","./fonts/nunito-latin-800-normal.woff2",
 "./img/cartable.png","./img/balance.png","./img/avocats.png","./img/parole.png","./img/mains.png","./img/groupe.png","./img/logo-horizontal.png"];
self.addEventListener("install", e => { self.skipWaiting(); e.waitUntil(caches.open(CACHE).then(c => c.addAll(FICHIERS))); });
self.addEventListener("activate", e => e.waitUntil(caches.keys().then(k => Promise.all(k.filter(x => x !== CACHE).map(x => caches.delete(x)))).then(() => self.clients.claim())));
self.addEventListener("fetch", e => {
  if (e.request.method !== "GET" || new URL(e.request.url).origin !== location.origin) return;
  e.respondWith(fetch(e.request).then(r => { const c = r.clone(); caches.open(CACHE).then(x => x.put(e.request, c)); return r; }).catch(() => caches.match(e.request)));
});
