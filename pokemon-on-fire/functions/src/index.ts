import * as functions from "firebase-functions";
const next = require("next");

// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript
//

console.log(process.env.NODE_ENV);
var dev = process.env.NODE_ENV !== "production";
var app = next({ dev, conf: { distDir: "next" } });
var handle = app.getRequestHandler();
export const helloWorld = functions.https.onRequest((request, response) => {
  console.log("File: " + request.originalUrl); // log the page.js file that is being requested
  return app.prepare().then(() => handle(request, response));
});

// exports.next = functions.https.onRequest((req, res) => {
//   console.log("File: " + req.originalUrl); // log the page.js file that is being requested
//   return app.prepare().then(() => handle(req, res));
// });
