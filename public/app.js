if (navigator.serviceWorker) {
  navigator.serviceWorker
    .register("./sw.js")
    .then((a) => {
      console.log("registered", a);
    })
    .catch((err) => {
      console.log("not registered", err);
    });
}
