const CACHE_NAME = 'zoology-portal-v1';
const ASSETS = [
    './',
    './index.html',
    './theory.html',
    './competitive.html',
    './quizzes.html',
    './virtual-lab.html',
    './revision.html',
    './admin.html',
    './manifest.json'
];

// Install Event: Cache all assets
self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME).then((cache) => {
            console.log('Caching Zoology Portal assets...');
            return cache.addAll(ASSETS);
        })
    );
});

// Activate Event: Cleanup old caches
self.addEventListener('activate', (event) => {
    event.waitUntil(
        caches.keys().then((keys) => {
            return Promise.all(
                keys.filter((key) => key !== CACHE_NAME).map((key) => caches.delete(key))
            );
        })
    );
});

// Fetch Event: Cache-first, then network fall-back
self.addEventListener('fetch', (event) => {
    event.respondWith(
        caches.match(event.request).then((cachedResponse) => {
            return cachedResponse || fetch(event.request);
        })
    );
});
