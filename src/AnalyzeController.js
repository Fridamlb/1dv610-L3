import DocumentStats from 'document-stats-analyzer'

export default class AnalyzeController {
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

  #extractText(req) {
    const { text } = req.body
    return text && text.trim() ? text : null
  }

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