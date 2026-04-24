export default class ResultView {
  #container

  constructor(containerId) {
    this.#container = document.getElementById(containerId)
  }

  showError(message) {
    this.#container.innerHTML = `<p>Fel: ${message}</p>`
  }

  showResult(data) {
    this.#container.innerHTML = `
      <hr>
      <h3>Resultat</h3>
      <p><strong>Ord:</strong> ${data.words}</p>
      <p><strong>Meningar:</strong> ${data.sentences}</p>
      <p><strong>Stycken:</strong> ${data.paragraphs}</p>
      <p><strong>Titlar:</strong> ${data.titles.join(', ')}</p>
      <p><strong>Längsta ord:</strong> ${data.longestWord}</p>
      <p><strong>Kortaste ord:</strong> ${data.shortestWord}</p>
      <p><strong>Språk:</strong> ${data.language} (${data.confidence}%)</p>
    `
  }
}