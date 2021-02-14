'use strict';

const CACHE_NAME = 'edublocks';

const FILES_TO_CACHE = [
    '/index.html',
];

self.addEventListener('install', (evt) => {
  evt.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(FILES_TO_CACHE);
    })
);

  self.skipWaiting();
});

self.addEventListener('activate', (evt) => {
  evt.waitUntil(
    caches.keys().then((keyList) => {
      return Promise.all(keyList.map((key) => {
        if (key !== CACHE_NAME) {
          return caches.delete(key);
        }
      }));
    })
);  

  self.clients.claim();
});

self.addEventListener('fetch', (evt) => {
    //Offline Mode
});