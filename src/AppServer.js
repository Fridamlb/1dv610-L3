import express from 'express'
import AnalyzeController from './AnalyzeController.js'

/**
 * Configures and starts the Express HTTP server.
 */
export default class AppServer {
  #app
  #port
  #controller

  /**
   * @param {number} port - Port number to listen on.
   * @param {string} publicDir - Absolute path to the static files directory.
   */
  constructor(port, publicDir) {
    this.#port = port
    this.#app = express()
    this.#controller = new AnalyzeController()
    this.#configureMiddleware(publicDir)
    this.#configureRoutes()
  }

  /**
   * Starts listening for incoming requests.
   */
  start() {
    this.#app.listen(this.#port, () => {
      console.log(`Server running on http://localhost:${this.#port}`)
    })
  }

  /**
   * @param {string} publicDir - Path to static files directory.
   */
  #configureMiddleware(publicDir) {
    this.#app.use(express.static(publicDir))
    this.#app.use(express.json())
  }

  #configureRoutes() {
    this.#app.post('/analyze', (req, res) => this.#controller.analyze(req, res))
  }
}