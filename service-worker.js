self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open('v1').then(function(cache) {
      return cache.addAll([
        '/home/',
        '/home/index.html',
        '/home/index.css',
        '/home/app.js',
        '/home/vendor.js',
        '/home/vendor.css',
        '/home/bootstrap/bootstrap.min.css',
        '/home/bootstrap/bootstrap.min.js',
        '/home/bootstrap/jquery-3.3.1.slim.min.js',
        '/home/bootstrap/popper.min.js'
      ]);
    })
  );
});

self.addEventListener('fetch', function(event) {
  event.respondWith(caches.match(event.request).then(function(response) {
    // caches.match() always resolves
    // but in case of success response will have value
    if (response !== undefined) {
      return response;
    } else {
      return fetch(event.request).then(function (response) {
        // response may be used only once
        // we need to save clone to put one copy in cache
        // and serve second one
        let responseClone = response.clone();
        
        caches.open('v1').then(function (cache) {
          cache.put(event.request, responseClone);
        });
        return response;
      }).catch(function () {
        return caches.match('/sw-test/gallery/myLittleVader.jpg');
      });
    }
  }));
});
