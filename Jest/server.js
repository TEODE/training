/**
 * Created by vincent on 11/11/15.
 */
var http = require('http');

http.createServer(function(request, response) {
    response.writeHead(200, {"Content-Type": "application/json"});
    var json = JSON.stringify({
        firstName: "John",
        lastName: "Doe"
    });
    response.end(json);
}).listen(8000);