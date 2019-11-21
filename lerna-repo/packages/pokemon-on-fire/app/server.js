const { createServer } = require("https");
const { parse } = require("url");
const next = require("next");
const { readFileSync } = require("fs");

const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();
const port = 3000;

const httpsOptions = {
  key: readFileSync("./certs/localhost.key"),
  cert: readFileSync("./certs/localhost.crt")
};

app.prepare().then(() => {
  createServer(httpsOptions, (req, res) => {
    // Be sure to pass `true` as the second argument to `url.parse`.
    // This tells it to parse the query portion of the URL.
    const parsedUrl = parse(req.url, true);
    const { pathname, query } = parsedUrl;

    handle(req, res, parsedUrl);
  }).listen(port, err => {
    if (err) throw err;
    console.log("> Ready on https://localhost:3000");
  });
});
