var cacheName = 'hackkosice-v1';
var contentToCache = ["{{ `/` | relURL }}"];
self.addEventListener('install', (e) => {
    e.waitUntil(
        caches.open(cacheName).then((cache) => {
            return cache.addAll(contentToCache);
        })
    );
});
self.addEventListener('fetch', function (event) {
    event.respondWith(
        fetch(event.request).then(function(response) {
            if (event.request.method === 'GET') {
                let response2 = response.clone();
                caches.open(cacheName).then(function (cache) {
                    cache.put(event.request, response2);
                });
            }
            return response;
        }).catch(function() {
            console.log('[Service Worker] Got fetch request: ' + event.request.url);
            return caches.open(cacheName).then(function (cache) {
                return cache.match(event.request).then(function (response) {
                    return response;
                });
            });
        })
    );
});
self.addEventListener('activate', (e) => {
    e.waitUntil(
        caches.keys().then((keyList) => {
            return Promise.all(keyList.map((key) => {
                if (key !== cacheName) {
                    return caches.delete(key);
                }
            }));
        })
    );
    return self.clients.claim();
});
