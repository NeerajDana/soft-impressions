const staticCacheName = "soft-static";
const assets = [
  "/",
  "/static",
  "https://fonts.googleapis.com/css?family=Roboto:300,400,500",
];
self.addEventListener("install", (event) => {
  console.log("service worker installed");
  event.waitUntil(
    caches.open(staticCacheName).then((cache) => {
      cache.addAll(assets);
    })
  );
});
self.addEventListener("activate", (event) => {
  console.log("service worker activated");
});
self.addEventListener("fetch", (event) => {
  console.log("event", event);
});
