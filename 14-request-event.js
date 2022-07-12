const http = require("http");

//const server = http.createServer((req,res)=>{})

//* using Event Emitter API
const server = http.createServer();

//*emits request event

server.on("request", (req, res) => {
  res.end("Welcome");
});

server.listen(4269);
