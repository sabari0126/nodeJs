const http = require("http");
const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end("Welcome to our homepage");
    return;
  }
  if (req.url === "/about") {
    res.end("This is a webpage of our short history");
    return;
  }

  res.end(`
  <h1>Oops..!!</h1>
  <p>There might been an error.We can't find your weboage at this time</p>
  <a href="/">Back to home page</a>`);
});

server.listen(5000);
