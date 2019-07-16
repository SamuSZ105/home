self.addEventListener('install', function() {
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
