var http = require('http')
var path = require('path')
var url = require('url')

var port = (process.env.PORT || 8080)

function onRequest(req, res) {
  var pathname = url.parse(req.url).pathname
  console.log("OnRequest: " + pathname + " " + (new Date()).toString())
  res.writeHead(200, {"Content-type":"text/plain"})
  var text = 'Hello Radiola-case1 at ' + (new Date()).toString()
  if (pathname === '/case2') {
    text = 'Hello Radiola-case2 at ' + (new Date()).toString()
  }
  else if (pathname === '/case3') {
    throw new Error('ForcedException')
  }
  res.end(text)
}

var server = http.createServer(onRequest)
server.listen(port)
console.log("Listening on port " + port)

setInterval(function() {
  console.log("Checkpoint: " + (new Date()).toString())
}, 10000)