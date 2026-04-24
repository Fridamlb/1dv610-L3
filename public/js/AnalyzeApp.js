import AnalyzeClient from './AnalyzeClient.js'
import ResultView from './ResultView.js'

export default class AnalyzeApp {
  #api
  #view
  #input
  #button

  constructor() {
    this.#api = new AnalyzeClient()
    this.#view = new ResultView('result')
    this.#input = document.getElementById('input')
    this.#button = document.getElementById('analyzeBtn')
  }

  start() {
    this.#button.addEventListener('click', () => this.#handleClick())
  }

  async #handleClick() {
    const text = this.#input.value
    if (!text.trim()) {
      this.#view.showError('Skriv in någon text först.')
      return
    }
    try {
      const data = await this.#api.analyze(text)
      if (data.error) {
        this.#view.showError(data.error)
        return
      }
      this.#view.showResult(data)
    } catch (error) {
      this.#view.showError(error.message)
    }
  }
}