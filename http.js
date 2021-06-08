var http = require('http');

// Create an http server
var server = http.createServer((req,res) => {
    res.write('<b>Node http in action!</b>');
    res.end();
})

server.listen(8080);