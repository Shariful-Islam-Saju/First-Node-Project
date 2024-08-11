const http = require("http");
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
  res.end("Hello World");
};


app.server()