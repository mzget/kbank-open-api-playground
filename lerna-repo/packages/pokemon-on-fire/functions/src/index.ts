import * as functions from "firebase-functions";
import { api } from "./api";

const nextjs = require("next");

// var dev = process.env.NODE_ENV !== "production";
const app = nextjs({
  dev: false,
  conf: { distDir: "next" }
});
const handle = app.getRequestHandler();

// Start writing Firebase Functions
// https://firebase.google.com/docs/functions/typescript
const next = functions.https.onRequest((request, response) => {
  // log the page.js file that is being requested
  console.log("File: " + request.originalUrl, process.env.NODE_ENV);
  return app.prepare().then(() => handle(request, response));
});

export { next, api };
