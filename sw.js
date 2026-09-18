/* Materialräknaren – service worker. Cache-first för appens egna filer,
   nätverk-först för själva sidan så nya versioner når fram när man är online. */
const VERSION = "mr-v21";
const SHELL = [
  "/",
  "/index.html",
  "/manifest.webmanifest",
  "/icon-192.png",
  "/icon-512.png",
];

self.addEventListener("install", (e) => {
  e.waitUntil(caches.open(VERSION).then((c) => c.addAll(SHELL)).then(() => self.skipWaiting()));
});

self.addEventListener("activate", (e) => {
  e.waitUntil(
    caches.keys().then((keys) => Promise.all(keys.filter((k) => k !== VERSION).map((k) => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

async function pageResponse(req) {
  const cached = caches.match(req).then((hit) => hit || caches.match("/index.html"));
  const network = fetch(req).then((res) => {
    const copy = res.clone();
    caches.open(VERSION).then((c) => c.put(req, copy));
    return res;
  });
  try {
    return await Promise.race([
      network,
      new Promise((_, reject) => setTimeout(() => reject(new Error("langsamt nat")), 2500)),
    ]);
  } catch (err) {
    const hit = await cached;
    if (hit) return hit;
    try { return await network; } catch (e2) { return Response.error(); }
  }
}

self.addEventListener("fetch", (e) => {
  const req = e.request;
  if (req.method !== "GET") return;
  const url = new URL(req.url);
  const isPage = url.origin === self.location.origin && (url.pathname === "/" || url.pathname === "/index.html");
  const isFont = url.hostname === "fonts.googleapis.com" || url.hostname === "fonts.gstatic.com";
  const isShell = url.origin === self.location.origin && url.pathname.startsWith("/");
  if (!isPage && !isFont && !isShell) return;

  if (isPage) {
    // Nätverk först, men ge upp efter 2,5 s och visa den sparade sidan i stället.
    // Utan tidsgräns kan appen stå och ladda vitt på dålig täckning fast sidan finns i telefonen.
    e.respondWith(pageResponse(req));
    return;
  }
  // cache först för ikoner, manifest och typsnitt
  e.respondWith(
    caches.match(req).then((hit) => hit || fetch(req).then((res) => { const copy = res.clone(); caches.open(VERSION).then((c) => c.put(req, copy)); return res; }))
  );
});
