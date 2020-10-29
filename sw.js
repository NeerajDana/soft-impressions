const staticCacheName = "soft-static";
const assets = [
  "/soft-impressions/",
  "/soft-impressions/static",
  "https://fonts.googleapis.com/css?family=Roboto:300,400,500",
];
self.addEventListener("install", (event) => {
  console.log("service worker installed");
  event.waitUntil(
    caches.open(staticCacheName).then((cache) => {
      console.log("cacheing the assets");
      cache.addAll(assets);
    })
  );
});
self.addEventListener("activate", (event) => {
  console.log("service worker activated");
});
self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((res) => {
      return res || fetch(event.request);
    })
  );
  console.log("event", event);
});
