export default class AnalyzeClient {
  async analyze(text) {
    const response = await fetch('/analyze', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ text })
    })
    return response.json()
  }
}