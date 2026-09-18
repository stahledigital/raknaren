# raknaren.stahledigital.se – flyttskylt

Materialräknaren har flyttat till **https://stahledigital.se/verkstaden/materialraknaren** (kort länk stahledigital.se/raknaren). Anders beslutade 2026-09-18 att allt i Verkstaden ska bo under stahledigital.se.

Det här repot är nu en flyttskylt på GitHub Pages:
- `index.html` skickar besökaren vidare och tar med materiallistan som var sparad i telefonen (`#flytt=` i adressen, skickas aldrig till servern).
- `sw.js` städar bort den gamla appen ur telefonen.
- Källan till räknaren finns i sajtrepot: `site-cloudflare/app/verkstaden/materialraknaren/materialraknaren.html`. Historiken fram till mr-v21 finns kvar här i git.

Senare (Anders, DNS): när `raknaren` pekas om till sajtens Cloudflare Worker kan flytten göras som en riktig 301-omdirigering, och repot kan arkiveras. Ta inte bort repot innan dess, för då slutar gamla länkar fungera.
