// Only Elite · service worker (site de test)
self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', e => e.waitUntil(self.clients.claim()));
self.addEventListener('push', e => {
  let d = {};
  try { d = e.data ? e.data.json() : {}; } catch (_) { d = { body: e.data ? e.data.text() : '' }; }
  const base = self.registration.scope;
  e.waitUntil(self.registration.showNotification(d.title || 'Only Elite', {
    body: d.body || 'Ouvre ton espace.', icon: base + 'icon-192.png', badge: base + 'badge-96.png',
    tag: d.tag || 'oe', renotify: true, vibrate: [120, 60, 120, 60, 240], timestamp: d.at || Date.now(),
    data: { url: d.url || base }, actions: [{ action: 'open', title: 'Voir la tâche' }] }));
});
self.addEventListener('notificationclick', e => {
  e.notification.close();
  const url = new URL((e.notification.data && e.notification.data.url) || self.registration.scope, self.registration.scope).href;
  e.waitUntil((async () => {
    const all = await self.clients.matchAll({ type: 'window', includeUncontrolled: true });
    for (const c of all) { if (c.url.startsWith(self.registration.scope)) { try { await c.focus(); } catch (_) {} try { c.postMessage({ oe: 'open-day', url }); } catch (_) {} return; } }
    await self.clients.openWindow(url);
  })());
});
