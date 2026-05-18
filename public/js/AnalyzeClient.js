/**
 * Handles HTTP communication with the /analyze endpoint.
 */
export default class AnalyzeClient {
  /**
   * Sends text to the server for analysis.
   *
   * @param {string} text - The text to analyze.
   * @returns {Promise<object>} Parsed JSON response from the server.
   */
  async analyze(text) {
    const response = await fetch('/analyze', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ text })
    })
    return response.json()
  }
}