const http = require("http");

const fs = require("fs").promises

const reqListner = function(request, response) {
  console.log(request.url);

  if (request.url === "/") {
    fs.readFile(__dirname + "/page.html")
      .then(
        contentsOfFile => {
          response.setHeader("Content-Type", "text/html; charset=UTF-8");
          response.writeHead(200);
          response.end(contentsOfFile);
        }
      );
  }
  else {
    fs.readFile(__dirname + "/data.json")
      .then(
        contentsOfFile => {
          response.setHeader("Content-Type", "application/json; charset=UTF-8");
          response.writeHead(200);
          response.end(contentsOfFile);
        }
      );
  }
};

const server= http.createServer(reqListner); 

const host = "0.0.0.0";
const port = 8080;

server.listen(
  port,
  host,
  
  ()=> {
    console.log("Server is up and running!")
  }
); 
