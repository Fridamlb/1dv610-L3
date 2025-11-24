import DocumentStats from '../L2-module/src/DocumentStats.js'

document.getElementById("analyzeBtn").addEventListener("click", () => {
    const text = document.getElementById("input").value;

    if (!text.trim()) {
        document.getElementById("result").innerHTML = "<p>Skriv någon text först.</p>"
        return
    }

    const stats = new DocumentStats(text)
    const summary = stats.summary()

    const html = `
        <hr>
        <h3>Resultat</h3>
        <p><strong>Ord:</strong> ${summary.words}</p>
        <p><strong>Meningar:</strong> ${summary.sentences}</p>
        <p><strong>Stycken:</strong> ${summary.paragraphs}</p>
        <p><strong>Titlar:</strong> ${summary.titles.join(", ")}</p>
        <p><strong>Längsta ord:</strong> ${summary.longestWord}</p>
        <p><strong>Kortaste ord:</strong> ${summary.shortestWord}</p>
        <p><strong>Språk:</strong> ${stats.getLanguage().language} (${stats.getLanguage().confidence}%)</p>
    `

    document.getElementById("result").innerHTML = html
})
