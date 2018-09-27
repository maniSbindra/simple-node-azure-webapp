var http = require('http');
var port = process.env.port ||  process.env.PORT || 1337;
var appEnvironment = process.env.APP_ENV || " local node";
http.createServer(function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello Pune');
}).listen(port);
console.log("running on port " + port);
