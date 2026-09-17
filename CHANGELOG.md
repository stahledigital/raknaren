# Materialräknaren – ändringslogg

Versionsmarkör: `mr-vNN` i `sw.js` (`VERSION`) och `<meta name="app-version">` i `index.html`. Live-version verifieras mot https://raknaren.stahledigital.se/sw.js.

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
