// Create web server

var http = require('http');
var fs = require('fs');

http.createServer(function (req, res) {
  if (req.url === '/comments') {
    fs.readFile('./comments.json', 'utf-8', function (err, data) {
      if (err) {
        res.writeHead(500, {'Content-Type': 'text/plain'});
        res.end('Internal Server Error');
      } else {
        res.writeHead(200, {'Content-Type': 'application/json'});
        res.end(data);
      }
    });
  } else {
    res.writeHead(404, {'Content-Type': 'text/plain'});
    res.end('Not Found');
  }
}).listen(3000, '