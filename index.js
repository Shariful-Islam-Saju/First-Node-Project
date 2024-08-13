const http = require("http");
const url = require("url");
const app = {};
app.config = {
  port: 3000,
};
app.server = () => {
  const myServer = http.createServer(app.handleReq);
  myServer.listen(app.config.port, () => {
    console.log(`http://localhost:${app.config.port}/`);
  });
};

app.handleReq = (req, res) => {
  const parsedPath = url.parse(req.url, true);
  const path = parsedPath.pathname;
  const trimmedPathName = path.replace(/^\/+|\/+$/g, "");
  const method = req.method.toLowerCase();
  const queryStiringObj = parsedPath.query;
  const headerObj = req.headers;

  res.end("Hello Shariful Islam !!! ");
  
};

app.server();
