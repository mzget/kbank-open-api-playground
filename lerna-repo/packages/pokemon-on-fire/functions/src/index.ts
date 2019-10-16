import * as functions from "firebase-functions";
const nextjs = require("next");

// var dev = process.env.NODE_ENV !== "production";
const app = nextjs({
  dev: false,
  conf: { distDir: "next" },
});
const handle = app.getRequestHandler();

// Start writing Firebase Functions
// https://firebase.google.com/docs/functions/typescript
export const next = functions.https.onRequest((request, response) => {
  console.log("File: " + request.originalUrl, process.env.NODE_ENV); // log the page.js file that is being requested
  return app.prepare().then(() => handle(request, response));
  // response.status(200).json({ message: "Hello world" });
});
