# Clean Code Reflection

Denna fil dokumenterar hur bokens kapitel 2-11 har påverkat utvecklingen av denna applikation.


## Kapitel 2: Meaningful Names

**Reflektion:**
Jag använde tydliga och beskrivande namn för att göra koden läsbar. Till exempel namngivningen av `analyzeBtn` och `result` på knappar och andra taggar för att gör det omedelbar klart vad gör taggar/kanppar för för att förtydliga läsbarheten. I `app.js` använder jag namn som tillexemepl `DocumentStats`, `summary()` och `getLanguage()` som följer bokens råd om att namn ska avslöja intention. Jag undvek förvirrande förkortningar och använder istället fullständiga namn som `longestWord` och `shortestWord`.

## Kapitel 3: Functions

**Reflektion:**
Mina funktioner är små och gör en sak väl. Event-listenern i `app.js` hanterar användarinteraktionen och delegerar själva analysen till modulen (separation of concerns). Jag undvek långa funktioner och delade upp logiken: en funktion för validering (om text är tom), en för fetching, och en för rendering av resultat.

## Kapitel 4: Comments

**Reflektion:**
Jag minimerade användarkommentarer och fokuserade på att koden själv förklarar sig själv genom tydliga namn. Kommentarerna jag använder är endast där för att förklara **varför** något görs, inte **vad** eller egna kommentarer för mig själv.

## Kapitel 5: Formatting

**Reflektion:**
Koden är konsistent formaterad med 2 spaces indentation. Jag håller raderna korta och läsbara. I `server.js` grupperar jag relaterad kod tillsammans: imports överst, sedan middleware, sedan endpoints. Detta följer bokens rekommendation om att hålla samhörig kod tillsammans för att förbättra läsbarheten.