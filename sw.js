const staticCacheName = "soft-static-v.0.1";
const assets = [
  "/soft-impressions/",
  "/soft-impressions/images/1.png",
  "https://fonts.googleapis.com/css?family=Roboto:300,400,500",
];
self.addEventListener("install", (event) => {
  console.log("service worker installed");
  event.waitUntil(
    caches.open(staticCacheName).then((cache) => {
      console.log("cacheing the assets");
      cache
        .addAll(assets)
        .then((d) => console.loh("done caching", d))
        .catch((err) => {
          console.log("in addAll", err);
        });
    })
  );
});
self.addEventListener("activate", (event) => {
  console.log("service worker activated");
  caches.keys().then((key) => {
    return Promise.all(
      keys
        .filter((a) => a != staticCacheName)
        .map((a) => {
          caches.delete(a);
        })
    );
  });
});
self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches
      .match(event.request)
      .then((res) => {
        return res || fetch(event.request);
      })
      .catch((err) => {
        // console.log("in fetch", err);
      })
  );
  console.log("event", event);
});
