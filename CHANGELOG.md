# Materialräknaren – ändringslogg

Versionsmarkör: `mr-vNN` i `sw.js` (`VERSION`) och `<meta name="app-version">` i `index.html`. Live-version verifieras mot https://raknaren.stahledigital.se/sw.js.

## mr-v20 – 2026-09-18
Buggrond efter kodgranskning (`Claude outputs/donatello/KODGRANSKNING_2026-09-18.md`). Inga nya kalkyler – frysen gäller.
- **Tomt fält gav ∞ i resultatet.** Åtta nämnare läste `num()` som ger 0 för tomt fält: bärläkt- och ströläktavstånd, läktlängd, pannor per pall, färgens täckning och burkstorlek, liter per betongsäck, kg per storsäck och m² per isoleringspaket. Nu faller de tillbaka på förvalet medan man skriver (`pos()`), och `fmt()` skriver `–` i stället för ∞ om något ändå blir oändligt. Verifierat med ett svep som tömmer varje fält i varje flik, ett i taget och alla samtidigt: 8 träffar före, 0 efter.
- **Komma som decimaltecken gick förlorat.** Måttfälten var `type="number"`; skriver man 6,4 slängde webbläsaren kommatecknet och räknade på **64**. Fälten är nu `type="text" inputmode="decimal"` (samma sifferknappsats på mobil), och både 6,4 och 6.4 tolkas rätt. Verifierat: 6,4 × 2,5 m, c/c 450 → 16 reglar och 18 gipsskivor, som facit i mr-v18.
- **Zoom var avstängd.** `maximum-scale=1` borttagen ur viewporten (WCAG 1.4.4). Sidoscroll-skyddet ligger kvar i CSS och är omtestat: 10 flikar × 320/360/390/430 px, med stängda och öppna "Fler alternativ" – ingen sidoscroll.
- **Kontrast.** Orange som textfärg låg på 2,9:1. Ny token `--acc-text:#b8431f` (4,99:1) för "Fler alternativ", rubriker i resultatet, listrubrik, pilar, "Ta bort" och SEO-länkar; orange behålls oförändrad för ramar, streck och ytor. Text på orange yta (aktiv flik, "Lägg till i listan") är nu mörk i stället för vit: 5,68:1.
- **Tryckytor.** "Ta bort" i materiallistan var ca 19 px hög, nu 44. Flikknapparna 40 → 44 px.
- **Negativa rader blev 0 i materiallistan.** `toLocaleString` ger äkta minustecken (U+2212); parsern klarade bara bindestreck, så "Avgår för det som gjuts ner" lagrades som 0 trots att summan var rätt. Nu tolkas −, – och — som minus.
- **Bara den aktiva fliken räknas om** vid inmatning i stället för alla tio; hela uppsättningen räknas fortfarande om vid start och vid flikbyte.
- Service workern ger upp mot nätet efter 2,5 sekunder och visar den sparade sidan i stället för att stå och ladda vitt på dålig täckning; sista fallback är `/index.html`.
- Texten och den strukturerade datan sa 17 gipsskruv per m² medan appen räknar med 18 – rättat på båda ställena.
- Rubriken i panelfliken heter nu Fasadpanel & vindduk, som fliken.
- Tom "Förval"-låda i Trall borttagen (fälten flyttas ändå till "Fler alternativ" av skriptet).

## mr-v19 – 2026-09-17
- Ny flik **Yttervägg**: reglar 45 × 145–220 (c/c 600/450), vindskydd (utegips 9, Glasroc/Storm 900, fibercement, träfiberskiva 12, vindduk) med infästning och skarvtejp, isolering i regeldjupet, ångspärr med överlapp, liggande installationsregel 45 × 45, invändig skiva (gips/OSB) med skruv, spackel och remsa, valfri fasadskiva med läkt och skruv. Öppningar dras av. Uppbyggnad enligt TräGuiden; åtgångstal från Gyproc, Norgips, Knauf, Isover, Hunton, Cembrit, Svenskt Trä (Lathunden) – uppskattningar märkta.
- Innervägg: skivval per sida utökat med brandgips 15 (fullskruvas i alla lag, skruv 30/58/69), våtrumsskiva, OSB + brandgips; skruvtal per leverantör (18 st/m² fullskruvat, 6 st/m² innerlag ej brand); spackel 0,4 kg/m² och remsa 1 m/m² (Norgips); isolering i väggen 45/70/95; format 900 × 2700 tillagt.
- Fliken Ytterpanel heter nu Fasadpanel. Underlag: Claude outputs/donatello/RESEARCH_REGELVAGGAR_2026-09-17.md.

## mr-v18 – 2026-09-17
- Innervägg: skivbredd väljs automatiskt efter regelavståndet så att skarvarna hamnar på regel – 900 mm vid c/c 450 och 300, 1200 mm vid c/c 600 och 400 (Anders krav 17/9). Tidigare alltid 1200. Handräknat: 6,4 × 2,5 m, c/c 450, 1 gips per sida → 2 × 8 skivor 900 × 2500 + 10 % spill = 18 st.

## mr-v17 – 2026-09-16
- Länkrad under Kopiera/Dela i varje kalkyl: "Ska du skicka offert på det här? Granska den innan den går iväg – gratis." → granskaminoffert.se (ny flik, ingen spårning).
- "Om räknaren": texten om vem som står bakom lyder nu "ett gratis verktyg från Ståhle Digital, som bygger hemsidor för hantverkare i Växjö med omnejd"; formuleringar om byggvaruhandeln borttagna.
- Versionsmarkör `<meta name="app-version">` i HTML.
- Räknaren är fryst för nya kalkyler i fyra veckor från 2026-09-16 (Moneyman/Anders): bara buggar.

## mr-v16 och tidigare
Se `git log` – en rad per version (v16 materiallista, v15 hopfällda notiser, v14 innervägg/tak/plintar, v12 regelavstånd, v11 regelformel och direktlänkar, v10 Tak ihopslagen).
