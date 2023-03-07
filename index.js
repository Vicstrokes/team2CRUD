const http = require('http');


require('dotenv').config()

const port = process.env.PORT || 8000

http.createServer(
    (req, res) => {
        res.writeHead(200, { 'Content-Type': 'text/plain' })
        res.write("Hello! Nigeria!")
        res.end()
    }
).listen(port, () => console.log("Server established! "))