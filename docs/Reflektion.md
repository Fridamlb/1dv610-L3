# Clean Code Reflection

Denna fil dokumenterar hur bokens kapitel 2-11 har påverkat utvecklingen av denna applikation.


## Kapitel 2: Meaningful Names

**Reflektion:**
Jag använde tydliga och beskrivande namn för att göra koden läsbar och har fokuserat på namn som ska avsölja avsikten (Intent-Revealing Names). Istället för generiska variabelnamn använder jag t.ex. `extractText` och `buildAnalysis` i `AnalyzeController.js`. Jag undvek förvirrande förkortningar (Mental mapping) och använder istället fullständiga namn som `longestWord` och `shortestWord`.

**Exempel från AnalyzeController.js:**

![exampel from AlayzeController.js:](/Screenshots/example-kap2.png)

## Kapitel 3: Functions

**Reflektion:**
Mina funktioner är små och gör en sak väl. Event-listenern i `app.js` hanterar användarinteraktionen och delegerar själva analysen till modulen (separation of concerns). Jag undvek långa funktioner och delade upp logiken: en funktion för validering (om text är tom), en för fetching, och en för rendering av resultat.

## Kapitel 4: Comments

**Reflektion:**
Jag minimerade användarkommentarer och fokuserade på att koden själv förklarar sig själv genom tydliga namn. Kommentarerna jag använder är endast där för att förklara **varför** något görs, inte **vad** eller egna kommentarer för mig själv.

## Kapitel 5: Formatting

**Reflektion:**
Koden är konsistent formaterad med 2 spaces indentation. Jag håller raderna korta och läsbara. I `server.js` grupperar jag relaterad kod tillsammans: imports överst, sedan middleware, sedan endpoints. Detta följer bokens rekommendation om att hålla samhörig kod tillsammans för att förbättra läsbarheten.

## Kapitel 6: Formatting
## Kapitel 7: Formatting
## Kapitel 8: Formatting
## Kapitel 9: Formatting
## Kapitel 10: Formatting
## Kapitel 11: Formatting