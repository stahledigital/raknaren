# Materialräknaren – ompaketering "Troligtvis" (Moneyman 2026-09-27)
Ägare: Moneyman (strategi). Status: DECIDED 2026-09-27 12:34 – Anders valde rad A ("Vi kör på A"). Promoverad: KOMMERSIELL_PLAN KP-2026-09-27-01.

## Rekommendation
Ja till ompaketering med Carlsberg-greppet, men satsa tiden på att få folk TILL räknaren och ge dem en väg vidare till Ståhle Digital – inte på fler funktioner. Noggrannhetsarbetet (facit, tillverkarjämförelse, tester) är nu reklamens bevis. Direkt intäkt: 0 kr. Mål: första kund med ursprung i räknaren inom 3 månader (en sajtkund = 12–32 tkr exkl. moms enligt M1-spannet). Kostnad: ca 2 h Donatello, Zlatas ordinarie kö, 0 kr annons tills mätningen står.

## Läge (VERIFIED 2026-09-27)
- Live: stahledigital.se/verkstaden/materialraknaren (mr-v31; mr-v32 klar att släppa).
- Användning senaste 7 dygn (Analytics Engine): 7 kalkyler (trall 3, gips 3, inne 1), 0 lista_kopiera, 0 raknaren_till_koll. Räknaren har ett trafikproblem, inte ett innehållsproblem.
- Länkar ut från sidan: 10 till granskaminoffert.se (en per kalkyl), 1 till Synlighetskollen, i princip ingen till själva tjänsten.
- Sidtext: "Ståhle Digital, som bygger hemsidor för hantverkare i Växjö med omnejd" – strider mot Anders princip (ingen låsning till ort/bransch, "din digitala länk" för små och ägarledda företag).
- Kopierad/delad lista slutar med "https://stahledigital.se/raknaren" utan UTM – spridningen via SMS/mejl syns inte.
- Räknar-boost 29/9 finns inte i kön (Zlata 10:39).

## 1. Raden (Anders väljer)
A (rekommenderad): "Troligtvis Sveriges mest genomräknade gratis materialräknare." – ordleken bär, och påståendet går att belägga.
B (Anders original, bra i reels med Anders röst): "Troligtvis den mest påkostade gratis materialräknaren du kommer stöta på."
C: "Gratis. Men troligtvis den noggrannaste du hittar."

Lagkontroll (marknadsföringslagen): GUL-GRÖN. "Troligtvis" + uppenbar överdrift läses som skämt (tillåten allmän överdrift), men ett superlativ kan läsas som sakpåstående, så varje annons/inlägg ska bära bevis i samma ruta: "kontrollerad mot tillverkarnas egna räknare", "källa vid varje förval", antal tester. Förbjudet: "exakt", "alltid rätt", "felfri", "bättre än <tillverkare>s räknare". Behåll "en bra uppskattning, ingen bibel". "Gratis" är sant (ingen betalning, ingen registrering) – fortsätt så.

## 2. Featurekrav till Donatello (mr-v33, liten)
1. Byline vid värdeögonblicket: efter "Kopiera listan"/"Dela" och i sidfoten: "Byggd av Ståhle Digital – vi bygger digitala verktyg och hemsidor för små företag. Se vad vi gör →" länk till https://stahledigital.se/?utm_source=raknaren&utm_medium=verktyg&utm_campaign=raknaren-till-sajt. Diskret, en rad, inte popup.
2. Händelse `raknaren_till_sajt` i verkstaden_handelser (vitlistan).
3. Delad lista: footer-länken → https://stahledigital.se/raknaren?utm_source=delad-lista&utm_medium=sms-mejl (samma synliga text).
4. Rätta textraden "hemsidor för hantverkare i Växjö med omnejd" → "digitala verktyg och hemsidor för små och ägarledda företag". Kontrollera samma formulering i Synlighetskollen (redan flaggad 25/9).
5. Rubrikrad under "Materialräknaren": vald rad från punkt 1 + en belägg-rad ("Kontrollerad mot tillverkarnas egna räknare · källa vid varje förval").
Klart när: live, händelsen syns i AE, UTM syns i Web Analytics. Inga nya kalkylfunktioner i samma släpp.

## 3. Kampanj → Zlata
Se SOCIALA MEDIER/RAKNAREN_TROLIGTVIS_BRIEF_2026-09-27.md.

## 4. Anders egen kanal (0 kr, närmast pengar)
- Visa räknaren i dina IRL-uppföljningar av leads: "Den här byggde jag. Samma noggrannhet lägger jag på din sida." Räknaren är firmans bästa referensbygge.
- Ett inlägg från din privata Facebook som före detta snickare (du publicerar själv), med raden och beviset.

## 5. Mätning och byt-spår
Läses i Moneymans dagliga mätning (06:52) och veckoavstämningen.
- Mål 4 veckor efter mr-v33: ≥ 50 kalkyler/vecka, ≥ 5 raknaren_till_sajt/vecka, delad-lista-besök > 0.
- Annonskrona först när 1–3 mäts. Då test 40 kr/dag × 5 = 200 kr (Anders beslut). Stopp om > 20 kr per kalkyl efter 2 dygn.
- Om < 20 kalkyler/vecka efter 4 veckor med serien ute: räknaren får vara referensbygge och SEO-sida, ingen mer marknadsföringstid – tiden flyttas till Synlighetskollen/kundaffären.
- Svagaste antagandet: att räknarens besökare (många privatpersoner) är eller känner små företagare. UNKNOWN tills raknaren_till_sajt mäts.

## Kritik (Moneyman)
Dagens timmar på räknaren (mr-v31, mr-v32, Astra, Sol) är rätt för trovärdigheten – men nu är den tillräckligt bra för att säljas. Nästa timme ska gå till att folk hittar den, inte till mr-v33-funktioner. Facit-rättningar ja, nya byggdelar vänta tills siffrorna ovan rör sig.
