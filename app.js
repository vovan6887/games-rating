const http = require("http");
const path = require("path");
const staticFile = require("./appModules/http-utils/static-file");
const mimeTypes = require("./appModules/http-utils/mime-types");

const mainRouteController = require("./controllers/main");
const defaultRouteController = require("./controllers/default");
const gameRouteController = require("./controllers/game");
const voteRouteController = require("./controllers/vote");
const port = 3005;

const server = http.createServer((req, res) => {
  const url = req.url;
  switch (url) {
    case "/":
      mainRouteController(res, "/index.html", ".html");
      res.statusCode = 200;
      staticFile(res, "/index.html", ".html");
      break;
    case "/vote":
      voteRouteController(req, res);
      break;
    case "/game":
      gameRouteController(res);
      break;
    default:
      defaultRouteController(res, url);
  }
});
server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
