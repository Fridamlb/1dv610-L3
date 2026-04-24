import express from 'express'
import AnalyzeController from './AnalyzeController.js'

export default class AppServer {
  #app
  #port
  #controller

  constructor(port, publicDir) {
    this.#port = port
    this.#app = express()
    this.#controller = new AnalyzeController()
    this.#configureMiddleware(publicDir)
    this.#configureRoutes()
  }

  start() {
    this.#app.listen(this.#port, () => {
      console.log(`Server running on http://localhost:${this.#port}`)
    })
  }

  #configureMiddleware(publicDir) {
    this.#app.use(express.static(publicDir))
    this.#app.use(express.json())
  }

  #configureRoutes() {
    this.#app.post('/analyze', (req, res) => this.#controller.analyze(req, res))
  }
}