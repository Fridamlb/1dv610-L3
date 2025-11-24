import express from 'express'
import path from 'path'
import { fileURLToPath } from 'url'
import DocumentStats from './L2-module/src/DocumentStats.js'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const app = express()
const PORT = process.env.PORT || 3000

app.use(express.static(path.join(__dirname, 'public')))
app.use(express.json())

// POST endpoint för analys
app.post("/analyze", (req, res) => {
  try {
    const { text } = req.body

    if (!text || !text.trim()) {
      return res.status(400).json({ error: "Ingen text mottagen" })
    }

    // Modulen
    const stats = new DocumentStats(text)
    const summary = stats.summary()

    // Skicka tillbaka resultatet
    res.json({
      words: summary.words,
      sentences: summary.sentences,
      paragraphs: summary.paragraphs,
      titles: summary.titles,
      longestWord: summary.longestWord,
      shortestWord: summary.shortestWord,
      language: language.language,
      confidence: language.confidence
    })
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
})

// Start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`)
})