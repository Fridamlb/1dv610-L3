/**
 * Renders analysis results or error messages into a DOM container.
 */
export default class ResultView {
  #container

  /**
   * @param {string} containerId - The id of the DOM element to render into.
   */
  constructor(containerId) {
    this.#container = document.getElementById(containerId)
  }

  /**
   * Displays an error message to the user.
   *
   * @param {string} message
   */
  showError(message) {
    this.#container.innerHTML = `<p>Fel: ${message}</p>`
  }

  /**
   * Renders the analysis result.
   *
   * @param {{ words: number, sentences: number, paragraphs: number, titles: string[], longestWord: string, shortestWord: string, language: string, confidence: number }} data
   */
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