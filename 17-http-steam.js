const http = require("http");
const fs = require("fs");

// const text = fs.readFileSync("./content/big.txt", "utf8");
// res.end(text);

http
  .createServer(function (req, res) {
    const fileStream = fs.createReadStream("./content/big.txt", "utf8");
    fileStream.on("open", () => {
      fileStream.pipe(res);
    });

    fileStream.on("error", (err) => {
      res.end(err);
    });
  })
  .listen(4269);
