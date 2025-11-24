document.getElementById("analyzeBtn").addEventListener("click", async () => {
  const text = document.getElementById("input").value
  if (!text.trim()) {
    document.getElementById("result").innerHTML = "<p>Skriv in någon text först.</p>"
    return
  }

  try {
    // Skicka text till servern
    const response = await fetch("/analyze", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ text })
    })

    const data = await response.json()

    if (data.error) {
      document.getElementById("result").innerHTML = `<p>Fel: ${data.error}</p>`
      return
    }

    const html = `
      <hr>
      <h3>Resultat</h3>
      <p><strong>Ord:</strong> ${data.words}</p>
      <p><strong>Meningar:</strong> ${data.sentences}</p>
      <p><strong>Stycken:</strong> ${data.paragraphs}</p>
      <p><strong>Titlar:</strong> ${data.titles.join(", ")}</p>
      <p><strong>Längsta ord:</strong> ${data.longestWord}</p>
      <p><strong>Kortaste ord:</strong> ${data.shortestWord}</p>
      <p><strong>Språk:</strong> ${data.language} (${data.confidence}%)</p>
    `
    document.getElementById("result").innerHTML = html
  } catch (error) {
    document.getElementById("result").innerHTML = `<p>Fel vid analys: ${error.message}</p>`
  }
})