var http = require("http");
var fs = require("fs");

// Create an http server
var server = http.createServer((req, res) => {
  res.write('<p><b>Node http in action!</b></p>');
  // Return a JSON Responce
  fs.readFile("data.json", "utf-8", (err, data) => {
    if (err) throw err;
    res.write(data);
    res.end();
  });
});

server.listen(8080);
