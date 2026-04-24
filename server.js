import path from 'path'
import { fileURLToPath } from 'url'
import AppServer from './src/AppServer.js'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const PORT = process.env.PORT || 3000
const PUBLIC_DIR = path.join(__dirname, 'public')

const server = new AppServer(PORT, PUBLIC_DIR)
server.start()