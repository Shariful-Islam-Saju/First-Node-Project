const http = require("http");
const { handleReqRes } = require("./helper/handleReqRes");
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

app.handleReq = handleReqRes;

app.server();
