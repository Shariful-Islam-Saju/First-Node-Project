const url = require("url");
const { StringDecoder } = require("string_decoder");

const handle = {};

handle.handleReqRes = (req, res) => {
  const parsedPath = url.parse(req.url, true);
  const path = parsedPath.pathname;
  const trimmedPathName = path.replace(/^\/+|\/+$/g, "");
  const method = req.method.toLowerCase();
  const queryStiringObj = parsedPath.query;
  const headerObj = req.headers;
  const decoder = new StringDecoder("utf-8");
  let realData = "";

  req.on("data", (buffer) => {
    realData += decoder.write(buffer);
  });

  req.on("end", () => {
    realData += decoder.end();
    res.end("Hello Shariful Islam !!! ");
  });
};

module.exports = handle;
