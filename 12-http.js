const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end("Welcome to our homepage");
  }
  if (req.url === "/about") {
    res.end("here is out short history - Iwan is litty");
  }
  res.end(
    '<h1 style = "color:red; font-family:sans-serif;"> oops! theres nothing here my guy </h1>'
  );
});

server.listen(5000);

// res.write("Welcome to our home page");
// res.end();
