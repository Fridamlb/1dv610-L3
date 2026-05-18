# Document Analyzer

En webbapplikation som analyserar text och ger statistik om innehållet — antal ord, meningar, stycken, titlar, längsta och kortaste ord samt vilket språk texten är skriven på.

Live: https://onedv610-l3-ngy3.onrender.com/

---

## How to use

1. Gå till https://onedv610-l3-ngy3.onrender.com/
2. Klistra in eller skriv din text i textfältet
3. Klicka på **Analysera**
4. Resultatet visas direkt under knappen

---

## What it does

Applikationen tar emot en text och returnerar en analys med följande information:

- Antal ord
- Antal meningar
- Antal stycken
- Titlar/rubriker identifierade i texten
- Längsta ordet
- Kortaste ordet
- Vilket språk texten är skriven på, med en konfidenspoäng i procent

---

## Features

- Realtidsanalys via knapptryck
- Felhantering — användaren får alltid feedback om något går fel
- Språkdetektering med konfidenspoäng
- Rensat och strukturerat resultat presenterat i webbläsaren

---

## Tech stack

**Frontend**
- HTML, CSS, JavaScript (vanilla)
- `AnalyzeApp` — koordinerar användarinteraktion
- `AnalyzeClient` — hanterar HTTP-kommunikation mot API:et
- `ResultView` — renderar resultat och felmeddelanden i DOM:en

**Backend**
- Node.js
- Express

**Modul**
- [`document-stats-analyzer`](https://github.com/Fridamlb/1DV610-L2) — egenbyggd modul (från L2) som utför själva textanalysen

**Deployment**
- Render

---

## Project structure

```
├── server.js                   # Startpunkt – sätter ihop systemet
├── public/
│   ├── index.html              # Användargränssnittet
│   ├── style.css               # Styling
│   ├── app.js                  # Klient-startpunkt
│   └── js/
│       ├── AnalyzeApp.js       # Hanterar användarinteraktion
│       ├── AnalyzeClient.js    # Skickar POST-anrop till API:et
│       └── ResultView.js       # Renderar resultat i DOM:en
└── src/
    ├── AppServer.js            # Konfigurerar Express-servern
    └── AnalyzeController.js    # Tar emot och hanterar analysanrop
```

**Flöde:**
1. Användaren skriver in text och klickar Analysera
2. `AnalyzeApp` validerar att fältet inte är tomt
3. `AnalyzeClient` skickar en POST-request till `/analyze`
4. `AppServer` dirigerar anropet till `AnalyzeController`
5. `AnalyzeController` kör `document-stats-analyzer` och returnerar JSON
6. `ResultView` renderar svaret i webbläsaren

---

## Limitations

- Språkdetekteringen kan ge osäkra resultat för korta texter eller texter med blandade språk
- Applikationen är hostad på Renders gratisplan och kan ha en kort uppstartstid (~30 sekunder) om den inte använts på ett tag
- Inga tester är implementerade i nuläget

---

## License

MIT License 

---

## Author

Frida Berg 
