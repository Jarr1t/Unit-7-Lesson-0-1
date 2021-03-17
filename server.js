const http = require("http")

const hostName = "127.0.0.1"

const port = 8000

const server = http.createServer()

server.listen(port, () => {
    console.log(`Server running at http://${hostName}:${port}/`)
})