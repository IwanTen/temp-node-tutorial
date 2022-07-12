const http = require("http");
const server = http.createServer((req, res) => {
  if (req.url === "/") {
    return res.end("Home Page");
  } else if (req.url === "/about") {
    res.end("About Page");
    // BLOCKING CODE!
    for (let i = 0; i < 1000; i++) {
      for (let j = 0; j < 100; j++) {
        console.log(j + "," + i);
      }
    }
  } else res.end("Error page");
});

server.listen(4269, () => {
  console.log("port is listening on port 4269 ;)");
});
