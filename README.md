# Materialräknaren – raknaren.stahledigital.se

Fristående statisk PWA (en HTML-fil, service worker, manifest, ikoner). Ingen byggprocess.
Källan är samma som `site/app/verkstaden/materialraknaren/materialraknaren.html`; håll dem i synk vid ändringar.

## Publicera på GitHub Pages (engångssteg, görs av Anders)

1. Skapa ett tomt repo `stahledigital/raknaren` på GitHub (publikt).
2. I Terminal på Macen:
   ```
   cd "/Users/andersabarca/Desktop/Ståhle Digital/raknaren"
   git remote add origin git@github.com:stahledigital/raknaren.git
   git push -u origin main
   ```
3. GitHub → repo → Settings → Pages → Source: *Deploy from a branch*, Branch: `main` / `/ (root)`. Spara.
4. Samma sida, *Custom domain*: `raknaren.stahledigital.se` → Save. Bocka i *Enforce HTTPS* när den blir valbar (kan ta några minuter).
5. DNS hos Oderland (stahledigital.se): lägg till
   ```
   Typ: CNAME   Namn: raknaren   Värde: stahledigital.github.io   TTL: 3600
   ```
6. Vänta på DNS (minuter–timme). Verifiera: `https://raknaren.stahledigital.se/` visar räknaren med hänglås.

## Uppdatera

Ändra `index.html`, bumpa `VERSION` i `sw.js` (t.ex. `mr-v2`), committa och pusha. Pages bygger om automatiskt.
