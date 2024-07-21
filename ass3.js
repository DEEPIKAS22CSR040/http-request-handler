var http = require("http");
var fs = require("fs");

var server = http.createServer(function (request, response) {
    if (request.url == "/") {
        response.writeHead(200, { "Content-Type": "text/html" });
        response.write("<h1>Welcome to Home Page</h1>");
        response.end("<html><body>This home page url is :" + request.url + "</body></html>");

    } else if (request.url == "/ass1") {
       
        fs.readFile(__dirname + "/mode_form.html", function (err, data) {
            if (err) {
                response.writeHead(404, { "Content-Type": "text/html" });
                return response.end("404 Not Found");
            }
            response.writeHead(200, { "Content-Type": "text/html" });
            response.write(data);
            response.end();
        });

    } else if (request.url == "/ass2") {
       
        fs.readFile(__dirname + "/GRADE_CGPA.html", function (err, data) {
            if (err) {
                response.writeHead(404, { "Content-Type": "text/html" });
                return response.end("404 Not Found");
            }
            response.writeHead(200, { "Content-Type": "text/html" });
            response.write(data);
            response.end();
        });

    } else {
        response.end("Invalid Request");
    }
});
server.listen(5000);
