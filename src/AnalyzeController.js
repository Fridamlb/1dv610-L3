import DocumentStats from 'document-stats-analyzer'

/**
 * Handles text analysis requests.
 * Acts as the boundary between the HTTP layer and the document-stats-analyzer module.
 */
export default class AnalyzeController {
  /**
   * Validates the request, runs the analysis, and sends a JSON response.
   *
   * @param {import('express').Request} req
   * @param {import('express').Response} res
   */
  analyze(req, res) {
    try {
      const text = this.#extractText(req)
      if (!text) {
        return res.status(400).json({ error: 'Ingen text mottagen' })
      }
      const result = this.#buildAnalysis(text)
      res.json(result)
    } catch (error) {
      console.error('Analyze error:', error)
      res.status(500).json({ error: error.message })
    }
  }

  /**
   * @param {import('express').Request} req
   * @returns {string|null} Trimmed text, or null if empty.
   */
  #extractText(req) {
    const { text } = req.body
    return text && text.trim() ? text : null
  }

  /**
   * Runs document-stats-analyzer and maps the result to a plain response object.
   *
   * @param {string} text
   * @returns {{ words: number, sentences: number, paragraphs: number, titles: string[], longestWord: string, shortestWord: string, language: string, confidence: number }}
   */
  #buildAnalysis(text) {
    const stats = new DocumentStats(text)
    const summary = stats.summary()
    const language = stats.getLanguage()
    return {
      words: summary.words,
      sentences: summary.sentences,
      paragraphs: summary.paragraphs,
      titles: summary.titles,
      longestWord: summary.longestWord,
      shortestWord: summary.shortestWord,
      language: language.language,
      confidence: language.confidence
    }
  }
}