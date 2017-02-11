var http = require('http')

function onRequest(req, res) {
  console.log("OnRequest: " + (new Date()).toString())
  res.writeHead(200, {"Content-type":"text/plain"})
  res.end('Hello Radiola at ' + (new Date()).toString())
}

var server = http.createServer(onRequest)
server.listen(8080)

setInterval(function() {
  console.log("Checkpoint: " + (new Date()).toString())
}, 10000)