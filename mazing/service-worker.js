importScripts("/mazing/precache-manifest.e3880222bb735204cb932fdd9a20505c.js", "https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js");

// This is the code piece that GenerateSW mode can't provide for us.
// This code listens for the user's confirmation to update the app.
self.addEventListener("message", e => {
  if (!e.data) {
    return;
  }

  switch (e.data) {
    case "skipWaiting":
      self.skipWaiting();
      break;
    default:
      // NOOP
      break;
  }
});

workbox.clientsClaim();

// The precaching code provided by Workbox.
self.__precacheManifest = [].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

