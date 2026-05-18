# Clean Code Reflection

Denna fil dokumenterar hur bokens kapitel 2-11 har påverkat utvecklingen av denna applikation.


## Kapitel 2: Meaningful Names

**Reflektion:**
Jag använde tydliga och beskrivande namn för att göra koden läsbar och har fokuserat på namn som ska avsölja avsikten (Intent-Revealing Names). Istället för generiska variabelnamn använder jag t.ex. `extractText` och `buildAnalysis` i `AnalyzeController.js`. Jag undvek förvirrande förkortningar (Mental mapping) och använder istället fullständiga namn som `longestWord` och `shortestWord`.

**Exempel från AnalyzeController.js:**

![exampel from AlayzeController.js:](/Screenshots/example-kap2.png)

## Kapitel 3: Functions

**Reflektion:**
Mina funktioner är små och gör en sak väl (Single Responsibility). I AnalyzeController.js delade jag upp logiken i #extractText() och #buildAnalysis() istället för att ha allt i analyze(). Detta följer bokens regel om "One Level of Abstraction per Function" analyze()metoden läser nästan som en berättelse på hög abstraktionsnivå, medan detaljerna ligger i de privata hjälpmetoderna.

**Exempel från AnalyzeController.js:**

## Kapitel 4: Comments

**Reflektion:**
Jag minimerade användarkommentarer och fokuserade på att koden själv förklarar sig själv genom tydliga namn. Kommentarerna jag använder är endast JSdocs. 



## Kapitel 5: Formatting

**Reflektion:**
Koden är konsistent formaterad med 2 spaces indentation. Jag håller raderna korta och läsbara. I `server.js` grupperar jag relaterad kod tillsammans: imports överst, sedan middleware, sedan endpoints. Detta följer bokens rekommendation om att hålla samhörig kod tillsammans för att förbättra läsbarheten.

## Kapitel 6: Objects and Data Structures

**Reflektion:**
Jag följde bokens princip om Data/Object Anti-Symmetry genom att skapa riktiga objekt med beteende, inte bara datastrukturer. ResultsView exponerar inte sin interna #container utan erbjuder istället beteendet via showError() och showResult(). På samma sätt döljer AnalyzeClient HTTP-detaljerna bakom en enkel analyze(text)-metod.
Detta är "Tell, Don't Ask" i praktiken — AnalyzeApp säger åt ResultView att visa något, istället för att fråga om dess interna tillstånd och själv manipulera DOM:en.

## Kapitel 7: Error Handling

**Reflektion:**
jag använder try/catch där det behvös men hanterar fel på ett sätt som inte förstår logiken. I AnalyzeController.js fångas oväntade fel och retuneras som JSON-svar med statuskod 500, medan förväntade fel (t.ex tom text) hanteras som 400-fel utan exception. Detta följer bokens råd att skilja på normal flow och error handling. 

På klientsidan i AnalyzeApp.js gpngar #handleClick() fel från API-anropet och visar dem via view.showError(). Användaren får alltid feedback. Jag retunerar heller aldrig null från publika metoder vilket boken varnar för.

## Kapitel 8: Boundaries

**Reflektion:**
Detta kapitlet handlar om hur man hanterar gränser mot tredhepartskod. Jag använder min egna modul "document-stats-analyser" från L2 endast genom AnalzyeController, vilket inkapslar tredjepartsberoendet. Resten av applikationen vet ingenting om modulen. om jag byter ut den behöver jag bara ändra i #buildAnalysis()

På samma sätt isolerar AnalyzeClient fetch-anropet. Om jag sneare vill byta till axios eller ettt annat HTTP-bibliotek påvärkas bara den klassen. Detta är bokens princip om att Wrap tredjepartskod för att skydda sig från förändringar.

## Kapitel 9: Unit Tests

**Reflektion:**
Tack vare att klasserna är små och har tydligt ansvar är de lätta att testa isolerat. AnalyzeController kan testas utan att starta express genom att mocka req och res. ResultView kan testats genom att verifiera Dom-innehåll efter anrop. 

Klasserna följer F.I.R.S.T. principerna, de är Fasy (ingen tung intiiering) Independent (ingen delad state mellan instanser) och Repeatable (deterministisk, analyze() ger samma resultat för samma indata) 

## Kapitel 10: Classes
**Reflektion:**
Klasserna är små och har ett enda ansvar (Single Responsibility Principle) AnalyzeClient har bara ansvar för HTTP-kommunikation, ResultView har bara ansvar för rendering, AnalyzeController har bara ansvar för att koordinera analys-requests, och APPServer har bara ansvar för serverkonfiguration. 

jah har också hållit så mycket som möjligt privat med #-prefix (private fields) Det följer bokens råd om encapsulation att exponera minsta möjliga yta. Endast Start() och analyze() är publika eftersom det är de enda metoder som behöver anropas utifrån. Inga statiska metoder används. Alla metoder är instansmoetoder som arbetar mot klassens tillstånd, vilket gör det enklare att testa och byta ut implementationer. 

## Kapitel 11: Systems

**Reflektion:**
Boken förespråkar om att seoerera konstruktion (composition) från användning. Jag följer detta i server.js den filen är ansvarig för att sätta ihop systemet genom att skapa AppServer med rätt port och katalog men innehåller ingen affärslogik. På klientsidan gör app.js samma sak genom att skapa AnalyzeApp och anropar start()

Detta gör att klasserna i sig inte är beroende av specifika konfigurationer. AppServer får sin port och publika mapp injicerade via constructorn (Dependency injection) vilket för den flexibel och testbar. Detta följer bokens princip om att main funktionen ska vara den enda platsen där systemets delar kopplas ihop. 
