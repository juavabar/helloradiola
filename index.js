var http = require('http')

port = (process.env.PORT || 8080)

function onRequest(req, res) {
  console.log("OnRequest: " + (new Date()).toString())
  res.writeHead(200, {"Content-type":"text/plain"})
  res.end('Hello Radiola at ' + (new Date()).toString())
}

var server = http.createServer(onRequest)
server.listen(port)
console.log("Listening on port " + port)

setInterval(function() {
  console.log("Checkpoint: " + (new Date()).toString())
}, 10000)